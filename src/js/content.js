import {Builder} from "./modules/Build";

let createCart = new Builder();


import {mixedCard} from "./modules/data";

let deckOfCards = [...mixedCard];
// let x = [...mixedCard]

// let Cards = mixedCard;

///////////////////
let comp = [];
let fellow = [];
let compDamage = overallDamage(comp);
let myDamage = overallDamage(fellow);
let cardMyBlock = document.getElementById("my_cards");
let cardCompBlock = document.getElementById("comp_cards");
let passButton = document.getElementById("pass_btn_before");
let againButton = document.getElementById("pass_btn_after");
let DmgComp;
let compWin =0;
let fellowWin =0;
document.getElementById("fellowWin");
mixCards(deckOfCards)

// console.log(cards)
document.getElementById("btn_cover_before").addEventListener("click", (e) => {

    console.log(mixedCard);

    document.getElementById("pass_btn_wrap").style.opacity = "1";
    againButton.style.zIndex = "1";
    passButton.style.zIndex = 100;


    if (fellow.length <= 4) {
        createMyBox();
    }

    if (comp.length < 2) {
        createCompBox();

    } else if (compDamage < 18 && comp.length >= 2) {
        createCompBox();
    }

    document.getElementById("wcdFellow").innerHTML = "D: " + overallDamage(fellow);
    document.getElementById("wcwFellow").innerHTML = "W: " + overallWeight(fellow);

    compDamage = overallDamage(comp);
    myDamage = overallDamage(fellow);
    // console.log("compDamage" + compDamage);
    // console.log("myDamage" + myDamage)

    if (fellow.length == 5) {
        cardCompBlock.innerHTML = "";
        passButton.style.zIndex = 1;

        for (let i = 0; i < comp.length; i++) {
            cardCompBlock.appendChild(createCart.createCards(comp[i]))
        }

        comparisonDamage();
        document.getElementById("wcdComp").innerHTML = "D: " + overallDamage(comp);
        document.getElementById("wcwComp").innerHTML = "W: " + overallWeight(comp);
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


// function createComCards() {
//     for (let i = 0; i < comp.length; i++) {
//         let x = createCart.createCards(comp[i]);
//         cardCompBlock.appendChild(x);
//     }
// }
//
// function createMyCards() {
//     for (let i = 0; i < my.length; i++) {
//         let y = createCart.createCards(my[i]);
//         cardMyBlock.appendChild(y)
//     }
// }


function comparisonDamage() {
    if (compDamage > 21 && myDamage > 21 || compDamage == myDamage) {
        console.log("You both equal")
    } else if (compDamage < myDamage && myDamage < 22 || compDamage > 21 && myDamage < 22) {
        console.log("You Win");
        fellowWin+=1;
        document.getElementById("fellowWin").innerHTML = "Wins: "+ +fellowWin;

    } else if (compDamage > myDamage || compDamage < 22 && myDamage > 21) {
        console.log("Comp Win");
        compWin+=1;
        document.getElementById("compWin").innerHTML = "Wins: "+ +compWin;
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


////////
passButton.addEventListener("click", (e) => {
    for (let i = 0; i <= 4; i++) {
        DmgComp = overallDamage(comp);
        if (DmgComp < 17) {
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


    console.log("compDamage" + compDamage);
    console.log("myDamage" + myDamage);

    document.getElementById("wcdComp").innerHTML = "D: " + overallDamage(comp);
    document.getElementById("wcwComp").innerHTML = "W: " + overallWeight(comp);
    document.getElementById("btn_cover_after").style.zIndex = 100;

    againButton.style.zIndex = 100;
    againButton.innerHTML = "AGAIN";

    passButton.style.zIndex = 1;
    passButton.innerHTML = "";

});


againButton.addEventListener("click", (e) => {

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

});


// mix of carts
function mixCards(mixedCard) {
    function funMix(a, b) {
        return Math.random() - 0.5;
    }

    mixedCard = mixedCard.sort(funMix)
}

document.getElementById("btn_play_wrap").addEventListener("click", (e) => {
    document.getElementById("game_panel").style.zIndex = "1000"
})