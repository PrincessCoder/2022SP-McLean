
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
   { question: 'What color do you get when you combine yellow and blue?'}
//   { question: 'What color is opposite blue on the color wheel?', answer = 'orange'}
//   { question: 'When black is added to a color, it is called a:'}
//   { question: 'When white is added to a color, it is called a:'}
//   { question: 'What visible color produces the longest prism?'}
//   { question: 'What color contains all colors added together?'}
];
function next() {
    if(statements.length < 1) {
        alert('YOU WON!');
        return;
    }
    const randomIndex = Math.ceil(Math.random() *
    statements.length - 1);
    return statements[randomIndex];
}
currentQuestion = next();
let message = currentQuestion.question;

function setup() {
    createCanvas(800, 600);
    background('lightblue');
    heading = createElement('h1', ['Color Quiz']);
    heading.position(100, 100);
    questionInput = createInput('');
    questionInput.size(250, 24);
    questionInput.position(100, 350);
}
function draw() {
    fill('purple');
    textSize(24);
    text(message, 100, 300);

}