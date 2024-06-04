const mysql = require("mysql2/promise");

const Db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "zerowaste",
});

async function testConnection() {
  try {
    await Db.getConnection();
    console.log("Koneksi ke database berhasil!!!");
  } catch (error) {
    console.log("koneksi gagal", error);
  }
}
async function query(query, value) {
  try {
    const [excekuteQuery] = await Db.query(query, value ?? []);
    return excekuteQuery;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  query,
  testConnection,
};
