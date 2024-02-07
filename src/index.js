// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import { app } from "./app.js";

import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `⚙️ Server is running at port : http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (mongoError) {
    console.error("Error connecting to MongoDB:", mongoError.message);
  }

  app.on("error", (expressError) => {
    console.error("Express app error:", expressError.message);
  });
})();
*/
