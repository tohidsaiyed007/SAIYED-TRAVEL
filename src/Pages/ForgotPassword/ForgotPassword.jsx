// // // // import "./ForgotPassword.css";

// // // // function ForgotPassword() {
// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         display: "flex",
// // // //         justifyContent: "center",
// // // //         alignItems: "center",
// // // //         height: "100vh",
// // // //         fontSize: "30px",
// // // //         fontWeight: "bold",
// // // //       }}
// // // //     >
// // // //       Forgot Password Page
// // // //     </div>
// // // //   );
// // // // } 

// // // // export default ForgotPassword;


// // // import "./ForgotPassword.css";
// // // import { useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import {
// // //   FaEnvelope,
// // //   FaLock,
// // //   FaEye,
// // //   FaEyeSlash,
// // // } from "react-icons/fa";

// // // function ForgotPassword() {

// // //   const navigate = useNavigate();

// // //   const [step, setStep] = useState(1);

// // //   const [email, setEmail] = useState("");

// // //   const [otp, setOtp] = useState("");

// // //   const [showPassword, setShowPassword] = useState(false);

// // //   const [showConfirmPassword, setShowConfirmPassword] =
// // //     useState(false);

// // //   const [password, setPassword] = useState("");

// // //   const [confirmPassword, setConfirmPassword] =
// // //     useState("");

// // //   const sendOTP = (e) => {

// // //     e.preventDefault();

// // //     setStep(2);

// // //   };

// // //   const verifyOTP = (e) => {

// // //     e.preventDefault();

// // //     setStep(3);

// // //   };

// // //   const resetPassword = (e) => {

// // //     e.preventDefault();

// // //     navigate("/login");

// // //   };

// // //   return (

// // //     <section className="forgot-page">

// // //       <div className="forgot-container">

// // //         {/* Left */}

// // //         <div className="forgot-left">

// // //           <h1>Saiyed Travels</h1>

// // //           <h2>Password Recovery</h2>

// // //           <p>

// // //             Forgot your password?

// // //             Don't worry.

// // //             Recover your account securely
// // //             in just a few simple steps.

// // //           </p>

// // //         </div>

// // //         {/* Right */}

// // //         <div className="forgot-right">

// // //           <div className="forgot-form">

// // //             <h2>Forgot Password</h2>

// // //             <p>

// // //               Reset your account password.

// // //             </p>

// // //                         {/* Step 1 : Email */}

// // //             {step === 1 && (

// // //               <form onSubmit={sendOTP}>

// // //                 <div className="input-box">

// // //                   <FaEnvelope className="input-icon" />

// // //                   <input
// // //                     type="email"
// // //                     placeholder="Enter Email Address"
// // //                     value={email}
// // //                     onChange={(e) =>
// // //                       setEmail(e.target.value)
// // //                     }
// // //                     required
// // //                   />

// // //                 </div>

// // //                 <button
// // //                   type="submit"
// // //                   className="forgot-btn"
// // //                 >
// // //                   Send OTP
// // //                 </button>

// // //               </form>

// // //             )}

// // //             {/* Step 2 : OTP */}

// // //             {step === 2 && (

// // //               <form onSubmit={verifyOTP}>

// // //                 <div className="input-box">

// // //                   <input
// // //                     type="text"
// // //                     placeholder="Enter 6 Digit OTP"
// // //                     value={otp}
// // //                     onChange={(e) =>
// // //                       setOtp(e.target.value)
// // //                     }
// // //                     maxLength={6}
// // //                     required
// // //                   />

// // //                 </div>

// // //                 <button
// // //                   type="submit"
// // //                   className="forgot-btn"
// // //                 >
// // //                   Verify OTP
// // //                 </button>

// // //               </form>

// // //             )}

// // //             {/* Step 3 : Reset Password */}

// // //             {step === 3 && (

// // //               <form onSubmit={resetPassword}>

// // //                 <div className="input-box">

// // //                   <FaLock className="input-icon" />

