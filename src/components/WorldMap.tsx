import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Set up a custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
  shadowSize: [50, 64],
  shadowAnchor: [4, 62],
});

interface MapProps {
  latitude: number;
  longitude: number;
}

const WorldMap: React.FC<MapProps> = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={2}
      style={{ height: "30vh", width: "30%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Latitude: {latitude}, Longitude: {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default WorldMap;
