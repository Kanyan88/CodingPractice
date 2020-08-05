//https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(n, arr) {
  let Fdiag = 0,
    Sdiag = 0,
    i = 0,
    mid = (n - 1) / 2;
  for (i = 0; i < n / 2; i++) {
    if (i == mid) {
      continue;
    }
    Fdiag += arr[i][i] + arr[n - 1 - i][n - 1 - i];
    Sdiag += arr[n - 1 - i][i] + arr[i][n - 1 - i];
  }
  return Sdiag - Fdiag;
}

diagonalDifference(5, [
  [3, 3, 3, 1, 2],
  [1, 1, 3, 1, 2],
  [1, 5, 0, 1, 2],
  [1, 5, 0, 1, 2],
  [1, 5, 0, 1, 2],
]);
