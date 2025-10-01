const paswrd = document.querySelector("#pass")
const button = document.querySelector("#btn")
const copy = document.querySelector("#copy")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const splSymbols = "@#$%^&*)(<>/{}[]"

const allChars = upperCase + lowerCase + numbers + splSymbols;
let lenght = 12;

function createPassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password +=lowerCase[Math.floor(Math.random() *lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += splSymbols[Math.floor(Math.random() * splSymbols.length)]

    while(lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    paswrd.value = password;

}

button.addEventListener("click", createPassword);
    
copy.addEventListener("click", function(e) {
    paswrd.select();
    navigator.clipboard.writeText(paswrd.value);
});