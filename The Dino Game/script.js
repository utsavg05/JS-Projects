const dino = document.querySelector(".ball img");
const cactus = document.querySelector(".obstacle img");

var check = 1;


    
    if(check == 1) {
        document.addEventListener("keypress", function (e) {
            console.log(e);

        dino.style.animation = "jump 0.5s cubic-bezier(0.215, 0.610, 0.355, 1)";
    })
    }

