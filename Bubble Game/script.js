var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

function decreaseScore() {
    score -= 20;
    document.querySelector("#scorevalue").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = '';
    for (var i = 1; i <= 133; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over! Your final score is ${score}.</h1>`
            document.querySelector("#hitval").textContent = '-';
        }
    }, 1000)
}



// event listener on parent(pbtm) of multiple bubbles
// Here dets.target.textContext is a string value
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        getNewHit();
        makeBubble();
    } else {
        decreaseScore();
    }

})

makeBubble();
getNewHit();
runTimer();







// event listener na milne par event element ke parent par listener dhundega and so on...