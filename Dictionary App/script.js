const url = ""

const result = document.querySelector(".results")
const btn = document.querySelector("#search-btn")
const sound = document.querySelector("#sound")

btn.addEventListener("click", () => {
    let inpWord = document.querySelector("#inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `<div class="word">
                <h3>${inpWord}</h3>
                <button onclick = "playSound()">
                    <i class="ri-volume-up-fill"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech} </p>
                <p>/${data[0].phonetics[1].text}/ </p>
            </div>
                <p class="word-meaning">
                    ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                   ${data[0].meanings[0].definitions[0].example || ""}
                </p>
                `
                sound.setAttribute("src", ` ${data[0].phonetics[0].audio}`);
        })
        .catch((error)=> {
            result.innerHTML = `<h3>Couldn't find the word</h3>`
        })
})

function playSound() {
    sound.play();
}

document.addEventListener("contextmenu", (e)=> {
    e.preventDefault();
})