// // //                   <input
// // //                     type={
// // //                       showPassword
// // //                         ? "text"
// // //                         : "password"
// // //                     }
// // //                     placeholder="New Password"
// // //                     value={password}
// // //                     onChange={(e) =>
// // //                       setPassword(e.target.value)
// // //                     }
// // //                     required
// // //                   />

// // //                   <span
// // //                     className="eye-icon"
// // //                     onClick={() =>
// // //                       setShowPassword(!showPassword)
// // //                     }
// // //                   >
// // //                     {showPassword ? (
// // //                       <FaEyeSlash />
// // //                     ) : (
// // //                       <FaEye />
// // //                     )}
// // //                   </span>

// // //                 </div>

// // //                 <div className="input-box">

// // //                   <FaLock className="input-icon" />

// // //                   <input
// // //                     type={
// // //                       showConfirmPassword
// // //                         ? "text"
// // //                         : "password"
// // //                     }
// // //                     placeholder="Confirm Password"
// // //                     value={confirmPassword}
// // //                     onChange={(e) =>
// // //                       setConfirmPassword(
// // //                         e.target.value
// // //                       )
// // //                     }
// // //                     required
// // //                   />

// // //                   <span
// // //                     className="eye-icon"
// // //                     onClick={() =>
// // //                       setShowConfirmPassword(
// // //                         !showConfirmPassword
// // //                       )
// // //                     }
// // //                   >
// // //                     {showConfirmPassword ? (
// // //                       <FaEyeSlash />
// // //                     ) : (
// // //                       <FaEye />
// // //                     )}
// // //                   </span>

// // //                 </div>

// // //                 <button
// // //                   type="submit"
// // //                   className="forgot-btn"
// // //                 >
// // //                   Reset Password
// // //                 </button>

// // //               </form>

// // //             )}

// // //             <p className="back-login">

// // //               Remember your password?

// // //               <Link to="/login">
// // //                 Login
// // //               </Link>

// // //             </p>

// // //           </div>

// // //         </div>

// // //       </div>

// // //     </section>

// // //   );

// // // }

// // // export default ForgotPassword;



// // import "./ForgotPassword.css";
// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import {
// //   FaEnvelope,
// //   FaLock,
// //   FaEye,
// //   FaEyeSlash,
// //   FaArrowLeft,
// //   FaCheckCircle,
// // } from "react-icons/fa";

// // function ForgotPassword() {
// //   const navigate = useNavigate();

// //   const [step, setStep] = useState(1);

// //   const [email, setEmail] = useState("");
// //   const [otp, setOtp] = useState("");

// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] =
// //     useState(false);

// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] =
// //     useState("");

// //   const [loading, setLoading] = useState(false);

// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");

// //   // ==========================================
// //   // SEND OTP
// //   // ==========================================

// //   const sendOTP = async (e) => {
// //     e.preventDefault();

// //     setError("");
// //     setSuccess("");

