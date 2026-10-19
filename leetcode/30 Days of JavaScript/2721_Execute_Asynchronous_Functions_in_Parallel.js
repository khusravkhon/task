// /**
//  * @param {Array<Function>} functions
//  * @return {Promise<any>}
//  */
// var promiseAll = function (functions) {
//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(functions)) {
//       return reject("No Array");
//     }

//     const result = [];
//     let count = 0;
//     let totalLen = functions.length;

//     functions.forEach((promises, index) => {
//       Promise.resolve(promises())
//         .then((value) => {
//           result[index] = value;
//           count++;

//           if (totalLen == count) {
//             resolve(result);
//           }
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   });
// };

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

// const promise = promiseAll([() => new Promise((res) => res(42))]);
// promise.then(console.log); // [42]

var promiseAll1 = function (functions) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(functions)) {
      reject("NO array");
    }

    const result = new Array(functions.length);
    let compolode = 0;

    if (functions.length == 0) {
      resolve([]);
    }

    functions.forEach((promise, index) => {
      Promise.resolve()
        .then(() => promise())
        .then((res) => {
          result[index] = res;
          compolode++;

          if (compolode == functions.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};

const delay = (ms, val) => () =>
  new Promise((r) => setTimeout(() => r(val), ms));

promiseAll1([delay(300, "a"), delay(100, "b"), delay(200, "c")]).then(
  console.log,
); // ['a', 'b', 'c'] — порядок исходный, хотя 'b' пришёл первым

promiseAll1([delay(100, "a"), () => Promise.reject("ошибка")]).catch(
  console.log,
); // 'ошибка'
