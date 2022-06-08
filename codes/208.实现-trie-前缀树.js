/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
function Node(val) {
    this.val = val||null;
    this.child = {};
    this.isEnd = false;
}
var Trie = function() {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.root;
    for(let ch of word) {
        if(typeof cur.child[ch] === 'undefined') {
            cur.child[ch] = new Node(ch);
        }
        cur = cur.child[ch]
    }
        cur.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.root;
    for(let ch of word) {
        if(typeof cur.child[ch] === 'undefined') {
            return false;
        }
       cur = cur.child[ch];
    }
    if(cur.isEnd) {
        return true;
    }
    return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.root;
    for(let ch of prefix) {
        if(typeof cur.child[ch] === 'undefined') {
            return false;
        }
       cur = cur.child[ch];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

