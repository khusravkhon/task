/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    for (let j = index + 1; j < nums.length; j++) {
      console.log(nums[index], nums[j]);

      if (nums[index] + nums[j] == target) {
        return [index, j];
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([0, 4, 3, 0], 0);
