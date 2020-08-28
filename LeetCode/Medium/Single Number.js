//https://leetcode.com/problems/single-number/

singleNumber = function (nums) {
  nums.sort((a, b) => a - b);

  i = 0;
  while (i < nums.length) {
    let Li = nums.lastIndexOf(nums[i]);

    if (i === Li) {
      return nums[i];
    }

    i = Li + 1;
  }
};
