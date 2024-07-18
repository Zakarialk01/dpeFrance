import React from "react";

const DpeDisplay = ({ dpeData }) => {
  if (!dpeData.length) {
    return <p>Aucun DPE trouvé pour l'instant.</p>;
  }

  return (
    <div className="dpe-display">
      <h2>Liste des DPE</h2>
      <ul>
        {dpeData.map((dpe) => (
          <li key={dpe._id} className="dpe-item">
            <p><strong>Adresse :</strong> {dpe.geo_adresse}</p>
            <p><strong>Consommation énergétique :</strong> {dpe.consommation_energie} kWh/m².an</p>
            <p><strong>Classe énergétique :</strong> {dpe.classe_consommation_energie}</p>
            <p><strong>Date d'établissement :</strong> {dpe.date_etablissement_dpe}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DpeDisplay;
