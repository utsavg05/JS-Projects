const apiKey = "da93661ad287d5362ddc618adcd49b50"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var userInp = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-1023x1024-en2xc1qm.png"
        } else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_1280.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4837/4837678.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png"
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/9755/9755252.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(userInp.value);
});


document.addEventListener("copy", function (e) {
    e.preventDefault();

    const textToCopy = "You are hacked";
    e.clipboardData.setData("text/plain", textToCopy);
})