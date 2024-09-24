import React, { useState } from 'react';

function ConsistencyAnalyzer() {
  const [components, setComponents] = useState([
    { id: 1, name: 'Bouton', bgColor: '#3498db', borderColor: '#2980b9', textColor: '#ffffff', fontSize: '16px' },
    { id: 2, name: 'Carte', bgColor: '#ffffff', borderColor: '#e0e0e0', textColor: '#333333', fontSize: '14px' },
    { id: 3, name: 'En-tête', bgColor: '#f8f8f8', borderColor: '#dddddd', textColor: '#222222', fontSize: '24px' },
  ]);

  const [analysisResult, setAnalysisResult] = useState(null);

  const analyzeConsistency = () => {
    const colorSet = new Set();
    const fontSizeSet = new Set();
    let isAccessible = true;

    components.forEach(comp => {
      colorSet.add(comp.bgColor);
      colorSet.add(comp.borderColor);
      colorSet.add(comp.textColor);
      fontSizeSet.add(comp.fontSize);

      // Vérification basique du contraste
      if (!checkContrast(comp.bgColor, comp.textColor)) {
        isAccessible = false;
      }
    });

    const isConsistent = colorSet.size <= 5 && fontSizeSet.size <= 3;
    let message = isConsistent
      ? "Le design est cohérent. Bonne utilisation des couleurs et des tailles de police."
      : "Attention : Le design manque de cohérence. Essayez de limiter le nombre de couleurs et de tailles de police.";

    if (!isAccessible) {
      message += " De plus, certaines combinaisons de couleurs peuvent poser des problèmes d'accessibilité.";
    }

    setAnalysisResult({ isConsistent, isAccessible, message });
  };

  const checkContrast = (bgColor, textColor) => {
    // Implémentation basique de la vérification du contraste
    // Cette fonction devrait être améliorée pour une vérification plus précise
    const getBrightness = (hexColor) => {
      const rgb = parseInt(hexColor.slice(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >>  8) & 0xff;
      const b = (rgb >>  0) & 0xff;
      return (r * 299 + g * 587 + b * 114) / 1000;
    };

    const bgBrightness = getBrightness(bgColor);
    const textBrightness = getBrightness(textColor);
    const contrast = Math.abs(bgBrightness - textBrightness);

    return contrast > 125; // Seuil arbitraire, à ajuster selon les besoins
  };

  const renderComponentPreview = (comp) => {
    return (
      <button 
        style={{
          backgroundColor: comp.bgColor,
          borderColor: comp.borderColor,
          color: comp.textColor,
          fontSize: comp.fontSize,
          padding: '10px 20px',
          border: '2px solid',
          borderRadius: '5px',
        }}
      >
        {comp.name}
      </button>
    );
  };

  return (
    <div className="p-8 bg-[#f3f4f6] min-h-screen">
      <h1 className="text-3xl font-bold text-[#333] mb-8 text-center">Analyseur de Cohérence</h1>
      <p className="mb-8 text-lg text-[#555] text-center">
        Utilisez cet outil pour vérifier la cohérence et l'accessibilité de votre design.
      </p>

      <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#333] mb-4">Composants</h2>
        {components.map(comp => (
          <div key={comp.id} className="flex items-center mb-8">
            <div className="w-2/3">
              <span className="mr-4 text-lg text-[#555] w-24">{comp.name}:</span>
              <div className="flex items-center mt-2">
                <label className="mr-4">
                  Fond:
                  <input
                    type="color"
                    value={comp.bgColor}
                    onChange={(e) => {
                      const newComponents = components.map(c => 
                        c.id === comp.id ? {...c, bgColor: e.target.value} : c
                      );
                      setComponents(newComponents);
                    }}
                    className="ml-2 w-8 h-8 rounded"
                  />
                </label>
                <label className="mr-4">
                  Bordure:
                  <input
                    type="color"
                    value={comp.borderColor}
                    onChange={(e) => {
                      const newComponents = components.map(c => 
                        c.id === comp.id ? {...c, borderColor: e.target.value} : c
                      );
                      setComponents(newComponents);
                    }}
                    className="ml-2 w-8 h-8 rounded"
                  />
                </label>
                <label className="mr-4">
                  Texte:
                  <input
                    type="color"
                    value={comp.textColor}
                    onChange={(e) => {
                      const newComponents = components.map(c => 
                        c.id === comp.id ? {...c, textColor: e.target.value} : c
                      );
                      setComponents(newComponents);
                    }}
                    className="ml-2 w-8 h-8 rounded"
                  />
                </label>
                <select
                  value={comp.fontSize}
                  onChange={(e) => {
                    const newComponents = components.map(c => 
                      c.id === comp.id ? {...c, fontSize: e.target.value} : c
                    );
                    setComponents(newComponents);
                  }}
                  className="p-2 border border-gray-300 rounded"
                >
                  <option value="14px">14px</option>
                  <option value="16px">16px</option>
                  <option value="18px">18px</option>
                  <option value="24px">24px</option>
                </select>
              </div>
            </div>
            <div className="w-1/3 ml-8">
              {renderComponentPreview(comp)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={analyzeConsistency}
          className="bg-[#e4c9f9] hover:bg-[#d3aef8] text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-transform shadow-lg"
        >
          Analyser la cohérence et l'accessibilité
        </button>
      </div>

      {analysisResult && (
        <div className={`mt-8 p-6 ${analysisResult.isConsistent && analysisResult.isAccessible ? 'bg-green-100' : 'bg-red-100'} rounded-lg shadow-lg`}>
          <h3 className="text-xl font-semibold mb-2">Résultat de l'analyse :</h3>
          <p className="text-lg">{analysisResult.message}</p>
        </div>
      )}

      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#333] mb-4">Comment ça fonctionne :</h2>
        <ol className="list-decimal pl-6 text-[#555] space-y-2">
          <li>Choisissez les couleurs de fond, de bordure et de texte, ainsi que la taille de police pour chaque composant.</li>
          <li>Observez la prévisualisation des composants à droite des contrôles.</li>
          <li>Cliquez sur "Analyser la cohérence et l'accessibilité" pour évaluer votre design.</li>
          <li>L'outil vérifie si vous utilisez 5 couleurs ou moins et 3 tailles de police ou moins.</li>
          <li>L'outil effectue également une vérification basique du contraste pour l'accessibilité.</li>
          <li>Un message vous indiquera si votre design est cohérent et accessible, ou s'il nécessite des ajustements.</li>
        </ol>
      </div>
    </div>
  );
}

export default ConsistencyAnalyzer;
