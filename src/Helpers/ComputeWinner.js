module.exports.computeTicTacToeBoardWinner = (arrayOfXAndO) => {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let line of lines) {
    let firstElement = arrayOfXAndO[line[0]];

    if(firstElement && arrayOfXAndO[line[0]] === arrayOfXAndO[line[1]] === arrayOfXAndO[line[2]]) {
      return firstElement;
    }
  }

  return null;
}