import { useState } from "react";

const App = () => {
  const [userChoice, setuserChoice] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value) => {
    setuserChoice(value);
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floorMath.random() * choices.length]
  }
  return (
    <div>
      <h1>user choice is:{userChoice}</h1>
      <h1>computer choice is:</h1>
      {/* <button onClick={() => handleClick('rock') }>Rock</button>
      <button onClick={() => handleClick('paper')}>Paper</button>
      <button onClick={() => handleClick('scissors')}>Scissor</button> */}

      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
};

export default App;
