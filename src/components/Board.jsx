import Row from "./row";

export default function Board({ guess, solution, currentGuess, wordNotFound }) {
  return (
    <div className={`relative flex flex-col gap-2 ${wordNotFound ? "animate-shake" : ""}`}>
      {guess.map((c, i) => (
        <Row
          key={i}
          guess={c ?? ""}          // instead of value
          answer={solution}         // instead of solution
          activeRow={currentGuess}  // instead of currentGuess
          rowIndex={i}              // instead of lineIndex
        />
      ))}

      {wordNotFound && (
        <div className="absolute inset-0 grid place-items-center">
          <div className="bg-white dark:bg-gray-800 border border-red-400 px-10 py-4 rounded-md shadow-md animate-fade">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Word Not Found
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
