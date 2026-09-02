
// // import "./Login.css";

// // import { useState } from "react";

// // import {
// //   Link,
// //   useNavigate,
// //   useLocation,
// // } from "react-router-dom";

// // import {
// //   FaEnvelope,
// //   FaLock,
// //   FaEye,
// //   FaEyeSlash,
// //   FaGoogle,
// //   FaFacebookF,
// //   FaUser,
// //   FaUserTie,
// //   FaShieldAlt,
// // } from "react-icons/fa";

// // function Login() {

// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   // ==========================================
// //   // STATES
// //   // ==========================================

// //   const [showPassword, setShowPassword] =
// //     useState(false);

// //   const [email, setEmail] =
// //     useState("");

// //   const [password, setPassword] =
// //     useState("");

// //   const [loginType, setLoginType] =
// //     useState("customer");

// //   const [error, setError] =
// //     useState("");

// //   const [loading, setLoading] =
// //     useState(false);


// //   // ==========================================
// //   // LOGIN
// //   // ==========================================

// //   const handleLogin = async (e) => {

// //     e.preventDefault();

// //     setError("");

// //     if (!email || !password) {

// //       setError(
// //         "Please enter your email and password."
// //       );

// //       return;
// //     }


// //     try {

// //       setLoading(true);


// //       // ======================================
// //       // BACKEND LOGIN
// //       // ======================================

// //       const response = await fetch(
// //         "http://localhost:5000/api/auth/login",
// //         {
// //           method: "POST",

// //           headers: {
// //             "Content-Type": "application/json",
// //           },

// //           body: JSON.stringify({
// //             email: email.trim().toLowerCase(),
// //             password,
// //           }),
// //         }
// //       );


// //       const data = await response.json();


// //       // ======================================
// //       // LOGIN ERROR
// //       // ======================================

// //       if (!response.ok) {

// //         setError(
// //           data.message ||
// //           "Invalid email or password."
// //         );

// //         setLoading(false);

// //         return;
// //       }


// //       // ======================================
// //       // CHECK USER
// //       // ======================================

// //       const userRole =
// //         data.user?.role;


// //       if (!userRole) {

// //         setError(
// //           "User role not received from server."
// //         );

// //         setLoading(false);

// //         return;
// //       }


// //       // ======================================
// //       // LOGIN TYPE CHECK
// //       // ======================================

// //       if (
// //         loginType !== userRole
// //       ) {

// //         setError(
// //           `This account is registered as ${
// //             userRole === "customer"
// //               ? "Customer"
// //               : userRole === "agent"
// //               ? "Travel Agent"
// //               : "Admin"
// //           }. Please select the correct login type.`
// //         );

// //         setLoading(false);

// //         return;
// //       }


// //       // ======================================
// //       // SAVE AUTH DATA
// //       // ======================================

// //       localStorage.setItem(
// //         "token",
// //         data.token
// //       );

// //       localStorage.setItem(
// //         "user",
// //         JSON.stringify(data.user)
// //       );

// //       localStorage.setItem(
// //         "userRole",
// //         data.user.role
// //       );


// //       // ======================================
// //       // BOOKING LOGIN REDIRECT
// //       // ======================================

// //       /*
// //         Agar user Flight Card ke
// //         "Book Now" button se login page par
// //         aaya hai, to login ke baad usi
// //         selected flight ki booking par
// //         wapas bhejna hai.
// //       */

// //       if (
// //         location.state?.from === "/booking"
// //       ) {

// //         navigate(
// //           "/booking",
// //           {
// //             state:
// //               location.state.bookingState,
// //             replace: true,
// //           }
// //         );

// //         return;
// //       }


// //       // ======================================
// //       // NORMAL ROLE REDIRECT
// //       // ======================================

// //       if (
// //         data.user.role === "admin"
// //       ) {

// //         navigate(
// //           "/dashboard"
// //         );

// //       } else if (
// //         data.user.role === "agent"
// //       ) {

// //         navigate("/");

// //       } else {

// //         navigate("/");

// //       }

// //     } catch (error) {

// //       console.error(
// //         "Login Error:",
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
// //   // CHANGE LOGIN TYPE
// //   // ==========================================

// //   const changeLoginType = (type) => {

// //     setLoginType(type);

// //     setError("");

// //   };


// //   // ==========================================
// //   // RETURN
// //   // ==========================================

// //   return (

// //     <section className="login-page">

// //       <div className="login-container">


// //         {/* ==================================
// //                     LEFT SIDE
// //         ================================== */}

// //         <div className="login-left">

// //           <h1>
// //             Saiyed Travels
// //           </h1>

// //           <h2>
// //             Welcome Back!
// //           </h2>

// //           <p>
// //             Book flights across India with the
// //             best fares, exclusive offers and
// //             secure payment experience.
// //           </p>

// //         </div>


// //         {/* ==================================
// //                     RIGHT SIDE
// //         ================================== */}

