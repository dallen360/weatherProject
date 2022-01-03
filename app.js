let apiKey = "348d0a88e8fc4c8a96f160643220301";
let cityName;
let apiUrl;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const today = new Date();

let title = document.querySelector(".left__location--title");
let date = document.querySelector(".left__date--title");
let temp = document.querySelector(".left__temperature--main");
let feels = document.querySelector(".left__temperature--feels");

let condition = document.querySelector(".middle__text");
let logo = document.querySelector(".middle__logo");

let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let humminty = document.querySelector("#humminty");
let wind = document.querySelector("#wind");
let direction = document.querySelector("#direction");
let pressure = document.querySelector("#pressure");

let day1Temp = document.querySelector("#day1");
let day2Temp = document.querySelector("#day2");
let day3Temp = document.querySelector("#day3");
let day4Temp = document.querySelector("#day4");
let day5Temp = document.querySelector("#day5");
let day6Temp = document.querySelector("#day6");
let day7Temp = document.querySelector("#day7");

let day2Pic = document.querySelector("#day2Pic");
let day1Pic = document.querySelector("#day1Pic");
let day3Pic = document.querySelector("#day3Pic");
let day4Pic = document.querySelector("#day4Pic");
let day5Pic = document.querySelector("#day5Pic");
let day6Pic = document.querySelector("#day6Pic");
let day7Pic = document.querySelector("#day7Pic");

document.querySelector(".input__button").addEventListener("click", function () {
  apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${(cityName =
    document.querySelector(".input__input").value)}&days=3&aqi=no&alerts=no`;
  apiRequest(apiUrl);
});

document
  .querySelector(".input__input")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${(cityName =
        document.querySelector(
          ".input__input"
        ).value)}&days=3&aqi=no&alerts=no`;
      apiRequest(apiUrl);
    }
  });

async function apiRequest(url) {
  const response = await fetch(url);
  data = await response.json();
  console.log(data);

  title.textContent = data.location.name;
  temp.textContent = `${Math.trunc(data.current.temp_f)}°`;
  feels.textContent = `Feels like ${Math.trunc(data.current.feelslike_f)}°`;
  date.textContent = today.toLocaleDateString("en-US", options);

  condition.textContent = data.current.condition.text;
  logo.src = data.current.condition.icon;

  sunrise.textContent = `sunrise ${data.forecast.forecastday[0].astro.sunrise}`;
  sunset.textContent = `sunset ${data.forecast.forecastday[0].astro.sunset}`;
  humminty.textContent = `${data.current.humidity}%`;
  wind.textContent = `${data.current.wind_mph} mph`;
  direction.textContent = `${data.current.wind_dir}`;
  pressure.textContent = `${data.current.pressure_mb} mb`;

  day1Temp.textContent = `${Math.trunc(
    data.forecast.forecastday[0].day.avgtemp_f
  )}°`;
  day2Temp.textContent = `${Math.trunc(
    data.forecast.forecastday[1].day.avgtemp_f
  )}°`;
  day3Temp.textContent = `${Math.trunc(
    data.forecast.forecastday[2].day.avgtemp_f
  )}°`;
  day4Temp.textContent = `${Math.trunc(
    data.forecast.forecastday[2].day.avgtemp_f
  )}°`;
  day5Temp.textContent = `${Math.trunc(
    data.forecast.forecastday[0].day.avgtemp_f
  )}°`;
  day6Temp.textContent = `${Math.trunc(
    data.forecast.forecastday[0].day.avgtemp_f
  )}°`;
  day7Temp.textContent = `${Math.trunc(
    data.forecast.forecastday[1].day.avgtemp_f
  )}°`;

  day1Pic.src = data.forecast.forecastday[0].day.condition.icon;
  day2Pic.src = data.forecast.forecastday[1].day.condition.icon;
  day3Pic.src = data.forecast.forecastday[2].day.condition.icon;
  day4Pic.src = data.forecast.forecastday[2].day.condition.icon;
  day5Pic.src = data.forecast.forecastday[0].day.condition.icon;
  day6Pic.src = data.forecast.forecastday[0].day.condition.icon;
  day7Pic.src = data.forecast.forecastday[1].day.condition.icon;
}
