    // Wait for the DOM to fully load before running the script
    document.addEventListener("DOMContentLoaded", function() {
        // Get references to key DOM elements
        const gridContainer = document.querySelector('.hex-grid');
        const playerTurnDisplay = document.getElementById('player-turn');
        const restartButton = document.getElementById('restart-button');
        const playerStatsDisplay = document.getElementById('player-stats');
        //game state variables
        let currentPlayer = 1; // Player 1 starts
        let player1Count = 0;
        let player2Count = 0;
        let gameOver = false;
        let timeoutId;
        

        // Function to update player stats display
    function updatePlayerStats() {
        playerStatsDisplay.textContent = `Player 1: ${player1Count} | Player 2: ${player2Count}`;
    }

        // Function to restart the game
    function restartGame() {
        clearTimeout(timeoutId); // Clear the timer
        // Reset player state variables
        playerTurnDisplay.textContent = "Player 1's Turn";
        currentPlayer = 1;
        player1Count = 0;
        player2Count = 0;
        gameOver = false;
        updatePlayerStats();

        // Remove selected and player classes from all hexagons
        const hexagons = document.querySelectorAll('.hex');
        hexagons.forEach(hex => {
            hex.classList.remove('selected', 'player1', 'player2', 'losing');
        // Remove any image element appended to hexagons
        const img = hex.querySelector('img');
        if (img) {
            img.remove();
        }
    });
        // Start the timer again
    startTimer();

    }
    
        // Function to handle game over
    function gameOverHandler() {
        gameOver = true; // Mark game as over

        // Determine the game over message and color based on player counts
        if (player1Count > player2Count, player1Count > 1) {
            playerTurnDisplay.textContent = "Game Over! The Monster Got You! Player 1 Wins!"; 
            playerTurnDisplay.style.color = "rgb(91, 91, 233)"; // Player 1 color
            //When the player 1 count is more that means the last play was by player 1, so Player 1 wins
        } else if (player2Count === player1Count, player1Count > 1) {
            playerTurnDisplay.textContent = "Game Over! The Monster Got You! Player 2 Wins!";
            playerTurnDisplay.style.color = "rgb(0, 255, 76)"; // Player 2 color
            //When the player 2 count is equals to player 1 that means the last play was by player 2, so Player 2 wins
        } else if (player1Count === 0 && player2Count === 0) {
            playerTurnDisplay.textContent = "Game Over! No moves made. Restart the game";
            playerTurnDisplay.style.color = "rgb(255, 0, 0)"; //No moves
        } else {
            playerTurnDisplay.textContent = "Game Over! Time's up! The Monster Wins!";
            playerTurnDisplay.style.color = "rgb(255, 0, 0)"; // Monster color
            
        }
        
        // Insert a losing image in the losing hexagon, if it exists
    const losingHexagon = document.querySelector('.hex.losing .middle');
    if (losingHexagon) { // Check if losingHexagon exists
        // Insert image into the losing hexagon
        const img = document.createElement('img');
        img.src = 'https://cdn-icons-png.flaticon.com/128/1236/1236147.png'; 
        img.alt = 'Losing Image';
        img.style.width = '50px'; 
        img.style.height = '50px'; 
        losingHexagon.appendChild(img);
    }
}

    resetTimer(); // Reset the timer after each successful click

// Function to start timer
function startTimer() {
    timeoutId = setTimeout(function() {
        if (!gameOver) {
            gameOverHandler();
        }
    }, 5000); // 5 seconds timer
}

// Function to reset timer the timer
function resetTimer() {
    clearTimeout(timeoutId); // Clear the existing timer
    if (!gameOver) {
        startTimer(); // Restart the timer
    }
}

        // Generate the hexagonal grid dynamically
        for (let i = 0; i < 10; i++) {
            const row = document.createElement('div');
            row.classList.add('hex-row');
            if (i % 2 === 0) {
                row.classList.add('even');
            }
            for (let j = 0; j < 10; j++) {
                const hex = document.createElement('div');
                hex.classList.add('hex');
                hex.addEventListener('click', function() {
                    resetTimer() // Reset the timer on click
                    if (gameOver) return; // Ignore clicks if game over

                    //Not Allowing the player to deselect any of the selected hex
                if (!this.classList.contains('selected')) {
                    this.classList.add('selected');


                    if (Math.random() < 0.05) { // 5% chance of losing hexagon
                        this.classList.add('losing'); // Add losing class to the hexagon 
                        gameOverHandler();
                        return;
                    }

                    // Handle player move
                    if (currentPlayer === 1) {
                        this.classList.add('player1');
                        player1Count++;
                        currentPlayer = 2;
                        playerTurnDisplay.textContent = "Player 2's Turn"; // Update player's turn display
                        playerTurnDisplay.style.color = "rgb(0, 255, 76)"; // Player 2 color
                        } else {
                            this.classList.add('player2');
                            player2Count++;
                            currentPlayer = 1;
                            playerTurnDisplay.textContent = "Player 1's Turn"; // Update player's turn display
                            playerTurnDisplay.style.color = "rgb(91, 91, 233)"; // Player 1 color
                            updatePlayerStats(); // Update stats display
                        }
                    }
                });

                // Structure of the hexagon
                hex.innerHTML = `
                    <div class="top"></div>
                    <div class="middle"></div>
                    <div class="bottom"></div>
                `;
                row.appendChild(hex); // Add hexagon to the row
            }
            gridContainer.appendChild(row); // Add row to the grid
        }

        // Add event listener to restart button
    restartButton.addEventListener('click', restartGame);
       
    // Start timer when the page loads
    startTimer();

    });

