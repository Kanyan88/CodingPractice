//https://leetcode.com/problems/break-a-palindrome/

/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (p) {
  if (p.length < 2) {
    return "";
  }
  len = p.length;
  p = p.split("");

  for (let i = 0; i < len; i++) {
    if (p[i] != "a" && i !== (len - 1) / 2) {
      p[i] = "a";
      return p.join("");
    }
  }
  p[len - 1] = "b";
  return p.join("");
};
