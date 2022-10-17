/* 
Roy 想要提高他编程比赛的打字速度，所以，他的朋友建议他反复输入这个句子：“The quick brown fox jumps over the lazy dog”，
因为这个句子是全字母短句，（全字母短句中每个字母都出现至少一次）。
在输入这个句子很多次之后，Roy 觉得很无聊，所以他开始寻找其它的全字母短句。
给定一个句子 , 告诉 Roy 这个句子是不是一个全字母短句。
*/
function pangrams(s) {
  // Write your code here
  // 大写字母A-Z对应的ASCII码值是65-90
  // 小写字母a-z对应的ASCII码值是97-122
  let visitedMap = {};
  for (let start = 97; start <= 122; start++) {
    visitedMap[String.fromCharCode(start)] = 0;
  }
  s = s.toLowerCase().replace(/\s+/g, "");
  s.split("").forEach(alpha => {
    visitedMap[alpha]++;
  });
  const isPangrams =
    Object.keys(visitedMap).filter(key => visitedMap[key] === 0).length === 0;
  return isPangrams ? "pangram" : "not pangram";
}
function main() {
  const s = "We promptly judged antique ivory buckles for the prize"; //not pangram
  const result = pangrams(s);
  console.log(result);
}
main();
