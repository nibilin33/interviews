/*
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */

function cookies1(k, A) {
  // Write your code here
  A = A.sort((a, b) => a - b);
  let iteration = 0;
  let lastIndex = 0;
  let lastSweet = 0;
  function twoWaySort(startIndex, value) {
    let start = startIndex,
      end = A.length;
    let mid = A.length;
    while (start < end) {
      mid = parseInt((start + end) / 2);
      if (A[mid] > value) {
        end = mid;
      } else if (A[mid] < value) {
        if (A[mid + 1] > value) {
          return mid + 1;
        }
        start = mid + 1;
      } else {
        return mid;
      }
    }
    return mid;
  }
  console.time();
  while (A.length >= 2 && A[0] < k) {
    iteration++;
    const sweet1 = A.shift(),
      sweet2 = A.shift();
    const newSweet = sweet1 + 2 * sweet2;
    if (lastSweet === newSweet) {
      lastIndex = lastIndex + 1;
      A.splice(lastIndex, 0, newSweet);
    } else {
      if (newSweet < A[0]) {
        A.unshift(newSweet);
      } else if (newSweet > A[A.length - 1]) {
        A.push(newSweet);
      } else {
        let index = twoWaySort(lastIndex, newSweet);
        A.splice(index, 0, newSweet);
        lastIndex = index - 1;
      }
    }
    lastSweet = newSweet;
  }
  console.timeEnd();
  if (A.length == 0) {
    return -1;
  }
  if (A[0] < k) {
    return -1;
  }
  return iteration;
}
function cookies(k, A) {
  // Write your code here
  console.time();
  A = A.sort((a, b) => b - a);
  let iteration = 0;
  let lastIndex = 0;
  let lastSweet = 0;
  function twoWaySort(startIndex, value) {
    let start = startIndex,
      end = A.length;
    let mid = A.length;
    while (start < end) {
      mid = parseInt((start + end) / 2);
      if (A[mid] > value) {
        end = mid;
      } else if (A[mid] < value) {
        if (A[mid + 1] > value) {
          return mid + 1;
        }
        start = mid + 1;
      } else {
        return mid;
      }
    }
    return mid;
  }

  while (A.length >= 2 && A[A.length - 1] < k) {
    iteration++;
    const sweet1 = A.pop(),
      sweet2 = A.pop();
    const newSweet = sweet1 + 2 * sweet2;
    if (lastSweet === newSweet) {
      lastIndex = lastIndex + 1;
      A.splice(lastIndex, 0, newSweet);
    } else {
      if (newSweet < A[0]) {
        A.push(newSweet);
      } else if (newSweet > A[A.length - 1]) {
        A.unshift(newSweet);
      } else {
        let index = twoWaySort(lastIndex, newSweet);
        A.splice(index, 0, newSweet);
        lastIndex = index - 1;
      }
    }

    lastSweet = newSweet;
  }
  console.timeEnd();
  if (A.length == 0) {
    return -1;
  }
  if (A[0] < k) {
    return -1;
  }
  return iteration;
}
const reachMinSweatness = (arr, target) => {
  console.time();
  const minHeap = new Heap();
  arr.forEach(el => minHeap.add(el));
  let count = 0;
  while (minHeap.min() < target) {
    if (minHeap.length() === 1) return -1;
    const firstMin = minHeap.extractMin();
    const secondMin = minHeap.extractMin();
    const combinedMins = firstMin * 1 + secondMin * 2;
    minHeap.add(combinedMins);
    count += 1;
  }
  console.timeEnd();
  return count;
};

class Heap {
  constructor() {
    this.store = [];
  }

  length() {
    return this.store.length;
  }

  min() {
    return this.store[0];
  }

  add(el) {
    this.store.push(el);
    this.heapifyUp();
  }

  extractMin() {
    const min = this.store[0];
    this.store[0] = this.store[this.store.length - 1];
    this.store.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let currentElIdx = this.store.length - 1;
    let parentIdx = Math.floor((currentElIdx - 1) / 2);

    while (parentIdx >= 0 && this.store[currentElIdx] < this.store[parentIdx]) {
      const hold = this.store[currentElIdx];
      this.store[currentElIdx] = this.store[parentIdx];
      this.store[parentIdx] = hold;

      currentElIdx = parentIdx;
      parentIdx = Math.floor((currentElIdx - 1) / 2);
    }

    return this.store;
  }

  heapifyDown() {
    let parentIdx = 0;
    let childIndices = this.getChildIndices(parentIdx);

    while (
      (childIndices.length > 0 &&
        this.store[childIndices[0]] < this.store[parentIdx]) ||
      (childIndices[1] && this.store[childIndices[1]] < this.store[parentIdx])
    ) {
      if (
        childIndices[1] &&
        this.store[childIndices[1]] < this.store[childIndices[0]]
      ) {
        const hold = this.store[childIndices[1]];
        this.store[childIndices[1]] = this.store[parentIdx];
        this.store[parentIdx] = hold;

        parentIdx = childIndices[1];
        childIndices = this.getChildIndices(parentIdx);
      } else {
        const hold = this.store[childIndices[0]];
        this.store[childIndices[0]] = this.store[parentIdx];
        this.store[parentIdx] = hold;

        parentIdx = childIndices[0];
        childIndices = this.getChildIndices(parentIdx);
      }
    }

    return this.store;
  }

  getChildIndices(parentIdx) {
    const childIndices = [];
    if (parentIdx * 2 + 1 < this.store.length)
      childIndices.push(parentIdx * 2 + 1);
    if (parentIdx * 2 + 2 < this.store.length)
      childIndices.push(parentIdx * 2 + 2);
    return childIndices;
  }
}
function main() {
  const k = 105823341;
  const A = new Array(100000).fill(10000);
  //const result = cookies(k, A);
  const result = reachMinSweatness(A, k);

  console.log(result);
}
main();
