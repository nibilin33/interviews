class Node {
    constructor(hash,key,value) {
        this.hash = hash;
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class HashTable{
    constructor(){
        this.size = 0;// 元素个数
    //负载因子，代表table最大的填充度，默认0.75，超过后会自动扩容
    //loadFactor = 表中元素个数/表的长度
        this.loadFactor = 0.75;
    //容量，哈希表中桶的数量，默认初始为16，扩容后一定为2的n次幂。
        this.capacity = 16;
        this.table = new Array(this.capacity);
    }
    /**
     * 哈希函数
     * 作用：返回key的hash值
     * 参数：key（String）
     */
    hashcode(key){
        let hash = 0;
        for(let i=0;i<key.length;i++) {
            //霍纳法则计算hashCode的值
            hash += hash*31+key[i].charCodeAt();
        }
        return hash;
    }
    push(key,value){
        let hash = this.hashcode(key);
        let index = hash % this.capacity;
        let node = new Node(hash,key,value);
        if(!this.table[index]) {
            this.table[index] = node;
        }else{
            let cur = this.getNode(key);
            if(cur.key === key) {
                cur.value = value;
            }else{
                let next = this.table[index];
                this.table[index] = node;
                node.next = next;
            }
            
        }
    }
    getNode(key) {
        let hash = this.hashcode(key);
        let index = hash % this.capacity;
        let node = this.table[index];
        if(node) {
            if(node.key === key) {
                return node;
            }else{
                let head = node.next;
                while(head) {
                    if(head.key === key) {
                        return head;
                    }else{
                        head = head.next;
                    }
                }
            }
        }
        return null;
    }
    get(key){
        let hash = this.hashcode(key);
        let index = hash % this.capacity;
        let node = this.table[index];
        if(node) {
            if(node.key === key) {
                return node.value;
            }else{
                let head = node.next;
                while(head) {
                    if(head.key === key) {
                        return head.value;
                    }else{
                        head = head.next;
                    }
                }
            }
        }
        return null;
    }
    remove(key){

    }
    /**
     * 哈希表扩容
     * 参数limit哈希表新的长度。
    */
    resize(limit){

    }
    /**
     * 打印哈希表
     */
    toString(){
        let str = "";
        for (const key in this.table) {
            if (this.table.hasOwnProperty(key)) {
                let bucket = this.table[key];
                while(bucket) {
                    let ob = {};
                    ob[bucket.key] = bucket.value;
                    str+=JSON.stringify(ob);
                    bucket = bucket.next;
                }
            }
        }
        return str;
    }
}
let hashtable = new HashTable();
hashtable.push('hello',2);
hashtable.push('wode',2);
console.log(hashtable.toString());