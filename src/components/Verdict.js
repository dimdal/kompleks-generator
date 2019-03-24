import React from "react";

const Verdict = props => {
  return (
    <div>
      {props.adjective && "Du har " + props.adjective + " " + props.bodypart}
    </div>
  );
};

export default Verdict;
