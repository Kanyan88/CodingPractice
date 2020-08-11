//https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  let t = 0,
    h = 0;
  s[8] === "P" && (t += 12);
  h = parseInt(s.substr(0, 2));
  return h < 12 && (t += h), t.toString().padStart(2, "0") + s.substr(2, 6);
}
