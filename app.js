// DOM elements
const grid = document.querySelector('.grid-container');
let size = document.querySelector('.size');
let drawBrush = document.querySelector('.draw');
let eraseBrush = document.querySelector('.erase');
let buttons = document.querySelectorAll('button');
let colour = document.querySelector('.colour');
let clear = document.querySelector('.clear');

// Run functions
window.onload = makeGrid(size.value);
size.onchange = rebuildGrid();
checkActive();
size.oninput = function() {
    let output = document.querySelector('.output');
    output.innerHTML = `${this.value} x ${this.value}`;
};

for (let i = 0; i < 3; i++) {
    buttons[i].addEventListener('click', function() {
        brush();
    });
};

clear.onclick = () => {clearGrid()};

// Functions
// Grid
function makeGrid(value) {
    grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${value}, 1fr)`

    for (let i = 0; i < value * value; i++) {
        let squares = document.createElement('div');
        squares.classList.add('square');
        grid.appendChild(squares);
    };
};


// Resize grid as determined by slider value
function rebuildGrid() {
    size.addEventListener('input', function() {
        size = this.value;
        grid.innerHTML = '';
        makeGrid(size);
        clearButtonState();
    });
};

// Check for active button
function checkActive() {
    for (let i = 0; i < 3; i++) {
        buttons[i].addEventListener('click', function() {
            let current = document.querySelectorAll('.active');
            if (current.length > 0) {
                current[0].className = current[0].className.replace(' active', '');
            };
            this.className += ' active';
        });
    };
};

// Clear button active state
function clearButtonState() {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('active')) {
            buttons[i].classList.remove('active');
        };
    };
};

// Brush
function brush() {
    let blocks = document.querySelectorAll('.square');
    blocks.forEach((div) => {
        div.addEventListener('mousemove', function(event) {
            if (event.buttons === 1) {
                if (buttons[0].classList.contains('active')) {
                    div.style.backgroundColor = `${colour.value}`;
                }
                else if (buttons[1].classList.contains('active')) {
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    div.style.backgroundColor = `#${randomColor}`;
                }
                else if (buttons[2].classList.contains('active')) {
                    div.style.backgroundColor = '';
                };
            };
        });
    });
};

// Select colour for brush
function updateColour() {
    colour.addEventListener('input', function() { 
        colour = this.value;
    });
};

// Clear
function clearGrid() {
    let blocks = document.querySelectorAll('.square');
    blocks.forEach((div) => {
        div.style.backgroundColor ='';
    });
};
