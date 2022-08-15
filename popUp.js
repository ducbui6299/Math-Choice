const btn_info = document.getElementById("btn_info");
const blurBG = document.getElementById("blurBG");
const infoPopUp = document.getElementById("infoPopUp");
const close_popup_btn = document.getElementById("close_popup_btn");
let play = false;
var music = new Audio();
music.src = "./sound/music.mp3";
function showPopUp() {
  music.play()
  blurBG.style.display = "block";
  infoPopUp.style.display = "block";
}
function closePopUp() {
  blurBG.style.display = "none";
  infoPopUp.style.display = "none";
}
btn_info.addEventListener("click", showPopUp);
close_popup_btn.addEventListener("click", closePopUp);
function playMusic() {
  if (!play) {
    music.play();
    music.autoplay = true;
    music.loop = true;
  }
}
