import React from "react";
import Map from "./Map";
import OperationPanel from "./OperationPanel";
import SpeedControl from "./SpeedControl";

function MainPanel(props) {
  return (
    <div className="row main-panel" data-testid="main-panel">
      <div className="col-2">
        <OperationPanel
          lock={props.lock}
          emergencyOn={props.emergencyOn}
          moveRobot={props.moveRobot}
          handlePickUp={props.handlePickUp}
          handleDropOff={props.handleDropOff}
        />
      </div>
      <div className="col-9">
        <Map location={props.location} />
      </div>
      <div className="col-1">
        <SpeedControl
          changeSpeed={props.changeSpeed}
          currentSpeed={props.currentSpeed}
        />
      </div>
    </div>
  );
}

export default MainPanel;
