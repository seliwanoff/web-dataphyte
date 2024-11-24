import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 6.5244, // Example: Lagos, Nigeria
  lng: 3.3792,
};

interface MapProps {
  markers?: { lat: number; lng: number }[];
}
console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
const GMap: React.FC<MapProps> = ({ markers = [] }) => {
  return (
    <LoadScript googleMapsApiKey={`AIzaSyANCcAa09J_M6N_tRRd6_K8cF8mIthUPB`}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GMap;
