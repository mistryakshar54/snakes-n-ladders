export const snakes = [ //Snakes take from higher cell no to lower cell no
  {
    startCell: 23,
    endCell: 5,
  },
  {
    startCell: 54,
    endCell: 36,
  },
  {
    startCell: 64,
    endCell: 31,
  },
  {
    startCell: 97,
    endCell: 61,
  },
];

export const ladders = [//Ladder take from lower cell no to higher cell no
  {
    startCell: 6,
    endCell: 38,
  },
  {
    startCell: 42,
    endCell: 58,
  },
  {
    startCell: 80,
    endCell: 98,
  },
];

export const generateGridData = (rows, cols, side) => {
  const gridMap = Array(rows * cols).fill(0);
  let x = 0;
  let y = 0;
  let numRows = rows;
  let colRows = 0;
  let indexNum = 99;
  while (numRows > 0) {
    while (colRows < cols) {
      gridMap[indexNum] = {
        x,
        y,
        cellNo: indexNum + 1,
        type: "",
      };
      x += side;
      colRows++;
      indexNum--;
    }
    y += side;
    while (colRows > 0) {
      x -= side;
      gridMap[indexNum] = {
        x,
        y,
        cellNo: indexNum + 1,
        type: "",
      };
      colRows--;
      indexNum--;
    }
    y += side;
    numRows -= 2;
  }
  for( let snake of snakes ){
    const { startCell, endCell } = snake;
    const startPos = gridMap[startCell - 1];
    const endPos = gridMap[endCell - 1];
    gridMap[startCell - 1] = {
    ...startPos,
    type: 'snake',
    goTo: { ...endPos },
    };
  }
  
  for( let ladder of ladders ){
    const { startCell, endCell } = ladder;
    const startPos = gridMap[startCell - 1];
    const endPos = gridMap[endCell - 1];
    gridMap[startCell - 1] = {
    ...startPos,
    type: 'ladder',
    goTo: { ...endPos },
    };
  }
  return gridMap;
};

