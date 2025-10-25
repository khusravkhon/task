/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

//   const data = [...arr1, ...arr2]; // говно
//     let result = [];
//     let number = [];
//   data.forEach((elem) => {
//     if (number.includes(elem.id)) {
//       let dataOf = result.filter((elewm) => elewm.id !== elem.id);
//       let dataOr = result.filter((elewm) => elewm.id == elem.id);
//       let datarerg = {
//         ...dataOr[0],
//         ...elem,
//       };
//       dataOf.push(datarerg);
//       result = dataOf;
//     } else {
//       number.push(elem.id);
//       result.push(elem);
//     }
//   });

// var join = function (arr1, arr2) { // говно 2
//   const count = [...arr1, ...arr2];
//   let result = [];
//   let number = [];

//   for (let index = 0; index < count.length; index++) {
//     if (number.includes(count[index].id)) {
//       let dataOf = result.filter((elewm) => elewm.id !== count[index].id);
//       let dataOr = result.filter((elewm) => elewm.id == count[index].id);
//       let datarerg = {
//         ...dataOr[0],
//         ...count[index],
//       };
//       dataOf.push(datarerg);
//       result = dataOf;
//     } else {
//       number.push(count[index].id);
//       result.push(count[index]);
//     }
//   }

//   return result.sort((a, b) => a.id - b.id);
// };

var join = function (arr1, arr2) {
  const map = new Map();

  for (const element of [...arr1, ...arr2]) {
    if (map.has(element.id)) {
      map.set(element.id, { ...map.get(element.id), ...element });
    } else {
      map.set(element.id, element);
    }
  }
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
};

join(
  [
    { id: 1, x: 1 },
    { id: 2, x: 9 },
  ],
  [
    { id: 3, x: 5 },
    { id: 1, x: 1 },
  ]
);
