/*
 * Complete the 'waiter' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY number
 *  2. INTEGER q
 *  return int[n]: the numbers on the plates after processing
 */

function waiter(number, q) {
    // Write your code here
    let answer = [];
    let A = number.reverse();
    let primeNumber = getPrimeNums(q);
    function isPrimeNum(num){
        for (var i = 2; i < num / 2 + 1; i++) {
          if (num%i == 0){
            return false; //不是质数
          }
        };
        return true; //是质数
    }
    function getPrimeNums(n) {
        let arr = [2];
        let start = 2;
        while(arr.length<n){
            start++;
            if(isPrimeNum(start)) {
                arr.push(start);
            }
        }
        return arr;
    }
    function pile(arr,i){
        let A1 = [];
        let B1 = [];
        let dive = primeNumber[i];
        for(let i=0;i<arr.length;i++) {
            if(arr[i]%dive===0) {
                B1.push(arr[i]);
            }else{
                A1.push(arr[i]);
            }
        }
        answer = answer.concat(B1.reverse());
        return A1;
    }
    for(let i=0;i<q;i++) {
        A = pile(A,i);
        A = A.reverse();
    }
    answer = answer.concat(A);
    return answer;
}
const fs = require('fs');
function main() {

    const q = 2;

    const number = [3,3,4,4,9];// [ 4, 4, 9, 3, 3 ]
    //fs.readFileSync('./waiter.txt').toString().split(' ').map((it)=>Number(it))

    const result = waiter(number, q);

    console.log(result);
    // const answer = fs.readFileSync('./waiterresult.txt').toString().split('\n');
    // for(let i=0;i<result.length;i++) {
    //     if(result[i]!=answer[i]) {
    //         console.log(i,answer[i]);
    //     }
    // }
}
main();
