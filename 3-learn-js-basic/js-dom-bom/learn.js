// input
// const x = window.prompt("Hi");
// window.alert(x);
// -----------------
// area calc (w,b)
// const width = window.prompt("width");
// const breath = window.prompt("breadth");
// const area = width * breath;
// window.alert(area);

// -----------------
// const run = (x, y) => {
//   window.alert(typeof x);
//   window.alert(typeof y);
//   return parseFloat(x) + parseFloat(y);
// };
// const firstNum = window.prompt("first number");
// const secondNum = window.prompt("second number");
// window.alert(run(firstNum, secondNum));

// -----------------
// const confirm = window.confirm("Have your eaten?");
// window.alert(confirm ? "I have been eaten." : "I have not been eaten");

// -----------------

// console.dir(h1);
// console.log(h1.innerText);
// console.log(h1.style.color);
// console.log(h1.title);

// console.log(document.querySelector("#h1").style);
// document.querySelector("#h1").style.color = "blue";
// document.querySelector("#h1").style.backgroundColor = "pink";
// document.querySelector("#h1").style.width = "300px";
// document.querySelector("#h1").style.padding = "10px";
// document.querySelector("#h1").style.margin = "auto";
// document.querySelector("#h1").style.textAlign = "center";

// const luffy = document.querySelector("#img");
// console.log(luffy.src); // file:///C:/Users/acer/Documents/wdfSWD/3-learn-js-basic/js-dom-bom/luffy.png
// console.log(luffy.getAttribute("src")); //./luffy.png
// console.log(luffy.setAttribute("title", "mugiwada"));

// const text = document.querySelector("#text");
// const number = document.querySelector("#number");
// const date = document.querySelector("#date");
// const file = document.querySelector("#file");
// const files = document.querySelector("#files");

// console.log(text.value);

// console.log(number.valueAsNumber);

// date.valueAsDate.getDate();

// file.files
// FileList {0: File, length: 1}0: File {name: 'photo_2022-10-21_21-02-30.jpg', lastModified: 1666362790331, lastModifiedDate: Fri Oct 21 2022 21:03:10 GMT+0630 (Myanmar Time), webkitRelativePath: '', size: 79134, …}length: 1[[Prototype]]: FileList
// file.files[0]

// files.files
// FileList {0: File, 1: File, length: 2}0: File {name: 'photo_2022-10-21_21-02-30.jpg', lastModified: 1666362790331, lastModifiedDate: Fri Oct 21 2022 21:03:10 GMT+0630 (Myanmar Time), webkitRelativePath: '', size: 79134, …}1: File {name: 'photo_2022-10-21_21-02-42.jpg', lastModified: 1666362795858, lastModifiedDate: Fri Oct 21 2022 21:03:15 GMT+0630 (Myanmar Time), webkitRelativePath: '', size: 32277, …}length: 2[[Prototype]]: FileList

// const showAlert = () => alert("Hello I'am Event");
// const btn = document.querySelector("#btn");
// btn.onclick = showAlert;
// btn.addEventListener("click", showAlert);

// const h1 = document.querySelector("h1");
// // h1.addEventListener("mouseenter", () =>
// //   console.log("This is mouseenter event")
// // );
// // h1.addEventListener("mouseout", () => console.log("This is mouseout event"));
// h1.addEventListener("mousemove", (e) =>
//   console.log(e, "This is mousemove event")
// );

// const input = document.querySelector("input[type='text']");
// const select = document.querySelector("select");
// const form = document.querySelector("form");
// // input.addEventListener("keydown", () => console.log("Keydown Event"));
// // input.addEventListener("keypress", () => console.log("Keypress Event"));
// input.addEventListener("keyup", () => console.log("Keyup Event"));
// input.addEventListener("focus", () => console.log("focus Event"));
// input.addEventListener("blur", () => console.log("blur Event"));
// select.addEventListener("change", () => console.log("change Event"));
// form.addEventListener("submit", () => console.log("Submit Event"));

// window.addEventListener("scroll", () => console.log("You Scroll window"));
// document
//   .querySelector("#box")
//   .addEventListener("scroll", () => console.log("You Scroll div"));

// window.addEventListener("load", () => console.log("Load Event"));
// console.log("one");
// console.log("two");
// console.log("three");

// const test = document.querySelector(".test");
// const testAlertFun = (event, x, y) => {
//   alert(x + y);
// };
// test.onclick = testAlertFun.bind(null, event, "hello", " world");

// document.querySelector("ul").addEventListener("click", (e) => console.log(e));
