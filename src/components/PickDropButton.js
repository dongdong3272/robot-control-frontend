import React from "react";

function PickDropButton(props) {
  return (
    <button
      className="btn btn-primary pick-drop-button"
      onClick={props.handleClick}
    >
      {props.displayText}
    </button>
  );
}

export default PickDropButton;
