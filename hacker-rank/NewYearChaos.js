/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */
// 若一个数字交换超过2次，打印Too chaotic，否则打印交换次数
function minimumBribes(q) {
  // Write your code here
  let bribecount = 0,
    i = 0;
  let flag = true;
  let moveCount = {};
  while (i < q.length - 1) {
    if (q[i] < q[i + 1]) {
      i++;
    } else {
      if (typeof moveCount[q[i]] == "undefined") {
        moveCount[q[i]] = 0;
      }
      moveCount[q[i]]++;
      if (moveCount[q[i]] > 2) {
        flag = false;
        console.log("Too chaotic");
        break;
      }
      let temp = q[i];
      q[i] = q[i + 1];
      q[i + 1] = temp;
      // 交换后指针保持不动
      if (i > 0) {
        i--;
      }
      bribecount++;
    }
    if (!flag) {
      break;
    }
  }
  if (flag) {
    console.log(bribecount);
  }
}

function main() {
  const q = [2, 1, 5, 3, 4]; //Too chaotic
  // [1,2,5,3,7,8,6,4];
  // [2,5,1,3,4]
  // [5,1,2,3,7,8,6,4];//Too chaotic
  //

  minimumBribes(q);
}
main();
