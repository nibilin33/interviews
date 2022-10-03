/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 * {, }, (, ), [, ]
 */
// string: either YES or NO
function isBalanced(s) {
    // Write your code here
    const leftstack = '{([';
    const rightstack = '})]';
    let check = [];
    for(let i=0;i<s.length;i++) {
        if(leftstack.indexOf(s[i])>-1) {
            check.push(s[i]);
        }else{
            let top = check.pop();
            if(leftstack.indexOf(top) !== rightstack.indexOf(s[i])) {
                return 'NO';
            }
        }
    }
    return check.length === 0 ? 'YES': 'NO';

}
function main() {
    const s = '{[()]}';

    const result = isBalanced(s);
    console.log(result);
}
main();