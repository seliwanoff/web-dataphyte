import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css"; // Leaflet default styles
import "leaflet.markercluster/dist/MarkerCluster.Default.css"; // Marker cluster styles
import "leaflet.markercluster/dist/MarkerCluster.css"; // Marker cluster base styles
import L from "leaflet";
import "./MapStyles.css"; // Custom styles for blinking icons

interface MarkerProps {
  lat: number;
  lng: number;
  label?: string;
}

interface LargeMapComponentProps {
  center: { lat: number; lng: number };
  zoom?: number;
  markers?: MarkerProps[];
  height: any;
  datas?: { lat?: number; lng?: number; label?: string };
}

// Create a blinking circular icon using Leaflet's DivIcon
const blinkingIcon = new L.DivIcon({
  className: "blinking-icon", // Custom class defined in CSS
  html: `<div class="blinking-circle"></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15], // Center the icon
  popupAnchor: [0, -15], // Adjust popup position
});

const LargeMapComponent: React.FC<LargeMapComponentProps> = ({
  center,
  zoom = 10,
  markers = [],
  datas,
  height,
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ width: "100%", height: height || "171px" }}
    >
      {/* Base map layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker cluster group */}
      <MarkerClusterGroup>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.lat, marker.lng]}
            icon={blinkingIcon}
          >
            <Popup>{marker.label || "Dynamic Marker"}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default LargeMapComponent;
