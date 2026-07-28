import "./Signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";

function Signup() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSignup = (e) => {

    e.preventDefault();

    navigate("/login");

  };

  return (

    <section className="signup-page">

      <div className="signup-container">

        {/* Left Side */}

        <div className="signup-left">

          <h1>Saiyed Travels</h1>

          <h2>Create Your Account</h2>

          <p>

            Join Saiyed Travels and book flights
            with the best fares, secure payments,
            and exclusive travel offers.

          </p>

          <div className="signup-features">

            <p>✔ Lowest Flight Fares</p>

            <p>✔ Secure Online Payments</p>

            <p>✔ Instant Booking Confirmation</p>

            <p>✔ 24×7 Customer Support</p>

          </div>

        </div>

        {/* Right Side */}

        <div className="signup-right">

          <form
            className="signup-form"
            onSubmit={handleSignup}
          >

            <h2>Create Account</h2>

            <p>

              Fill your details to continue.

            </p>


                        {/* Name */}

            <div className="name-row">

              <div className="input-box">

                <FaUser className="input-icon" />

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="input-box">

                <FaUser className="input-icon" />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Email */}

            <div className="input-box">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            {/* Phone */}

            <div className="input-box">

              <FaPhoneAlt className="input-icon" />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>

            {/* Password */}

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

            {/* Confirm Password */}

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>

            </div>

            {/* Terms */}

            <div className="terms-box">

              <label>

                <input type="checkbox" required />

                I agree to the
                <Link to="/terms"> Terms & Conditions</Link>

              </label>

            </div>

            {/* Signup Button */}

            <button
              type="submit"
              className="signup-btn"
            >
              Create Account
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            {/* Google */}

            <button
              type="button"
              className="google-btn"
            >
              <FaGoogle />
              Continue with Google
            </button>

            {/* Facebook */}

            <button
              type="button"
              className="facebook-btn"
            >
              <FaFacebookF />
              Continue with Facebook
            </button>

            <p className="login-text">

              Already have an account?

              <Link to="/login">
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </section>

  );

}

export default Signup;