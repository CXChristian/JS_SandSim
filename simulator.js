/*
Program to simulate sand falling through a grid of cells.
Used to be run on a div called "game" in the HTML file.
*/
const BOARD_ROWS = 20;
const BOARD_COLUMNS = 8;
const CELL_SIZE = 20;
const CELL_BORDER_SIZE = 1;

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
            cell.style.border = `${CELL_BORDER_SIZE}px solid black`;
            cell.style.width = `${CELL_SIZE}px`;
            cell.style.height = `${CELL_SIZE}px`;
            cell.style.display = "inline-block";


            // Append cell to the game div
            row.appendChild(cell);
        }
        html.appendChild(row);
    }
}

run();