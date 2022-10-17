// 累加，判断数字1
var numberOfone = function(n) {
  if (n < 0) {
    return 0;
  }
  let numbers = 0;
  let count = 0;
  while (count <= n) {
    count++;
    if (count.toString().indexOf("1") > -1) {
      numbers++;
    }
  }
  return numbers;
};
