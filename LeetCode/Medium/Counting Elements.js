//https://leetcode.com/problems/counting-elements/

var countElements = function (arr) {
  return arr.filter((v) => arr.includes(v + 1)).length;
};