// //         <div className="login-right">

// //           <form
// //             className="login-form"
// //             onSubmit={handleLogin}
// //           >

// //             <h2>
// //               Login
// //             </h2>

// //             <p>
// //               Login to continue your journey.
// //             </p>


// //             {/* =================================
// //                     LOGIN TYPE
// //             ================================= */}

// //             <div className="login-type-section">

// //               <label className="login-type-label">
// //                 Login As
// //               </label>


// //               <div className="login-type-options">


// //                 {/* CUSTOMER */}

// //                 <button
// //                   type="button"
// //                   className={`login-type-btn ${
// //                     loginType === "customer"
// //                       ? "active"
// //                       : ""
// //                   }`}
// //                   onClick={() =>
// //                     changeLoginType(
// //                       "customer"
// //                     )
// //                   }
// //                 >

// //                   <FaUser />

// //                   <span>
// //                     Customer
// //                   </span>

// //                 </button>


// //                 {/* TRAVEL AGENT */}

// //                 <button
// //                   type="button"
// //                   className={`login-type-btn ${
// //                     loginType === "agent"
// //                       ? "active"
// //                       : ""
// //                   }`}
// //                   onClick={() =>
// //                     changeLoginType(
// //                       "agent"
// //                     )
// //                   }
// //                 >

// //                   <FaUserTie />

// //                   <span>
// //                     Travel Agent
// //                   </span>

// //                 </button>


// //                 {/* ADMIN */}

// //                 <button
// //                   type="button"
// //                   className={`login-type-btn ${
// //                     loginType === "admin"
// //                       ? "active"
// //                       : ""
// //                   }`}
// //                   onClick={() =>
// //                     changeLoginType(
// //                       "admin"
// //                     )
// //                   }
// //                 >

// //                   <FaShieldAlt />

// //                   <span>
// //                     Admin
// //                   </span>

// //                 </button>

// //               </div>

// //             </div>


// //             {/* =================================
// //                     ERROR
// //             ================================= */}

// //             {error && (

// //               <div className="login-error">

// //                 {error}

// //               </div>

// //             )}


// //             {/* =================================
// //                     EMAIL
// //             ================================= */}

// //             <div className="input-box">

// //               <FaEnvelope
// //                 className="input-icon"
// //               />

// //               <input
// //                 type="email"
// //                 placeholder="Enter Email Address"
// //                 value={email}
// //                 onChange={(e) =>
// //                   setEmail(
// //                     e.target.value
// //                   )
// //                 }
// //                 autoComplete="email"
// //                 required
// //               />

// //             </div>


// //             {/* =================================
// //                     PASSWORD
// //             ================================= */}

// //             <div className="input-box">

// //               <FaLock
// //                 className="input-icon"
// //               />

// //               <input
// //                 type={
// //                   showPassword
// //                     ? "text"
// //                     : "password"
// //                 }
// //                 placeholder="Enter Password"
// //                 value={password}
// //                 onChange={(e) =>
// //                   setPassword(
// //                     e.target.value
// //                   )
// //                 }
// //                 autoComplete="current-password"
// //                 required
// //               />


// //               <span
// //                 className="eye-icon"
// //                 onClick={() =>
// //                   setShowPassword(
// //                     !showPassword
// //                   )
// //                 }
// //               >

// //                 {showPassword ? (
// //                   <FaEyeSlash />
// //                 ) : (
// //                   <FaEye />
// //                 )}

// //               </span>

// //             </div>


// //             {/* =================================
// //                 REMEMBER + FORGOT
// //             ================================= */}

// //             <div className="login-options">

// //               <label>

// //                 <input
// //                   type="checkbox"
// //                 />

// //                 Remember Me

// //               </label>


// //               <Link
// //                 to="/forgot-password"
// //                 className="forgot-link"
// //               >

// //                 Forgot Password?

// //               </Link>

// //             </div>


// //             {/* =================================
// //                     LOGIN BUTTON
// //             ================================= */}

// //             <button
// //               type="submit"
// //               className="login-btn"
// //               disabled={loading}
// //             >

// //               {loading
// //                 ? "Logging in..."
// //                 : `Login as ${
// //                     loginType === "customer"
// //                       ? "Customer"
// //                       : loginType === "agent"
// //                       ? "Travel Agent"
// //                       : "Admin"
// //                   }`
// //               }

// //             </button>


// //             {/* =================================
// //                     SOCIAL LOGIN
// //             ================================= */}

// //             {loginType !== "admin" && (

// //               <>

// //                 <div className="divider">

// //                   <span>
// //                     OR
// //                   </span>

// //                 </div>


// //                 <button
// //                   type="button"
// //                   className="google-btn"
// //                 >

// //                   <FaGoogle />

// //                   Continue with Google

// //                 </button>


// //                 <button
// //                   type="button"
// //                   className="facebook-btn"
// //                 >

