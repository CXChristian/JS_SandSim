function run() {
    let boardSize = 0;
    let userInput = document.getElementById("size").value

    if (isNaN(userInput)){ // Not a number
        alert("Invalid input. Please enter a number.");
    }

    if (userInput > 0 && userInput <= 100) { // Valid input
        boardSize = userInput;

        let html = document.getElementById("startup");
        html.style.display = "none";

        buildGame(boardSize);

    } else { // Not between 1 and 100
        alert("Invalid input. Please enter a number between 1 and 100.");
    }
}

function buildGame(N) {
    console.log("Building game with size: " + N);
    let html = document.getElementById("game");
    let board = [];
    let cellSize = "20px";

    // Create a game board
    for (var i = 0; i < N; i++) {
        board[i] = [];
        let row = document.createElement("div");
        row.style.display = "compact";
        row.style.padding = "0px";
        row.style.margin = "0px";
        for (var j = 0; j < N; j++) {
            board[i][j] = 0;

            let cell = document.createElement("div");
            cell.style.border = "1px solid black";
            cell.style.width = cellSize;
            cell.style.height = cellSize;
            cell.style.display = "inline-block";
            cell.style.padding = "0px";
            cell.style.margin = "0px";

            // Append cell to the game div
            row.appendChild(cell);
        }
        html.appendChild(row);
    }
}

run();
