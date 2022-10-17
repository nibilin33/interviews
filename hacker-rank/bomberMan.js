/*
 * Complete the 'bomberMan' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */
// return string[r]: n array of strings that represent the grid in its final state
// 第一秒什么都没有发生
// 第二秒开始填满炸弹
// 放了三秒的炸弹会爆炸
// 爆炸时候相邻的还没爆炸的炸弹会被摧毁
const fs = require("fs");
const testcase = fs
  .readFileSync("./bomberMan.txt")
  .toString()
  .split("\n");
function bomberMan(n, grid) {
  // Write your code here
  if (n <= 1) {
    return grid;
  }
  if (n % 2 === 0) {
    let character = "O".repeat(grid[0].length);
    return Array(grid.length).fill(character);
  }
  function copy(grid) {
    let newList = new Array(grid.length);
    for (let i = 0; i < newList.length; i++) {
      newList[i] = grid[i];
      if (typeof newList[i] === "string") {
        newList[i] = newList[i].split("");
      }
    }
    return newList;
  }
  function getBlowMap(original) {
    let arr = JSON.parse(JSON.stringify(original));
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        // 将爆炸后的点为#
        if (arr[i][j] == "O") {
          if (i + 1 < arr.length && arr[i + 1][j] != "O") {
            arr[i + 1][j] = "#";
          }
          if (i > 0 && arr[i - 1][j] != "O") {
            arr[i - 1][j] = "#";
          }
          if (j > 0 && arr[i][j - 1] != "O") {
            arr[i][j - 1] = "#";
          }
          if (j + 1 < arr[i].length && arr[i][j + 1] != "O") {
            arr[i][j + 1] = "#";
          }
          arr[i][j] = "#";
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == "#") {
          arr[i][j] = ".";
        } else {
          arr[i][j] = "O";
        }
      }
    }
    return arr;
  }
  let cpgrid = copy(grid);
  // 4s 完整一个周期
  if ((n + 1) % 4 != 0) {
    return getBlowMap(getBlowMap(cpgrid)).map(item => item.join(""));
  }
  return getBlowMap(cpgrid).map(item => item.join(""));
}

function main() {
  const n = testcase.shift(); // 秒
  let grid = testcase;
  // OOOOOOOOOOOOO....OOOOOOOO....OOO...OOO.......OOOOOOO...OO.OOOOOO...OOOOOOOOOOOOO....O...OOOOOOOOOO.......OOOOOOOOOOO.....OOOOOOOOOO...OOOOOO.....OOOO.OOO.....OOOOOOOOOOOOO...OOOO.O..OO...O
  const result = bomberMan(n, grid);
  console.log(result);
}
main();
