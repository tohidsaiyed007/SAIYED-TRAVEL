
// import "./Login.css";

// import { useState } from "react";

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

//   const [loading, setLoading] =
//     useState(false);


//   // ==========================================
//   // LOGIN
//   // ==========================================

//   const handleLogin = async (e) => {

//     e.preventDefault();

//     setError("");

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

//       const response = await fetch(
//         "http://localhost:5000/api/auth/login",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type": "application/json",
//           },

//           body: JSON.stringify({
//             email: email.trim().toLowerCase(),
//             password,
//           }),
//         }
//       );


//       const data = await response.json();


//       // ======================================
//       // LOGIN ERROR
//       // ======================================

//       if (!response.ok) {

//         setError(
//           data.message ||
//           "Invalid email or password."
//         );

//         setLoading(false);

//         return;
//       }


//       // ======================================
//       // CHECK USER
//       // ======================================

//       const userRole =
//         data.user?.role;


//       if (!userRole) {

//         setError(
//           "User role not received from server."
//         );

//         setLoading(false);

//         return;
//       }


//       // ======================================
//       // LOGIN TYPE CHECK
//       // ======================================

//       if (
//         loginType !== userRole
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

//         setLoading(false);

//         return;
//       }


//       // ======================================
//       // SAVE AUTH DATA
//       // ======================================

//       localStorage.setItem(
//         "token",
//         data.token
//       );

//       localStorage.setItem(
//         "user",
//         JSON.stringify(data.user)
//       );

//       localStorage.setItem(
//         "userRole",
//         data.user.role
//       );


//       // ======================================
//       // BOOKING LOGIN REDIRECT
//       // ======================================

//       /*
//         Agar user Flight Card ke
//         "Book Now" button se login page par
//         aaya hai, to login ke baad usi
//         selected flight ki booking par
//         wapas bhejna hai.
//       */

//       if (
//         location.state?.from === "/booking"
//       ) {

//         navigate(
//           "/booking",
//           {
//             state:
//               location.state.bookingState,
//             replace: true,
//           }
//         );

//         return;
//       }


//       // ======================================
//       // NORMAL ROLE REDIRECT
//       // ======================================

//       if (
//         data.user.role === "admin"
//       ) {

//         navigate(
//           "/dashboard"
//         );

//       } else if (
//         data.user.role === "agent"
//       ) {

//         navigate("/");

//       } else {

//         navigate("/");

//       }

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
//   // CHANGE LOGIN TYPE
//   // ==========================================

//   const changeLoginType = (type) => {

//     setLoginType(type);

//     setError("");

//   };


//   // ==========================================
//   // RETURN
//   // ==========================================

//   return (

//     <section className="login-page">

//       <div className="login-container">


//         {/* ==================================
//                     LEFT SIDE
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
//                     RIGHT SIDE
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
//                     LOGIN TYPE
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
//                     loginType === "customer"
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


//                 {/* TRAVEL AGENT */}

//                 <button
//                   type="button"
//                   className={`login-type-btn ${
//                     loginType === "agent"
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
//                     loginType === "admin"
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
//                     ERROR
//             ================================= */}

//             {error && (

//               <div className="login-error">

//                 {error}

//               </div>

//             )}


//             {/* =================================
//                     EMAIL
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
//                     PASSWORD
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
//                     LOGIN BUTTON
//             ================================= */}

//             <button
//               type="submit"
//               className="login-btn"
//               disabled={loading}
//             >

//               {loading
//                 ? "Logging in..."
//                 : `Login as ${
//                     loginType === "customer"
//                       ? "Customer"
//                       : loginType === "agent"
//                       ? "Travel Agent"
//                       : "Admin"
//                   }`
//               }

//             </button>


//             {/* =================================
//                     SOCIAL LOGIN
//             ================================= */}

//             {loginType !== "admin" && (

//               <>

//                 <div className="divider">

//                   <span>
//                     OR
//                   </span>

//                 </div>


//                 <button
//                   type="button"
//                   className="google-btn"
//                 >

//                   <FaGoogle />

//                   Continue with Google

//                 </button>


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
//                     SIGNUP
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
//                     ADMIN NOTE
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

import { useState } from "react";

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
  FaGoogle,
  FaFacebookF,
  FaUser,
  FaUserTie,
  FaShieldAlt,
} from "react-icons/fa";


