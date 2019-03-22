import React from "react";
import CardPile from "./CardPile";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <div className="ui teal segment" style={{ marginBottom: "30px" }}>
        <h1 class="ui center aligned icon header">
          <i class="circular frown teal outline icon" />
          Kompleks-generator
          <div class="sub header">
            <div class="content">
              Finn nye komplekser du kan blogge om på 1-2-3!
            </div>
          </div>
        </h1>
        <h3 class="ui center aligned icon header">
          Trykk på kortene for å finne ditt neste kroppskompleks.
        </h3>
      </div>
      <CardPile />
      <div class="ui divider" />
      <div className="ui basic segment action_buttons">
        <a target="_blank" href="https://www.youtube.com/watch?v=qmmB_oWmRDU">
          <button class="large ui teal basic button">
            Bestill plastisk operasjon
          </button>
        </a>
        <a target="_blank" href="https://sophieelise.blogg.no/">
          <button class="large ui pink basic button">Tips Sophie Elise</button>
        </a>
      </div>
    </div>
  );
};

export default App;
