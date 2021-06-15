// reduce:收敛函数,可以把一个数组转化成其他格式

// 执行过程 求和函数

// ** 使用reduce的前提:数组必须不能为空，如果只有一个值则返回当前值

// Array.prototype.reduce = function (callback, prev) {
//   for (let i = 0; i < this.length; i++) {
//     if (!prev) {
//       prev = callback(this[i], this[i + 1], i + 1, this);
//       i++; // 下次 从3开始
//     } else {
//       prev = callback(prev, this[i], i, this);
//     }
//   }
//   return prev;
// };
let r = [1, 2, 3, 4, 5].reduce(function (
  previousValue,
  currentValue,
  index,
  arrary
) {
  console.log(previousValue, currentValue);
  return previousValue + currentValue; // 返回值是上一次的 + 当前的值;
});
console.log(r);

// 实现数组flatten;
// console.log([1, [2, [3, [4]]]].flat(3));
