/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
// 删除一个字母让这个字符串变成回文，返回删除的标志
function palindromeIndex(s) {
  // Write your code here
  const n = s.length;
  let i = 0,
    j = n - 1;
  let result = -1;
  let lasti = i,
    lastj = j;
  console.log(s);
  while (i < j) {
    // console.log(i,j);
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      if (result > -1) {
        result = -1;
        break;
      }
      if (s[i] === s[j - 1]) {
        if (i + 1 <= j - 2) {
          if (s[i + 1] === s[j - 2]) {
            result = j;
            j--;
          }
        }
      }
      if (s[i + 1] === s[j] && result < 0) {
        result = i;
        i++;
      }
    }
  }
  return result;
}

function main() {
  const arr = [
    "aaab"
    //  'fyjwtatuieusvfqaeynaaiiaanyeaqfvsueutatwjyf',
    // 'qaaiyrpadovfjrmgkildtkseysejdtrpltptujlxxljutptlprtdjesyeskdlikgmrjfvodapryiaaq',
    // 'llhrxcreddwkcronujfkwbdswoowsdbwkfjunorckwdderxrhll',
    // 'qasfhkfcojhntlfkaydtepsfsleipymwsopposwmypielsfspetdykfltnhjocfkhfsaq',
    // 'broifqivnnvifiorb',
    // 'bglgcwnmpobohqefrglsaaaaslgrfeqhobopmnwcglgb',
    // 'bthvmywukfwrkslaiialskwfkuwymvhtb',
    // 'uxxdlselxmwyiguugtpsypfudffswvwyswyyiiyywsywvsffdufpysptguugiywmxlesldxxu',
    // 'rvscdpyljqglgmiktfndsmfnkgmubrruloqptgohsgneocoyyocoengshogtpqolurrbumgknfmsdntkimglgqjlypdcsvr',
    // 'qmdpbsswvmqtyhkobqeijjieqbokhytqmvwssbdmq'
  ];
  arr.forEach(s => {
    const result = palindromeIndex(s);
    console.log(result);
  });
}
main();
