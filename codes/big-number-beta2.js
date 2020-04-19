class BigNumber {
  constructor(num1, num2) {
    this.num1Arr = this.extractNumbers(num1);
    this.num2Arr = this.extractNumbers(num2);
    this.sumArr = [];
    // 头补0，尾补0
    this.zerosMode = {
      head: "HEAD",
      tail: "TAIL"
    };
    this.swap();
  }
  // 提取符号，整数，小数部分
  extractNumbers(num) {
    num = num.match(/^([-+])?(\d+)(?:\.(\d+))?$/);
    return [
      num[1] === "-" ? -1 : 1,
      num[2] ? num[2] : "0",
      num[3] ? num[3] : "0"
    ];
  }
  add(num1Str,num2Str) {
    let carry = 0;
    let result = [];
    for (let i = num1Str.length - 1; i >= 0; i--) {
      let res = Number(num1Str[i]) + Number(num2Str[i]) + carry;
      result.push(res % 10);
      if (res > 9) {
        carry = 1;
      } else {
        carry = 0;
      }
    }
    this.sumArr.push({
      result,
      carry
    });
    return this;
  }
  sub(num1Str, num2Str) {
    let carry = 0;
    let result = [];
    for (let i = num1Str.length - 1; i >= 0; i--) {
      let res = Number(num1Str[i]) - Number(num2Str[i]) + carry;
      result.push((10 + res) % 10);
      if (res < 0) {
        carry = -1;
      } else {
        carry = 0;
      }
    }
    this.sumArr.push({
      result,
      carry
    });
    return this;
  }
  // 位数较少的按位补零
  fillZero(num, length, postion) {
    if (num.length < length) {
      return `${postion === this.zerosMode.tail ? num : ""}${"0".repeat(
        length - num.length
      )}${postion === this.zerosMode.head ? num : ""}`;
    } else {
      return num;
    }
  }
  //比较字符串大小，决定是add还是sub
  compare(n1, n2) {
    if (n1.length == n2.length) {
      if (n1 == n2) return 0;
      return n1 > n2 ? 1 : -1;
    }
    return n1.length > n2.length ? 1 : -1;
  }
  // 保证num1>num2
  swap() {
    let isSwap = this.compare(this.num1Arr[1], this.num2Arr[1]);
    // 整数部分一样，比较小数部分
    if (isSwap === 0) {
      isSwap = this.compare(this.num1Arr[2], this.num2Arr[2]);
    }
    if (isSwap < 0) {
      let tmp = this.num1Arr;
      this.num1Arr = this.num2Arr;
      this.num2Arr = tmp;
    }
  }
  sum() {
    if (this.num1Arr[0] === this.num2Arr[0]) {
      // 符号位一样
      this.add(
        // 整数位相加
        this.fillZero(
          this.num1Arr[1],
          this.num2Arr[1].length,
          this.zerosMode.head
        ),
        this.fillZero(
          this.num2Arr[1],
          this.num1Arr[1].length,
          this.zerosMode.head
        )
      ).add(
        // 小数位相加
        this.fillZero(
          this.num1Arr[2],
          this.num2Arr[2].length,
          this.zerosMode.tail
        ),
        this.fillZero(
          this.num2Arr[2],
          this.num1Arr[2].length,
          this.zerosMode.tail
        )
      );
    } else {
      this.sub(
        this.fillZero(
          this.num1Arr[1],
          this.num2Arr[1].length,
          this.zerosMode.head
        ),
        this.fillZero(
          this.num2Arr[1],
          this.num1Arr[1].length,
          this.zerosMode.head
        )
      ).sub(
        this.fillZero(
          this.num1Arr[2],
          this.num2Arr[2].length,
          this.zerosMode.tail
        ),
        this.fillZero(
          this.num2Arr[2],
          this.num1Arr[2].length,
          this.zerosMode.tail
        )
      );
    }
    return this.format();
  }
  format() {
    const integerResult = this.sumArr[0];
    const decimalResult = this.sumArr[1];
    // 整数进位处理
    if (integerResult.carry > 0) {
      integerResult.result.push(integerResult.carry);
    }
    // 小数进位到整数位处理
    for (let i = 0; i < integerResult.result.length; i++) {
      let total = integerResult.result[i] + decimalResult.carry;
      if (total < 0) {
        decimalResult.carry = -1;
        integerResult.result[i] = 10 + total;
        continue;
      }
      if (total > 9) {
        decimalResult.carry = 1;
      } else {
        decimalResult.carry = 0;
      }
      integerResult.result[i] = total % 10;
    }
    if (decimalResult.carry > 0) {
      integerResult.result.push(decimalResult.carry);
    }
    //去除多余的0
    let decimal = decimalResult.result
      .reverse()
      .join("")
      .replace(/(\d+?)0*$/, "$1");
    return `${this.num1Arr[0] > 0 ? "" : "-"}${integerResult.result
      .reverse()
      .join("")
      .replace(/^0*(\d+)$/, "$1")}${decimal == 0 ? "" : "." + decimal}`;
  }
}
console.log(new BigNumber("123456666666", "123").sum());
console.log(new BigNumber("1", "23").sum());
console.log(new BigNumber("-30.01", "23.09").sum());
console.log(new BigNumber("-22", "231").sum());
console.log(new BigNumber("-0.1", "0.1").sum());
console.log(new BigNumber("9.089", "0.001").sum());
console.log(new BigNumber("9.999", "0.001").sum());
console.log(new BigNumber("9.088888888888888888888888", "0.001").sum());
console.log(new BigNumber("-22", "211").sum());
