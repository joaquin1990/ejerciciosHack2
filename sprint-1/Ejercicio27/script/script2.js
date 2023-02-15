function validOneLine(arrayLine) {
  let counter = 0;
  for (let x = 0; x < arrayLine.length; x++) {
    let actualArraySorted = [...arrayLine].sort();
    if (actualArraySorted[x] === x + 1) {
      counter++;
    } else return false;
  }
  return true;
}

function validHorizontalMatrix(matrix) {
  let matrixCount = 0;
  for (let i = 0; i < matrix.length; i++) {
    matrixCount++;
    if (validOneLine(matrix[i]) === false) {
      return false;
    }
    if (matrixCount === 9) {
      return true;
    }
  }
}

function invertArrayAndValidateIt(matrix) {
  let arrayPosition = 0;
  let newMatrix = [];
  let newArray = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix[i].length; x++) {
      newArray.push(matrix[i][arrayPosition]);
      if (i === 8) {
        newMatrix.push(newArray);
        arrayPosition++;
        newArray = [];
        i = -1;
        if (newMatrix.length === 9) {
          return validHorizontalMatrix(newMatrix);
        }
      }
      break;
    }
  }
  return false;
}

function validarSudoku(matrix) {
  if (validHorizontalMatrix(matrix)) {
    return invertArrayAndValidateIt(matrix);
  }
  return false;
}

console.log(
  validarSudoku([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
