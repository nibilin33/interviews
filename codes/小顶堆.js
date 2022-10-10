class Heap{
    constructor(){
        this.store = [];
    }
    length() {
        return this.store.length;
    }
    min() {
        return this.store[0];
    }
    push(value){
        this.store.push(value);
        this.heapverify();
    }
    // 堆顶出队，把最后一个节点换到堆顶位置，调整
    pop(){
        let min = this.store[0];
        this.store[0] = this.store[this.store.length-1];
        this.store.pop();
        this.heapverifyDown();
        return min;
    }
    // 把大的降下去
    heapverifyDown() {
       let parent = 0;
       let child = 1;
       while(child < this.store.length) {
            if(child+1<this.store.length && this.store[child+1]<this.store[child]) {
                child++;
            }
            if(this.store[parent] <= this.store[child]) {
                break;
            }
            let tmp = this.store[parent];
            this.store[parent] = this.store[child];
            this.store[child] = tmp;
            parent = child;
            child = child*2+1;
       }
    }
    // 把最小的升上去
    heapverify(){
        if(this.store.length == 0) {
            return;
        }
        let child = this.store.length - 1;
        let parent = parseInt((child-1)/2);
        while(parent>=0 && this.store[child]<this.store[parent]) {
            let tmp = this.store[child];
            this.store[child] = this.store[parent];
            this.store[parent] = tmp;
            child = parent;
            parent = parseInt((parent-1)/2);
        }
    }
}