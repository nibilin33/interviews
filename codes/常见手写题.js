// 1. 对象去重
// id相同的，保留第一个，其它的删除
const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 }
];
let result1 = responseList.reduce((pre, current) => {
  if (pre.find(it => it.id === current.id)) {
    return pre;
  }
  return [...pre, current];
}, []);
console.log(result1);
// 2. 手写call & apply & bind

const personOne = {
  name: "xx",
  age: 12,
  say: function(gender, phone) {
    console.log(this.name, gender, phone, this.age);
  }
};

const personTwo = {
  name: "xxl",
  age: 24
};

Function.prototype.selfCall = function(obj) {
  let ob = obj || window;
  let arg = [...arguments].slice(1);
  ob.func = this;
  const result = ob.func(...arg);
  delete ob.func;
  return result;
};
Function.prototype.myApply = function(obj) {
  let ob = obj || window;
  let arg = arguments.length ? arguments[1] : [];
  ob.func = this;
  const result = ob.func(...arg);
  delete ob.func;
  console.log("apply");
  return result;
};
/**
 * 
bind的特性
传递的第一个参数做为调用它的函数的this指向（bind可传递若干参数）。
若第一个参数传递基础数据类型，则调用他的函数的this指向该基础数据类型的包装类实例化对象。
若第一个参数为null或undefined，则调用他的函数的this指向window。
bind的第二个之后的参数为调用它的函数的参数列表。
bind方法会返回一个新的方法，并且该方法满足柯里化，仍可以传递参数，但这个方法的this不可被call、apply、bind改变。
bind方法返回的新方法，如果使用new实例化，那么原本通过bind绑定的this指向的对象会失效，this将指向到新实例化的对象上，且可以使用原方法原型链上的属性或方法。
*/
Function.prototype.myBind = function(obj) {
  let ob = obj || window;
  let arg = [...arguments].slice(1);
  console.log("bind");
  return () => {
    this.apply(ob, arg);
  };
};
personOne.say.selfCall(personTwo, "女", "123");
personOne.say.myApply(personTwo, ["女", "123"]);
personOne.say.myBind(personTwo, "女", "123")();
// 3. 实现函数柯里化
//接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
//并且返回接受余下的参数
const curry = (fn, arg) => {
  let _this = this;
  let len = fn.length;
  let args = arg || [];
  return function() {
    let _args = Array.prototype.slice.call(arguments);
    Array.prototype.push.apply(args, _args);
    if (args.length < len) {
      return curry.call(_this, fn, args);
    }
    return fn.apply(this, args);
  };
};
let abc = (a, b, c) => [a, b, c];
let curried = curry(abc);
let result6 = curried(1)(2)(3);
console.log(result6); // => [1, 2, 3]
result6 = curried(1, 2)(3);
console.log(result6); // => [1, 2, 3]
// 实现一个add方法，使计算结果能够满足如下预期：
console.log(add(1)(2)(3)); // 6;
console.log(add(1, 2, 3)(4)); // 10;
console.log(add(1)(2)(3)(4)(5)); // 15;
// 4. 实现一个函数判断数据类型
const instanceOf = ob => {
  return typeof ob === "object"
    ? ob.toString().match(/\[object (\w+)\]/)[1]
    : typeof ob;
};

// 5. 防抖 & 节流
// 防抖：延迟执行
const debounce = (fn, wait = 100) => {
  let timeout = null;
  return function() {
    let that = this;
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn.apply(that, args);
    }, wait);
  };
};
//节流:规定在一定的时间内触发一次
const throttle = (fn, time = 100) => {
  let timeout = true;
  return function() {
    if (!timeout) return;
    timeout = false;
    let that = this;
    let args = arguments;
    setTimeout(function() {
      fn.apply(that, args);
      timeout = true;
    }, wait);
  };
};
// 6. 深拷贝
let obj1 = {
  age: 20,
  name: "xxx",
  address: {
    city: {
      name: "beijing"
    }
  },
  arr: ["a", "b", "c"]
};
const deepclone = ob => {
  return JSON.parse(JSON.stringify(ob));
};
let obj2 = deepclone(obj1);
obj2.address.city.name = "city";
obj2.arr[0] = "a1";
console.log(obj1);
const deepextend = (copy, result) => {
  result = result || {};
  for (let ch in copy) {
    if (typeof copy[ch] === "object") {
      deepextend(copy[ch], result[ch]);
    } else {
      result[ch] = copy[ch];
    }
  }
  return result;
};
// 7. 数组乱序
// index 和随机生成的[index,length]交换
function shuttle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapIndex = Math.floor(Math.random() * (arr.length - i)) + i;
    let temp = arr[i];
    arr[i] = arr[swapIndex];
    arr[swapIndex] = temp;
  }
}

