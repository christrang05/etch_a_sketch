const container = document.querySelector('.container');
const addButton = document.querySelector('.grid');

function createSquare() {
    const newSquare = document.createElement('div');
    newSquare.classList.add('new-square');
    container.appendChild(newSquare);
}

addButton.addEventListener('click', adjustGrid);
function adjustGrid() {
    let numSquares = prompt("How many squares per side? (# must be between 1-100)");
    numSquares = parseInt(numSquares, 10);
    if (!isNaN(numSquares) && numSquares >= 1 && numSquares <= 100) {
        for (let i = 0; i < numSquares; i++) {
            createSquare();
        }
    } else {
        alert("Please enter a valid number.");
    }
}


