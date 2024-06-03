const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./database/connection");
const dotenv = require("dotenv");
const indexrouth = require("./routing/authuser");

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use(indexrouth);

// app.get("/", (req, res) => {
//   db.query("SELECT * FROM users", (error, result) => {
//     console.log(result);
//   });
//   res.send("utama");
// });

// app.get("/ambil", (req, res) => {
//   res.send("utama");
// });

// app.post("/kirim", (req, res) => {
//   console.log({ Mengirim: req.body });
//   res.send("berhasil");
// });

app.listen(port, () => {
  console.log(`example app listening in port ${port}`);
});
