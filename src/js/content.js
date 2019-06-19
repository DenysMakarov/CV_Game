import {Builder} from "./modules/Build";
let createCart = new Builder();

import {mixedCard} from "./modules/data";
let deckOfCards = [...mixedCard];


let comp = [], fellow = [];
let compDamage, myDamage;
let compWeight, myWeight;
let cardMyBlock = document.getElementById("my_cards");
let cardCompBlock = document.getElementById("comp_cards");
let passButton = document.getElementById("pass_btn_before");
let againButton = document.getElementById("pass_btn_after");
let compWin =0, fellowWin =0;
mixCards(deckOfCards);

// console.log(cards)
document.getElementById("btn_cover_before").addEventListener("click", (e) => {
    document.getElementById("pass_btn_wrap").style.opacity = "1";
    againButton.style.zIndex = "1";
    passButton.style.zIndex = 100;

    if (fellow.length <= 4) {
        createMyBox();
    }

    if (comp.length < 2) {
        createCompBox();

    } else if (compWeight < 17 && comp.length >= 2) {
        createCompBox();
    }

    if (fellow.length  > 0){
        document.getElementById("pass_btn_after").style.zIndex = 0;
        document.getElementById("pass_btn_before").innerHTML = "PASS"
    }

    document.getElementById("wcdFellow").innerHTML = "D: " + overallDamage(fellow);
    document.getElementById("wcwFellow").innerHTML = "W: " + overallWeight(fellow);

    compDamage = overallDamage(comp);
    myDamage = overallDamage(fellow);
    compWeight = overallWeight(comp);
    myWeight = overallWeight(fellow)

    if (fellow.length == 5) {
        cardCompBlock.innerHTML = "";
        passButton.style.zIndex = 1;

        for (let i = 0; i < comp.length; i++) {
            cardCompBlock.appendChild(createCart.createCards(comp[i]))
        }
        comparisonDamage();
        document.getElementById("wcdComp").innerHTML = "D: " + overallDamage(comp);
        document.getElementById("wcwComp").innerHTML = "W: " + overallWeight(comp);
        document.getElementById("btn_take_cards_again").style.zIndex = 1000;
        againButton.style.zIndex = 100;
        againButton.innerHTML = "Take card";
        passButton.style.zIndex = 1;
        passButton.innerHTML = "";
    }
});

function overallDamage(arr) {
    let damages = 0;
    for (let i = 0; i < arr.length; i++) {
        damages += arr[i].damage;
    }
    return damages
}

function overallWeight(arr) {
    let weight = 0;
    for (let i = 0; i < arr.length; i++) {
        weight += arr[i].weight;
    }
    return weight
}

function createMyBox() {
    fellow.push(deckOfCards[+deckOfCards.length - 1]);
    deckOfCards.pop();
    cardMyBlock.appendChild(createCart.createCards(fellow[+fellow.length - 1]))
}

function createCompBox() {
    comp.push(deckOfCards[+deckOfCards.length - 1]);
    deckOfCards.pop();
    cardCompBlock.appendChild(createCart.createCardsComp(comp[+comp.length - 1]))
}

function comparisonDamage() {
    if (compWeight > 21 && myWeight > 21 || compWeight < 21 && myWeight < 21 && compDamage == myDamage) {
        resultPanel()
    }
    else if (compDamage < myDamage && myWeight < 22 || compWeight > 21 && myWeight < 22) {
        fellowWin+=1;
        document.getElementById("fellowWin").innerHTML = "Wins: "+ +fellowWin;
        resultPanel()
    }
    else if (compDamage > myDamage || compWeight < 22 && myWeight > 21) {
        compWin+=1;
        document.getElementById("compWin").innerHTML = "Wins: "+ +compWin;
        resultPanel()
    }
}

