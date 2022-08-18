let mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  let left = arr.slice(0, Math.floor(arr.length / 2)); //左边数组截取为0到数组的2分之1
  let right = arr.slice(Math.floor(arr.length / 2)); //右边数组截取为从2分之1开始
  return merge(mergeSort(left), mergeSort(right)); //对左右两部分继续进行mergeSort的操作后进行归并
};

let merge = (a, b) => {
  if (a.length === 0) return b;
  if (b.length === 0) return a; //特殊情况a或者b为空数组则直接返回另一半
  return a[0] > b[0]
    ? [b[0]].concat(merge(a, b.slice(1)))
    : [a[0]].concat(merge(a.slice(1), b)); //实现归并排序
};

// let mergeSort = (arr) => {
//   if (arr.length === 1) return arr;
//   let left = arr.slice(0, Math.floor(arr.length / 2));
//   let right = arr.slice(Math.floor(arr.length / 2));
//   return merge(mergeSort(left), mergeSort(right));
// };

// let merge = (a, b) => {
//   if (a.length === 0) return b;
//   if (b.length === 0) return a;
//   return a[0] > b[0]
//     ? [b[0]].concat(a, b.slice(1))
//     : [a[0]].concat(a.slice(1), b);
// };
