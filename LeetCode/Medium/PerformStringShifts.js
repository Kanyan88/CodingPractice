//https://leetcode.com/problems/perform-string-shifts/

function stringShift(s, ShiftzArr) {
  shift = (sh) => {
    [dir, shiftz] = sh;
    while (shiftz) {
      if (dir) {
        s = s[s.length - 1] + s.substring(0, s.length - 1);
      } else {
        s = s.substring(1) + s[0];
      }
      shiftz--;
    }
  };

  let i = 0;
  while (i < ShiftzArr.length) {
    shift(ShiftzArr[i]);
    i++;
  }
  return s;
}
