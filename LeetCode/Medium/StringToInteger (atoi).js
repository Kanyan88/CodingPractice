//https://leetcode.com/problems/string-to-integer-atoi/

var myAtoi = function (str) {
  let num = parseInt(str.trim());
  if (!num) return 0;

  return num <= -2147483648
    ? -2147483648
    : num >= 2147483647
    ? 2147483647
    : num;
};
