const quizData = [
  {
    question: "Which language runs in a web browser?",
    A: "Java",
    B: "C",
    C: "Python",
    D: "javascript",
    correct: 1,
  },
  {
    question: "What does CSS stand for?",
    A: "Central Style Sheets",
    B: "Cascading Style Sheets",
    C: "Cascading Simple Sheets",
    D: "Cars SUVs Sailboats",
    correct: 2,
  },
  {
    question: "What does HTML stand for?",
    A: "Hypertext Markup Language",
    B: "Hypertext Markdown Language",
    C: "Hyperloop Machine Language",
    D: "Helicopters Terminals Motorboats Lamborginis",
    correct: 3,
  },
  {
    question: "What year was JavaScript launched?",
    A: "1996",
    B: "1995",
    C: "1994",
    D: "none of the above",
    correct: 4,
  },
];
const character = localStorage.getItem("character");
const normalAvatar = localStorage.getItem("normalAva");
const funAvatar = localStorage.getItem("funAva");
const shockAvatar = localStorage.getItem("shockAva");
const normalCharacter = document.getElementById("normalCharacter");
const btn_continue_red = document.getElementById("btn_continue_red");
const A = document.getElementById("choiceA");
const B = document.getElementById("choiceB");
const C = document.getElementById("choiceC");
const D = document.getElementById("choiceD");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");

const result = 1;
let score = 0;
let numberQuiz = 1;
let curentQuiz;
normalCharacter.src = normalAvatar;
loadQuiz();
function handleCheck(val, pick) {
  console.log("nhan vat la:", character);
  if (val == quizData[curentQuiz].correct) {
    normalCharacter.src = funAvatar;
    pick.style.backgroundColor = "#45D6A1";
    if (character == "bear") {
      normalCharacter.style.height = "34.5vw";
    }
    if(character=="fox"){
      normalCharacter.style.height = "31vw";
    }
    if(character=="rabbit"){
      normalCharacter.style.height = "30.75vw";
    }
    score++;
  } else {
    normalCharacter.src = shockAvatar;
    normalCharacter.style.width = "23.25vw";
    normalCharacter.style.left = "81.37vw";
    pick.style.backgroundColor = "#FAC4C0";
  }
  numberQuiz++;
  if (numberQuiz < quizData.length) {
    setTimeout(loadQuiz, 1000);
  } else {
    window.location.href = "screen7.html";
    localStorage.setItem("totalQuiz", numberQuiz - 1);
    localStorage.setItem("score", score);
  }
  cancelPick();
}
function loadQuiz() {
  curentQuiz = Math.floor(Math.random() * quizData.length);
  let i = numberQuiz - 1;
  question.innerText = quizData[curentQuiz].question;
  questionNumber.innerText = `CÂU ${numberQuiz}`;
  answer1.innerText = quizData[curentQuiz].A;
  answer2.innerText = quizData[curentQuiz].B;
  answer3.innerText = quizData[curentQuiz].C;
  answer4.innerText = quizData[curentQuiz].D;
  A.style.backgroundColor = "#FFBC9B";
  B.style.backgroundColor = "#FFBC9B";
  C.style.backgroundColor = "#FFBC9B";
  D.style.backgroundColor = "#FFBC9B";
  normalCharacter.src = normalAvatar;
  normalCharacter.style.width = "20.5vw";
  normalCharacter.style.height = "29.25vw";
  normalCharacter.style.left = "84.37vw";
  enablePick();
}
function cancelPick() {
  A.style.pointerEvents = "none";
  B.style.pointerEvents = "none";
  C.style.pointerEvents = "none";
  D.style.pointerEvents = "none";
}
function enablePick() {
  A.style.pointerEvents = "unset";
  B.style.pointerEvents = "unset";
  C.style.pointerEvents = "unset";
  D.style.pointerEvents = "unset";
}
