
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
   { question: 'What color do you get when you combine yellow and blue?', answer: "green"},
   { question: 'What color is opposite blue on the color wheel?', answer: "orange"},
   { question: 'When black is added to a color, it is called a:', answer: "shade"},
   { question: 'When white is added to a color, it is called a:', answer: "tint"},
   { question: 'What visible color produces the longest wavelength?', answer: "red"},
   { question: 'What color contains all colors added together?', answer: "white"}
];
function next() {
    if(statements.length < 1) {
        window.alert('YOU WON!');
        return;
    }
    const randomIndex = Math.ceil(Math.random() *
    statements.length - 1);
    return statements[randomIndex];
}
function checkQuestion() {
    if (currentQuestion.Question === questionInput.value ()) {
        // remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer === statementObj.answer;
        });
        // this is the correct condition
        response = 'Correct';
        responseColor = 'green';
    } else {
        // this is the wrong answer condition
        response = 'Incorrect, please try again.';
        responseColor = 'red';
    }
    currentQuestion = next();
    questionInput.value('');
    if(currentQuestion){
        message = currentQuestion.question;
    } 
}
currentQuestion = next();
let message = currentQuestion.question;

function setup() {
    createCanvas(800, 600);
    heading = createElement('h1', ['Color Quiz']);
    heading.position(100, 100);
    questionInput = createInput('');
    questionInput.size(255, 25);
    questionInput.position(100, 350);
    submitAnswerButton = createButton('submit answer');
    submitAnswerButton.size(255, 25);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 400);
}
function draw() {
    background('lightblue');
    fill('purple');
    textSize(24);
    text(message, 100, 300);
    fill(responseColor);
    text(response, 100, 475);

}