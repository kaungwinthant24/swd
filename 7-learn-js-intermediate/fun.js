function add(x, y) {
  console.log(arguments);
  return x + y;
}
// console.log(add(1, 2));

// const add2 = function (x, y) {
//   return x + y;
// };
// console.log(add2(1, 2));

// const add3 = (x, y) => x + y;
// console.log(add3(3, 4));

// console.dir(new Function());

// const add4 = new Function("x", "y", "return x+y");
// console.log(add4(2, 5));
// -------------------------
// toString()
// console.log(add.toString());

// console.log(add(1, 2));

// console.log(add.bind(null, 1, 2).call());

// -------------
// Object
// const obj = {
//   a: "aaa",
//   b: "bbb",
// };
// console.log(obj);
// console.log(obj.toString());
// console.log(obj.toLocaleString());
// console.log(obj.hasOwnProperty("a"));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// -------------

// rest parameter

// const restParameter = (...x) => {
//   console.log(x);
//   return "this is rest parameter";
// };
// console.log(restParameter(1, 2, 3, 4, 5, 6, 7));

// function sum(x, y, ...nums) {
//   console.log(x);
//   console.log(y);
//   console.log(nums);
//   return nums.reduce((pv, cv) => pv + cv, 0);
// }
// console.log(sum(10, 20, 30, 40, 50));

// -------------

// Destrcuturing Assignment (values from array and properties from object)
// const arr = [10, 20, 30, 40, 50, 60];
// const [a, b, ...spread] = arr;
// console.log(a); // 10
// console.log(b); // 20
// console.log(spread); // 30, 40, 50, 60
// ----
// const obj = {
//   a: "aaa",
//   b: "bbb",
//   c: "ccc",
//   d: "ddd",
//   e: "eee",
// };
// const { a, b, ...spread } = obj;
// console.log(a); // cc
// console.log(b); // bbb
// console.log(spread); //  {c: 'ccc', d: 'ddd', e: 'eee'}

// -------------
