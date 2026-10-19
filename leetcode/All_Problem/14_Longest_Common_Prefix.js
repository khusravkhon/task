/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";

  let prefix = "";
  let firststr = strs[0];

  for (let i = 0; i < firststr.length; i++) {
    const char = firststr[i];
    for (let j = 0; j < strs.length; j++) {
      const fir = strs[j];
      if (fir[i] != firststr[i]) {
        return prefix;
      }
    }
    prefix += char;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
