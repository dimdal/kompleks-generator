import React from "react";
import Card from "./Card";

class CardPile extends React.Component {
  state = { allcardsDrawn: false };

  renderContent() {
    return (
      <div class="ui stackable two column grid">
        <Card adj={true} />
        <Card />
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default CardPile;
