//https://leetcode.com/problems/number-of-islands/

var numIslands = function (mat) {
  let islandz = 0;

  if (!mat.length) {
    return [];
  }

  let col = 0;
  let row = 0;
  const rows = mat.length;
  const cols = mat[0].length;

  let connected = Array(mat.length * cols).fill(0);

  // Visit Cells
  visit = (row, col) => {
    connected[row * cols + col] = 1;

    if (
      is_inside(row - 1, col) &&
      !is_visited(row - 1, col) &&
      parseInt(mat[row - 1][col])
    ) {
      connected[(row - 1) * cols + col] = 1;
      visit(row - 1, col);
    }

    if (
      is_inside(row, col - 1) &&
      !is_visited(row, col - 1) &&
      parseInt(mat[row][col - 1])
    ) {
      connected[row * cols + col - 1] = 1;
      visit(row, col - 1);
    }

    if (
      is_inside(row + 1, col) &&
      !is_visited(row + 1, col) &&
      parseInt(mat[row + 1][col])
    ) {
      connected[(row + 1) * cols + col] = 1;
      visit(row + 1, col);
    }

    if (
      is_inside(row, col + 1) &&
      !is_visited(row, col + 1) &&
      parseInt(mat[row][col + 1])
    ) {
      connected[row * cols + col + 1] = 1;
      visit(row, col + 1);
    }
  };

  // helper functions
  is_visited = (row, col) => connected[row * cols + col];

  is_inside = (row, col) => row < rows && row + 1 && col < cols && col + 1;

  // main loop
  while (row < rows) {
    //register new island
    if (!is_visited(row, col) && parseInt(mat[row][col])) {
      visit(row, col);
      islandz++;
    }
    col++;
    if (col > cols - 1) {
      col = 0;
      row++;
    }
  }

  return islandz;
};
