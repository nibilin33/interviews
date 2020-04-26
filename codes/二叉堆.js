/* insert，插入新节点:要插入的元素添加到堆底的最后，然后让其上浮到正确位置。
get 返回堆顶元素    
delete 删除堆顶元素:方法先把堆顶元素 A 和堆底最后的元素 B 对调，然后删除 A，最后让 B 下沉到正确位置。
print 先根遍历的顺序打印:根左右
heap = new Heap([1,5,3,8,8,5,6]);
heap.print()//1,5,8,8,3,5,6
heap.insert(4)
heap.insert(0)
heap.get()//0
heap.delete()
heap.print()//1,4,8,5,8,3,5,6 */

class Heap{
    constructor(data) {
        this.list = data;
        for(let i = 0;i<(this.list.length-2)/2;i++) {
            this.downAdjust(i);
        }
    }
    swap(i,j) {
        let temp = this.list[i];
        this.list[i] = this.list[j];
        this.list[j] = temp;
    }
    upAjust() {
        let ch = this.list.length -1;
        let parent = (ch - 2) / 2;
        while(ch>0&&this.list[ch]<this.list[parent]) {
            this.swap(ch,parent);
            ch = parent;
            parent = (ch - 1) / 2;
        }
    }
    // 大的下沉
    downAdjust(i) {
        let left = i*2+1;
        let len = this.list.length-1;
        while(left<=len) {
            if(left+1<len&&this.list[left+1]<this.list[left]) {
                left++;
            }
            if(this.list[i]<this.list[left]) {
                break;
            }
            this.swap(i,left);
            i = left;
            left = i*2+1;
        }
    }
    // 添加，上浮
    insert(value) {
        this.list.push(value);
        this.upAjust();
    }
    //删除下沉
    delete() {
        this.swap(0,this.list.length-1);
        this.list.pop();
        for(let i = 0;i<(this.list.length-2)/2;i++) {
            this.downAdjust(i);
        }
    }
    get() {
        return this.list[0];
    }
    print(i=0) {
        if(i<this.list.length) {
            console.log(this.list[i]);
            this.print(i*2+1);
            this.print(i*2+2);
        }
    }
}
let heap = new Heap([1,5,3,8,8,5,6]);
heap.print();
heap.insert(4);
heap.insert(0);
heap.delete();
heap.print();
