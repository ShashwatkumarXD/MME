import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/places", async (req, res) => {
  const { lat, lon, type } = req.query;

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
      {
        params: {
          location: `${lat},${lon}`,
          radius: 5000,
          type: type, // Specify `hospital` or custom category
          key: "YOUR_GOOGLE_API_KEY",
        },
      }
    );
    const places = response.data.results.map((place) => ({
      name: place.name,
      latitude: place.geometry.location.lat,
      longitude: place.geometry.location.lng,
    }));
    res.json(places);
  } catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).json({ error: "Unable to fetch places" });
  }
});

export default router;
