const tiles = Array.from(document.querySelectorAll("div.tile"));
const playerDisplay = document.querySelector("span.display-player");
const startButton = document.querySelector("button.start");
const resetButton = document.querySelector("button.reset");
const announcer = document.querySelector("h1.announcer");
let check = true;
let newGame = true;
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = false;

const PLAYERX_WON = "PLAYERX_WON";
const PLAYERO_WON = "PLAYERO_WON";
const TIE = "TIE";
const PLAYING = "PLAYING";
const BEGIN = "BEGIN";

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const isValidAction = (tile) => {
  if (tile.innerText === "X" || tile.innerText === "O") {
    return false;
  }
  return true;
};

const updateBoard = (index) => {
  board[index] = currentPlayer;
};

const changePlayer = () => {
  playerDisplay.classList.remove(`player${currentPlayer}`);
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  playerDisplay.innerText = currentPlayer;
  playerDisplay.classList.add(`player${currentPlayer}`);
};

const announce = (type) => {
  switch (type) {
    case BEGIN:
      announcer.innerHTML = "Bấm bắt đầu để chơi";
      break;
    case PLAYING:
      announcer.innerHTML = "Hãy chiến đấu hết mình!";
      break;
    case PLAYERO_WON:
      announcer.innerHTML =
        'Người chơi <span class="playerO">O</span> đã chiến thắng!';
      break;
    case PLAYERX_WON:
      announcer.innerHTML =
        'Người chơi <span class="playerX">X</span> đã chiến thắng!';
      break;
    case TIE:
      announcer.innerText = "Chưa có người chiến thắng!";
  }
  announcer.classList.remove("hide");
};

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      announce(PLAYING);
      isGameActive = true;
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      const element1 = document.getElementById(winCondition[0] + 1);
      element1.style.backgroundColor = "green";
      const element2 = document.getElementById(winCondition[1] + 1);
      element2.style.backgroundColor = "green";
      const element3 = document.getElementById(winCondition[2] + 1);
      element3.style.backgroundColor = "green";
      break;
    }
  }

  if (roundWon) {
    announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
    isGameActive = false;
    return;
  }

  if (!board.includes("")) {
    announce(TIE);
    isGameActive = false;
  }
}

const userAction = (tile, index) => {
  if (isValidAction(tile) && isGameActive) {
    tile.innerText = currentPlayer;
    tile.classList.add(`player${currentPlayer}`);
    updateBoard(index);
    handleResultValidation();
    changePlayer();
  }
};

tiles.forEach((tile, index) => {
  tile.addEventListener("click", () => userAction(tile, index));
});

startButton.onclick = () => {
  if (!isGameActive) {
    if (check) {
      announce(PLAYING);
      isGameActive = true;
      newGame = false;
    } else {
      announce(BEGIN);
      isGameActive = false;

      if (currentPlayer === "O") {
        changePlayer();
      }
      board = ["", "", "", "", "", "", "", "", ""];
      tiles.forEach((tile) => {
        tile.innerText = "";
        tile.style.removeProperty("background-color");
        tile.classList.remove("playerX");
        tile.classList.remove("playerO");
      });

      newGame = true;
    }
    check = !check;
  }
};

resetButton.onclick = () => {
  if (!isGameActive && !newGame) {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    announce(PLAYING);

    tiles.forEach((tile) => {
      tile.innerText = "";
      tile.style.removeProperty("background-color");
      tile.classList.remove("playerX");
      tile.classList.remove("playerO");
    });
  }
};
