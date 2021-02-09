const DEFAULTGRIDSIZE = 16;

const container = document.querySelector('.container');
const clearButton = document.createElement('button');
clearButton.classList.add('clearButton');
clearButton.textContent = 'Reset Board';
container.parentNode.insertBefore(clearButton, container.parentNode.childNodes[0]);
clearButton.addEventListener('click', resetBoard);

function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function createBoard(size) {
    for (let i = 0; i < size**2; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-square');
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = 'black'; //default
/*             if (newDiv.style.backgroundColor === 'black') {
                newDiv.style.backgroundColor = 'white';
            } else newDiv.style.backgroundColor = 'black'; */
        });
        container.appendChild(newDiv);
    }
}
function createDefaultBoard() {
    setGridSize(DEFAULTGRIDSIZE);
    createBoard(DEFAULTGRIDSIZE);
}

function resetBoard() {
    let gridSquares = Array.from(document.querySelectorAll('.grid-square'));
    
    do {
        squaresPerSide = prompt('How many squares per side should the new grid contain');
        if (squaresPerSide === null) {
            return;
        } else if (squaresPerSide > 100 || squaresPerSide <= 0 || isNaN(squaresPerSide)) {
            alert('Must enter an integer between 1 and 100');
        }
    } while (squaresPerSide > 100 || squaresPerSide <= 0 || isNaN(squaresPerSide));

    clearBoard(gridSquares);
    setGridSize(squaresPerSide);
    createBoard(squaresPerSide);
}

function clearBoard(gridSquares) {
    gridSquares.forEach(gridSquare => gridSquare.remove());
}

createDefaultBoard();