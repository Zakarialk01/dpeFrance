import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Dpedisplay from "./components/Dpedisplay";
import UInterface from "./components/UInterface";


const App = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [dpeData, setDpeData] = useState([]);
  const [error, setError] = useState(null);

  const handleFetchDpe = useCallback(async () => {
    if (latitude && longitude) {
      try {
        const response = await fetch(
          `https://data.ademe.fr/data-fair/api/v1/datasets/dpe-france/lines?geo_distance=${longitude}:${latitude}:10000`
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données.");
        }

        const data = await response.json();
        console.log(data); // Vérifiez les données reçues dans la console

        setDpeData(data.results);
        setError(null);
      } catch (err) {
        setError("Erreur lors de la récupération des données.");
      }
    }
  }, [latitude, longitude]);

  useEffect(() => {
    handleFetchDpe();
  }, [handleFetchDpe]);

  return (
    <div className="App">
      <div className="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-center font-medium sm:text-left">
          DPE France ici ! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <a
          className="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
          href="#"
        >
          Learn More
        </a>
      </div>
      <UInterface
        latitude={latitude}
        setLatitude={setLatitude}
        longitude={longitude}
        setLongitude={setLongitude}
        handleFetchDpe={handleFetchDpe}
      />
      {error && <p>{error}</p>}
      <Dpedisplay dpeData={dpeData} />
    </div>
  );
};

export default App;
