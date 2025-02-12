let gridSize = 21; // Default grid size
const grid = document.getElementById('grid');
const resetButton = document.getElementById('resetButton');
const updateGridButton = document.getElementById('updateGridButton');
const gridSizeInput = document.getElementById('gridSize');

// Create the grid
function createGrid() {
  grid.innerHTML = ''; // Clear existing grid
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 20px)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    // Add corner squares automatically
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;
    if (
      (row < 7 && col < 7) || // Top-left corner
      (row < 7 && col >= gridSize - 7) || // Top-right corner
      (row >= gridSize - 7 && col < 7) // Bottom-left corner
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
