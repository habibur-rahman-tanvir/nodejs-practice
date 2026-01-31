import express from "express";
import photoRoute from "./routes/photo.route.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/photo", photoRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
