class Game {
    constructor() {
        this.missed = 0;
        this.Phrases = ['The quick brown fox jumped over the lazy brown dogs',
                           'Phrase Hunter',
                           'netflix and chill',
                           'just do it',
                           'think different',
                           'javascript techdegree',
                           'office memes'
                        ];
        this.gamePhrase = [];

    }

    //randomly retrieve one of phrases stored in phrases array
    getRandomPhrase() {
        const randIndex = Math.floor(Math.random() * this.Phrases.length);
        this.gamePhrase = new Phrase(this.Phrases[randIndex]);
        console.log(this.gamePhrase);
        
    }

    //check to see if button/letter clicked matches one in the phrase
        //if yes reveal and check for win, if no subtract life counter
    handleInteraction(letter) {
        
        console.log(this.gamePhrase);
        if ( this.gamePhrase.checkLetter(letter) ) {
            this.gamePhrase.showMatchedLetter(letter);
            this.checkForWin();
        } else {
            this.removeLife();
          
        }
     
    }

    //this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
    removeLife() {
        this.missed += 1;
        const scoreboard = $('#scoreboard').children().children();
        scoreboard.eq(scoreboard.length - this.missed).html('<li class="wrong"><img src="images/lostHeart.png" height="35px" widght="30px"></li>');
       
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    //this method checks to see if the player has selected all of the letters.
    checkForWin() {
        console.log($('.hide.letter').length);
        if ($('.hide.letter').length === 0) {
            console.log('you win');
            this.gameOver();
        }       
        
    }

    //displays a Win or Loss messages depending if they correctly selected all letters or ran out of tries.
    gameOver() {
        if (this.missed !== 5) {
            $('#qwerty').hide();
            $('#scoreboard').before('<div id="gameover">You won! Congratulations!!!</div>');
        } else {
            $('#qwerty').hide();
            $('#scoreboard').before('<div id="gameover">You Lost! Better Luck Next Time.</div>');
        }
    }

    startGame() {
        this.getRandomPhrase();
        this.gamePhrase.addPhraseToDisplay();
    }
}