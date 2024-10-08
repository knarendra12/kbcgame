import React, { useState } from "react";

const PlayerScreen = ({ onJoin, onAnswer }) => {
  const [playerName, setPlayerName] = useState("");
  const [joined, setJoined] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleJoin = () => {
    if (playerName.trim() !== "") {
      onJoin(playerName);
      setJoined(true);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      onAnswer(playerName, selectedAnswer);
      setSelectedAnswer("");
    }
  };

  if (!joined) {
    return (
      <div>
        <h2>Join the Game</h2>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={handleJoin}>Join</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Answer the Question</h2>
      <select
        value={selectedAnswer}
        onChange={(e) => setSelectedAnswer(e.target.value)}
      >
        <option value="">Select your answer</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
      <button onClick={handleSubmitAnswer}>Submit Answer</button>
    </div>
  );
};

export default PlayerScreen;
