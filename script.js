const container = document.querySelector('.container');
const clearButton = document.createElement('button');
clearButton.classList.add('clearButton');
clearButton.textContent = 'Reset Board';
container.parentNode.insertBefore(clearButton, container.parentNode.childNodes[0]);
clearButton.addEventListener('click', resetBoard);

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

function resetBoard() {
    const VIEWPORTWIDTH = VIEWPORTHEIGHT = 800;
    gridSquares = Array.from(document.querySelectorAll('.grid-square'));
    clearBoard(gridSquares);
    do {
        squaresPerSide = prompt('How many squares per side should the new grid contain');
    } while (squaresPerSide > 100);
    let gridWidth = gridHeight = VIEWPORTWIDTH/squaresPerSide;
    container.style.cssText = `grid-template-columns: repeat(${squaresPerSide}, ${gridWidth}px); grid-template-rows: repeat(${squaresPerSide}, ${gridHeight}px)`;
    for (let i = 0; i < squaresPerSide; i++) {
        for (let j = 0; j < squaresPerSide; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('grid-square');
            container.appendChild(newDiv);
        }
    }
    gridSquares = Array.from(document.querySelectorAll('.grid-square'));
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'blue';
    }));
}

function clearBoard(gridSquares) {
    gridSquares.forEach(gridSquare => gridSquare.remove());
}

setDefaultBoard();