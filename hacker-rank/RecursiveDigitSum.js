/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 * return int
 */

function superDigit(n, k) {
    // Write your code here
    let total = n.split('').reduce((pre,current)=>Number(pre)+Number(current))*k;
    let p = total.toString();
    while(p.length>1) {
        let newP = p.split('').reduce((pre,current)=>Number(pre)+Number(current));
        p=newP.toString();
    }
    return p;

}
function main() {
    const n = '9875';

    const k = 100000;

    const result = superDigit(n, k);

    console.log(result);
}
main();