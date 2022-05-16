const API_KEY = "bfa86fc0b29bdbf77a711bb7bc2dbe9f"

function onGok(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather #WeatherFirst");
        const weather = document.querySelector("#weather #WeatherSecond");
        const temp = document.querySelector("#weather #WeatherThird");
        city.innerText = data.name;
        weather.innerText = `(${data.weather[0].main})`;
        temp.innerText = data.main.temp + "℃";
    });
};
function onGError(){
    alert("The weather service is not provided.");
};
navigator.geolocation.getCurrentPosition(onGok,onGError);