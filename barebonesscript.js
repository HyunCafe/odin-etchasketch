// Variables to keep track of the count and colored squares
let count = 0;
let squaresColored = [];

// Get the body element and create a container for the grid
const body = document.body;
const container = document.createElement("div");
container.classList.add("Main_Container");
body.appendChild(container);

// Creates a 50x50 grid of squares.
function createLargeGrid() {
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 50; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        container.appendChild(squareDiv);
      }
    }
  }

// Adjusts the size of each square in the grid.
function adjustSquareSize() {
    document.querySelectorAll(".square").forEach((square) => {
      square.style.width = "2%";
      square.style.height = "2%";
      square.addEventListener("mouseover", () => {
        if (!squaresColored.includes(square)) {
          square.classList.add("saved");
          count++;
          squaresColored.push(square);
          displayCount();
        }
      });
    });
  }
  
// Displays the count of squares colored.
function displayCount() {
    document.getElementById("counter").innerHTML = `Squares colored: ${count}`;
  };
  

// Resets the grid and count of squares colored
function reset() {
    count = 0;
    squaresColored = [];
    document.querySelectorAll(".square").forEach((square) => {
      square.classList.remove("saved");
      square.style.backgroundColor = "#fafafa";
    });
    displayCount();
  }
  

// Listen for the DOMContentLoaded event and call functions to create the grid and count squares
document.addEventListener("DOMContentLoaded", () => {
  createLargeGrid();
  adjustSquareSize();
});

// Listen for a click event on the reset button and call the reset function
document.getElementById("reset").addEventListener("click", reset);