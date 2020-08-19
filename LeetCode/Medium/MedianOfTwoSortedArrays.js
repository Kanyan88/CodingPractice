//https://leetcode.com/problems/median-of-two-sorted-arrays/

findMedianSortedArrays = function (n1, n2) {
  let z = [...n1, ...n2].sort((a, b) => a - b);
  return (
    (midl = Math.floor(z.length / 2)),
    z.length % 2 ? z[midl] : (z[midl - 1] + z[midl]) / 2
  );
};
