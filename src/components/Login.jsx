function Login() {
  return (
    <>
      <div
        className="limiter"
        style={{ width: "60%", marginTop: "10%", marginBottom: "10%" }}
      >
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-43">
                <b>Login</b>
                <br />
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: "1.7",
                    color: "#666666",
                    margin: 0,
                    fontFamily: "Poppins-Regular",
                  }}
                >
                  Please enter your login details ton start having fun!
                </p>
              </span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input className="input100" type="text" name="email" />
                <span className="focus-input100" />
                <span className="label-input100">Email</span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input className="input100" type="password" name="pass" />
                <span className="focus-input100" />
                <span className="label-input100">Password</span>
              </div>
              <div className="flex-sb-m w-full p-t-3 p-b-32">
                <div className="contact100-form-checkbox">
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Ingat informasi saya
                  </label>
                </div>
                <div>
                  <a href="#" className="txt1">
                    <b>Lupa password?</b>
                  </a>
                </div>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Login</button>
              </div>
              <div className="text-center p-t-46 p-b-20">
                <span className="txt2">
                  Tidak mempunyai akun?
                  <a href="/register">
                    <b style={{ color: "#309434" }}> Sign up</b>
                  </a>
                </span>
              </div>
              <div className="text-center p-t-0 p-b-10">
                <span className="txt3">
                  ----------------Atau lanjut dengan--------------------
                </span>
              </div>
              <div className="login100-form-social flex-c-m">
                <a
                  href="#"
                  className="login100-form-social-item flex-c-m bg1 m-r-5"
                >
                  <i className="fa fa-facebook-f" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="login100-form-social-item flex-c-m bg2 m-r-5"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="login100-form-social-item flex-c-m bg2 m-r-5"
                >
                  <i className="fa fa-google" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="login100-form-social-item flex-c-m bg2 m-r-5"
                >
                  <i className="fa fa-apple" aria-hidden="true" />
                </a>
              </div>
            </form>
            <div
              className="login100-more"
              style={{
                backgroundImage: 'url("assets/Login/images/bglogin.png")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
