const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  db.query("Select * from zerowaste", (error, result) => {
    console.log(result);
  });
  res.send("utama");
});

app.get("/ambil", (req, res) => {
  res.send("utama");
});

app.post("/kirim", (req, res) => {
  console.log({ Mengirim: req.body });
  res.send("berhasil");
});

app.listen(port, () => {
  console.log(`example app listening in port ${port}`);
});
