import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
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
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Example OSM Data
  const osmData = `
  <osm>
  <node id="1697822274" visible="true" version="1" changeset="11154360" timestamp="2012-03-30T14:06:20Z" user="ishanagrawal90" uid="633796" lat="30.415724" lon="77.966109">
    <tag k="amenity" v="hospital"/>
    <tag k="emergency" v="yes"/>
    <tag k="name" v="Bidholi, Upes"/>
  </node>

  <node id="1697822274" visible="true" version="2" changeset="11154360" timestamp="2012-03-30T14:06:20Z" user="ishanagrawal90" uid="633796" lat="30.416960" lon="77.967672">
    <tag k="amenity" v="hospital"/>
    <tag k="emergency" v="yes"/>
    <tag k="name" v="INFIRMARY, Dehradun, Vikasnagar, Dehradun, Uttarakhand, 248007, India"/>
  </node>

  <node id="1697822274" visible="true" version="2" changeset="11154360" timestamp="2012-03-30T14:06:20Z" user="ishanagrawal90" uid="633796" lat="30.343074" lon="77.959601">
    <tag k="amenity" v="hospital"/>
    <tag k="emergency" v="yes"/>
    <tag k="name" v="SUBHARTI HOSPITAL, Nanda Ki Chowki to UPES, Kolhūpāni, Vikasnagar, Dehradun, Uttarakhand, 248001, India"/>
  </node>

  <node id="1697822274" visible="true" version="2" changeset="11154360" timestamp="2012-03-30T14:06:20Z" user="ishanagrawal90" uid="633796" lat="30.343748" lon="77.966484">
    <tag k="amenity" v="hospital"/>
    <tag k="emergency" v="yes"/>
    <tag k="name" v="Kotra, Vikasnagar, Dehradun, Uttarakhand, 248007, India"/>
  </node>
  <node id="1697822274" visible="true" version="2" changeset="11154360" timestamp="2012-03-30T14:06:20Z" user="ishanagrawal90" uid="633796" lat="30.346916" lon="77.966430">
    <tag k="amenity" v="hospital"/>
    <tag k="emergency" v="yes"/>
    <tag k="name" v="Kalhūpāni, Vikasnagar, Dehradun, Uttarakhand, 248007, India"/>
  </node>
  <node id="1697822274" visible="true" version="2" changeset="11154360" timestamp="2012-03-30T14:06:20Z" user="ishanagrawal90" uid="633796" lat="30.33780" lon="77.95943">
    <tag k="amenity" v="hospital"/>
    <tag k="emergency" v="yes"/>
    <tag k="name" v="Premnagar, Mohanpur, Dehradun, Uttarakhand, 248001, India"/>
  </node>
  <node id="1697822274" visible="true" version="2" changeset="11154360" timestamp="2012-03-30T14:06:20Z" user="ishanagrawal90" uid="633796" lat="30.33547" lon="77.96682">
    <tag k="amenity" v="hospital"/>
    <tag k="emergency" v="yes"/>
    <tag k="name" v="Premnagar, Dehradun, Uttarakhand, 248001, India"/>
  </node>
  <node id="1697822274" visible="true" version="2" changeset="11154360" timestamp="2012-03-30T14:06:20Z" user="ishanagrawal90" uid="633796" lat="30.33425" lon="77.96733">
    <tag k="amenity" v="hospital"/>
    <tag k="emergency" v="yes"/>
    <tag k="name" v="Premnagar, Dehradun, Uttarakhand, 248001, India"/>
  </node>
  </osm>
  `;

  // Parse OSM XML into GeoJSON
  const geoJSON = parseAndFilterNodes(osmData);

  // Toggle search box visibility
  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      {/* Search input and button */}
      <form className="fixed top-32 right-10 flex items-center bg-white rounded-lg px-3 py-2 border-b-4 border-[#73cdd0] z-50 gap-5">
        <button
          type="button"
          className="outline-none bg-white text-[#06284c]"
          >
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
        <input
          onClick={handleSearchClick}  // Handle the click event
          type="text"
          placeholder="Search here"
          className="input text-xl rounded-lg w-full bg-white placeholder:text-[#06284c] font-semibold"
        />
      </form>

      {/* Conditional rendering of the search result div */}
      {isSearchActive && (
        <div className="flex flex-col items-center fixed top-[calc(30vh)] right-10 w-[350px] h-[50vh] bg-white shadow-lg z-40 rounded-lg border-b-4 border-[#73cdd0] p-1">
          <div className="w-[100%] h-1/5 p-1 flex flex-row items-center gap-5 hover:bg-[#73cdd0] rounded-lg text-black">
            <div>
            <IoIosAddCircle className="w-6 h-6 outline-none" />
            </div>
            <div>
              <a>INFIRMARY, Dehradun</a>
            </div>
          </div>
          

        </div>
      )}

      {/* Map Container */}
      <div className="w-full h-[87vh] shadow-lg border-2 z-10">
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

<div jstcache="484" class="mNcDk bpLs1b" jsan="7.mNcDk,7.bpLs1b"> </div>

