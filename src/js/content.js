import {Builder} from "./modules/Build";

let createCart = new Builder();


import {mixedCard} from "./modules/data";

// let Cards = mixedCard;

///////////////////
let comp = [];
let my = [];
let compDamage = overallDamage(comp);
let myDamage = overallDamage(my);
let cardMyBlock = document.getElementById("my_cards");
let cardCompBlock = document.getElementById("comp_cards");
let passButton = document.getElementById("pass_btn_after");
let DmgComp;

// console.log(cards)
document.getElementById("btn_cover_before").addEventListener("click", (e) => {

    if (comp.length > 0 || my.length > 0) {
        passButton.style.zIndex = 100;
    }
    compDamage = overallDamage(comp);
    myDamage = overallDamage(my);

    // if (comp.length > 1) {
    //     DmgComp = countDamage(comp);
    // }

    if (my.length <= 3) {
        createMyBox();
    }
    else if (my.length == 4) {
        createMyBox();

        // let compDamage = overallDamage(comp);
        // let myDamage = overallDamage(my);
        comparisonDamage();
        console.log("compDamage" + compDamage);
        console.log("myDamage" + myDamage)

        document.getElementById("wcdComp").innerHTML = "D: " + overallDamage(comp);
        document.getElementById("wcwComp").innerHTML = "W: " + overallWeight(comp);

    }

    if (comp.length < 2) {
        createCompBox();
    } else if (compDamage < 18 && comp.length >= 2) {
        // DmgComp = countDamage(comp);
        // compDamage = overallDamage(comp);
        createCompBox();
        // DmgComp = countDamage(comp);
        compDamage = overallDamage(comp);

    }
    console.log(DmgComp)


    let fellowControlDamage = document.getElementById("wcdFellow").innerHTML = "D: " + overallDamage(my);
    let fellowControlWeight = document.getElementById("wcwFellow").innerHTML = "W: " + overallWeight(my);

});

function overallDamage(arr) {
    let damages =0;
    for (let i = 0; i < arr.length; i++) {
        damages += arr[i].damage;
    }
    return damages
}
function overallWeight(arr) {
    let weight =0;
    for (let i = 0; i < arr.length; i++) {
        weight += arr[i].weight;
    }
    return weight
}


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
    } else if (compDamage > myDamage || compDamage < 22 && myDamage > 21) {
        console.log("Comp Win");
    }
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



////////
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
    console.log("myDamage" + myDamage);

   document.getElementById("wcdComp").innerHTML = "D: " + overallDamage(comp);
   document.getElementById("wcwComp").innerHTML = "W: " + overallWeight(comp);


});


document.getElementById("btn_play_wrap").addEventListener("click", (e) => {
    document.getElementById("game_panel").style.zIndex = "1000"
})
