// 1. 对象去重
const responseList = [
    { id: 1, a: 1 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
];
let result1 = responseList.reduce((pre,current)=>{
    if(pre.find((it)=>it.id === current.id)) {
        return pre;
    }
    return [...pre,current];
},[]);
console.log(result1);
// 2. 手写call & apply & bind

const personOne = {
    name: "xx",
    age: 12,
    say: function (gender, phone) {
        console.log(this.name,gender,phone);
    }
}
 
const personTwo = {
    name: "xxl",
    age: 24
}

Function.prototype.selfCall=function(obj){
    let ob = obj||window;
    let arg = [...arguments].slice(1);
    ob.func = this;
    const result = ob.func(...arg);
    delete ob.func;
    return result;
}
Function.prototype.myApply=function(obj){
    let ob = obj||window;
    let arg = arguments.length ? arguments[1]:[];
    ob.func = this;
    const result = ob.func(...arg);
    delete ob.func;
    console.log('apply')
    return result;
}
Function.prototype.myBind=function(obj){
    let ob = obj||window;
    let arg = [...arguments].slice(1);
    console.log('bind');
    return ()=>{
        this.apply(ob,arg);
    }
}
personOne.say.selfCall(personTwo, "女", "123");
personOne.say.myApply(personTwo, ["女", "123"]);
personOne.say.myBind(personTwo, "女", "123")();
// 3. 实现函数柯里化
//接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
//并且返回接受余下的参数
const curry = (fn,arg)=>{
    let _this = this
    let len = fn.length;
    let args = arg || [];
    return function() {
        let _args = Array.prototype.slice.call(arguments);
        Array.prototype.push.apply(args, _args);
        if (args.length < len) {
            return curry.call(_this, fn, args);
        }
        return fn.apply(this, args);
    }
}
let abc = (a,b,c)=>[a,b,c];
let curried = curry(abc);
let result6 = curried(1)(2)(3);
console.log(result6);  // => [1, 2, 3]
result6 = curried(1,2)(3);
console.log(result6);  // => [1, 2, 3]   
// 4. 实现一个函数判断数据类型
const instanceOf = (ob) => {
  return typeof ob === 'object'? ob.toString().match(/\[object (\w+)\]/)[1]:typeof ob;
}

// 5. 防抖 & 节流
// 防抖：延迟执行
const debounce = (fn,wait = 100)=>{
  let timeout = null;
  return function(){
    let that = this; 
    let args = arguments; 
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn.apply(that, args);
    }, wait);
  }
}
//节流:规定在一定的时间内触发一次
const throttle = (fn,time = 100) => {
  let timeout = true;
  return function(){
    if(!timeout) return;
    timeout = false;
    let that = this; 
    let args = arguments; 
    setTimeout(function() {
      fn.apply(that, args);
      timeout = true;
    }, wait);
  }
}
// 6. 深拷贝
const deepclone = (ob)=>{
  return JSON.parse(JSON.stringify(ob));
}
const deepextend = (copy,result) => {
      result = result||{};
      for(let ch in copy) {
          if(typeof copy[ch] === 'object') {
            deepextend(copy[ch],result[ch]);
          }else{
            result[ch] = copy[ch];
          }
      }
      return result;
}
// 7. 数组乱序
// index 和随机生成的[index,length]交换
function shuttle(arr){
  for(let i=0;i<arr.length;i++) {
        let swapIndex = Math.floor(Math.random() * (arr.length - i)) + i;
        let temp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = temp;
  }
} 

// 8. 请手写一个Promise=-=
function PromiseM(){
  this.status='pending';
  this.msg='';
  var process=arguments[0];
  var that=this;
  process(function(){
      that.status='resolve';
      that.msg=arguments[0];
  },function(){
      that.status='reject';     
      that.msg=arguments[0];           
  });
  return this;
}
PromiseM.prototype.then=function(){
  if(this.status=='resolve'){
      arguments[0](this.msg);
  }
  if(this.status=='reject'&&arguments[1]){
      arguments[1](this.msg);
  }
}
// 9. 
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
function parseParam(url) {
  let result = {};
  const reg = /(?<=\?)\w+=\S+/g;
  url.match(reg)[0].split('&').forEach((name)=>{
      let [key,value]=name.split('=');
      if(result[key]) {
        if(Array.isArray(result[key])) {
          result[key].push(value);
        }else{
          result[key] = [result[key],value];
        }
      }else{
        result[key] = typeof value === 'undefined' ? true:decodeURI(value);
      }
  });
  return result;
}
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
//10. 
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
function render(template, data){
  let reg = /{{(\w+)}}/g;
  return template.replace(reg,function(match,name){
    return data[name];
  });
} 
// 输出：我是姓名，年龄18，性别undefined
//11. 
var s1 = "get-element-by-id";
// 转化为 getElementById
function caseIgnore(s) {
  const reg = /-(\w)/g;
  return s.replace(reg,function(match,res){
    return res.toUpperCase();
  })
}

/* 13. 实现千位分隔符
保留三位小数
parseToMoney(1234.56); // return '1,234.56'
parseToMoney(123456789); // return '123,456,789'
parseToMoney(1087654.321); // return '1,087,654.321' */
function parseToMoney(value){
  const reg = /(\d)(?=(\d{3})+$)/g;
  let sm = value.split('.');
  let res = sm[0].replace(reg,function(match){
    return match+',';
  })
  return res+(sm.length>1?'.'+sm[1]:'');
}
// 14. 判断是否是电话号码
///^1[3|4|5|6|7|8|9][0-9]{9}$/
// 15. 在输入框中如何判断输入的是一个正确的网址
const isUrl = urlStr => {
    try {
        const { href, origin, host, hostname, pathname } = new URL(urlStr)
        return href && origin && host && hostname && pathname;
    } catch (e) {
        return false
    }
}
// 16 转换数组，原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
function convert(list) {
  let result = [];
  let map = {};
  for(let i=0;i<list.length;i++) {
      if(!map[list[i].id]) {
        map[list[i].id]= Object.assign(list[i],{children:[]});
      } 
      if(map[list[i].id].parentId === 0) {
        result.push(map[list[i].id])
      }
      if(map[list[i].parentId]) {
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
  let res={};
  res.__proto__ = fn.prototype;
  fn.apply(res,arguments[1]);
  return res;
}

