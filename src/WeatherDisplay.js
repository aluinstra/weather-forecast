import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay({ dailyForecast }) {
    // Handle cases where weatherData is not yet available
    if (!dailyForecast) {
        return <p>Loading weather data...</p>;
    }

    // Extract relevant weather data
    const { temperature, weathercode } = dailyForecast;

    const getDescriptionFromCode = (code) => {
        const descriptions = {
            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            // Add more codes as per API documentation
        };
        return descriptions[code] || "Unknown weather condition";
    };

    return (
        <div className="weather-display">
            <h2>Weather in Groningen</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Condition Code: {weathercode}</p>
            <p>Condition: {getDescriptionFromCode(weathercode)}</p>
        </div>
    );
}

export default WeatherDisplay;



