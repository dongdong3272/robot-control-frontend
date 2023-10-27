import React from "react";
import Handle from "./Handle";
import PickDropButton from "./PickDropButton";

function OperationPanel(props) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <PickDropButton displayText="Pick Up" handleClick={props.handlePickUp} />
      <PickDropButton
        displayText="Drop Off"
        handleClick={props.handleDropOff}
      />
      <Handle
        lock={props.lock}
        emergencyOn={props.emergencyOn}
        moveRobot={props.moveRobot}
      />
    </div>
  );
}

export default OperationPanel;
