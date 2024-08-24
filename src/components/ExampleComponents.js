import React from 'react';

function ExampleComponents({ colors, isSobrietyMode }) {
  // Définition des couleurs en fonction du mode sobriété
  const primaryColor = colors[0]?.hex || '#000'; // Utilisé pour certains éléments principaux
  const bgColor = colors[3]?.hex || '#f5f5f5'; // Utilisé pour le fond du bouton et du tooltip
  const textColor = colors[6]?.hex || '#333'; // Utilisé pour le texte
  const borderColor = colors[9]?.hex || textColor; // Utilisé pour les bordures et les textes

  return (
    <div className="space-y-8">
      {/* Affichage en mode sobriété */}
      {isSobrietyMode ? (
        <>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Boutons</h3>
          <div>
            <p className="font-semibold text-gray-600">Bouton Principal</p>
            <div className="flex space-x-4">
              <button
                className="py-2 px-4 rounded font-semibold text-white"
                style={{ backgroundColor: bgColor, minWidth: "100px" }}
              >
                Default
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Tooltip</h3>
            <div className="relative group inline-block">
              <button
                className="py-2 px-4 rounded font-semibold border"
                style={{ color: textColor, borderColor: borderColor }}
              >
                Hover Me
              </button>
              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-white text-xs rounded py-1 px-2 whitespace-no-wrap"
                style={{ backgroundColor: bgColor }}
              >
                Tooltip Exemple
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Toasts</h3>
            <div
              className="p-4 rounded shadow-md border"
              style={{
                backgroundColor: primaryColor,
                borderColor: borderColor,
                color: textColor,
              }}
            >
              <p className="font-semibold" style={{ color: bgColor }}>Titre de la Notification</p>
              <p>
                Texte de notification utilisant les couleurs sélectionnées.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Carte</h3>
            <div
              className="p-6 rounded-lg shadow-lg"
              style={{ backgroundColor: primaryColor }}
            >
              <h4 className="text-lg font-bold mb-2" style={{ color: bgColor }}>
                Titre de la Carte
              </h4>
              <p style={{ color: borderColor }}>
                Ceci est un exemple de contenu d'une carte, utilisant les couleurs sélectionnées.
              </p>
            </div>
          </div>
        </>
      ) : (
        // Mode Normal : Tous les composants sont affichés
        <>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Boutons</h3>
          <div>
            <p className="font-semibold text-gray-600">Bouton Principal</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="py-2 px-4 rounded font-semibold text-white"
                style={{ backgroundColor: colors[5]?.hex || '#ccc', minWidth: "100px" }}
              >
                Default
              </button>
              <button
                className="py-2 px-4 rounded font-semibold text-white opacity-80"
                style={{ backgroundColor: colors[5]?.hex || '#ccc', minWidth: "100px" }}
              >
                Hover
              </button>
              <button
                className="py-2 px-4 rounded font-semibold text-white transform scale-95"
                style={{ backgroundColor: colors[5]?.hex || '#ccc', minWidth: "100px" }}
              >
                Active
              </button>
              <button
                className="py-2 px-4 rounded font-semibold text-white opacity-50 cursor-not-allowed"
                style={{ backgroundColor: colors[5]?.hex || '#ccc', minWidth: "100px" }}
                disabled
              >
                Disabled
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-600">Bouton Secondaire</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="py-2 px-4 rounded font-semibold text-white"
                style={{ backgroundColor: colors[7]?.hex || '#aaa', minWidth: "100px" }}
              >
                Default
              </button>
              <button
                className="py-2 px-4 rounded font-semibold text-white opacity-80"
                style={{ backgroundColor: colors[7]?.hex || '#aaa', minWidth: "100px" }}
              >
                Hover
              </button>
              <button
                className="py-2 px-4 rounded font-semibold text-white transform scale-95"
                style={{ backgroundColor: colors[7]?.hex || '#aaa', minWidth: "100px" }}
              >
                Active
              </button>
              <button
                className="py-2 px-4 rounded font-semibold text-white opacity-50 cursor-not-allowed"
                style={{ backgroundColor: colors[7]?.hex || '#aaa', minWidth: "100px" }}
                disabled
              >
                Disabled
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-600">Bouton Outline</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="py-2 px-4 rounded font-semibold border"
                style={{ color: colors[5]?.hex || '#ccc', borderColor: colors[5]?.hex || '#ccc', minWidth: "100px" }}
              >
                Default
              </button>
              <button
                className="py-2 px-4 rounded font-semibold border bg-primary-light"
                style={{ color: colors[5]?.hex || '#ccc', borderColor: colors[5]?.hex || '#ccc', minWidth: "100px", opacity: 0.8 }}
              >
                Hover
              </button>
              <button
                className="py-2 px-4 rounded font-semibold border bg-primary-dark"
                style={{ color: colors[5]?.hex || '#ccc', borderColor: colors[5]?.hex || '#ccc', minWidth: "100px", transform: "scale(0.95)" }}
              >
                Active
              </button>
              <button
                className="py-2 px-4 rounded font-semibold border opacity-50 cursor-not-allowed"
                style={{ color: colors[5]?.hex || '#ccc', borderColor: colors[5]?.hex || '#ccc', minWidth: "100px", backgroundColor: 'transparent' }}
                disabled
              >
                Disabled
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Tooltip</h3>
            <div className="relative group inline-block">
              <button
                className="py-2 px-4 rounded font-semibold border"
                style={{ color: colors[5]?.hex || '#ccc', borderColor: colors[5]?.hex || '#ccc' }}
              >
                Hover Me
              </button>
              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-no-wrap"
                style={{ backgroundColor: colors[7]?.hex || '#aaa' }}
              >
                Tooltip Exemple
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Toasts</h3>

            <div
              className="p-4 rounded shadow-md"
              style={{ backgroundColor: colors[0]?.hex || '#f5f5f5', color: colors[5]?.hex || '#ccc' }}
            >
              <p className="font-semibold">Toast Notification</p>
              <p style={{ color: colors[9]?.hex || '#333' }}>
                Exemple de message de notification toast.
              </p>
            </div>

            <div className="h-4"></div>

            <div
              className="p-4 rounded shadow-md border"
              style={{
                backgroundColor: colors[1]?.hex || '#ddd',
                borderColor: colors[4]?.hex || '#bbb',
                color: colors[5]?.hex || '#888',
              }}
            >
              <p className="font-semibold">Titre de la Notification</p>
              <p style={{ color: colors[8]?.hex || '#666' }}>
                Texte de notification avec l'avant-dernière couleur.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Carte</h3>
            <div
              className="p-6 rounded-lg shadow-lg"
              style={{ backgroundColor: colors[0]?.hex || '#f5f5f5' }}
            >
              <h4 className="text-lg font-bold mb-2" style={{ color: colors[5]?.hex || '#ccc' }}>
                Titre de la Carte
              </h4>
              <p className="text-gray-700">
                Ceci est un exemple de contenu d'une carte, utilisant les couleurs sélectionnées.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ExampleComponents;
