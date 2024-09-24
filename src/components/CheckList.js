import React, { useState } from 'react';
import Tesseract from 'tesseract.js';  // Import de Tesseract pour l'OCR

const checklistItems = [
  { id: 1, question: 'Le contraste des couleurs est-il suffisant ?', checked: false },
  { id: 2, question: 'Les polices sont-elles lisibles sur toutes les tailles d’écran ?', checked: false },
  { id: 3, question: 'L’interface est-elle accessible via la tabulation et les raccourcis clavier ?', checked: false },
  { id: 4, question: 'Les animations ne sont-elles pas trop distrayantes ?', checked: false },
  { id: 5, question: 'Les images sont-elles optimisées pour le web ?', checked: false },
  { id: 6, question: 'Le temps de chargement de la page est-il optimisé ?', checked: false },
  { id: 7, question: 'La navigation est-elle intuitive et facile à comprendre ?', checked: false },
  { id: 8, question: 'Les éléments interactifs sont-ils suffisamment grands pour être facilement cliqués ?', checked: false },
  { id: 9, question: 'Les formulaires sont-ils simples et bien structurés ?', checked: false },
  { id: 10, question: 'Le design est-il cohérent à travers toutes les pages ?', checked: false },
  { id: 11, question: 'Les boutons importants sont-ils visibles et bien placés ?', checked: false },
  { id: 12, question: 'Le contenu est-il lisible sur mobile et desktop ?', checked: false },
];

function Checklist() {
  const [items, setItems] = useState(checklistItems);
  const [screenshot, setScreenshot] = useState(null);
  const [file, setFile] = useState(null);  // Garde une référence du fichier pour l'analyse
  const [autoAnalyze, setAutoAnalyze] = useState(false);
  const [analyzing, setAnalyzing] = useState(false); // État pour suivre l'analyse
  const [extractedText, setExtractedText] = useState(""); // Stocke le texte extrait de l'image
  const [analysisReport, setAnalysisReport] = useState([]); // Stocke le rapport d'analyse pour chaque critère

  const handleCheck = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleScreenshotUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setScreenshot(URL.createObjectURL(uploadedFile));
      setFile(uploadedFile);  // Stocke le fichier pour l'analyse
    }
  };

  const handleAnalyze = () => {
    if (!file) {
      alert("Veuillez télécharger une capture d'écran pour l'analyse.");
      return;
    }

    setAnalyzing(true);
    setAnalysisReport([]);  // Réinitialiser le rapport

    // Utilisation de Tesseract.js pour extraire du texte à partir du fichier image
    Tesseract.recognize(
      file,  // On passe le fichier directement
      'eng',
      {
        logger: (m) => console.log(m), // Voir la progression dans la console
      }
    )
      .then(({ data: { text } }) => {
        console.log("Texte extrait de l'image :", text);
        setExtractedText(text); // Affiche le texte extrait

        // Analyse du texte pour décider quels éléments cocher
        const report = [];  // Rapport d'analyse pour chaque critère
        const analyzedItems = items.map((item) => {
          let result = { question: item.question, respected: false }; // Par défaut, le critère n'est pas respecté

          if (
            (item.question.includes('polices') && /font|text|readable/i.test(text)) ||
            (item.question.includes('contraste') && /contrast|color|dark|light/i.test(text)) ||
            (item.question.includes('images') && /image|photo|graphic/i.test(text)) ||
            (item.question.includes('chargement') && /load|speed|performance/i.test(text))
          ) {
            result.respected = true;
            report.push({ ...result });
            return { ...item, checked: true };
          }

          report.push({ ...result });
          return item;
        });

        setItems(analyzedItems);
        setAnalysisReport(report);  // Stocker le rapport d'analyse
        setAutoAnalyze(true);
      })
      .catch((err) => console.error("Erreur lors de l'analyse de l'image : ", err))
      .finally(() => {
        setAnalyzing(false);
      });
  };

  return (
    <div className="p-8 bg-[#f3f4f6] min-h-screen">
      <h1 className="text-3xl font-bold text-[#333] mb-8 text-center">Check-list UX/UI avant déploiement</h1>
      <p className="mb-8 text-lg text-[#555] text-center">
        Utilisez cette check-list pour garantir que votre interface est optimisée avant de déployer votre projet. Cliquez pour vérifier chaque critère .
      </p>

      {/* <div className="flex justify-center items-center mb-6">
        <input type="file" accept="image/*" onChange={handleScreenshotUpload} />
      </div> */}

      {/* {screenshot && (
        <div className="flex flex-col items-center mb-8">
          <img src={screenshot} alt="Capture d'écran téléchargée" className="max-w-xs rounded shadow-lg mb-4" />
          <button
            className="bg-[#e4c9f9] hover:bg-[#d3aef8] text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-transform shadow-lg"
            onClick={handleAnalyze}
            disabled={analyzing}
          >
            {analyzing ? 'Analyse en cours...' : 'Analyse automatique'}
          </button>
        </div>
      )}

      {extractedText && (
        <div className="mb-8 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Texte extrait :</h2>
          <p className="whitespace-pre-wrap text-gray-700">{extractedText}</p>
        </div>
      )} */}

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform ${
              item.checked ? 'bg-[#e4c9f9]' : 'bg-white'
            }`}
            onClick={() => handleCheck(item.id)}
          >
            <span className={`text-lg ${item.checked ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
              {item.question}
            </span>
            <span className={`w-8 h-8 rounded-full ${item.checked ? 'bg-white' : 'bg-gray-300'}`}>
              {item.checked && <span className="block w-full h-full text-[#e4c9f9] text-center">✓</span>}
            </span>
          </li>
        ))}
      </ul>

      {autoAnalyze && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">Rapport d'analyse :</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {analysisReport.map((item, index) => (
              <li key={index} className={`${item.respected ? 'text-green-600' : 'text-red-600'}`}>
                {item.question} - {item.respected ? 'Respecté' : 'Non respecté'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Checklist;
