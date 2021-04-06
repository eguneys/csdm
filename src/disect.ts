import { mt } from 'chers';

export type MergeA<A> = (children: Array<A>) => A
export type StringToA<A> = (_: string) => A
  
export type DisectMap<A> = {
  fen: StringToA<A>,
  content: MergeA<A>,
  oneMove: MergeA<A>,
  twoMove: MergeA<A>,
  cMove: MergeA<A>,
  paragraph: MergeA<A>,
  newline: StringToA<A>,
  headline: StringToA<A>,
  text: StringToA<A>,
  line: StringToA<A>,
  san: StringToA<A>,
  zeroTurn: StringToA<A>,
  oneTurn: StringToA<A>,
  expandCode: (_: A) => Array<A>,
  glyphs: () => Array<A>,
  board: (ply: number, line: string) => A,
  move: (ply: number, asan: A, aglyphs: Array<A>, line: string, pline?: string) => A
}

export class Disect<A> {

  d: DisectMap<A>
  
  constructor(d: DisectMap<A>) {
    this.d = d;
  }

  zTurn2Ply({ zeroturn }: mt.ZeroTurn) {
    return parseInt(zeroturn);
  }

  oTurn2Ply({ oneturn }: mt.OneTurn) {
    return parseInt(oneturn);
  }
  
  plyToShowTurn(plyS: string): string {
    let ply = parseInt(plyS);
    return Math.ceil(ply / 2) + (ply% 2 === 1 ? '.' : '...');
  }
  
  oneTurn({ oneturn }: mt.OneTurn) {
    return this.d.oneTurn(this.plyToShowTurn(oneturn));
  }

  zeroTurn({zeroturn}: mt.ZeroTurn) {
    return this.d.zeroTurn(this.plyToShowTurn(zeroturn));
  }

  glyphs({moveGlyph, posGlyph, obsGlyph }: mt.MPOGlyphs) {
    return this.d.glyphs();
  }

  san(sanWithCastles: mt.SanWithCastles) {
    if (typeof sanWithCastles === 'string') {
      return this.d.san(sanWithCastles);
    } else {
      return this.d.san(sanWithCastles.san);
    }
  }

  fen({fen}: mt.Fen) {
    return this.d.fen(fen);
  }

  twoMove({tmove}: mt.TwoMove, line: mt.Line, pline?: mt.Line) {
    return this.d.twoMove([
      this.oneMove(tmove[0], line, pline),
      this.move(this.zTurn2Ply(tmove[0].omove[0]) + 1, tmove[1], line, pline)
    ]);
  }
  
  oneMove({omove}: mt.OneMove, line: mt.Line, pline?: mt.Line) {
    return this.d.oneMove([
      this.zeroTurn(omove[0]),
      this.move(this.zTurn2Ply(omove[0]), omove[1], line, pline)
    ])
  }

  cMove({ cmove }: mt.ContinueMove, line: mt.Line, pline?: mt.Line) {
    return this.d.cMove([
      this.oneTurn(cmove[0]),
      this.move(this.oTurn2Ply(cmove[0]), cmove[1], line, pline)
    ]);
  }

  move(ply: number, { move }: mt.Move, line: mt.Line, pline?: mt.Line) {
    return this.d.move(ply, this.san(move[0]), this.glyphs(move[1]), line.line, pline?.line);
  }

  moves({ continueMove, twoMoves, oneMove }: mt.Moves,
        line: mt.Line,
        pline?: mt.Line) {
    let children = [];

    if (continueMove) {
      children.push(this.cMove(continueMove, line, pline));
    }

    if (twoMoves) {
      children = children
        .concat(twoMoves.map(_ => this.twoMove(_, line, pline)));
    }

    if (oneMove) {
      children.push(this.oneMove(oneMove, line, pline));
    }

    return children;
  }
  
  lineAndFen({lineAndFen}: mt.LineAndFen) {
    return this.fen(lineAndFen[1]);
  }
  
  lineAndMoves({lineAndMoves}: mt.LineAndMoves) {
    return this.moves(lineAndMoves[1], lineAndMoves[0]);
  }

  lineLineMoves({linelineMoves}: mt.LineLineMoves) {
    return this.moves(linelineMoves[2], linelineMoves[0], linelineMoves[1]);
  }
  
  code(code: mt.Code) {
    if (mt.isLineAndFen(code)) {
      return [this.lineAndFen(code)];
    } else if (mt.isLineLineMoves(code)) {
      return this.lineLineMoves(code);
    } else {
      return this.lineAndMoves(code);
    }
  }

  paragraph({ paragraph }: mt.Paragraph) {
    return this.d.paragraph(paragraph.flatMap(_ => {
      if (mt.isText(_)) {
        return this.text(_);
      } else {
        return this.code(_).flatMap(this.d.expandCode)
      }
    }));
  }
  
  content({ content }: mt.Content) {
    return this.d.content(content.map(_ => {
      if (mt.isNewline(_)) {
        return this.newline(_);
      } else if (mt.isHLine(_)) {
        return this.headline(_);
      } else if (mt.isParagraph(_)) {
        return this.paragraph(_);
      } else {
        return this.board(_);
      }
    }));
  }

  board({ board: [{line}, ply]}: mt.Board) {
    return this.d.board(parseInt(ply), line);
  }

  newline({newline}: mt.NewLine) {
    return this.d.newline(newline);
  }

  headline({ hline }: mt.HLine) {
    return this.d.headline(hline);
  }

  text({text}: mt.Text2) {
    return this.d.text(text);
  }

  line({line}: mt.Line) {
    return this.d.line(line);
  }

}
