/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */
// 判断是否满足横的按从小到大，竖的也从小到大 
// return YES/NO
function gridChallenge(grid) {
    // Write your code here
    for(let i=0;i<grid.length;i++) {
        grid[i]=grid[i].split('').sort((a,b)=>a.localeCompare(b));
        if(i>0) {
            for(let j=0;j<grid[i].length;j++) {
                if(grid[i-1][j]>grid[i][j]) {
                    return 'NO';
                }
            }
        }
    }
    return 'YES';
}

function main() {
    const grid = [
        'ebacd',
        'fghij',
        'olman',
        'trpqs',
        'xywuv'
    ];
    const result = gridChallenge(grid);
    console.log(result);
}
main();