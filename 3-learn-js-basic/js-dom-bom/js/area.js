// select Element
const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const cal = document.getElementById("cal");
const records = document.getElementById("records");

const calfun = () => {
  const area = width.valueAsNumber * breadth.valueAsNumber;
  result.innerText = `w:${width.value}ft * b:${breadth.value}ft = ${area}ft`;
};

cal.onclick = function () {
  calfun();
  width.value = breadth.value = null;
};

// clear.onclick = function () {
//   result.innerText = "";
//   width.value = "";
//   breadth.value = "";
// };

// function for clear
const clearResult = () => (result.innerText = null);
clear.onclick = clearResult;

// store.onclick = () => (records.innerHTML += `<li>${result.innerText}</li>`);
store.onclick = function () {
  records.innerHTML += `<li>${result.innerText}</li>`;
  // result.innerText = null;
  clearResult();
};
