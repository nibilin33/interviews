// 1. 对象去重
const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 }
];

// 2. 手写call & apply & bind

const personOne = {
  name: "xx",
  age: 12,
  say: function(gender, phone) {
    console.log(this.name, gender, phone);
  }
};

const personTwo = {
  name: "xxl",
  age: 24
};
personOne.say.selfCall(personTwo, "女", "123");
personOne.say.myApply(personTwo, ["女", "123"]);
personOne.say.myBind(personTwo, "女", "123")();
// 3. 实现函数柯里化
//接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
//并且返回接受余下的参数
const curry = (fn, arg) => {};
let abc = (a, b, c) => [a, b, c];
let curried = curry(abc);
let result6 = curried(1)(2)(3);
console.log(result6); // => [1, 2, 3]
result6 = curried(1, 2)(3);
console.log(result6); // => [1, 2, 3]
// 4. 实现一个函数判断数据类型
const instanceOf = ob => {};

// 5. 防抖 & 节流
// 防抖：延迟执行
const debounce = (fn, wait = 100) => {};
//节流:规定在一定的时间内触发一次
const throttle = (fn, time = 100) => {};
// 6. 深拷贝
const deepclone = ob => {};
const deepextend = (copy, result) => {};
// 7. 数组乱序
// index 和随机生成的[index,length]交换
function shuttle(arr) {}

// 8. 请手写一个Promise=-=, 实现 promise.all, promise.race
function PromiseM() {}

// 9.
let url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
function parseParam(url) {}
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
//10.
let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let data = {
  name: "姓名",
  age: 18
};
function render(template, data) {}
// 输出：我是姓名，年龄18，性别undefined
//11.
var s1 = "get-element-by-id";
// 转化为 getElementById
function caseIgnore(s) {}

/* 13. 实现千位分隔符
保留三位小数
parseToMoney(1234.56); // return '1,234.56'
parseToMoney(123456789); // return '123,456,789'
parseToMoney(1087654.321); // return '1,087,654.321' */
function parseToMoney(value) {}
// 14. 判断是否是电话号码
///^1[3|4|5|6|7|8|9][0-9]{9}$/
// 15. 在输入框中如何判断输入的是一个正确的网址
const isUrl = urlStr => {};
// 16 转换数组，原始 list 如下
let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 }
];
function convert(list) {}
const result2 = convert(list);

/* 转换成下面的结构
let result3 = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [...]
]; */

/* 17. 实现一个new操作符
它创建了一个全新的对象。
它会被执行[[Prototype]]（也就是__proto__）链接。 res.__proto__ = func.prototype;
它使this指向新创建的对象。。
通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。 apply
如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，
那么new表达式中的函数调用将返回该对象引用。 */
function New(fn) {}

/* 18. poll
下面实现了一个轮训函数。
这里的实现逻辑是：除非 fn 的调用返回真，否则每隔 interval ms 就再调用一次 fn，直到结果为真为止，然后返回结果；
如果调用时间过长，或调用出错，就报错返回。 */
function poll(fn, timeout, interval = 100) {}
/* 19.once
有时候，我们希望某个函数只调用一次，就像使用 onload 事件一样。
下面的代码提供这个功能： */
function once(fn) {}
/* 20.getAbsoluteUrl
由给定的一个字符串获取绝对 URL 并不像我们想象的那么容易。
浏览器提供了一个 URL 构造函数，
但是如果不能提供所需的参数（有时确实提供不了），
使用它就会出现问题。
这里有一个获得绝对 URL 和字符串输入的小技巧:就是读取链接元素的 href 属性时，得到总是绝对路径。 */
function getAbsoluteUrl(url) {}
/* 21.isNative
下面的函数 isNative 用来检查一个函数是由浏览器原生提供的，
还有由第三方创建的。 
原生的function 返回 { [native code] }
非原生的object 返回 [object Object]
*/
function isNative(value) {}
/* 22.insertRule
我们可以通过一个选择器获得一个 NodeList（比如通过 document.querySelectorAll），并给每个元素赋予样式，
但更有效率的方式是直接设置选择器样式 */

/* 23.matchesSelector
我们经常有验证输入数据的需求。要保证输入的是个真值，
或者保证表单里的输入数据是有效的等一些情况。
只有在这些数据验证通过了，才能进一步进行下一步的操作。
但是，我们又是怎样验证一个 DOM 元素是否是有效的呢？
下面提供的 matchesSelector 函数就是来解决这些问题的
——验证某个元素是否与给定的选择器相匹配。 */

// 24.快速的让一个数组乱序
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//25.判断两个变量是否一样 Object.is;

//26.实现lodash.get

//27.版本号排序[1.1.0,1.12.0,2.0,5.1]

// 28. 自己实现一个async函数

// 29. 请编写一个格式化字符串的函数，例如传入“我的名字叫{0}”和“strick”，返回“我的名字叫strick”
// 30.用JavaScript封装一个函数，可实现整数的千分位逗号分隔符（不用考虑小数），例如12345用12,345表示。
// 31. 如何判断某一年是闰年？
// 32. 如何计算两个日期相隔的天数？
// 33. 有一个数组，其值为[1,[2,[3,4,2],2],5,[6]]，如何才能输出[1,2,3,4,2,2,5,6]？
// 34. 请封装一个函数，用于判断某个数是否是质数。
