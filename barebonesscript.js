// Variables to keep track of the count and colored squares
let squareCount = 0;
let coloredSquares = [];

// Get the body element and create a container for the grid
const bodyElement = document.body;
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
bodyElement.appendChild(gridContainer);

// Creates a 50x50 grid of squares.
function create50x50Grid() {
  for (let row = 0; row < 50; row++) {
    for (let col = 0; col < 50; col++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      gridContainer.appendChild(squareDiv);
    }
  }
}

// Adjusts the size of each square in the grid.
const allSquares = document.querySelectorAll(".square");
function adjustSquareDimensions() {
    allSquares.forEach((square) => {
      square.style.width = "2%";
      square.style.height = "2%";

      square.addEventListener("mouseover", () => {
        if (!coloredSquares.includes(square)) {
          square.classList.add("saved");
          squareCount++;
          coloredSquares.push(square);
        }
      });
    });
  }

// Resets the grid and count of squares colored
function resetGrid() {
  squareCount = 0;
  coloredSquares = [];
  allSquares.forEach((square) => {
    square.classList.remove("saved");
    square.style.backgroundColor = "#fafafa";
  });
}


// Listen for the DOMContentLoaded event and call functions to create the grid and count squares
document.addEventListener("DOMContentLoaded", () => {
  create50x50Grid();
  adjustSquareDimensions();
});


// Listen for a click event on the reset button and call the reset function
document.getElementById("reset").addEventListener("click", resetGrid);



