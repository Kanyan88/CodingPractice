var readline = require("readline");
const { exit } = require("process");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
(nCases = 0), (linesPerCase = 0);
let input = [],
  ANS = [],
  cID = 0;
rl.on("line", function (line) {
  if (!nCases) {
    nCases = parseInt(line);
    return 0;
  }

  input.push(line.split(" "));
  if (input.length > parseInt(input[0][0])) ANS.push(Solve(++cID));
  if (cID === nCases)
    ANS.forEach((v, i) => console.log(`Case #${i + 1}: ${v}`)), exit();
});

function Solve(cID) {
  let k = "",
    cords = input[0][0],
    R = input[0][1],
    K = input[0][2],
    res = new Set([]);

  input.shift();

  let i = 0,
    j = 0,
    p1Indx = 0,
    p2Indx = 0,
    skip = 1;
  while (i < (cords ** 2 - cords) / 2) {
    p1Indx = j % cords;
    p2Indx = p1Indx + skip;

    l1 = parseFloat(input[p1Indx][1]);
    d1 = parseInt(input[p1Indx][0]);

    l2 = parseFloat(input[p2Indx][1]);
    d2 = parseInt(input[p2Indx][0]);

    angle = (d2 - d1) * 10 ** -9;
    angle = angle > 180 ? 360 - angle : angle;
    EuclideanDist = Math.sin((angle / 2) * (Math.PI / 180)) * 2 * R;
    res.add(EuclideanDist + l1 + l2);

    if (p2Indx === cords - 1) {
      skip++;
      j = 0;
    } else {
      j++;
    }
    i++;
  }

  while (K) {
    t = Math.max(...res);
    k += t.toFixed(10) + " ";
    res.delete(t);
    K--;
  }
  input = [];
  return k;
}
