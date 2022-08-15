const normalAvatar = localStorage.getItem("normalAva");
const character = localStorage.getItem("character");
const funAvatar = localStorage.getItem("funAva");
const shockAvatar = localStorage.getItem("shockAva");
const normalCharacter = document.getElementById("normalCharacter");
const btn_continue_red = document.getElementById("btn_continue_red");
normalCharacter.src = normalAvatar;

function handleInput() {
  normalCharacter.src = funAvatar;
  if (character == "bear" || character == "bear2") {
    normalCharacter.style.height = "34.25vw";
  }
  if (character == "fox") {
    normalCharacter.style.height = "31vw";
  }
  if (character == "rabbit") {
    normalCharacter.style.height = "30.75vw";
  }
  btn_continue_red.style.display = "block";
}
function setPlayerName() {
  let studentName = document.getElementById("playerNameInput").value;
  localStorage.setItem("studentName",studentName)
}
