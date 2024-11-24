import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Function to parse and filter OSM XML data
const parseAndFilterNodes = (osmData) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(osmData, "text/xml");

  const nodes = xmlDoc.getElementsByTagName("node");

  const hospitals = [];
  Array.from(nodes).forEach((node) => {
    const tags = node.getElementsByTagName("tag");
    const isHospital = Array.from(tags).some(
      (tag) =>
        tag.getAttribute("k") === "amenity" &&
        tag.getAttribute("v") === "hospital"
    );

    if (isHospital) {
      const lat = parseFloat(node.getAttribute("lat"));
      const lon = parseFloat(node.getAttribute("lon"));
      const properties = {};

      Array.from(tags).forEach((tag) => {
        properties[tag.getAttribute("k")] = tag.getAttribute("v");
      });

      hospitals.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [lon, lat],
        },
        properties,
      });
    }
  });

  return {
    type: "FeatureCollection",
    features: hospitals,
  };
};

const FindHelp = () => {
  // Example OSM Data
  const osmData = `
  <osm>
    <node id="1697822274" visible="true" version="1" changeset="11154360" timestamp="2012-03-30T14:06:20Z" user="ishanagrawal90" uid="633796" lat="30.415724" lon="77.966109">
      <tag k="amenity" v="hospital"/>
      <tag k="emergency" v="yes"/>
      <tag k="name" v="Bidholi, Upes"/>
    </node>
  </osm>
  `;

  // Parse OSM XML into GeoJSON
  const geoJSON = parseAndFilterNodes(osmData);

  // Styles for centering and map dimensions
  const styles = {
    outerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // height: "100vh",
      
      backgroundColor: "#f0f0f0", // Optional background color for contrast
    },
    mapContainer: {
      height: "83vh",
      width: "90vw",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow for visual enhancement
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.mapContainer}>
        <MapContainer
          center={[30.415724, 77.966109]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          {/* Add OpenStreetMap Tiles */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />

          {/* Add Hospitals as GeoJSON */}
          <GeoJSON
            data={geoJSON}
            onEachFeature={(feature, layer) => {
              const name = feature.properties.name || "Unnamed Hospital";
              layer.bindPopup(`<b>${name}</b>`);
            }}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default FindHelp;



// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// // Fix for default icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// const parseOSM = (osmData) => {
//   const parser = new DOMParser();
//   const xmlDoc = parser.parseFromString(osmData, "text/xml");

//   const nodes = xmlDoc.getElementsByTagName("node");

//   const hospitals = [];
//   Array.from(nodes).forEach((node) => {
//     const tags = node.getElementsByTagName("tag");
//     const isHospital = Array.from(tags).some(
//       (tag) =>
//         tag.getAttribute("k") === "amenity" &&
//         tag.getAttribute("v") === "hospital"
//     );

//     if (isHospital) {
//       const lat = parseFloat(node.getAttribute("lat"));
//       const lon = parseFloat(node.getAttribute("lon"));
//       const properties = {};

//       Array.from(tags).forEach((tag) => {
//         properties[tag.getAttribute("k")] = tag.getAttribute("v");
//       });

//       hospitals.push({
//         type: "Feature",
//         geometry: {
//           type: "Point",
//           coordinates: [lon, lat],
//         },
//         properties,
//       });
//     }
//   });

//   return {
//     type: "FeatureCollection",
//     features: hospitals,
//   };
// };

// const FindHelp = () => {
//   const osmData = `
//   <osm>
//     <node id="1697822274" visible="true" lat="30.415724" lon="77.966109">
//       <tag k="amenity" v="hospital"/>
//       <tag k="name" v="Bidholi, Upes"/>
//     </node>
//   </osm>
//   `;

//   const geoJSON = parseOSM(osmData) || { type: "FeatureCollection", features: [] };

//   return (
//     <MapContainer center={[30.415724, 77.966109]} zoom={13} style={{ height: "100vh", width: "100%" }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution="© OpenStreetMap contributors"
//       />
//       {geoJSON.features.length > 0 ? (
//         geoJSON.features.map((feature, idx) => (
//           <Marker
//             key={idx}
//             position={[
//               feature.geometry.coordinates[1],
//               feature.geometry.coordinates[0],
//             ]}
//           >
//             <Popup>{feature.properties.name || "Unnamed Hospital"}</Popup>
//           </Marker>
//         ))
//       ) : (
//         <p>Loading hospitals...</p>
//       )}
//     </MapContainer>
//   );
// };

// export default FindHelp;


