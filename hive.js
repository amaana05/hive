        //DARK MODE SUPPORT

const body = document.querySelector('body');
const heading = document.querySelector('h1');

const hour = new Date().getHours();



if(hour >= 15 && hour < 23 || hour >= 0 && hour < 7){
    body.classList.add('darkModeBody');
    heading.classList.add('darkModeHeading');
}
