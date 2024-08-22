import axios from 'axios'; // Assurez-vous d'importer axios

// Fonction fetchData pour récupérer des données à partir d'un point de terminaison
export async function fetchData(endPoint) {
  try {
    const response = await axios.get(endPoint);
    // console.log(response.data);
    return response.data; 
  } catch (e) {
    console.log("Error fetching data", e);
    throw e; 
  }
}


