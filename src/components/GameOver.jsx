export default function GameOver({ result, solution }) {
  return (
    <div className="absolute w-[22rem] left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 rounded-md overflow-hidden bg-white dark:bg-gray-800 shadow-lg border border-gray-300 dark:border-gray-700 p-6 text-center animate-fade">

      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {result === "win" ? "You Won! 🎉" : "Better Luck Next Time"}
      </h1>

      <p className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300">
        The word was: <span className="font-bold text-gray-900 dark:text-gray-100">{solution}</span>
      </p>

      <p className="text-sm text-gray-500 mt-6">
        Press <span className="font-bold">Enter</span> to play again
      </p>

    </div>
  );
}
