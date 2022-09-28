/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    if(n%2==0){
        n=n+1;
    }
    return Math.min(parseInt((n-p)/2),parseInt(p/2));
}

function main() {
    // 7,4 ->1
    // 5,6 -> 1
    const n = 6;

    const p = 4;

    const result = pageCount(n, p);// 1
    console.log(result);
}
main()