// //                   <FaFacebookF />

// //                   Continue with Facebook

// //                 </button>

// //               </>

// //             )}


// //             {/* =================================
// //                     SIGNUP
// //             ================================= */}

// //             {loginType !== "admin" && (

// //               <p className="signup-text">

// //                 Don't have an account?

// //                 <Link to="/signup">
// //                   Sign Up
// //                 </Link>

// //               </p>

// //             )}


// //             {/* =================================
// //                     ADMIN NOTE
// //             ================================= */}

// //             {loginType === "admin" && (

// //               <div className="admin-login-note">

// //                 <FaShieldAlt />

// //                 <span>
// //                   Admin access is restricted to
// //                   authorized Saiyed Travels staff.
// //                 </span>

// //               </div>

// //             )}

// //           </form>

// //         </div>

// //       </div>

// //     </section>

// //   );

// // }

// // export default Login;

































// // import "./Login.css";

// // import { useState } from "react";

// // import {
// //   Link,
// //   useNavigate,
// //   useLocation,
// // } from "react-router-dom";

// // import {
// //   FaEnvelope,
// //   FaLock,
// //   FaEye,
// //   FaEyeSlash,
// //   FaGoogle,
// //   FaFacebookF,
// //   FaUser,
// //   FaUserTie,
// //   FaShieldAlt,
// // } from "react-icons/fa";


// // function Login() {

// //   const navigate = useNavigate();

// //   const location = useLocation();


// //   // ==========================================
// //   // STATES
// //   // ==========================================

// //   const [showPassword, setShowPassword] =
// //     useState(false);

// //   const [email, setEmail] =
// //     useState("");

// //   const [password, setPassword] =
// //     useState("");

// //   const [loginType, setLoginType] =
// //     useState("customer");

// //   const [error, setError] =
// //     useState("");

// //   const [loading, setLoading] =
// //     useState(false);


// //   // ==========================================
// //   // LOGIN
// //   // ==========================================

// //   const handleLogin = async (e) => {

// //     e.preventDefault();

// //     setError("");


// //     // ========================================
// //     // VALIDATION
// //     // ========================================

// //     if (!email || !password) {

// //       setError(
// //         "Please enter your email and password."
// //       );

// //       return;
// //     }


// //     try {

// //       setLoading(true);


// //       // ======================================
// //       // BACKEND LOGIN
// //       // ======================================

// //       const response = await fetch(
// //         "http://localhost:5000/api/auth/login",
// //         {
// //           method: "POST",

// //           headers: {
// //             "Content-Type": "application/json",
// //           },

// //           body: JSON.stringify({
// //             email: email.trim().toLowerCase(),
// //             password,
// //           }),
// //         }
// //       );


// //       const data = await response.json();


// //       // ======================================
// //       // LOGIN ERROR
// //       // ======================================

// //       if (!response.ok) {

// //         setError(
// //           data.message ||
// //           "Invalid email or password."
// //         );

// //         setLoading(false);

// //         return;
// //       }


// //       // ======================================
// //       // CHECK USER
// //       // ======================================

// //       const userRole =
// //         data.user?.role;


// //       if (!userRole) {

// //         setError(
// //           "User role not received from server."
// //         );

// //         setLoading(false);

// //         return;
// //       }


// //       // ======================================
// //       // LOGIN TYPE CHECK
// //       // ======================================

// //       if (
// //         loginType !== userRole
// //       ) {

// //         setError(
// //           `This account is registered as ${
// //             userRole === "customer"
// //               ? "Customer"
// //               : userRole === "agent"
// //               ? "Travel Agent"
// //               : "Admin"
// //           }. Please select the correct login type.`
// //         );

// //         setLoading(false);

// //         return;
// //       }


// //       // ======================================
// //       // CHECK TOKEN
// //       // ======================================

// //       if (!data.token) {

// //         setError(
// //           "Login token not received from server."
// //         );

// //         setLoading(false);

// //         return;
// //       }


// //       // ======================================
// //       // CHECK USER DATA
// //       // ======================================

// //       if (!data.user) {

// //         setError(
// //           "User information not received from server."
// //         );

// //         setLoading(false);

// //         return;
// //       }


// //       // ======================================
// //       // SAVE AUTH DATA
// //       // ======================================

// //       // Save JWT token
// //       localStorage.setItem(
// //         "token",
// //         data.token
// //       );


// //       // Save complete user object
// //       localStorage.setItem(
// //         "user",
// //         JSON.stringify(data.user)
// //       );


// //       // Save user role
// //       localStorage.setItem(
// //         "userRole",
// //         data.user.role
// //       );


// //       // ======================================
// //       // SAVE USER ID
// //       // ======================================

// //       const loggedInUserId =
// //         data.user?._id ||
// //         data.user?.id ||
// //         data.user?.userId ||
// //         null;


// //       if (loggedInUserId) {

