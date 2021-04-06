import { VNode, h } from 'snabbdom';
import Ctrl from './ctrl';
import { Disect, DisectMap } from './disect';
import { line as l } from 'enil';
import ssehC from 'ssehc';
import * as u from './util';

export type VNodeS = VNode | string

export function dMap(ctrl: Ctrl, builder: l.Builder): DisectMap<VNodeS> {

  let board = vBoard(ctrl, builder),
  move = vMove(ctrl, builder);
  
  return {
    board,
    move,
    fen(fen: string) {
      return h('span.fen', fen);
    },
    newline(newline: string) {
      return h('span.newline');
    },
    headline(headline: string) {
      return h('h2', headline);
    },
    text(text: string) {
      return h('span', text);
    },
    line(line: string) {
      return h('span.line', line);
    },
    san(san: string) {
      return h('span.san', san);
    },
    zeroTurn(turn: string) {
      return h('strong.zeroturn', turn);
    },
    oneTurn(turn: string) {
      return h('strong.oneturn', turn);
    },
    glyphs() {
      return [];
    },
    expandCode(_: VNodeS) {
      return [_, ' '];
    },
    content(_: Array<VNodeS>) {
      return h('div.content', _);
    },
    paragraph(_: Array<VNodeS>) {
      return h('div.p', _);
    },
    oneMove(_: Array<VNodeS>) {
      return h('span.omove', _);
    },
    twoMove(_: Array<VNodeS>) {
      return h('span.tmove', _);
    },
    cMove(_: Array<VNodeS>) {
      return h('span.cmove', _);
    }
  };
};

function vBoard(ctrl: Ctrl, builder: l.Builder) {
  return (ply: number, line: string) => {
    let fen: string | undefined,
    lastMove: string | undefined;

    if (ply === 0) {
      let view = builder.zeroPly(line);
      fen = view?.fen;
    } else {
      let view = builder.plyMove(line, ply);
      fen = view?.after.fen;
      lastMove = view?.uci;
    }
    
    return h('div.board', {
      hook: {
        insert(vnode) {

          ctrl.addVBoard(vnode.elm as Element);
          
          ssehC(vnode.elm as Element, {
            fen,
            lastMove
          })
        }
      }
    });
  };
}

function vMove(ctrl: Ctrl, builder: l.Builder) {
  return (ply: number, asan: VNodeS, aglyphs: Array<VNodeS>, line: string, pline?: string) => {
    let move = builder.plyMove(line, ply),
    err = builder.plyErr(line, ply);

    let attrs: any = {};

    if (err.length > 0) {
      attrs['data-error'] = err[0];
      attrs['title'] = err[0];
    }

    return h('div.move', {
      hook: {
        insert(vnode) {
          let $elm: Element = vnode.elm as Element;

          ['mouseover', 'touchstart'].forEach(_ =>
            $elm.addEventListener(_, () => {
              ctrl.doHover($elm, move);
              ctrl.redraw();
            }));

          ['mouseleave', 'touchend'].forEach(_ => {
            $elm.addEventListener(_, () => {
              ctrl.deHover();
              ctrl.redraw();
            });
          });

          $elm.addEventListener('click', () => {
            ctrl.click(move?.after.fen);
          });
        }
      },
      ...attrs
    }, [h('span.san', move?.san) || asan,
        ...aglyphs]);
  };
}

function translateAbs(pos: [number, number]) {
  return `translate(${pos[0]}px,${pos[1]}px)`;
}

function vHover(ctrl: Ctrl) {

  let { active, view, posToTranslate } = ctrl.hover;
  
  return h('div.hover-board', {
    class: { hidden: !active },
    style: {
      transform: translateAbs(posToTranslate)
    },
    hook: {
      insert(vnode) {

        ctrl.setHBounds(vnode.elm as Element);
        
        ctrl.setHoverSS(ssehC(vnode.elm as Element, {
          fen: view?.after.fen,
          lastMove: view?.uci
        }));
      }
    }
  });
  
}

export default function view(ctrl: Ctrl) {

  let children: Array<VNode|string>;
  
  if (ctrl.mcline) {
    let disect = new Disect(dMap(ctrl, ctrl.mcline[1]));
    children = [
      disect.content(ctrl.mcline[0]),
      vHover(ctrl)
    ];
  } else {
    children = [h('span', 'Failed to load content.')];
  }

  return h('div.csdm', {
    hook: {
      insert(vnode) {
        ctrl.setCsBounds(vnode.elm as Element);
        u.listenEndScroll(() => ctrl.syncVisibleBoards());
      }
    }
  }, children);

}
