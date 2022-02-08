// select empty div and assign to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');
// put an h1 inside of it
// create a new element
const heading = document.createElement ('h1');
heading.innerHTML = 'Hello Ken! It is a sunny day in Green Bay, WI.';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    document.body.style.backgroundColor = 'magenta';
}