const dadJoke = document.getElementById("dadJoke");


// getDadJoke();

async function getDadJoke(){

    try{
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                accept: 'application/json',
                accept: 'text/plain',
                'User-Agent': 'My Library',
            }
        });
        //learend to add headers from stackoverflow
        
        //console.log(response);

        if(!response.ok){
            throw new Erro(`Error Status: ${response.status}`);
        }

        const dadJokeData = await response.text();
        //console.log(dadJokeData);
        
        dadJoke.textContent = dadJokeData;

    }
    catch(error){
        console.log(error);
    }
}