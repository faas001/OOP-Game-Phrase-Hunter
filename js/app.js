const keyButtons = document.getElementById('qwerty');
console.log(keyButtons);
let newGame = [];
//this function hides the start screen overlay.
function resetDisplay() {
    $('.start').hide();

}

// this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
function markButton(letter) {
    console.log('marked '+ `.hide.letter.${letter}`);
    const screenButton = $('.key');
    console.log(screenButton);
    for (let i = 0; i < 26; i += 1) {
        console.log(screenButton.eq(i).text());
        if (screenButton.eq(i).text() === letter) {
           
            screenButton.eq(i).attr('disabled', 'disabled')
                        .css('backgroundColor', 'darkgrey')
                        .css('color', 'grey');
        }
    }

    // // $(`.${letter}`).attr('disabled', 'disabled');
    // $(`.${letter}`).attr('backgroundColor', 'darkgrey');
    // $(`.${letter}`).attr('color', 'grey');
   // button.style.backgroundColor = 'darkgrey';
   // button.style.color = 'grey';
    newGame.handleInteraction(letter);
} 
/*
function markButton(button) {
    console.log(button.textContent);
    button.setAttribute('disabled', 'disabled');
    button.style.backgroundColor = 'darkgrey';
    button.style.color = 'grey';
    newGame.handleInteraction(button.textContent);
}
*/

document.getElementById('btn__reset').addEventListener('click', () => {

    resetDisplay();
    newGame = new Game();
  
    newGame.startGame();
    
});

keyButtons.addEventListener('click', (e) => {
 console.log(e.target);
    if (e.target.className === 'key') {
        markButton(e.target.textContent);
    }

});

document.addEventListener('keypress', (e) => {
   console.log(e.key);
        if (e.key.match(/[a-z]/i) ) {
          
            markButton(e.key);
            
        }
    
    });
