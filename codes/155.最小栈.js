/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
// 1. 设置一个辅助栈B，当只有一个元素的时候，让新元素也进入B。
// 2. 之后有新元素进入A的时候，比较大小，如果小于B的栈顶，就让进入B
// 3. 出栈的时候同时处理B
var MinStack = function() {
  this.mainStack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (!this.mainStack.length) {
    this.minStack.push(x);
  }
  this.mainStack.push(x);
  if (x <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let popValue = this.mainStack.pop();
  let popIndex = this.minStack.indexOf(popValue);
  if (popIndex > -1) {
    this.minStack.splice(popIndex, 1);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.mainStack[this.mainStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//  var obj = new MinStack();
//   obj.push(0);
//   obj.push(1);
//   obj.push(0);
//   console.log(obj.getMin());
//   obj.pop();
//   console.log(obj.getMin());

// @lc code=end
