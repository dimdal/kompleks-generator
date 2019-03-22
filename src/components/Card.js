import "./Card.css";
import React from "react";

const adjectivesNorwegian = [
  "små",
  "store",
  "feite",
  "runde",
  "korte",
  "dumme",
  "skeive",
  "trange",
  "brede",
  "flate",
  "overproporsjonerte",
  "tynne",
  "rare",
  "patetiske",
  "underernærte"
];

const bodypartsNorwegian = [
  "ankler",
  "knær",
  "hårstrå",
  "negler",
  "mage",
  "pupper",
  "øyne",
  "nesebor",
  "ribbein",
  "rumpeballer",
  "hæler",
  "hår på armene",
  "hår i armhulen",
  "hår på leggene",
  "legger",
  "knoker",
  "fingre",
  "øyebryn",
  "øyevipper",
  "håndledd",
  "overarmer",
  "lår",
  "tær",
  "pekefingre",
  "langfingre",
  "lillefingre"
];

class Card extends React.Component {
  state = { isFaceUp: false };

  flipCard() {
    this.setState({ isFaceUp: !this.state.isFaceUp });
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.flipCard();
    console.log("click");
  }

  generateRandomAdjective() {
    return adjectivesNorwegian[
      Math.floor(Math.random() * adjectivesNorwegian.length)
    ];
  }

  generateRandomBodypart() {
    return bodypartsNorwegian[
      Math.floor(Math.random() * bodypartsNorwegian.length)
    ];
  }

  renderContent() {
    return (
      <div class="column">
        <div
          className={`ui fluid card komplekskort ${
            this.state.isFaceUp ? "face-up active" : "face-down"
          }`}
          onClick={this.onClick}>
          <div className="flipper">
            <div className="large-margin">
              <div class="center aligned header">
                {this.state.isFaceUp & this.props.adj
                  ? this.generateRandomAdjective()
                  : this.state.isFaceUp & !this.props.adj
                  ? this.generateRandomBodypart()
                  : "?"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default Card;
