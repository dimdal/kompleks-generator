import React from "react";

const LinkButton = props => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.href}>
      <button className="medium ui button">{props.text}</button>
    </a>
  );
};

export default LinkButton;
