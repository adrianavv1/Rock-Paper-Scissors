import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ["rock", "paper", "scissors"]

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    checkResult()
  }, [computerChoice, userChoice])

  const checkResult = () => {
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setResult("YOU WIN!")
        break;
      case "paperscissors":
      case "rockpaper":
        setResult("YOU LOSE!")
        break;
      case "rockrock":
      case "paper":
      case "scissorsscissors":
        setResult("ITS A DRAW")
        break;
    }
  };
  return (
    <div>
      <h1>user choice is:{userChoice}</h1>
      <h1>computer choice is:{computerChoice}</h1>
      {choices.map((choice, index) =>
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      )}
      <h1>{result}</h1>
    </div>
  )
};

export default App;
