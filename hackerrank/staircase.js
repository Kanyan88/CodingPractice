//https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  let i = n + 1;
  while (n) {
    console.log(" ".repeat(n - 1) + "#".repeat(i - n));
    n--;
  }
}

//staircase(4);
/*
   #
  ##
 ###
####
*/
