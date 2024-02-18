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

for (let gridRow = 0; gridRow < 16; gridRow++) {
    let row = document.createElement('div');
    row.style.cssText = `height: ${HEIGHT/16}px; width: ${HEIGHT}px; border: 1px solid black;`;
    grid.appendChild(row);
}