// //         localStorage.setItem(
// //           "userId",
// //           String(loggedInUserId)
// //         );


// //         console.log(
// //           "LOGIN USER ID SAVED:",
// //           loggedInUserId
// //         );

// //       } else {

// //         localStorage.removeItem(
// //           "userId"
// //         );


// //         console.warn(
// //           "LOGIN: User ID not received from backend.",
// //           data.user
// //         );

// //       }


// //       // ======================================
// //       // BOOKING LOGIN REDIRECT
// //       // ======================================

// //       /*
// //         Agar user Flight Card ke
// //         "Book Now" button se login page par
// //         aaya hai, to login ke baad usi
// //         selected flight ki booking par
// //         wapas bhejna hai.
// //       */

// //       if (
// //         location.state?.from === "/booking"
// //       ) {

// //         navigate(
// //           "/booking",
// //           {
// //             state:
// //               location.state.bookingState,

// //             replace: true,
// //           }
// //         );

// //         return;
// //       }


// //       // ======================================
// //       // NORMAL ROLE REDIRECT
// //       // ======================================

// //       if (
// //         data.user.role === "admin"
// //       ) {

// //         navigate(
// //           "/dashboard"
// //         );

// //       } else if (
// //         data.user.role === "agent"
// //       ) {

// //         navigate("/");

// //       } else {

// //         navigate("/");

// //       }


// //     } catch (error) {

// //       console.error(
// //         "Login Error:",
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
// //   // CHANGE LOGIN TYPE
// //   // ==========================================

// //   const changeLoginType = (type) => {

// //     setLoginType(type);

// //     setError("");

// //   };


// //   // ==========================================
// //   // RETURN
// //   // ==========================================

// //   return (

// //     <section className="login-page">

// //       <div className="login-container">


// //         {/* ==================================
// //                     LEFT SIDE
// //         ================================== */}

// //         <div className="login-left">

// //           <h1>
// //             Saiyed Travels
// //           </h1>

// //           <h2>
// //             Welcome Back!
// //           </h2>

// //           <p>
// //             Book flights across India with the
// //             best fares, exclusive offers and
// //             secure payment experience.
// //           </p>

// //         </div>


// //         {/* ==================================
// //                     RIGHT SIDE
// //         ================================== */}

// //         <div className="login-right">

// //           <form
// //             className="login-form"
// //             onSubmit={handleLogin}
// //           >

// //             <h2>
// //               Login
// //             </h2>

// //             <p>
// //               Login to continue your journey.
// //             </p>


// //             {/* =================================
// //                     LOGIN TYPE
// //             ================================= */}

// //             <div className="login-type-section">

// //               <label className="login-type-label">
// //                 Login As
// //               </label>


// //               <div className="login-type-options">


// //                 {/* =============================
// //                         CUSTOMER
// //                 ============================= */}

// //                 <button
// //                   type="button"
// //                   className={`login-type-btn ${
// //                     loginType === "customer"
// //                       ? "active"
// //                       : ""
// //                   }`}
// //                   onClick={() =>
// //                     changeLoginType(
// //                       "customer"
// //                     )
// //                   }
// //                 >

// //                   <FaUser />

// //                   <span>
// //                     Customer
// //                   </span>

// //                 </button>


// //                 {/* =============================
// //                         TRAVEL AGENT
// //                 ============================= */}

// //                 <button
// //                   type="button"
// //                   className={`login-type-btn ${
// //                     loginType === "agent"
// //                       ? "active"
// //                       : ""
// //                   }`}
// //                   onClick={() =>
// //                     changeLoginType(
// //                       "agent"
// //                     )
// //                   }
// //                 >

// //                   <FaUserTie />

// //                   <span>
// //                     Travel Agent
// //                   </span>

// //                 </button>


// //                 {/* =============================
// //                         ADMIN
// //                 ============================= */}

// //                 <button
// //                   type="button"
// //                   className={`login-type-btn ${
// //                     loginType === "admin"
// //                       ? "active"
// //                       : ""
// //                   }`}
// //                   onClick={() =>
// //                     changeLoginType(
// //                       "admin"
// //                     )
// //                   }
// //                 >

// //                   <FaShieldAlt />

// //                   <span>
// //                     Admin
// //                   </span>

// //                 </button>

// //               </div>

// //             </div>


// //             {/* =================================
// //                     ERROR
// //             ================================= */}

// //             {error && (

// //               <div className="login-error">

// //                 {error}

// //               </div>

// //             )}


// //             {/* =================================
// //                     EMAIL
// //             ================================= */}

// //             <div className="input-box">

// //               <FaEnvelope
// //                 className="input-icon"
// //               />

// //               <input
// //                 type="email"
// //                 placeholder="Enter Email Address"
// //                 value={email}
// //                 onChange={(e) =>
// //                   setEmail(
// //                     e.target.value
// //                   )
// //                 }
// //                 autoComplete="email"
// //                 required
// //               />

