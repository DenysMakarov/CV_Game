
const cards = [
    {"name": "Mach1", "damage": 5},
    {"name": "Mach2", "damage": 3},
    {"name": "Mach3", "damage": 7},
    {"name": "Mach4", "damage": 2},
    {"name": "Mach5", "damage": 6},
    {"name": "Mach6", "damage": 5},
    {"name": "Mach7", "damage": 3},
    {"name": "Mach8", "damage": 8},
    {"name": "Mach9", "damage": 7},
    {"name": "Mach10", "damage": 6}
];


export let mixedCard = [...cards];
mixCards();

function mixCards() {
    function funMix(a,b) {
        return Math.random() -0.5;
    }
    mixedCard = mixedCard.sort(funMix)
}