/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const result = {};
  for (let index = 0; index < this.length; index++) {
    const key = fn(this[index]);
    if (result[key] == undefined) {
      result[key] = [this[index]];
    } else {
      result[key].push(this[index]);
    }
  }

  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
[{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(function (item) {
  return item.id;
});
// {"1":[1],"2":[2],"3":[3]}
