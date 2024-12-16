import React from 'react';
import './ForecastDisplay.css';

function ForecastDisplay({ weatherData }) {
    if (!weatherData) {
        return <p>Loading forecast...</p>;
    }

    return (
        <div className="forecast-display">
            <h2>5-Day Forecast</h2>
            <div className="forecast-grid">
                {weatherData.map((day, index) => {
                    // Format the date
                    const formattedDate = new Intl.DateTimeFormat('en-GB', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short',
                    }).format(new Date(day.date));

                    return (
                        <div key={index} className="forecast-item">
                            <p>{formattedDate}</p>
                            <p>Max: {day.maxTemp}°C</p>
                            <p>Min: {day.minTemp}°C</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ForecastDisplay;

