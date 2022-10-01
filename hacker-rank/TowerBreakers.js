/*
Two players are playing a game of Tower Breakers! Player 1 always moves first, 
and both players always play optimally.The rules of the game are as follows:

Initially there are n towers.
Each tower is of height m.
The players move in alternating turns.
In each turn, a player can choose a tower of height x and reduce its height to y, where 1<=y<x and y evenly divides x.
If the current player is unable to make a move, they lose the game.
*/
/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 * return If the first player wins, return 1. Otherwise, return 2.
 */

function towerBreakers(n, m) {
    // Write your code here
    if(m === 1) {
        return 2;
    }
    if(n%2===0) {
        return 2;
    }
        return 1;

}
function main(){
    // 2,2 -> 2, 1,4->1
    // 100000 1 -> 2
    // 100001 1 -> 2
    // 374625 796723 -> 1
    // 950929 183477 -> 1
    // 732159 779867 -> 1
    const n=950929;
    const m=183477;
    const result = towerBreakers(n, m);
    console.log(result);
}
main();