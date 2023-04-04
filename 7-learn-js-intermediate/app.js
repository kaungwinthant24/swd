// class declaration
// class Person {
//     // properties
//     name = "mg mg";
//     age = 24;
//     // methods
//     run(){
//         return "mg mg can run";
//     }
// }

// console.log(Person);

// class can't be used in our programme
// so , we change class to object (instantiate)

// const persons = new Person();

// console.log(persons);
// console.log(persons.name);
// console.log(persons.age);
// console.log(persons.run());

// Note : Class is template of blueprint of Object.

// ---------------------------------------

// class Student{
//     constructor(inputName,inputGender,inputAge,inputMajor){
//         // console.log('I am work first when instantiate',x,y);
//         this.name = inputName;
//         this.gender = inputGender;
//         this.age = inputAge;
//         this.major = inputMajor;

//         // profit
//         this.namePrefex = this.gender === "male" ? "Mg" : "Ma";
//         this.birthYear = 2023 - this.age;
//         this.subjects = [
//             "myan",
//             "eng",
//             "math",
//             "chem",
//             "phys",
//             this.major = this.major === "bio" ? "bio" : "eco"
//         ];
//         this.pronoun = this.gender === "male" ? "He" : "She";
//     }

//     learn(){
//         return `${this.name} can learn ${this.subjects}.`;
//     }
//     about(){
//         return `${this.name} is ${this.age} year${this.age > 1 && 's'} old and ${this.pronoun} was born in ${this.birthYear}`
//     }
// }

// class Monitor extends Student{
//     room = "Grade A";
// }

// const ga1 = new Monitor("Kwt","male",23,"bio");
// console.log(ga1);
// console.log(ga1.learn());
// console.log(ga1.about());

// const st1 = new Student('xxx','yyy');
// const st1 = new Student('Mg Mg','male',16,'bio');
// console.log(st1);
// console.log(st1.learn());
// console.log(st1.about());

// const st1 = new Student();
// st1.name = "Mg Mg";
// st1.gender = "male";
// st1.major = "e-major";
// st1.run = function(){
//     return this.name + " is a good student";
// }
// console.log(st1);

// const st2 = new Student("Ko Ko","male",17,"eco");
// console.log(st2);
// console.log(st2.learn());
// console.log(st2.about());

// const st2 = new Student();
// st2.name = "Ko Ko";
// st2.gender = "male";
// st2.major = "history";
// st2.run = function(){
//     return this.name + " is a bad student";
// }
// console.log(st2);

// const objs =  {
//     name : "kyaw kyaw",
//     age : 24,
//     gender : "male",
//     learn(){
//         return this.name + " can learn everything";
//     }
// }
// console.log(objs);

// const st3 = new Student("Hla Hla","female",20,"eco");
// console.log(st3);
// console.log(st3.learn());
// console.log(st3.about());

// ---------------------------------------

// extends

// class A{
//     a = "aaa";
// }

// class B extends A{
//     b = "bbb";
// }

// class C extends B{
//     c = "ccc";
// }

// const a = new A();
// console.log(a);

// const b = new B();
// console.log(b);

// const c = new C();
// console.log(c);

// ---------------------------------------
// private class features
// class A {
//     a = "aaa";
//     #x = "xxx";
// }
// const a = new A();
// console.log(a);
// console.log(a.a);
// console.log(a.x); // undefined because it can use in class as internal only

// ---------------------------------------

// static
// Note : static donesn't need to instantite to access

// class A {
//     a = "aaa";
//     static x = "xxx";
//     static y(){
//         return "yyy";
//     }
// }
// console.log(A.x);
// console.log(A.y());

// ---------------------------------------

// method chaining

// class A {
//     x(){
//         console.log("this is method x");
//         return this;
//     }

//     y(){
//         console.log("this is method y");
//         return this;
//     }

//     z(){
//         console.log("this is method z");
//         return this;
//     }
// }

// const a = new A();
// // a.x();
// // a.y();
// // a.z();
// a.x().y().z();

