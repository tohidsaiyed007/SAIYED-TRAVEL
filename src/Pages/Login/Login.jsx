import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    navigate("/");

  };

  return (

    <section className="login-page">

      <div className="login-container">

        {/* Left Side */}

        <div className="login-left">

          <h1>Saiyed Travels</h1>

          <h2>
            Welcome Back!
          </h2>

          <p>

            Book flights across India with the
            best fares, exclusive offers and
            secure payment experience.

          </p>

        </div>

        {/* Right Side */}

        <div className="login-right">

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

            <h2>Login</h2>

            <p>

              Login to continue your journey.

            </p>

                        {/* Email */}

            <div className="input-box">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            {/* Password */}

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>

            </div>

            {/* Remember + Forgot */}

            <div className="login-options">

              <label>

                <input type="checkbox" />

                Remember Me

              </label>

              <Link
                to="/forgot-password"
                className="forgot-link"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Login */}

            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            {/* Social Login */}

            <button
              type="button"
              className="google-btn"
            >
              <FaGoogle />
              Continue with Google
            </button>

            <button
              type="button"
              className="facebook-btn"
            >
              <FaFacebookF />
              Continue with Facebook
            </button>

            <p className="signup-text">

              Don't have an account?

              <Link to="/signup">
                Sign Up
              </Link>

            </p>

          </form>

        </div>

      </div>

    </section>

  );

}

export default Login;