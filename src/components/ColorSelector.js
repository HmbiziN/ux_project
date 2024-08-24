import React from 'react';

function ColorSelector({ palettes, onSelect }) {
  return (
    <div className="grid grid-cols-4 gap-6 place-items-center">
      {palettes.map((palette, index) => {
        const middleColor = palette.colors[Math.floor(palette.colors.length / 2)];
        
        return (
          <div key={index} className="flex flex-col items-center">
            <div
              onClick={() => onSelect(palette.colors, palette.name)}
              style={{ backgroundColor: middleColor.hex }}
              className="h-12 w-12 rounded-full cursor-pointer shadow-lg transform transition-transform hover:scale-110"
              title={`${palette.name} - ${middleColor.shade}`}
            />
            <span className="text-sm mt-2 text-gray-600">{palette.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ColorSelector;
