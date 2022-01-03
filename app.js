let apiKey = "348d0a88e8fc4c8a96f160643220301";
let cityName;
let apiUrl;

document.querySelector(".input__button").addEventListener("click", function () {
  apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${(cityName =
    document.querySelector(".input__input").value)}&aqi=no`;
  apiRequest(apiUrl);
});
document
  .querySelector(".input__input")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      console.log(data);
      apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${(cityName =
        document.querySelector(".input__input").value)}&aqi=no`;
      apiRequest(apiUrl);
    }
  });

async function apiRequest(url) {
  const response = await fetch(url);
  data = await response.json();

  document.querySelector(".header__title").textContent = data.location.name;
  document.querySelector(".header__logo").src = data.current.condition.icon;

  document.querySelector("#temp").textContent = `${data.current.temp_f} F`;
  document.querySelector("#pressure").textContent = data.current.pressure_in;
  document.querySelector("#humminty").textContent = data.current.humidity;
  document.querySelector("#wind").textContent = `${data.current.wind_mph} mph`;
}
