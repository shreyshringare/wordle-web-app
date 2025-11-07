function KeyButton({ label, state, wide, onPress }) {
  const colorStates = {
    correct: "bg-green-600 text-white dark:bg-green-500",
    present: "bg-yellow-500 text-white dark:bg-yellow-400",
    absent: "bg-gray-500 text-white dark:bg-gray-400",
    idle: "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  };

  const handleClick = (e) => {
    if (navigator.vibrate) navigator.vibrate(25);
    const button = e.currentTarget;
    button.classList.remove("ripple-animate");
    void button.offsetWidth;
    button.classList.add("ripple-animate");
    onPress(label);
  };

  return (
    <button
      onClick={handleClick}
      className={`key-ripple h-12 sm:h-14 rounded-md font-semibold grid place-items-center 
                  transition-colors duration-200 hover:brightness-110
                  ${wide ? "px-6 sm:px-8" : "px-3 sm:px-4 flex-1"} 
                  ${colorStates[state] || colorStates.idle}`}
    >
      {label}
    </button>
  );
}

export default function Keyboard({ layout, keyStates, onPress }) {
  const rows = [
    layout.slice(0, 10),
    layout.slice(10, 19),
    layout.slice(19),
  ];

  return (
    <div className="flex flex-col gap-1 sm:gap-2 w-full items-center scale-100 sm:scale-110 md:scale-125">
      {rows.map((row, rIndex) => (
        <div key={rIndex} className="flex gap-1 sm:gap-2 w-full justify-center">
          {row.map((key) => (
            <KeyButton
              key={key}
              label={key}
              wide={key.length > 1}
              state={keyStates[key] || "idle"}
              onPress={onPress}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
