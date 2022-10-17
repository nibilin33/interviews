// 低频率在前，高频率在后，创建一个节点评率等于叶子节点和，较小的在左，较大的在右
class Node {
  constructor(value, weight) {
    this.weight = weight;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function haffman(code, decode) {
  let frequentMap = {};
  for (let i = 0; i < code.length; i++) {
    if (typeof frequentMap[code[i]] == "undefined") {
      frequentMap[code[i]] = 0;
    }
    frequentMap[code[i]]++;
  }
  const list = Object.keys(frequentMap).sort(
    (a, b) => frequentMap[a] - frequentMap[b]
  );
  let head = new Node();
  while (list.length) {
    if (head.weight) {
      let newHead = new Node();
      let newCharacter = list.shift();
      let newNode = new Node(newCharacter, frequentMap[newCharacter]);
      newHead.weight = newNode.weight + head.weight;
      if (head.weight < frequentMap[newCharacter]) {
        newHead.left = head;
        newHead.right = newNode;
      } else {
        newHead.left = newNode;
        newHead.right = head;
      }
      head = newHead;
    } else {
      let left = list.shift();
      let right = list.shift();
      head.weight = frequentMap[left] + frequentMap[right];
      head.left = new Node(left, frequentMap[left]);
      head.right = new Node(right, frequentMap[right]);
    }
  }
  let result = "";
  for (let i = 0; i < decode.length; ) {
    let point = head;
    while (point.left && point.right) {
      if (decode[i] == "1") {
        point = point.right;
      } else {
        point = point.left;
      }
      i++;
    }
    result += point.value;
  }
  console.log(result);
}
haffman("ABACA", "1001011");
