/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 *  return int[2]: the indices of the prices of the two flavors they buy, sorted ascending
 */

function icecreamParlor(m, arr) {
    // Write your code here
    for(let i=0;i<arr.length;i++){
        let rest = m - arr[i];
        for(let j=i+1;j<arr.length;j++) {
            if(rest === arr[j]) {
                return [i+1,j+1];
            }
        }
    }
    return [];
 
}

function main() {
    const m = 6;

    const arr = [1,3,4,5,6];

    const result = icecreamParlor(m, arr);
    console.log(result);

}
main();
