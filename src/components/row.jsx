export default function Row({ guess = "", answer, rowIndex, activeRow }) {
  const evaluateTile = (char, index) => {
    if (!answer) return "";
    if (answer[index] === char)
      return "bg-green-600 text-white dark:bg-green-500";
    if (answer.includes(char))
      return "bg-yellow-500 text-white dark:bg-yellow-400";
    return "bg-gray-400 text-white dark:bg-gray-600";
  };

  const submitted = rowIndex < activeRow && guess.length === 5;

  return (
    <div className="flex gap-1 sm:gap-2">
      {[...Array(5)].map((_, i) => {
        const letter = guess[i] ?? "";

        const baseTile =
          "w-12 h-12 sm:w-16 sm:h-16 grid place-items-center rounded-md uppercase " +
          "text-2xl sm:text-4xl font-semibold transition-all duration-300 border-2";

        const defaultTile =
          "border-gray-400 text-gray-700 dark:border-gray-600 dark:text-gray-200";

        const coloredTile = submitted ? evaluateTile(letter, i) : defaultTile;

        return (
          <div
            key={i}
            className={`${baseTile} ${coloredTile} ${
              submitted ? "animate-flip" : letter ? "tile-bounce" : ""
            }`}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
}
