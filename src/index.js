function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#cityTemperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#description").innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
    let apiKey = "ec260614c11f0896fd34ffe37c5a9a38";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event){ 
    event.preventDefault();
    let city = document.querySelector("#search-input").value;
    searchCity(city);
    //let searchInput = document.querySelector("#search-input");
    //let h2 = document.querySelector("h2");
    //if (searchInput.value) {
    //h2.innerHTML = `${searchInput.value}`;
    //} else {
      //h2.innerHTML = "Please search for a city";  
    //}
}

function searchLocation(position) {
    let apiKey = "ec260614c11f0896fd34ffe37c5a9a38";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation)

}
  
function chooseCelsius(event){
    event.preventDefault();
    let temperature = document.querySelector("#cityTemperature");
    temperature.innerHTML = "25";
}

function chooseFahrenheit(event){
    event.preventDefault();
    let temperature = document.querySelector("#cityTemperature");
    temperature.innerHTML = "77";
}


let unitCelsius = document.querySelector("#celsius");
unitCelsius.addEventListener("click", chooseCelsius);

let unitFahrenheit = document.querySelector("#fahrenheit");
unitFahrenheit.addEventListener("click", chooseFahrenheit);


let now = new Date();

let date = document.querySelector("#dayAndTime");


let hours = now.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes <10) {
    minutes = `0${minutes}`;
}

let days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[now.getDay()];

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation)


date.innerHTML = `${day}, ${hours}:${minutes}`;

searchCity("New York");

