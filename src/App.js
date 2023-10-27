import "./App.css";
import EmergencyButton from "./components/EmergencyButton";
import PauseButton from "./components/PauseButton";
import MainPanel from "./components/MainPanel";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // All the states will be initilized to null
  const [emergency, setEmergency] = useState(null);
  const [lock, setLock] = useState(null);
  const [currentSpeed, setCurrentSpeed] = useState(null);
  const [location, setLocation] = useState(null);
  const webSocketRef = useRef(null);

  // Helper variables
  const ToastType = {
    SUCCESS: "success",
    FAIL: "fail",
    ERROR: "error",
  };

  // Connect to the web socket
  useEffect(() => {
    const webSocketURL = process.env.REACT_APP_WEBSOCKET_URL;
    console.log("Try connecting to the web socket:", webSocketURL);
    webSocketRef.current = new WebSocket(webSocketURL);

    webSocketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      handleServerResponse(data);
    };

    webSocketRef.current.onopen = () => {
      printMessage(ToastType.SUCCESS, "The robot has been connected");
      // Request initial values from the server
      webSocketRef.current.send(
        JSON.stringify({ command: "getInitialValues" })
      );
    };

    webSocketRef.current.onclose = () => {
      printMessage(ToastType.SUCCESS, "The robot has been disconnected");
    };

    webSocketRef.current.onerror = () => {
      printMessage(ToastType.ERROR, "Connection failed");
    };

    return () => {
      webSocketRef.current.close();
    };
  }, []);

  // Function to handle server responses
  const handleServerResponse = (data) => {
    // Update local state based on the response data
    if (data.status === "success") {
      if (data.robotState.emergency !== undefined) {
        setEmergency(data.robotState.emergency);
      }
      if (data.robotState.lock !== undefined) {
        setLock(data.robotState.lock);
      }
      if (data.robotState.speed !== undefined) {
        setCurrentSpeed(data.robotState.speed);
      }
      if (data.robotState.location !== undefined) {
        setLocation(data.robotState.location);
      }
      if (
        data.command === "pickUp" ||
        data.command === "dropOff" ||
        data.command === "toggleLock"
      ) {
        printMessage(ToastType.SUCCESS, data.message); // Set modal message
      }
    } else if (data.status === "fail") {
      // Handle fail responses
      printMessage(ToastType.FAIL, data.message);
    } else {
      // Handle errors or other responses
      printMessage(ToastType.ERROR, data.message);
    }
  };

  // Function to send commands to the server
  const sendCommand = (command) => {
    if (webSocketRef.current.readyState === WebSocket.OPEN) {
      webSocketRef.current.send(JSON.stringify(command));
    }
  };

  function handleLock() {
    sendCommand({ command: "toggleLock" });
  }

  function changeSpeed(speedUp) {
    sendCommand({ command: speedUp ? "speedUp" : "slowDown" });
  }

  function moveRobot(angle) {
    sendCommand({ command: "move", angle });
  }

  function pickUp() {
    sendCommand({ command: "pickUp" });
  }

  function dropOff() {
    sendCommand({ command: "dropOff" });
  }

  // Helper function
  function printMessage(type, message) {
    switch (type) {
      case ToastType.SUCCESS:
        toast.success(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        break;
      case ToastType.FAIL:
        toast.warn(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        break;
      case ToastType.ERROR:
        toast.error(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        break;
      default:
        toast.error("Wrong ToastType", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    }
  }

  return (
    <div className="App">
      <EmergencyButton
        emergencyOn={emergency}
        handleEmergency={() => setEmergency(true)}
      />
      <MainPanel
        lock={lock}
        emergencyOn={emergency}
        location={location}
        changeSpeed={changeSpeed}
        currentSpeed={currentSpeed}
        moveRobot={moveRobot}
        handlePickUp={pickUp}
        handleDropOff={dropOff}
      />
      <PauseButton lock={lock} handleLock={handleLock} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
