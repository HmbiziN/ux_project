import React from 'react';

function ExampleComponents({ colors }) {
  const primaryColor = colors[5]?.hex || '#ccc'; // Utilise la couleur centrale de la palette (500) ou un gris par défaut
  const secondaryColor = colors[7]?.hex || '#aaa'; // Utilise une couleur plus foncée (700) ou un gris par défaut
  const backgroundColor = colors[0]?.hex || '#f5f5f5'; // Utilise la couleur la plus claire (50) ou un gris clair par défaut

  return (
    <div className="space-y-8">
      {/* Exemple de Boutons */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">Boutons</h3>
        <button
          className="py-2 px-4 rounded font-semibold text-white"
          style={{ backgroundColor: primaryColor }}
        >
          Bouton Principal
        </button>
        <button
          className="ml-4 py-2 px-4 rounded font-semibold text-white"
          style={{ backgroundColor: secondaryColor }}
        >
          Bouton Secondaire
        </button>
      </div>

      {/* Exemple de Tooltip */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">Tooltip</h3>
        <div
          className="relative group"
          style={{ display: 'inline-block' }}
        >
          <button
            className="py-2 px-4 rounded font-semibold text-white"
            style={{ backgroundColor: primaryColor }}
          >
            Hover Me
          </button>
          <div
            className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-no-wrap"
            style={{ backgroundColor: secondaryColor }}
          >
            Tooltip Exemple
          </div>
        </div>
      </div>

      {/* Exemple de Toast */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">Toast</h3>
        <div
          className="p-4 rounded shadow-md"
          style={{ backgroundColor: backgroundColor, color: primaryColor }}
        >
          <p className="font-semibold">Toast Notification</p>
          <p>Exemple de message de notification toast.</p>
        </div>
      </div>

      {/* Exemple de Carte */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">Carte</h3>
        <div
          className="p-6 rounded-lg shadow-lg"
          style={{ backgroundColor: backgroundColor }}
        >
          <h4 className="text-lg font-bold mb-2" style={{ color: primaryColor }}>
            Titre de la Carte
          </h4>
          <p className="text-gray-700">
            Ceci est un exemple de contenu d'une carte, utilisant les couleurs sélectionnées.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExampleComponents;
