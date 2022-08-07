const hand = document.getElementById("hand");
const totalStar = document.getElementById("totalStar");
const totalScore = document.getElementById("totalScore");
const totalQuiz = document.getElementById("totalQuiz");
const lastCharacter = document.getElementById("lastCharacter");
const lastTitle = document.getElementById("lastTitle");
totalQuiz.innerText = `/${localStorage.getItem("totalQuiz")}`;
totalScore.innerText = localStorage.getItem("score");
let character = localStorage.getItem("character");
let reviewTitle = localStorage.getItem("reviewTitle");

handleSrcImg();
function handleSrcImg() {
  if (character == "fox") {
    lastCharacter.src = "./MathImg/lastFox.png";
    hand.src = "./MathImg/foxHand.png";
  }
  if (character == "bear") {
    lastCharacter.src = "./MathImg/lastBear.png";
    hand.src = "./MathImg/bearHand.png";
  }
  if (character == "rabbit") {
    lastCharacter.src = "./MathImg/lastRabbit.png";
    hand.src = "./MathImg/rabbitHand.png";
  }
  if (character == "bear2") {
    lastCharacter.src = "./MathImg/lastBear2.png";
    hand.src = "./MathImg/bear2Hand.png";
  }
  if (reviewTitle == "all") {
    lastTitle.src = "./MathImg/lastAll.png";
  }
  if (reviewTitle == "int") {
    lastTitle.src = "./MathImg/lastInt.png";
  }
  if (reviewTitle == "float") {
    lastTitle.src = "./MathImg/lastFloat.png";
  }
}
