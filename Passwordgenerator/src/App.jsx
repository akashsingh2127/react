import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);
  const [password, setPassword] = useState("LGYmsxVT");

  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeChars) chars += "!@#$%^&*()_+{}[]<>?/|";

    let generated = "";
    for (let i = 0; i < length; i++) {
      generated += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generated);
  }, [length, includeNumbers, includeChars]);

  const copyToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      navigator.clipboard.writeText(password);
    }
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="bl-20 w-full max-w-md mx-auto px-3 py-4 my-8 ml-100 bg-[#282c34] text-white items-center justify-center">
      <div className="bg-[#1f232a] p-6 rounded-2xl shadow-2xl w-[400px] flex flex-col items-center">
        <h2 className="text-lg mb-4 text-gray-200 tracking-wide">
          PASSWORD GENERATOR
        </h2>
        <div className="flex w-full mb-4 items-center">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full bg-transparent px-2 py-1 outline-none text-gray-300 font-mono text-sm"
          />
          <button
            onClick={copyToClipboard}
            className="bg-[#2c313a] text-white text-xs px-3 py-1 rounded hover:bg-[#3d4350] ml-2"
          >
            Copy
          </button>
        </div>
        <div className="w-full flex flex-col gap-4">
          
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="cursor-pointer w-full accent-white h-1 bg-[#374151] rounded-lg appearance-none"
            />
            <label className="flex flex-col items-center text-xs text-gray-400 ml-2 leading-none">
              Length
              <span className="font-bold text-white text-sm">
                ({length})
              </span>
            </label>
          </div>

          
          <div className="flex items-center gap-6 justify-center mt-1 text-sm">
            <label className="flex items-center gap-1 text-white">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers((prev) => !prev)}
                className="accent-white h-3 w-3 rounded border-gray-400 focus:ring-transparent"
              />
              Numbers
            </label>

            <label className="flex items-center gap-1 text-white">
              <input
                type="checkbox"
                checked={includeChars}
                onChange={() => setIncludeChars((prev) => !prev)}
                className="accent-white h-3 w-3 rounded border-gray-400 focus:ring-transparent"
              />
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
