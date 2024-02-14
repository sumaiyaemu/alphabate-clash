//function play(){
//    const homeSection = document .getElementById('home-screen')
//    homeSection .classList .add('hidden')
//    //console.log(homeSection)
//    const playgroundSection = document .getElementById('play-ground')
//    playgroundSection .classList.remove('hidden')
//}
function continueGame(){
const alphabet =getARandomAlphabet();
console.log('your random alphabet',alphabet);
const currentAlphabetElement = document .getElementById('current-alphabet');
currentAlphabetElement .innerText = alphabet;
addBachgroundColorById(alphabet);

}
function play(){
    hideElementById ('home-screen');
    showElementById ('play-ground');
    continueGame()
}