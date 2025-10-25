/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  const resultFun = (obj32) => {
    if (!obj32) return false;
    if (typeof obj32 !== "object") return obj32;

    if (Array.isArray(obj32)) {
      let resultArr = [];
      for (let index = 0; index < obj32.length; index++) {
        const element = obj32[index];
        const num = resultFun(element);
        if (num) {
          resultArr.push(num);
        }
      }
      return resultArr;
    }

    let resultObj = {};

    for (const key in obj32) {
      let number = resultFun(obj32[key]);

      if (number) {
        resultObj[key] = number;
      }
    }
    return resultObj;
  };

  return resultFun(obj);
};

compactObject([null, 0, false, 1]);
compactObject([null, 0, 5, [0], [false, 16]]);
compactObject({ a: null, b: [false, 1] });
compactObject({ a: null, b: [false, 1] });
