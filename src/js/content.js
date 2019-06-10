import {Builder} from "./modules/Build";

let createCart = new Builder();


import {mixedCard} from "./modules/data";

// let Cards = mixedCard;

///////////////////
let comp = [];
let my = [];
let compDamage;
let myDamage;
let cardMyBlock = document.getElementById("my_cards");
let cardCompBlock = document.getElementById("comp_cards");
let passButton = document.getElementById("pass_btn_after");
let DmgComp;

// console.log(cards)
document.getElementById("btn_cover_before").addEventListener("click", (e) => {


    if (comp.length > 1){
        DmgComp = countDamage(comp);
    }

    if (my.length <= 3) {
        createMyBox();
        // createCompBox();
    }
    else if (my.length == 4) {
        createMyBox();

            compDamage = countDamage(comp);
            myDamage = countDamage(my);
            comparisonDamage();
            console.log("compDamage" + compDamage);
            console.log("myDamage" + myDamage)

    }

    if (comp.length > 0 || my.length > 0){
        passButton.style.zIndex = 100;
    }

    if (comp.length < 2){
        createCompBox();
    }
    else if (DmgComp < 18 && comp.length >= 2){
        DmgComp = countDamage(comp);
        createCompBox();
        DmgComp = countDamage(comp);
    }
    console.log(DmgComp)
});


function createMyBox() {
    my.push(mixedCard[+mixedCard.length - 1]);
    mixedCard.pop();
    cardMyBlock.appendChild(createCart.createCards(my[+my.length - 1]))
}

function createCompBox() {
    comp.push(mixedCard[+mixedCard.length - 1]);
    mixedCard.pop();
    cardCompBlock.appendChild(createCart.createCards(comp[+comp.length - 1]))
}

function createComCards() {
    for (let i = 0; i < comp.length; i++) {
        let x = createCart.createCards(comp[i]);
        cardCompBlock.appendChild(x);
    }
}

function createMyCards() {
    for (let i = 0; i < my.length; i++) {
        let y = createCart.createCards(my[i]);
        cardMyBlock.appendChild(y)
    }
}


function comparisonDamage() {
    if(compDamage > 21 && myDamage > 21 || compDamage == myDamage){
        console.log("You both equal")
    }
    else if (compDamage < myDamage && myDamage < 22 || compDamage > 21 && myDamage < 22){
        console.log("You Win");
    }
    else if (compDamage > myDamage || compDamage < 22 && myDamage > 21){
        console.log("Comp Win");
    }

    // switch (compDamage < myDamage && compDamage < 22 && myDamage < 22) {
    //     case true:
    //         console.log("You Win");
    //         break;
    //     case false:
    //         console.log("Comp Win");
    // }
}

function countDamage(target) {
    let arrDamage = [];
    target.map((el) => {
        arrDamage.push(el.damage);
    });
    arrDamage = arrDamage.reduce(function (a, b) {
        return a + b
    })
    return arrDamage
}


passButton.addEventListener("click", (e) => {
    DmgComp = countDamage(comp);
    for (let i = 0; i < 5; i++) {


            DmgComp = countDamage(comp);
            if (DmgComp < 15) {
                    createCompBox()
            }


    }
    compDamage = countDamage(comp);
    myDamage = countDamage(my);

    comparisonDamage();

    console.log("compDamage" + compDamage);
    console.log("myDamage" + myDamage)
});