// 8. 请手写一个Promise=-=
// 有问题。。。
// function PromiseM() {
//   this.status = 'pending';
//   this.msg = '';
//   var process = arguments[0];
//   var that = this;
//   process(function () {
//     that.status = 'resolve';
//     that.msg = arguments[0];
//   }, function () {
//     that.status = 'reject';
//     that.msg = arguments[0];
//   });
//   return this;
// }
// PromiseM.prototype.then = function () {
//   if (this.status == 'resolve') {
//     arguments[0](this.msg);
//   }
//   if (this.status == 'reject' && arguments[1]) {
//     arguments[1](this.msg);
//   }
// }
function PromiseM(fn) {
  this.status = "pedding";
  this.msg = "";
  this.resolveQue = [];
  this.rejectQue = [];
  let that = this;
  if (typeof fn === "function") {
    fn(
      function() {
        that.status = "success";
        that.msg = arguments[0];
        var cb = null;
        while ((cb = that.resolveQue.shift())) {
          cb(that.msg);
        }
      },
      function() {
        that.status = "fail";
        that.msg = arguments[0];
      }
    );
  }
  return this;
}
PromiseM.prototype.then = function() {
  let callback = arguments[0];

  if (this.status === "pedding") {
    this.resolveQue.push(() => {
      callback(this.msg);
    });
    return this;
  }
  if (this.status === "success") {
    callback(this.msg);
  }
  return this;
};
PromiseM.prototype.catch = function() {
  if (this.status === "fail") {
    let callback = arguments[0];
    callback(this.msg);
  }
  return this;
};
PromiseM.prototype.all = function(args) {
  let ar = Array.from(args);
  let len = ar.length;
  let inx = 0;
  let data = new Array(len);
  return new PromiseM((resolve, reject) => {
    ar.forEach((prom, index) => {
      prom
        .then(res => {
          data[index] = res;
          inx++;
          console.log(inx, len);
          if (inx === len) {
            resolve(data);
          }
        })
        .catch(e => {
          reject(e);
        });
    });
  });
};
PromiseM.prototype.race = function(arr) {
  return new PromiseM((res, rej) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i]
        .then(resolve => {
          res(resolve); //某一promise完成后直接返回其值
        })
        .catch(e => {
          rej(e); //如果有错误则直接结束循环，并返回错误
        });
    }
  });
};
// 9. 解析URL
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
let url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
function parseParam(url) {
  let result = {};
  const reg = /(?<=\?)\w+=\S+/g;
  url
    .match(reg)[0]
    .split("&")
    .forEach(name => {
      let [key, value] = name.split("=");
      if (result[key]) {
        if (Array.isArray(result[key])) {
          result[key].push(value);
        } else {
          result[key] = [result[key], value];
        }
      } else {
        result[key] = typeof value === "undefined" ? true : decodeURI(value);
      }
    });
  return result;
}
//10.
let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let data = {
  name: "姓名",
  age: 18
};
function render(template, data) {
  let reg = /{{(\w+)}}/g;
  return template.replace(reg, function(match, name) {
    return data[name];
  });
}
// 输出：我是姓名，年龄18，性别undefined
//11.
var s1 = "get-element-by-id";
// 转化为 getElementById
function caseIgnore(s) {
  const reg = /-(\w)/g;
  return s.replace(reg, function(match, res) {
    return res.toUpperCase();
  });
}

/* 13. 实现千位分隔符
保留三位小数
parseToMoney(1234.56); // return '1,234.56'
parseToMoney(123456789); // return '123,456,789'
parseToMoney(1087654.321); // return '1,087,654.321' */
function parseToMoney(value) {
  const reg = /(\d)(?=(\d{3})+$)/g;
  let sm = value.split(".");
  let res = sm[0].replace(reg, function(match) {
    return match + ",";
  });
  return res + (sm.length > 1 ? "." + sm[1] : "");
}
parseToMoney(1087654.321);
// 14. 判断是否是电话号码
///^1[3|4|5|6|7|8|9][0-9]{9}$/
// 15. 在输入框中如何判断输入的是一个正确的网址
const isUrl = urlStr => {
  try {
    const { href, origin, host, hostname, pathname } = new URL(urlStr);
    return href && origin && host && hostname && pathname;
  } catch (e) {
    return false;
  }
};
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
function convert(list) {
  let result = [];
  let map = {};
  for (let i = 0; i < list.length; i++) {
    if (!map[list[i].id]) {
      map[list[i].id] = Object.assign(list[i], { children: [] });
    }
    if (map[list[i].id].parentId === 0) {
      result.push(map[list[i].id]);
    }
    if (map[list[i].parentId]) {
      map[list[i].parentId].children.push(list[i]);
    }
  }
  return result;
}
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
function New(fn) {
  let res = {};
  res.__proto__ = fn.prototype;
  fn.apply(res, arguments[1]);
  return res;
}

