import React, { useState } from 'react';
import { palettes } from './palettes';
import ColorSelector from './components/ColorSelector';
import ColorSwatches from './components/ColorSwatches';
import ExampleComponents from './components/ExampleComponents';

function App() {
  const [selectedPalette, setSelectedPalette] = useState([]);
  const [paletteName, setPaletteName] = useState('');
  const [isSobrietyMode, setIsSobrietyMode] = useState(false);

  const handleColorSelect = (colors, name) => {
    setSelectedPalette(colors);
    setPaletteName(name);
  };

  const toggleSobrietyMode = () => {
    setIsSobrietyMode(!isSobrietyMode);
  };

  const filteredPalette = selectedPalette.filter((_, index) => 
    isSobrietyMode ? [0, 3, 6, 9].includes(index) : true
  );

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-10">
      <div className="flex flex-col md:flex-row w-full max-w-7xl space-y-10 md:space-y-0 md:space-x-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
          <div className="flex justify-center items-center mb-4">
            <span className="mr-2 text-gray-600">Normal</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={isSobrietyMode}
                onChange={toggleSobrietyMode} 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-2 text-gray-600">Sobriété</span>
            </label>
          </div>
          <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Sélectionnez une Couleur</h1>
          <ColorSelector palettes={palettes} onSelect={handleColorSelect} />
          {paletteName && (
            <h2 className="text-2xl font-semibold mt-10 text-center text-gray-700">{paletteName}</h2>
          )}
          <ColorSwatches colors={filteredPalette} />
        </div>

        <div className="w-full md:w-1/2">
        <ExampleComponents colors={filteredPalette} isSobrietyMode={isSobrietyMode} />

        </div>
      </div>
    </div>
  );
}

export default App;
