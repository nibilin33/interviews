/*
Given two strings consisting of digits 0 and 1 only, 
find the XOR of the two strings.
Debug the given function strings_xor to find the XOR of the two given strings appropriately.
*/

function strings_xor(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    result += (Number(str1[i]) ^ Number(str2[i])).toString();
  }
  return result;
}
function main() {
  const str1 = "10101";
  const str2 = "00101";
  const result = strings_xor(str1, str2);
  console.log(result);
}
main();
