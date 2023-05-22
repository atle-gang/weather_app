export const displayInfo = (() => {
    function displaySearchInfo(weatherData) {
        if (!weatherData) return; 

        const searchResult = document.getElementById("searchResult");
        searchResult.classList.add("active");

        const cityName = document.getElementById("cityName");
        const temperature = document.getElementById("temperature");
        const condition = document.getElementById("condition");
        const wind = document.getElementById("windSpeed");
        const windDirection = document.getElementById("windDirection");
        const humidity = document.getElementById("humidity");



        cityName.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
        temperature.textContent = `${weatherData.current.temp_c} °C`;
        condition.textContent = `Condition: ${weatherData.current.condition.text}`;
        wind.textContent = `Wind: ${weatherData.current.wind_kph} km/h`;
        windDirection.textContent = `Wind Direction: ${weatherData.current.wind_dir}`;
        humidity.textContent = `Humidity: ${weatherData.current.humidity} %`;
    }
    return { displaySearchInfo };
})();
