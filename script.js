const grid = document.getElementById('grid');
const HEIGHT = screen.height;

/*
grid = big square
16 rows as divs
each row has 16 square divs
each grid row (height = HEIGHT/16, width = HEIGHT)
each grid within the row (height = HEIGHT/16, width = HEIGHT/16)
*/


// Easy revamp in the future for the button, change 16 to input value that
// User inputs and when the screen refreshes, preload it with 16
function setGridSize (gridSize) {
    if(grid.hasChildNodes) {
        let lastChild = grid.lastElementChild;
        while(lastChild) {
            grid.removeChild(lastChild);
            lastChild = grid.lastElementChild;
        }
    }

    let adjustedHeight = HEIGHT/gridSize;
    for (let gridRow = 0; gridRow < gridSize; gridRow++) {
        let row = document.createElement('div');
        row.classList.add('grid-row');
        row.style.cssText = `height: ${adjustedHeight}px; width: ${HEIGHT}px;`;
        grid.appendChild(row);
        for (let rowItem = 0; rowItem < gridSize; rowItem++) {
            let item = document.createElement('div');
            item.classList.add('grid-item');
            item.style.cssText = `height: ${adjustedHeight}px; width: ${adjustedHeight}px; border: 1px solid black;`;
            item.addEventListener('mouseover', () => {
                item.style.backgroundColor = getRandomColor();
                // item.classList.add('mouseover-background'); // FOR NORMAL BG-COLOR
            });
            row.appendChild(item);
        }
    }
}

const editButton = document.getElementById('edit-grid');

editButton.addEventListener('click', () => {
    let sizeOfGrid = -1;
    while(sizeOfGrid < 0 || sizeOfGrid > 101) {
        sizeOfGrid = prompt("What would you like the new size of the grid to be? Enter a number between 1-100.");
    };

    setGridSize(sizeOfGrid);
});

setGridSize(16);

/* -- EXTRA CREDIT: Random Color Generator -- */

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}