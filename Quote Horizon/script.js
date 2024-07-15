const author = document.getElementById("author");
const quote = document.getElementById("quote");

getNewQuote();

async function getNewQuote(){
    const url = "https://type.fit/api/quotes";
    const response = await fetch(url);

    try{
        if(!response.ok){
            throw new Error(`Error status: ${response.status}`);
        }

        console.log(response);
        const data = await response.json();
        console.log(data);

        const index = Math.floor(Math.random()*data.length);
        console.log(index);

        const dataQuote = data[index].text;
        const dataAuthor = data[index].author;
        console.log(dataQuote);
        console.log(dataAuthor);

        quote.textContent = dataQuote;
        author.textContent = dataAuthor;
    }
    catch(error){
        console.log(error);
    }
}