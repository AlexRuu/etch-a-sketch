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

