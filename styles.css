let gridSize = 21; // Default grid size
const grid = document.getElementById('grid');
const resetButton = document.getElementById('resetButton');
const updateGridButton = document.getElementById('updateGridButton');
const gridSizeInput = document.getElementById('gridSize');

// Function to calculate alignment pattern positions
function getAlignmentPatternPositions(version) {
  if (version < 2) return []; // No alignment patterns for version 1
  const positions = [6]; // Always include position 6
  const numAlignments = Math.floor(version / 7) + 1;
  const step = Math.floor((gridSize - 13) / (numAlignments - 1));
  for (let i = 1; i < numAlignments; i++) {
    positions.push(6 + i * step);
  }
  return positions;
}

// Create the grid
function createGrid() {
  grid.innerHTML = ''; // Clear existing grid
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 20px)`;

  const version = Math.floor((gridSize - 21) / 4) + 1;
  const alignmentPositions = getAlignmentPatternPositions(version);

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

    // Add Alignment Patterns
    alignmentPositions.forEach((pos) => {
      if (
        (row >= pos - 2 && row <= pos + 2 && col >= pos - 2 && col <= pos + 2) && // 5x5 square
        !(row >= pos - 1 && row <= pos + 1 && col >= pos - 1 && col <= pos + 1) // Exclude inner 3x3 square
      ) {
        cell.classList.add('black');
      }
    });

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

// Update grid size
updateGridButton.addEventListener('click', () => {
  const newSize = parseInt(gridSizeInput.value);
  if (newSize >= 21 && newSize <= 40) {
    gridSize = newSize;
    createGrid();
  } else {
    alert('Grid size must be between 21 and 40.');
  }
});

// Initialize the grid
createGrid();
