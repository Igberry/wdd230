// Replace with your OpenWeatherMap API key
const apiKey = '8c92a48d6c6571ef737cdadecaf6302e'; 
const city = 'Yenagoa, NG'; // Enter the city for which you want to fetch the weather

// OpenWeatherMap API URL
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Fetch the weather data from OpenWeatherMap
async function fetchWeather() {
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Function to display weather data
function displayWeather(data) {
    const tempValue = document.getElementById('temp-value');
    const weatherIcon = document.getElementById('icon');
    const description = document.getElementById('condition');

    // Update temperature and append the °C symbol
    tempValue.textContent = `${data.main.temp.toFixed(1)}`;

    // Update description (weather condition)
    description.textContent = data.weather[0].description;

    // Update weather icon with correct URL and make it visible
    const iconCode = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
    weatherIcon.src = iconURL;
    weatherIcon.alt = data.weather[0].description; // Optional: add description for accessibility
    weatherIcon.style.display = 'inline-block'; // Make the icon visible
}

// Call the function to fetch weather data when the page loads
fetchWeather();
