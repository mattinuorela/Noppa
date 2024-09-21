
document.getElementById("dice").addEventListener("click", roll);

function roll() {
    // Satunnaisluku välillä 1-6
    const numero = Math.floor(Math.random() * 6) + 1;

    // Haetaan noppa-elementti
    const diceElement = document.getElementById("dice");

    // Päivitetään noppa-elementin sisältö kuvalla
    diceElement.innerHTML = `<img src="./img/${numero}.png" />`;
}
