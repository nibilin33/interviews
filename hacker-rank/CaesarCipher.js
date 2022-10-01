/*
Julius Caesar protected his confidential information by encrypting it using a cipher.
Caesar's cipher shifts each letter by a number of letters. 
If the shift takes you past the end of the alphabet, 
just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
*/

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    // 大写字母A-Z对应的ASCII码值是65-90
    // 小写字母a-z对应的ASCII码值是97-122
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (/\w+/ig.test(s[i])) {
            let code = s.charCodeAt(i);
            k = k%26;
            if (code >= 65 && code <= 90) {
                code = code + k > 90 ? (code + k)- 91 + 65 : code + k;
            }else if (code >= 97 && code <= 122) {
                code = code + k > 122 ? (code + k)- 123 + 97 : code + k;
            }
            result += String.fromCodePoint(code);
        } else {
            result += s[i];
        }
    }
    return result;
}
function main() {
    const s = 'Always-Look-on-the-Bright-Side-of-Lif'; // www.abc.xy 87 fff.jkl.gh
    // Always-Look-on-the-Bright-Side-of-Lif 5 Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj

    const k = 5;

    const result = caesarCipher(s, k);

    console.log(result);
}
main();