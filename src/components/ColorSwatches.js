import React from 'react';

function ColorSwatches({ colors }) {
  return (
    <div className="grid grid-cols-5 gap-4 mt-10">
      {colors.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: color.hex }}
          className="h-16 rounded shadow-lg transform transition-transform hover:scale-105"
          title={`${color.shade}`}
        >
          <p className="text-center text-sm text-white font-semibold pt-5">{color.shade}</p>
        </div>
      ))}
    </div>
  );
}

export default ColorSwatches;
