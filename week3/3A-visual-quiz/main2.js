const myQuizArray = ("Question 1, Question 2, Question 3").split(", ");
console.log("It's quiz time. Let's play!", myQuizArray);


console.log(myQuizArray);
const myAnswer1 = { 
    property: "description", 
};
const myAnswer2 = { 
    property: "description", 
};
const myAnswer3 = { 
    property: "description", 
};

const myQuestion1 = [
    {question: 'Please guess the answer to these 3 questions. Question 1: Pick a color. Red, blue or green?', answer: 'red'}
]
const firstQuestion = prompt(myQuestion1[0].question);
const firstAnswer = myQuizArray[0].answer
if(firstQuestion === "red") {
    console.log(myAnswer1);
    alert('Red-You answered the question');  
    }
if(firstQuestion === "blue") {
    console.log(myAnswer2);
    alert('Blue-You answered the question');
    }
if(firstQuestion === "green") {
    console.log(myAnswer3);
    alert('Green-You answered the question');
}

const myQuestion2 = [
    {question: 'Question 1: Pick a number between 1 and 5.', answer: '1'}
]
const secondQuestion = prompt(myQuestion2[0].question);
const secondAnswer = myQuizArray[0].answer
if(secondQuestion === "1") {
    console.log(myAnswer1);
    alert('Answer 1-You answered the question');  
    }
if(secondQuestion === "2") {
    console.log(myAnswer2);
    alert('Answer 2-You answered the question');
    }
if(secondQuestion === "3") {
    console.log(myAnswer3);
    alert('Answer 3-You answered the question');
}
if(secondQuestion === "4") {
    console.log(myAnswer3);
    alert('Answer 4-You answered the question');
}
if(secondQuestion === "5") {
    console.log(myAnswer3);
    alert('Answer 5-You answered the question');
}

const myQuestion3 = [
    {question: 'Question 2: Day or night?', answer: 'day'}
]
const thirdQuestion = prompt(myQuestion3[0].question);
const thirdAnswer = myQuizArray[0].answer
if(thirdQuestion === "day") {
    console.log(myAnswer1);
    alert('Day-You answered the question');  
    }
if(thirdQuestion === "night") {
    console.log(myAnswer2);
    alert('Night-You answered the question');
    }
if(thirdQuestion === "3") {
    console.log(myAnswer3);
    alert('Answer 3-You answered the question');
}

// returning data
//function addStuff(itemA, itemB) {
//return itemA + itemB;
//}
//const sum = addStuff(1, 4);
//console.log("the sum is", sum);

//while loop--a little scary but not bad
//let check = 7;
//while (check > 7) {
//  check = check - 1; // check--; 
//  console.log("the check is currently", check);   
//}

//while loop removing items in an array
//const questions = ["string", "string"];
//while (questions.length) {
//  console.log("removing", questions.shift());
//  console.log("remaining questions", questions.toString());
//}

// submit button--first create a canvas
//function setup() {
//  createCanvas(800, 800);
//  background (0);
//}

// next--button setup
//button = createButton("Submit Answer");
//button.position(400, 400);
//button.mousePressed(function (event) {
//    console.log("input value", input.value())
//});