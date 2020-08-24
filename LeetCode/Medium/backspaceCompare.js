//https://leetcode.com/problems/backspace-string-compare/

var backspaceCompare = function (S, T) {
  let i = 0,
    len = Math.max(S.length, T.length),
    k = 0,
    o = 0;

  while (i < len) {
    S[k] === "#" &&
      ((S = S.substring(0, k - 1) + S.substr(k + 1)), (k -= k ? 2 : 1));
    T[o] === "#" &&
      ((T = T.substring(0, o - 1) + T.substr(o + 1)), (o -= o ? 2 : 1));
    i++, k++, o++;
  }

  return S === T;
};
