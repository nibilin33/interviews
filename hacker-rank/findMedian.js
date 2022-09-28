function findMedian(arr) {
    // Write your code here
    const mid = parseInt(arr.length/2);
    arr = arr.sort((a,b)=>b-a);
    return arr[mid];
}

function main() {

    const arr =[5,3,1,2,4];

    const result = findMedian(arr);
    console.log(result);
}
main();