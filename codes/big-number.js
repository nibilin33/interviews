
const toNumder = (num)=>{
  num = num.match(/^([-+])?(\d+)(?:\.(\d+))?$/);
  return [num[1] === '-' ? -1 : 1, num[2]?num[2]:'0', num[3]?num[3]:'0'];
}
const formatDot = (num,length) => {
  if(num.length<length) {
    return `${num}${'0'.repeat(length-num.length)}`;
  }else{
    return num;
  }
}
const addFun = (num1,num2,pm) => {
  let result = [];
  let cr = 0;
  let num1Len = num1.length - 1;
  let num2Len = num2.length - 1;
  let rest = '';
  let n = Math.abs(num1Len - num2Len);
  if(num2Len > num1Len) {
     rest = num2.slice(0,n);
     num2 = num2.slice(n,num2.length);
  }else{
    rest = num1.slice(0,n);
    num1 = num1.slice(n,num1.length);
  }
  for (let i =  num1.length - 1; i>=0; i--) {
    if(pm) {
      let res = Number(num1[i]) + Number(num2[i]) + cr;
      result.push(res % 10);
      if (res > 9) {
        cr = 1;
      } else {
        cr = 0;
      }
    }else{
      let res =Number(num1[i]) - Number(num2[i]) + cr;
      result.push((10+res)%10);
      if(res<0) {
        cr = -1;
      }else{
        cr = 0;
      }
    }

  }
  for (let i = rest.length - 1; i >= 0; i--) {
    if(pm){
      let res = Number(rest[i]) + cr;
      result.push(res % 10);
      if (res > 9) {
        cr = 1;
      } else {
        cr = 0;
      }
    }else{
      let res =Number(rest[i]) + cr;
      result.push(Math.abs(res));
      if(res<0) {
        cr = -1;
      }else{
        cr = 0;
      }
    }

  }
  return {
    result,
    cr,
  };
}
const add = (num1, num2) => {
  num1 = toNumder(num1);
  num2 = toNumder(num2);
  let pm = num1[0] === num2[0];
  let num,dot,dotCy,numCy,numResult,dotResult = null;
  let prefix = '';
  if(num1[1]>num2[1] && num1[1].length>num2[1].length) {
    numResult = addFun(num1[1],num2[1],pm);
    dotResult = addFun(formatDot(num1[2],num2[2].length),formatDot(num2[2],num1[2].length),pm);
    prefix = num1[0];
  }else{
    numResult = addFun(num2[1],num1[1],pm);
    dotResult = addFun(formatDot(num2[2],num1[2].length),formatDot(num1[2],num2[2].length),pm);
    prefix = num2[0];
  }
  num = numResult.result;
  numCy = numResult.cr;
  dot = dotResult.result;
  dotCy = dotResult.cr;
  let result = [];
  if(numCy) {
    num.push(numCy);
  }
  // 处理小数部分的进位
  for (let i = 0; i<num.length; i++) {
    let res =num[i] + dotCy;
    result.push(res%10);
    if(res<0) {
      dotCy = -1;
    }else if(res>9) {
      dotCy = 1;
    }else{
      dotCy = 0;
    }
  }
  if(dotCy) {
    result.push(dotCy);
  }
  let dotty = dot.reverse().join('').replace(/(\d+?)0*$/,'$1');
  return `${prefix>0?'':'-'}${result.reverse().join('').replace(/^0*(\d+)$/,'$1')}${dotty==0?'':'.'+dotty}`;
};

console.log(add("1234", "23"));
console.log(add("1", "23"));
console.log(add("-30.01", "23.09"));
console.log(add("-22", "231"));
console.log(add("-0.1","0.1"));
console.log(add("9.089", "0.001"));
console.log(add("9.999", "0.001"));
console.log(add("9.088888888888888888888888", "0.001"));
console.log(add("-22", "211"));
