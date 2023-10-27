import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

function Handle(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const innerCycleRadius = 20;
  const isMouseDown = useRef(false);
  const intervalRef = useRef(null);
  const angle = useRef(0);

  const startMovingRobot = () => {
    intervalRef.current = setInterval(() => {
      if (!props.lock) {
        props.moveRobot(angle.current);
      }
    }, 10); // Update the robot location per 10ms
  };

  const stopMovingRobot = () => {
    clearInterval(intervalRef.current);
  };

  const handleDrag = (e) => {
    if (!isMouseDown.current) return;
    const container = e.currentTarget.getBoundingClientRect();
    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const offsetX = e.clientX - container.left - centerX;
    const offsetY = e.clientY - container.top - centerY;

    const maxDistance = Math.min(centerX, centerY) - innerCycleRadius;

    const distance = Math.min(
      Math.sqrt(offsetX ** 2 + offsetY ** 2),
      maxDistance
    );

    angle.current = Math.atan2(offsetY, offsetX);
    const newX = distance * Math.cos(angle.current);
    const newY = distance * Math.sin(angle.current);

    // Update the visual position of the inner handle
    setPosition({ x: newX, y: newY });
  };

  const handleMouseDown = () => {
    if (props.lock) {
      toast.warn("The robot is locked", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    isMouseDown.current = true;
    startMovingRobot();
  };

  const handleMouseUp = () => {
    setPosition({ x: 0, y: 0 });
    isMouseDown.current = false;
    stopMovingRobot();
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    isMouseDown.current = false;
    stopMovingRobot();
  };

  useEffect(() => {
    return () => {
      stopMovingRobot(); // Clean up the interval on unmount
    };
  }, []);

  return (
    <div className="handle-container">
      <div
        className="handle"
        onMouseMove={handleDrag}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="handle-inner"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <div className="handle-knob"></div>
        </div>
      </div>
    </div>
  );
}

export default Handle;
