const weatherForm = document.querySelector(".weatherForm");
const enterCity = document.querySelector(".enterCity");
const displayCard = document.querySelector(".displayCard");
const apiKey = "06500ecf5999e6019b7a75f3fe4bd1d4";


weatherForm.addEventListener("submit", async event =>{

    event.preventDefault();     //to prevent the default behaviour of the form

    const city = enterCity.value;

    if(city){
        try{

            const weatherData = await getweatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }

    }
    else{
        displayError("Please enter a city name.");
       
    }
});

        //CODE FOR THE GETTING ALL THE DATA

async function getweatherData(city){

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        console.log(response);

        if(!response.ok){
            throw new Error("Could not fetch weather data.");
        }
        return await response.json();
}


function displayWeatherInfo(data){
    
   const {
            name: city, 
            main: {temp, humidity}, 
            weather: [{description, id}]} = data;

    displayCard.textContent = "";
    displayCard.style.display = "flex";

    const cityName = document.createElement("h1");
    const temperature = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const emoji = document.createElement("p");



    cityName.textContent = city;
    temperature.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}`;
    descDisplay.textContent = description;
    emoji.textContent = getWeatherEmoji(id);


    cityName.classList.add("cityName");
    temperature.classList.add("temperature");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    emoji.classList.add("emoji");


    displayCard.appendChild(cityName); 
    displayCard.appendChild(temperature);
    displayCard.appendChild(humidityDisplay);
    displayCard.appendChild(descDisplay);
    displayCard.appendChild(emoji);
}


function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }

}
    //DISPLAY ERROR FUNCTION

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    displayCard.textContent = "";
    displayCard.style.display = "flex";
    displayCard.appendChild(errorDisplay);
}