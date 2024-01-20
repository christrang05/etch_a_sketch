const gridContainer = document.getElementById('grid-container');
const changeSizeButton = document.getElementById('grid-size');

function createSquare(size) {
    gridContainer.innerHTML = '';
    const squareSize = 'calc(100vh / ${size})';

    for (let i = 0; i < size * size; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('new-square');
        newSquare.style.width = squareSize;
        newSquare.style.height = squareSize;
        gridContainer.appendChild(newSquare);
    }
}

function adjustGrid() {
    let newSize = prompt("How many squares per side? (# must be between 1-100)");
    newSize = parseInt(newSize, 10);
    if (!isNaN(newSize) && newSize >= 1 && newSize <= 100) {
        createSquare(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

changeSizeButton.addEventListener('click', adjustGrid);
createSquare(16);

