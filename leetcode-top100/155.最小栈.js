/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
  this.arr = [];
  this.min = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.arr.push(val);
  if (val < this.min) {
    this.min = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.arr.length === 0) {
    return null;
  }
  let val = this.arr.pop();
  if (val === this.min) {
    if (this.arr.length === 0) {
      this.min = Infinity;
    } else {
      let clone = JSON.parse(JSON.stringify(this.arr));
      clone.sort((a, b) => a - b);
      console.log(clone);
      this.min = clone[0];
    }
  }
  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const len = this.arr.length;
  if (len > 0) {
    return this.arr[len - 1];
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.arr.length === 0) {
    return null;
  }
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(-10)
 * obj.push(14)
 * console.log(obj.getMin());
 * console.log(obj.getMin());
 * obj.
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 * ["MinStack","push","push","getMin","getMin","push","getMin","getMin","top","getMin","pop","push","push","getMin","push","pop","top","getMin","pop"] 
[[],[-10],[14],[],[],[-20],[],[],[],[],[],[10],[-7],[],[-7],[],[],[],[]]
 */
// @lc code=end
