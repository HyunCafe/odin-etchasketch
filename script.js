"use strict";

const body = document.body;

// Create a new <div> element
const container = document.createElement("div");

// Add a class to the new <div> element
container.classList.add("Main_Container");

// Append the new <div> element to the container
body.appendChild(container);

// Things to Add:
// Hover save over squares saves picture

// Default size when page loads for grid
document.addEventListener("DOMContentLoaded", function () {
  createSmallGrid();
  adjustSquare("small");
});

// Grid Options: Small, Medium, Large
const smallButton = document.getElementById("small_button");
const mediumButton = document.getElementById("medium_button");
const largeButton = document.getElementById("large_button");

// Event Listener for Button Click that change on user choice / reset old grid
smallButton.addEventListener("click", function () {
  removeExistingGrid();
  createSmallGrid();
  adjustSquare("small");
});
mediumButton.addEventListener("click", function () {
  removeExistingGrid();
  createMediumGrid();
  adjustSquare("medium");
});
largeButton.addEventListener("click", function () {
  removeExistingGrid();
  createLargeGrid();
  adjustSquare("large");
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
      container.appendChild(squareDiv);
    }
  }
}

// Function for Medium 30x30
function createMediumGrid() {
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      container.appendChild(squareDiv);
    }
  }
}

// Function for Large 50x50
function createLargeGrid() {
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      container.appendChild(squareDiv);
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

  document.querySelectorAll(".square").forEach((square) => {
    square.style.width = squareWidth;
    square.style.height = squareHeight;
// Function Save over hover for the picture creation
    square.addEventListener("mouseover", function() {
      square.classList.add("saved");
    });
  });
}


// Reset Button

// Save button

// Different Color Modes: Green Gradient, Inverse Color, Rainbow Gradient

// Add a Dark Mode toggle switch, which enables Party mode = Blue/Purple Gradient

// Counter showing how many squares were highlighted

// Make it responsive

// Add some gifs

// Maybe additional game mode where you need to trap a runaway square by enclosing around it
