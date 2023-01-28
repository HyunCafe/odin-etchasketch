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

// Grid Options: Small, Medium, Large 

// Small 16x16
function createSmallGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      container.appendChild(squareDiv);
    }
  }
}

// Medium 30x30
function createMediumGrid() {
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      container.appendChild(squareDiv);
    }
  }
}

// Large 50x50 
function createLargeGrid() {
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      container.appendChild(squareDiv);
    }
  }
}

// Reset Button

// Save button

// Different Color Modes: Green Gradient, Inverse Color, Rainbow Gradient

// Add a Dark Mode toggle switch, which enables Party mode = Blue/Purple Gradient

// Counter showing how many squares were highlighted

// Make it responsive

// Add some gifs

// Maybe additional game mode where you need to trap a runaway square by enclosing around it
