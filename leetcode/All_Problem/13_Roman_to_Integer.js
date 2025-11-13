/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let data = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const rim = s.split("");
  let result = 0;
  for (let index = 0; index < rim.length; index++) {
    let next = data[rim[index + 1]];

    if (data[rim[index]] < next) {
      result -= data[rim[index]];
    } else {
      result += data[rim[index]];
    }
  }

  return result;
  //   let result = rim.reduce((cal, val, index) => {
  //     let next = data[rim[index + 1]];
  //     if (data[val] < next) {
  //       return cal - data[val];
  //     } else {
  //       return cal + data[val];
  //     }
  //   }, 0);
  //   return result;
};

console.log(romanToInt("MCMXCIV"));
