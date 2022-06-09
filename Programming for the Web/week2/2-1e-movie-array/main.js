const yourMovie = window.prompt("Please enter the name of your favorite movie.");
console.log("Your favorite movie is ", yourMovie);
const greatMoviesArray = ("Moonrise Kingdom, Parasite, Pulp Fiction, Snatch, Legends of the Fall, Moneyball, Saving Private Ryan, Dead Poets Society, The Godfather, Once upon a time in Hollywood").split(", ");
console.log("Which of these great movies is my favorite?", greatMoviesArray);
greatMoviesArray.push(yourMovie);
console.log("Your favorite has been added to the list.", greatMoviesArray);
const myfavMovie = ("Legends of the Fall").split(", ");
console.log("My favorite movie is", yourMovie);
