import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./routes/post.routes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(postRoutes);

const start = async () => {
  const connectDb = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("mongodb connected");

  app.listen(9090, () => {
    console.log("Server is running on port 9090");
  });
};
start();
