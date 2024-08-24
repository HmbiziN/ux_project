import React, { useState } from 'react';
import { palettes } from './palettes';
import ColorSelector from './components/ColorSelector';
import ColorSwatches from './components/ColorSwatches';
import ExampleComponents from './components/ExampleComponents';

function App() {
  const [selectedPalette, setSelectedPalette] = useState([]);
  const [paletteName, setPaletteName] = useState('');

  const handleColorSelect = (colors, name) => {
    setSelectedPalette(colors);
    setPaletteName(name);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-10">
      <div className="flex flex-col md:flex-row w-full max-w-7xl space-y-10 md:space-y-0 md:space-x-10">
        {/* Colonne Gauche (en haut sur mobile) */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Sélectionnez une Couleur</h1>
          <ColorSelector palettes={palettes} onSelect={handleColorSelect} />
          {paletteName && (
            <h2 className="text-2xl font-semibold mt-10 text-center text-gray-700">{paletteName}</h2>
          )}
          <ColorSwatches colors={selectedPalette} />
        </div>

        {/* Colonne Droite (en bas sur mobile) */}
        <div className="w-full md:w-1/2">
          <ExampleComponents colors={selectedPalette} />
        </div>
      </div>
    </div>
  );
}

export default App;
