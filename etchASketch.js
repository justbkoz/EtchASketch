const slider = document.getElementById('myRange');
const gridSize = document.getElementById('gridSize')
const container = document.getElementById('container')
gridSize.innerText = 'Grid Size 16 X 16'
let size = 16;

slider.onchange = function () {
    gridSize.innerText = `Grid Size ${this.value} X ${this.value}`;
    size = slider.value;
    for (i = 0; i <= size; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'grid';
        newDiv.id = 'grid[i]';
        newDiv.appendChild(document.createTextNode([i])); //testing my divs are working
        container.appendChild(newDiv);
    };
}

