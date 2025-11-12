const emojis = [
    "😍",
    "😍",  
    "💻",
    "💻", 
    "🍕",
    "🍕", 
    "✨",
    "✨", 
    "🎞️",
    "🎞️", 
    "🎮",
    "🎮",
    "🚀",
    "🚀",
    "🦁",
    "🦁"
];
let opendCards = [];
let matchedCards = 0;
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}
function handleClick(){
    if (opendCards.length < 2) {
        this.classList.add("boxOpen");
        opendCards.push(this);
    }

    if (opendCards.length === 2) {
        setTimeout(checkMatch, 500);
    }

}

function checkMatch() {
    if (opendCards[0].innerHTML === opendCards[1].innerHTML) {
        opendCards[0].classList.add("boxMatch");
        opendCards[1].classList.add("boxMatch");
    }else {
        opendCards[0].classList.remove("boxOpen");
        opendCards[1].classList.remove("boxOpen");
    }

    opendCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Parabéns! Você encontrou todos os pares!");
    }
}
