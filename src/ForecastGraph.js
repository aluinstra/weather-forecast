import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function ForecastGraph({ weatherData }) {
    if (!weatherData) return <p>Loading graph...</p>;

    // Extract data for the graph
    const labels = weatherData.map((day) => day.date); // Dates for the x-axis
    const maxTemps = weatherData.map((day) => day.maxTemp);
    const minTemps = weatherData.map((day) => day.minTemp);

    const data = {
        labels, // X-axis labels
        datasets: [
            {
                type: 'bar',
                label: 'Max Temperature',
                data: maxTemps,
                backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red bars
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                type: 'bar',
                label: 'Min Temperature',
                data: minTemps,
                backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue bars
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                type: 'line',
                label: 'Max Temp Line',
                data: maxTemps,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false,
            },
            {
                type: 'line',
                label: 'Min Temp Line',
                data: minTemps,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '5-Day Weather Forecast',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
}

export default ForecastGraph;
