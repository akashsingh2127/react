import { useState } from "react";
import './bgchanger.css'

function Bgchanger() {
  const [bgColor, setBgColor] = useState('white')

 
  const textColor = bgColor === 'black' ? 'white' : 'black';

  return (
    <div
      className="h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h2 className="text-3xl font-bold mb-6">🎨 Background Changer</h2>

      <div className="flex gap-4">
        <button
          onClick={() => setBgColor('pink')}
          className="bg-pink-400 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          Pink
        </button>

        <button
          onClick={() => setBgColor('lightblue')}
          className="bg-blue-400 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          Blue
        </button>

        <button
          onClick={() => setBgColor('lightgreen')}
          className="bg-green-400 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          Green
        </button>

        <button
          onClick={() => setBgColor('lavender')}
          className="bg-purple-400 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          Purple
        </button>

        <button
          onClick={() => setBgColor('orange')}
          className="bg-orange-400 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          Orange
        </button>

        <button
          onClick={() => setBgColor('black')}
          className="bg-black text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          Black
        </button>
      </div>
    </div>
  )
}

export default Bgchanger
