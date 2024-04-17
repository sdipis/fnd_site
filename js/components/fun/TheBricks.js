export default{
    name:'TheBricksComponent',
    template:`
    <div class="bricksContainer"></div>
    `,
    methods:{
        mounted() {
            this.adjustGridBasedOnScreen();
            window.addEventListener('resize', this.adjustGridBasedOnScreen);
          },
          beforeUnmount() {
            window.removeEventListener('resize', this.adjustGridBasedOnScreen);
          },
          methods: {
            getRandomColor() {
              const colors = ['yellow', 'blue', 'pink', 'green'];
              return colors[Math.floor(Math.random() * colors.length)];
            },
            getRandomName() {
              const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
              return names[Math.floor(Math.random() * names.length)];
            },
            getRandomQuote() {
              const quotes = ['Success is not final, failure is not fatal: It is the courage to continue that counts.', 'The only limit to our realization of tomorrow will be our doubts of today.', 'The only way to do great work is to love what you do.'];
              return quotes[Math.floor(Math.random() * quotes.length)];
            },
            createBrick() {
              const brick = document.createElement('div');
              brick.className = 'brick ' + this.getRandomColor();
              brick.textContent = this.getRandomName();
        
              // Additional properties
              brick.dataset.name = brick.textContent;
              brick.dataset.dateCreated = new Date().toLocaleDateString();
              brick.dataset.amountDonated = Math.floor(Math.random() * 1000); // Example random amount
              brick.dataset.quote = this.getRandomQuote();
        
              brick.addEventListener('click', () => this.openBrick(brick));
              return brick;
            },
            openBrick(brick) {
              const name = brick.dataset.name;
              const dateCreated = brick.dataset.dateCreated;
              const amountDonated = brick.dataset.amountDonated;
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
                <h3 style="color: ${brickFontColor};">Amount Donated: $${amountDonated}</h3>
                <p style="color: ${brickFontColor};">Date Created: ${dateCreated}</p>
                <p style="color: ${brickFontColor};">Quote: "${quote}"</p>
              `;
        
              // Style the div with the background color of the clicked brick
              brickInfoDiv.style.position = 'fixed';
              brickInfoDiv.style.top = '50%';
              brickInfoDiv.style.left = '50%';
              brickInfoDiv.style.transform = 'translate(-50%, -50%)';
              brickInfoDiv.style.background = brickColor;
              brickInfoDiv.style.padding = '20px';
              brickInfoDiv.style.border = '2px solid #000';
              brickInfoDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        
              // Add an event listener to close the modal when clicked
              brickInfoDiv.addEventListener('click', () => {
                brickInfoDiv.remove(); // Remove the modal from the DOM
              });
        
              // Append the div to the body
              document.body.appendChild(brickInfoDiv);
            },
            createRow(cols, isOffset) {
              const row = document.createElement('div');
              row.style.display = 'flex';
        
              for (let i = 0; i < cols; i++) {
                const brick = this.createBrick();
                row.appendChild(brick);
              }
        
              if (isOffset) {
                row.style.marginLeft = '50px'; // Offset every other row
              }
        
              return row;
            },
            createGrid(rows, cols) {
              const grid = document.createElement('div');
              grid.style.display = 'flex';
              grid.style.flexDirection = 'column';
        
              for (let i = 0; i < rows; i++) {
                const isOffset = i % 2 !== 0;
                const row = this.createRow(cols, isOffset);
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
            },
            adjustGridBasedOnScreen() {
              const screenWidth = window.innerWidth;
        
              if (screenWidth <= 768) {
                this.createGrid(28, 6); // Adjust rows and cols for smaller screens
              } else {
                this.createGrid(14, 12); // Default rows and cols
              }
            }
          }
    }
}