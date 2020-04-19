const diff = (oldArr, newArr) => {
  let oldStart = 0,
    newStart = 0,
    oldEnd = oldArr.length - 1,
    newEnd = newArr.length - 1;
  let patchOld = [];
  while (oldStart <= oldEnd && newStart <= newEnd) {
    if (oldArr[oldStart] === newArr[newStart]) {
      oldStart++;
      newStart++;
    } else if (oldArr[oldEnd] === newArr[newEnd]) {
      oldEnd--;
      newEnd--;
    } else if (oldArr[oldStart] === newArr[newEnd]) {
      patchOld.push({
          type:'switch',
          from:oldStart,
          to:newEnd
      });
      oldStart++;
      newEnd--;
    } else if (oldArr[oldEnd] === newArr[newStart]) {
        patchOld.push({
            type:'switch',
            from:oldEnd,
            to:newStart
        });
      oldEnd--;
      newStart++;
    } else {
      let indexInOld = oldArr
        .slice(oldStart, oldEnd)
        .findIndex(it => it == newArr[newStart]);
      if (indexInOld > -1) {
        patchOld.push({
            type:'switch',
            from:indexInOld,
            to:newStart
        });
      } else {
        patchOld.push({
            type:'add',
            from:newStart,
            to:newStart,
            value:newArr[newStart]
        });
      }
      newStart++;
    }
  }
  if (oldStart > oldEnd) {
    patchOld.push({
        type:'add',
        from:oldStart,
        to:oldStart,
        value:newArr.slice(newStart, newEnd)
    });
  } else if (newStart > newEnd) {
    patchOld.push({
        type:'remove',
        from:oldStart,
        to:oldEnd,
    });
  }
  return patchOld;
};
//按照patchOld操作旧数组，就能得到新数组。     
console.log(diff([1, 2, 3, 4], [4, 3, 2, 1]));
console.log(diff([1,3,4,2],[3,1,2,5,6,7,4]));