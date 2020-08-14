//https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let res = [0, 0];
  apples.forEach((v, i) => {
    s <= v + a && v + a <= t && res[0]++;
  });
  oranges.forEach((v, i) => {
    s <= v + b && v + b <= t && res[1]++;
  });
  console.log(res[0] + "\n" + res[1]);
}
