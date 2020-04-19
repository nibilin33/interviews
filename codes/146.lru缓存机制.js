/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.maxLen =  capacity;
    this.keys = [];
    this.cached = {};
    this.updateKeys = (key)=>{
        let index = this.keys.findIndex((it)=>it==key);
        if(index>-1) {
            this.keys.splice(index,1);
        }
        this.keys.push(key);
    };
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.maxLen<0) {
        return -1;
    }
    if(typeof this.cached[key] === 'undefined') {
        return -1;
    }
    let result = this.cached[key];
    this.updateKeys(key);
    return result;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.maxLen<0) {
        return;
    }
    if(typeof this.cached[key] !=='undefined') {
        this.updateKeys(key);
    }else{
        this.keys.push(key);
    }
    this.cached[key] = value;
    if(this.keys.length>this.maxLen) {
        let deleted = this.keys.splice(0,1);
        delete this.cached[deleted[0]];
    }

};
// var cache = new LRUCache(2);
// cache.put(2, 1);
// cache.put(2, 2);
// console.log(cache.get(2));//2
// cache.put(1, 1);
// cache.put(4, 1); 
// console.log(cache.get(2)); //-1
// var cache2 = new LRUCache(2);
// cache2.put(2, 1);
// cache2.put(1, 1);
// cache2.put(2, 3);
// cache2.put(4, 1); 
// console.log(cache2.get(1)); //-1
// console.log(cache2.get(2));//3
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

