document.addEventListener("DOMContentLoaded", function(){
//***************************************************** */
// cacher les questions Facile & Moyen & Difficile
let questionFacile = document.getElementById("questionF");
let questionMoyen = document.getElementById("questionM");
let questionDifficile = document.getElementById("questionD");
let final = document.getElementById("final");

questionFacile.style.display = "none";
questionMoyen.style.display = "none";
questionDifficile.style.display = "none";
//***************************************************** */

//INTRO: gif + button + faire apparaitre le texte de la discussion de départ

let discussion = document.getElementById("discussion");
let discussionGif = "<img alt='gif discussion' src='images/billBobbyDiscut.gif'>";
discussion.innerHTML = discussionGif;

//button-------------------------------------------------------------
let buttonStart = document.getElementById("buttonStart");
let button = "<button id='help'>j'aide Bobby</button>";
buttonStart.innerHTML = button;
let help = document.getElementById("help");

function disappearIntro(){
    discussion.style.display="none";
    help.style.display="none";
    text.style.display="none";
    textB.style.display="none";
    text2.style.display="none";
    let beCareful2 = document.getElementById("beCareful2");
    beCareful2.style.display="none";
}

help.addEventListener("click", function(){
    //quand je clique "J'aide Bobby" --> première question
    //disparition

    // discussion.style.display="none";
    // help.style.display="none";
    // text.style.display="none";
    // textB.style.display="none";
    // text2.style.display="none";
    // let beCareful2 = document.getElementById("beCareful2");
    // beCareful2.style.display="none";
    disappearIntro();
    //apparition
    let discussion2 = document.getElementById("discussion2");
    let discussionGif2 = "<img alt='gif discussion' src='images/billBobbyDiscut.png' />";
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
//---------------fin animation du texte ------------------------------
//---------------fin INTRO--------------------------------------------
//--------------------------------------------------------------------
    //question facile submit
    //propagation avec iframe ds html

    let btnQF = document.querySelector("#btn_questionF");
    btnQF.addEventListener("click", function(){

        if(document.forms["questionFacile"].reponseA.checked == true){
            questionFacile.style.backgroundColor = "green";
            questionMoyen.style.display = "block";
        }else{
            questionFacile.style.backgroundColor = "red";
            document.location.href="http://vincent.developpeur.free.fr/BobbyQuestions/lost.html";
        }
    });
    //question moyenne submit

    let btnQM = document.querySelector("#btn_questionM");
    btnQM.addEventListener("click", function(){

        if(document.forms["questionMoyenne"].reponseC.checked == true){
            questionMoyen.style.backgroundColor = "green";
            questionDifficile.style.display = "block";
        }else{
            questionMoyen.style.backgroundColor = "red";
            document.location.href="http://vincent.developpeur.free.fr/BobbyQuestions/lost.html";
        }
    });
    //question difficile submit

    let btnQD = document.querySelector("#btn_questionD");
    btnQD.addEventListener("click", function(){

        if(document.forms["questionDifficile"].reponseB.checked == true){
            //image gagné
            questionDifficile.style.backgroundColor = "green";
            // final.style.display = "block";
            document.location.href="http://vincent.developpeur.free.fr/BobbyQuestions/win.html";
        }else{
        //     //image perdu
        //     final.style.display = "block";
        questionDifficile.style.backgroundColor = "orangered";
        document.location.href="http://vincent.developpeur.free.fr/BobbyQuestions/bobbylost.html";
         }
    });
//--------------------------------------------------------------------
});