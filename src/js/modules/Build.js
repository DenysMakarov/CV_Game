
export class Builder {

    static createNewElement(tag, classEl=null, innerEl=null, elAttr=null, img=null){
        let el = document.createElement(tag);
        el.className = (classEl) ? classEl : "";
        el.innerHTML = (innerEl) ? innerEl : "";
        el.style.backgroundImage =(img) ? ("url(images/" + img + ")") : "";

        if(elAttr){
            elAttr.map((attrEl)=>el.setAttribute(attrEl.name, attrEl.value))
        }
        return el
    }
    static appChild(parrent, children) {
        children.map((el) => {
            parrent.appendChild(el)
        });
        return parrent
    }

    createCards(el){
        let borderCard = Builder.createNewElement("div", "card_border", null, null, null);
        let card = Builder.appChild(Builder.createNewElement("div", "card", null, null, el.img), [Builder.createNewElement("div", "damage", "D: "+el.damage), Builder.createNewElement("div", "weight", "W: "+el.weight)])
        borderCard.appendChild(card)
        return borderCard
    }
    createCardsComp(el){
        let borderCard = Builder.createNewElement("div", "card_border", null, null, null);
        let card = Builder.createNewElement("div", "card card_comp", null, null, "back_of_cards.jpg")
        borderCard.appendChild(card)
        return borderCard
    }
}