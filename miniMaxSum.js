
//https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr){
let min=Math.min(...arr),max=Math.max(...arr);
let total=arr.reduce((c,v)=>c+v);
console.log((total-max)+' '+(total-min));
}
