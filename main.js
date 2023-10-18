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
  } catch (error) {

    const data = await response.json();
    console.log(data);
}
}