const container = document.querySelector('.container');
const clearButton = document.createElement('button');
clearButton.classList.add('clearButton');
clearButton.textContent = 'Reset Board';
container.parentNode.insertBefore(clearButton, container.parentNode.childNodes[0]);

function setDefaultBoard() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('grid-square');
            container.appendChild(newDiv);
        }
    }
    let gridSquares = Array.from(document.querySelectorAll('.grid-square'));
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'blue';
    }));
}

setDefaultBoard()