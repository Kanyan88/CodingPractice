//https://leetcode.com/problems/happy-number/

var isHappy = function (n) {
  calc = (n) => {
    ss = n.toString();
    let i = 0,
      nSS = 0;
    if (n === 1 || n === 7) {
      return 1;
    } else if (0 <= n && n < 10) {
      return 0;
    }

    while (i < ss.length) {
      nSS += ss[i] ** 2;
      i++;
    }

    if (nSS !== 1) {
      nSS = calc(nSS);
    }

    return nSS;
  };

  return calc(n);
};