// //             </div>


// //             {/* =================================
// //                     PASSWORD
// //             ================================= */}

// //             <div className="input-box">

// //               <FaLock
// //                 className="input-icon"
// //               />

// //               <input
// //                 type={
// //                   showPassword
// //                     ? "text"
// //                     : "password"
// //                 }
// //                 placeholder="Enter Password"
// //                 value={password}
// //                 onChange={(e) =>
// //                   setPassword(
// //                     e.target.value
// //                   )
// //                 }
// //                 autoComplete="current-password"
// //                 required
// //               />


// //               <span
// //                 className="eye-icon"
// //                 onClick={() =>
// //                   setShowPassword(
// //                     !showPassword
// //                   )
// //                 }
// //               >

// //                 {showPassword ? (
// //                   <FaEyeSlash />
// //                 ) : (
// //                   <FaEye />
// //                 )}

// //               </span>

// //             </div>


// //             {/* =================================
// //                 REMEMBER + FORGOT
// //             ================================= */}

// //             <div className="login-options">

// //               <label>

// //                 <input
// //                   type="checkbox"
// //                 />

// //                 Remember Me

// //               </label>


// //               <Link
// //                 to="/forgot-password"
// //                 className="forgot-link"
// //               >

// //                 Forgot Password?

// //               </Link>

// //             </div>


// //             {/* =================================
// //                     LOGIN BUTTON
// //             ================================= */}

// //             <button
// //               type="submit"
// //               className="login-btn"
// //               disabled={loading}
// //             >

// //               {loading
// //                 ? "Logging in..."
// //                 : `Login as ${
// //                     loginType === "customer"
// //                       ? "Customer"
// //                       : loginType === "agent"
// //                       ? "Travel Agent"
// //                       : "Admin"
// //                   }`
// //               }

// //             </button>


// //             {/* =================================
// //                     SOCIAL LOGIN
// //             ================================= */}

// //             {loginType !== "admin" && (

// //               <>

// //                 <div className="divider">

// //                   <span>
// //                     OR
// //                   </span>

// //                 </div>


// //                 <button
// //                   type="button"
// //                   className="google-btn"
// //                 >

// //                   <FaGoogle />

// //                   Continue with Google

// //                 </button>


// //                 <button
// //                   type="button"
// //                   className="facebook-btn"
// //                 >

// //                   <FaFacebookF />

// //                   Continue with Facebook

// //                 </button>

// //               </>

// //             )}


// //             {/* =================================
// //                     SIGNUP
// //             ================================= */}

// //             {loginType !== "admin" && (

// //               <p className="signup-text">

// //                 Don't have an account?

// //                 <Link to="/signup">
// //                   Sign Up
// //                 </Link>

// //               </p>

// //             )}


// //             {/* =================================
// //                     ADMIN NOTE
// //             ================================= */}

// //             {loginType === "admin" && (

// //               <div className="admin-login-note">

// //                 <FaShieldAlt />

// //                 <span>
// //                   Admin access is restricted to
// //                   authorized Saiyed Travels staff.
// //                 </span>

// //               </div>

// //             )}

// //           </form>

// //         </div>

// //       </div>

// //     </section>

// //   );

// // }


// // export default Login;

















































// import "./Login.css";

// import {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   Link,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";

// import {
//   FaEnvelope,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
//   FaGoogle,
//   FaFacebookF,
//   FaUser,
//   FaUserTie,
//   FaShieldAlt,
// } from "react-icons/fa";

// function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // ==========================================
//   // STATES
//   // ==========================================

//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [email, setEmail] =
//     useState("");

//   const [password, setPassword] =
//     useState("");

//   const [loginType, setLoginType] =
//     useState("customer");

//   const [error, setError] =
//     useState("");

//   const [success, setSuccess] =
//     useState("");

//   const [loading, setLoading] =
//     useState(false);

//   const [googleLoading, setGoogleLoading] =
//     useState(false);

//   // Google button container
//   const googleButtonRef = useRef(null);

//   // ==========================================
//   // GOOGLE CLIENT ID
//   // ==========================================

//   const googleClientId =
//     import.meta.env.VITE_GOOGLE_CLIENT_ID;

//   // ==========================================
//   // COMMON LOGIN SUCCESS
//   // ==========================================

//   const saveLoginAndRedirect = (
//     data
//   ) => {
//     // ----------------------------------------
//     // TOKEN
//     // ----------------------------------------

//     if (data?.token) {
//       localStorage.setItem(
//         "token",
//         data.token
//       );
//     }

//     // ----------------------------------------
//     // USER
//     // ----------------------------------------

//     if (data?.user) {
//       localStorage.setItem(
//         "user",
//         JSON.stringify(data.user)
//       );

//       if (data.user.role) {
//         localStorage.setItem(
//           "userRole",
//           data.user.role
//         );
//       }

