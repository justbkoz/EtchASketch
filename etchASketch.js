const slider = document.getElementById('myRange');
const gridSize = document.getElementById('gridSize')
const container = document.getElementById('container')
gridSize.innerText = 'Grid Size 16 X 16'
let size = 16;

slider.onchange = function () {
    gridSize.innerText = `Grid Size ${this.value} X ${this.value}`;
    size = parseInt(this.value);

    let oldGrid = document.getElementsByClassName('grid');
    while (oldGrid[0]) {
        container.removeChild(oldGrid[0])
    };

    for (i = 0; i < (this.value * this.value); i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'grid';
        newDiv.id = `grid${i}`;
        newDiv.appendChild(document.createTextNode([i])); //testing my divs are working
        container.appendChild(newDiv);
    };


}


container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
// let newGrid = document.getElementsByClassName('grid');
