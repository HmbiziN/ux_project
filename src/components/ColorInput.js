import React, { useState } from 'react';

function ColorInput({ generateColors }) {
  const [hexColor, setHexColor] = useState('');

  const handleGenerate = () => {
    generateColors(hexColor);
  };

  return (
    <div>
      <input
        type="text"
        value={hexColor}
        onChange={(e) => setHexColor(e.target.value)}
        placeholder="#8d41ff"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={handleGenerate}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Générer le Nuancier
      </button>
    </div>
  );
}

export default ColorInput;