function Login() {

  const navigate = useNavigate();

  const location = useLocation();


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
  // LOGIN
  // ==========================================

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");


    // ========================================
    // VALIDATION
    // ========================================

    if (!email || !password) {

      setError(
        "Please enter your email and password."
      );

      return;
    }


    try {

      setLoading(true);


      // ======================================
      // BACKEND LOGIN
      // ======================================

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            password,
          }),
        }
      );


      const data = await response.json();


      // ======================================
      // LOGIN ERROR
      // ======================================

      if (!response.ok) {

        setError(
          data.message ||
          "Invalid email or password."
        );

        setLoading(false);

        return;
      }


      // ======================================
      // CHECK USER
      // ======================================

      const userRole =
        data.user?.role;


      if (!userRole) {

        setError(
          "User role not received from server."
        );

        setLoading(false);

        return;
      }


      // ======================================
      // LOGIN TYPE CHECK
      // ======================================

      if (
        loginType !== userRole
      ) {

        setError(
          `This account is registered as ${
            userRole === "customer"
              ? "Customer"
              : userRole === "agent"
              ? "Travel Agent"
              : "Admin"
          }. Please select the correct login type.`
        );

        setLoading(false);

        return;
      }


      // ======================================
      // CHECK TOKEN
      // ======================================

      if (!data.token) {

        setError(
          "Login token not received from server."
        );

        setLoading(false);

        return;
      }


      // ======================================
      // CHECK USER DATA
      // ======================================

      if (!data.user) {

        setError(
          "User information not received from server."
        );

        setLoading(false);

        return;
      }


      // ======================================
      // SAVE AUTH DATA
      // ======================================

      // Save JWT token
      localStorage.setItem(
        "token",
        data.token
      );


      // Save complete user object
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );


      // Save user role
      localStorage.setItem(
        "userRole",
        data.user.role
      );


      // ======================================
      // SAVE USER ID
      // ======================================

      const loggedInUserId =
        data.user?._id ||
        data.user?.id ||
        data.user?.userId ||
        null;


      if (loggedInUserId) {

        localStorage.setItem(
          "userId",
          String(loggedInUserId)
        );


        console.log(
          "LOGIN USER ID SAVED:",
          loggedInUserId
        );

      } else {

        localStorage.removeItem(
          "userId"
        );


        console.warn(
          "LOGIN: User ID not received from backend.",
          data.user
        );

      }


      // ======================================
      // BOOKING LOGIN REDIRECT
      // ======================================

      /*
        Agar user Flight Card ke
        "Book Now" button se login page par
        aaya hai, to login ke baad usi
        selected flight ki booking par
        wapas bhejna hai.
      */

      if (
        location.state?.from === "/booking"
      ) {

        navigate(
          "/booking",
          {
            state:
              location.state.bookingState,

            replace: true,
          }
        );

        return;
      }


      // ======================================
      // NORMAL ROLE REDIRECT
      // ======================================

      if (
        data.user.role === "admin"
      ) {

        navigate(
          "/dashboard"
        );

      } else if (
        data.user.role === "agent"
      ) {

        navigate("/");

      } else {

        navigate("/");

      }


    } catch (error) {

      console.error(
        "Login Error:",
        error
      );


      setError(
        "Unable to connect to server. Please make sure backend is running."
      );

    } finally {

      setLoading(false);

    }

  };


  // ==========================================
  // CHANGE LOGIN TYPE
  // ==========================================

  const changeLoginType = (type) => {

    setLoginType(type);

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
            onSubmit={handleLogin}
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


                {/* =============================
                        CUSTOMER
                ============================= */}

                <button
                  type="button"
                  className={`login-type-btn ${
                    loginType === "customer"
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


                {/* =============================
                        TRAVEL AGENT
                ============================= */}

                <button
                  type="button"
                  className={`login-type-btn ${
                    loginType === "agent"
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


                {/* =============================
                        ADMIN
                ============================= */}

                <button
                  type="button"
                  className={`login-type-btn ${
                    loginType === "admin"
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
                onChange={(e) =>
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
                onChange={(e) =>
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
              disabled={loading}
            >

              {loading
                ? "Logging in..."
                : `Login as ${
                    loginType === "customer"
                      ? "Customer"
                      : loginType === "agent"
                      ? "Travel Agent"
                      : "Admin"
                  }`
              }

            </button>


            {/* =================================
                    SOCIAL LOGIN
            ================================= */}

            {loginType !== "admin" && (

              <>

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

              </>

            )}


            {/* =================================
                    SIGNUP
            ================================= */}

            {loginType !== "admin" && (

              <p className="signup-text">

                Don't have an account?

                <Link to="/signup">
                  Sign Up
                </Link>

              </p>

            )}


            {/* =================================
                    ADMIN NOTE
            ================================= */}

            {loginType === "admin" && (

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