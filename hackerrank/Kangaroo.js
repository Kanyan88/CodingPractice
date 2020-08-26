//https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  let deltaX = x2 - x1,
    deltaV = v2 - v1;

  if (!deltaX) return "YES";

  if (!deltaV) return "NO";
  let steps = deltaX / deltaV;
  if ((deltaX && !deltaV) || steps > 0) return "NO";

  return steps % 1 ? "NO" : "YES";
}
