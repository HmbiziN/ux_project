import React from 'react';

function ExampleComponents({ colors }) {
  const primaryColor = colors[5]?.hex || '#ccc';
  const secondaryColor = colors[7]?.hex || '#aaa';
  const backgroundColor = colors[0]?.hex || '#f5f5f5';
  const lastColor = colors[9]?.hex || '#333'; 

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Boutons</h3>
      
      {/* Boutons Principal */}
      <div>
        <p className="font-semibold text-gray-600">Bouton Principal</p>
        <div className="flex space-x-4">
          {/* Default */}
          <button
            className="py-2 px-4 rounded font-semibold text-white"
            style={{ backgroundColor: primaryColor, minWidth: "100px" }}
          >
            Default
          </button>
          {/* Hover */}
          <button
            className="py-2 px-4 rounded font-semibold text-white opacity-80"
            style={{ backgroundColor: primaryColor, minWidth: "100px" }}
          >
            Hover
          </button>
          {/* Active */}
          <button
            className="py-2 px-4 rounded font-semibold text-white transform scale-95"
            style={{ backgroundColor: primaryColor, minWidth: "100px" }}
          >
            Active
          </button>
          {/* Disabled */}
          <button
            className="py-2 px-4 rounded font-semibold text-white opacity-50 cursor-not-allowed"
            style={{ backgroundColor: primaryColor, minWidth: "100px" }}
            disabled
          >
            Disabled
          </button>
        </div>
      </div>

      {/* Boutons Secondaire */}
      <div>
        <p className="font-semibold text-gray-600">Bouton Secondaire</p>
        <div className="flex space-x-4">
          {/* Default */}
          <button
            className="py-2 px-4 rounded font-semibold text-white"
            style={{ backgroundColor: secondaryColor, minWidth: "100px" }}
          >
            Default
          </button>
          {/* Hover */}
          <button
            className="py-2 px-4 rounded font-semibold text-white opacity-80"
            style={{ backgroundColor: secondaryColor, minWidth: "100px" }}
          >
            Hover
          </button>
          {/* Active */}
          <button
            className="py-2 px-4 rounded font-semibold text-white transform scale-95"
            style={{ backgroundColor: secondaryColor, minWidth: "100px" }}
          >
            Active
          </button>
          {/* Disabled */}
          <button
            className="py-2 px-4 rounded font-semibold text-white opacity-50 cursor-not-allowed"
            style={{ backgroundColor: secondaryColor, minWidth: "100px" }}
            disabled
          >
            Disabled
          </button>
        </div>
      </div>

      {/* Boutons Outline */}
      <div>
        <p className="font-semibold text-gray-600">Bouton Outline</p>
        <div className="flex space-x-4">
          {/* Default */}
          <button
            className="py-2 px-4 rounded font-semibold border"
            style={{ color: primaryColor, borderColor: primaryColor, minWidth: "100px" }}
          >
            Default
          </button>
          {/* Hover */}
          <button
            className="py-2 px-4 rounded font-semibold border bg-primary-light"
            style={{ color: primaryColor, borderColor: primaryColor, minWidth: "100px", opacity: 0.8 }}
          >
            Hover
          </button>
          {/* Active */}
          <button
            className="py-2 px-4 rounded font-semibold border bg-primary-dark"
            style={{ color: primaryColor, borderColor: primaryColor, minWidth: "100px", transform: "scale(0.95)" }}
          >
            Active
          </button>
          {/* Disabled */}
          <button
            className="py-2 px-4 rounded font-semibold border opacity-50 cursor-not-allowed"
            style={{ color: primaryColor, borderColor: primaryColor, minWidth: "100px", backgroundColor: 'transparent' }}
            disabled
          >
            Disabled
          </button>
        </div>
      </div>

      {/* Tooltip */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">Tooltip</h3>
        <div className="relative group inline-block">
          <button
            className="py-2 px-4 rounded font-semibold border"
            style={{ color: primaryColor, borderColor: primaryColor }}
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

      {/* Toasts */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">Toasts</h3>
        
           {/* Premier Toast */}
      <div
        className="p-4 rounded shadow-md"
        style={{ backgroundColor: backgroundColor, color: primaryColor }}
      >
        <p className="font-semibold">Toast Notification</p>
        <p style={{ color: lastColor }}>
          Exemple de message de notification toast.
        </p>
      </div>

      {/* Espacement entre les toasts */}
      <div className="h-4"></div>

      {/* Deuxième Toast */}
      <div
        className="p-4 rounded shadow-md border"
        style={{
          backgroundColor: colors[1]?.hex || '#ddd',   // 2ème couleur pour le fond
          borderColor: colors[4]?.hex || '#bbb',       // 5ème couleur pour la bordure
          color: colors[5]?.hex || '#888',             // 6ème couleur pour le titre
        }}
      >
        <p className="font-semibold">Titre de la Notification</p>
        <p style={{ color: colors[8]?.hex || '#666' }}>  {/* 9ème couleur pour le texte */}
          Texte de notification avec l'avant-dernière couleur.
        </p>
      </div>
      </div>

      {/* Carte */}
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

      {/* Styles pour les états : default, hover, active */}
      <style jsx>{`
        button {
          transition: all 0.3s ease;
        }
        button:hover {
          opacity: 0.8;
        }
        button:active {
          transform: scale(0.98);
        }
        button:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}

export default ExampleComponents;
