document.addEventListener("DOMContentLoaded", function(){
//***************************************************** */   
// cacher les questions Facile & Moyen & Difficile
let questionFacile = document.getElementById("questionF");
let questionMoyen = document.getElementById("questionM");
let questionDifficile = document.getElementById("questionD");

questionFacile.style.display = "none";
questionMoyen.style.display = "none";
questionDifficile.style.display = "none";
//***************************************************** */  

//INTRO: gif + button + faire apparaitre le texte de la discussion de départ 

var discussion = document.getElementById("discussion");
var discussionGif = "<img alt='gif discussion' src='images/billBobbyDiscutent.gif'>";
discussion.innerHTML = discussionGif;

//button-------------------------------------------------------------
var buttonStart = document.getElementById("buttonStart");
var button = "<button id='help'>j'aide Bobby</button>";
buttonStart.innerHTML = button;
var help = document.getElementById("help");

help.addEventListener("click", function(){
    //quand je clique "J'aide Bobby" --> gif zoum gros plan puis première question
    //disparition
    discussion.style.display="none";
    help.style.display="none";
    text.style.display="none";
    textB.style.display="none";
    text2.style.display="none";
    let beCareful2 = document.getElementById("beCareful2");
    beCareful2.style.display="none";
    //apparition
    var discussion2 = document.getElementById("discussion2");
    var discussionGif2 = "<img alt='gif discussion' src='images/billBobbyDiscutentZoom.png'>";
    discussion2.innerHTML = discussionGif2;

    questionFacile.style.display = "block";
});

//---------------animation du texte ---------------------------------

const text = document.getElementById("text");
const textBill = "<h3>Bobby !!!</h3>";
const text2 = document.getElementById("text2");
const textBill2 = "<h3>Vite ! Réponds aux trois questions...</h3>";

const textB = document.getElementById("textB");
let textBobby = "<h3>Heu...</h3><h3>J'ai droit à un Jocker ?!!</h3>";

text.innerHTML = textBill;
function text1(){
    text2.innerHTML = textBill2;
setTimeout(text3,2000);
}
function text3(){
    textB.innerHTML = textBobby;
}
setTimeout(text1, 1000);

//--------------------------------------------------------------------


//---------------fin animation du texte ------------------------------

//---------------fin INTRO--------------------------------------------
});