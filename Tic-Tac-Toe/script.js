const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");

const result = document.querySelector("#result");

const newBtn = document.querySelector("#newGame");

const container = document.querySelector("#container")

let chance = "X"

btn1.onclick = function () {
    if (chance == "X") {
        btn1.innerHTML = "X";
        chance = "0";

    } else {
        btn1.innerHTML = "0";
        chance = "X";
    }
    checkWin();

}
btn2.onclick = function () {
    if (chance == "X") {
        btn2.innerHTML = "X";
        chance = "0";

    } else {
        btn2.innerHTML = "0";
        chance = "X";
    }
    checkWin();

}
btn3.onclick = function () {
    if (chance == "X") {
        btn3.innerHTML = "X";
        chance = "0";
    } else {
        btn3.innerHTML = "0";
        chance = "X";

    }
    checkWin();

}
btn4.onclick = function () {
    if (chance == "X") {
        btn4.innerHTML = "X";
        chance = "0";
    } else {
        btn4.innerHTML = "0";
        chance = "X";
    }
    checkWin();
}
btn5.onclick = function () {
    if (chance == "X") {
        btn5.innerHTML = "X";
        chance = "0";
    } else {
        btn5.innerHTML = "0";
        chance = "X";
    }
    checkWin();
}
btn6.onclick = function () {
    if (chance == "X") {
        btn6.innerHTML = "X";
        chance = "0";
    } else {
        btn6.innerHTML = "0";
        chance = "X";
    }
    checkWin();
}
btn7.onclick = function () {
    if (chance == "X") {
        btn7.innerHTML = "X";
        chance = "0";
    } else {
        btn7.innerHTML = "0";
        chance = "X";
    }
    checkWin();
}
btn8.onclick = function () {
    if (chance == "X") {
        btn8.innerHTML = "X";
        chance = "0";
    } else {
        btn8.innerHTML = "0";
        chance = "X";
    }
    checkWin();
}
btn9.onclick = function () {
    if (chance == "X") {
        btn9.innerHTML = "X";
        chance = "0";
    } else {
        btn9.innerHTML = "0";
        chance = "X";
    }
    checkWin();
}

function checkWin() {
    if (btn1.innerHTML == btn2.innerHTML && btn1.innerHTML == btn3.innerHTML) {
        result.innerHTML = `<h1>${btn1.innerHTML} wins! </h1>`
    }
    if (btn4.innerHTML == btn5.innerHTML && btn4.innerHTML == btn6.innerHTML) {
        result.innerHTML = `<h1>${btn4.innerHTML} wins! </h1>`
    }
    if (btn7.innerHTML == btn8.innerHTML && btn7.innerHTML == btn9.innerHTML) {
        result.innerHTML = `<h1>${btn7.innerHTML} wins! </h1>`
    }
    if (btn1.innerHTML == btn4.innerHTML && btn1.innerHTML == btn7.innerHTML) {
        result.innerHTML = `<h1>${btn1.innerHTML} wins! </h1>`
    }
    if (btn2.innerHTML == btn5.innerHTML && btn2.innerHTML == btn8.innerHTML) {
        result.innerHTML = `<h1>${btn2.innerHTML} wins! </h1>`
    }
    if (btn3.innerHTML == btn6.innerHTML && btn3.innerHTML == btn9.innerHTML) {
        result.innerHTML = `<h1>${btn3.innerHTML} wins! </h1>`
    }
    if (btn1.innerHTML == btn5.innerHTML && btn1.innerHTML == btn9.innerHTML) {
        result.innerHTML = `<h1>${btn1.innerHTML} wins! </h1>`
    }
    if (btn3.innerHTML == btn5.innerHTML && btn3.innerHTML == btn7.innerHTML) {
        result.innerHTML = `<h1>${btn3.innerHTML} wins! </h1>`
    }
}
