function Toggle({ value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`relative w-12 h-6 rounded-full transition-colors duration-300
        ${value ? "bg-green-500" : "bg-gray-400"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-all duration-300
          ${value ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
}

export default function SettingsMode({ close, dark, setDark }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">

      {/* Animated Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-backdrop-fade"
        onClick={close}
      />

      {/* Modal Box with Pop Animation */}
      <div
        className="relative animate-modal-pop bg-white dark:bg-gray-800 dark:text-gray-100 
                   px-6 py-6 rounded-lg w-80 shadow-lg border 
                   border-gray-300 dark:border-gray-600 pointer-events-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Settings</h2>
          <button onClick={close} className="text-lg hover:scale-110">✖️</button>
        </div>

        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <span>Dark Mode</span>
            <Toggle value={dark} onChange={setDark} />
          </div>

          <div className="flex justify-between items-center opacity-60 pointer-events-none">
            <span>Hard Mode</span>
            <Toggle value={false} onChange={() => {}} />
          </div>

          <div className="flex justify-between items-center opacity-60 pointer-events-none">
            <span>Sound</span>
            <Toggle value={false} onChange={() => {}} />
          </div>
        </div>

      </div>
    </div>
  );
}
