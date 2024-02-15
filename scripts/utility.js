function hideElementById(elementId){
    const element = document . getElementById(elementId)
    element .classList.add('hidden')
}

function showElementById(elementId){
    const element = document . getElementById(elementId)
    element .classList.remove('hidden')
}
function addBachgroundColorById(elementId){
    const element = document .getElementById(elementId);
    element .classList .add('bg-yellow-600')
}
function removeBachgroundColorById(elementId){
    const element = document .getElementById(elementId);
    element .classList .remove('bg-yellow-600')
}
function getTextElementValueById(elementId){
    const element = document .getElementById(elementId);
    const elementValueText = element .innerText;
    const value =parseInt(elementValueText);
    return value;
}
function getElementTextById(elementId){
    const element = document .getElementById(elementId);
    text = element .innerText;
    return text; 
}



function setTextElementValueById(elementId ,value){
    const element = document .getElementById(elementId);
     element. innerText = value;
}
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString .split('');
    //console.log(alphabets);
    const randomNumber = Math .random()*25;
    const index = Math .round(randomNumber);
    const alphabet = alphabets[index];
    //console.log(index,alphabet);
    return alphabet;
}