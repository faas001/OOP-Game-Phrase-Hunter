class Game {
    constructor() {
        this.missed = 0;
        this.gamePhrase = new Phrase('The quick brown fox jumped over the lazy brown dog');

    }

    //randomly retrieve one of phrases stored in phrases array
    getRandomPhrase() {
        this.gamePhrase.addPhraseToDisplay(this.gamePhrase);

    }

    //check to see if button/letter clicked matches one in the phrase
        //if yes reveal and check for win, if no subtract life counter
    handleInteraction(letter) {
        
        console.log(this.gamePhrase);
        if ( this.gamePhrase.checkLetter(letter) ) {
            console.log('true', letter);
            const showClass = `.hide.letter.${letter}`;
            console.log(showClass);
            console.log($(showClass));
            $(showClass).css('color','black')

            

        } 
        
    }

    //this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
    removeLife() {


    }

    //this method checks to see if the player has selected all of the letters.
    checkForWin() {


    }

    gameOver() {

    }

    startGame() {
        this.getRandomPhrase();
    }
}