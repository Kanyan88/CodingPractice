
//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {

  let res = 0, i = 0, j = 0, len = ar.length;

  for (i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {

      if (i == j)
        continue;
      (i < j && !((ar[i] + ar[j]) % k)) && res++;

    }
  }

  return res;
}