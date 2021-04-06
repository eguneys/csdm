import Ctrl from './ctrl';

export default class Api {
  
  ctrl: Ctrl

  constructor(ctrl: Ctrl) {
    this.ctrl = ctrl;
  }

  md(md: string) {
    this.ctrl.md(md);
    this.ctrl.redraw();
  }
}
