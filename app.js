let buttonElements = document.querySelectorAll(".button-option");
let popupElement = document.querySelector(".popup");
let newGameButton = document.getElementById("new-game");
let restartButton = document.getElementById("restart");
let messageElement = document.getElementById("message");

// Winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

// Player 'X' plays first
let isXTurn = true;
let moveCount = 0;
let player1Name = prompt("Enter player 1 Name and your Value is X");
let player2Name = prompt("Enter player 2 Name and your Value is 0");

const disableButtons = () => {
  buttonElements.forEach((element) => (element.disabled = true));

  popupElement.classList.remove("hide");
};

const enableButtons = () => {
  buttonElements.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });

  popupElement.classList.add("hide");
};

const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    messageElement.innerHTML = "&#x1F389; <br> " + player1Name.toUpperCase() + " Wins";
  } else {
    messageElement.innerHTML = "&#x1F389; <br> " + player2Name.toUpperCase() + " Wins";
  }
};

const drawFunction = () => {
  disableButtons();
  messageElement.innerHTML = "&#x1F389; <br> It's a Draw";
};

newGameButton.addEventListener("click", () => {
  moveCount = 0;
  enableButtons();
});

restartButton.addEventListener("click", () => {
  moveCount = 0;
  enableButtons();
});

const winChecker = () => {
  for (let pattern of winningPattern) {
    let [element1, element2, element3] = [
      buttonElements[pattern[0]].innerText,
      buttonElements[pattern[1]].innerText,
      buttonElements[pattern[2]].innerText,
    ];

    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};

buttonElements.forEach((element) => {
  element.addEventListener("click", () => {
    if (isXTurn) {
      isXTurn = false;
      element.innerText = "X";
      element.disabled = true;
    } else {
      isXTurn = true;
      element.innerText = "O";
      element.disabled = true;
    }

    moveCount += 1;
    if (moveCount == 9) {
      drawFunction();
    }

    winChecker();
  });
});

window.onload = enableButtons;
