import React from 'react';
import { FaSmile, FaHeartbeat, FaLightbulb, FaLeaf, FaStar, FaExclamationTriangle } from 'react-icons/fa'; 

const themes = [
    {
      title: 'Gris',
      colors: ['#808080', '#F0F0F0', '#D3D3D3'],
      description: `<strong>Utilisation :</strong> Gris clair pour les fonds, gris foncé pour le texte secondaire, ou pour des boutons désactivés.
      <strong>Émotions :</strong> Neutre, modernité, minimalisme.
      <strong>Associations culturelles :</strong> Le gris est souvent perçu comme sophistiqué et formel.`,
      icon: <FaLightbulb />, 
    },
    {
      title: 'Bleu',
      colors: ['#007BFF', '#0056B3', '#004085'],
      description: `<strong>Utilisation :</strong> Souvent utilisé pour les liens, les boutons d'action, et les bannières. Le bleu est associé à la confiance, raison pour laquelle il est populaire dans les entreprises.
      <strong>Émotions :</strong> Confiance, sécurité, professionnalisme.
      <strong>Combinaisons :</strong> Se marie bien avec le blanc et le gris pour un look professionnel.`,
      icon: <FaStar />,
    },
    {
      title: 'Rouge',
      colors: ['#FF0000', '#DC3545', '#C82333'],
      description: `<strong>Utilisation :</strong> Utilisé pour attirer l'attention, dans les alertes ou les boutons "danger" ou "annuler".
      <strong>Émotions :</strong> Urgence, importance, énergie.
      <strong>Associations culturelles :</strong> Le rouge est associé à la chance en Chine, mais à l'urgence et au danger en Occident.`,
      icon: <FaExclamationTriangle />,
    },
    {
      title: 'Vert',
      colors: ['#28A745', '#218838', '#1E7E34'],
      description: `<strong>Utilisation :</strong> Utilisé pour indiquer le succès, dans les boutons "confirmer" ou "valider", ainsi que pour les éléments liés à la nature ou la durabilité.
      <strong>Émotions :</strong> Santé, nature, succès.
      <strong>Combinaisons :</strong> Le vert s'associe bien avec le bleu et le marron pour des thèmes naturels.`,
      icon: <FaLeaf />,
    },
    {
      title: 'Jaune',
      colors: ['#FFC107', '#FFD700', '#FFC72C'],
      description: `<strong>Utilisation :</strong> Utilisé pour les alertes ou les notifications, ou pour mettre en avant des éléments spécifiques.
      <strong>Émotions :</strong> Attention, optimisme, mise en garde.
      <strong>Meilleures pratiques :</strong> Utiliser modérément, car trop de jaune peut être perçu comme irritant.`,
      icon: <FaSmile />,
    },
    {
      title: 'Orange',
      colors: ['#FD7E14', '#FF4500', '#FFA500'],
      description: `<strong>Utilisation :</strong> Souvent utilisé dans les appels à l'action pour encourager l'interaction, ou pour des éléments énergétiques ou ludiques.
      <strong>Émotions :</strong> Énergie, enthousiasme, action.
      <strong>Combinaisons :</strong> L'orange fonctionne bien avec des couleurs neutres comme le gris ou le noir.`,
      icon: <FaHeartbeat />,
    },
    {
      title: 'Violet',
      colors: ['#6F42C1', '#5A32A3', '#8A2BE2'],
      description: `<strong>Utilisation :</strong> Utilisé pour des éléments luxueux ou créatifs, souvent associé à la créativité ou la richesse.
      <strong>Émotions :</strong> Créativité, luxe, mystère.
      <strong>Associations culturelles :</strong> Le violet est souvent associé à la royauté et au pouvoir en Europe.`,
      icon: <FaStar />,
    },
    {
      title: 'Rose',
      colors: ['#FFC0CB', '#FF69B4', '#FF1493'],
      description: `<strong>Utilisation :</strong> Souvent Utilisé dans des produits ou services féminins. Il est également utilisé pour des éléments romantiques ou doux.
      <strong>Émotions :</strong> Féminité, douceur, romantisme.
      <strong>Associations culturelles :</strong> Le rose est couramment associé à la douceur et à l'amour.`,
      icon: <FaHeartbeat />,
    },
    {
      title: 'Turquoise',
      colors: ['#40E0D0', '#48D1CC', '#00CED1'],
      description: `<strong>Utilisation :</strong> Populaire dans les designs modernes et frais, souvent utilisé pour des éléments d'appel à l'action ou des thèmes marins.
      <strong>Émotions :</strong> Fraîcheur, innovation, modernité.
      <strong>Combinaisons :</strong> Le turquoise se combine bien avec des couleurs neutres et des tons chauds comme l'orange.`,
      icon: <FaLeaf />,
    },
    {
      title: 'Marron',
      colors: ['#A52A2A', '#8B4513', '#D2691E'],
      description: `<strong>Utilisation :</strong> Utilisé dans des designs liés à la nature, la terre, ou des produits artisanaux.
      <strong>Émotions :</strong> Terre, stabilité, chaleur.
      <strong>Associations culturelles :</strong> Le marron est souvent associé à la terre et à la fiabilité.`,
      icon: <FaLightbulb />,
    },
    {
      title: 'Beige / Ivoire',
      colors: ['#F5F5DC', '#FFFFF0', '#FAF0E6'],
      description: `<strong>Utilisation :</strong> Utilisé pour les fonds neutres ou dans des contextes de design minimaliste.
      <strong>Émotions :</strong> Élégance discrète, douceur, neutralité.
      <strong>Combinaisons :</strong> Le beige s'accorde bien avec des couleurs vives pour un effet équilibré.`,
      icon: <FaSmile />,
    },
    {
      title: 'Or',
      colors: ['#FFD700', '#DAA520', '#B8860B'],
      description: `<strong>Utilisation :</strong> Utilisé pour des éléments luxueux ou prestigieux, souvent associé à la réussite.
      <strong>Émotions :</strong> Luxe, richesse, prestige.
      <strong>Associations culturelles :</strong> L'or est universellement associé à la richesse et au succès.`,
      icon: <FaStar />,
    },
  ];

  const Tendance = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 bg-gray-100">
        {themes.map((theme, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{theme.title}</h3>
              <div className="flex space-x-2 mb-4">
                {theme.colors.map((color, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-full" style={{ backgroundColor: color }}></div>
                ))}
              </div>
              <p className="text-gray-600 text-sm whitespace-pre-line" dangerouslySetInnerHTML={{ __html: theme.description }}></p>
            </div>
            <div className="p-4 bg-gray-200 flex justify-center items-center">
              {theme.icon}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Tendance;