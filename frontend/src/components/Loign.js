import React from "react";
import logo from "./logo.png";

const Login = () => {
  return (
    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm p-4">
              <div className="card-body">
                <div className="text-center mb-3">
                  <a href="#!">
                    <img src={logo} alt="Logo" width="175" height="57" />
                  </a>
                </div>
                <h2 className="fs-5 fw-bold text-center text-secondary mb-4">
                  Sign into your account
                </h2>
                <form action="#!">
                  <div className="row g-3">
                    {/* Email Field */}
                    <div className="col-12 d-flex align-items-center  mb-3">
                      <label htmlFor="email" className="col-4 fw-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required
                      />
                    </div>

                    {/* Password Field */}
                    <div className="col-12 d-flex align-items-center  mb-3">
                      <label htmlFor="password" className="col-4 fw-semibold">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="col-12 d-flex justify-content-between  mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label text-secondary"
                          htmlFor="rememberMe"
                        >
                          Keep me logged in
                        </label>
                      </div>
                      <a
                        href="#!"
                        className="link-primary text-decoration-none"
                      >
                        Forgot password?
                      </a>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12  mb-3">
                      <button
                        className="btn btn-primary w-100 py-2 "
                        type="submit"
                      >
                        Log in
                      </button>
                    </div>

                    {/* Sign Up Link */}
                    <div className="col-12 text-center">
                      <p className="text-secondary m-0">
                        Don't have an account?{" "}
                        <a
                          href="#!"
                          className="link-primary text-decoration-none"
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
