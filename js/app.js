const keyButtons = document.getElementById('qwerty');

let newGame = [];

//this function hides the start screen overlay. and will reset the phrase/keys/lives display on replays
function resetDisplay() {
    $('#overlay').hide().removeClass('win').removeClass('lose').addClass('start');

    $('#phrase ul').html('');
    $('.wrong').html('<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>');
    $('.key').removeAttr('disabled')
             .removeAttr('style');
             
}
// this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
function markButton(letter) {
    
    const screenButton = $('.key');
    
    for (let i = 0; i < 26; i += 1) {
        console.log(screenButton.eq(i).text());
        if (screenButton.eq(i).text() === letter) {
           
            screenButton.eq(i).attr('disabled', 'disabled')
                        .css('backgroundColor', 'darkgrey')
                        .css('color', 'grey');
        }
    }
 
    newGame.handleInteraction(letter);
} 


// wait for the Start/replay button to be clicked to play
document.getElementById('btn__reset').addEventListener('click', () => {

    resetDisplay();
    newGame = new Game();
    newGame.startGame();
    
});

// respond to clicks on the on screen keyboard and call function to disable button selected
keyButtons.addEventListener('click', (e) => {
 
    if (e.target.className === 'key') {
        markButton(e.target.textContent);
    }

});

// respond to physical keyboard input and call function to disable key pressed
document.addEventListener('keypress', (e) => {
   
        if (e.key.match(/[a-z]/i) && e.key !== 'Enter' ) {
         
            markButton(e.key);
            
        } 
   
});
