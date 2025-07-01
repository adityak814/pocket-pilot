import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import pool from "./libs/db.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-v1", routes);

// Test route
// app.get("/test-db", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     res.json({ message: "DB connected", time: result.rows[0] });
//   } catch (err) {
//     console.error("DB connection failed:", err.message);
//     res.status(500).json({ error: "DB connection failed" });
//   }
// });

// app.use("/", (req, res) => {
//   res.status(404).json({
//     status: "404 not found",
//     message: "route not found",
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
