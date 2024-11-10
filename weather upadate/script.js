const inputbox = document.querySelector('.inputbox')
const searchbtn = document.getElementById('search-btn')
const Weather_image = document.querySelector('.Weather-image')
const temperature = document.querySelector('.temperature')
const descripation = document.querySelector('.descripation')
const humidity = document.getElementById('humidity')
const wind_speed = document.getElementById('wind-speed')
const location_not_found = document.querySelector('.location-not-found')
const weather_body = document.querySelector('.weather-body')


async function checkWeather(city) {
    const api_key = "1e83b8d927ca77301cddf9205c26670c"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(response => response.json())

    if (weather_data.cod === `404`) {
        location_not_found.style.display="flex"
        weather_body.style.display="none"
        console.log("error")
        return;
    }
     location_not_found.style.display="none"
     weather_body.style.display="flex"
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    descripation.innerHTML = `${weather_data.weather[0].main}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            Weather_image.src = "img/cloud.png"
            break;
        case 'Clear':
            Weather_image.src = "img/clear.png"
            break;
        case 'Rain':
            Weather_image.src = "img/rain.png"
            break;
        case 'Mist':
            Weather_image.src = "img/mist.png"
            break;
        case 'Snow':
            Weather_image.src = "img/snow.png"
            break;

    }
    console.log(weather_data)
}
searchbtn.addEventListener('click', () => {
    checkWeather(inputbox.value);
})