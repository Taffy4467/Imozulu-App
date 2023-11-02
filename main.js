const apiKey = "84a2854890097708facc100b02912bf2";

const weatherData = document.getElementById("weather-data");
const cityInput = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInput.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`); 
    
    if(!response.ok){
      throw new Error("City not found");
    }
    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const weatherDescription = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;
    const details = [`Feels like: ${Math.round(data.main.feels_like)}°C`, `Humidity: ${Math.round(data.main.humidity)}%`, `Wind: ${Math.round(data.wind.speed)} km/h`,
    `Pressure: ${Math.round(data.main.pressure)} hPa`];

    weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">`;

    weatherData.querySelector(".temperature").textContent = `${temperature}°C`;

    weatherData.querySelector(".description").textContent = weatherDescription;

    weatherData.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherData.querySelector(".icon").innerHTML = "";
    weatherData.querySelector(".temperature").textContent = "";
    weatherData.querySelector(".description").textContent =
      "An error happened, please try again later";

    weatherData.querySelector(".details").innerHTML = "";
  }
}