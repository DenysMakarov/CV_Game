import {Builder} from "./modules/Build";
let createCart = new Builder();


import {mixedCard} from "./modules/data";



let cardBlock = document.getElementById("comp_cards");
// for(let i = 0; i < 5; i++){
//     let x = createCart.createCards();
//     cardBlock.appendChild(x)
// }


console.log(cardBlock)



















///////////////////
let comp = [];
let me = [];
let compDamage;
let meDamage;


// console.log(cards)
document.getElementById("button").addEventListener("click", (e) => {

    // console.log(mixedCard)

    if (mixedCard.length == 0) {
        console.log("jhjhjkhkh")
        compDamage = countDamage(comp);
        meDamage = countDamage(me);
        // console.log(compDamage);
        // console.log(meDamage);
        comparisonDamage()
    } else {
        cardBlock.innerHTML = "";

        comp.push(mixedCard[+mixedCard.length - 1]);
        mixedCard.pop();
        me.push(mixedCard[+mixedCard.length - 1]);
        mixedCard.pop();
        for(let i = 0; i < me.length; i++){
            let x = createCart.createCards(me[i]);
            cardBlock.appendChild(x)
        }
        // console.log(comp)
        // console.log(me)
    }
})


function comparisonDamage() {
    switch (compDamage < meDamage) {
        case true: console.log("Win You"); break;
        case false: console.log("Win Comp");
    }
}

function countDamage(target) {
    let x = [];
    target.map((el) => {
        x.push(el.damage);
    });
    x = x.reduce(function (a, b) {
        return a + b
    })
    return x
}

