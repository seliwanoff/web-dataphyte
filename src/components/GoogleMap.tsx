import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet's default styles
import L from "leaflet";
import "./MapStyles.css"; // Add this file for the custom blinking styles

interface MarkerProps {
  lat: number;
  lng: number;
  label?: string;
}

interface LeafletMapComponentProps {
  center: { lat: number; lng: number };
  zoom?: number;
  markers?: MarkerProps[];
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

const LeafletMapComponent: React.FC<LeafletMapComponentProps> = ({
  center,
  zoom = 10,
  markers = [],
  datas,
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ width: "100%", height: "171px" }}
    >
      {/* Base map layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Render static markers */}
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.lat, marker.lng]}
          icon={blinkingIcon}
        >
          <Popup>{marker.label || "No label provided"}</Popup>
        </Marker>
      ))}

      {/* Render dynamic marker from the datas prop */}
      {datas?.lat && datas?.lng && (
        <Marker position={[datas.lat, datas.lng]} icon={blinkingIcon}>
          <Popup>{datas.label || "Dynamic Marker"}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default LeafletMapComponent;
