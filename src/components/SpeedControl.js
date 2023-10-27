import React from "react";

function SpeedControl(props) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      {/* Top Triangle Button */}
      <button
        className="btn btn-light btn-lg rounded-circle mt-5"
        data-testid="speed-up-btn"
        onClick={() => props.changeSpeed(true)}
      >
        <div className="triangle-up"></div>
      </button>

      {/* Speed Display Box */}
      <div className="bg-primary text-white p-4 rounded mt-5">
        <h3>Speed</h3>
        <p>{props.currentSpeed && props.currentSpeed.toFixed(1)} m/s</p>
      </div>

      {/* Bottom Triangle Button */}
      <button
        className="btn btn-light btn-lg rounded-circle mt-5"
        data-testid="slow-down-btn"
        onClick={() => props.changeSpeed(false)}
      >
        <div className="triangle-down"></div>
      </button>
    </div>
  );
}

export default SpeedControl;
