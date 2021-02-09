const DEFAULTGRIDSIZE = 16;

const container = document.querySelector('.container');
const clearButton = document.createElement('button');
clearButton.classList.add('clearButton');
clearButton.textContent = 'Change Size';
container.parentNode.insertBefore(clearButton, container.parentNode.childNodes[0]);

clearButton.addEventListener('click', resetBoard);
clearButton.addEventListener('mouseover', () => {
    clearButton.style.backgroundColor = random_rgba();
})
clearButton.addEventListener('mouseleave', () => {
    clearButton.style.backgroundColor = 'white';
})

function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function createBoard(size) {
    for (let i = 0; i < size**2; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-square');
        newDiv.style.backgroundColor = 'white';
        newDiv.addEventListener('mouseover', () => {
            //newDiv.style.backgroundColor = 'black'; //default
            newDiv.style.backgroundColor = random_rgba(); //random color
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
        } else if (squaresPerSide > 75 || squaresPerSide <= 0 || isNaN(squaresPerSide)) {
            alert('Must enter an integer between 1 and 75');
        }
    } while (squaresPerSide > 75 || squaresPerSide <= 0 || isNaN(squaresPerSide));

    clearBoard(gridSquares);
    setGridSize(squaresPerSide);
    createBoard(squaresPerSide);
}

function clearBoard(gridSquares) {
    gridSquares.forEach(gridSquare => gridSquare.remove());
}

function random_rgba() {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function reduceLightness(currentLightness) {
    if (currentLightness !== 0) currentLightness -= 0.1;
    if (currentLightness < 0) currentLightness = 0.0;
    return currentLightness;
}

createDefaultBoard();