const gridContainer = document.querySelector(".grid-container");

function createGrids(){
  for(let i = 1; i <= 16; i++){
    const gridColumn = document.createElement("div");
    gridColumn.classList.add("grid-column");
    gridContainer.appendChild(gridColumn);
    for(let j = 1; j <= 16; j++){
      const grid = document.createElement("div");
      grid.classList.add("grid");
      gridColumn.appendChild(grid);
    }
  }
}

createGrids();