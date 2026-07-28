// import "./ForgotPassword.css";

// function ForgotPassword() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         fontSize: "30px",
//         fontWeight: "bold",
//       }}
//     >
//       Forgot Password Page
//     </div>
//   );
// } 

// export default ForgotPassword;


import "./ForgotPassword.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function ForgotPassword() {

  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const sendOTP = (e) => {

    e.preventDefault();

    setStep(2);

  };

  const verifyOTP = (e) => {

    e.preventDefault();

    setStep(3);

  };

  const resetPassword = (e) => {

    e.preventDefault();

    navigate("/login");

  };

  return (

    <section className="forgot-page">

      <div className="forgot-container">

        {/* Left */}

        <div className="forgot-left">

          <h1>Saiyed Travels</h1>

          <h2>Password Recovery</h2>

          <p>

            Forgot your password?

            Don't worry.

            Recover your account securely
            in just a few simple steps.

          </p>

        </div>

        {/* Right */}

        <div className="forgot-right">

          <div className="forgot-form">

            <h2>Forgot Password</h2>

            <p>

              Reset your account password.

            </p>

                        {/* Step 1 : Email */}

            {step === 1 && (

              <form onSubmit={sendOTP}>

                <div className="input-box">

                  <FaEnvelope className="input-icon" />

                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="forgot-btn"
                >
                  Send OTP
                </button>

              </form>

            )}

            {/* Step 2 : OTP */}

            {step === 2 && (

              <form onSubmit={verifyOTP}>

                <div className="input-box">

                  <input
                    type="text"
                    placeholder="Enter 6 Digit OTP"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value)
                    }
                    maxLength={6}
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="forgot-btn"
                >
                  Verify OTP
                </button>

              </form>

            )}

            {/* Step 3 : Reset Password */}

            {step === 3 && (

              <form onSubmit={resetPassword}>

                <div className="input-box">

                  <FaLock className="input-icon" />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="New Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
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

                <div className="input-box">

                  <FaLock className="input-icon" />

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                    required
                  />

                  <span
                    className="eye-icon"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </span>

                </div>

                <button
                  type="submit"
                  className="forgot-btn"
                >
                  Reset Password
                </button>

              </form>

            )}

            <p className="back-login">

              Remember your password?

              <Link to="/login">
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ForgotPassword;