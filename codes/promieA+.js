/*
promise.then(function(x){ console.log('会执行这个函数，同时传入x变量的值', x);});  
如果x是一个promise，采用它的状态：如果promise和x引用同一个对象，
用一个TypeError作为原因来拒绝promise。
*/
const test = new Promise((resolve)=>{
    resolve(new Promise(resolve));
});
test.then((res)=>{
    console.log(res);
})

const test2 = new Promise((resolve)=>{
    resolve(this);
});
test2.then((res)=>{
    console.log(res);
})