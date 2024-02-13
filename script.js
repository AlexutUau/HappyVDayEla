function calculateLove() {
    const name1 = document.getElementById('inputName1').value.toLowerCase();
    const name2 = document.getElementById('inputName2').value.toLowerCase();

    // se uita daca ambele nume exista
    if (!name1 && !name2) {
        const resultElement = document.getElementById('love-result');
        resultElement.innerHTML = "nu exista iubire fara 2 nume autisto :<";
        return; //stop
    } else if (!name1 || !name2) {
        const resultElement = document.getElementById('love-result');
        resultElement.innerHTML = "te simti singura? :<";
        return; //stop
    }
// daca exista ela si alexut atunci e 100%
    const lovePercentage = (name1 === 'alexut' && name2 === 'ela') || (name1 === 'ela' && name2 === 'alexut') || (name1 === 'hagau' && name2 === 'ela') || (name1 === 'ela' && name2 === 'hagau') ? 100 : calculateRandomLovePercentage();
    
    displayLoveResult(name1, name2, lovePercentage);
}

function calculateRandomLovePercentage() {
    return Math.floor(Math.random() * 100) + 1;
}

function displayLoveResult(name1, name2, lovePercentage) {
    const resultElement = document.getElementById('love-result');
    resultElement.innerHTML = `${name1} si ${name2} au ${lovePercentage}% iubire ❤️`;
}
