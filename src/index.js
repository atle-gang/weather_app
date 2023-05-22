import { fetchWeatherData } from "./api.js";
import { displayInfo } from "./displayInfo.js";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  if (searchInput.value === "") return;
  const weatherData = await fetchWeatherData(searchInput.value);
  displayInfo.displaySearchInfo(weatherData);
});