// Create function that processes JSON data and returns the object for the required data
function selectedWeatherData(weatherData) {
    const {
        location: { name: locationName, country },
        current: {
            temp_c: temperatureCelsius,
            condition: { text: conditionText },
            humidity,
            wind_kph: windSpeedKph,
            wind_dir: windDirection,
        },
    } = weatherData;

  return {
    location: { name: locationName, country },
    current: {
      temperature: { celsius: temperatureCelsius },
      condition: conditionText,
      humidity,
      wind: { speed_kph: windSpeedKph, direction: windDirection },
    },
  };
}


// Create function that hits API server
// Function takes location(city) and returns weather data for said city
export async function fetchWeatherData(city) {
    try {
        const apiKey = 'f7d08dafee3f42bd92c101550231105';
        const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`;

        // Make API request
        const response = await fetch(apiURL, { mode: 'cors' });
        const data = await response.json();

        const selectedData = selectedWeatherData(data);
        // Log json in console
        console.log('Selected weather data:', selectedData);

        // Return data
        return data;
    }   catch (error) {
        // Handle any errors that occur during the search   
        console.error('Error fetching weather data', error);
    }   
};

