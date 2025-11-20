/**
 * @param {string} s
 * @return {number}
 */

// var lengthOfLongestSubstring = function (s) {
//   if (s == "") {
//     return 0;
//   } else if (s == " ") {
//     return 1;
//   }
//   let map = new Map();
//   let result = "";
//   let result2 = [];

//   s.split("").forEach((key) => {
//     if (map.has(key)) {
//       result2.push(result);
//       result = "";
//     } else {
//       map.set(key);
//     }

//     result += key;
//   });

//   if (result !== "") {
//     result2.push(result);
//     result = "";
//   }

//   if (result2.length == 0) {
//     return map.size;
//   } else {
//     return result2.reduce((a, b) => (a.length >= b.length ? a : b)).length;
//   }
// };

var lengthOfLongestSubstring = function (s) {
  let map = new Map();

  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }

    map.set(char, right);

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("c")); // 1
console.log(lengthOfLongestSubstring("aab")); // 2
