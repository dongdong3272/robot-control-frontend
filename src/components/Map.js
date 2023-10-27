import React, { useEffect, useState } from "react";

function Map(props) {
  const [map, setMap] = useState(null);
  const [robotMarker, setRobotMarker] = useState(null);

  useEffect(() => {
    async function initMap() {
      if (!window.google) {
        return; // Wait for the Google Maps script to load
      }

      const { Map } = await window.google.maps.importLibrary("maps");

      const mapInstance = new Map(document.getElementById("map"), {
        center: props.location, // Initial location
        zoom: 23, // Adjust the zoom level for a clear road view
      });

      // Create a custom icon for the robot marker
      const robotIcon = {
        url: "./images/robot4.png", // Replace with the URL of your robot image
        scaledSize: new window.google.maps.Size(50, 50), // Adjust the size as needed
      };

      // Add a marker for the robot at the initial location
      const marker = new window.google.maps.Marker({
        position: props.location,
        map: mapInstance,
        title: "Robot Location",
        icon: robotIcon, // Use the custom robot icon
      });

      setMap(mapInstance);
      setRobotMarker(marker);
    }

    initMap();
  }, []);

  // Use the useEffect to update the map and marker when props.location changes
  useEffect(() => {
    if (map && robotMarker) {
      map.setCenter(props.location); // Update the map center
      robotMarker.setPosition(props.location); // Update the marker position
    }
  }, [props.location, map, robotMarker]);

  return <div id="map" className="map"></div>;
}

export default Map;
