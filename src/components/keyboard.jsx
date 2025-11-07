import KeyButton from "./KeyButton";

export default function Keyboard({ layout, keyStates, onPress }) {
  const rows = [
    layout.slice(0, 10),
    layout.slice(10, 19),
    layout.slice(19),
  ];

  return (
    <div
      className="
        flex flex-col gap-2 px-2 w-full
        max-w-[22rem]        /* Mobile */
        sm:max-w-[26rem]     /* Tablet */
        md:max-w-[30rem]     /* Laptop */
        lg:max-w-[32rem]     /* Large Desktop */
      "
    >
      {rows.map((row, rIndex) => (
        <div key={rIndex} className="flex gap-1 w-full">
          {row.map((key) => (
            <KeyButton
              key={key}
              label={key}
              state={keyStates[key] || "idle"}
              wide={key === "Enter" || key === "Delete"}
              onPress={onPress}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
