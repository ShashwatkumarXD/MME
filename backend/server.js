// These are our package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// These are file imports
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
// import placesRouter from "./routes/places.js";

// Variables
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// Middleware
app.use(express.json()); // This will allow us to extract fields from the request body
app.use(cookieParser());

// Routes

// Start the server
app.listen(PORT, async () => {
  await connectToMongoDB(); // Connect to MongoDB
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes); // The correct route to use for user-related API
// app.use("/api", placesRouter);