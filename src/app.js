import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Love You Kusum ");
});

export { app };
