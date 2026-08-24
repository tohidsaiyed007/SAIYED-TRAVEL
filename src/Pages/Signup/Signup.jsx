// // import "./Signup.css";
// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import {
// //   FaUser,
// //   FaEnvelope,
// //   FaPhoneAlt,
// //   FaLock,
// //   FaEye,
// //   FaEyeSlash,
// //   FaGoogle,
// //   FaFacebookF,
// // } from "react-icons/fa";

// // function Signup() {

// //   const navigate = useNavigate();

// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phone: "",
// //     password: "",
// //     confirmPassword: "",
// //   });

// //   const handleChange = (e) => {

// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });

// //   };

// //   const handleSignup = (e) => {

// //     e.preventDefault();

// //     navigate("/login");

// //   };

// //   return (

// //     <section className="signup-page">

// //       <div className="signup-container">

// //         {/* Left Side */}

// //         <div className="signup-left">

// //           <h1>Saiyed Travels</h1>

// //           <h2>Create Your Account</h2>

// //           <p>

// //             Join Saiyed Travels and book flights
// //             with the best fares, secure payments,
// //             and exclusive travel offers.

// //           </p>

// //           <div className="signup-features">

// //             <p>✔ Lowest Flight Fares</p>

// //             <p>✔ Secure Online Payments</p>

// //             <p>✔ Instant Booking Confirmation</p>

// //             <p>✔ 24×7 Customer Support</p>

// //           </div>

// //         </div>

// //         {/* Right Side */}

// //         <div className="signup-right">

// //           <form
// //             className="signup-form"
// //             onSubmit={handleSignup}
// //           >

// //             <h2>Create Account</h2>

// //             <p>

// //               Fill your details to continue.

// //             </p>


// //                         {/* Name */}

// //             <div className="name-row">

// //               <div className="input-box">

// //                 <FaUser className="input-icon" />

// //                 <input
// //                   type="text"
// //                   name="firstName"
// //                   placeholder="First Name"
// //                   value={formData.firstName}
// //                   onChange={handleChange}
// //                   required
// //                 />

// //               </div>

// //               <div className="input-box">

// //                 <FaUser className="input-icon" />

// //                 <input
// //                   type="text"
// //                   name="lastName"
// //                   placeholder="Last Name"
// //                   value={formData.lastName}
// //                   onChange={handleChange}
// //                   required
// //                 />

// //               </div>

// //             </div>

// //             {/* Email */}

// //             <div className="input-box">

// //               <FaEnvelope className="input-icon" />

// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //               />

// //             </div>

// //             {/* Phone */}

// //             <div className="input-box">

// //               <FaPhoneAlt className="input-icon" />

// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="Mobile Number"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 required
// //               />

// //             </div>

// //             {/* Password */}

// //             <div className="input-box">

// //               <FaLock className="input-icon" />

// //               <input
// //                 type={showPassword ? "text" : "password"}
// //                 name="password"
// //                 placeholder="Create Password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 required
// //               />

// //               <span
// //                 className="eye-icon"
// //                 onClick={() =>
// //                   setShowPassword(!showPassword)
// //                 }
// //               >
// //                 {showPassword ? <FaEyeSlash /> : <FaEye />}
// //               </span>

// //             </div>

// //             {/* Confirm Password */}

// //             <div className="input-box">

// //               <FaLock className="input-icon" />

// //               <input
// //                 type={showConfirmPassword ? "text" : "password"}
// //                 name="confirmPassword"
// //                 placeholder="Confirm Password"
// //                 value={formData.confirmPassword}
// //                 onChange={handleChange}
// //                 required
// //               />

// //               <span
// //                 className="eye-icon"
// //                 onClick={() =>
// //                   setShowConfirmPassword(!showConfirmPassword)
// //                 }
// //               >
// //                 {showConfirmPassword ? (
// //                   <FaEyeSlash />
// //                 ) : (
// //                   <FaEye />
// //                 )}
// //               </span>

// //             </div>

// //             {/* Terms */}

// //             <div className="terms-box">

// //               <label>

// //                 <input type="checkbox" required />

// //                 I agree to the
// //                 <Link to="/terms"> Terms & Conditions</Link>

// //               </label>

// //             </div>

// //             {/* Signup Button */}

// //             <button
// //               type="submit"
// //               className="signup-btn"
// //             >
// //               Create Account
// //             </button>

// //             <div className="divider">
// //               <span>OR</span>
// //             </div>

// //             {/* Google */}

// //             <button
// //               type="button"
// //               className="google-btn"
// //             >
// //               <FaGoogle />
// //               Continue with Google
// //             </button>

// //             {/* Facebook */}

