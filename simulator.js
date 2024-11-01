/*
Program to simulate sand falling through a grid of cells.
Used to be run on a div called "game" in the HTML file.
*/
let BOARD_ROWS = 20;
let BOARD_COLUMNS = 8;
let CELL_SIZE = 20;
let CELL_BORDER_SIZE = 1;

function run() {
    let html = document.getElementById("game");

    let board = [];

    // Create a game board
    for (var i = 0; i < BOARD_ROWS; i++) {
        board[i] = [];

        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.padding = "0px";
        row.style.width = `${CELL_SIZE * BOARD_COLUMNS + (CELL_BORDER_SIZE * BOARD_COLUMNS)}px`;
        row.style.margin = "0px";
        row.style.backgroundColor = "blue";

        for (var j = 0; j < BOARD_COLUMNS; j++) {
            board[i][j] = 0;
        
            let cell = document.createElement("div");
            cell.style.border = `${CELL_BORDER_SIZE}px solid black`;
            cell.style.width = `${CELL_SIZE}px`;
            cell.style.height = `${CELL_SIZE}px`;
            cell.style.display = "inline-block";
            cell.style.padding = "0px";
            cell.style.margin = "0px";
            cell.style.backgroundColor = "red";

            // Append cell to the game div
            row.appendChild(cell);
        }
        html.appendChild(row);
    }
}

run();