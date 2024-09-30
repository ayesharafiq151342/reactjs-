import React, { useState } from "react";

function Tictac() {
  const [first, setFirst] = useState(Array(9).fill(null)); // State for the board
  const [current, setCurrent] = useState("X"); // State for the current player
  const [winner, setWinner] = useState(null); // State for the winner

  // Winning combinations (rows, columns, diagonals)
  const winningCombinations = [
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Left diagonal
    [2, 4, 6], // Right diagonal
  ];

  // Function to check for a winner
  function checkWinner(board) {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;

      // If the values at the three positions are equal and not null, we have a winner
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return "X" or "O"
      }
    }
    return null;
  }

  function handler(e) {
    const id = Number(e.target.id);

    // If the cell is already filled or there's already a winner, return early
    if (first[id] || winner) {
      return;
    }

    // Copy the current board state
    const newBoard = [...first];

    // Set the current player (X or O) in the clicked cell
    newBoard[id] = current;

    // Update the board with the new state
    setFirst(newBoard);

    // Check for a winner
    const gameWinner = checkWinner(newBoard);

    if (gameWinner) {
      setWinner(gameWinner); // Update winner state
    } else {
      // Switch to the other player
      setCurrent(current === "X" ? "O" : "X");
    }
  }

  // Function to restart the game
  function restartGame() {
    setFirst(Array(9).fill(null)); // Reset the board
    setCurrent("X"); // Reset current player to "X"
    setWinner(null); // Clear the winner
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Tic-Tac-Toe</h1>

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-4 p-6 bg-white shadow-lg rounded-lg">
        {first.map((value, index) => (
          <div
            key={index}
            id={index}
            onClick={handler}
            className={`border-4 border-gray-400 h-24 w-24 flex items-center justify-center text-6xl font-extrabold 
                        cursor-pointer hover:bg-blue-100 transition duration-200 ease-in-out 
                        ${
                          value === "X"
                            ? "text-blue-500"
                            : value === "O"
                            ? "text-red-500"
                            : "text-gray-800"
                        }`}
          >
            {value}
          </div>
        ))}
      </div>

      {/* Display winner */}
      {winner ? (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg shadow-md text-2xl font-bold">
          🎉 Player {winner} wins!
        </div>
      ) : (
        <div className="mt-6 p-4 text-xl text-gray-600">
          Current Player:{" "}
          <span
            className={`font-bold ${
              current === "X" ? "text-blue-500" : "text-red-500"
            }`}
          >
            {current}
          </span>
        </div>
      )}

      {/* Restart Game Button */}
      <button
        onClick={restartGame}
        className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out shadow-md"
      >
        Restart Game
      </button>
    </div>
  );
}

export default Tictac;
