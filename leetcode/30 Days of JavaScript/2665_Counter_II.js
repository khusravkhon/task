/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let i = 0;
  let currentValue = init;
  return {
    increment: () => ++currentValue,
    reset: () => (currentValue = init),
    decrement: () => --currentValue,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
