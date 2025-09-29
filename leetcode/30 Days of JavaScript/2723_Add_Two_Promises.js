/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

// Option 1

// var addTwoPromises = async function (promise1, promise2) {
//   const data = await Promise.all([promise1, promise2]);
//   let num = 0;
//   data.map((elem) => {
//     num += elem;
//   });
//   return num;
// };

// Option 2

var addTwoPromises = async function (promise1, promise2) {
  return (await Promise.all([promise1, promise2])).reduce((a, b) => a + b, 0);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
