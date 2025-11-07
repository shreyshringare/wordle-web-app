function KeyButton({ label, state, wide, onPress }) {
  const colorStates = {
    correct: "bg-green-600 text-white dark:bg-green-500",
    present: "bg-yellow-500 text-white dark:bg-yellow-400",
    absent: "bg-gray-500 text-white dark:bg-gray-400",
    idle: "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  };

  const handleClick = (e) => {
    if (navigator.vibrate) navigator.vibrate(25);

    const btn = e.currentTarget;
    btn.classList.remove("ripple-animate");
    void btn.offsetWidth;
    btn.classList.add("ripple-animate");

    onPress(label);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        key-ripple h-12 sm:h-14 rounded-md font-semibold grid place-items-center
        transition-colors duration-200 hover:brightness-105 active:scale-95
        ${wide ? "flex-[1.5]" : "flex-[1]"}     /* ✅ WIDTH FIX */
        ${colorStates[state] || colorStates.idle}
      `}
    >
      {label}
    </button>
  );
}

export default KeyButton;
