//https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (nums) {
  t = 1;
  indx = 0;
  Zeros = nums.filter((n, i) => !n && (indx = i + 1)).length;

  if (Zeros - 1 > 0) return Array(nums.length).fill(0);

  nums.forEach((n) => (t *= n ? n : 1));
  if (Zeros) return (R = Array(nums.length).fill(0)), (R[indx - 1] = t), R;

  return nums.map((n) => t / n);
};
