const API_KEY = `50008fdb562446bf838151103261806`;

// Fetch weather data from the API
async function getWeatherData(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error.message);
    throw new Error(
      `Location not found. Please check the city name and try again.`,
    );
  }
}

export { getWeatherData };
