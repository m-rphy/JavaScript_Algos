/**
 *
 *  How many unique ways can one move from one corner of a n x n board to the other corner.
 *  You can move up, down, left, and right. You cannot visit spots that you have visited already.
 *  Make your solution work for a grid of any size.
 *
 */

// A Board class might be useful

function makeBoard(n) {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}


function nPaths(n, i = n - 1, j = n - 1, board = makeBoard(n)) {
  // console.log('i:',i,'j:', j)
  let newBoard;
  // Base Case 1: Are we on the board?
  if (i < 0 || j < 0 || i > n - 1 || j > n - 1 ) {
    // console.log(board)
    return 0;
  }

  // Base Case 2: Are we on a space we have visited?
  if (board.hasBeenVisited(i, j)) {
    // console.log(board)
    return 0;
  }

  // Base Case 3: Are we where we want to the go?
  if (i === 0 && j === 0 && board[0][0] === false) {
    board.togglePiece(i, j);
    return 1;
  }
  // if we are on the board and haven't visited our current spot and haven't won: 
  // toggle peoice and continue looking for winning path
  board.togglePiece(i, j);
  // console.log(board, 'toggled')

  // recursive Case / Return
  return nPaths(n, i - 1, j, board) + nPaths(n, i, j - 1, board) + nPaths(n, i + 1, j, board) + nPaths(n, i, j+ 1, board);
}

console.log(nPaths(3));