// //             <button
// //               type="button"
// //               className="facebook-btn"
// //             >
// //               <FaFacebookF />
// //               Continue with Facebook
// //             </button>

// //             <p className="login-text">

// //               Already have an account?

// //               <Link to="/login">
// //                 Login
// //               </Link>

// //             </p>

// //           </form>

// //         </div>

// //       </div>

// //     </section>

// //   );

// // }

// // export default Signup;


// import "./Signup.css";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
//   FaGoogle,
//   FaFacebookF,
//   FaBuilding,
//   FaCity,
//   FaMapMarkerAlt,
//   FaIdCard,
// } from "react-icons/fa";

// function Signup() {

//   const navigate = useNavigate();

//   const [accountType, setAccountType] = useState("customer");

//   const [showPassword, setShowPassword] = useState(false);

//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",

//     agencyName: "",
//     city: "",
//     state: "",
//     gstNumber: "",

//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//   };

//   const handleSignup = (e) => {

//     e.preventDefault();

//     const signupData = {
//       ...formData,
//       role: accountType,
//     };

//     console.log(signupData);

//     navigate("/login");

//   };

//   return (

//     <section className="signup-page">

//       <div className="signup-container">

//         {/* Left Side */}

//         <div className="signup-left">

//           <h1>Saiyed Travels</h1>

//           <h2>

//             {accountType === "customer"
//               ? "Create Customer Account"
//               : "Register as Travel Agent"}

//           </h2>

//           <p>

//             {accountType === "customer"
//               ? "Book flights for yourself and your family with the best fares, secure payments and instant confirmation."
//               : "Register as an authorised travel agent and book tickets for your customers using your own agent account."}

//           </p>

//           <div className="signup-features">

//             <p>✔ Lowest Flight Fares</p>

//             <p>✔ Secure Online Payments</p>

//             <p>✔ Instant Booking Confirmation</p>

//             <p>✔ 24×7 Customer Support</p>

//             {

//               accountType === "agent" && (

//                 <>

//                   <p>✔ Agent Dashboard</p>

//                   <p>✔ Customer Booking Management</p>

//                 </>

//               )

//             }

//           </div>

//         </div>

//         {/* Right Side */}

//         <div className="signup-right">

//           <form
//             className="signup-form"
//             onSubmit={handleSignup}
//           >

//             <h2>Create Account</h2>

//             <p>

//               Fill your details to continue.

//             </p>

//                         {/* Account Type */}

//             <div className="account-type">

//               <h3>Select Account Type</h3>

//               <div className="account-options">

//                 <div
//                   className={`account-card ${
//                     accountType === "customer" ? "active" : ""
//                   }`}
//                   onClick={() => setAccountType("customer")}
//                 >

//                   <FaUser className="account-icon" />

//                   <h4>Customer</h4>

//                   <p>Book flights for yourself & family</p>

//                 </div>

//                 <div
//                   className={`account-card ${
//                     accountType === "agent" ? "active" : ""
//                   }`}
//                   onClick={() => setAccountType("agent")}
//                 >

//                   <FaBuilding className="account-icon" />

//                   <h4>Travel Agent</h4>

//                   <p>Book tickets for your customers</p>

//                 </div>

//               </div>

//             </div>

//             {/* Name */}

//             <div className="name-row">

//               <div className="input-box">

//                 <FaUser className="input-icon" />

//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                 />

//               </div>

//               <div className="input-box">

//                 <FaUser className="input-icon" />

//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                 />

//               </div>

//             </div>

//             {/* Agent Fields */}

//             {accountType === "agent" && (

//               <>

//                 <div className="input-box">

//                   <FaBuilding className="input-icon" />

//                   <input
//                     type="text"
//                     name="agencyName"
//                     placeholder="Agency Name"
//                     value={formData.agencyName}
//                     onChange={handleChange}
//                     required
//                   />

//                 </div>

//                 <div className="name-row">

//                   <div className="input-box">

//                     <FaCity className="input-icon" />

//                     <input
//                       type="text"
//                       name="city"
//                       placeholder="City"
//                       value={formData.city}
//                       onChange={handleChange}
//                       required
//                     />

//                   </div>

//                   <div className="input-box">

//                     <FaMapMarkerAlt className="input-icon" />

//                     <input
//                       type="text"
//                       name="state"
//                       placeholder="State"
//                       value={formData.state}
//                       onChange={handleChange}
//                       required
//                     />

//                   </div>

//                 </div>

//                 <div className="input-box">

//                   <FaIdCard className="input-icon" />

//                   <input
//                     type="text"
//                     name="gstNumber"
//                     placeholder="GST Number (Optional)"
//                     value={formData.gstNumber}
//                     onChange={handleChange}
//                   />

