class Game {
    constructor() {
        this.missed = 0;
        this.Phrases = ['The quick brown fox jumped over the lazy brown dogs',
                           'Phrase Hunter',
                           'netflix and chill',
                           'just do it',
                           'think different',
                           'javascript techdegree'
                        ];
        this.gamePhrase = [];

    }

    //randomly retrieve one of phrases stored in phrases array
    getRandomPhrase() {
        const randIndex = Math.floor(Math.random() * this.Phrases.length);
        this.gamePhrase = new Phrase(this.Phrases[randIndex]);
        console.log(this.gamePhrase);
        this.gamePhrase.addPhraseToDisplay();

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
            $(showClass).css('color','black');
            $(showClass).css('backgroundColor','white');

            

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