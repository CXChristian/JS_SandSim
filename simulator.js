/*
Program to simulate sand falling through a grid of cells.
Used to be run on a div called "game" in the HTML file.
*/
const BOARD_ROWS = 20;
const BOARD_COLUMNS = 8;
const CELL_SIZE = 20;
const CELL_BORDER_SIZE = 1;
const FRAME_DELAY = 30;

function run() {
    const html = document.getElementById("game");
    let board = [];

    // Create a game board
    for (var i = 0; i < BOARD_ROWS; i++) {
        board[i] = [];

        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.width = `${CELL_SIZE * BOARD_COLUMNS + (CELL_BORDER_SIZE * BOARD_COLUMNS)}px`;

        for (var j = 0; j < BOARD_COLUMNS; j++) {
            board[i][j] = 0;
        
            let cell = document.createElement("div");
            cell.id = `cell-${i}-${j}`;
            cell.style.border = `${CELL_BORDER_SIZE}px solid black`;
            cell.style.width = `${CELL_SIZE}px`;
            cell.style.height = `${CELL_SIZE}px`;
            cell.style.display = "inline-block";
            cell.dataset.row = i;
            cell.dataset.column = j;
            cell.onclick = function() {
                let row = parseInt(this.dataset.row);
                let column = parseInt(this.dataset.column);
                board[row][column] = 1;
                cell.style.backgroundColor = "black";
            }

            row.appendChild(cell);
        }
        html.appendChild(row);
    }

    // Run the simulation
    requestAnimationFrame(() => renderFrame(board));
}

function renderFrame(board) {
    for (var i = BOARD_ROWS - 1; i>= 0; i--) {
        for (var j = BOARD_COLUMNS - 1; j>=0; j--) {
            if (board[i][j] == 1) {
                if (i + 1 < BOARD_ROWS && board[i + 1][j] == 0) {
                    console.log(`Moving cell ${i}-${j} to ${i + 1}-${j}`);
                    board[i][j] = 0;
                    board[i + 1][j] = 1;
                    
                    let cell = document.getElementById(`cell-${i}-${j}`);
                    let nextCell = document.getElementById(`cell-${i + 1}-${j}`);
                    if (cell) cell.style.backgroundColor = "white";
                    if (nextCell) nextCell.style.backgroundColor = "black";
                }
                
            }
        }
    }
    setTimeout(() => requestAnimationFrame(() => renderFrame(board)), FRAME_DELAY);
}

document.addEventListener("DOMContentLoaded", run);