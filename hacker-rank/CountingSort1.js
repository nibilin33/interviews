/*
Quicksort usually has a running time of , but is there an algorithm that can sort even faster? 
In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. 
they sort a list just by comparing the elements to one another.
A comparison sort algorithm cannot beat  (worst-case) running time, 
since  represents the minimum number of comparisons needed to know where to place each element.
For more details, you can see Comparison-basedLowerBoundsforSorting.pdf
return int[100]: a frequency array
*/
function countingSort(arr) {
  // Write your code here
  let rs = new Array(100).fill(0);
  for (let i = 0; i < arr.length; i++) {
    rs[arr[i]] += 1;
  }
  return rs;
}
function main() {
  const arr = [1, 1, 3, 2, 1]; // [0,3,1,1]
  const result = countingSort(arr);
  console.log(result);
}
main();
