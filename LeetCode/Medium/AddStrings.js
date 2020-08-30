//https://leetcode.com/problems/add-strings/

var addStrings = function (a, b) {
  let res = 0n,
    len = Math.max(a.length, b.length),
    i = 0;
  a = a.padStart(len, "0");
  b = b.padStart(len, "0");
  while (i < len) {
    res *= 10n;
    res += BigInt(Number(a[i]) + Number(b[i]));
    i++;
  }
  return String(res);
};
