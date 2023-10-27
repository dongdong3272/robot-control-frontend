import React from "react";

function EmergencyModal() {
  return (
    <div className="emergency-modal">
      <div className="emergency-content">
        <div className="emergency-icon">⚠️</div>
        <h2 className="emergency-text-head">Emergency Happens</h2>
        <p className="emergency-text">
          The robot has disabled all functions. Please ask for a technician to
          restart it.
        </p>
      </div>
    </div>
  );
}

function EmergencyButton(props) {
  return (
    <div>
      <button
        className="btn btn-danger btn-lg emergency-button"
        onClick={props.handleEmergency}
      >
        Emergency Stop
      </button>

      {props.emergencyOn && <EmergencyModal />}
    </div>
  );
}

export default EmergencyButton;
