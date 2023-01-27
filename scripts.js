const body = document.body

// Step 2: Create a new <div> element
const container = document.createElement('div');

// Step 3: Add a class to the new <div> element
container.classList.add('Main_Container');

// Step 4: Create the 16x16 grid of square divs and append to container
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        container.appendChild(squareDiv);
    }
}

// Step 5: Append the new <div> element to the container
body.appendChild(container);