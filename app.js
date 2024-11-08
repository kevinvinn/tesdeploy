if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Kevin");
});

app.listen(PORT, () => {
  console.log(`Aku tresno ${PORT}`);
});
