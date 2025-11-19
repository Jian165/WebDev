function rollDice(){
    const numberofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i=0; i < numberofDice; i++){
        const value = Math.floor(Math.random() * 6) +1;
        values.push(value)
        images.push(`<img src="diceImages/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `deice: ${values.join(',')}`;
    diceImages.innerHTML = `${images.join(' ')}`;
}
