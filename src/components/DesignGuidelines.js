import React, { useState } from 'react';

// Composant principal "Guidelines de Design"
function DesignGuidelines() {
  return (
    <div className="p-8 bg-[#f3f4f6] min-h-screen">
      <h1 className="text-3xl font-bold text-[#333] mb-8 text-center">Guidelines de Design</h1>
      
      <SectionHierarchy />
      <SectionSpacing />
      <SectionContrast />
    </div>
  );
}

// Section Hiérarchie Visuelle
function SectionHierarchy() {
  const [headingSize, setHeadingSize] = useState(36);
  const [paragraphSize, setParagraphSize] = useState(16);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-[#333] mb-4">Hiérarchie Visuelle</h2>
      <p className="text-lg text-[#555] mb-4">Ajustez les tailles de texte pour créer une hiérarchie visuelle claire entre les titres et le contenu.</p>
      <div className="space-y-4">
        <label className="text-lg text-[#333]">
          Taille du Titre: 
          <input
            type="range"
            min="24"
            max="48"
            value={headingSize}
            onChange={(e) => setHeadingSize(e.target.value)}
            className="ml-2"
          />
          <span className="ml-2 text-[#333]">{headingSize}px</span>
        </label>
        <label className="text-lg text-[#333]">
          Taille du Texte: 
          <input
            type="range"
            min="12"
            max="24"
            value={paragraphSize}
            onChange={(e) => setParagraphSize(e.target.value)}
            className="ml-2"
          />
          <span className="ml-2 text-[#333]">{paragraphSize}px</span>
        </label>
        <div className="border p-4 bg-white rounded shadow-lg">
          <h3 style={{ fontSize: `${headingSize}px` }} className="font-bold text-[#333]">
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

// Section Espacements Cohérents
function SectionSpacing() {
  const [spacing, setSpacing] = useState(16);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-[#333] mb-4">Espacements Cohérents</h2>
      <p className="text-lg text-[#555] mb-4">L’espacement entre les éléments permet de structurer une interface de manière agréable. Ajustez les marges ici.</p>
      <label className="text-lg text-[#333]">
        Espacement entre les blocs:
        <input
          type="range"
          min="8"
          max="64"
          value={spacing}
          onChange={(e) => setSpacing(e.target.value)}
          className="ml-2"
        />
        <span className="ml-2 text-[#333]">{spacing}px</span>
      </label>
      <div className="mt-4 border p-4 bg-white rounded shadow-lg">
        <div style={{ marginBottom: `${spacing}px` }} className="p-4 bg-gray-100">
          Bloc 1
        </div>
        <div style={{ marginBottom: `${spacing}px` }} className="p-4 bg-gray-200">
          Bloc 2
        </div>
        <div className="p-4 bg-gray-300">
          Bloc 3
        </div>
      </div>
    </div>
  );
}

// Section Utilisation des Couleurs Contrastées
function SectionContrast() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-[#333] mb-4">Utilisation des Couleurs Contrastées</h2>
      <p className="text-lg text-[#555] mb-4">Assurez-vous que le contraste entre le texte et l'arrière-plan est suffisant pour être lisible.</p>
      <div className="space-y-4">
        <label className="text-lg text-[#333]">
          Couleur d'arrière-plan:
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="ml-2"
          />
        </label>
        <label className="text-lg text-[#333]">
          Couleur du texte:
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="ml-2"
          />
        </label>
        <div className="mt-4 p-4 border bg-white rounded shadow-lg" style={{ backgroundColor: bgColor, color: textColor }}>
          <h3 className="font-bold">Exemple de Texte</h3>
          <p>Ceci est un exemple de texte avec les couleurs sélectionnées. Assurez-vous que le contraste est suffisant pour une bonne lisibilité.</p>
        </div>
      </div>
    </div>
  );
}

export default DesignGuidelines;