//                 </div>

//               </>

//             )}

//             {/* Email */}

//             <div className="input-box">

//               <FaEnvelope className="input-icon" />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />

//             </div>

//             {/* Phone */}

//             <div className="input-box">

//               <FaPhoneAlt className="input-icon" />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Mobile Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />

//             </div>

//             {/* Password */}

//             <div className="input-box">

//               <FaLock className="input-icon" />

//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Create Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />

//               <span
//                 className="eye-icon"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>

//             </div>

//             {/* Confirm Password */}

//             <div className="input-box">

//               <FaLock className="input-icon" />

//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />

//               <span
//                 className="eye-icon"
//                 onClick={() =>
//                   setShowConfirmPassword(!showConfirmPassword)
//                 }
//               >
//                 {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>

//             </div>

//             <div className="terms-box">

//               <label>

//                 <input type="checkbox" required />

//                 I agree to the
//                 <Link to="/terms"> Terms & Conditions</Link>

//               </label>

//             </div>

//             <button
//               type="submit"
//               className="signup-btn"
//             >
//               {accountType === "customer"
//                 ? "Create Account"
//                 : "Register as Agent"}
//             </button>

//             <div className="divider">
//               <span>OR</span>
//             </div>

//             <button
//               type="button"
//               className="google-btn"
//             >
//               <FaGoogle />
//               Continue with Google
//             </button>

//             <button
//               type="button"
//               className="facebook-btn"
//             >
//               <FaFacebookF />
//               Continue with Facebook
//             </button>

//             <p className="login-text">

//               Already have an account?

//               <Link to="/login">
//                 Login
//               </Link>

//             </p>

//           </form>

//         </div>

//       </div>

//     </section>

//   );

// }

// export default Signup;



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

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

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
  // SIGNUP
  // ==========================================

  const handleSignup = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");


    // ========================================
    // PASSWORD MATCH
    // ========================================

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setError(
        "Password and Confirm Password do not match."
      );

      return;

    }


    // ========================================
    // PASSWORD LENGTH
    // ========================================

    if (
      formData.password.length < 6
    ) {

      setError(
        "Password must be at least 6 characters."
      );

      return;

    }


    // ========================================
    // AGENT VALIDATION
    // ========================================

    if (
      accountType === "agent"
    ) {

      if (
        !formData.agencyName ||
        !formData.city ||
        !formData.state
      ) {

        setError(
          "Agency Name, City and State are required for Travel Agent registration."
        );

        return;

      }

    }


    try {

      setLoading(true);


      // ======================================
      // REAL BACKEND SIGNUP
      // ======================================

      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

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

          }),

        }
      );


      const data =
        await response.json();


      // ======================================
      // BACKEND ERROR
      // ======================================

      if (!response.ok) {

        setError(
          data.message ||
          "Unable to create account."
        );

        setLoading(false);

        return;

      }


      // ======================================
      // SUCCESS
      // ======================================

      setSuccess(
        "Account created successfully! Redirecting to login..."
      );


      // ======================================
      // CLEAR FORM
      // ======================================

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


      // ======================================
      // GO TO LOGIN
      // ======================================

      setTimeout(() => {

        navigate("/login");

      }, 1500);


    } catch (error) {

      console.error(
        "Signup Error:",
        error
      );

      setError(
        "Unable to connect to server. Please make sure backend is running."
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <section className="signup-page">

      <div className="signup-container">


        {/* ==================================
                    LEFT SIDE
        ================================== */}

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

              : "Register as an authorised travel agent and book tickets for your customers using your own agent account."

            }

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


        {/* ==================================
                    RIGHT SIDE
        ================================== */}

        <div className="signup-right">

          <form
            className="signup-form"
            onSubmit={handleSignup}
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

                <div
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

                </div>


                {/* AGENT */}

                <div
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

                </div>

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
                  value={formData.firstName}
                  onChange={handleChange}
                  required
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
                  value={formData.lastName}
                  onChange={handleChange}
                  required
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
                    value={formData.agencyName}
                    onChange={handleChange}
                    required
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
                      value={formData.city}
                      onChange={handleChange}
                      required
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
                      value={formData.state}
                      onChange={handleChange}
                      required
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
                    value={formData.gstNumber}
                    onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
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
                value={formData.phone}
                onChange={handleChange}
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
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
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
                value={formData.confirmPassword}
                onChange={handleChange}
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


            {/* =================================
                    TERMS
            ================================= */}

            <div className="terms-box">

              <label>

                <input
                  type="checkbox"
                  required
                />

                I agree to the

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

                : "Register as Agent"

              }

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