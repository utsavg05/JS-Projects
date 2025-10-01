let obj = {
    1: "s",
    2: "p",
    3: "k"
}

let guess = Math.floor(Math.random() * 3 + 1)
// console.log(obj[guess]);

let systemGuess = obj[guess];

const userinput = document.querySelector("#guessField")
const submit = document.querySelector(".submitGuess")
const gameResult = document.querySelector('.gameResult');
const result = document.querySelector(".resultpara")



let playGame = true;
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();

        const userGuess = (userinput.value);
        validate(userGuess);
    })
}

function validate(userGuess) {
    if (userGuess === 's' || userGuess === 'p' || userGuess === 'k') {
        displayClr(userGuess);
        checkGuesss(userGuess);
        endGame();
    } else {
        alert("Please enter among the characters : 's', 'p'  or 'k' ")
    }
}

function checkGuesss(userGuess) {
    // System wins
    if (userGuess === systemGuess) {
        displayMsg(`Computer has also chosen '${userGuess}'. Try again`)
    } else if (userGuess === 's' && systemGuess === 'p') {
        displayMsg(`Computer has chosen '${systemGuess}'. You lose`)
    } else if (userGuess === 'p' && systemGuess === 'k') {
        displayMsg(`Computer has chosen '${systemGuess}'. You lose`)
    } else if (userGuess === 'k' && systemGuess === 's') {
        displayMsg(`Computer has chosen '${systemGuess}'. You lose`)
    } 

    // User wins
    else if (userGuess === 's' && systemGuess === 'k') {
        displayMsg(`Congratulations! You Win`)
    } else if (userGuess === 'p' && systemGuess === 's') {
        displayMsg(`Congratulations! You Win`)
    } else if (userGuess === 'k' && systemGuess === 'p') {
        displayMsg(`Congratulations! You Win`)
    } 
}

function displayClr(userGuess) {
    userinput.value = '';

}

function displayMsg(message) {
    gameResult.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {

        systemGuess = obj[guess];

        userinput.removeAttribute('disabled');

        playGame = true;
    });
}

