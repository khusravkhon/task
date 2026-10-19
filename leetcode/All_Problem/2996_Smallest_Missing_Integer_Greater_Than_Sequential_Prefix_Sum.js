/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  let sun = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      sun += nums[i];
    } else {
      break;
    }
  }

  const set = new Set(nums);

  let x = sun;

  while (set.has(x)) {
    x++;
  }

  return x;
};

console.log(missingInteger([29, 30, 31, 32, 33, 34, 35, 36, 37]));

console.log(missingInteger([1, 2, 3, 2, 5]));

console.log(missingInteger([3, 4, 5, 1, 12, 14, 13]));

console.log(missingInteger([3, 4, 5, 7, 9, 8, 1, 3, 4, 9]));

console.log(missingInteger([1, 4, 3]));
