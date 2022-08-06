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
const normalCharacter = document.getElementById("normalCharacter");

function cancelEvent() {
  fox_screen2.style.pointerEvents = "none";
  bear2_screen2.style.pointerEvents = "none";
  rabit_screen2.style.pointerEvents = "none";
  bear_screen2.style.pointerEvents = "none";
  Screen2_background.style.pointerEvents = "none";
}

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
  cancelEvent();
  // normalCharacter.src = "./MathImg/Nor-study-Fox.png";

});
fox_screen2.addEventListener("mouseover", (e) => {
  fox_name.style.color = "#FFFB93";
  bear_name.style.color = "#FFFFFF";
  bear2_name.style.color = "#FFFFFF";
  rabit_name.style.color = "#FFFFFF";
  fox_screen2.src = "./MathImg/Hover-Slect-Option-Fox.png";
  bear_screen2.src = "./MathImg/Nor-study-Bear.png";
  rabit_screen2.src = "./MathImg/Nor-study-rabbit.png";
  bear2_screen2.src = "./MathImg/Nor-study-Bear2.png";
});

// Rabit action
rabit_screen2.addEventListener("click", (e) => {
  rabit_name.style.color = "#B5FF93";
  fox_name.style.color = "#FFFFFF";
  bear_name.style.color = "#FFFFFF";
  bear2_name.style.color = "#FFFFFF";
  btn_continue.style.display = "block";
  fox_screen2.src = "./MathImg/Nor-Slect-Option-Fox.png";
  bear_screen2.src = "./MathImg/Nor-Slect-Option-Bear.png";
  rabit_screen2.src = "./MathImg/Selected-select-option-rabbit.png";
  bear2_screen2.src = "./MathImg/Nor-Slect-Option-Bear2.png";
  localStorage.setItem('noramlAva',"./MathImg/Nor-study-rabbit.png")
  cancelEvent();
  // normalCharacter.src = "./MathImg/Nor-study-rabbit.png";
});
rabit_screen2.addEventListener("mouseover", (e) => {
  rabit_name.style.color = "#FFFB93";
  fox_name.style.color = "#FFFFFF";
  bear_name.style.color = "#FFFFFF";
  bear2_name.style.color = "#FFFFFF";
  rabit_screen2.src = "./MathImg/Hover-select-option-rabbit.png";
  fox_screen2.src = "./MathImg/Nor-study-Fox.png";
  bear_screen2.src = "./MathImg/Nor-study-Bear.png";
  bear2_screen2.src = "./MathImg/Nor-study-Bear2.png";
});
//Bear action
bear_screen2.addEventListener("mouseover", (e) => {
  bear_name.style.color = "#FFFB93";
  rabit_name.style.color = "#FFFFFF";
  fox_name.style.color = "#FFFFFF";
  bear2_name.style.color = "#FFFFFF";
  bear_screen2.src = "./MathImg/Hover-Slect-Option-Bear.png";
  fox_screen2.src = "./MathImg/Nor-study-Fox.png";
  rabit_screen2.src = "./MathImg/Nor-study-rabbit.png";
  bear2_screen2.src = "./MathImg/Nor-study-Bear2.png";
});
bear_screen2.addEventListener("click", (e) => {
  rabit_name.style.color = "#FFFFFF";
  fox_name.style.color = "#FFFFFF";
  bear2_name.style.color = "#FFFFFF";
  bear_name.style.color = "#B5FF93";
  btn_continue.style.display = "block";
  fox_screen2.src = "./MathImg/Nor-Slect-Option-Fox.png";
  bear_screen2.src = "./MathImg/Selected-select-option-bear.png";
  rabit_screen2.src = "./MathImg/Nor-Slect-Option-rabbit.png";
  bear2_screen2.src = "./MathImg/Nor-Slect-Option-Bear2.png";
  cancelEvent();
  // normalCharacter.src = "./MathImg/Nor-study-Bear2.png";
});


//Bear2 action
bear2_screen2.addEventListener("mouseover", (e) => {
  bear2_name.style.color = "#FFFB93";
  rabit_name.style.color = "#FFFFFF";
  fox_name.style.color = "#FFFFFF";
  bear_name.style.color = "#FFFFFF";
  bear2_screen2.src = "./MathImg/Hover-Slect-Option-Bear2.png";
  fox_screen2.src = "./MathImg/Nor-study-Fox.png";
  rabit_screen2.src = "./MathImg/Nor-study-rabbit.png";
  bear_screen2.src = "./MathImg/Nor-study-Bear.png";
});
bear2_screen2.addEventListener("click", (e) => {
  rabit_name.style.color = "#FFFFFF";
  fox_name.style.color = "#FFFFFF";
  bear_name.style.color = "#FFFFFF";
  bear2_name.style.color = "#B5FF93";
  btn_continue.style.display = "block";
  fox_screen2.src = "./MathImg/Nor-Slect-Option-Fox.png";
  bear2_screen2.src = "./MathImg/Selected-select-option-bear2.png";
  rabit_screen2.src = "./MathImg/Nor-Slect-Option-rabbit.png";
  bear_screen2.src = "./MathImg/Nor-Slect-Option-Bear.png";
  cancelEvent();
  // normalCharacter.src = "./MathImg/Nor-study-Bear.png";
});
console.log(localStorage.getItem('noramlAva'))
