const greatGamesArray = ("Chess, Checkers, Gobblet").split(", ");
console.log("These are all terrific games. Let's play!", greatGamesArray);


console.log(greatGamesArray);
const myChess = { 
    title: "Chess", 
    types: "strategy", 
    numberOfPlayers: "2", 
    rating: "Everyone", 
    shortDescription: "A game of strategy." 
};
const myCheckers = { 
    title: "Checkers", 
    types: "strategy", 
    numberOfPlayers: "2", 
    rating: "Everyone", 
    shortDescription: "A game of quick decision and jumping excitement." 
};
const myGobblet = { 
    title: "Gobblet", 
    types: "strategy", 
    numberOfPlayers: "2", 
    rating: "Everyone", 
    shortDescription: "The strategy of Chess with the quick decisions and jumping excitement of Checkers." 
};

const myQuiz = [
    {question: 'I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game.', answer: '1'}
]
const firstQuestion = prompt(myQuiz[0].question);
const firstAnswer = myQuiz[0].answer
if(firstQuestion === "1") {
    console.log(myChess);
    alert('You selected the game of kings. The history of chess can be traced back around 1500 years; started in the North of India and then spread throughout the Asian continent.');  
    }
if(firstQuestion === "2") {
    console.log(myCheckers);
    alert('You selected Checkers, a classic. Historians now believe that the oldest form of checkers was played around 3,000 B.C.E.');
    }
if(firstQuestion === "3") {
    console.log(myGobblet);
    alert('You selected Gobblet. I agree, all games are awesome. Gobblet is a board game for two players designed by Thierry Denoual and published in 2001 by Gigamic and Blue Orange Games.');
}
