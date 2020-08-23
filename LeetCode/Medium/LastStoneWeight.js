//https://leetcode.com/problems/last-stone-weight/

var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    z = stones[stones.length - 1] - stones[stones.length - 2];
    stones.pop();
    stones.pop();
    z && stones.push(z);
  }
  return stones;
};
