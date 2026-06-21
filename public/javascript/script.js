import { toggle, toggleBtn } from "./theme-toggle.js";
import { getWeatherData } from "./weather-data.js";
import {
  displayWeatherData,
  displayError,
  displayLoadingSpinner,
  hideLoadingSpinner,
} from "./display.js";

const form = document.getElementById("form");
const searchInput = document.getElementById("searchInput");
const main = document.querySelector("main");

// Search form submit event listener
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = searchInput.value;
  main.innerHTML = "";

  if (city.trim() === "") {
    displayError("Please enter a city name.");
    return;
  } else {
    displayLoadingSpinner();
    try {
      const data = await getWeatherData(city);
      displayWeatherData(data);
    } catch (error) {
      displayError(error.message);
    } finally {
      hideLoadingSpinner();
    }
  }
  searchInput.value = "";
});
