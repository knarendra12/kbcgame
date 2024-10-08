import React, { useState } from "react";
import GameScreen from "./components/GameScreen";
import PlayerScreen from "./components/PlayerScreen";
import QRCodeComponent from "./components/QRCodeComponent";
import './App.css';

const questions = [
  {
    question: "Who developed the theory of relativity?",
    options: { A: "Newton", B: "Einstein", C: "Tesla", D: "Bohr" },
    correctAnswer: "B",
  },
  {
    question: "What is the capital of France?",
    options: { A: "Berlin", B: "Madrid", C: "Paris", D: "Rome" },
    correctAnswer: "C",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: { A: "Venus", B: "Saturn", C: "Mars", D: "Jupiter" },
    correctAnswer: "C",
  },
];

function App() {
  const [players, setPlayers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const currentQuestion = questions[currentQuestionIndex];

  const handleJoin = (playerName) => {
    setPlayers([...players, { name: playerName, score: 0 }]);
  };

  const handleAnswerSubmit = (playerName, answer) => {
    const correct = currentQuestion.correctAnswer === answer;
    if (correct) {
      setPlayers((prevPlayers) =>
        prevPlayers.map((p) =>
          p.name === playerName ? { ...p, score: p.score + 1 } : p
        )
      );
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
      }, 1000);
    }

    setAnswers({ ...answers, [playerName]: correct ? "Correct" : "Wrong" });
  };

  return (
    <div className="App">
      <h1>Quiz Game</h1>
      <QRCodeComponent />
      <GameScreen
        players={players}
        currentQuestion={currentQuestion}
        answers={answers}
      />
      <PlayerScreen onJoin={handleJoin} onAnswer={handleAnswerSubmit} />
    </div>
  );
}

export default App;
