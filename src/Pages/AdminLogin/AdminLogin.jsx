import "./AdminLogin.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  FaPlaneDeparture,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
} from "react-icons/fa";

function AdminLogin() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!formData.email || !formData.password) {

      setError("Please enter email and password.");

      return;

    }

    /*
      TEMPORARY FRONTEND LOGIN

      Backend + MongoDB + JWT baad me connect karenge.
    */

    if (
      formData.email === "admin@saiyedtravels.com" &&
      formData.password === "admin123"
    ) {

      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      localStorage.setItem(
        "adminEmail",
        formData.email
      );

      navigate("/dashboard");

    } else {

      setError(
        "Invalid admin email or password."
      );

    }

  };

  return (

    <div className="admin-login-page">

      {/* ================= LEFT SIDE ================= */}

      <div className="admin-login-left">

        <div className="admin-brand">

          <div className="admin-logo">

            <FaPlaneDeparture />

          </div>

          <h1>
            Saiyed <span>Travels</span>
          </h1>

        </div>

        <div className="admin-welcome">

          <FaShieldAlt className="shield-icon" />

          <h2>
            Admin Portal
          </h2>

          <p>
            Manage flights, bookings, customers,
            payments and your entire travel
            management system from one place.
          </p>

        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div className="admin-login-right">

        <div className="admin-login-card">

          <div className="admin-login-header">

            <div className="mobile-admin-icon">

              <FaShieldAlt />

            </div>

            <h2>
              Admin Login
            </h2>

            <p>
              Sign in to access the admin dashboard
            </p>

          </div>


          {/* ================= ERROR ================= */}

          {error && (

            <div className="admin-error">

              {error}

            </div>

          )}


          {/* ================= FORM ================= */}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}

            <div className="admin-form-group">

              <label>
                Admin Email
              </label>

              <div className="admin-input-box">

                <FaEnvelope />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@saiyedtravels.com"
                  autoComplete="email"
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="admin-form-group">

              <label>
                Password
              </label>

              <div className="admin-input-box">

                <FaLock />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter admin password"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >

                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}

                </button>

              </div>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="admin-login-btn"
            >

              <FaShieldAlt />

              Login to Dashboard

            </button>

          </form>


          {/* ================= BACK ================= */}

          <div className="admin-login-footer">

            <Link to="/login">
              ← Back to Customer / Agent Login
            </Link>

          </div>


          {/* ================= TEMP INFO ================= */}

          <div className="admin-demo-info">

            <strong>
              Development Login
            </strong>

            <span>
              Email: admin@saiyedtravels.com
            </span>

            <span>
              Password: admin123
            </span>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminLogin;