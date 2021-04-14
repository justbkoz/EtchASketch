const slider = document.getElementById('myRange');
const gridSize = document.getElementById('gridSize')
const container = document.getElementById('container')
gridSize.innerText = 'Grid Size 10 X 10'
let size = 10;
for (i = 0; i < 100; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = 'grid';
    newDiv.id = `grid${i}`;
    container.appendChild(newDiv);
    document.getElementById(`grid${i}`).addEventListener('mouseover', mouseOver);
}
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`

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
        container.appendChild(newDiv);
        document.getElementById(`grid${i}`).addEventListener('mouseover', mouseOver);
    };
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
};


function mouseOver(e) {
    console.log('test');
    e.target.style.backgroundColor = 'black';
}
