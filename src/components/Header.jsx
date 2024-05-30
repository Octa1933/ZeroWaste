import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="" className="logo d-flex align-items-center">
            <h1>ZeroWaste</h1>
          </a>
          <nav className="navbar" style={{ marginRight: "40%" }}>
            <ul>
              <li>
                <a href="/beranda">Beranda</a>
              </li>
              <li>
                <a href="/tentang">Tentang Kami</a>
              </li>
              <li>
                <a href="/layanan">Layanan</a>
              </li>
              <li>
                <a href="/berita">Berita</a>
              </li>
              {/* <a
                href="#about"
                className="buttonpickup"
                style={{ color: "#309434" }}
              >
                Request Pickup
              </a> */}
              <button
                className="buttonpickup"
                onClick={() => navigate("/loginpage")}
              >
                Masuk
              </button>
              {/* <a href="login.html" className="buttonsign">
                Hallo, Sign Disini!
              </a> */}
            </ul>
          </nav>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        </div>
      </header>
    </>
  );
}

export default Header;
