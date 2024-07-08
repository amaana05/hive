const randomInsult = document.getElementById("randomInsult");


getInsult();

async function getInsult(){
    
    try{
        const response = await fetch("https://insult.mattbas.org/api/insult")

        if(!response.ok){
            throw new Error(`Error Status: ${response.status}`);
        }
        //console.log(response);
        
        const insultData = await response.text();   //json file isn't fetching for some reason so using text() instead
        //console.log(insultData);

        randomInsult.textContent = `${insultData}`;
    }
    catch(error){
        console.log(error);
    }
}