/* 18. poll
下面实现了一个轮训函数。
这里的实现逻辑是：除非 fn 的调用返回真，否则每隔 interval ms 就再调用一次 fn，直到结果为真为止，然后返回结果；
如果调用时间过长，或调用出错，就报错返回。 */
function poll(fn, timeout, interval = 100) {
  let time = Number(new Date().valueOf() + (timeout || 2000));
  const checkFn = (resolve, reject) => {
    let result = fn();
    if (result) {
      resolve();
      return;
    }
    if (new Date().valueOf() > time) {
      reject();
    } else {
      setTimeout(() => {
        checkFn(resolve, reject);
      }, interval);
    }
  };
  return new Promise(checkFn);
}
/* 19.once
有时候，我们希望某个函数只调用一次，就像使用 onload 事件一样。
下面的代码提供这个功能： */
function once(fn) {
  let result = null;
  return function() {
    if (fn) {
      result = fn.apply(this, arguments);
      fn = null;
    }
    return result;
  };
}
/* 20.getAbsoluteUrl
由给定的一个字符串获取绝对 URL 并不像我们想象的那么容易。
浏览器提供了一个 URL 构造函数，
但是如果不能提供所需的参数（有时确实提供不了），
使用它就会出现问题。
这里有一个获得绝对 URL 和字符串输入的小技巧:就是读取链接元素的 href 属性时，得到总是绝对路径。 */
function getAbsoluteUrl(url) {
  let a = document.createElement("a");
  a.href = url;
  return a.href;
}
/* 21.isNative
下面的函数 isNative 用来检查一个函数是由浏览器原生提供的，
还有由第三方创建的。 
原生的function 返回 { [native code] }
非原生的object 返回 [object Object]
*/
function isNative(value) {
  if (typeof value == "function") {
    return Function.prototype.toString.call(value).indexOf("[native") > -1;
  }
  if (typeof value == "object") {
    return Object.prototype.toString.call(value).index("Object]") < 0;
  }
  return false;
}
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
arr.sort(function() {
  return Math.random() - 0.5;
});

//25.判断两个变量是否一样

if (!Object.is) {
  Object.is = function(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}
// 28. 实现async
function asyncToGenerator(generatorFunc) {
  // 返回的是一个新的函数
  return function() {
    // 先调用generator函数 生成迭代器
    // 对应 var gen = testG()
    const gen = generatorFunc.apply(this, arguments);

    // 返回一个promise 因为外部是用.then的方式 或者await的方式去使用这个函数的返回值的
    // var test = asyncToGenerator(testG)
    // test().then(res => console.log(res))
    return new Promise((resolve, reject) => {
      // 内部定义一个step函数 用来一步一步的跨过yield的阻碍
      // key有next和throw两种取值，分别对应了gen的next和throw方法
      // arg参数则是用来把promise resolve出来的值交给下一个yield
      function step(key, arg) {
        let generatorResult;

        // 这个方法需要包裹在try catch中
        // 如果报错了 就把promise给reject掉 外部通过.catch可以获取到错误
        try {
          generatorResult = gen[key](arg);
        } catch (error) {
          return reject(error);
        }

        // gen.next() 得到的结果是一个 { value, done } 的结构
        const { value, done } = generatorResult;

        if (done) {
          // 如果已经完成了 就直接resolve这个promise
          // 这个done是在最后一次调用next后才会为true
          // 以本文的例子来说 此时的结果是 { done: true, value: 'success' }
          // 这个value也就是generator函数最后的返回值
          return resolve(value);
        } else {
          // 除了最后结束的时候外，每次调用gen.next()
          // 其实是返回 { value: Promise, done: false } 的结构，
          // 这里要注意的是Promise.resolve可以接受一个promise为参数
          // 并且这个promise参数被resolve的时候，这个then才会被调用
          returnPromise
            .resolve(
              // 这个value对应的是yield后面的promise
              value
            )
            .then(
              // value这个promise被resove的时候，就会执行next
              // 并且只要done不是true的时候 就会递归的往下解开promise
              // 对应gen.next().value.then(value => {
              //    gen.next(value).value.then(value2 => {
              //       gen.next()
              //
              //      // 此时done为true了 整个promise被resolve了
              //      // 最外部的test().then(res => console.log(res))的then就开始执行了
              //    })
              // })
              function onResolve(val) {
                step("next", val);
              },
              // 如果promise被reject了 就再次进入step函数
              // 不同的是，这次的try catch中调用的是gen.throw(err)
              // 那么自然就被catch到 然后把promise给reject掉啦
              function onReject(err) {
                step("throw", err);
              }
            );
        }
      }
      step("next");
    });
  };
}
// 29. 实现深拷贝，考虑函数以及循环引用的情况(禁止使用JSON序列化)。
// https://wenku.baidu.com/view/f60173424bd7c1c708a1284ac850ad02de8007db.html

// 30.实现发布订阅（eventEmiter）

// 31. javascript 实现继承
const inherit = (child, parent) => {
  let fn = function() {};
  fn.prototype = parent.prototype;
  child.prototype = new fn();
  child.prototype.constructor = child;
};

// 32. 实现ajax
function ajax(method, url, data) {
  let request = new XMLHttpRequest();
  request.open(method, url);
  request.onreadystatechange = res => {};
  request.send();
}
// 33. 实现differenceBy
