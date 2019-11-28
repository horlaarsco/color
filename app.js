var colors = [
  "rgb(236, 105, 125)",
  "rgb(242, 148, 107)",
  "rgb(253, 185, 101)",
  "rgb(249, 223, 116)",
  "rgb(248, 255, 137)",
  "rgb(176, 219, 81)",
  "rgb(230, 25, 75)",
  "rgb(60, 180, 75)",
  "rgb(255, 225, 25)",
  "rgb(0, 130, 200)",
  "rgb(245, 130, 48)",
  "rgb(145, 30, 180)",
  "rgb(70, 240, 240)",
  "rgb(240, 50, 230)",
  "rgb(210, 245, 60)",
  "rgb(250, 190, 190)",
  "rgb(0, 128, 128)",
  "rgb(230, 190, 255)",
  "rgb(170, 110, 40)",
  "rgb(255, 250, 200)",
  "rgb(128, 0, 0)",
  "rgb(170, 255, 195)",
  "rgb(128, 128, 0)",
  "rgb(255, 215, 180)",
  "rgb(0, 0, 128)",
  "rgb(128, 128, 128)",
  "rgb(255, 255, 255)",
];



var ctable = Array.from(document.querySelectorAll(".ctable"))

var h1 = document.querySelector("h1");
var rgb = document.getElementById("rgb");

var arey = Array(27).fill().map(() => Math.round(Math.random() * 25))
let unique = [...new Set(arey)];
var randomColor = Math.floor(Math.random() * unique.length);
var reset = document.querySelector(".fcoin>p");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

var pickedColor = colors[unique[Math.floor(Math.random() * 5)]];
rgb.textContent = pickedColor;



ctable.forEach((item, index) => {
  item.style.background = colors[unique[index]]


  item.addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      ctable.forEach((item, index) => {
        item.style.visibility = "visible";
        item.style.background = pickedColor;
        h1.style.background = pickedColor;
      });
    } else {
      item.style.visibility = "hidden";
    }
  });
});

reset.addEventListener("click", function() {
    var areyyy = Array(25).fill().map(() => Math.round(Math.random() * 23))
    var uniquesss = [...new Set(areyyy)];
      ctable.forEach((item, index) => {
    
    item.style.background = colors[uniquesss[index]]    
    item.style.visibility = "visible";
  });
});


