# 🌤️ Weather App - Node.js CLI

A simple Node.js command-line application that fetches and displays real-time weather data for any city using the OpenWeatherMap API.

---

## 📦 Features

- Get current weather for any city
- Display temperature, humidity, wind speed, and description
- Clean CLI output styled with [chalk](https://www.npmjs.com/package/chalk)
- Graceful error handling for invalid cities or network issues

---

## 🛠️ Tech Stack

- Node.js
- [readline/promises](https://nodejs.org/api/readline.html)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [chalk](https://www.npmjs.com/package/chalk)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/dadhichvansh/weather-app-nodejs.git
cd weather-app-nodejs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a .env file in the root directory:

```env
API_KEY=your_openweathermap_api_key
```

Get your free API key from [OpenWeatherMap](https://openweathermap.org/).

## 🧪 Usage

```bash
npm run start
```

Then enter the city name when prompted.

Example:

```yaml
Enter a city name to get its weather: jaipur

Weather Information:
City: Jaipur
Temperature: 34°C
Description: clear sky
Humidity: 22%
Wind Speed: 3.6 m/s
```

## 🧹 To Do

- Add unit conversion (Celsius ↔ Fahrenheit)
- Support country codes
- Save favorite cities
- Add ASCII icons for weather status

## 📄 License

MIT License

## 🙌 Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/)
- [Chalk](https://www.npmjs.com/package/chalk)
- You, for using this app 🚀
