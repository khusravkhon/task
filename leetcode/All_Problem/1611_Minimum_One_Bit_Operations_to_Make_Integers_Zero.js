/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function (n) {
  for (let index = 0; index < n.toString(2).length; index++) {
    console.log(n.toString(2)[1]);
  }
};

minimumOneBitOperations(3);
// minimumOneBitOperations(6);

// https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/description/?envType=daily-question&envId=2025-11-08
