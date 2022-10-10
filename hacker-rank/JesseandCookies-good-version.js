
/*
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */
/*
priority heap
父节点：arr[i]
左子节点：arr[i*2]
右子节点：arr[i*2 + 1]
*/
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
function cookies(k, A) {
    // Write your code here
    if(A.length === 0) {
        return -1;
    }
    let Aheap = new Heap();
    for(let i=0;i<A.length;i++){
        Aheap.push(A[i]);
    }
    let iteration = 0;
    while(Aheap.min()<k) {
        if(Aheap.length()===1) {
            return -1;
        }
        let sweet1 = Aheap.pop();
        let sweet2 = Aheap.pop();
        let sweetness = sweet1 + 2*sweet2;
        Aheap.push(sweetness);
       
        iteration++;
    }
    if(Aheap.length() == 0) {
        return -1;
    }
    if(Aheap.min()<k) {
        return -1;
    }
    return iteration;
}
function main() {

    const k = 2280;
    const A = [9660,9902,5775,2183,3974,7742,576,8786,7615,5575,6287,5495,161,3520,344,805,786,3802,4843,7424,634,7916,6989,3499,1216,1293,9965,6299,7899,4763,7272,9785,8469,395,1034,8763,8003,9464,5081,2064,4401,6850,8792,1603,7547,3354,8827,887,8151,2470,9995,7228,8198,5600,1829,8814,5282,3930,2481,6873,9165,497,2158,1752,878,8448,7862,7685,7988,3536,8227,8863,8663,1823,8510,7065,6927,610,4220,7096,7685,6992,976,5081,2389,1844,9843,8741,9582,3479,420,4136];
    const result = cookies(k, A); // 14
    console.log(result);

}
main();