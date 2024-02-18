const grid = document.getElementById('grid');
const HEIGHT = screen.height;

console.log(HEIGHT);
console.log(HEIGHT/16);

/*
grid = big square
16 rows as divs
each row has 16 square divs
each grid row (height = HEIGHT/16, width = HEIGHT)
each grid within the row (height = HEIGHT/16, width = HEIGHT/16)
*/


// Easy revamp in the future for the button, change 16 to input value that
// User inputs and when the screen refreshes, preload it with 16
for (let gridRow = 0; gridRow < 16; gridRow++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'grid-row');
    row.style.cssText = `height: ${HEIGHT/16}px; width: ${HEIGHT}px;`;
    grid.appendChild(row);
    for (let rowItem = 0; rowItem < 16; rowItem++) {
        let item = document.createElement('div');
        item.style.cssText = `height: ${HEIGHT/16}px; width: ${HEIGHT/16}px; border: 1px solid red;`;
        row.appendChild(item);
    }
}