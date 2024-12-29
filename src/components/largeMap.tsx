import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css"; // Leaflet default styles
import "leaflet.markercluster/dist/MarkerCluster.Default.css"; // Marker cluster styles
import "leaflet.markercluster/dist/MarkerCluster.css"; // Marker cluster base styles
import L from "leaflet";
import "./MapStyles.css"; // Custom styles for blinking icons
import { useNavigate } from "react-router-dom";

interface MarkerProps {
  lat: number;
  lng: number;
  label?: string;
  id?: any;
}

interface LargeMapComponentProps {
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

const LargeMapComponent: React.FC<LargeMapComponentProps> = ({
  center,
  zoom = 10,
  markers = [],
  datas,
  height,
}) => {
  const navigate = useNavigate();
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
            eventHandlers={{
              click: () => {
                navigate(`../mining-site?id=${marker.id}`);
                //const googleMapUrl = `https://www.google.com/maps/place/?q=place_id:${marker.id}`;
                //  window.open(googleMapUrl, "_blank");
              },
            }}
          >
            <Popup>{marker.label || "Dynamic Marker"}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default LargeMapComponent;
