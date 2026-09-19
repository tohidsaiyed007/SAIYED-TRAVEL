
import "./Login.css";

import {
  useState,
} from "react";

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaUserTie,
  FaShieldAlt,
} from "react-icons/fa";

function Login() {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  // ==========================================
  // STATES
  // ==========================================

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loginType, setLoginType] =
    useState("customer");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // ==========================================
  // SAVE LOGIN + REDIRECT
  // ==========================================

  const saveLoginAndRedirect = (
    data
  ) => {

    // ========================================
    // TOKEN
    // ========================================

    localStorage.setItem(
      "token",
      data.token
    );

    // ========================================
    // USER
    // ========================================

    localStorage.setItem(
      "user",
      JSON.stringify(
        data.user
      )
    );

    // ========================================
    // ROLE
    // ========================================

    localStorage.setItem(
      "userRole",
      data.user.role
    );

    // ========================================
    // USER ID
    // ========================================

    const userId =
      data.user?._id ||
      data.user?.id ||
      data.user?.userId;

    if (userId) {
      localStorage.setItem(
        "userId",
        String(userId)
      );
    }

    // ========================================
    // BOOKING REDIRECT
    // ========================================

    if (
      location.state?.from ===
      "/booking"
    ) {

      navigate(
        "/booking",
        {
          state:
            location.state
              .bookingState,

          replace: true,
        }
      );

      return;
    }

    // ========================================
    // NORMAL REDIRECT
    // ========================================

    if (
      data.user.role ===
      "admin"
    ) {

      navigate(
        "/dashboard",
        {
          replace: true,
        }
      );

    } else {

      navigate(
        "/",
        {
          replace: true,
        }
      );
    }
  };

  // ==========================================
  // LOGIN
  // ==========================================

  const handleLogin =
    async (
      e
    ) => {

      e.preventDefault();

      setError("");

      // ======================================
      // VALIDATION
      // ======================================

      if (
        !email.trim() ||
        !password
      ) {

        setError(
          "Please enter your email and password."
        );

        return;
      }

      // ======================================
      // EMAIL
      // ======================================

      const cleanEmail =
        email
          .trim()
          .toLowerCase();

      try {

        setLoading(true);

        // ====================================
        // BACKEND
        // ====================================

        const response =
          await fetch(
            "https://saiyed-travels-backend-1.onrender.com/api/auth/login",
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify({
                  email:
                    cleanEmail,

                  password,

                  loginType,
                }),
            }
          );

        const data =
          await response.json();

        // ====================================
        // ERROR
        // ====================================

        if (
          !response.ok
        ) {

          setError(
            data.message ||
              "Login failed."
          );

          return;
        }

        // ====================================
        // USER
        // ====================================

        if (
          !data.user
        ) {

          setError(
            "User information was not received from server."
          );

          return;
        }

        // ====================================
        // TOKEN
        // ====================================

        if (
          !data.token
        ) {

          setError(
            "Login token was not received from server."
          );

          return;
        }

        // ====================================
        // SAVE + REDIRECT
        // ====================================

        saveLoginAndRedirect(
          data
        );

      } catch (error) {

        console.error(
          "Login Error:",
          error
        );

        setError(
          "Unable to connect to server. Please make sure backend is running."
        );

      } finally {

        setLoading(
          false
        );
      }
    };

  // ==========================================
  // CHANGE LOGIN TYPE
  // ==========================================

  const changeLoginType =
    (
      type
    ) => {

      setLoginType(
        type
      );

      setError("");
    };

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <section className="login-page">

      <div className="login-container">

        {/* ==================================
            LEFT SIDE
        ================================== */}

        <div className="login-left">

          <h1>
            Saiyed Travels
          </h1>

          <h2>
            Welcome Back!
          </h2>

          <p>
            Book flights across India with the
            best fares, exclusive offers and
            secure payment experience.
          </p>

        </div>

        {/* ==================================
            RIGHT SIDE
        ================================== */}

        <div className="login-right">

          <form
            className="login-form"
            onSubmit={
              handleLogin
            }
          >

            <h2>
              Login
            </h2>

            <p>
              Login to continue your journey.
            </p>

            {/* =================================
                LOGIN TYPE
            ================================= */}

            <div className="login-type-section">

              <label className="login-type-label">
                Login As
              </label>

              <div className="login-type-options">

                {/* CUSTOMER */}

                <button
                  type="button"
                  className={`login-type-btn ${
                    loginType ===
                    "customer"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    changeLoginType(
                      "customer"
                    )
                  }
                >

                  <FaUser />

                  <span>
                    Customer
                  </span>

                </button>

                {/* AGENT */}

                <button
                  type="button"
                  className={`login-type-btn ${
                    loginType ===
                    "agent"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    changeLoginType(
                      "agent"
                    )
                  }
                >

                  <FaUserTie />

                  <span>
                    Travel Agent
                  </span>

                </button>

                {/* ADMIN */}

                <button
                  type="button"
                  className={`login-type-btn ${
                    loginType ===
                    "admin"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    changeLoginType(
                      "admin"
                    )
                  }
                >

                  <FaShieldAlt />

                  <span>
                    Admin
                  </span>

                </button>

              </div>
            </div>

            {/* =================================
                ERROR
            ================================= */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* =================================
                EMAIL
            ================================= */}

            <div className="input-box">

              <FaEnvelope
                className="input-icon"
              />

              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(
                  e
                ) =>
                  setEmail(
                    e.target.value
                  )
                }
                autoComplete="email"
                required
              />

            </div>

            {/* =================================
                PASSWORD
            ================================= */}

            <div className="input-box">

              <FaLock
                className="input-icon"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter Password"
                value={password}
                onChange={(
                  e
                ) =>
                  setPassword(
                    e.target.value
                  )
                }
                autoComplete="current-password"
                required
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >

                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}

              </span>

            </div>

            {/* =================================
                REMEMBER + FORGOT
            ================================= */}

            <div className="login-options">

              <label>

                <input
                  type="checkbox"
                />

                Remember Me

              </label>

              <Link
                to="/forgot-password"
                className="forgot-link"
              >
                Forgot Password?
              </Link>

            </div>

            {/* =================================
                LOGIN BUTTON
            ================================= */}
{/* 
            <button
              type="submit"
              className="login-btn"
              disabled={
                loading
              }
            >

              {loading
                ? "Logging in..."
                : `Login as ${
                    loginType ===
                    "customer"
                      ? "Customer"
                      : loginType ===
                        "agent"
                      ? "Travel Agent"
                      : "Admin"
                  }`
              }

            </button> */}

            <button
  type="submit"
  className="login-btn"
  disabled={loading}
  style={{
    display: "flex",
    width: "100%",
    height: "50px",
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0px",
    marginBottom: "0px",
    padding: "0 15px",
    backgroundColor: "#0d6efd",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 650,
    cursor: loading ? "not-allowed" : "pointer",
    position: "relative",
    zIndex: 9999,
    visibility: "visible",
    opacity: 1,
  }}
>
  {loading
    ? "Logging in..."
    : `Login as ${
        loginType === "customer"
          ? "Customer"
          : loginType === "agent"
          ? "Travel Agent"
          : "Admin"
      }`}
</button>

            {/* =================================
                CUSTOMER MESSAGE
            ================================= */}

            {loginType ===
              "customer" && (

              <p className="signup-text">
                New customer? Enter your email and
                password to create your account
                automatically.
              </p>

            )}

            {/* =================================
                AGENT SIGNUP
            ================================= */}

            {loginType ===
              "agent" && (

              <p className="signup-text">

                Don't have an agent account?

                <Link
                  to="/signup"
                >
                  Sign Up
                </Link>

              </p>

            )}

            {/* =================================
                ADMIN NOTE
            ================================= */}

            {loginType ===
              "admin" && (

              <div className="admin-login-note">

                <FaShieldAlt />

                <span>
                  Admin access is restricted to
                  authorized Saiyed Travels staff.
                </span>

              </div>

            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Login;