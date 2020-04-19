const toNumder = num => {
  num = num.match(/^([-+])?(\d+)(?:\.(\d+))?$/);
  return [
    num[1] === "-" ? -1 : 1,
    num[2] ? num[2] : "0",
    num[3] ? num[3] : "0"
  ];
};
const formatDot = (num, length) => {
  if (num.length < length) {
    return `${num}${"0".repeat(length - num.length)}`;
  } else {
    return num;
  }
};
const formatNum = (num, length) => {
  if (num.length < length) {
    return `${"0".repeat(length - num.length)}${num}`;
  } else {
    return num;
  }
};
const cmp = (n1, n2) => {
  if (n1.length == n2.length) {
    if (n1 == n2) return 0;
    return n1 > n2 ? 1 : -1;
  }
  return n1.length > n2.length ? 1 : -1;
};
const genArr = str => {
  if (str.length < 7) {
    return [str];
  }
  let strToArr = str.split("");
  for (let i = 7; i < str.length; i += 7) {
    strToArr.splice(i, 0, ",");
  }
  return strToArr.join("").split(",");
};
//Number.MAX_SAFE_INTEGER 16位
const add = (num1, num2) => {
  let cr = 0;
  let result = [];
  for (let i = num1.length - 1; i >= 0; i--) {
    let res = Number(num1[i]) + Number(num2[i]) + cr;
    result.push(res % 10);
    if (res > 9) {
        cr = 1;
      } else {
        cr = 0;
    }
  }
  return {
    result,
    cr
  };
};
const sub = (num1, num2) => {
  let cr = 0;
  let result = [];
  for (let i = num1.length - 1; i >= 0; i--) {
    let res = Number(num1[i]) - Number(num2[i]) + cr;
    result.push((10+res)%10);
    if(res<0) {
      cr = -1;
    }else{
      cr = 0;
    }
  }
  return {
    result,
    cr
  };
};

const addFun = (num1, num2) => {
  num1 = toNumder(num1);
  num2 = toNumder(num2);
  let num,
    dot,
    dotCy,
    numCy,
    numResult,
    dotResult = null;
// num1>num2
  let isChange = cmp(num1[1], num2[1]);
  if (isChange === 0) {
    isChange = cmp(num1[2], num2[2]);
  }
  if (isChange<0) {
    let tmp = num1;
    num1 = num2;
    num2 = tmp;
  }
  const num1Len = num1[1].length;
  const num2Len = num2[1].length;
  let prefix = num1[0];
  if (num1[0] === num2[0]) {
    numResult = add(formatNum(num1[1], num2Len), formatNum(num2[1], num1Len));
    dotResult = add(
      formatDot(num1[2], num2[2].length),
      formatDot(num2[2], num1[2].length)
    );
  } else {
    numResult = sub(formatNum(num1[1], num2Len), formatNum(num2[1], num1Len));
    dotResult = sub(
      formatDot(num1[2], num2[2].length),
      formatDot(num2[2], num1[2].length)
    );
  }

  num = numResult.result;
  numCy = numResult.cr;
  dot = dotResult.result;
  dotCy = dotResult.cr;
  let result = [];
  if (numCy>0) {
    num.push(numCy);
  }
  for (let i = 0; i<num.length; i++) {
    let res =num[i] + dotCy;
    if(res<0) {
      dotCy = -1;
      result.push(10+res);
      continue;
    }
    if(res>9) {
      dotCy = 1;
    }else{
      dotCy = 0;
    }
    result.push(res%10);
  }
  if(dotCy>0) {
    result.push(dotCy);
  }
  let dotty = dot
    .reverse()
    .join("")
    .replace(/(\d+?)0*$/, "$1");
  return `${prefix > 0 ? "" : "-"}${result
    .reverse()
    .join("")
    .replace(/^0*(\d+)$/, "$1")}${dotty == 0 ? "" : "." + dotty}`;
};

console.log(addFun("123456666666", "123"));
console.log(addFun("1", "23"));
console.log(addFun("-30.01", "23.09"));
console.log(addFun("-22", "231"));
console.log(addFun("-0.1", "0.1"));
console.log(addFun("9.089", "0.001"));
console.log(addFun("9.999", "0.001"));
console.log(addFun("9.088888888888888888888888", "0.001"));
console.log(addFun("-22", "211"));