//       const loggedInUserId =
//         data.user?._id ||
//         data.user?.id ||
//         data.user?.userId;

//       if (loggedInUserId) {
//         localStorage.setItem(
//           "userId",
//           String(loggedInUserId)
//         );
//       } else {
//         localStorage.removeItem(
//           "userId"
//         );
//       }
//     }

//     // ========================================
//     // BOOKING LOGIN REDIRECT
//     // ========================================

//     if (
//       location.state?.from ===
//       "/booking"
//     ) {
//       navigate(
//         "/booking",
//         {
//           state:
//             location.state.bookingState,
//           replace: true,
//         }
//       );

//       return;
//     }

//     // ========================================
//     // ROLE REDIRECT
//     // ========================================

//     const role =
//       data?.user?.role;

//     if (role === "admin") {
//       navigate(
//         "/dashboard",
//         {
//           replace: true,
//         }
//       );
//     } else {
//       navigate(
//         "/",
//         {
//           replace: true,
//         }
//       );
//     }
//   };

//   // ==========================================
//   // NORMAL LOGIN
//   // ==========================================

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setError("");
//     setSuccess("");

//     // ========================================
//     // VALIDATION
//     // ========================================

//     if (!email || !password) {
//       setError(
//         "Please enter your email and password."
//       );

//       return;
//     }

//     try {
//       setLoading(true);

//       // ======================================
//       // BACKEND LOGIN
//       // ======================================

//       const response =
//         await fetch(
//           "http://localhost:5000/api/auth/login",
//           {
//             method: "POST",

//             headers: {
//               "Content-Type":
//                 "application/json",
//             },

//             body: JSON.stringify({
//               email:
//                 email
//                   .trim()
//                   .toLowerCase(),

//               password,
//             }),
//           }
//         );

//       const data =
//         await response.json();

//       // ======================================
//       // ERROR
//       // ======================================

//       if (!response.ok) {
//         setError(
//           data.message ||
//             "Invalid email or password."
//         );

//         return;
//       }

//       // ======================================
//       // USER ROLE
//       // ======================================

//       const userRole =
//         data?.user?.role;

//       if (!userRole) {
//         setError(
//           "User role not received from server."
//         );

//         return;
//       }

//       // ======================================
//       // LOGIN TYPE CHECK
//       // ======================================

//       if (
//         loginType !==
//         userRole
//       ) {
//         setError(
//           `This account is registered as ${
//             userRole === "customer"
//               ? "Customer"
//               : userRole === "agent"
//               ? "Travel Agent"
//               : "Admin"
//           }. Please select the correct login type.`
//         );

//         return;
//       }

//       // ======================================
//       // TOKEN CHECK
//       // ======================================

//       if (!data?.token) {
//         setError(
//           "Login token not received from server."
//         );

//         return;
//       }

//       // ======================================
//       // USER DATA CHECK
//       // ======================================

//       if (!data?.user) {
//         setError(
//           "User information not received from server."
//         );

//         return;
//       }

//       // ======================================
//       // SAVE + REDIRECT
//       // ======================================

//       saveLoginAndRedirect(data);

//     } catch (error) {
//       console.error(
//         "Login Error:",
//         error
//       );

//       setError(
//         "Unable to connect to server. Please make sure backend is running."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // GOOGLE LOGIN CALLBACK
//   // ==========================================

//   const handleGoogleResponse =
//     async (response) => {
//       try {
//         setError("");
//         setSuccess("");
//         setGoogleLoading(true);

//         if (
//           !response?.credential
//         ) {
//           setError(
//             "Google authentication credential was not received."
//           );

//           return;
//         }

//         // ======================================
//         // SEND GOOGLE CREDENTIAL TO BACKEND
//         // ======================================

//         const result =
//           await fetch(
//             "http://localhost:5000/api/auth/google-login",
//             {
//               method: "POST",

//               headers: {
//                 "Content-Type":
//                   "application/json",
//               },

//               body: JSON.stringify({
//                 credential:
//                   response.credential,
//               }),
//             }
//           );

//         const data =
//           await result.json();

//         if (!result.ok) {
//           setError(
//             data.message ||
//               "Google login failed."
//           );

//           return;
//         }

//         // ======================================
//         // USER CHECK
//         // ======================================

//         if (!data?.user) {
//           setError(
//             "Google user information not received."
//           );

//           return;
//         }

//         // ======================================
//         // ROLE CHECK
//         // ======================================

//         const userRole =
//           data.user.role;

//         if (
//           loginType !==
//           userRole
//         ) {
//           setError(
//             `This Google account is registered as ${
//               userRole === "customer"
//                 ? "Customer"
//                 : userRole === "agent"
//                 ? "Travel Agent"
//                 : "Admin"
//             }. Please select the correct login type.`
//           );

//           return;
//         }

//         // ======================================
//         // TOKEN CHECK
//         // ======================================

