import React from "react";
import Card from "./Card";
import FacebookShare from "./FacebookShare";

class CardPile extends React.Component {
  constructor() {
    super();
    this.state = {
      adjectiveCard: { isHidden: true, content: null },
      bodypartCard: { isHidden: true, content: null }
    };
    this.callback = this.callback.bind(this);
  }

  callback(type, word, isHidden) {
    type === "adj"
      ? this.setState({
          adjectiveCard: { isHidden: isHidden, content: word }
        })
      : this.setState({
          bodypartCard: { isHidden: isHidden, content: word }
        });
  }

  renderContent() {
    var adjective = this.state.adjectiveCard.content;
    var bodypart = this.state.bodypartCard.content;
    return (
      <div className="ui stackable two column grid">
        <Card adj={true} callback={this.callback} />
        <Card callback={this.callback} />
        {!this.state.adjectiveCard.isHidden &
        !this.state.bodypartCard.isHidden ? (
          <FacebookShare adjective={adjective} bodypart={bodypart} />
        ) : (
          ""
        )}
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default CardPile;
