const str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';
// 上面是一个字符串，请问其中最长的单词有多少个字符？

const compose = (...fns) =>
  fns.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
const map = (fn,arr)=>arr.map(fn)
const reduce = (fn, initial, arr) => {
  // debugger
  return arr.reduce(fn,initial,arr)
}

const splitBySpace = s => s.split(' ');// 以空格分割单词
const getLength = w => w.length;// 每个单词的长度
const getLengthArr = arr => map(getLength, arr); // 词的数组转换成长度的数组
const getBiggerNumber = (a, b) => a > b ? a : b; // 返回较大的数字
const findBiggestNumber = arr => reduce(getBiggerNumber, 0, arr); // 返回最大的一个数字

const getLongestWordLength = compose(
  findBiggestNumber,
  getLengthArr,
  splitBySpace
);

console.log(getLongestWordLength(str)) // 11
