const apiKey = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherDiv = document.getElementById("weatherResult");

  if (!city) {
    weatherDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const { name, main, weather } = data;
      const description = weather[0].description;
      const temp = main.temp;
      const feelsLike = main.feels_like;

      weatherDiv.innerHTML = `
        <h2>${name}</h2>
        <p>🌡️ Temperature: ${temp}°C</p>
        <p>🤗 Feels like: ${feelsLike}°C</p>
        <p>🌤️ Condition: ${description}</p>
      `;
    })
    .catch(error => {
      weatherDiv.innerHTML = "Error: " + error.message;
    });
}
