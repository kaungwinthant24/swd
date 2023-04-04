// let x;
// console.log(x);

// const num = 016;
// console.log(num);  // result = 14 becoz octal number  

// console.log(sm()); //  statement function can be used as Hoisting 
// function sm(){
//     console.log("I am statement function");
//     return "statement function";
// }
// console.log(sm());

// // *expression function can't use hoisting
// const expfun= function(x,y){  // x and y are parameters
//     console.log("I am funciton expression");
//     return x+y;
// }   
// console.log(expfun(1,3));  // 1 and 3 are arguments

// iffe 
// iffe is also function expression and can be call one time 
// (function(){
//     console.log("I am iffe");
// })();

// for(let x=1; x<10; x++){
//     console.log(x);
// }

// in looping first statement can work only one time for example as iffe
// for(let i = (function(){
//     console.log("I am 1st statement");
//     return 1;
//     })(); i<10; i++){
//         console.log(i);
//     }

// {
//     var x = 5;
// }
// console.log(x);


// let x = 5;
// function run(){
//     console.log(x);
// }
// run();
// console.log(x);

// Expression can use in template string 

// conditional statement 
if(true){
    console.log("I am ture and so working");
}
// same logic but in expression 
true && console.log("I am true and so working as exp");


// for(let z=1; z<=10; z++){
//     // if(z === 5) break;
//     if(z === 5) continue;
//     console.log(z,"loop");
// }

// let w = 1;
// while(w <= 10){
//     console.log(w);
//     w++;
// }


// let d = 1;
// do{
//     console.log("do while loop",d)  
//     d++;
// }while(d <= 10);   


const fruits = ["apple","orange","mango","banana"];

for(fruit of fruits){
    console.log(fruit);
}

const obj = {
    a: "aaa",
    b: "bbb",
    c: "ccc",
    d: "ddd"
}

for(x in obj){
    console.log(x,obj[x]);
}

let mobile = "nokia";
switch(mobile){
    case "apple":
        console.log(`I have ${mobile} phone`);
        break;
    case "samsumg":
        console.log(`I have ${mobile} phone`);
        break;
    case "mi":
        console.log(`I have ${mobile} phone`);
        break;
    default :
        console.log(`I don't have ${mobile} phone`);
}