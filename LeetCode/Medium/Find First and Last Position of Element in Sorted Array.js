//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (ar, n) {
  return [ar.indexOf(n), ar.lastIndexOf(n)];
};
