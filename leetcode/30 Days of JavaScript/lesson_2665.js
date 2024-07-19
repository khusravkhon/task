/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let i = 0;
  let curretValue = init;
  return {
    increment: () => init + ++i,
    reset: () => init + --i,
    decrement: () => {
      return (curretValue = init);
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
