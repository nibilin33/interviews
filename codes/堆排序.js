const arr = [1,3,2,6,5,7,8,9,10,0];
function adownAjust(arr,parentIndex,len) {
    let temp = arr[parentIndex];
    let childIndex = parentIndex*2+1;//左孩子 
    console.log(parentIndex,childIndex,'init');
    while(childIndex < len) {
        // 如果有右孩子，并且右孩子大于左孩子，则定位到右孩子       
        if(childIndex+1<len && arr[childIndex+1]>arr[childIndex]) {
            childIndex++;
        }
        // 如果父比孩子都大，就跳出循环
        if(temp>arr[childIndex]){
            break;
        }
        // 孩子比父节大，两个交换   
        arr[parentIndex]=arr[childIndex];
        parentIndex = childIndex;
        childIndex = 2 * childIndex+1;
    }
    // 沉到下边
    console.log(parentIndex);
    arr[parentIndex] = temp;
}
function heapSort(arr) {
    // 无序构建最大堆       
    for(let i = (arr.length - 2)/2;i>=0;i--) {
        adownAjust(arr,i,arr.length);
    }
    // 堆顶是最大值     
    // 循环删除堆顶元素，移动到尾部，调整产生新堆。     
    for(let i= arr.length - 1;i>0;i--) {
        let temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        adownAjust(arr,0,i);
    }
}
heapSort(arr);
console.log(arr);