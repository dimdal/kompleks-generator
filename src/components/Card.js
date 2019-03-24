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
  "tørre",
  "asymmetriske",
  "illeluktende",
  "oppblåste",
  "hengende",
  "bittesmå",
  "gigantiske",
  "sprukne",
  "firkantede",
  "overdimensjonerte",
  "tynne",
  "rare",
  "underernærte"
];

const bodypartsNorwegian = [
  "ankler",
  "knær",
  "hårstrå",
  "negler",
  "ryggvirvler",
  "kneskåler",
  "akilleshæler",
  "pupiller",
  "lepper",
  "fortenner",
  "kjønnshår",
  "magemuskler",
  "pupper",
  "øyne",
  "nesebor",
  "ribbein",
  "rumpeballer",
  "hæler",
  "kinn",
  "nesehår",
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
  "ringfingre",
  "lillefingre"
];

class Card extends React.Component {
  state = { isHidden: true, text: "?" };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const isAdj = this.props.adj;
    const isHidden = this.state.isHidden;
    const adjective = this.generateRandomAdjective();
    const bodypart = this.generateRandomBodypart();
    if (isHidden & isAdj) {
      this.setState({
        text: adjective,
        isHidden: false
      });
      this.props.callback("adj", adjective, false);
    }
    if (isHidden & !isAdj) {
      this.setState({
        text: bodypart,
        isHidden: false
      });
      this.props.callback("bp", bodypart, false);
    }
    if (!isHidden) {
      this.setState({ isHidden: true, text: "?" });
    }
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
      <div className="column">
        <div
          className={`ui fluid card komplekskort ${
            this.state.isHidden ? "face-down active" : "face-up"
          }`}
          onClick={this.onClick}>
          <div className="flipper">
            <div className="large-margin">
              <div className="center aligned header">{this.state.text}</div>
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
