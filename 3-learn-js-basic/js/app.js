// const myName = 'Kaung Win Thant';
// console.log(myName);

// function inchesToFeet(inch){
//     let unitConvention = 1/12;
//     return inch * unitConvention + ' ft';
// }
//     console.log(inchesToFeet(24));
//     console.log(inchesToFeet(12));
//     console.log(inchesToFeet(36));
//     console.log(inchesToFeet(48));

// Array 
// let fruits = ["apple","ornage","mango","pineapple"];
// console.log(fruits);
// // reasign array 
// fruits[1] = "new orange";
// console.log(fruits);

// let myself = [
//     "Kaung Win Thant",
//     23,
//     null,
//     "developer",
//     ["html","css","js","php","sql"],
//     "south okkalapa",
//     false 
// ];
// console.log(myself);
// console.log(typeof myself);  // object coz js is prototype language
// console.log(`
//     My name is ${myself[0]} and ${myself[1]} years old. My job is ${myself[3]} and I am good at ${myself[4][0]},${myself[4][1]},${myself[4][2]},${myself[4][3]},${myself[4][4]}. I live in ${myself[5]}.
// `);


// Array Construction
// let arr = [];
// // add new element 
// arr[0] = 'zero';
// arr[1] = 'one';
// arr[4] = 'four';
// arr[7] = 'seven';
// console.log(typeof arr);
// console.log(arr);
// console.log(arr.length);


// let arr = [];
// arr[arr.length] = "zero";
// arr[arr.length] = "one";
// arr[arr.length] = "two";
// arr[arr.length] = "three";
// console.log(arr);
// console.log(arr[arr.length-1]);


// Object 
// let myself = {
//     myName:"Hein Htet Zan",
//     myAge:23,
//     gf:null,
//     job:"developer",
//     skills: ['html','css','js','php','sql']
// };
// console.log(typeof myself);
// console.log(myself);
// console.log(myself.myName);
// console.log(myself.skills)
// console.log(myself.skills[2])
// // print object as arry
// console.log(myself['myAge']);

// Object Construction
// let obj = {};
// obj.a = "one";
// obj.b = "two";
// obj["c"] = "three";
// console.log(typeof obj);
// console.log(obj);

// ---------------------------

// *Problem 1

// let name = "Mg Mg";
// let age = 15;
// let address = "Kyaut Myaung";
// let money = 200;
// money -= 50;
// let mgmgBag = ['mm','eng','bio',null];
// let mgmgCanSmoke = false;
// let mgmgFriedsCanSmoke = true;

// const aboutMgMg = {
//     name:"Mg Mg",
//     age:15,
//     address:"Kyaut Myaung",
//     // money: money,  // *we can declare value as variable when it was assign
//     money, // *we can use one word when key name and value is same
//     bag: mgmgBag,
//     smoke: false
// };
// console.log(aboutMgMg);

// const aboutKyawKyaw = {
//     name:"Kyaw Kyaw",
//     age:15,
//     address:"Kyaut Myaung",
//     money: 300,
//     bag: ['mm','math'],
//     smoke: true
// };
// console.log(aboutKyawKyaw);

// const aboutZawZaw = {
//     name:"Zaw Zaw",
//     age:15,
//     address:"Kyaut Myaung",
//     money: 400,
//     bag: ['mm','math','bio'],
//     smoke: true
// };
// console.log(aboutZawZaw);

// const aboutMyaMya = {
//     name:"Mya Mya",
//     age:15,
//     address:"Kyaut Myaung",
//     money: 100,
//     bag: ['mm','eng','math','che','phy','bio'],
//     smoke: true
// };
// console.log(aboutMyaMya);

// const students = [
//     {
//         name:"Mg Mg",
//         age:15,
//         address:"Kyaut Myaung",
//         // money: money,  // *we can declare value as variable when it was assign
//         money, // *we can use one word when key name and value is same
//         bag: mgmgBag,
//         smoke: false
//     },
//     {
//         name:"Kyaw Kyaw",
//         age:15,
//         address:"Kyaut Myaung",
//         money: 300,
//         bag: ['mm','math'],
//         smoke: true
//     },
//     {
//         name:"Zaw Zaw",
//         age:15,
//         address:"Kyaut Myaung",
//         money: 400,
//         bag: ['mm','math','bio'],
//         smoke: true
//     },
//     {
//         name:"Mya Mya",
//         age:15,
//         address:"Kyaut Myaung",
//         money: 100,
//         bag: ['mm','eng','math','che','phy','bio'],
//         smoke: true
//     }
// ];

// console.log(students);
// console.log("Mg Mg age is", students[0].age);
// console.log("Kyaw Kyaw Bag includs ", students[1]['bag']);
// console.log("Zaw Zaw can smoke =", students[2].smoke);
// console.log("bio book in Mya Mya Bag ", students[3].bag[5]);

// ---------------------------

// let num = 5;
// console.log(num);
// num++;
// console.log("++",num);
// num+=1;
// console.log("+=",num);

// let num = 5;
// console.log(num);
// num--;
// console.log("--",num);
// num-=1;
// console.log("-=",num);

// let num = 5;
// console.log(num++);  // after increment 5 to 6 but now 5
// console.log(++num); //  before increment 6 to 7 Now 7

// let num = 5;
// console.log(num--);  // after decrement 5 to 4 but now 5
// console.log(--num); //  before decrement 4 to 3 Now 3

// ---------------------------

// Logical Operator
// let condition = true;
// console.log(!condition); // false

// Note => true=1 false=0
// && || * +

// truthy and falsey // learn in MDN Website

// Conditional Expression 
// console.log( 1==1 ? true : false);

// ---------------------------
// Default Parameter Function 

function run(text='hello world'){
    return  "this is run " + text;
}
console.log(run());  // this is run hello world
// console.log(run('hello hell')); // this is run hello hell
console.log(`${run('hi')}`);

// ---------------------------
// Function Expression 
// const funE = function(){
//     return 'this is return';
// }
// console.log(funE());
// console.log(`${funE()}`)

// ---------------------------
// iife => immediately invoke function expression 

// (function iife(){
//     let x = 10;
//     let y = 20;
//     console.log(x+y);
//     return 'I am return';
// })();

// console.log(` ${(function test(){return 5})() + 10 } `);
// Note => iife doesn't need to invoke it's self invoke and it can console in template string

// ---------------------------
// function can invoke in function 

// function main(){
//     return sub();
// }

// function sub(){
//     return 'this is answer';
// }
// console.log(main());

// ---------------------------
// Scope 
// 1. block scope 
// 2. function scope 
// 3. global scope 

// ---------------------------
// Hoisting

// let and const does'nt support hoisting.
// const support hoisting,but undefined.
// So, funciton expressioin written by let and const doesn't support hoisting

// ---------------------------
