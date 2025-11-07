import { useState, useEffect } from "react";
import Board from "../components/Board";
import Keyboard from "../components/keyboard";
import Navbar from "../components/NavBar";
import words from "../words.json";
import GameOver from "../components/GameOver";

export default function GameLayout() {
  const [solution, setSolution] = useState("");
  const [attempts, setAttempts] = useState(Array(5).fill(""));
  const [activeRow, setActiveRow] = useState(0);
  const [wordNotFound, setWordNotFound] = useState(false);
  const [gameOver, setGameOver] = useState({ state: false, result: "" });
  const [restartTrigger, setRestartTrigger] = useState(false);
  const [keyStates, setKeyStates] = useState({});

  const keyLayout = [
    "Q","W","E","R","T","Y","U","I","O","P",
    "A","S","D","F","G","H","J","K","L",
    "Delete","Z","X","C","V","B","N","M","Enter"
  ];

  const randomWord = () =>
    words[Math.floor(Math.random() * words.length)].toUpperCase();

  const isValidWord = (word) => words.includes(word.toLowerCase());

  const resetGame = () => {
    setAttempts(Array(5).fill(""));
    setActiveRow(0);
    setKeyStates({});
    setGameOver({ state: false, result: "" });
    setRestartTrigger((prev) => !prev);
  };

  const updateKeyColors = (word) => {
    setKeyStates((prev) => {
      const updated = { ...prev };
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (solution[i] === letter) updated[letter] = "correct";
        else if (solution.includes(letter)) {
          if (updated[letter] !== "correct") updated[letter] = "present";
        } else {
          updated[letter] = "absent";
        }
      }
      return updated;
    });
  };

  const handleEnter = () => {
    const word = attempts[activeRow];
    if (word.length < 5) return;

    if (!isValidWord(word)) {
      setWordNotFound(true);
      if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
      setTimeout(() => setWordNotFound(false), 500);
      return;
    }

    updateKeyColors(word);

    if (word === solution) {
      setGameOver({ state: true, result: "win" });
      return;
    }

    if (activeRow === 4) {
      setGameOver({ state: true, result: "lose" });
      return;
    }

    setActiveRow((r) => r + 1);
  };

  const handleInput = (key) => {
    if (navigator.vibrate) navigator.vibrate(35);
    if (gameOver.state) return resetGame();
    if (key === "Enter") return handleEnter();
    if (key === "Delete") {
      setAttempts((prev) =>
        prev.map((row, i) => (i === activeRow ? row.slice(0, -1) : row))
      );
      return;
    }
    if (/^[A-Z]$/.test(key) && attempts[activeRow].length < 5) {
      setAttempts((prev) =>
        prev.map((row, i) => (i === activeRow ? row + key : row))
      );
    }
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Enter") return handleInput("Enter");
      if (e.key === "Backspace") return handleInput("Delete");
      const letter = e.key.toUpperCase();
      if (/^[A-Z]$/.test(letter)) handleInput(letter);
    };

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [attempts, activeRow, gameOver]);

  useEffect(() => {
    setSolution(randomWord());
  }, [restartTrigger]);

  return (
    <section className="w-full max-w-[40rem] min-h-screen px-4 flex flex-col gap-12 items-center justify-center">
      <Navbar resetGame={resetGame} />

      <Board 
        guess={attempts}
        solution={solution}
        currentGuess={activeRow}
        wordNotFound={wordNotFound}
      />

      <Keyboard 
        layout={keyLayout}
        keyStates={keyStates}
        onPress={handleInput}
      />

      {gameOver.state && (
        <GameOver result={gameOver.result} solution={solution} />
      )}
    </section>
  );
}
