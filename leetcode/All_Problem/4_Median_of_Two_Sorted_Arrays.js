/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const result = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = result.length;
  const mid = Math.floor(n / 2);

  if (n % 2 === 1) {
    return result[mid];
  } else {
    return (result[mid - 1] + result[mid]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
