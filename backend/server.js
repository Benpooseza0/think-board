import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./src/config/db.js";
import rateLimit from "./src/middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ตั้งค่า Express ให้สามารถรับ JSON ได้
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}))


app.use(rateLimit); // ใช้ middleware rate limiter

app.use("/api/notes", notesRoutes);

connectDB().then(() =>
  app.listen(5000, () => {
    console.log("Server is running!");
  }),
);

// mongodb+srv://benpooseza15_db_user:QPHHSBUw3z6mlmix@cluster0.6brcvoa.mongodb.net/?appName=Cluster0
