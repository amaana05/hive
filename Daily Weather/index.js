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

    const cityDisplay = document.createElement("h1");
}


function getWeatherEmoji(weatherId){

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