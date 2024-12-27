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
  height: any;
  datas?: { lat?: number; lng?: number; label?: string };
}

const blinkingIcon = new L.DivIcon({
  className: "blinking-icon",
  html: `<div class="blinking-circle"></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15],
});

const LeafletMapComponent: React.FC<LeafletMapComponentProps> = ({
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

      {datas?.lat && datas?.lng && (
        <Marker position={[datas.lat, datas.lng]} icon={blinkingIcon}>
          <Popup>{datas.label || "Dynamic Marker"}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default LeafletMapComponent;
