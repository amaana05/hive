const kanyeGospel = document.getElementById("kanyeGospel");

// getKanyeQuote();

async function getKanyeQuote(){

    try{
        const response = await fetch("https://api.kanye.rest");

        if(!response.ok){
            throw new Error(`Reponse Status: ${response.status}`);
        }

        const jsonData = await response.json();
        //console.log(jsonData.quote);

        kanyeGospel.textContent = jsonData.quote;

    } catch(error){
        console.log('There was an error!');
    }
    
}