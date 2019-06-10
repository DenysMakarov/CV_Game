
export class Builder {

    static createNewElement(tag, classEl=null, innerEl=null, elAttr=null){
        let el = document.createElement(tag);
        el.className = (classEl) ? classEl : "";
        el.innerHTML = (innerEl) ? innerEl : "";

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

    createCards(cardAbility){
        let card = Builder.createNewElement("div", "card", cardAbility.damage);
        return card
    }
}