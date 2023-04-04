
// function qualification(exammark,viperMark){
//     if(exammark >= 60 && viperMark >= 60){
//         return "You Pass";
//     }
//     return "you fail";
// }   
// console.log(qualification(60,65));
// console.log(qualification(59,61));
// console.log(qualification(90,90));

// let a = false;
// !a && 
// (function(){
//     console.log('kwt ...');
//     return true;
// })() &&  
// console.log('is perfect');  // shae ka kg ka true mha nout ka kg twy work ml 

// let nameIs = 'kwt';
// console.log(nameIs);
// nameIs = !nameIs;
// console.log(nameIs);  // ! lay nae string twy ko boolean change loh ya tl

// // typeof Expression 
// function myNameIs(name){
//     if(typeof name === 'string') return name;
//     return false;
// }
// console.log(myNameIs(23));
// console.log(myNameIs('kwt'));
// console.log(myNameIs(['k','w','t']));
// console.log(myNameIs({k:'k',w:'w',t:'t'}));


// arguments
// function run(a,b,c){
//     return arguments;   // function yae prototype htl mhr pl pr ml
// }
// console.log('a','b','c');

// console.log(window);
// console.log(document);
// console.dir(document);

// Each prototype has each function s


// each browser has 1.rendering engine for html/css and  2.javascript engine 
// auto prefixer for different rendering engine purpose (html,css) 
// js can jump from browser(eg.crome for V8) NodeJs
// we can run our js codes in node js run time 
// Node js is not engine It is js runtime 
// Now deno fights Node js (deno js runtime= like node js)
// javascript engine => call stack (stack is data structure) and memory heap => these two are also memory 
// stack works line by line (primitive data types works on stack eg.string,number,boolean,null,undefined,symbols)
// heap only keeps address (objects..etc)
    


// call stack  (primative works in call stack => line by line)
// let a = 'a';
// console.log('a value is ',a);
// c = a;
// console.log('c = a value is ',c);
// a = 'aaa';
// console.log('a overide value is ',a);
// console.log('c value is ',c);



// Memory heap  (obj works in heap => keep address)
// let a = ['a','b'];
// console.log('a value is ',a);
// c = a;
// console.log('c = a value is ',c);
// a[a.length] = 'c';
// console.log('a overide value is ',a);
// console.log('c value is ',c);
