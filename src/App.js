import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay';
import ForecastDisplay from './ForecastDisplay';
import ForecastGraph from './ForecastGraph';

function App() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function fetchWeather() {
            const response = await fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=53.2194&longitude=6.5665&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto"
            );
            const data = await response.json();

            // Extract daily forecast data
            const dailyForecast = data.daily.time.map((date, index) => ({
                date,
                maxTemp: data.daily.temperature_2m_max[index],
                minTemp: data.daily.temperature_2m_min[index],
            }));

            setWeatherData({ currentWeather: data.current_weather, dailyForecast });
        }

        fetchWeather();
    }, []);

    console.log("Weather Data in App.js:", weatherData);
    
    return (
        <div className="App">
            <h1>Weather Forecast</h1>
            <WeatherDisplay dailyForecast={weatherData?.currentWeather} />
            <ForecastDisplay weatherData={weatherData?.dailyForecast} />
            <ForecastGraph weatherData={weatherData.dailyForecast} />
        </div>
    );
}

export default App;

