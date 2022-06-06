// const API_KEY = your own API_KEY
const URL = 'http://api.weatherstack.com/';

const form = document.querySelector('form');
const weatherDetails = document.querySelector('.details');
const inputLocation = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const queryCity = inputLocation.value;
  getWeather(queryCity);

  inputLocation.value = ' ';
});

async function getWeather(city) {
  const response = await fetch(
    `${URL}/current?access_key=${API_KEY}&query=${city}`
  );

  const { current, location } = await response.json();

  displayWeather(current, location);
}

function displayWeather(currentWeather, locationWeather) {
  const htmlElement = `
<div class="weather-info">
  <div class="titles">
    <h2 class="temp">${currentWeather.temperature}<sup>&#8451</sup></h2>
    <h2 class="status">${currentWeather.weather_descriptions}</h2>
  </div>

  <div class="extra-info">
    <p>Temperature: <span>${currentWeather.temperature}<sup>&#8451</sup></span>  </p>
    <p>Feels Like: <span>${currentWeather.feelslike}<sup>&#8451</sup></span>  </p>
    <p>Local Time: <span>${locationWeather.localtime}</span>  </p>
    <p>Precipitation: <span>${currentWeather.precip}mm</span> </p>
    <p>Humidity: <span>${currentWeather.humidity}%</span>  </p>
    <p>Pressure: <span>${currentWeather.pressure}hPa</span>  </p>
    <p>Cloud Cover: <span>${currentWeather.cloudcover}%</span>  </p>
    <p>Wind Direction: <span>${currentWeather.wind_dir}</span>  </p>
    <p>Wind Degree: <span>${currentWeather.wind_degree}</span> </p>
    <p>Wind Speed: <span>${currentWeather.wind_speed}km/hr</span>  </p>
    <p>Latitude:  <span>${locationWeather.lat}</span> </p>
    <p>Longitude:  <span>${locationWeather.lon}</span> </p>
    <p>Visibility: <span> ${currentWeather.visibility}km</span> </p>
    <p>Region: <span>${locationWeather.region}</span>  </p>
  </div>
 </div>

 <div class="place">${locationWeather.name}, ${locationWeather.country}</div>
  
  
  `;
  weatherDetails.innerHTML = htmlElement;
}
