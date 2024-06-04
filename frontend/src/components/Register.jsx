import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tlp, setTlp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [output, setOutput] = useState([]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const respond = await axios.post(
        "http://localhost:3000/api/v1/register",
        {
          email,
          password,
          tlp,
          alamat,
        }
      );
      setOutput(respond.data);
      setEmail("");
      setPassword("");
      setTlp("");
      setAlamat("");
      console.log(respond.data);
      setTimeout(() => {
        navigate("/beranda");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form>
        <div className="container-login">
          {/* kiri */}
          <div className="left-section" data-aos="fade-right"></div>
          {/* end kiri */}
          {/* kanan */}
          <div className="right-section" data-aos="fade-left">
            <div className="content-box">
              <div className="header-login">
                <h1 className="h1-login">Register</h1>
                <h4 className="h4-login">Silahkan buat akun ZeroWaste Anda!</h4>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="input-field"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Nomor telepon"
                  value={tlp}
                  onChange={(e) => setTlp(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Alamat"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
              <div className="button-group">
                <button className="login-button" onClick={handleRegister}>
                  Register
                </button>
              </div>
              <div className="register-page">
                <p>Sudah punya akun?</p>
                <a href="/loginpage">Login</a>
              </div>
            </div>
          </div>
          {/* end kanan */}
        </div>
      </form>
    </>
  );
}

export default Register;
