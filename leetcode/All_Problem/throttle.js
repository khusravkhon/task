function throttle(callee, t) {
  let timer;
  return function perfom(...args) {
    if (timer) return;
    timer = setTimeout(() => {
      callee(...args);
      timer = null;
    }, t);
  };
}

function throttle2(callee, t) {
  let hasFun = false;

  return function (...args) {
    if (hasFun) return;

    callee.apply(this, ...args);
    hasFun = true;

    setTimeout(() => {
      hasFun = false;
    }, t);
  };
}
