import { Config } from './config';
import { mt, default as chers } from 'chers';
import { line as l } from 'enil';
import { codes } from 'sedoc';
import { api as SSApi } from 'ssehc';
import * as u from './util';

export type Redraw = () => void;

export type Hover = {
  active: boolean,
  view?: l.MoveView,
  posToTranslate: [number, number]
}

export default class Ctrl {

  onClick?: (fen: string) => void
  mcline?: [mt.Content, l.Builder]
  redraw: Redraw
  hoverSS!: SSApi
  hover: Hover
  csBounds!: u.Memo<ClientRect>
  hBounds!: u.Memo<ClientRect>
  vBBounds: u.Memo<ClientRect | undefined>
  v$Boards: Array<Node>

  constructor(config: Config, redraw: Redraw) {

    this.onClick = config.onClick;
    
    this.v$Boards = [];

    this.vBBounds = u.memo(() =>
      this.v$Boards
        .map(_ => (_ as Element).getBoundingClientRect())
        .find(_ => u.isInViewport(_)));

    this.md(config.md || '');
    this.redraw = redraw;
    this.hover = {
      active: false,
      posToTranslate: [0, 0]
    }
  }

  md(md: string) {
    let mc = chers(md);
    if (mc) {
      this.mcline = [mc, codes(mc)];
    }
  }

  addVBoard($_: Element) {
    this.v$Boards.push($_);
  }

  setHoverSS(hoverSS: SSApi) {
    this.hoverSS = hoverSS;
  }

  setCsBounds(_: Element) {
    this.csBounds = u.memo(() => _.getBoundingClientRect());
  }

  setHBounds(_: Element) {
    this.hBounds = u.memo(() => _.getBoundingClientRect());
  }

  syncVisibleBoards() {
    this.vBBounds.clear();
  }

  calcHoverPos($elm: Element) {
    let res: [number, number] = [0, 0];

    let vbBounds = this.vBBounds();
    if (vbBounds) {
      res[0] += vbBounds.left;
      res[1] += vbBounds.top;
    } else {
      let offBounds = $elm.getBoundingClientRect();
      if (offBounds.left - this.csBounds().left < this.csBounds().width / 2) {
        res[0] += this.csBounds().width - this.hBounds().width - 4;
      }
    }
    return res;
  }

  doHover($elm: Element, view?: l.MoveView) {
    this.hover.posToTranslate = this.calcHoverPos($elm);
    this.hover.view = view;
    this.hover.active = true;
    if (view) {
      this.hoverSS.fen(view.after.fen);
      this.hoverSS.lastMove(view.uci);
    }
  }

  deHover() {
    this.hover.active = false;
  }

  click(fen: string | undefined) {
    if (this.onClick) {
      this.onClick(fen || '');
    }
  }
  
}
