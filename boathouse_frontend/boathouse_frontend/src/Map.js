// src/components/Map.js
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    // Check if a map is already initialized in the container
    let map = L.map("map");
    if (map) {
      map.remove(); // Remove the existing map instance
    }

    // Initialize the map
    map = L.map("map").setView([12.9716, 77.5946], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([12.9716, 77.5946]).addTo(map)
      .bindPopup("Kerala")
      .openPopup();

    // Cleanup function to remove the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default Map;