// //     if (!email) {
// //       setError("Please enter your email address.");
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const response = await fetch(
// //         "http://localhost:5000/api/auth/forgot-password",
// //         {
// //           method: "POST",

// //           headers: {
// //             "Content-Type": "application/json",
// //           },

// //           body: JSON.stringify({
// //             email: email.toLowerCase().trim(),
// //           }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (!response.ok) {
// //         setError(
// //           data.message ||
// //             "Unable to send OTP. Please try again."
// //         );

// //         return;
// //       }

// //       setSuccess(
// //         "OTP has been sent to your email address."
// //       );

// //       setStep(2);
// //     } catch (error) {
// //       console.error(
// //         "Send OTP Error:",
// //         error
// //       );

// //       setError(
// //         "Unable to connect to server. Please make sure backend is running."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ==========================================
// //   // VERIFY OTP
// //   // ==========================================

// //   const verifyOTP = async (e) => {
// //     e.preventDefault();

// //     setError("");
// //     setSuccess("");

// //     if (!otp || otp.length !== 6) {
// //       setError("Please enter the 6 digit OTP.");
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const response = await fetch(
// //         "http://localhost:5000/api/auth/verify-otp",
// //         {
// //           method: "POST",

// //           headers: {
// //             "Content-Type": "application/json",
// //           },

// //           body: JSON.stringify({
// //             email: email.toLowerCase().trim(),
// //             otp: otp.trim(),
// //           }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (!response.ok) {
// //         setError(
// //           data.message ||
// //             "Invalid OTP. Please try again."
// //         );

// //         return;
// //       }

// //       setSuccess(
// //         "OTP verified successfully."
// //       );

// //       setStep(3);
// //     } catch (error) {
// //       console.error(
// //         "Verify OTP Error:",
// //         error
// //       );

// //       setError(
// //         "Unable to connect to server."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ==========================================
// //   // RESET PASSWORD
// //   // ==========================================

// //   const resetPassword = async (e) => {
// //     e.preventDefault();

// //     setError("");
// //     setSuccess("");

// //     if (password.length < 6) {
// //       setError(
// //         "Password must be at least 6 characters."
// //       );

// //       return;
// //     }

// //     if (password !== confirmPassword) {
// //       setError(
// //         "Password and confirm password do not match."
// //       );

// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const response = await fetch(
// //         "http://localhost:5000/api/auth/reset-password",
// //         {
// //           method: "POST",

// //           headers: {
// //             "Content-Type": "application/json",
// //           },

// //           body: JSON.stringify({
// //             email: email.toLowerCase().trim(),
// //             newPassword: password,
// //           }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (!response.ok) {
// //         setError(
// //           data.message ||
// //             "Unable to reset password."
// //         );

// //         return;
// //       }

// //       setSuccess(
// //         "Password reset successfully!"
// //       );

// //       setTimeout(() => {
// //         navigate("/login");
// //       }, 1500);
// //     } catch (error) {
// //       console.error(
// //         "Reset Password Error:",
// //         error
// //       );

// //       setError(
// //         "Unable to connect to server."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ==========================================
// //   // BACK TO EMAIL
// //   // ==========================================

// //   const goBackToEmail = () => {
// //     setStep(1);
// //     setOtp("");
// //     setError("");
// //     setSuccess("");
// //   };

// //   return (
// //     <section className="forgot-page">

// //       <div className="forgot-container">

// //         {/* =====================================
// //                     LEFT SIDE
// //         ===================================== */}

// //         <div className="forgot-left">

// //           <h1>Saiyed Travels</h1>

// //           <h2>Password Recovery</h2>

// //           <p>
// //             Forgot your password?
// //             Don't worry.
// //             Recover your account securely
// //             in just a few simple steps.
// //           </p>

// //         </div>

// //         {/* =====================================
// //                     RIGHT SIDE
// //         ===================================== */}

// //         <div className="forgot-right">

// //           <div className="forgot-form">

// //             <h2>Forgot Password</h2>

// //             <p>
// //               Reset your account password.
// //             </p>

// //             {/* =====================================
// //                         STEP INDICATOR
// //             ===================================== */}

// //             <div className="forgot-steps">

// //               <div
// //                 className={
// //                   step >= 1
// //                     ? "forgot-step active"
// //                     : "forgot-step"
// //                 }
// //               >
// //                 1
// //               </div>

// //               <div className="forgot-line"></div>

// //               <div
// //                 className={
// //                   step >= 2
// //                     ? "forgot-step active"
// //                     : "forgot-step"
// //                 }
// //               >
// //                 2
// //               </div>

// //               <div className="forgot-line"></div>

// //               <div
// //                 className={
// //                   step >= 3
// //                     ? "forgot-step active"
// //                     : "forgot-step"
// //                 }
// //               >
// //                 3
// //               </div>

// //             </div>

// //             {/* =====================================
// //                         ERROR
// //             ===================================== */}

// //             {error && (
// //               <div className="forgot-error">
// //                 {error}
// //               </div>
// //             )}

// //             {/* =====================================
// //                         SUCCESS
// //             ===================================== */}

// //             {success && (
// //               <div className="forgot-success">
// //                 <FaCheckCircle />
// //                 <span>{success}</span>
// //               </div>
// //             )}

// //             {/* =====================================
// //                         STEP 1
// //                         EMAIL
// //             ===================================== */}

// //             {step === 1 && (

// //               <form onSubmit={sendOTP}>

// //                 <div className="input-box">

// //                   <FaEnvelope className="input-icon" />

// //                   <input
// //                     type="email"
// //                     placeholder="Enter Email Address"
// //                     value={email}
// //                     onChange={(e) =>
// //                       setEmail(e.target.value)
// //                     }
// //                     autoComplete="email"
// //                     required
// //                   />

// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="forgot-btn"
// //                   disabled={loading}
// //                 >
// //                   {loading
// //                     ? "Sending OTP..."
// //                     : "Send OTP"}
// //                 </button>

// //               </form>

// //             )}

// //             {/* =====================================
// //                         STEP 2
// //                         OTP
// //             ===================================== */}

// //             {step === 2 && (

// //               <form onSubmit={verifyOTP}>

// //                 <div className="otp-email">
// //                   OTP sent to:
// //                   <strong>{email}</strong>
// //                 </div>

// //                 <div className="input-box">

// //                   <input
// //                     type="text"
// //                     placeholder="Enter 6 Digit OTP"
// //                     value={otp}
// //                     onChange={(e) =>
// //                       setOtp(
// //                         e.target.value
// //                           .replace(/\D/g, "")
// //                           .slice(0, 6)
// //                       )
// //                     }
// //                     maxLength={6}
// //                     inputMode="numeric"
// //                     autoComplete="one-time-code"
// //                     required
// //                   />

// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="forgot-btn"
// //                   disabled={loading}
// //                 >
// //                   {loading
// //                     ? "Verifying..."
// //                     : "Verify OTP"}
// //                 </button>

// //                 <button
// //                   type="button"
// //                   className="back-step-btn"
// //                   onClick={goBackToEmail}
// //                 >
// //                   <FaArrowLeft />
// //                   Change Email
// //                 </button>

// //               </form>

// //             )}

// //             {/* =====================================
// //                         STEP 3
// //                         NEW PASSWORD
// //             ===================================== */}

// //             {step === 3 && (

// //               <form onSubmit={resetPassword}>

// //                 {/* New Password */}

// //                 <div className="input-box">

// //                   <FaLock className="input-icon" />

// //                   <input
// //                     type={
// //                       showPassword
// //                         ? "text"
// //                         : "password"
// //                     }
// //                     placeholder="New Password"
// //                     value={password}
// //                     onChange={(e) =>
// //                       setPassword(e.target.value)
// //                     }
// //                     autoComplete="new-password"
// //                     required
// //                   />

// //                   <span
// //                     className="eye-icon"
// //                     onClick={() =>
// //                       setShowPassword(
// //                         !showPassword
// //                       )
// //                     }
// //                   >
// //                     {showPassword ? (
// //                       <FaEyeSlash />
// //                     ) : (
// //                       <FaEye />
// //                     )}
// //                   </span>

// //                 </div>

// //                 {/* Confirm Password */}

// //                 <div className="input-box">

// //                   <FaLock className="input-icon" />

// //                   <input
// //                     type={
// //                       showConfirmPassword
// //                         ? "text"
// //                         : "password"
// //                     }
// //                     placeholder="Confirm Password"
// //                     value={confirmPassword}
// //                     onChange={(e) =>
// //                       setConfirmPassword(
// //                         e.target.value
// //                       )
// //                     }
// //                     autoComplete="new-password"
// //                     required
// //                   />

// //                   <span
// //                     className="eye-icon"
// //                     onClick={() =>
// //                       setShowConfirmPassword(
// //                         !showConfirmPassword
// //                       )
// //                     }
// //                   >
// //                     {showConfirmPassword ? (
// //                       <FaEyeSlash />
// //                     ) : (
// //                       <FaEye />
// //                     )}
// //                   </span>

// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="forgot-btn"
// //                   disabled={loading}
// //                 >
// //                   {loading
// //                     ? "Resetting Password..."
// //                     : "Reset Password"}
// //                 </button>

// //               </form>

// //             )}

// //             {/* =====================================
// //                     LOGIN LINK
// //             ===================================== */}

// //             <p className="back-login">

// //               Remember your password?

// //               <Link to="/login">
// //                 Login
// //               </Link>

// //             </p>

// //           </div>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default ForgotPassword;



// import "./ForgotPassword.css";

// import { useState } from "react";

// import {
//   Link,
//   useNavigate,
// } from "react-router-dom";

// import {
//   FaEnvelope,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
//   FaArrowLeft,
//   FaCheckCircle,
// } from "react-icons/fa";

// function ForgotPassword() {
//   const navigate = useNavigate();

//   const [step, setStep] = useState(1);

//   const [email, setEmail] = useState("");

//   const [otp, setOtp] = useState("");

//   const [password, setPassword] =
//     useState("");

//   const [confirmPassword, setConfirmPassword] =
//     useState("");

//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState(false);

//   const [loading, setLoading] =
//     useState(false);

//   const [error, setError] =
//     useState("");

//   const [success, setSuccess] =
//     useState("");

//   // ==========================================
//   // SEND OTP
//   // ==========================================

//   const sendOTP = async (e) => {
//     e.preventDefault();

//     setError("");
//     setSuccess("");

//     if (!email.trim()) {
//       setError(
//         "Please enter your email address."
//       );

//       return;
//     }

//     try {
//       setLoading(true);

//       console.log(
//         "Sending OTP to:",
//         email
//       );

//       const response = await fetch(
//         "http://localhost:5000/api/auth/forgot-password",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",
//           },

//           body: JSON.stringify({
//             email:
//               email
//                 .trim()
//                 .toLowerCase(),
//           }),
//         }
//       );

//       const data =
//         await response.json();

//       console.log(
//         "Forgot Password Response:",
//         data
//       );

//       if (!response.ok) {
//         setError(
//           data.message ||
//             "Unable to send OTP."
//         );

//         return;
//       }

//       setSuccess(
//         "OTP sent successfully. Check your email."
//       );

//       setStep(2);
//     } catch (error) {
//       console.error(
//         "SEND OTP ERROR:",
//         error
//       );

//       setError(
//         error.message ||
//           "Unable to connect to server."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // VERIFY OTP
//   // ==========================================

//   const verifyOTP = async (e) => {
//     e.preventDefault();

//     setError("");
//     setSuccess("");

//     if (otp.length !== 6) {
//       setError(
//         "Please enter the 6 digit OTP."
//       );

//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(
//         "http://localhost:5000/api/auth/verify-otp",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",
//           },

//           body: JSON.stringify({
//             email:
//               email
//                 .trim()
//                 .toLowerCase(),

//             otp: otp.trim(),
//           }),
//         }
//       );

//       const data =
//         await response.json();

//       console.log(
//         "Verify OTP Response:",
//         data
//       );

//       if (!response.ok) {
//         setError(
//           data.message ||
//             "Invalid OTP."
//         );

//         return;
//       }

//       setSuccess(
//         "OTP verified successfully."
//       );

//       setStep(3);
//     } catch (error) {
//       console.error(
//         "VERIFY OTP ERROR:",
//         error
//       );

//       setError(
//         error.message ||
//           "Unable to connect to server."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // RESET PASSWORD
//   // ==========================================

//   const resetPassword = async (e) => {
//     e.preventDefault();

//     setError("");
//     setSuccess("");

//     if (password.length < 6) {
//       setError(
//         "Password must be at least 6 characters."
//       );

//       return;
//     }

//     if (
//       password !==
//       confirmPassword
//     ) {
//       setError(
//         "Password and confirm password do not match."
//       );

//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(
//         "http://localhost:5000/api/auth/reset-password",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",
//           },

//           body: JSON.stringify({
//             email:
//               email
//                 .trim()
//                 .toLowerCase(),

//             newPassword:
//               password,
//           }),
//         }
//       );

//       const data =
//         await response.json();

//       console.log(
//         "Reset Password Response:",
//         data
//       );

//       if (!response.ok) {
//         setError(
//           data.message ||
//             "Unable to reset password."
//         );

//         return;
//       }

//       setSuccess(
//         "Password reset successfully!"
//       );

//       setTimeout(() => {
//         navigate("/login");
//       }, 1500);
//     } catch (error) {
//       console.error(
//         "RESET PASSWORD ERROR:",
//         error
//       );

//       setError(
//         error.message ||
//           "Unable to connect to server."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // CHANGE EMAIL
//   // ==========================================

//   const changeEmail = () => {
//     setStep(1);
//     setOtp("");
//     setError("");
//     setSuccess("");
//   };

//   return (
//     <section className="forgot-page">

//       <div className="forgot-container">

//         {/* LEFT */}

//         <div className="forgot-left">

//           <h1>Saiyed Travels</h1>

//           <h2>
//             Password Recovery
//           </h2>

//           <p>
//             Forgot your password?
//             Don't worry. Recover your
//             account securely in just a
//             few simple steps.
//           </p>

//         </div>

//         {/* RIGHT */}

//         <div className="forgot-right">

//           <div className="forgot-form">

//             <h2>
//               Forgot Password
//             </h2>

//             <p>
//               Reset your account password.
//             </p>

//             {/* STEP INDICATOR */}

//             <div className="forgot-steps">

//               <div
//                 className={
//                   step >= 1
//                     ? "forgot-step active"
//                     : "forgot-step"
//                 }
//               >
//                 1
//               </div>

//               <div className="forgot-line" />

//               <div
//                 className={
//                   step >= 2
//                     ? "forgot-step active"
//                     : "forgot-step"
//                 }
//               >
//                 2
//               </div>

//               <div className="forgot-line" />

//               <div
//                 className={
//                   step >= 3
//                     ? "forgot-step active"
//                     : "forgot-step"
//                 }
//               >
//                 3
//               </div>

//             </div>

//             {/* ERROR */}

//             {error && (
//               <div className="forgot-error">
//                 {error}
//               </div>
//             )}

//             {/* SUCCESS */}

//             {success && (
//               <div className="forgot-success">

//                 <FaCheckCircle />

//                 <span>
//                   {success}
//                 </span>

//               </div>
//             )}

//             {/* =================================
//                         STEP 1
//             ================================= */}

//             {step === 1 && (

//               <form
//                 onSubmit={sendOTP}
//               >

//                 <div className="input-box">

//                   <FaEnvelope
//                     className="input-icon"
//                   />

//                   <input
//                     type="email"
//                     placeholder="Enter Email Address"
//                     value={email}
//                     onChange={(e) =>
//                       setEmail(
//                         e.target.value
//                       )
//                     }
//                     autoComplete="email"
//                     required
//                   />

//                 </div>

//                 <button
//                   type="submit"
//                   className="forgot-btn"
//                   disabled={loading}
//                 >
//                   {loading
//                     ? "Sending OTP..."
//                     : "Send OTP"}
//                 </button>

//               </form>

//             )}

//             {/* =================================
//                         STEP 2
//             ================================= */}

//             {step === 2 && (

//               <form
//                 onSubmit={verifyOTP}
//               >

//                 <div className="otp-email">

//                   OTP sent to:

//                   <strong>
//                     {email}
//                   </strong>

//                 </div>

//                 <div className="input-box">

//                   <input
//                     type="text"
//                     placeholder="Enter 6 Digit OTP"
//                     value={otp}
//                     onChange={(e) =>
//                       setOtp(
//                         e.target.value
//                           .replace(
//                             /\D/g,
//                             ""
//                           )
//                           .slice(
//                             0,
//                             6
//                           )
//                       )
//                     }
//                     maxLength={6}
//                     inputMode="numeric"
//                     autoComplete="one-time-code"
//                     required
//                   />

//                 </div>

//                 <button
//                   type="submit"
//                   className="forgot-btn"
//                   disabled={loading}
//                 >
//                   {loading
//                     ? "Verifying..."
//                     : "Verify OTP"}
//                 </button>

//                 <button
//                   type="button"
//                   className="back-step-btn"
//                   onClick={
//                     changeEmail
//                   }
//                 >
//                   <FaArrowLeft />

//                   Change Email
//                 </button>

//               </form>

//             )}

//             {/* =================================
//                         STEP 3
//             ================================= */}

//             {step === 3 && (

//               <form
//                 onSubmit={
//                   resetPassword
//                 }
//               >

//                 <div className="input-box">

//                   <FaLock
//                     className="input-icon"
//                   />

//                   <input
//                     type={
//                       showPassword
//                         ? "text"
//                         : "password"
//                     }
//                     placeholder="New Password"
//                     value={password}
//                     onChange={(e) =>
//                       setPassword(
//                         e.target.value
//                       )
//                     }
//                     autoComplete="new-password"
//                     required
//                   />

//                   <span
//                     className="eye-icon"
//                     onClick={() =>
//                       setShowPassword(
//                         !showPassword
//                       )
//                     }
//                   >
//                     {showPassword ? (
//                       <FaEyeSlash />
//                     ) : (
//                       <FaEye />
//                     )}
//                   </span>

//                 </div>

//                 <div className="input-box">

//                   <FaLock
//                     className="input-icon"
//                   />

//                   <input
//                     type={
//                       showConfirmPassword
//                         ? "text"
//                         : "password"
//                     }
//                     placeholder="Confirm Password"
//                     value={
//                       confirmPassword
//                     }
//                     onChange={(e) =>
//                       setConfirmPassword(
//                         e.target.value
//                       )
//                     }
//                     autoComplete="new-password"
//                     required
//                   />

//                   <span
//                     className="eye-icon"
//                     onClick={() =>
//                       setShowConfirmPassword(
//                         !showConfirmPassword
//                       )
//                     }
//                   >
//                     {showConfirmPassword ? (
//                       <FaEyeSlash />
//                     ) : (
//                       <FaEye />
//                     )}
//                   </span>

//                 </div>

//                 <button
//                   type="submit"
//                   className="forgot-btn"
//                   disabled={loading}
//                 >
//                   {loading
//                     ? "Resetting..."
//                     : "Reset Password"}
//                 </button>

//               </form>

//             )}

//             {/* LOGIN */}

//             <p className="back-login">

//               Remember your password?

//               <Link to="/login">
//                 Login
//               </Link>

//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
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
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

// IMPORTANT
const API_URL = "http://127.0.0.1:5000/api/auth";

function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ==========================================
  // API RESPONSE HANDLER
  // ==========================================

  const getResponseData = async (response) => {
    const contentType =
      response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      return await response.json();
    }

    const text = await response.text();

    console.error(
      "Server returned non-JSON response:",
      text
    );

    return {
      success: false,
      message:
        "Backend returned an invalid response. Please check that the backend is running on port 5000.",
    };
  };

  // ==========================================
  // SEND OTP
  // ==========================================

  const sendOTP = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/forgot-password`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email.trim().toLowerCase(),
          }),
        }
      );

      const data =
        await getResponseData(response);

      console.log(
        "Forgot Password:",
        response.status,
        data
      );

      if (!response.ok) {
        setError(
          data.message ||
            "Unable to send OTP."
        );
        return;
      }

      setSuccess(
        "OTP sent successfully. Please check your email."
      );

      setStep(2);
    } catch (error) {
      console.error(
        "SEND OTP ERROR:",
        error
      );

      setError(
        "Unable to connect to Saiyed Travels server."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // VERIFY OTP
  // ==========================================

  const verifyOTP = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (otp.length !== 6) {
      setError("Please enter the 6 digit OTP.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/verify-otp`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            otp: otp.trim(),
          }),
        }
      );

      const data =
        await getResponseData(response);

      console.log(
        "Verify OTP:",
        response.status,
        data
      );

      if (!response.ok) {
        setError(
          data.message ||
            "Invalid OTP."
        );
        return;
      }

      setSuccess(
        "OTP verified successfully."
      );

      setStep(3);
    } catch (error) {
      console.error(
        "VERIFY OTP ERROR:",
        error
      );

      setError(
        "Unable to connect to Saiyed Travels server."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // RESET PASSWORD
  // ==========================================

  const resetPassword = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError(
        "Password and confirm password do not match."
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/reset-password`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            newPassword: password,
          }),
        }
      );

      const data =
        await getResponseData(response);

      console.log(
        "Reset Password:",
        response.status,
        data
      );

      if (!response.ok) {
        setError(
          data.message ||
            "Unable to reset password."
        );
        return;
      }

      setSuccess(
        "Password reset successfully!"
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error(
        "RESET PASSWORD ERROR:",
        error
      );

      setError(
        "Unable to connect to Saiyed Travels server."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // CHANGE EMAIL
  // ==========================================

  const changeEmail = () => {
    setStep(1);
    setOtp("");
    setError("");
    setSuccess("");
  };

  return (
    <section className="forgot-page">

      <div className="forgot-container">

        {/* LEFT SIDE */}

        <div className="forgot-left">

          <h1>Saiyed Travels</h1>

          <h2>Password Recovery</h2>

          <p>
            Forgot your password?
            Don't worry. Recover your
            account securely in just a
            few simple steps.
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="forgot-right">

          <div className="forgot-form">

            <h2>Forgot Password</h2>

            <p>
              Reset your account password.
            </p>

            {/* STEP INDICATOR */}

            <div className="forgot-steps">

              <div
                className={
                  step >= 1
                    ? "forgot-step active"
                    : "forgot-step"
                }
              >
                1
              </div>

              <div className="forgot-line" />

              <div
                className={
                  step >= 2
                    ? "forgot-step active"
                    : "forgot-step"
                }
              >
                2
              </div>

              <div className="forgot-line" />

              <div
                className={
                  step >= 3
                    ? "forgot-step active"
                    : "forgot-step"
                }
              >
                3
              </div>

            </div>

            {/* ERROR */}

            {error && (
              <div className="forgot-error">
                {error}
              </div>
            )}

            {/* SUCCESS */}

            {success && (
              <div className="forgot-success">

                <FaCheckCircle />

                <span>
                  {success}
                </span>

              </div>
            )}

            {/* =====================================
                        STEP 1
            ===================================== */}

            {step === 1 && (
              <form onSubmit={sendOTP}>

                <div className="input-box">

                  <FaEnvelope
                    className="input-icon"
                  />

                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    autoComplete="email"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="forgot-btn"
                  disabled={loading}
                >
                  {loading
                    ? "Sending OTP..."
                    : "Send OTP"}
                </button>

              </form>
            )}

            {/* =====================================
                        STEP 2
            ===================================== */}

            {step === 2 && (
              <form onSubmit={verifyOTP}>

                <div className="otp-email">
                  OTP sent to:
                  <strong>{email}</strong>
                </div>

                <div className="input-box">

                  <input
                    type="text"
                    placeholder="Enter 6 Digit OTP"
                    value={otp}
                    onChange={(e) =>
                      setOtp(
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 6)
                      )
                    }
                    maxLength={6}
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="forgot-btn"
                  disabled={loading}
                >
                  {loading
                    ? "Verifying..."
                    : "Verify OTP"}
                </button>

                <button
                  type="button"
                  className="back-step-btn"
                  onClick={changeEmail}
                >
                  <FaArrowLeft />
                  Change Email
                </button>

              </form>
            )}

            {/* =====================================
                        STEP 3
            ===================================== */}

            {step === 3 && (
              <form onSubmit={resetPassword}>

                {/* NEW PASSWORD */}

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
                    placeholder="New Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    autoComplete="new-password"
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

                {/* CONFIRM PASSWORD */}

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
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                    autoComplete="new-password"
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
                  disabled={loading}
                >
                  {loading
                    ? "Resetting..."
                    : "Reset Password"}
                </button>

              </form>
            )}

            {/* LOGIN */}

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