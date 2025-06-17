import readline from "readline/promises";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fetchWeather = async (city) => {
  // Construct the API URL with city name and API key
  const url = `${baseUrl}?q=${city}&appid=${process.env.API_KEY}&units=metric`;

  try {
    const res = await fetch(url);

    // Handle invalid city name
    if (!res.ok) {
      throw new Error(
        "City not found. Please check the city name and try again."
      );
    }

    // Parse the JSON response
    const data = await res.json();

    // Display the weather data
    console.log(chalk.bold.blue("\nWeather Information:"));
    console.log(chalk.green(`City: `) + chalk.yellow(`${data.name}`));
    console.log(
      chalk.green(`Temperature: `) + chalk.yellow(`${data.main.temp}°C`)
    );
    console.log(
      chalk.green(`Description: `) +
        chalk.yellow(`${data.weather[0].description}`)
    );
    console.log(
      chalk.green(`Humidity: `) + chalk.yellow(`${data.main.humidity}%`)
    );
    console.log(
      chalk.green(`Wind Speed: `) + chalk.yellow(`${data.wind.speed} m/s\n`)
    );
  } catch (err) {
    // Display any error messages
    console.log(err.message);
  }
};

// Prompt the user for a city name
const city = await rl.question("Enter a city name to get its weather: ");
await fetchWeather(city);
rl.close();
