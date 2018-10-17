class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
     //add phrase to display by breaking it up into individual letters and/or spaces and then output to HTML
    addPhraseToDisplay() {
              
        for (let i = 0; i < this.phrase.length; i += 1) {
            if (this.phrase[i] !== ' ') {
                $('#phrase ul').append(`<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`);
              
            } else {
                $('#phrase ul').append(`<li class="hide space">&nbsp;</li>`);
            }

        } 

    }

    //check to see if letter selected by player matches a letter in phrase
    checkLetter(selected) {
      
        const checkPhrase = this.phrase.toLowerCase();
        return checkPhrase.match(selected);
        
    }

    //reveals letter on board if it matches selected letter
    showMatchedLetter(selected) {
        
            const showClass = `.hide.letter.${selected}`;
            $(showClass).addClass('show').removeClass('hide');
            
    }

}