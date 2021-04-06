
export function isInViewport(bounds: ClientRect) {
  return bounds.top >= 0 &&
    bounds.left >= 0 &&
    bounds.bottom <= window.innerHeight &&
    bounds.right <= window.innerWidth;
}

// https://stackoverflow.com/questions/35939886/find-first-scrollable-parent
export function getScrollParent(node: Node | null): Node | null {
  if (node == null) {
    return null;
  }
  if ((node as Element).scrollHeight > (node as Element).clientHeight) {
    return node;
  } else {
    return getScrollParent(node.parentNode);
  }
}

export function listenEndScroll(onEndScroll: () => void) {
  let isScrolling: number;
  document.addEventListener('scroll', function(event) {
    clearTimeout(isScrolling);
    isScrolling = window.setTimeout(() => onEndScroll(), 60);
  }, { capture: true, passive: false });
}

export type Memo<A> = {
  (): A,
  clear: () => void
}

export function memo<A>(f: () => A): Memo<A> {
  let v: A | undefined;
  const ret = (): A => {
    if (v === undefined) v = f();
    return v;
  };
  ret.clear = () => {
    v = undefined;
  };
  return ret;
}
