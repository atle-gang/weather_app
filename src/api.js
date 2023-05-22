// Create function that hits API server
// Function takes location(city) and returns weather data for said city

export async function fetchWeatherData(city) {
    try {
        const apiKey = 'f7d08dafee3f42bd92c101550231105';
        const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`;

        // Make API request
        const response = await fetch(apiURL, { mode: 'cors' });
        const data = await response.json();

        // Log json in console
        console.log('Weather data:', data);

        // Return data
        return data;
    }   catch(error) {
        // Handle any errors that occur during the search   
        console.error('Error fetching weather data', error);
    }   
};

