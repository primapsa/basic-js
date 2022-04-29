const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *    0      1      2
 * 0 [true, false, false],
 * 1 [false, true, false],
 * 2 [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let setuped = [...matrix];
  let combinations = [];
  for (let is = 0; is < matrix.length; is++) {
    for (let js = 0; js < matrix[is].length; js++) {
      let cell = matrix[is][js];
      if (cell === true) {        
        getCombinations(is, js, setuped.length);
      }
      setuped[is][js] = 0;
    }
  }

  function getCombinations(x, y, size) {
    const start = -1;
    const end = 1;
    for (let ig = start; ig <= end; ig++) {
      for (let jg = start; jg <= end; jg++) {
        if (!(ig == 0 && jg == 0)) {
          let offsetX = x - ig;
          let offsetY = y - jg;
          if (
            offsetX >= 0 &&
            offsetY >= 0 &&
            offsetX < size &&
            offsetY < size
          ) {
            combinations.push([offsetX, offsetY]);
          }
        }
      }
    }
  }

  function updateCell(arr) {

    arr.forEach((el) => {
      let ic = el[0];
      let jc = el[1];      
      setuped[ic][jc] += 1;      
    });
  }
  
  updateCell(combinations);

  return setuped;
}

module.exports = {
  minesweeper
};
