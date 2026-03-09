async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "6f645323337e1c68e593a5667df65327";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

let response = await fetch(url);
let data = await response.json();

document.getElementById("cityName").innerHTML = data.name;
document.getElementById("temp").innerHTML = data.main.temp + "°C";
document.getElementById("condition").innerHTML = data.weather[0].main;
document.getElementById("humidity").innerHTML = data.main.humidity + "%";
document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

let iconCode = data.weather[0].icon;
document.getElementById("icon").src =
`https://openweathermap.org/img/wn/${iconCode}@2x.png`;

let timezone = data.timezone;
let localTime = new Date(Date.now() + timezone * 1000);
document.getElementById("time").innerHTML =
"Local Time: " + localTime.toUTCString();

}