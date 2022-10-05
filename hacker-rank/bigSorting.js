/*
 * Complete the 'bigSorting' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY unsorted as parameter.
 */

function bigSorting(unsorted) {
    // Write your code here
    function compare(a,b) {
        if(a.length < b.length) {
            return -1;
        }
        if(a.length == b.length) {
            if(a<b) {
                return -1;
            }
            if(a>b) {
                return 1;
            }else{
                return 0;
            }
        }
        return 1;
    }
    return unsorted.sort((a,b)=>compare(a,b))
}

function main() {

    let unsorted = ['31415926535897932384626433832795','1','3','10','3','5'];

    const result = bigSorting(unsorted);

    console.log(result);
}
main();