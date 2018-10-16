class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay() {
        //add phrase to display by breaking it up into individual letters and/or spaces and then output to HTML
       
        for (let i = 0; i < this.phrase.length; i += 1) {
            if (this.phrase[i] !== ' ') {
                $('#phrase ul').append(`<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`);
              
            } else {
                $('#phrase ul').append(`<li class="hide space">&nbsp;</li>`);
            }

        } 

        for (let i = 0; i <this.phrase.length; i +=1) {

        } 
    }

    checkLetter(selected) {
        //check to see if letter selected by player matches a letter in phrase
        const checkPhrase = this.phrase.toLowerCase();
        console.log(checkPhrase);       
        console.log(checkPhrase.match(selected));
        return checkPhrase.match(selected);
        
    }

    showMatchedLetter(selected) {
        //reveals letter on board if it matches selected letter
            console.log('true', selected);
            const showClass = `.hide.letter.${selected}`;
            console.log(showClass);
            console.log($(showClass));
            $(showClass).addClass('show').removeClass('hide');
            // $(showClass).css('color','black');
           // $(showClass).css('backgroundColor','white');
    }

}