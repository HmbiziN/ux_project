import React, { useState, useRef, useEffect } from 'react';

function HeatmapGenerator() {
  const [screenshot, setScreenshot] = useState(null);
  const canvasRef = useRef(null);
  const [showLeastVisible, setShowLeastVisible] = useState(false);

  const handleScreenshotUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setScreenshot(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (screenshot && canvasRef.current) {
      generateHeatmap();
    }
  }, [screenshot, showLeastVisible]);

  const generateHeatmap = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const width = canvas.width;
      const height = canvas.height;

      // Zones les plus visibles (points chauds)
      const hotspots = [
        { x: width * 0.2, y: height * 0.2, intensity: 0.8 },
        { x: width * 0.5, y: height * 0.5, intensity: 1 },
        { x: width * 0.8, y: height * 0.8, intensity: 0.6 },
      ];

      // Zones les moins visibles (points froids)
      const coldspots = [
        { x: width * 0.1, y: height * 0.9, intensity: 0.7 },
        { x: width * 0.9, y: height * 0.1, intensity: 0.9 },
        { x: width * 0.7, y: height * 0.3, intensity: 0.5 },
      ];

      if (showLeastVisible) {
        drawSpots(ctx, coldspots, 'blue');
      } else {
        drawSpots(ctx, hotspots, 'red');
      }
    };
    img.src = screenshot;
  };

  const drawSpots = (ctx, spots, color) => {
    spots.forEach(spot => {
      const gradient = ctx.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, 100);
      gradient.addColorStop(0, `rgba(${colorToRGBA(color, spot.intensity)})`);
      gradient.addColorStop(1, `rgba(${colorToRGBA(color, 0)})`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(spot.x - 100, spot.y - 100, 200, 200);
    });
  };
  
  const colorToRGBA = (color, alpha) => {
    if (color === 'red') {
      return `255, 0, 0, ${alpha}`;
    } else if (color === 'blue') {
      return `0, 0, 255, ${alpha}`;
    }
    return `0, 0, 0, ${alpha}`; // Noir par défaut
  };
  

  return (
    <div className="p-8 bg-[#f3f4f6] min-h-screen">
      <h1 className="text-3xl font-bold text-[#333] mb-8 text-center">Générateur de Heatmap</h1>
      <p className="mb-8 text-lg text-[#555] text-center">
        Cet outil vous permet de générer une heatmap simulée pour votre interface utilisateur. Téléchargez une capture d'écran de votre interface pour visualiser les zones susceptibles d'attirer le plus ou le moins l'attention.
      </p>

      <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#333] mb-4">Comment ça fonctionne :</h2>
        <ol className="list-decimal pl-6 text-[#555] space-y-2">
          <li>Téléchargez une capture d'écran de votre interface en utilisant le bouton ci-dessous.</li>
          <li>Une fois l'image téléchargée, une heatmap sera automatiquement générée et superposée à votre capture d'écran.</li>
          <li>Les zones en rouge représentent les points d'intérêt simulés où l'attention de l'utilisateur est susceptible de se concentrer.</li>
          <li>Les zones en bleu représentent les points les moins visibles où l'attention de l'utilisateur est moins susceptible de se porter.</li>
          <li>Utilisez le bouton de basculement pour alterner entre les zones les plus et les moins visibles.</li>
          <li>Utilisez cette visualisation pour évaluer si les éléments importants de votre interface sont bien mis en évidence et si des informations cruciales ne se trouvent pas dans les zones moins visibles.</li>
        </ol>
      </div>

      <div className="flex justify-center items-center mb-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleScreenshotUpload}
          className="bg-[#e4c9f9] hover:bg-[#d3aef8] text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-transform shadow-lg mr-4"
        />
        {screenshot && (
          <button
            onClick={() => setShowLeastVisible(!showLeastVisible)}
            className="bg-[#e4c9f9] hover:bg-[#d3aef8] text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-transform shadow-lg"
          >
            {showLeastVisible ? "Afficher les zones les plus visibles" : "Afficher les zones les moins visibles"}
          </button>
        )}
      </div>

      {screenshot && (
        <div className="flex flex-col items-center mb-8">
          <canvas ref={canvasRef} className="border border-gray-300 shadow-lg max-w-full" />
          <p className="mt-4 text-[#555] text-center">
            La heatmap a été générée. Les zones en {showLeastVisible ? "bleu" : "rouge"} indiquent les points {showLeastVisible ? "les moins visibles" : "d'intérêt potentiels"} de votre interface.
          </p>
        </div>
      )}
    </div>
  );
}

export default HeatmapGenerator;
