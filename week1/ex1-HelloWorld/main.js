const yourname = window.prompt("Hello! What is your name?");
console.log('Hello, ' + yourname + '!');

function setup() {
    createCanvas (1920, 1080);
}

function createFile() {
    writer.write(['Hello, ' + yourname + '!']);
    writer.close();
}

