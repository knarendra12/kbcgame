import React from "react";

const GameScreen = ({ players, currentQuestion, answers }) => {
  return (
    <div>
      <h2>Current Question</h2>
      <p>{currentQuestion.question}</p>
      <ul>
        {Object.keys(currentQuestion.options).map((key) => (
          <li key={key}>
            {key}: {currentQuestion.options[key]}
          </li>
        ))}
      </ul>

      <h3>Players</h3>
      <ul>
        {players.map((player) => (
          <li key={player.name}>
            {player.name} - {answers[player.name] || "No answer yet"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameScreen;
