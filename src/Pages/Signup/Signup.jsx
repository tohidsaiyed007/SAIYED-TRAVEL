import "./Signup.css";

import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
  FaBuilding,
  FaCity,
  FaMapMarkerAlt,
  FaIdCard,
} from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();

  // ==========================================
  // STATES
  // ==========================================

  const [accountType, setAccountType] =
    useState("customer");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    agencyName: "",
    city: "",
    state: "",
    gstNumber: "",

    password: "",
    confirmPassword: "",
  });

  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  // ==========================================
  // CHANGE ACCOUNT TYPE
  // ==========================================

  const changeAccountType = (type) => {
    setAccountType(type);
    setError("");
    setSuccess("");
  };

  // ==========================================
  // VALIDATION
  // ==========================================

  const validateForm = () => {
    const firstName =
      formData.firstName.trim();

    const lastName =
      formData.lastName.trim();

    const email =
      formData.email.trim();

    const phone =
      formData.phone.trim();

    const password =
      formData.password;

    const confirmPassword =
      formData.confirmPassword;

    // ------------------------------------------
    // COMMON
    // ------------------------------------------

    if (!firstName) {
      setError("Please enter First Name.");
      return false;
    }

    if (!lastName) {
      setError("Please enter Last Name.");
      return false;
    }

    if (!email) {
      setError("Please enter Email Address.");
      return false;
    }

    // Simple email check
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError(
        "Please enter a valid email address."
      );
      return false;
    }

    if (!phone) {
      setError(
        "Please enter Mobile Number."
      );
      return false;
    }

    const cleanPhone =
      phone.replace(/\D/g, "");

    if (
      cleanPhone.length < 10
    ) {
      setError(
        "Please enter a valid mobile number."
      );
      return false;
    }

    if (!password) {
      setError(
        "Please enter Password."
      );
      return false;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return false;
    }

    if (!confirmPassword) {
      setError(
        "Please confirm your password."
      );
      return false;
    }

    if (
      password !==
      confirmPassword
    ) {
      setError(
        "Password and Confirm Password do not match."
      );
      return false;
    }

    // ------------------------------------------
    // AGENT
    // ------------------------------------------

    if (
      accountType === "agent"
    ) {
      if (
        !formData.agencyName.trim()
      ) {
        setError(
          "Please enter Agency Name."
        );
        return false;
      }

      if (
        !formData.city.trim()
      ) {
        setError(
          "Please enter City."
        );
        return false;
      }

      if (
        !formData.state.trim()
      ) {
        setError(
          "Please enter State."
        );
        return false;
      }
    }

    return true;
  };

  // ==========================================
  // SIGNUP
  // ==========================================

  const handleSignup = async (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setError("");
    setSuccess("");

    // ------------------------------------------
    // VALIDATE
    // ------------------------------------------

    const isValid =
      validateForm();

    if (!isValid) {
      return;
    }

    // ------------------------------------------
    // REQUEST
    // ------------------------------------------

    try {
      setLoading(true);

      const payload = {
        firstName:
          formData.firstName.trim(),

        lastName:
          formData.lastName.trim(),

        email:
          formData.email
            .trim()
            .toLowerCase(),

        phone:
          formData.phone.trim(),

        password:
          formData.password,

        role:
          accountType,

        agencyName:
          accountType === "agent"
            ? formData.agencyName.trim()
            : "",

        city:
          accountType === "agent"
            ? formData.city.trim()
            : "",

        state:
          accountType === "agent"
            ? formData.state.trim()
            : "",

        gstNumber:
          accountType === "agent"
            ? formData.gstNumber.trim()
            : "",
      };

      console.log(
        "SIGNUP PAYLOAD:",
        payload
      );

      const response =
        await fetch(
          "https://saiyed-travels-backend-1.onrender.com/api/auth/signup",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(payload),
          }
        );

      let data = {};

      try {
        data =
          await response.json();
      } catch {
        data = {};
      }

      console.log(
        "SIGNUP RESPONSE:",
        data
      );

      if (!response.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            `Unable to create account. Status: ${response.status}`
        );
      }

      // ------------------------------------------
      // SUCCESS
      // ------------------------------------------

      setSuccess(
        accountType === "agent"
          ? "Agent account created successfully! Redirecting to login..."
          : "Account created successfully! Redirecting to login..."
      );

      // ------------------------------------------
      // CLEAR FORM
      // ------------------------------------------

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",

        agencyName: "",
        city: "",
        state: "",
        gstNumber: "",

        password: "",
        confirmPassword: "",
      });

      // ------------------------------------------
      // LOGIN PAGE
      // ------------------------------------------

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      console.error(
        "Signup Error:",
        error
      );

      setError(
        error.message ||
          "Unable to connect to server. Please make sure backend is running."
      );

    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // JSX
  // ==========================================

  return (
    <section className="signup-page">

      <div className="signup-container">

        {/* ======================================
            LEFT SIDE
        ====================================== */}

        <div className="signup-left">

          <h1>
            Saiyed Travels
          </h1>

          <h2>
            {accountType === "customer"
              ? "Create Customer Account"
              : "Register as Travel Agent"}
          </h2>

          <p>
            {accountType === "customer"
              ? "Book flights for yourself and your family with the best fares, secure payments and instant confirmation."
              : "Register as an authorised travel agent and book tickets for your customers using your own agent account."}
          </p>

          <div className="signup-features">

            <p>
              ✔ Lowest Flight Fares
            </p>

            <p>
              ✔ Secure Online Payments
            </p>

            <p>
              ✔ Instant Booking Confirmation
            </p>

            <p>
              ✔ 24×7 Customer Support
            </p>

            {accountType === "agent" && (
              <>
                <p>
                  ✔ Agent Dashboard
                </p>

                <p>
                  ✔ Customer Booking Management
                </p>
              </>
            )}

          </div>

        </div>

        {/* ======================================
            RIGHT SIDE
        ====================================== */}

        <div className="signup-right">

          <form
            className="signup-form"
            onSubmit={handleSignup}
            noValidate
          >

            <h2>
              Create Account
            </h2>

            <p>
              Fill your details to continue.
            </p>

            {/* =================================
                ERROR
            ================================= */}

            {error && (
              <div className="signup-error">
                {error}
              </div>
            )}

            {/* =================================
                SUCCESS
            ================================= */}

            {success && (
              <div className="signup-success">
                {success}
              </div>
            )}

            {/* =================================
                ACCOUNT TYPE
            ================================= */}

            <div className="account-type">

              <h3>
                Select Account Type
              </h3>

              <div className="account-options">

                {/* CUSTOMER */}

                <button
                  type="button"
                  className={`account-card ${
                    accountType === "customer"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    changeAccountType(
                      "customer"
                    )
                  }
                >

                  <FaUser
                    className="account-icon"
                  />

                  <h4>
                    Customer
                  </h4>

                  <p>
                    Book flights for yourself
                    & family
                  </p>

                </button>

                {/* AGENT */}

                <button
                  type="button"
                  className={`account-card ${
                    accountType === "agent"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    changeAccountType(
                      "agent"
                    )
                  }
                >

                  <FaBuilding
                    className="account-icon"
                  />

                  <h4>
                    Travel Agent
                  </h4>

                  <p>
                    Book tickets for your
                    customers
                  </p>

                </button>

              </div>

            </div>

            {/* =================================
                NAME
            ================================= */}

            <div className="name-row">

              {/* FIRST NAME */}

              <div className="input-box">

                <FaUser
                  className="input-icon"
                />

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={
                    formData.firstName
                  }
                  onChange={
                    handleChange
                  }
                  autoComplete="given-name"
                />

              </div>

              {/* LAST NAME */}

              <div className="input-box">

                <FaUser
                  className="input-icon"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={
                    formData.lastName
                  }
                  onChange={
                    handleChange
                  }
                  autoComplete="family-name"
                />

              </div>

            </div>

            {/* =================================
                AGENT FIELDS
            ================================= */}

            {accountType === "agent" && (
              <>

                {/* AGENCY */}

                <div className="input-box">

                  <FaBuilding
                    className="input-icon"
                  />

                  <input
                    type="text"
                    name="agencyName"
                    placeholder="Agency Name"
                    value={
                      formData.agencyName
                    }
                    onChange={
                      handleChange
                    }
                    autoComplete="organization"
                  />

                </div>

                {/* CITY + STATE */}

                <div className="name-row">

                  <div className="input-box">

                    <FaCity
                      className="input-icon"
                    />

                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={
                        formData.city
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="address-level2"
                    />

                  </div>

                  <div className="input-box">

                    <FaMapMarkerAlt
                      className="input-icon"
                    />

                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={
                        formData.state
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="address-level1"
                    />

                  </div>

                </div>

                {/* GST */}

                <div className="input-box">

                  <FaIdCard
                    className="input-icon"
                  />

                  <input
                    type="text"
                    name="gstNumber"
                    placeholder="GST Number (Optional)"
                    value={
                      formData.gstNumber
                    }
                    onChange={
                      handleChange
                    }
                  />

                </div>

              </>
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
                name="email"
                placeholder="Email Address"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                autoComplete="email"
              />

            </div>

            {/* =================================
                PHONE
            ================================= */}

            <div className="input-box">

              <FaPhoneAlt
                className="input-icon"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={
                  formData.phone
                }
                onChange={
                  handleChange
                }
                autoComplete="tel"
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
                name="password"
                placeholder="Create Password"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                autoComplete="new-password"
              />

              <button
                type="button"
                className="eye-icon"
                onClick={() =>
                  setShowPassword(
                    (prev) => !prev
                  )
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {/* =================================
                CONFIRM PASSWORD
            ================================= */}

            <div className="input-box">

              <FaLock
                className="input-icon"
              />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Confirm Password"
                value={
                  formData.confirmPassword
                }
                onChange={
                  handleChange
                }
                autoComplete="new-password"
              />

              <button
                type="button"
                className="eye-icon"
                onClick={() =>
                  setShowConfirmPassword(
                    (prev) => !prev
                  )
                }
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {/* =================================
                TERMS
            ================================= */}

            <div className="terms-box">

              <label>

                <input
                  type="checkbox"
                  name="terms"
                  required
                />

                I agree to

                <Link to="/terms">
                  {" "}Terms & Conditions
                </Link>

              </label>

            </div>

            {/* =================================
                SIGNUP BUTTON
            ================================= */}

            <button
              type="submit"
              className="signup-btn"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : accountType === "customer"
                ? "Create Account"
                : "Register as Agent"}
            </button>

            {/* =================================
                SOCIAL LOGIN
            ================================= */}

            <div className="divider">
              <span>
                OR
              </span>
            </div>

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

            {/* =================================
                LOGIN
            ================================= */}

            <p className="login-text">

              Already have an account?

              <Link to="/login">
                {" "}Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Signup;