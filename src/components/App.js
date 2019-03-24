import React from "react";
import CardPile from "./CardPile";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <div className="ui teal segment" style={{ marginBottom: "30px" }}>
        <h1 className="ui center aligned icon header">
          <i className="circular outline icon">😢</i> Kompleks-generator
          <div className="sub header">
            <div className="content">
              Finn nye komplekser du kan blogge om på 1-2-3!
            </div>
          </div>
        </h1>
        <h3 className="ui center aligned icon header">
          Trykk på kortene for å finne ditt neste kroppskompleks.
        </h3>
      </div>
      <CardPile />
    </div>
  );
};

export default App;