function resultPanel(){
    let descResultText  =document.getElementById("desc-result_war");
    let resultWarBlock = document.getElementById("resultWAR_wrap");
    resultWarBlock.style.display = "block";
    document.getElementById("points_block_text_fellow").innerHTML = myDamage;
    document.getElementById("points_block_text_comp").innerHTML = compDamage;

    if (compWeight > 21 && myWeight > 21){
        descResultText.innerHTML = "Yours spaceships have fallen"
    }

    else if(compDamage == myDamage && compWeight < 21 && myWeight < 21){
        descResultText.innerHTML = "You both are equal"
    }
    else if(compWeight > 21 && myWeight < 22){
        descResultText.innerHTML = "Enemy`s spaceship has fallen";
        document.getElementById("points_block_text_comp").innerHTML = "FALL";
    }

    else if(compDamage < myDamage && myWeight < 22){
        descResultText.innerHTML = "You Win"
    }

    else if(compDamage > myDamage && myWeight < 22){
        descResultText.innerHTML = "Comp Win"
    }
    else if(compWeight < 22 && myWeight > 21){
        descResultText.innerHTML = "Your`s spaceship has fallen";
        document.getElementById("points_block_text_fellow").innerHTML = "FALL";
    }

}

// function countDamage(target) {
//     let arrDamage = [];
//     target.map((el) => {
//         arrDamage.push(el.damage);
//     });
//     arrDamage = arrDamage.reduce(function (a, b) {
//         return a + b
//     })
//     return arrDamage
// }


passButton.addEventListener("click", (e) => {
    for (let i = 0; i <= 4; i++) {
        compWeight = overallWeight(comp)
        if (compWeight < 17) {
            createCompBox()
        }
    }
    cardCompBlock.innerHTML = "";
    for (let i = 0; i < comp.length; i++) {
        cardCompBlock.appendChild(createCart.createCards(comp[i]))
    }
    compDamage = overallDamage(comp);
    myDamage = overallDamage(fellow);
    comparisonDamage();

    document.getElementById("wcdComp").innerHTML = "D: " + overallDamage(comp);
    document.getElementById("wcwComp").innerHTML = "W: " + overallWeight(comp);
    document.getElementById("btn_cover_after").style.zIndex = 100;

    againButton.style.zIndex = 100;
    againButton.innerHTML = "";
    document.getElementById("btn_take_cards_again").style.zIndex = "10000";

    passButton.style.zIndex = 1;
    passButton.innerHTML = " ";
});

function againPlay() {
    deckOfCards = [...mixedCard];
    mixCards(deckOfCards);
    cardMyBlock.innerHTML = "";
    cardCompBlock.innerHTML = "";
    comp = [];
    fellow = [];
    document.getElementById("btn_cover_after").style.zIndex = 1;
    passButton.innerHTML = "PASS";
    againButton.innerHTML = "";
    document.getElementById("wcdComp").innerHTML = "D: ?";
    document.getElementById("wcwComp").innerHTML = "W: ?";
    document.getElementById("wcdFellow").innerHTML = "D: 0";
    document.getElementById("wcwFellow").innerHTML = "W: 0";
    document.getElementById("btn_take_cards_again").style.zIndex = "1";
    document.getElementById("pass_btn_before").innerHTML = "Take Card"
}

// mix of carts
function mixCards(mixedCard) {
    function funMix(a, b) {
        return Math.random() - 0.5;
    }
    mixedCard = mixedCard.sort(funMix)
}

let playBtn = document.getElementById("btn_play_wrap").addEventListener("click", (e) => {
    document.getElementById("game_panel").style.zIndex = "1000";
    document.getElementById("left_block").style.animationName = "apearLeftPannel";
    document.getElementById("btn_play_wrap").style.opacity = "0";
    document.getElementById("right_block").style.animation = "apearRightPannel 1s forwards";

   setTimeout(function () {
       let arrAnimatiomMixCards = Array.from(document.getElementsByClassName("animation_mix_card")).map((el)=>{
           el.style.animationName = "cardsMix";
       })
   },1000)
});


let playAgaine = document.getElementById("button_again").addEventListener("click", (e)=>{
    againPlay();
    document.getElementById("resultWAR_wrap").style.display = "none";
    let arrAnimatiomMixCards = Array.from(document.getElementsByClassName("animation_mix_card")).map((el)=>{
        el.style.animationName = "none";
        setTimeout(function () {
            el.style.animationName = "cardsMix";
        },200)
    })
});

document.getElementById("button_disapear_game_description").addEventListener("click", (e)=>{

    document.getElementById("game_description_block").style.animation = "game_description_block_disapear 1s forwards";
    setTimeout(function () {
        document.getElementById("game_description_block").style.zIndex = "1";
    },1000)
});