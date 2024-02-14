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