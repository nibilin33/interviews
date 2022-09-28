/*
Two children, Lily and Ron, want to share a chocolate bar. 
Each of the squares has an integer on it.
Lily decides to share a contiguous segment of the bar selected such that:
The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
*/

// return the number of ways the bar can be divided
function birthday(s, d, m) {
    // Write your code here
    let divided = 0;
    for(let i=0;i<=s.length-m;i++) {
        let sum = s[i];
        for(let j=1;j<m;j++) {
            sum +=s[i+j];
        }
        if(sum === d) {
            divided++;
        }
    }
    return divided;
}
function main() {
    const s = [4];
    const d = 4;
    const m = 1;
    const result = birthday(s, d, m);
    console.log(result);
}
main();