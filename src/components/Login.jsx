function Login() {
  return (
    <>
      <div className="container-login">
        {/* kiri */}
        <div className="left-section" data-aos="fade-right"></div>
        {/* end kiri */}
        {/* kanan */}
        <div className="right-section" data-aos="fade-left">
          <div className="content-box">
            <div className="header-login">
              <h1 className="h1-login">Login</h1>
              <h4 className="h4-login">
                Silahkan masuk ke akun ZeroWaste Anda!
              </h4>
            </div>
            <div className="input-group">
              <input type="email" className="input-field" placeholder="Email" />
            </div>
            <div className="input-group">
              <input
                type="password"
                className="input-field"
                placeholder="Kata Sandi"
              />
            </div>
            <div className="button-group">
              <button className="login-button">
                <a className="login-button" href="/Beranda">
                  Masuk Sekarang
                </a>
              </button>
            </div>
            <div className="register-page">
              <p>Tidak punya akun?</p>
              <a href="/registerpage">Register</a>
            </div>
          </div>
        </div>
        {/* end kanan */}
      </div>
    </>
  );
}

export default Login;