//         if (!data?.token) {
//           setError(
//             "Google login token was not received."
//           );

//           return;
//         }

//         // ======================================
//         // SAVE + REDIRECT
//         // ======================================

//         saveLoginAndRedirect(data);

//       } catch (error) {
//         console.error(
//           "Google Login Error:",
//           error
//         );

//         setError(
//           "Unable to complete Google login. Please try again."
//         );
//       } finally {
//         setGoogleLoading(false);
//       }
//     };

//   // ==========================================
//   // LOAD GOOGLE IDENTITY SERVICES
//   // ==========================================

//   useEffect(() => {
//     // Google Login only for customer/agent
//     if (loginType === "admin") {
//       return;
//     }

//     if (!googleClientId) {
//       console.warn(
//         "VITE_GOOGLE_CLIENT_ID is missing."
//       );

//       return;
//     }

//     let intervalId = null;

//     const initializeGoogle =
//       () => {
//         if (
//           !window.google ||
//           !window.google.accounts ||
//           !window.google.accounts.id
//         ) {
//           return false;
//         }

//         if (
//           !googleButtonRef.current
//         ) {
//           return false;
//         }

//         // Clear old button
//         googleButtonRef.current.innerHTML =
//           "";

//         // Initialize
//         window.google.accounts.id.initialize(
//           {
//             client_id:
//               googleClientId,

//             callback:
//               handleGoogleResponse,

//             auto_select:
//               false,

//             cancel_on_tap_outside:
//               true,
//           }
//         );

//         // Render Google button
//         window.google.accounts.id.renderButton(
//           googleButtonRef.current,
//           {
//             theme: "outline",

//             size: "large",

//             type: "standard",

//             text: "continue_with",

//             shape: "rectangular",

//             logo_alignment: "left",

//             width: 360,
//           }
//         );

//         return true;
//       };

//     // Already loaded
//     if (
//       initializeGoogle()
//     ) {
//       return () => {
//         if (intervalId) {
//           clearInterval(
//             intervalId
//           );
//         }
//       };
//     }

//     // Check if script already exists
//     let script =
//       document.querySelector(
//         'script[src="https://accounts.google.com/gsi/client"]'
//       );

//     if (!script) {
//       script =
//         document.createElement(
//           "script"
//         );

//       script.src =
//         "https://accounts.google.com/gsi/client";

//       script.async = true;
//       script.defer = true;

//       document.head.appendChild(
//         script
//       );
//     }

//     script.addEventListener(
//       "load",
//       initializeGoogle
//     );

//     // Small fallback in case Google
//     // script takes some time
//     intervalId =
//       setInterval(
//         () => {
//           if (
//             initializeGoogle()
//           ) {
//             clearInterval(
//               intervalId
//             );
//           }
//         },
//         500
//       );

//     return () => {
//       script.removeEventListener(
//         "load",
//         initializeGoogle
//       );

//       if (intervalId) {
//         clearInterval(
//           intervalId
//         );
//       }

//       if (
//         googleButtonRef.current
//       ) {
//         googleButtonRef.current.innerHTML =
//           "";
//       }
//     };
//   }, [
//     loginType,
//     googleClientId,
//   ]);

//   // ==========================================
//   // CHANGE LOGIN TYPE
//   // ==========================================

//   const changeLoginType = (
//     type
//   ) => {
//     setLoginType(type);

//     setError("");
//     setSuccess("");
//   };

//   // ==========================================
//   // RETURN
//   // ==========================================

//   return (
//     <section className="login-page">

//       <div className="login-container">

//         {/* ==================================
//             LEFT SIDE
//         ================================== */}

//         <div className="login-left">

//           <h1>
//             Saiyed Travels
//           </h1>

//           <h2>
//             Welcome Back!
//           </h2>

//           <p>
//             Book flights across India with the
//             best fares, exclusive offers and
//             secure payment experience.
//           </p>

//         </div>

//         {/* ==================================
//             RIGHT SIDE
//         ================================== */}

//         <div className="login-right">

//           <form
//             className="login-form"
//             onSubmit={handleLogin}
//           >

//             <h2>
//               Login
//             </h2>

//             <p>
//               Login to continue your journey.
//             </p>

//             {/* =================================
//                 LOGIN TYPE
//             ================================= */}

//             <div className="login-type-section">

//               <label className="login-type-label">
//                 Login As
//               </label>

//               <div className="login-type-options">

//                 {/* CUSTOMER */}

//                 <button
//                   type="button"
//                   className={`login-type-btn ${
//                     loginType ===
//                     "customer"
//                       ? "active"
//                       : ""
//                   }`}
//                   onClick={() =>
//                     changeLoginType(
//                       "customer"
//                     )
//                   }
//                 >

//                   <FaUser />

//                   <span>
//                     Customer
//                   </span>

//                 </button>

//                 {/* AGENT */}

