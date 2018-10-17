class Game {
    constructor() {
        this.missed = 0;
        this.Phrases = ['The quick brown fox jumped over the lazy brown dogs',
                           'Phrase Hunter',
                           'netflix and chill',
                           'just do it',
                           'think different',
                           'javascript techdegree',
                           'office memes',
                           'game changer',
                           'elvis has left the building',
                           'let sleeping dogs lie',
                           'piece of cake',
                           'your guess is as good as mine'
                        ];
        this.gamePhrase = [];

    }

    //randomly retrieve one of phrases stored in phrases array
    getRandomPhrase() {
        const randIndex = Math.floor(Math.random() * this.Phrases.length);
        this.gamePhrase = new Phrase(this.Phrases[randIndex]);
    }

    //check to see if button/letter clicked matches one in the phrase
    //if yes reveal and check for win, if no subtract life counter
    handleInteraction(letter) {
                
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

    //this method checks to see if the player has selected all of the letters for win condition
    checkForWin() {
        
        if ($('.hide.letter').length === 0) {
          
            this.gameOver();
        }       
        
    }

    //displays a Win or Loss messages depending if they correctly selected all letters or ran out of tries.
    gameOver() {
        if (this.missed !== 5) {
            $('#overlay').removeClass('start').addClass('win');
            $('#overlay').show();
            $('#game-over-message').text(`Yes, the phrase was "${this.gamePhrase.phrase}." You won! Congratulations!!!`);
            $('#btn__reset').text('Play Again');
        } else {
            $('#overlay').removeClass('start').addClass('lose');
            $('#overlay').show();
            $('#game-over-message').text('You Lost! Better Luck Next Time.');
            $('#btn__reset').text('Try Again');
            
            
        }
    }

    //generate random phrase for current game and add it to display
    startGame() {
        this.getRandomPhrase();
        this.gamePhrase.addPhraseToDisplay();
    }
}