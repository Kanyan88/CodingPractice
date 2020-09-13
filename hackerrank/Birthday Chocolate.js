
//https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
    let res = 0;
    s.forEach((v, i) => {
        if (d === s.slice(i, i + m).reduce((a, b) => a + b, 0)) res++;
    });
    return res;
}

