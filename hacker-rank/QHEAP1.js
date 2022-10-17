function processData(input) {
  //Enter your code here
  let heap = [];
  function operate(type, value) {
    switch (type) {
      case "1":
        if (heap.length === 0) {
          heap.push(value);
        } else {
          if (value < heap[0]) {
            heap.unshift(value);
          } else {
            heap.push(value);
          }
        }
        break;
      case "2":
        let index = heap.indexOf(value);
        heap.splice(index, 1);
        if (index === 0) {
          heap.sort((a, b) => a - b);
        }
        break;
      case "3":
        console.log(heap[0]);
        break;
    }
  }
  let arr = input.split("\n");
  arr.shift();
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].split(" ");
    operate(item[0], Number(item[1]));
  }
}
