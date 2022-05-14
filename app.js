// Global variable declaration
const container = document.querySelector('.grid-container');

// Make the grid
function makeGrid(row, col) {
    for (i = 0; i < row * col; i++) {
        let square = document.createElement('div')
        square.classList.add('square');
        container.appendChild(square);
    }
}

makeGrid(16, 16);

// Draw function 
const blocks = document.querySelectorAll('.square');

function draw() {
    blocks.forEach((div) => {
        div.addEventListener('mousemove', function(event) {
            if (event.buttons === 1) {
                div.setAttribute('style', 'background-color: black;')
            };
        });
    });
};

draw();