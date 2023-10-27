import React, { useEffect, useState } from "react";

function Map(props) {
  const [map, setMap] = useState(null);
  const [robotMarker, setRobotMarker] = useState(null);

  useEffect(() => {
    // Check if the Google Maps script is already loaded
    if (!window.google || !window.google.maps) {
      // Load the Google Maps JavaScript API
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB-X6-KtIzKiEu-DyO2hX-TW-S67EOKJ98&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;

      // Attach the callback function to the `window` object
      window.initMap = function () {};

      script.addEventListener("load", () => {
        // Initialize the map when the script is loaded
        const mapInstance = new window.google.maps.Map(
          document.getElementById("map"),
          {
            center: props.location, // Initial location
            zoom: 23, // Adjust the zoom level for a clear road view
          }
        );

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
          icon: robotIcon, // Use the custom robot icons
        });

        setMap(mapInstance);
        setRobotMarker(marker);
      });

      // Add the script to the document
      document.head.appendChild(script);
    }
  }, [props.location]);

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
