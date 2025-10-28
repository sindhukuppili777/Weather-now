import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    setError("");
    setWeather(null);

    try {
      // Step 1: Get latitude & longitude of city
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found.");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Step 2: Fetch weather data using coordinates
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherResponse.json();

      setWeather({
        city: name,
        country,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        weathercode: weatherData.current_weather.weathercode,
      });
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="app-container">
      <h1>🌤️ Weather App (Open-Meteo)</h1>

      <form onSubmit={handleSubmit} className="weather-form">
        <label htmlFor="city">Enter City:</label>
        <input
          type="text"
          id="city"
          placeholder="e.g., Paris"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>
            {weather.city}, {weather.country}
          </h2>
          <p>🌡 Temperature: {weather.temperature}°C</p>
          <p>🌬 Wind Speed: {weather.windspeed} km/h</p>
          <p>🌈 Weather Code: {weather.weathercode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
