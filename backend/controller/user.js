const { query } = require("../database/connection");

const register = async (req, res) => {
  const { email, password, tlp, alamat } = req.body;
  try {
    await query(
      "INSERT into users (email, password, nomor_telepon, alamat) VALUES (?, ?, ?, ?)",
      [email, password, tlp, alamat]
    );
    return res.status(200).json({
      message: "Add user is success",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something wrong",
      error,
    });
  }
};

module.exports = {
  register,
};
