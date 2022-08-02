const data = [];
const rabit_name = document.getElementById("rabit_name");
const bear2_name = document.getElementById("bear2_name");
const bear_name = document.getElementById("bear_name");
const fox_name = document.getElementById("fox_name");
const fox_screen2 = document.getElementById("fox_screen2");
const bear2_screen2 = document.getElementById("bear2_screen2");
const bear_screen2 = document.getElementById("bear_screen2");
const rabit_screen2 = document.getElementById("rabit_screen2");
const btn_continue = document.getElementById("btn_continue");

// Fox action
fox_screen2.addEventListener("click", (e) => {
  console.log("dang click vao cao.");
  btn_continue.style.display = "block";
  rabit_name.style.color = "#FFFFFF";
  fox_name.style.color = "#B5FF93";
  bear_name.style.color = "#FFFFFF";
  bear2_name.style.color = "#FFFFFF";
  fox_screen2.src = "./MathImg/Selected-select-option-fox.png";
  bear_screen2.src = "./MathImg/Nor-Slect-Option-Bear.png";
  rabit_screen2.src = "./MathImg/Nor-Slect-Option-rabbit.png";
  bear2_screen2.src = "./MathImg/Nor-Slect-Option-Bear2.png";
});
fox_screen2.addEventListener("mouseover", (e) => {
  fox_name.style.color = "#FFFB93";
  fox_screen2.src = "./MathImg/Hover-Slect-Option-Fox.png";
});
fox_screen2.addEventListener("mouseout", (e) => {
  fox_name.style.color = "#ffffff";
  fox_screen2.src = "./MathImg/Nor-study-Fox.png";
});
// Rabit action
rabit_screen2.addEventListener("click", (e) => {
  console.log("dang click vao cao.");
  rabit_name.style.color = "#B5FF93";
  fox_name.style.color = "#FFFFFF";
  bear_name.style.color = "#FFFFFF";
  bear2_name.style.color = "#FFFFFF";
  btn_continue.style.display = "block";
  fox_screen2.src = "./MathImg/Nor-Slect-Option-Fox.png";
  bear_screen2.src = "./MathImg/Nor-Slect-Option-Bear.png";
  rabit_screen2.src = "./MathImg/Selected-select-option-rabbit.png";
  bear2_screen2.src = "./MathImg/Nor-Slect-Option-Bear2.png";
});
rabit_screen2.addEventListener("mouseover", (e) => {
  rabit_name.style.color = "#FFFB93";
  rabit_screen2.src = "./MathImg/Hover-select-option-rabbit.png";
});
rabit_screen2.addEventListener("mouseout", (e) => {
  rabit_name.style.color = "#ffffff";
  rabit_screen2.src = "./MathImg/Nor-study-rabbit.png";
});
//Bear action
bear_screen2.addEventListener("mouseover", (e) => {
  bear_name.style.color = "#FFFB93";
  bear_screen2.src = "./MathImg/Hover-Slect-Option-Bear.png";
});
bear_screen2.addEventListener("mouseout", (e) => {
  bear_name.style.color = "#ffffff";
  bear_screen2.src = "./MathImg/Nor-study-Bear.png";
});
//Bear2 action
bear2_screen2.addEventListener("mouseover", (e) => {
  bear2_name.style.color = "#FFFB93";
  bear2_screen2.src = "./MathImg/Hover-Slect-Option-Bear2.png";
});
bear2_screen2.addEventListener("mouseout", (e) => {
  bear_name.style.color = "#ffffff";
  bear2_screen2.src = "./MathImg/Nor-study-Bear2.png";
});