const gridSize = 25; // Fixed grid size (version 2)
const grid = document.getElementById('grid');
const resetButton = document.getElementById('resetButton');

// Create the grid
function createGrid() {
  grid.innerHTML = ''; // Clear existing grid
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 20px)`; // Set grid columns

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    const row = Math.floor(i / gridSize);
    const col = i % gridSize;

    // Add Position Detection Patterns (corner squares)
    if (
      (row < 7 && col < 7) || // Top-left corner
      (row < 7 && col >= gridSize - 7) || // Top-right corner
      (row >= gridSize - 7 && col < 7) // Bottom-left corner
    ) {
      if (
        (row === 0 || row === 6 || col === 0 || col === 6) || // Outer border
        (row >= 2 && row <= 4 && col >= 2 && col <= 4) // Inner square
      ) {
        cell.classList.add('black');
      }
    }

    // Add Timing Patterns (alternating black and white modules)
    if (
      (row === 6 && col >= 7 && col < gridSize - 7) || // Horizontal timing pattern
      (col === 6 && row >= 7 && row < gridSize - 7) // Vertical timing pattern
    ) {
      if ((row + col) % 2 === 0) {
        cell.classList.add('black');
      }
    }

    // Add Alignment Pattern (fixed at position 18, 18)
    if (
      (row >= 16 && row <= 20 && col >= 16 && col <= 20) && // 5x5 square
      !(row >= 17 && row <= 19 && col >= 17 && col <= 19) // Exclude inner 3x3 square
    ) {
      cell.classList.add('black');
    }

    cell.addEventListener('click', () => {
      cell.classList.toggle('black');
    });
    grid.appendChild(cell);
  }
}

// Reset the grid
resetButton.addEventListener('click', () => {
  createGrid();
});

// Initialize the grid
createGrid();
