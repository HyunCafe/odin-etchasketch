"use strict";

const body = document.body;

// Create a new <div> element
const container = document.createElement("div");
container.classList.add("Main_Container");
body.append(container);

// Default size when page loads for grid
document.addEventListener("DOMContentLoaded", function () {
  createSmallGrid();
  changeColor("orangeDefault");
  adjustSquare("small");
});

// Grid Options: Small, Medium, Large
const smallButton = document.getElementById("small-button");
const mediumButton = document.getElementById("medium-button");
const largeButton = document.getElementById("large-button");

// Event Listener for Button Click that change on user choice / reset old grid
smallButton.addEventListener("click", function () {
  removeExistingGrid();
  createSmallGrid();
  adjustSquare("small");
  changeColor(currentColor);
});

mediumButton.addEventListener("click", function () {
  removeExistingGrid();
  createMediumGrid();
  adjustSquare("medium");
  changeColor(currentColor);
});

largeButton.addEventListener("click", function () {
  removeExistingGrid();
  createLargeGrid();
  adjustSquare("large");
  changeColor(currentColor);
});

function removeExistingGrid() {
  const squareElements = document.getElementsByClassName("square");
  while (squareElements.length > 0) {
    squareElements[0].parentNode.removeChild(squareElements[0]);
  }
}

// Function for Small 16x16
function createSmallGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      container.append(squareDiv);
    }
  }
}

// Function for Medium 30x30
function createMediumGrid() {
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      container.append(squareDiv);
    }
  }
}

// Function for Large 50x50
function createLargeGrid() {
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      container.append(squareDiv);
    }
  }
}

// Function for square size change based on above choices
function adjustSquare(size) {
  let squareWidth, squareHeight;

  switch (size) {
    case "small":
      squareWidth = "6.25%";
      squareHeight = "6.25%";
      break;
    case "medium":
      squareWidth = "3.333%";
      squareHeight = "3.333%";
      break;
    case "large":
      squareWidth = "2%";
      squareHeight = "2%";
      break;
  }
  // Maybe add custom grid 1-100

  document.querySelectorAll(".square").forEach((square) => {
    square.style.width = squareWidth;
    square.style.height = squareHeight;
    // Function Save over hover for the picture creation
    square.addEventListener("mouseover", function () {
      square.classList.add("saved");
    });
  });
}

// Different Color Modes: Green Gradient, Studio Ghilbi, Blue Gradient
const eraser = "#fafafa";
const orangeDefault = "#ffa87d";
const greenColors = [
  "#C5E8B7",
  "#ABE098",
  "#83D475",
  "#57C84D",
  "#2EB62C",
  "#d5eeca",
];
const ghilbiColors = [
  "#e2dd3f",
  "#74cc66",
  "#046684",
  "#a06468",
  "#d4b5a9",
  "#2e4744",
];
const blueColors = [
  "#aa00ff",
  "#9600ff",
  "#6f00ff",
  "#5512fb",
  "#3c00ff",
  "#7700b3",
];

let currentColor = "orangeDefault";

