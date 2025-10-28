# 🌤️ Weather App (React + Open-Meteo)

A simple and beginner-friendly **Weather Application** built with
**React** and **Open-Meteo API**.\
The user enters a city name, and the app displays the **current
temperature**, **wind speed**, and **weather code** using live weather
data --- no API key required.

------------------------------------------------------------------------

## 🚀 Features

✅ Search weather by city name\
✅ Uses **Open-Meteo Geocoding API** to get latitude & longitude\
✅ Uses **Open-Meteo Forecast API** to fetch current weather\
✅ Error handling for invalid city names or API issues\
✅ Clean and responsive UI built with plain CSS (no Tailwind or
frameworks)

------------------------------------------------------------------------

## 🧩 Tech Stack

-   **Frontend:** React (with Hooks)
-   **Styling:** Plain CSS
-   **API:** [Open-Meteo Weather API](https://open-meteo.com/)
-   **Language:** JavaScript (ES6+)

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites

Before running this project, ensure: - You have **Node.js** and **npm**
installed\
Check using: `bash   node -v   npm -v`

### 2️⃣ Create and setup project

``` bash
npx create-react-app weather-app
cd weather-app
```

### 3️⃣ Replace the default files

-   Replace the code in `src/App.js` with your provided `App.js`.
-   Add your styles in `src/App.css`.
-   Keep default `src/index.js` from Create React App.

### 4️⃣ Run the application

``` bash
npm start
```

Then open your browser and visit 👉 <http://localhost:3000>

------------------------------------------------------------------------

## 🌦️ API Details

### 1. Geocoding API

Used to get latitude & longitude from the city name.\
Example:

    https://geocoding-api.open-meteo.com/v1/search?name=Paris

### 2. Weather API

Used to fetch current weather data. Example:

    https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true

------------------------------------------------------------------------

## 🌈 Weather Code Reference

  Code     Meaning                      Emoji
  -------- ---------------------------- -------
  0        Clear sky                    ☀️
  1        Mainly clear                 🌤️
  2        Partly cloudy                ⛅
  3        Overcast                     ☁️
  45       Fog                          🌫️
  48       Depositing rime fog          🌫️
  51--55   Drizzle (light to dense)     🌦️
  61--65   Rain (slight to heavy)       🌧️
  71--75   Snowfall (slight to heavy)   ❄️
  80--82   Rain showers                 🌦️
  95--99   Thunderstorms                ⛈️

------------------------------------------------------------------------

## 🧠 How It Works

1.  User enters a city name.
2.  App calls **Geocoding API** → gets coordinates.
3.  App calls **Weather API** → retrieves current weather.
4.  Data is displayed: city, country, temperature, wind speed, weather
    code.

If the city isn't found, an error message appears.

------------------------------------------------------------------------

## 📂 Project Structure

    weather-app/
    ├── public/
    │   ├── index.html
    ├── src/
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── ...
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## 💡 Possible Improvements

-   🌡 Add °C / °F toggle\
-   🎨 Display weather icons or background changes\
-   📍 Use geolocation API to detect current city\
-   💾 Save recent searches\
-   🔁 Add "Refresh Weather" button\
-   🌐 Deploy to **Netlify**, **Vercel**, or **GitHub Pages**

------------------------------------------------------------------------

## 🧾 License

Open-source and free for learning or personal use.\
Data © [Open-Meteo API](https://open-meteo.com/).

------------------------------------------------------------------------



