import React from "react";
import WorldMap from "./WorldMap";

const App: React.FC = () => {
  const latitude = 51.505; // Replace with your latitude
  const longitude = -0.09; // Replace with your longitude

  return (
    <div className="d-flex justify-content-center">
      <WorldMap latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default App;
