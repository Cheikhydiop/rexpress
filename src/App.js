import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchData } from './services/fetchData';
import Hello from './Hello';


function App() {
  const [value, setValue] = useState([]); // Initialiser avec un tableau vide
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  // Fonction pour gérer le clic sur le bouton
  const handClick = async () => {
    const newCount = count + 1;
    setCount(newCount);
  
    try {
      const response = await fetch("/api/updateCount", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count: newCount }),
      });
  
      const result = await response.json();
      console.log("Réponse du serveur :", result);
    } catch (err) {
      console.log("Erreur :", err);
    }
  }
  const [axio,setAxio]=useState([]);

  // Utilisation de useEffect pour charger les données au chargement du composant
  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => setValue(data.data)) // Accéder à la clé "data" et mettre à jour l'état
      .catch(err => console.log(err));
  }, []);


  


useEffect(() => {
 const result=fetchData('api');
 setAxio(result);
}, []);


  return (
    <div className="App">
      <h1>Données du serveur</h1>
      <ul>
        {value.map((item, index) => (
          <li key={index}>{item}</li> // Afficher chaque élément du tableau "data"
        ))}
      </ul>
       
      <button onClick={handClick}>Cliquez ici {count} fois</button>
      <Hello name="Cheikh" />

     <form>
    
     </form>

    </div>
  );
}

export default App;



