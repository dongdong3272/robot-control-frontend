import React from "react";

function PauseButton(props) {
  // Add a closing double quote at the end of the string
  let classLabel = `btn btn-lg pause-button pause-lock ${
    props.lock ? "btn-success" : "btn-warning"
  }`;

  return (
    <button
      className={classLabel}
      onClick={props.handleLock}
      data-testid="lock-btn"
      data-locked={props.lock ? "true" : "false"}
    >
      Press to {props.lock ? "unlock" : "lock"} the robot
    </button>
  );
}

export default PauseButton;
