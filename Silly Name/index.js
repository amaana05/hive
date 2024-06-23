import generateName from 'sillyname';

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

document.getElementById('getButton').addEventListener('click', function(){


    document.getElementById('nameText').innerHTML = `You are ${sillyName}.`;
});