// ---------------------------------------
const d = new Date();
// console.log(d);
// console.dir(d);
// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.getDate());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getUTCFullYear());
// console.log(d.getTime()); // January 1, 1970, UTC.

// new Date()
// new Date(value)
// new Date(dateString)
// new Date(dateObject)

// new Date(year, monthIndex)
// new Date(year, monthIndex, day)
// new Date(year, monthIndex, day, hours)
// new Date(year, monthIndex, day, hours, minutes)
// new Date(year, monthIndex, day, hours, minutes, seconds)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

// d.setDate(d.getDate() + 5);
// d.setHours(d.getHours()+300);
// d.setMonth(d.getMonth()+4);
// d.setDate(d.getDate()+(50/2));
// console.log(d);

// ------------------------------------------------------------------------

// String

// const str = new String("min ga lar pr");

// console.log(str);
// console.log(str.toUpperCase());
// console.log(str[5].toUpperCase());
// console.log(str.length);
// console.log(str.substr(4, 6).toUpperCase());
// console.log(str.substring(4, 12));
// console.log(str.search('pr'));
// console.log(str.replace('pr','byr'));
// console.log(str.replaceAll('a','x'));

// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// const luckyNumber = "123456a";
// console.log(luckyNumber.padStart(16, "x"));
// console.log(luckyNumber.padEnd(20,'z'));

// console.log(str.trim().split(' '));
// console.log(str.trim().split(' ',3));

// --------------------------------------------------------

// const num = new Number(234.563);
// console.log(typeof num);
// console.log(num);
// console.log(typeof num.toString());
// console.log(num.toFixed(2));
// console.log(num.toPrecision(2));  // 2.3e+2 = 2.3 x 10x10
// console.log(Number(num));

// const strnum = "123.456";
// console.log(Number(strnum));
// console.log(parseInt(strnum));
// console.log(parseFloat(strnum));

// const weight = "120.56kg";
// console.log(Number(weight));
// console.log(parseInt(weight));
// console.log(parseFloat(weight));

// console.log(isNaN(14+1));
// console.log(isNaN("K"+1));
// console.log(isNaN("K"+"wt"));

// console.log(("12+6")); // string 12+6
// console.log(eval("12+6")); // number 18

// --------------------------------------------------------

// console.log(Math);
// console.log(7-5);
// console.log(Math.abs(5 - 7));
// console.log(Math.round(123.556));
// console.log(Math.ceil(123.056));
// console.log(Math.floor(123.656));
// console.log(Math.floor(Math.random()*100));
// console.log(Math.pow(2,19));
// console.log(Math.sqrt(25));

// --------------------------------------------------------

// function run (x,y){
//     return y(x);
// }

// console.log(
//     run(5,function (x){
//         return x + 2;
//     })
// );

// console.log(
//     run(5,function (x) {
//         return x * 2;
//     })
// )

// --------------------------------------------------------
// => // function expression
// const run = function (x,y){
//     return x+y;
// }
// console.log(run(1,2));

// => // arrow function
// const run = (x,y) => x+y;
// console.log(run(1,2));

// const run = x => "this is arrow function "+ x;
// console.log(run("hello"))

// const run = (x,y) => {
//     let result = x * y;
//     return "Answer is = " + result;
// }
// console.log(run(25,4));

// const obj = {
//     a(){
//         console.log(this);
//         return "this is a";
//     },
//     b : function(){
//         console.log(this);
//         return "this is b";
//     },
//     c : () => {
//         console.log(this);
//         return "this is c";
//     }
// }
// console.log(obj.a());
// console.log(obj.b());
// console.log(obj.c());

// const sum = new Function('a','b',"return a + b");
// console.log(typeof sum);
// console.dir(sum);

// function fun(x,y){
//     console.log(arguments);
//     return x+y;
// }
// console.log(fun.name);
// console.log(fun.bind(null,1,2).call());
// console.log(fun.call());
// console.log(fun.bind(null,1,2,3,4).call());
// console.log(fun(2,3));