function changeColor(color) {
  currentColor = color;
  document.querySelectorAll(".square").forEach((element) => {
    element.addEventListener("mouseover", () => {
      switch (currentColor) {
        case "orange":
          element.style.backgroundColor =
            greenColors[Math.floor(Math.random() * greenColors.length)];
          break;
        case "ghilbi":
          element.style.backgroundColor =
            ghilbiColors[Math.floor(Math.random() * ghilbiColors.length)];
          break;
        case "blue":
          element.style.backgroundColor =
            blueColors[Math.floor(Math.random() * blueColors.length)];
          break;
        //  Eraser mode
        case "eraser":
          element.style.backgroundColor = eraser;
          break;
        default:
          element.style.backgroundColor = orangeDefault;
      }
    });

    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = element.dataset.savedColor;
    });

    element.addEventListener("mouseover", () => {
      element.dataset.savedColor = element.style.backgroundColor;
    });

    // Add touch events
    element.addEventListener("touchstart", () => {
      switch (currentColor) {
        case "orange":
          element.style.backgroundColor =
            greenColors[Math.floor(Math.random() * greenColors.length)];
          break;
        case "ghilbi":
          element.style.backgroundColor =
            ghilbiColors[Math.floor(Math.random() * ghilbiColors.length)];
          break;
        case "blue":
          element.style.backgroundColor =
            blueColors[Math.floor(Math.random() * blueColors.length)];
          break;
        //  Eraser mode
        case "eraser":
          element.style.backgroundColor = eraser;
          break;
        default:
          element.style.backgroundColor = orangeDefault;
      }
    });

    element.addEventListener("touchend", () => {
      element.style.backgroundColor = element.dataset.savedColor;
    });

    element.addEventListener("touchmove", () => {
      switch (currentColor) {
        case "orange":
          element.style.backgroundColor =
            greenColors[Math.floor(Math.random() * greenColors.length)];
          break;
        case "ghilbi":
          element.style.backgroundColor =
            ghilbiColors[Math.floor(Math.random() * ghilbiColors.length)];
          break;
        case "blue":
          element.style.backgroundColor =
            blueColors[Math.floor(Math.random() * blueColors.length)];
          break;
        //  Eraser mode
        case "eraser":
          element.style.backgroundColor = eraser;
          break;
        default:
          element.style.backgroundColor = orangeDefault;
      }
    });
  });
}

// Updates mode variable when a color button is clicked
function changeMode(mode) {
  switch (mode) {
    case "orange":
      currentMode = "orange";
      break;
    case "ghilbi":
      currentMode = "ghilbi";
      break;
    case "blue":
      currentMode = "blue";
      break;
  }
}

// Add a Dark Mode toggle switch, which enables Party mode = Blue/Purple Gradient
function toggleMode() {
  const body = document.querySelector("body");
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");

  // Feature change background image with toggle click
  if (body.classList.contains("dark-mode")) {
    body.style.backgroundImage = "url('assets/bgDarkMode.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
  } else {
    body.style.backgroundImage = "url('assets/bg.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
  }
  // Add event listener to save over hover when in dark mode
  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mouseover", function () {
      if (body.classList.contains("dark-mode")) {
        square.classList.add("saved");
      }
    });
  });
}

// Counter showing how many squares were highlighted
let count = 0;
let squaresColored = [];

function countSquares() {
  document.querySelectorAll(".square").forEach((element) => {
    element.addEventListener("mouseover", () => {
      if (currentColor !== "eraser" && !squaresColored.includes(element)) {
        element.classList.add("saved");
        count++;
        squaresColored.push(element);
        displayCount();
      }
    });
  });
}

function displayCount() {
  document.getElementById("counter").textContent = `Squares Colored: ${count}`;
}

// Reset Function
function reset() {
  document.querySelectorAll(".square").forEach((square) => {
    square.classList.remove("saved");
    square.style.backgroundColor = "#fafafa";
  });
  resetCount();
}
// Reset Count function
function resetCount() {
  count = 0;
  squaresColored = [];
  displayCount();
  countSquares();
}

// Update counter when grid size changes
document.getElementById("small-button").addEventListener("click", resetCount);
document.getElementById("medium-button").addEventListener("click", resetCount);
document.getElementById("large-button").addEventListener("click", resetCount);

// Add event listener to reset button to reset the saved squares
document.getElementById("reset").addEventListener("click", reset);

// Update counter when reset button is pressed
document.addEventListener("DOMContentLoaded", countSquares);
document.getElementById("reset").addEventListener("click", resetCount);

// Button Effect on Active Click

// Make it responsive

// Add some gifs

// Maybe additional game mode where you need to trap a runaway square by enclosing around it
// can click a button that activates a function in which there is a runaway rogue square
// maybe 3 levels, each level resets with a congrats display when beat and starts at the next stage can use function grid size for this within the function and color change function as well
// // run away square gets faster (start from small grid to medium to large grid)
// function minigame() {
//   // // Listen for Mini Game Event
//   document.getElementById("minigame").addEventListener("click", function () {
//     removeExistingGrid();
//     createSmallGrid();
//     adjustSquare("small");
//     reset();
//     resetCount();
//     changeColor(currentColor);
//   });
// }

// Possibly a party button that has the squares light up in different colors with the bg change periodically or just
// a new background image for the party mode

// Current Bugs Discovered
