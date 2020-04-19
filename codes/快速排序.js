const quickSort=(arr,start,end)=>{
    if(start>=end) {
        return;
    }
    let partionIndex = partition(arr,start,end);
    // 分治，基准两边同时进行排序，递归地进行
    quickSort(arr,start,partionIndex-1);
    quickSort(arr,partionIndex+1,end);
}
const partition=(arr,start,end)=>{
    let priv = arr[start];
    let mark = start;
    // 比基准小的都仍到基准左边
    for(let i=start+1;i<end;i++) {
        if(arr[i]<priv) {
            mark++;
            let tmp = arr[mark];
            arr[mark] = arr[i];
            arr[i] = tmp;
        }
    }
    // 最后把基准移动到mark的位置
    arr[start] = arr[mark];
    arr[mark] = priv;
    return mark;

}
let input = [4,1,2,6,5,3,9,8,7,0];
quickSort(input,0,input.length);
console.log(input);