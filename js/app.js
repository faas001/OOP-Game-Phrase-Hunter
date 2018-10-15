const keyButtons = document.getElementById('qwerty');
console.log(keyButtons);
let newGame = [];
//this function hides the start screen overlay.
function resetDisplay() {
    $('.start').hide();

}

// this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
function markButton(button) {
    console.log(button.textContent);
    button.setAttribute('disabled', 'disabled');
    button.style.backgroundColor = 'darkgrey';
    button.style.color = 'grey';
    newGame.handleInteraction(button.textContent);
}

document.getElementById('btn__reset').addEventListener('click', () => {

    resetDisplay();
    newGame = new Game();
    console.log(newGame);
    newGame.startGame();
    
});

keyButtons.addEventListener('click', (e) => {
console.log(e.target);
    if (e.target.className === 'key') {
        console.log('call mark ' + e.target); 
        markButton(e.target);
    }

});
