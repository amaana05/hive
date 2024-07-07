fetchData();

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const pokemonName1 = document.getElementById("pokemonName1");

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        pokemonName1.textContent = data.name;
    }
    catch(error){
        console.error(error);
    }
}