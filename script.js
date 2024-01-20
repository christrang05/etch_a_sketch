document.addEventListener('DOMContentLoaded', function() {
    createGrid(16);

    document.getElementById('gridButton').addEventListener('click', function() {
        let size = parseInt(prompt("Enter the number of squares per side for the new grid (max 100)", "16"), 10);
        if (!isNaN(size) && size >= 1 && size <= 100) {
            createGrid(size)
        } else {
            alert("Invalid input. Please enter a number between 1 and 100.");
        }
    });
});

function createGrid(size) {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';
    const maxSize = Math.min(window.innerWidth, window.innerHeight);
    const squareSize = maxSize / size
    container.style.width = `${squareSize * size}px`;
    container.style.height = `${squareSize * size}px`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.classList.add('square');
        container.appendChild(square);
    }
}