//                 <button
//                   type="button"
//                   className={`login-type-btn ${
//                     loginType ===
//                     "agent"
//                       ? "active"
//                       : ""
//                   }`}
//                   onClick={() =>
//                     changeLoginType(
//                       "agent"
//                     )
//                   }
//                 >

//                   <FaUserTie />

//                   <span>
//                     Travel Agent
//                   </span>

//                 </button>

//                 {/* ADMIN */}

//                 <button
//                   type="button"
//                   className={`login-type-btn ${
//                     loginType ===
//                     "admin"
//                       ? "active"
//                       : ""
//                   }`}
//                   onClick={() =>
//                     changeLoginType(
//                       "admin"
//                     )
//                   }
//                 >

//                   <FaShieldAlt />

//                   <span>
//                     Admin
//                   </span>

//                 </button>

//               </div>
//             </div>

//             {/* =================================
//                 ERROR
//             ================================= */}

//             {error && (
//               <div className="login-error">
//                 {error}
//               </div>
//             )}

//             {/* =================================
//                 SUCCESS
//             ================================= */}

//             {success && (
//               <div
//                 className="login-success"
//               >
//                 {success}
//               </div>
//             )}

//             {/* =================================
//                 EMAIL
//             ================================= */}

//             <div className="input-box">

//               <FaEnvelope
//                 className="input-icon"
//               />

//               <input
//                 type="email"
//                 placeholder="Enter Email Address"
//                 value={email}
//                 onChange={(e) =>
//                   setEmail(
//                     e.target.value
//                   )
//                 }
//                 autoComplete="email"
//                 required
//               />

//             </div>

//             {/* =================================
//                 PASSWORD
//             ================================= */}

//             <div className="input-box">

//               <FaLock
//                 className="input-icon"
//               />

//               <input
//                 type={
//                   showPassword
//                     ? "text"
//                     : "password"
//                 }
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) =>
//                   setPassword(
//                     e.target.value
//                   )
//                 }
//                 autoComplete="current-password"
//                 required
//               />

//               <span
//                 className="eye-icon"
//                 onClick={() =>
//                   setShowPassword(
//                     !showPassword
//                   )
//                 }
//               >

//                 {showPassword ? (
//                   <FaEyeSlash />
//                 ) : (
//                   <FaEye />
//                 )}

//               </span>

//             </div>

//             {/* =================================
//                 REMEMBER + FORGOT
//             ================================= */}

//             <div className="login-options">

//               <label>

//                 <input
//                   type="checkbox"
//                 />

//                 Remember Me

//               </label>

//               <Link
//                 to="/forgot-password"
//                 className="forgot-link"
//               >
//                 Forgot Password?
//               </Link>

//             </div>

//             {/* =================================
//                 LOGIN BUTTON
//             ================================= */}

//             <button
//               type="submit"
//               className="login-btn"
//               disabled={loading}
//             >

//               {loading
//                 ? "Logging in..."
//                 : `Login as ${
//                     loginType ===
//                     "customer"
//                       ? "Customer"
//                       : loginType ===
//                         "agent"
//                       ? "Travel Agent"
//                       : "Admin"
//                   }`
//               }

//             </button>

//             {/* =================================
//                 SOCIAL LOGIN
//             ================================= */}

//             {loginType !== "admin" && (
//               <>

//                 <div className="divider">

//                   <span>
//                     OR
//                   </span>

//                 </div>

//                 {/* =================================
//                     GOOGLE LOGIN
//                 ================================= */}

//                 <div className="google-login-wrapper">

//                   <div
//                     ref={
//                       googleButtonRef
//                     }
//                     className="google-login-container"
//                   />

//                   {!googleClientId && (
//                     <button
//                       type="button"
//                       className="google-btn"
//                       disabled
//                     >
//                       <FaGoogle />
//                       Google Login Not Configured
//                     </button>
//                   )}

//                   {googleLoading && (
//                     <div className="google-loading">
//                       Signing in with Google...
//                     </div>
//                   )}

//                 </div>

//                 {/* =================================
//                     FACEBOOK
//                 ================================= */}

//                 <button
//                   type="button"
//                   className="facebook-btn"
//                 >

//                   <FaFacebookF />

//                   Continue with Facebook

//                 </button>

//               </>
//             )}

//             {/* =================================
//                 SIGNUP
//             ================================= */}

//             {loginType !== "admin" && (

//               <p className="signup-text">

//                 Don't have an account?

//                 <Link to="/signup">
//                   Sign Up
//                 </Link>

//               </p>

//             )}

//             {/* =================================
//                 ADMIN NOTE
//             ================================= */}

//             {loginType === "admin" && (

//               <div className="admin-login-note">

//                 <FaShieldAlt />

//                 <span>
//                   Admin access is restricted to
//                   authorized Saiyed Travels staff.
//                 </span>

//               </div>

//             )}

//           </form>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Login;










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
            "http://localhost:5000/api/auth/login",
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