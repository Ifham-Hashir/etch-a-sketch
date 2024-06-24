const gridContainer = document.querySelector(".grid-container");
const sizeBtn = document.querySelector(".size-button");

function createGrids(n){
  for(let i = 1; i <= n; i++){
    const gridColumn = document.createElement("div");
    gridColumn.classList.add("grid-column");
    gridContainer.appendChild(gridColumn);
    for(let j = 1; j <= n; j++){
      const grid = document.createElement("div");
      grid.classList.add("grid");
      gridColumn.appendChild(grid);
      grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = getRandomColor();
      });
    }
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

sizeBtn.addEventListener("click", () => {
  let n = Number(prompt("Enter a value between 1 and 100", 16));
  if(typeof n != "number" || n > 100 || n < 1){
    return alert("Invalid Value");
  }
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrids(n);
});

createGrids(16);