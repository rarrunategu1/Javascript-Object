/*var guessMyObject = {
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
console.log(guessMyObject.secondClue()); */

//Sitora's code with my function

var guessWho = {
   height: ["5 foot, 1 inches"],
   weight: 196,
   facialFeature: ["mustache"],
   clothing: ["blue overalls", "red shirt", "red hat"],
   profession: ["plumber"],
   about: function() {
       alert("The person that you are guessing is " + this.height + " tall and he weighs " + this.weight + " pounds and has a " + this.facialFeature + ".");
   },
   job: function() {
       alert('He loves his job, because he is a ' + this.profession + ' and a hero.');
   },
   him: function() {
       return this.height + 'tall and his weight in pounds is ' + this.weight;
   }
};
alert ("Guess my brother's name! His " + guessWho.facialFeature + " is black and bushy and his favorite outfit involves " + guessWho.clothing[0] + " and a " + guessWho.clothing[1] + "!");

function guessName(name) {
 if(name == "mario") {
     alert("You're right!  I'm his brother, Luigi!");
 } else {
     alert("Sorry, wrong answer.  Click ok to find out!");
     guessWho.about();
     guessWho.job();
     alert("His name is Mario!  Thanks for playing!")
    
 } 
 
}

