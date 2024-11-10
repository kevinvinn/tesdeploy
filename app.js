if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/coba", (req, res) => {
  res.send("Hello, Kevin");
});

app.post("/register", async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    res.status(200).json({ message: "berhasil brok" });
  } catch (error) {
    res.status(400).json({ message: "gagal brok" });
  }
});

app.listen(PORT, () => {
  console.log(`Aku tresno ${PORT} brok`);
});
