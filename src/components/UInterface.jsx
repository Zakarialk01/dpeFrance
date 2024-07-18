import React from "react";

const UInterface = ({ latitude, setLatitude, longitude, setLongitude, handleFetchDpe }) => {
  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetchDpe();
  };

  return (
    <div className="ui-interface">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Recherche de DPE</h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Entrez la latitude et la longitude pour trouver les DPE autour de cette position.
          </p>
          <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Veuillez préciser la latitude et la longitude :</p>
            <div>
              <label htmlFor="longitude" className="sr-only">Longitude</label>
              <input
                type="number"
                id="longitude"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Longitude"
                value={longitude}
                onChange={handleLongitudeChange}
                required
              />
            </div>
            <div>
              <label htmlFor="latitude" className="sr-only">Latitude</label>
              <input
                type="number"
                id="latitude"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Latitude"
                value={latitude}
                onChange={handleLatitudeChange}
                required
              />
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Rechercher
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UInterface;
