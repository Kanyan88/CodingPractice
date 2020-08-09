//https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  let i = 0,
    res = [0, 0, 0],
    len = arr.length;
  while (i < arr.length) {
    if (arr[i] > 0) {
      res[0]++;
    } else if (arr[i] < 0) {
      res[1]++;
    } else {
      res[2]++;
    }
    i++;
  }
  res.forEach((v) => console.log((v / len).toFixed(6)));
}

//plusMinus([-4,3,-9,0,4,1])
