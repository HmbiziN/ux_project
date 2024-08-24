import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function ColorSwatches({ colors }) {
  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    alert(`Couleur ${hex} copiée dans le presse-papier!`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
      {colors.map((color, index) => (
        <div key={index} className="text-center">
          <div
            style={{ backgroundColor: color.hex }}
            className="h-20 md:h-16 rounded shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
            title={`${color.shade}`}
            onClick={() => handleCopy(color.hex)}
          >
            <p className="text-center text-sm text-white font-semibold pt-5">{color.shade}</p>
          </div>
          <p className="mt-2 text-xs md:text-sm text-gray-700 min-h-[40px] flex flex-col justify-center">
            {color.hex}
            <button
              onClick={() => handleCopy(color.hex)}
              className="ml-2 text-blue-500 hover:underline"
            >
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ColorSwatches;
