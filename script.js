const cardContainer = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh");
const moreColorBtn = document.querySelector(".more");
const maxPaletteCard = 32;

const copyColorPalette = (card,color)=>{
    const hexColor = card.querySelector(".card-hex-value"); // selcting the hex value div in the card
    // copied the hex value then updaing the text to copied then after a second change the text copied to the original hex value
    navigator.clipboard.writeText(color).then(()=>{
        hexColor.innerHTML = "Copied";
        setTimeout(() => {
            hexColor.innerHTML = color;
        }, 1000);
    }).catch(()=>alert("Failed to Copy the Color Code"))
}

const generatePalette = ()=>{
    cardContainer.innerHTML = ""; // clearing the container after clicking on the refresh button
    // generating random hex color
    for (let i = 0; i < maxPaletteCard; i++) {
        let randomHexColor = Math.floor(Math.random() * 0xffffff).toString(16);
        // 0xffffff equals to 16777215
        randomHexColor = `#${randomHexColor.padStart(6,"a")}` // padStart will add a after # to maintain the length of the hex color equals to 6 character
        
        // creating the li element to append in the container
        const Card = document.createElement("li");
        Card.classList.add("card");
        Card.innerHTML = `<div class="card-color" style="background: ${randomHexColor}"></div>
                        <div class="card-hex-value">${randomHexColor}</div>`
        cardContainer.append(Card);
        // adding event listener on the card to copy the color code of that card
        Card.addEventListener("click",()=>copyColorPalette(Card,randomHexColor))
    }
}
const generatePalette2 = ()=>{
    // generating random hex color
    for (let i = 0; i < maxPaletteCard; i++) {
        let randomHexColor = Math.floor(Math.random() * 0xffffff).toString(16);
        // 0xffffff equals to 16777215
        randomHexColor = `#${randomHexColor.padStart(6,"a")}` // padStart will add a after # to maintain the length of the hex color equals to 6 character
        
        // creating the li element to append in the container
        const Card = document.createElement("li");
        Card.classList.add("card");
        Card.innerHTML = `<div class="card-color" style="background: ${randomHexColor}"></div>
                        <div class="card-hex-value">${randomHexColor}</div>`
        cardContainer.append(Card);
        // adding event listener on the card to copy the color code of that card
        Card.addEventListener("click",()=>copyColorPalette(Card,randomHexColor))
    }
}
generatePalette();
refreshBtn.addEventListener("click",generatePalette);
moreColorBtn.addEventListener("click",generatePalette2);