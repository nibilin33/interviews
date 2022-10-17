var CQueue = function() {
  this.que = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.que.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.que.length === 0) {
    return -1;
  }
  let value = this.que.shift(0, 1);
  return value;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
