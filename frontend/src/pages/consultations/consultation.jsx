import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Consultation() {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState([51.505, -0.09]); // Default location (London)
  const [places, setPlaces] = useState([]);

  const handleLocationSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch coordinates for the input location using a geocoding API
      const geocodeRes = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=YOUR_GOOGLE_API_KEY`
      );
      
      const geocodeData = await geocodeRes.json();
      const { lat, lng } = geocodeData.results[0].geometry.location;
      
      const placesRes = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=hospital&keyword=prenatal&key=YOUR_GOOGLE_API_KEY`
      );
      
      const placesData = await placesRes.json();
      setPlaces(placesData.results);
      
    } catch (error) {
      console.error("Error fetching location or places:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Consultation: Find Prenatal Care Near You
      </h1>
      <form
        onSubmit={handleLocationSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#007BFF",
            color: "white",
            cursor: "pointer",
          }}
        >
          Find Locations
        </button>
      </form>

      <div style={{ height: "500px", width: "100%" }}>
        <MapContainer center={coordinates} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {places.map((place, index) => (
            <Marker key={index} position={[place.latitude, place.longitude]}>
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Consultation;
