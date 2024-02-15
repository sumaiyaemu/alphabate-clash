//function play(){
//    const homeSection = document .getElementById('home-screen')
//    homeSection .classList .add('hidden')
//    //console.log(homeSection)
//    const playgroundSection = document .getElementById('play-ground')
//    playgroundSection .classList.remove('hidden')
//}
function handleKeyboardKeyUpEvent( event){
    const playerPressed = event.key;
    console.log('button pressed',playerPressed);
    if(playerPressed === 'escape'){
        gameOver();
    }
    const currentAlphabetElement = document .getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement .innerText;
    const expectedAlphabet = currentAlphabet .toLowerCase();
    console .log( playerPressed, expectedAlphabet);

    if(playerPressed===expectedAlphabet){
        console .log('you get a point');
        //const currentScoreElement =document .getElementById('current-score')
        //const currentScoreText =currentScoreElement.innerText;
        //const currentScore = parseInt(currentScoreText);
        //console .log(currentScore);
        //const newScore = currentScore + 1;
        //currentScoreElement .innerText = newScore;
        const currentScore = getTextElementValueById('current-score')
        console.log(currentScore);
        const updateScore = currentScore +1;
        setTextElementValueById('current-score',updateScore );

        console .log('you have pressed correctly',expectedAlphabet)
        removeBachgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console .log('you miss the point');
        const currentLife = getTextElementValueById('current-life')
        console.log(currentLife);
        const updateScore = currentLife - 1;
        setTextElementValueById('current-life',updateScore );

        if(updateScore===0){
            console.log('game over');
            gameOver(); 
        }

        //const currentLifeElement =document .getElementById('current-life')
        //const currentLifeText =currentLifeElement.innerText;
        //const currentScore = parseInt(currentLifeText);
        //console .log(currentScore);
        //const newLife = currentScore - 1;
        //currentLifeElement .innerText = newLife;
    }//
}
document .addEventListener('keyup',handleKeyboardKeyUpEvent)



function continueGame(){
const alphabet =getARandomAlphabet();
console.log('your random alphabet',alphabet);
const currentAlphabetElement = document .getElementById('current-alphabet');
currentAlphabetElement .innerText = alphabet;
addBachgroundColorById(alphabet);

}
function play(){
    hideElementById ('home-screen');
    hideElementById ('final-score');
    showElementById ('play-ground');

    setTextElementValueById('current-life',5);
    setTextElementValueById ('current-score',0);
    continueGame()
}
function gameOver(){
    hideElementById ('play-ground');
    showElementById ('final-score');
    const lastScore =getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore);
    const currentAlphabet = getElementTextById('current-alphabet');
    console.log (currentAlphabet);
    removeBachgroundColorById(currentAlphabet);
}