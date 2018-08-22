var guessMyObject = {
    color: "red",
    shape: "round",
    action: "bounce",
    game: "catch",
    material: "rubber",
    firstClue: function() {
        return "If you drop me, I " + this.action + "!";
    },
    secondClue: function() {
        return "Find a friend and play " + this.game + " with me!";
    }
    
};

console.log(guessMyObject.firstClue());
console.log(guessMyObject.secondClue());