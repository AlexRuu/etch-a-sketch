// Global variable declaration
const container = document.querySelector('.grid-container');
let colour = document.querySelector('.colour');
let drawBrush = document.querySelector('.draw-brush');
let eraseBrush = document.querySelector('.erase-brush');

/* Make the grid
function makeGrid(row, col) {
    for (i = 0; i < row * col; i++) {
        let square = document.createElement('div')
        square.classList.add('square');
        container.appendChild(square);
    }
}
*/

drawBrush.addEventListener('click', draw);
eraseBrush.addEventListener('click', erase);
makeGrid(10);


colour.onchange = function() {
    colour = this.value;
    return colour;
}

// Functions
// Grid function
function makeGrid(value) {
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`
    container.style.gridTemplaterows = `repeat(${value}, 1fr)`
    
    for (i = 0; i < value * value; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    };
};


// Get squares div variable for brushes
const blocks = document.querySelectorAll('.square');

// Draw function 
function draw() {
    blocks.forEach((div) => {
        div.addEventListener('mousemove', function(event) {
            if (event.buttons === 1) {
                console.log(colour);
                div.setAttribute('style', `background-color: ${colour};`)
            };
        });
    });
};

// Erase function 
function erase () {
    blocks.forEach((div) => {
        div.addEventListener('mousemove', function(event) {
            if (event.buttons === 1) {
                div.setAttribute('style', 'background-color: white;')
            };
        });
    });
};

