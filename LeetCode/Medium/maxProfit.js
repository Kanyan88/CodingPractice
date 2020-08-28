//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let BstP = 0,
    BstSell = 0,
    i = 0,
    len = prices.length - 1;

  while (i < len) {
    buy = prices.shift();
    BstSell = Math.max(...prices);
    BstSell - buy > BstP && (BstP = BstSell - buy);
    i++;
  }

  return BstP;
};
