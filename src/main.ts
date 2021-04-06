import { VNode,
         init,
         classModule,
         styleModule } from 'snabbdom';

import { Config } from './config';
import view from './view';
import Ctrl from './ctrl';
import Api from './api';

const patch = init([
  styleModule,
  classModule]);

export default function main($_: Element, opts: Config) {

  let vnode: VNode, ctrl: Ctrl;
  
  function redraw() {
    vnode = patch(vnode, view(ctrl));
  }

  ctrl = new Ctrl(opts, redraw);
  
  vnode = patch($_, view(ctrl));

  return new Api(ctrl);
}
