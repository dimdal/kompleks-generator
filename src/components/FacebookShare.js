import React from "react";
import { FacebookShareButton } from "react-share";
import LinkButton from "./LinkButton";
import "./FacebookShare.css";

const FacebookShare = props => {
  var verdict =
    "Du har " +
    props.adjective +
    " " +
    props.bodypart +
    ". Men fortvil ikke, våre dyktige kirurger kan hjelpe deg. ";
  var shareText = "Jeg har " + props.adjective + " " + props.bodypart + ". ";
  return (
    <div className="ui segment center aligned top attached">
      <h1 className="ui header center verdict">
        {props.adjective + " " + props.bodypart}
        <div className="sub header">{verdict}</div>
      </h1>
      <div className="ui buttons action_buttons">
        <FacebookShareButton
          url="http://mariusorvik.com/kompleks-generator/"
          quote={
            shareText + "Hva på kroppen din burde du være misfornøyd med?"
          }>
          <button className="ui facebook button">
            <i className="facebook icon" />
            Del på Facebook
          </button>
        </FacebookShareButton>
        <LinkButton
          text="Bestill plastisk kirurgi"
          href="https://www.youtube.com/watch?v=qmmB_oWmRDU"
        />
      </div>
      <h4 className="ui header center verdict">
        <a href="http://www.kristingjelsvik.no/na-er-det-nok-sophie-elise/">
          Hvorfor kompleksgenerator?
        </a>
      </h4>
    </div>
  );
};

export default FacebookShare;
