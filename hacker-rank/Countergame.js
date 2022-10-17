/*
Louise和Richard玩一个游戏。他们有一个初值设置为 N 的计数器。Louise先开始游戏，
此后两人轮流进行。 在游戏中，他们进行如下操作：
如果 N 不是 2 的幂，他们把计数器减少小于 N 的最大2的幂。
如果 N 是 2 的幂，他们把计数器减少 N 的一半。
得到结果作为新的 N 值，再继续进行以后的操作。
当计数器值减到 1 的时候，即 N == 1，游戏结束。
最后一个进行合法操作的人获得胜利。 给定 N ， 你的任务是求出游戏的获胜者。
*/
/*
 * Complete the 'counterGame' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts LONG_INTEGER n as parameter.
 * Louise赢得游戏输出"Louise”。否则输出”Richard”
 */
/*
note: Binary check whether is powers of two (n&(n-1))===1 是否是2的冥
思路:
消去1的操作为不是2的幂的操作情况
最后连续几个0的情况走是2的冥的操作，几个0就操作几次 
*/
function counterGame(n) {
  // Write your code here
  let target = n.toString(2);
  let paycount = 0;

  for (let i = target.length - 1; i > 0; i--) {
    if (target[i] == 0) {
      paycount++;
    } else {
      break;
    }
  }
  return (target.split("").filter(name => name == 1).length + paycount) % 2 == 1
    ? "Richard"
    : "Louise";
}

function main() {
  const arr = [1560834904, 1768820483, 1533726144, 1620434450, 1463674015];
  arr.forEach(n => {
    const result = counterGame(n);
    console.log(result);
  });
}
main();
