// selectors
const output = document.querySelector("#output");
const input = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");

const fonts = ["Lithos Pro", "Brush Script Std Medium", "Nueba Std", "Arial"];

fonts.forEach((font) => {
  //   console.log(font);
  //   console.log(new Option(font, font));
  fontFamily.append(new Option(font, font));
});
// action or process
input.addEventListener("keyup", () => {
  //   console.log(input.value);
  output.innerText = input.value;
  count.innerText = input.value.length;
});

color.addEventListener("change", (e) => {
  console.log(e.target.value);
  output.style.color = e.target.value;
});

fontSize.addEventListener("change", (e) => {
  //   console.log(e.target.value);
  output.style.fontSize = e.target.value + "px";
});

fontFamily.addEventListener("change", (e) => {
  output.style.fontFamily = e.target.value;
});
