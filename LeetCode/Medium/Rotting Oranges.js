//https://leetcode.com/problems/rotting-oranges/

var orangesRotting = function (grid) {
  let minutes = -1,
    rotten = 1,
    freshfruits = 0,
    didchange = 0;
  let Que = [];

  //fill Que with rotten oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 2) {
        Que.push([i, j]);
      } else if (grid[i][j] == 1) {
        freshfruits++;
      }
    }
  }

  // helper function
  var searchGrid = (i, j) => {
    if (i < grid.length && i > -1 && grid[i][j] == 1) {
      grid[i][j] = 2;
      Que.push([i, j]);
      freshfruits--;
      didchange = 1;
    }
  };

  // the rotting Cycle
  var rott = () => {
    let q = 0,
      Qlen = Que.length;
    didchange = 0;

    while (q < Qlen) {
      let i = Que[0][0],
        j = Que[0][1];
      searchGrid(i + 1, j);
      searchGrid(i, j + 1);
      searchGrid(i - 1, j);
      searchGrid(i, j - 1);
      Que.shift();
      q++;
    }
    minutes++;
    if (freshfruits && !didchange) minutes = -1;
    didchange && rott();
  };

  //main loop
  rott();

  return minutes;
};
