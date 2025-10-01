const url = "https://go-quote.azurewebsites.net/random-quote?format=json"
// const url = "https://go-quote.azurewebsites.net/quotes?page=1&page_size=20&format=json"

const btn = document.querySelector("button");
const para = document.querySelector("p");
const span = document.querySelector("span");

btn.addEventListener("click", function () {

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            para.textContent = data.text;
            span.textContent = `-  ${data.author}`
        })
})

const image = document.querySelector("#image")
const wrapper = document.querySelector(".wrapper")



// this is eventCapturing (top to bottom). Here wrapper clicked then image clicked will be printed
// image.addEventListener("click", function(){
//     console.log('image clicked');
// },true)
// wrapper.addEventListener("click", function(){
//     console.log('wrapper clicked');
// },true)

// // this is eventBubbling (bottom to top like a bubble). Here image clicked then wrapper clicked will be printed
image.addEventListener("click", function(e){
    console.log('image clicked');
    e.stopPropagation();
},false)
wrapper.addEventListener("click", function(e){
    console.log('wrapper clicked');
},false)