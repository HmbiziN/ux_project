import React, { useState } from 'react';

function DesignGuidelines() {
  return (
    <div className="p-8 bg-[#f3f4f6] min-h-screen">
      <h1 className="text-3xl font-bold text-[#333] mb-8 text-center">Guidelines de Design</h1>
      <p className="mb-8 text-lg text-[#555] text-center">
        Utilisez ces outils pour optimiser la hiérarchie visuelle, les espacements et le contraste de votre interface utilisateur.
      </p>
      
      <SectionHierarchy />
      <SectionSpacing />
      <SectionContrast />
    </div>
  );
}

function SectionHierarchy() {
  const [headingSize, setHeadingSize] = useState(36);
  const [paragraphSize, setParagraphSize] = useState(16);

  return (
    <div className="mb-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-[#333] mb-4">Hiérarchie Visuelle</h2>
      <p className="text-lg text-[#555] mb-6">Ajustez les tailles de texte pour créer une hiérarchie visuelle claire entre les titres et le contenu.</p>
      <div className="space-y-6">
        <label className="flex items-center text-lg text-[#333]">
          <span className="w-40">Taille du Titre:</span>
          <input
            type="range"
            min="24"
            max="48"
            value={headingSize}
            onChange={(e) => setHeadingSize(e.target.value)}
            className="ml-2 flex-grow"
          />
          <span className="ml-2 w-16 text-center">{headingSize}px</span>
        </label>
        <label className="flex items-center text-lg text-[#333]">
          <span className="w-40">Taille du Texte:</span>
          <input
            type="range"
            min="12"
            max="24"
            value={paragraphSize}
            onChange={(e) => setParagraphSize(e.target.value)}
            className="ml-2 flex-grow"
          />
          <span className="ml-2 w-16 text-center">{paragraphSize}px</span>
        </label>
        <div className="border p-6 bg-gray-50 rounded shadow-inner">
          <h3 style={{ fontSize: `${headingSize}px` }} className="font-bold text-[#333] mb-4">
            Exemple de Titre
          </h3>
          <p style={{ fontSize: `${paragraphSize}px` }} className="text-[#555]">
            Ceci est un exemple de paragraphe. Vous pouvez ajuster les tailles de texte pour voir comment cela impacte la hiérarchie visuelle dans une interface utilisateur.
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionSpacing() {
  const [spacing, setSpacing] = useState(16);

  return (
    <div className="mb-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-[#333] mb-4">Espacements Cohérents</h2>
      <p className="text-lg text-[#555] mb-6">L'espacement entre les éléments permet de structurer une interface de manière agréable. Ajustez les marges ici.</p>
      <label className="flex items-center text-lg text-[#333] mb-6">
        <span className="w-64">Espacement entre les blocs:</span>
        <input
          type="range"
          min="8"
          max="64"
          value={spacing}
          onChange={(e) => setSpacing(e.target.value)}
          className="ml-2 flex-grow"
        />
        <span className="ml-2 w-16 text-center">{spacing}px</span>
      </label>
      <div className="border p-6 bg-gray-50 rounded shadow-inner">
        <div style={{ marginBottom: `${spacing}px` }} className="p-4 bg-gray-200 rounded">
          Bloc 1
        </div>
        <div style={{ marginBottom: `${spacing}px` }} className="p-4 bg-gray-300 rounded">
          Bloc 2
        </div>
        <div className="p-4 bg-gray-400 rounded">
          Bloc 3
        </div>
      </div>
    </div>
  );
}

function SectionContrast() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');

  return (
    <div className="mb-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-[#333] mb-4">Utilisation des Couleurs Contrastées</h2>
      <p className="text-lg text-[#555] mb-6">Assurez-vous que le contraste entre le texte et l'arrière-plan est suffisant pour être lisible.</p>
      <div className="space-y-6">
        <label className="flex items-center text-lg text-[#333]">
          <span className="w-48">Couleur d'arrière-plan:</span>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="ml-2 w-12 h-12 rounded-full border-2 border-gray-300"
          />
          <span className="ml-2">{bgColor}</span>
        </label>
        <label className="flex items-center text-lg text-[#333]">
          <span className="w-48">Couleur du texte:</span>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="ml-2 w-12 h-12 rounded-full border-2 border-gray-300"
          />
          <span className="ml-2">{textColor}</span>
        </label>
        <div className="mt-6 p-6 border rounded shadow-inner" style={{ backgroundColor: bgColor, color: textColor }}>
          <h3 className="font-bold text-2xl mb-4">Exemple de Texte</h3>
          <p className="text-lg">Ceci est un exemple de texte avec les couleurs sélectionnées. Assurez-vous que le contraste est suffisant pour une bonne lisibilité.</p>
        </div>
      </div>
    </div>
  );
}

export default DesignGuidelines;
