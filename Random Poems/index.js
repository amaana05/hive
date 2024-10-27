        //FETHING THE DATA FROM THE URL

        const quote = document.getElementById("quote");
        const author = document.getElementById("author");
        const button = document.getElementById("button");
        
        async function getQuote(){
            
            try{
                const response = await fetch('https://poetrydb.org/random');
                //console.log(response);
        
                if(!response.ok){
                    throw new Error(`Response status: ${response.status}`);
                }
        
                const quoteData = await response.json();
                //console.log(quoteData);
        
                quote.textContent = quoteData.quote;
                author.textContent = `— ${quoteData.author}`;
        
            }
            catch(error){
                console.log(error.message);
            }
        }
        
        
                //CHANING THE BACKGROUND IMAGE AND FONT STYLES BASED ON THE TIME OF THE DAY
        
        const body = document.querySelector('body');
        const date = new Date();
        const hour = date.getHours();
        
        console.log(hour);
        
        
        if(hour >= 20 && hour <= 23 || hour >=0 && hour < 5){
            body.style.backgroundImage = "url('images/night.jpg')";
            quote.classList.add('nightQuote');
            author.classList.add('nightAuthor');
            button.classList.add('nightButtonStyle');
        } 
        else if (hour >=5 && hour < 12) {
            body.style.backgroundImage = "url('./images/morning.jpg')";
        }
        else if (hour >=12 && hour < 17){
            body.style.backgroundImage = "url('./images/afternoon.jpg')";
        }
        else if(hour >=17 && hour < 20){
            body.style.backgroundImage = "url('./images/evening.jpg')";
            quote.classList.add('nightQuote');
            author.classList.add('nightAuthor');
            button.classList.add('nightButtonStyle');
        }
        
        
        
        // hour >= 20 && hour <= 23 || hour >= 0 && hour < 5 --- night
        // hour >=5 && hour < 12 --- morning
        // hour >=12 && hour < 17 --- afternoon
        // hour >=17 && hour < 20 --- evening
        
        
        