const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { testConnection } = require("./database/connection");
const dotenv = require("dotenv");
dotenv.config();
const indexrouth = require("./routing/index");

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use(indexrouth);

app.listen(port, async () => {
  await testConnection();
  console.log(`example app listening in  http://localhost:${port}`);
});
