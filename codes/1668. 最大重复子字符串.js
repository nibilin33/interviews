/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
 // dp[i]表示以sequence[i]为结尾的最大重复值
 var maxRepeating = function(sequence, word) {
    const m = sequence.length, n = word.length;
    if(m<n) {
        return 0;
    }
    let dp = new Array(m).fill(0);
    for(let i=n;i<=m;i++) {
        const str = sequence.substr(i-n,n);
        if(str === word) {
            dp[i]=dp[i-n]+1;
        }
    }
    return Math.max(...dp);
};