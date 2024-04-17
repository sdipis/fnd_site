function getRandomColor() {
  const colors = ['yellow', 'blue', 'pink', 'green'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomName() {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomQuote() {
  const quotes = ['Success is not final, failure is not fatal: It is the courage to continue that counts.', 'The only limit to our realization of tomorrow will be our doubts of today.', 'The only way to do great work is to love what you do.'];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Create a single modal element
const brickInfoModal = document.createElement('div');
brickInfoModal.className = 'brick-info-modal';
document.body.appendChild(brickInfoModal);

function createBrick() {
  const brick = document.createElement('div');
  brick.className = 'brick ' + getRandomColor();
  brick.textContent = getRandomName();

  // Additional properties
  brick.dataset.name = brick.textContent;
  brick.dataset.dateCreated = new Date().toLocaleDateString();
  // brick.dataset.amountDonated = Math.floor(Math.random() * 1000); // Example random amount
  brick.dataset.quote = getRandomQuote();

  brick.addEventListener('click', () => openBrick(brick));
  return brick;
}

function openBrick(brick) {
  
  const name = brick.dataset.name;
  const dateCreated = brick.dataset.dateCreated;
  // const amountDonated = brick.dataset.amountDonated;
  const quote = brick.dataset.quote;

  // Get the computed background color and font color of the clicked brick
  const computedStyle = window.getComputedStyle(brick);
  const brickColor = computedStyle.backgroundColor;
  const brickFontColor = computedStyle.color;

  // Create a div to display brick information
  const brickInfoDiv = document.createElement('div');
  brickInfoDiv.className = 'brick-info';
  brickInfoDiv.innerHTML = `
      <h2 style="color: ${brickFontColor};"><strong>${name}'s brick</strong></h2>
      <p style="color: ${brickFontColor};">Date Created: ${dateCreated}</p>
      <p style="color: ${brickFontColor};">Quote: "${quote}"</p>
  `;

  // Style the div with the background color of the clicked brick
  brickInfoDiv.style.position = 'fixed';
  brickInfoDiv.style.top = '50%';
  brickInfoDiv.style.left = '50%';
  brickInfoDiv.style.transform = 'translate(-50%, -50%)';
  brickInfoDiv.style.background = '#fff';
  brickInfoDiv.style.borderLeft = `10px solid ${brickColor}`;
  brickInfoDiv.style.padding = '40px';
  brickInfoDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  
  // Add an event listener to close the modal when clicked
  brickInfoDiv.addEventListener('click', () => {
      brickInfoDiv.remove(); // Remove the modal from the DOM
  });

  // Append the div to the body
  document.body.appendChild(brickInfoDiv);
}


function createRow(cols, isOffset) {
  const row = document.createElement('div');
  row.style.display = 'flex';

  for (let i = 0; i < cols; i++) {
    const brick = createBrick();
    row.appendChild(brick);
  }

  if (isOffset) {
    row.style.marginLeft = '50px'; // Offset every other row
  }

  return row;
}

function createGrid(rows, cols) {
  const grid = document.createElement('div');
  grid.style.display = 'flex';
  grid.style.flexDirection = 'column';

  for (let i = 0; i < rows; i++) {
    const isOffset = i % 2 !== 0;
    const row = createRow(cols, isOffset);
    grid.appendChild(row);
  }

  document.querySelector('.bricksContainer').appendChild(grid);

  // Function to gradually reveal bricks
  function revealBricks() {
    const bricks = document.querySelectorAll('.brick');
    let index = 0;

    function revealNextBrick() {
      if (index < bricks.length) {
        bricks[index].style.opacity = 1;
        index++;
        setTimeout(revealNextBrick, 10); // Adjust the delay as needed
      }
    }

    revealNextBrick();
  }

  revealBricks();
}
// Function to create grid based on screen size
function adjustGridBasedOnScreen() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    createGrid(28, 6); // Adjust rows and cols for smaller screens
  } else {
    createGrid(14, 12); // Default rows and cols
  }
}

// Call the function initially and add a resize event listener
adjustGridBasedOnScreen();
window.addEventListener('resize', adjustGridBasedOnScreen);


//crane

const arm = document.getElementById('arm');
const brick = document.getElementById('brick');

const animationDuration = 4000; // in milliseconds
const oscillationDistance = 100; // in pixels

function animateCrane() {
  const startTime = Date.now();

  function update() {
    const elapsedTime = Date.now() - startTime;
    const angle = (elapsedTime / animationDuration) * 2 * Math.PI;
    const xOffset = Math.sin(angle) * oscillationDistance;

    arm.style.transform = `translateX(${xOffset}px)`;
    brick.style.transform = `translateX(${xOffset}px)`;
    
    requestAnimationFrame(update);
  }

  update();
}

animateCrane();