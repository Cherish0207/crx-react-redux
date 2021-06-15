// 面试问reduce,会让你实现compose(组合函数)
// reduce可以做收敛函数, 最终转化成一个结果---compose的实现

function sum(...args) {
  return args.join("");
}
function len(str) {
  return str.length;
}
function addPrefix(str) {
  return "$" + str;
}
// console.log(addPrefix(len(sum("a", "b")))); // $2

// redux刚出的时候-->reduceRight,  要对第一次进行特殊处理
const compose1 =
  (...fns) =>
  (...args) => {
    let lastFn = fns.pop();
    return fns.reduceRight((prev, current) => current(prev), lastFn(...args));
  };

// 一年后,改成-->reduce
/**
 * 第一次reduce
 * a:addPrefix b:len
 *
 * 第二次reduce
 * a:function(...args) {return addPrefix(len(...args))}  b:sum
 *
 * function(...args) {
 *   return (function(...args) {return addPrefix(len(...args))})(sum(...args))
 * }
 *
 * function(...args) {
 *   return addPrefix(len(sum(...args)))
 * }
 * 包的时候先包外面,执行时从里一层层往外
 */

const compose2 = (...fns) =>
  fns.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
let final1 = compose1(addPrefix, len, sum);
const r1 = final1("a", "b");
console.log(r1);

let final2 = compose2(addPrefix, len, sum);
const r2 = final2("a", "b", "c");
console.log(r2);
