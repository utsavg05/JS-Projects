document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);

const para = document.querySelector("p");
const btn = document.querySelector("button");



const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

// let getJoke = ()=> {
//     fetch(url)
//     .then(data => data.json())
//     .then(item =>{
//         console.log(item.joke);
        
//     })
// }

const getJoke = async() => {
    try{
        const response = await fetch(url);
        const  data = await (response.json());
        para.textContent = `${data.joke}`
        console.log(data.category)
        
        
    } catch(error){
        console.log('Error in getting a joke');
    }

}
btn.addEventListener("click", getJoke)

