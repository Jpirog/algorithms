// selection sort - two arrays (one input, one output)
const selectionSortTwoArrays = (arr) => {
  // input array is mutated
  const res = [];
  while (arr.length) {
    const min = arr.reduce((low, c, i) => {
      if (c < low.val){
        low.val = c;
        low.idx = i;
      };
      return low;
    }, { val: Number.MAX_SAFE_INTEGER, idx: 0} )
    res.push(min.val);
    arr.splice(min.idx, 1);
  }
  return res;
}

console.log('************************************************************************************************************')
console.log(selectionSortTwoArrays([5,4,3,2,1]));
console.log(selectionSortTwoArrays([5,4,3,-2,-1]));
console.log(selectionSortTwoArrays([]));
console.log(selectionSortTwoArrays([6]));
console.log(selectionSortTwoArrays([-5,4,3,-2,-1]));

// selection sort - one array (sort in place)
const selectionSortOneArray = (arr) => {
  // input array is mutated
  let arrStart = 0;

  while (arrStart < arr.length) {
    let minVal = Number.MAX_SAFE_INTEGER;
    let idx;
    for (let i = arrStart; i < arr.length; i ++){
      if (arr[i] < minVal){
        minVal = arr[i];
        idx = i;
      };
    };
    [arr[arrStart], arr[idx]] = [arr[idx], arr[arrStart]]
    arrStart++;
  }
  return arr
}

console.log('************************************************************************************************************')
console.log(selectionSortOneArray([5,4,3,3,1]));
console.log(selectionSortOneArray([5,4,3,-2,-1]));
console.log(selectionSortOneArray([]));
console.log(selectionSortOneArray([6]));
console.log(selectionSortOneArray([-5,4,3,-2,-1]));

