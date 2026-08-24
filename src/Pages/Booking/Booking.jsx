
// // // // // // import "./Booking.css";
// // // // // // import { useState } from "react";
// // // // // // import { useLocation, useNavigate } from "react-router-dom";

// // // // // // import Navbar from "../../Components/Navbar/Navbar";
// // // // // // import Footer from "../../Components/Footer/Footer";

// // // // // // function Booking() {
// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();

// // // // // //   const { flight } = location.state || {};

// // // // // //   const [formData, setFormData] = useState({
// // // // // //     firstName: "",
// // // // // //     lastName: "",
// // // // // //     dob: "",
// // // // // //     gender: "",
// // // // // //     nationality: "",
// // // // // //     passport: "",
// // // // // //     passportExpiry: "",
// // // // // //     email: "",
// // // // // //     phone: "",
// // // // // //     city: "",
// // // // // //     address: "",
// // // // // //     request: "",
// // // // // //   });

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value } = e.target;

// // // // // //     setFormData((prev) => ({
// // // // // //       ...prev,
// // // // // //       [name]: value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const validateForm = () => {
// // // // // //     if (!formData.firstName.trim()) {
// // // // // //       alert("Please enter First Name");
// // // // // //       return false;
// // // // // //     }

// // // // // //     if (!formData.lastName.trim()) {
// // // // // //       alert("Please enter Last Name");
// // // // // //       return false;
// // // // // //     }

// // // // // //     if (!formData.dob) {
// // // // // //       alert("Please select Date of Birth");
// // // // // //       return false;
// // // // // //     }

// // // // // //     if (!formData.gender) {
// // // // // //       alert("Please select Gender");
// // // // // //       return false;
// // // // // //     }

// // // // // //     if (!formData.nationality.trim()) {
// // // // // //       alert("Please enter Nationality");
// // // // // //       return false;
// // // // // //     }

// // // // // //     if (!formData.passport.trim()) {
// // // // // //       alert("Please enter Passport Number");
// // // // // //       return false;
// // // // // //     }

// // // // // //     if (!formData.passportExpiry) {
// // // // // //       alert("Please select Passport Expiry");
// // // // // //       return false;
// // // // // //     }

// // // // // //     if (!formData.email.trim()) {
// // // // // //       alert("Please enter Email Address");
// // // // // //       return false;
// // // // // //     }

// // // // // //     if (!formData.phone.trim()) {
// // // // // //       alert("Please enter Phone Number");
// // // // // //       return false;
// // // // // //     }

// // // // // //     if (!formData.city.trim()) {
// // // // // //       alert("Please enter City");
// // // // // //       return false;
// // // // // //     }

// // // // // //     return true;
// // // // // //   };

// // // // // //   const handleContinue = () => {
// // // // // //     if (!validateForm()) return;

// // // // // //     navigate("/seat-selection", {
// // // // // //       state: {
// // // // // //         flight,
// // // // // //         passenger: formData,
// // // // // //       },
// // // // // //     });
// // // // // //   };

// // // // // //   if (!flight) {
// // // // // //     return (
// // // // // //       <>
// // // // // //         <Navbar />

// // // // // //         <section className="booking-page">
// // // // // //           <div className="no-flight-selected">

// // // // // //             <h2>No Flight Selected ✈️</h2>

// // // // // //             <p>
// // // // // //               Please search and select a flight before
// // // // // //               continuing to booking.
// // // // // //             </p>

// // // // // //             <button
// // // // // //               className="back-home-btn"
// // // // // //               onClick={() => navigate("/")}
// // // // // //             >
// // // // // //               Back To Home
// // // // // //             </button>

// // // // // //           </div>
// // // // // //         </section>

// // // // // //         <Footer />
// // // // // //       </>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Navbar />

// // // // // //       <section className="booking-page">

// // // // // //         <div className="booking-container">

// // // // // //           <h2>Passenger Details</h2>

// // // // // // <form>

// // // // // //   {/* Name */}

// // // // // //   <div className="input-group">

// // // // // //     <input
// // // // // //       type="text"
// // // // // //       name="firstName"
// // // // // //       placeholder="First Name"
// // // // // //       value={formData.firstName}
// // // // // //       onChange={handleChange}
// // // // // //       required
// // // // // //     />

// // // // // //     <input
// // // // // //       type="text"
// // // // // //       name="lastName"
// // // // // //       placeholder="Last Name"
// // // // // //       value={formData.lastName}
// // // // // //       onChange={handleChange}
// // // // // //       required
// // // // // //     />

// // // // // //   </div>

// // // // // //   {/* DOB & Gender */}

// // // // // //   <div className="input-group">

// // // // // //     <div className="form-field">

// // // // // //       <label>Date of Birth</label>

// // // // // //       <input
// // // // // //         type="date"
// // // // // //         name="dob"
// // // // // //         value={formData.dob}
// // // // // //         onChange={handleChange}
// // // // // //         required
// // // // // //       />

// // // // // //     </div>

// // // // // //     <div className="form-field">

// // // // // //       <label>Gender</label>

// // // // // //       <select
// // // // // //         name="gender"
// // // // // //         value={formData.gender}
// // // // // //         onChange={handleChange}
// // // // // //         required
// // // // // //       >

// // // // // //         <option value="">
// // // // // //           Select Gender
// // // // // //         </option>

// // // // // //         <option value="Male">
// // // // // //           Male
// // // // // //         </option>

// // // // // //         <option value="Female">
// // // // // //           Female
// // // // // //         </option>

// // // // // //         <option value="Other">
// // // // // //           Other
// // // // // //         </option>

// // // // // //       </select>

// // // // // //     </div>

// // // // // //   </div>

// // // // // //   {/* Nationality & Passport */}

// // // // // //   <div className="input-group">

// // // // // //     <input
// // // // // //       type="text"
// // // // // //       name="nationality"
// // // // // //       placeholder="Nationality"
// // // // // //       value={formData.nationality}
// // // // // //       onChange={handleChange}
// // // // // //       required
// // // // // //     />

// // // // // //     <input
// // // // // //       type="text"
// // // // // //       name="passport"
// // // // // //       placeholder="Passport Number"
// // // // // //       value={formData.passport}
// // // // // //       onChange={handleChange}
// // // // // //       required
// // // // // //     />

// // // // // //   </div>

// // // // // //   {/* Passport Expiry & Email */}

// // // // // //   <div className="input-group">

// // // // // //     <div className="form-field">

// // // // // //       <label>Passport Expiry</label>

// // // // // //       <input
// // // // // //         type="date"
// // // // // //         name="passportExpiry"
// // // // // //         value={formData.passportExpiry}
// // // // // //         onChange={handleChange}
// // // // // //         required
// // // // // //       />

// // // // // //     </div>

// // // // // //     <input
// // // // // //       type="email"
// // // // // //       name="email"
// // // // // //       placeholder="Email Address"
// // // // // //       value={formData.email}
// // // // // //       onChange={handleChange}
// // // // // //       required
// // // // // //     />

// // // // // //   </div>

// // // // // //   {/* Phone & City */}

// // // // // //   <div className="input-group">

// // // // // //     <input
// // // // // //       type="tel"
// // // // // //       name="phone"
// // // // // //       placeholder="Phone Number"
// // // // // //       value={formData.phone}
// // // // // //       onChange={handleChange}
// // // // // //       required
// // // // // //     />

// // // // // //     <input
// // // // // //       type="text"
// // // // // //       name="city"
// // // // // //       placeholder="City"
// // // // // //       value={formData.city}
// // // // // //       onChange={handleChange}
// // // // // //       required
// // // // // //     />

// // // // // //   </div>

// // // // // //   {/* Address */}

// // // // // //   <textarea
// // // // // //     rows="4"
// // // // // //     name="address"
// // // // // //     placeholder="Full Address"
// // // // // //     value={formData.address}
// // // // // //     onChange={handleChange}
// // // // // //   />

// // // // // //   {/* Special Request */}

// // // // // //   <textarea
// // // // // //     rows="4"
// // // // // //     name="request"
// // // // // //     placeholder="Special Request (Optional)"
// // // // // //     value={formData.request}
// // // // // //     onChange={handleChange}
// // // // // //   />

// // // // // //               <button
// // // // // //               type="button"
// // // // // //               className="continue-btn"
// // // // // //               onClick={handleContinue}
// // // // // //             >
// // // // // //               Continue To Seat Selection
// // // // // //             </button>

// // // // // //           </form>

// // // // // //         </div>

// // // // // //       {/* </div> */}

// // // // // //       <Footer />

// // // // // //     </section>

// // // // // //     // </>
// // // // // //   );
// // // // // // }

// // // // // // export default Booking;


// // // // // import "./Booking.css";

// // // // // import { useState } from "react";
// // // // // import {
// // // // //   useLocation,
// // // // //   useNavigate,
// // // // // } from "react-router-dom";

// // // // // import Navbar from "../../Components/Navbar/Navbar";
// // // // // import Footer from "../../Components/Footer/Footer";

// // // // // function Booking() {
// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();

// // // // //   // =====================================================
// // // // //   // GET SELECTED FLIGHT
// // // // //   // =====================================================

// // // // //   const selectedFlight =
// // // // //     location.state?.flight || null;

// // // // //   // =====================================================
// // // // //   // PASSENGER FORM
// // // // //   // =====================================================

// // // // //   const [formData, setFormData] = useState({
// // // // //     firstName: "",
// // // // //     lastName: "",
// // // // //     dob: "",
// // // // //     gender: "",
// // // // //     nationality: "",
// // // // //     passport: "",
// // // // //     passportExpiry: "",
// // // // //     email: "",
// // // // //     phone: "",
// // // // //     city: "",
// // // // //     address: "",
// // // // //     request: "",
// // // // //   });

// // // // //   // =====================================================
// // // // //   // HANDLE INPUT
// // // // //   // =====================================================

// // // // //   const handleChange = (e) => {
// // // // //     const {
// // // // //       name,
// // // // //       value,
// // // // //     } = e.target;

// // // // //     setFormData((prev) => ({
// // // // //       ...prev,
// // // // //       [name]: value,
// // // // //     }));
// // // // //   };

// // // // //   // =====================================================
// // // // //   // VALIDATION
// // // // //   // =====================================================

// // // // //   const validateForm = () => {
// // // // //     if (!formData.firstName.trim()) {
// // // // //       alert("Please enter First Name");
// // // // //       return false;
// // // // //     }

// // // // //     if (!formData.lastName.trim()) {
// // // // //       alert("Please enter Last Name");
// // // // //       return false;
// // // // //     }

// // // // //     if (!formData.dob) {
// // // // //       alert("Please select Date of Birth");
// // // // //       return false;
// // // // //     }

// // // // //     if (!formData.gender) {
// // // // //       alert("Please select Gender");
// // // // //       return false;
// // // // //     }

// // // // //     if (!formData.nationality.trim()) {
// // // // //       alert("Please enter Nationality");
// // // // //       return false;
// // // // //     }

// // // // //     if (!formData.passport.trim()) {
// // // // //       alert("Please enter Passport Number");
// // // // //       return false;
// // // // //     }

// // // // //     if (!formData.passportExpiry) {
// // // // //       alert("Please select Passport Expiry");
// // // // //       return false;
// // // // //     }

// // // // //     if (!formData.email.trim()) {
// // // // //       alert("Please enter Email Address");
// // // // //       return false;
// // // // //     }

// // // // //     if (!formData.phone.trim()) {
// // // // //       alert("Please enter Phone Number");
// // // // //       return false;
// // // // //     }

// // // // //     if (!formData.city.trim()) {
// // // // //       alert("Please enter City");
// // // // //       return false;
// // // // //     }

// // // // //     return true;
// // // // //   };

// // // // //   // =====================================================
// // // // //   // CONTINUE TO SEAT SELECTION
// // // // //   // =====================================================

// // // // //   const handleContinue = () => {
// // // // //     if (!validateForm()) {
// // // // //       return;
// // // // //     }

// // // // //     // ===================================================
// // // // //     // IMPORTANT:
// // // // //     // Get actual MongoDB Flight ID
// // // // //     // ===================================================

// // // // //     const flightId =
// // // // //       selectedFlight?._id ||
// // // // //       selectedFlight?.id ||
// // // // //       selectedFlight?.flightId;

// // // // //     console.log(
// // // // //       "================================"
// // // // //     );

// // // // //     console.log(
// // // // //       "SELECTED FLIGHT:"
// // // // //     );

// // // // //     console.log(
// // // // //       selectedFlight
// // // // //     );

// // // // //     console.log(
// // // // //       "MONGODB FLIGHT ID:",
// // // // //       flightId
// // // // //     );

// // // // //     console.log(
// // // // //       "FLIGHT PRICE:",
// // // // //       selectedFlight?.finalPrice
// // // // //     );

// // // // //     console.log(
// // // // //       "================================"
// // // // //     );

// // // // //     // ===================================================
// // // // //     // FLIGHT ID REQUIRED
// // // // //     // ===================================================

// // // // //     if (!flightId) {
// // // // //       alert(
// // // // //         "Flight ID is missing. Please go back and select the flight again."
// // // // //       );

// // // // //       console.error(
// // // // //         "FLIGHT ID MISSING:",
// // // // //         selectedFlight
// // // // //       );

// // // // //       return;
// // // // //     }

// // // // //     // ===================================================
// // // // //     // CREATE CLEAN FLIGHT OBJECT
// // // // //     // ===================================================

// // // // //     const flight = {
// // // // //       ...selectedFlight,

// // // // //       // MongoDB ID
// // // // //       _id: flightId,

// // // // //       // Explicit ID for next pages/backend
// // // // //       flightId: flightId,

// // // // //       // Keep admin-added price
// // // // //       finalPrice:
// // // // //         Number(
// // // // //           selectedFlight?.finalPrice
// // // // //         ) || 0,

// // // // //       // Keep logo
// // // // //       logo:
// // // // //         selectedFlight?.logo || "",

// // // // //       // Keep airline
// // // // //       airline:
// // // // //         selectedFlight?.airline || "",

// // // // //       // Keep flight number
// // // // //       flightNo:
// // // // //         selectedFlight?.flightNo || "",

// // // // //       // Keep route
// // // // //       fromCity:
// // // // //         selectedFlight?.fromCity || "",

// // // // //       toCity:
// // // // //         selectedFlight?.toCity || "",

// // // // //       fromCode:
// // // // //         selectedFlight?.fromCode || "",

// // // // //       toCode:
// // // // //         selectedFlight?.toCode || "",
// // // // //     };

// // // // //     // ===================================================
// // // // //     // SEND EVERYTHING TO SEAT SELECTION
// // // // //     // ===================================================

// // // // //     navigate(
// // // // //       "/seat-selection",
// // // // //       {
// // // // //         state: {
// // // // //           flight,

// // // // //           // Explicit ID
// // // // //           flightId,

// // // // //           // Passenger details
// // // // //           passenger: formData,
// // // // //         },
// // // // //       }
// // // // //     );
// // // // //   };

// // // // //   // =====================================================
// // // // //   // NO FLIGHT
// // // // //   // =====================================================

// // // // //   if (!selectedFlight) {
// // // // //     return (
// // // // //       <>
// // // // //         <Navbar />

// // // // //         <section className="booking-page">

// // // // //           <div className="no-flight-selected">

// // // // //             <h2>
// // // // //               No Flight Selected ✈️
// // // // //             </h2>

// // // // //             <p>
// // // // //               Please search and select a flight
// // // // //               before continuing to booking.
// // // // //             </p>

// // // // //             <button
// // // // //               className="back-home-btn"
// // // // //               onClick={() =>
// // // // //                 navigate("/")
// // // // //               }
// // // // //             >
// // // // //               Back To Home
// // // // //             </button>

// // // // //           </div>

// // // // //         </section>

// // // // //         <Footer />
// // // // //       </>
// // // // //     );
// // // // //   }

// // // // //   // =====================================================
// // // // //   // PAGE
// // // // //   // =====================================================

// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />

// // // // //       <section className="booking-page">

// // // // //         <div className="booking-container">

// // // // //           <h2>
// // // // //             Passenger Details
// // // // //           </h2>

// // // // //           <form>

// // // // //             {/* ==========================================
// // // // //                 NAME
// // // // //             ========================================== */}

// // // // //             <div className="input-group">

// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="firstName"
// // // // //                 placeholder="First Name"
// // // // //                 value={
// // // // //                   formData.firstName
// // // // //                 }
// // // // //                 onChange={
// // // // //                   handleChange
// // // // //                 }
// // // // //                 required
// // // // //               />

// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="lastName"
// // // // //                 placeholder="Last Name"
// // // // //                 value={
// // // // //                   formData.lastName
// // // // //                 }
// // // // //                 onChange={
// // // // //                   handleChange
// // // // //                 }
// // // // //                 required
// // // // //               />

// // // // //             </div>

// // // // //             {/* ==========================================
// // // // //                 DOB + GENDER
// // // // //             ========================================== */}

// // // // //             <div className="input-group">

// // // // //               <div className="form-field">

// // // // //                 <label>
// // // // //                   Date of Birth
// // // // //                 </label>

// // // // //                 <input
// // // // //                   type="date"
// // // // //                   name="dob"
// // // // //                   value={
// // // // //                     formData.dob
// // // // //                   }
// // // // //                   onChange={
// // // // //                     handleChange
// // // // //                   }
// // // // //                   required
// // // // //                 />

// // // // //               </div>

// // // // //               <div className="form-field">

// // // // //                 <label>
// // // // //                   Gender
// // // // //                 </label>

// // // // //                 <select
// // // // //                   name="gender"
// // // // //                   value={
// // // // //                     formData.gender
// // // // //                   }
// // // // //                   onChange={
// // // // //                     handleChange
// // // // //                   }
// // // // //                   required
// // // // //                 >

// // // // //                   <option value="">
// // // // //                     Select Gender
// // // // //                   </option>

// // // // //                   <option value="Male">
// // // // //                     Male
// // // // //                   </option>

// // // // //                   <option value="Female">
// // // // //                     Female
// // // // //                   </option>

// // // // //                   <option value="Other">
// // // // //                     Other
// // // // //                   </option>

// // // // //                 </select>

// // // // //               </div>

// // // // //             </div>

// // // // //             {/* ==========================================
// // // // //                 NATIONALITY + PASSPORT
// // // // //             ========================================== */}

// // // // //             <div className="input-group">

// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="nationality"
// // // // //                 placeholder="Nationality"
// // // // //                 value={
// // // // //                   formData.nationality
// // // // //                 }
// // // // //                 onChange={
// // // // //                   handleChange
// // // // //                 }
// // // // //                 required
// // // // //               />

// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="passport"
// // // // //                 placeholder="Passport Number"
// // // // //                 value={
// // // // //                   formData.passport
// // // // //                 }
// // // // //                 onChange={
// // // // //                   handleChange
// // // // //                 }
// // // // //                 required
// // // // //               />

// // // // //             </div>

// // // // //             {/* ==========================================
// // // // //                 PASSPORT EXPIRY + EMAIL
// // // // //             ========================================== */}

// // // // //             <div className="input-group">

// // // // //               <div className="form-field">

// // // // //                 <label>
// // // // //                   Passport Expiry
// // // // //                 </label>

// // // // //                 <input
// // // // //                   type="date"
// // // // //                   name="passportExpiry"
// // // // //                   value={
// // // // //                     formData.passportExpiry
// // // // //                   }
// // // // //                   onChange={
// // // // //                     handleChange
// // // // //                   }
// // // // //                   required
// // // // //                 />

// // // // //               </div>

// // // // //               <input
// // // // //                 type="email"
// // // // //                 name="email"
// // // // //                 placeholder="Email Address"
// // // // //                 value={
// // // // //                   formData.email
// // // // //                 }
// // // // //                 onChange={
// // // // //                   handleChange
// // // // //                 }
// // // // //                 required
// // // // //               />

// // // // //             </div>

// // // // //             {/* ==========================================
// // // // //                 PHONE + CITY
// // // // //             ========================================== */}

// // // // //             <div className="input-group">

// // // // //               <input
// // // // //                 type="tel"
// // // // //                 name="phone"
// // // // //                 placeholder="Phone Number"
// // // // //                 value={
// // // // //                   formData.phone
// // // // //                 }
// // // // //                 onChange={
// // // // //                   handleChange
// // // // //                 }
// // // // //                 required
// // // // //               />

// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="city"
// // // // //                 placeholder="City"
// // // // //                 value={
// // // // //                   formData.city
// // // // //                 }
// // // // //                 onChange={
// // // // //                   handleChange
// // // // //                 }
// // // // //                 required
// // // // //               />

// // // // //             </div>

// // // // //             {/* ==========================================
// // // // //                 ADDRESS
// // // // //             ========================================== */}

// // // // //             <textarea
// // // // //               rows="4"
// // // // //               name="address"
// // // // //               placeholder="Full Address"
// // // // //               value={
// // // // //                 formData.address
// // // // //               }
// // // // //               onChange={
// // // // //                 handleChange
// // // // //               }
// // // // //             />

// // // // //             {/* ==========================================
// // // // //                 SPECIAL REQUEST
// // // // //             ========================================== */}

// // // // //             <textarea
// // // // //               rows="4"
// // // // //               name="request"
// // // // //               placeholder="Special Request (Optional)"
// // // // //               value={
// // // // //                 formData.request
// // // // //               }
// // // // //               onChange={
// // // // //                 handleChange
// // // // //               }
// // // // //             />

// // // // //             {/* ==========================================
// // // // //                 CONTINUE
// // // // //             ========================================== */}

// // // // //             <button
// // // // //               type="button"
// // // // //               className="continue-btn"
// // // // //               onClick={
// // // // //                 handleContinue
// // // // //               }
// // // // //             >
// // // // //               Continue To Seat Selection
// // // // //             </button>

// // // // //           </form>

// // // // //         </div>

// // // // //       </section>

// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // export default Booking;



// // // // import "./Booking.css";

// // // // import { useState } from "react";

// // // // import {
// // // //   useLocation,
// // // //   useNavigate,
// // // // } from "react-router-dom";

// // // // import Navbar from "../../Components/Navbar/Navbar";
// // // // import Footer from "../../Components/Footer/Footer";


// // // // function Booking() {

// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();


// // // //   // =====================================================
// // // //   // GET BOOKING DATA
// // // //   // =====================================================

// // // //   const selectedFlight =
// // // //     location.state?.flight || null;


// // // //   const travellers =
// // // //     location.state?.travellers || {
// // // //       adults: 1,
// // // //       children: 0,
// // // //       infants: 0,
// // // //       cabin: "Economy",
// // // //     };


// // // //   const previousPricing =
// // // //     location.state?.pricing || {};


// // // //   // =====================================================
// // // //   // PASSENGER COUNTS
// // // //   // =====================================================

// // // //   const adultCount =
// // // //     Math.max(
// // // //       Number(travellers.adults) || 1,
// // // //       1
// // // //     );


// // // //   const childCount =
// // // //     Math.max(
// // // //       Number(travellers.children) || 0,
// // // //       0
// // // //     );


// // // //   const infantCount =
// // // //     Math.max(
// // // //       Number(travellers.infants) || 0,
// // // //       0
// // // //     );


// // // //   const totalPassengers =
// // // //     adultCount +
// // // //     childCount +
// // // //     infantCount;


// // // //   // =====================================================
// // // //   // FARE
// // // //   // =====================================================

// // // //   const adultFare =
// // // //     Number(
// // // //       selectedFlight?.adultFare ??
// // // //       previousPricing?.adultFare ??
// // // //       selectedFlight?.finalPrice ??
// // // //       0
// // // //     );


// // // //   const childFare =
// // // //     Number(
// // // //       selectedFlight?.childFare ??
// // // //       previousPricing?.childFare ??
// // // //       adultFare
// // // //     );


// // // //   const infantFare =
// // // //     Number(
// // // //       selectedFlight?.infantFare ??
// // // //       previousPricing?.infantFare ??
// // // //       0
// // // //     );


// // // //   const adultTotal =
// // // //     adultFare *
// // // //     adultCount;


// // // //   const childTotal =
// // // //     childFare *
// // // //     childCount;


// // // //   const infantTotal =
// // // //     infantFare *
// // // //     infantCount;


// // // //   const passengerFareTotal =
// // // //     adultTotal +
// // // //     childTotal +
// // // //     infantTotal;


// // // //   // =====================================================
// // // //   // PASSENGER FORM
// // // //   // =====================================================

// // // //   const [formData, setFormData] =
// // // //     useState({

// // // //       firstName: "",
// // // //       lastName: "",
// // // //       dob: "",
// // // //       gender: "",
// // // //       nationality: "",
// // // //       passport: "",
// // // //       passportExpiry: "",
// // // //       email: "",
// // // //       phone: "",
// // // //       city: "",
// // // //       address: "",
// // // //       request: "",

// // // //     });


// // // //   // =====================================================
// // // //   // HANDLE INPUT
// // // //   // =====================================================

// // // //   const handleChange = (e) => {

// // // //     const {
// // // //       name,
// // // //       value,
// // // //     } = e.target;


// // // //     setFormData(
// // // //       (prev) => ({
// // // //         ...prev,
// // // //         [name]: value,
// // // //       })
// // // //     );

// // // //   };


// // // //   // =====================================================
// // // //   // VALIDATION
// // // //   // =====================================================

// // // //   const validateForm = () => {

// // // //     if (
// // // //       !formData.firstName.trim()
// // // //     ) {

// // // //       alert(
// // // //         "Please enter First Name"
// // // //       );

// // // //       return false;

// // // //     }


// // // //     if (
// // // //       !formData.lastName.trim()
// // // //     ) {

// // // //       alert(
// // // //         "Please enter Last Name"
// // // //       );

// // // //       return false;

// // // //     }


// // // //     if (!formData.dob) {

// // // //       alert(
// // // //         "Please select Date of Birth"
// // // //       );

// // // //       return false;

// // // //     }


// // // //     if (!formData.gender) {

// // // //       alert(
// // // //         "Please select Gender"
// // // //       );

// // // //       return false;

// // // //     }


// // // //     if (
// // // //       !formData.nationality.trim()
// // // //     ) {

// // // //       alert(
// // // //         "Please enter Nationality"
// // // //       );

// // // //       return false;

// // // //     }


// // // //     if (
// // // //       !formData.passport.trim()
// // // //     ) {

// // // //       alert(
// // // //         "Please enter Passport Number"
// // // //       );

// // // //       return false;

// // // //     }


// // // //     if (
// // // //       !formData.passportExpiry
// // // //     ) {

// // // //       alert(
// // // //         "Please select Passport Expiry"
// // // //       );

// // // //       return false;

// // // //     }


// // // //     if (
// // // //       !formData.email.trim()
// // // //     ) {

// // // //       alert(
// // // //         "Please enter Email Address"
// // // //       );

// // // //       return false;

// // // //     }


// // // //     if (
// // // //       !formData.phone.trim()
// // // //     ) {

// // // //       alert(
// // // //         "Please enter Phone Number"
// // // //       );

// // // //       return false;

// // // //     }


// // // //     if (
// // // //       !formData.city.trim()
// // // //     ) {

// // // //       alert(
// // // //         "Please enter City"
// // // //       );

// // // //       return false;

// // // //     }


// // // //     return true;

// // // //   };


// // // //   // =====================================================
// // // //   // CONTINUE TO SEAT SELECTION
// // // //   // =====================================================

// // // //   const handleContinue = () => {

// // // //     if (!validateForm()) {
// // // //       return;
// // // //     }


// // // //     // ===================================================
// // // //     // GET MONGODB FLIGHT ID
// // // //     // ===================================================

// // // //     const flightId =
// // // //       selectedFlight?._id ||
// // // //       selectedFlight?.id ||
// // // //       selectedFlight?.flightId;


// // // //     if (!flightId) {

// // // //       alert(
// // // //         "Flight ID is missing. Please go back and select the flight again."
// // // //       );

// // // //       console.error(
// // // //         "FLIGHT ID MISSING:",
// // // //         selectedFlight
// // // //       );

// // // //       return;

// // // //     }


// // // //     // ===================================================
// // // //     // CLEAN FLIGHT OBJECT
// // // //     // ===================================================

// // // //     const flight = {

// // // //       ...selectedFlight,

// // // //       _id:
// // // //         flightId,

// // // //       flightId:
// // // //         flightId,


// // // //       // -----------------------------------------------
// // // //       // Passenger fares
// // // //       // -----------------------------------------------

// // // //       adultFare:
// // // //         adultFare,

// // // //       childFare:
// // // //         childFare,

// // // //       infantFare:
// // // //         infantFare,


// // // //       // -----------------------------------------------
// // // //       // Passenger totals
// // // //       // -----------------------------------------------

// // // //       adultTotal:
// // // //         adultTotal,

// // // //       childTotal:
// // // //         childTotal,

// // // //       infantTotal:
// // // //         infantTotal,

// // // //       passengerFareTotal:
// // // //         passengerFareTotal,


// // // //       // -----------------------------------------------
// // // //       // Service prices
// // // //       // -----------------------------------------------

// // // //       adultMealPrice:
// // // //         Number(
// // // //           selectedFlight?.adultMealPrice
// // // //         ) || 0,

// // // //       childMealPrice:
// // // //         Number(
// // // //           selectedFlight?.childMealPrice
// // // //         ) || 0,

// // // //       infantMealPrice:
// // // //         Number(
// // // //           selectedFlight?.infantMealPrice
// // // //         ) || 0,


// // // //       adultSeatPrice:
// // // //         Number(
// // // //           selectedFlight?.adultSeatPrice
// // // //         ) || 0,

// // // //       childSeatPrice:
// // // //         Number(
// // // //           selectedFlight?.childSeatPrice
// // // //         ) || 0,

// // // //       infantSeatPrice:
// // // //         Number(
// // // //           selectedFlight?.infantSeatPrice
// // // //         ) || 0,


// // // //       adultBaggagePrice:
// // // //         Number(
// // // //           selectedFlight?.adultBaggagePrice
// // // //         ) || 0,

// // // //       childBaggagePrice:
// // // //         Number(
// // // //           selectedFlight?.childBaggagePrice
// // // //         ) || 0,

// // // //       infantBaggagePrice:
// // // //         Number(
// // // //           selectedFlight?.infantBaggagePrice
// // // //         ) || 0,

// // // //     };


// // // //     // ===================================================
// // // //     // COMPLETE BOOKING STATE
// // // //     // ===================================================

// // // //     const bookingState = {

// // // //       flight,

// // // //       flightId,


// // // //       // -----------------------------------------------
// // // //       // TRAVELLERS
// // // //       // -----------------------------------------------

// // // //       travellers: {

// // // //         adults:
// // // //           adultCount,

// // // //         children:
// // // //           childCount,

// // // //         infants:
// // // //           infantCount,

// // // //         cabin:
// // // //           travellers.cabin ||
// // // //           "Economy",

// // // //       },


// // // //       // -----------------------------------------------
// // // //       // PASSENGER DETAILS
// // // //       // -----------------------------------------------

// // // //       passenger:
// // // //         formData,


// // // //       // -----------------------------------------------
// // // //       // PRICING
// // // //       // -----------------------------------------------

// // // //       pricing: {

// // // //         adultFare,
// // // //         childFare,
// // // //         infantFare,

// // // //         adultTotal,
// // // //         childTotal,
// // // //         infantTotal,

// // // //         passengerFareTotal,

// // // //       },

// // // //     };


// // // //     console.log(
// // // //       "BOOKING DATA:",
// // // //       bookingState
// // // //     );


// // // //     // ===================================================
// // // //     // SEND TO SEAT SELECTION
// // // //     // ===================================================

// // // //     navigate(
// // // //       "/seat-selection",
// // // //       {
// // // //         state:
// // // //           bookingState,
// // // //       }
// // // //     );

// // // //   };


// // // //   // =====================================================
// // // //   // NO FLIGHT
// // // //   // =====================================================

// // // //   if (!selectedFlight) {

// // // //     return (

// // // //       <>

// // // //         <Navbar />

// // // //         <section className="booking-page">

// // // //           <div className="no-flight-selected">

// // // //             <h2>
// // // //               No Flight Selected ✈️
// // // //             </h2>

// // // //             <p>
// // // //               Please search and select a flight
// // // //               before continuing to booking.
// // // //             </p>


// // // //             <button
// // // //               className="back-home-btn"
// // // //               onClick={() =>
// // // //                 navigate("/")
// // // //               }
// // // //             >
// // // //               Back To Home
// // // //             </button>

// // // //           </div>

// // // //         </section>

// // // //         <Footer />

// // // //       </>

// // // //     );

// // // //   }


// // // //   // =====================================================
// // // //   // PAGE
// // // //   // =====================================================

// // // //   return (

// // // //     <>

// // // //       <Navbar />


// // // //       <section className="booking-page">

// // // //         <div className="booking-container">


// // // //           {/* =================================================
// // // //               FLIGHT SUMMARY
// // // //           ================================================= */}

// // // //           <div
// // // //             className="booking-flight-summary"
// // // //             style={{
// // // //               marginBottom: "25px",
// // // //               padding: "18px",
// // // //               borderRadius: "12px",
// // // //               background: "#f8fafc",
// // // //               border: "1px solid #e5e7eb",
// // // //             }}
// // // //           >

// // // //             <h2>
// // // //               Passenger Details
// // // //             </h2>


// // // //             <p
// // // //               style={{
// // // //                 margin: "8px 0",
// // // //                 color: "#64748b",
// // // //               }}
// // // //             >

// // // //               {selectedFlight.airline}

// // // //               {" • "}

// // // //               {selectedFlight.flightNo}

// // // //               {" • "}

// // // //               {selectedFlight.fromCode}

// // // //               {" → "}

// // // //               {selectedFlight.toCode}

// // // //             </p>


// // // //             <div
// // // //               style={{
// // // //                 display: "flex",
// // // //                 gap: "10px",
// // // //                 flexWrap: "wrap",
// // // //                 marginTop: "12px",
// // // //               }}
// // // //             >

// // // //               <span className="traveller-badge">
// // // //                 👤 {adultCount} Adult
// // // //                 {adultCount > 1 ? "s" : ""}
// // // //               </span>


// // // //               {childCount > 0 && (

// // // //                 <span className="traveller-badge">
// // // //                   🧒 {childCount} Child
// // // //                   {childCount > 1 ? "ren" : ""}
// // // //                 </span>

// // // //               )}


// // // //               {infantCount > 0 && (

// // // //                 <span className="traveller-badge">
// // // //                   👶 {infantCount} Infant
// // // //                   {infantCount > 1 ? "s" : ""}
// // // //                 </span>

// // // //               )}


// // // //               <span className="traveller-badge">
// // // //                 💺 {travellers.cabin || "Economy"}
// // // //               </span>

// // // //             </div>


// // // //             {/* PRICE */}

// // // //             <div
// // // //               style={{
// // // //                 marginTop: "18px",
// // // //                 paddingTop: "15px",
// // // //                 borderTop: "1px solid #e5e7eb",
// // // //               }}
// // // //             >

// // // //               <div
// // // //                 style={{
// // // //                   display: "flex",
// // // //                   justifyContent: "space-between",
// // // //                   marginBottom: "7px",
// // // //                 }}
// // // //               >

// // // //                 <span>
// // // //                   Adults ({adultCount})
// // // //                 </span>

// // // //                 <strong>
// // // //                   ₹{" "}
// // // //                   {adultTotal.toLocaleString(
// // // //                     "en-IN"
// // // //                   )}
// // // //                 </strong>

// // // //               </div>


// // // //               {childCount > 0 && (

// // // //                 <div
// // // //                   style={{
// // // //                     display: "flex",
// // // //                     justifyContent: "space-between",
// // // //                     marginBottom: "7px",
// // // //                   }}
// // // //                 >

// // // //                   <span>
// // // //                     Children ({childCount})
// // // //                   </span>

// // // //                   <strong>
// // // //                     ₹{" "}
// // // //                     {childTotal.toLocaleString(
// // // //                       "en-IN"
// // // //                     )}
// // // //                   </strong>

// // // //                 </div>

// // // //               )}


// // // //               {infantCount > 0 && (

// // // //                 <div
// // // //                   style={{
// // // //                     display: "flex",
// // // //                     justifyContent: "space-between",
// // // //                     marginBottom: "7px",
// // // //                   }}
// // // //                 >

// // // //                   <span>
// // // //                     Infants ({infantCount})
// // // //                   </span>

// // // //                   <strong>
// // // //                     ₹{" "}
// // // //                     {infantTotal.toLocaleString(
// // // //                       "en-IN"
// // // //                     )}
// // // //                   </strong>

// // // //                 </div>

// // // //               )}


// // // //               <div
// // // //                 style={{
// // // //                   display: "flex",
// // // //                   justifyContent: "space-between",
// // // //                   marginTop: "12px",
// // // //                   paddingTop: "12px",
// // // //                   borderTop: "1px solid #dbeafe",
// // // //                   fontSize: "17px",
// // // //                 }}
// // // //               >

// // // //                 <strong>
// // // //                   Ticket Total
// // // //                 </strong>

// // // //                 <strong>
// // // //                   ₹{" "}
// // // //                   {passengerFareTotal.toLocaleString(
// // // //                     "en-IN"
// // // //                   )}
// // // //                 </strong>

// // // //               </div>

// // // //             </div>

// // // //           </div>


// // // //           {/* =================================================
// // // //               FORM
// // // //           ================================================= */}

// // // //           <form>


// // // //             {/* NAME */}

// // // //             <div className="input-group">

// // // //               <input
// // // //                 type="text"
// // // //                 name="firstName"
// // // //                 placeholder="First Name"
// // // //                 value={
// // // //                   formData.firstName
// // // //                 }
// // // //                 onChange={
// // // //                   handleChange
// // // //                 }
// // // //                 required
// // // //               />


// // // //               <input
// // // //                 type="text"
// // // //                 name="lastName"
// // // //                 placeholder="Last Name"
// // // //                 value={
// // // //                   formData.lastName
// // // //                 }
// // // //                 onChange={
// // // //                   handleChange
// // // //                 }
// // // //                 required
// // // //               />

// // // //             </div>


// // // //             {/* DOB + GENDER */}

// // // //             <div className="input-group">

// // // //               <div className="form-field">

// // // //                 <label>
// // // //                   Date of Birth
// // // //                 </label>

// // // //                 <input
// // // //                   type="date"
// // // //                   name="dob"
// // // //                   value={
// // // //                     formData.dob
// // // //                   }
// // // //                   onChange={
// // // //                     handleChange
// // // //                   }
// // // //                   required
// // // //                 />

// // // //               </div>


// // // //               <div className="form-field">

// // // //                 <label>
// // // //                   Gender
// // // //                 </label>

// // // //                 <select
// // // //                   name="gender"
// // // //                   value={
// // // //                     formData.gender
// // // //                   }
// // // //                   onChange={
// // // //                     handleChange
// // // //                   }
// // // //                   required
// // // //                 >

// // // //                   <option value="">
// // // //                     Select Gender
// // // //                   </option>

// // // //                   <option value="Male">
// // // //                     Male
// // // //                   </option>

// // // //                   <option value="Female">
// // // //                     Female
// // // //                   </option>

// // // //                   <option value="Other">
// // // //                     Other
// // // //                   </option>

// // // //                 </select>

// // // //               </div>

// // // //             </div>


// // // //             {/* NATIONALITY + PASSPORT */}

// // // //             <div className="input-group">

// // // //               <input
// // // //                 type="text"
// // // //                 name="nationality"
// // // //                 placeholder="Nationality"
// // // //                 value={
// // // //                   formData.nationality
// // // //                 }
// // // //                 onChange={
// // // //                   handleChange
// // // //                 }
// // // //                 required
// // // //               />


// // // //               <input
// // // //                 type="text"
// // // //                 name="passport"
// // // //                 placeholder="Passport Number"
// // // //                 value={
// // // //                   formData.passport
// // // //                 }
// // // //                 onChange={
// // // //                   handleChange
// // // //                 }
// // // //                 required
// // // //               />

// // // //             </div>


// // // //             {/* PASSPORT EXPIRY + EMAIL */}

// // // //             <div className="input-group">

// // // //               <div className="form-field">

// // // //                 <label>
// // // //                   Passport Expiry
// // // //                 </label>

// // // //                 <input
// // // //                   type="date"
// // // //                   name="passportExpiry"
// // // //                   value={
// // // //                     formData.passportExpiry
// // // //                   }
// // // //                   onChange={
// // // //                     handleChange
// // // //                   }
// // // //                   required
// // // //                 />

// // // //               </div>


// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 placeholder="Email Address"
// // // //                 value={
// // // //                   formData.email
// // // //                 }
// // // //                 onChange={
// // // //                   handleChange
// // // //                 }
// // // //                 required
// // // //               />

// // // //             </div>


// // // //             {/* PHONE + CITY */}

// // // //             <div className="input-group">

// // // //               <input
// // // //                 type="tel"
// // // //                 name="phone"
// // // //                 placeholder="Phone Number"
// // // //                 value={
// // // //                   formData.phone
// // // //                 }
// // // //                 onChange={
// // // //                   handleChange
// // // //                 }
// // // //                 required
// // // //               />


// // // //               <input
// // // //                 type="text"
// // // //                 name="city"
// // // //                 placeholder="City"
// // // //                 value={
// // // //                   formData.city
// // // //                 }
// // // //                 onChange={
// // // //                   handleChange
// // // //                 }
// // // //                 required
// // // //               />

// // // //             </div>


// // // //             {/* ADDRESS */}

// // // //             <textarea
// // // //               rows="4"
// // // //               name="address"
// // // //               placeholder="Full Address"
// // // //               value={
// // // //                 formData.address
// // // //               }
// // // //               onChange={
// // // //                 handleChange
// // // //               }
// // // //             />


// // // //             {/* SPECIAL REQUEST */}

// // // //             <textarea
// // // //               rows="4"
// // // //               name="request"
// // // //               placeholder="Special Request (Optional)"
// // // //               value={
// // // //                 formData.request
// // // //               }
// // // //               onChange={
// // // //                 handleChange
// // // //               }
// // // //             />


// // // //             {/* =================================================
// // // //                 CONTINUE
// // // //             ================================================= */}

// // // //             <button
// // // //               type="button"
// // // //               className="continue-btn"
// // // //               onClick={
// // // //                 handleContinue
// // // //               }
// // // //             >

// // // //               Continue To Seat Selection

// // // //             </button>


// // // //           </form>

// // // //         </div>

// // // //       </section>


// // // //       <Footer />

// // // //     </>

// // // //   );

// // // // }


// // // // export default Booking;


// // // import "./Booking.css";

// // // import { useState } from "react";
// // // import {
// // //   useLocation,
// // //   useNavigate,
// // // } from "react-router-dom";

// // // import Navbar from "../../Components/Navbar/Navbar";
// // // import Footer from "../../Components/Footer/Footer";


// // // function Booking() {

// // //   const navigate = useNavigate();
// // //   const location = useLocation();


// // //   // =====================================================
// // //   // FLIGHT DATA
// // //   // =====================================================

// // //   const selectedFlight =
// // //     location.state?.flight || null;


// // //   // =====================================================
// // //   // TRAVELLERS
// // //   // =====================================================

// // //   const travellers =
// // //     location.state?.travellers || {
// // //       adults: 1,
// // //       children: 0,
// // //       infants: 0,
// // //       cabin: "Economy",
// // //     };


// // //   const previousPricing =
// // //     location.state?.pricing || {};


// // //   // =====================================================
// // //   // PASSENGER COUNTS
// // //   // =====================================================

// // //   const adultCount = Math.max(
// // //     Number(travellers.adults) || 1,
// // //     1
// // //   );


// // //   const childCount = Math.max(
// // //     Number(travellers.children) || 0,
// // //     0
// // //   );


// // //   const infantCount = Math.max(
// // //     Number(travellers.infants) || 0,
// // //     0
// // //   );


// // //   const totalPassengers =
// // //     adultCount +
// // //     childCount +
// // //     infantCount;


// // //   // =====================================================
// // //   // FARES
// // //   // =====================================================

// // //   const adultFare = Number(
// // //     selectedFlight?.adultFare ??
// // //     previousPricing?.adultFare ??
// // //     selectedFlight?.finalPrice ??
// // //     0
// // //   );


// // //   const childFare = Number(
// // //     selectedFlight?.childFare ??
// // //     previousPricing?.childFare ??
// // //     0
// // //   );


// // //   const infantFare = Number(
// // //     selectedFlight?.infantFare ??
// // //     previousPricing?.infantFare ??
// // //     0
// // //   );


// // //   const adultTotal =
// // //     adultFare * adultCount;


// // //   const childTotal =
// // //     childFare * childCount;


// // //   const infantTotal =
// // //     infantFare * infantCount;


// // //   const passengerFareTotal =
// // //     adultTotal +
// // //     childTotal +
// // //     infantTotal;


// // //   // =====================================================
// // //   // EMPTY PASSENGER OBJECT
// // //   // =====================================================

// // //   const createPassenger = (type) => ({
// // //     type,

// // //     firstName: "",
// // //     lastName: "",
// // //     dob: "",
// // //     gender: "",
// // //     nationality: "",
// // //     passport: "",
// // //     passportExpiry: "",
// // //     email: "",
// // //     phone: "",
// // //     city: "",
// // //     address: "",
// // //     request: "",
// // //   });


// // //   // =====================================================
// // //   // CREATE PASSENGER LIST
// // //   // =====================================================

// // //   const createPassengerList = () => {

// // //     const list = [];


// // //     // Adults

// // //     for (
// // //       let i = 0;
// // //       i < adultCount;
// // //       i++
// // //     ) {

// // //       list.push(
// // //         createPassenger("Adult")
// // //       );

// // //     }


// // //     // Children

// // //     for (
// // //       let i = 0;
// // //       i < childCount;
// // //       i++
// // //     ) {

// // //       list.push(
// // //         createPassenger("Child")
// // //       );

// // //     }


// // //     // Infants

// // //     for (
// // //       let i = 0;
// // //       i < infantCount;
// // //       i++
// // //     ) {

// // //       list.push(
// // //         createPassenger("Infant")
// // //       );

// // //     }


// // //     return list;

// // //   };


// // //   // =====================================================
// // //   // PASSENGER FORM STATE
// // //   // =====================================================

// // //   const [
// // //     passengers,
// // //     setPassengers,
// // //   ] = useState(
// // //     createPassengerList
// // //   );


// // //   // =====================================================
// // //   // HANDLE PASSENGER CHANGE
// // //   // =====================================================

// // //   const handlePassengerChange = (
// // //     index,
// // //     field,
// // //     value
// // //   ) => {

// // //     setPassengers(
// // //       (prev) =>
// // //         prev.map(
// // //           (passenger, passengerIndex) => {

// // //             if (
// // //               passengerIndex !== index
// // //             ) {

// // //               return passenger;

// // //             }


// // //             return {
// // //               ...passenger,
// // //               [field]: value,
// // //             };

// // //           }
// // //         )
// // //     );

// // //   };


// // //   // =====================================================
// // //   // VALIDATION
// // //   // =====================================================

// // //   const validatePassengers = () => {

// // //     for (
// // //       let i = 0;
// // //       i < passengers.length;
// // //       i++
// // //     ) {

// // //       const passenger =
// // //         passengers[i];


// // //       const passengerNumber =
// // //         i + 1;


// // //       if (
// // //         !passenger.firstName.trim()
// // //       ) {

// // //         alert(
// // //           `Please enter First Name for Passenger ${passengerNumber}`
// // //         );

// // //         return false;

// // //       }


// // //       if (
// // //         !passenger.lastName.trim()
// // //       ) {

// // //         alert(
// // //           `Please enter Last Name for Passenger ${passengerNumber}`
// // //         );

// // //         return false;

// // //       }


// // //       if (
// // //         !passenger.dob
// // //       ) {

// // //         alert(
// // //           `Please select Date of Birth for Passenger ${passengerNumber}`
// // //         );

// // //         return false;

// // //       }


// // //       if (
// // //         !passenger.gender
// // //       ) {

// // //         alert(
// // //           `Please select Gender for Passenger ${passengerNumber}`
// // //         );

// // //         return false;

// // //       }


// // //       if (
// // //         !passenger.nationality.trim()
// // //       ) {

// // //         alert(
// // //           `Please enter Nationality for Passenger ${passengerNumber}`
// // //         );

// // //         return false;

// // //       }


// // //       if (
// // //         !passenger.passport.trim()
// // //       ) {

// // //         alert(
// // //           `Please enter Passport Number for Passenger ${passengerNumber}`
// // //         );

// // //         return false;

// // //       }


// // //       if (
// // //         !passenger.passportExpiry
// // //       ) {

// // //         alert(
// // //           `Please select Passport Expiry for Passenger ${passengerNumber}`
// // //         );

// // //         return false;

// // //       }


// // //       /*
// // //         Email and phone are mainly required
// // //         for the first passenger / contact person.
// // //       */

// // //       if (
// // //         i === 0 &&
// // //         !passenger.email.trim()
// // //       ) {

// // //         alert(
// // //           "Please enter Email Address"
// // //         );

// // //         return false;

// // //       }


// // //       if (
// // //         i === 0 &&
// // //         !passenger.phone.trim()
// // //       ) {

// // //         alert(
// // //           "Please enter Phone Number"
// // //         );

// // //         return false;

// // //       }


// // //       if (
// // //         !passenger.city.trim()
// // //       ) {

// // //         alert(
// // //           `Please enter City for Passenger ${passengerNumber}`
// // //         );

// // //         return false;

// // //       }

// // //     }


// // //     return true;

// // //   };


// // //   // =====================================================
// // //   // GET PASSENGER LABEL
// // //   // =====================================================

// // //   const getPassengerLabel = (
// // //     type,
// // //     index
// // //   ) => {

// // //     const sameTypePassengers =
// // //       passengers.filter(
// // //         (item) =>
// // //           item.type === type
// // //       );


// // //     const currentSameTypeIndex =
// // //       sameTypePassengers.findIndex(
// // //         (item) =>
// // //           item ===
// // //           passengers[index]
// // //       );


// // //     if (type === "Adult") {

// // //       return `Adult ${
// // //         currentSameTypeIndex + 1
// // //       }`;

// // //     }


// // //     if (type === "Child") {

// // //       return `Child ${
// // //         currentSameTypeIndex + 1
// // //       }`;

// // //     }


// // //     return `Infant ${
// // //       currentSameTypeIndex + 1
// // //     }`;

// // //   };


// // //   // =====================================================
// // //   // GET PASSENGER FARE
// // //   // =====================================================

// // //   const getPassengerFare = (
// // //     type
// // //   ) => {

// // //     if (
// // //       type === "Child"
// // //     ) {

// // //       return childFare;

// // //     }


// // //     if (
// // //       type === "Infant"
// // //     ) {

// // //       return infantFare;

// // //     }


// // //     return adultFare;

// // //   };


// // //   // =====================================================
// // //   // CONTINUE
// // //   // =====================================================

// // //   const handleContinue = () => {

// // //     if (
// // //       !validatePassengers()
// // //     ) {

// // //       return;

// // //     }


// // //     // ===================================================
// // //     // GET FLIGHT ID
// // //     // ===================================================

// // //     const flightId =
// // //       selectedFlight?._id ||
// // //       selectedFlight?.id ||
// // //       selectedFlight?.flightId;


// // //     if (!flightId) {

// // //       alert(
// // //         "Flight ID is missing. Please go back and select the flight again."
// // //       );

// // //       console.error(
// // //         "FLIGHT ID MISSING:",
// // //         selectedFlight
// // //       );

// // //       return;

// // //     }


// // //     // ===================================================
// // //     // CLEAN FLIGHT OBJECT
// // //     // ===================================================

// // //     const flight = {

// // //       ...selectedFlight,

// // //       _id:
// // //         flightId,

// // //       flightId:
// // //         flightId,


// // //       // -----------------------------------------------
// // //       // PASSENGER FARES
// // //       // -----------------------------------------------

// // //       adultFare:
// // //         adultFare,

// // //       childFare:
// // //         childFare,

// // //       infantFare:
// // //         infantFare,


// // //       // -----------------------------------------------
// // //       // PASSENGER TOTALS
// // //       // -----------------------------------------------

// // //       adultTotal:
// // //         adultTotal,

// // //       childTotal:
// // //         childTotal,

// // //       infantTotal:
// // //         infantTotal,

// // //       passengerFareTotal:
// // //         passengerFareTotal,


// // //       // -----------------------------------------------
// // //       // MEAL PRICES
// // //       // -----------------------------------------------

// // //       adultMealPrice:
// // //         Number(
// // //           selectedFlight?.adultMealPrice
// // //         ) || 0,

// // //       childMealPrice:
// // //         Number(
// // //           selectedFlight?.childMealPrice
// // //         ) || 0,

// // //       infantMealPrice:
// // //         Number(
// // //           selectedFlight?.infantMealPrice
// // //         ) || 0,


// // //       // -----------------------------------------------
// // //       // SEAT PRICES
// // //       // -----------------------------------------------

// // //       adultSeatPrice:
// // //         Number(
// // //           selectedFlight?.adultSeatPrice
// // //         ) || 0,

// // //       childSeatPrice:
// // //         Number(
// // //           selectedFlight?.childSeatPrice
// // //         ) || 0,

// // //       infantSeatPrice:
// // //         Number(
// // //           selectedFlight?.infantSeatPrice
// // //         ) || 0,


// // //       // -----------------------------------------------
// // //       // BAGGAGE PRICES
// // //       // -----------------------------------------------

// // //       adultBaggagePrice:
// // //         Number(
// // //           selectedFlight?.adultBaggagePrice
// // //         ) || 0,

// // //       childBaggagePrice:
// // //         Number(
// // //           selectedFlight?.childBaggagePrice
// // //         ) || 0,

// // //       infantBaggagePrice:
// // //         Number(
// // //           selectedFlight?.infantBaggagePrice
// // //         ) || 0,

// // //     };


// // //     // ===================================================
// // //     // BOOKING STATE
// // //     // ===================================================

// // //     const bookingState = {

// // //       flight,

// // //       flightId,


// // //       // -----------------------------------------------
// // //       // TRAVELLERS
// // //       // -----------------------------------------------

// // //       travellers: {

// // //         adults:
// // //           adultCount,

// // //         children:
// // //           childCount,

// // //         infants:
// // //           infantCount,

// // //         totalPassengers:
// // //           totalPassengers,

// // //         cabin:
// // //           travellers.cabin ||
// // //           "Economy",

// // //       },


// // //       // -----------------------------------------------
// // //       // IMPORTANT
// // //       // MULTIPLE PASSENGERS
// // //       // -----------------------------------------------

// // //       passengers:


// // //         passengers.map(
// // //           (passenger) => ({
// // //             ...passenger,

// // //             type:
// // //               passenger.type ||
// // //               "Adult",
// // //           })
// // //         ),


// // //       // -----------------------------------------------
// // //       // BACKWARD COMPATIBILITY
// // //       // -----------------------------------------------

// // //       passenger:
// // //         passengers[0],


// // //       // -----------------------------------------------
// // //       // PRICING
// // //       // -----------------------------------------------

// // //       pricing: {

// // //         adultFare,

// // //         childFare,

// // //         infantFare,

// // //         adultTotal,

// // //         childTotal,

// // //         infantTotal,

// // //         passengerFareTotal,

// // //       },

// // //     };


// // //     console.log(
// // //       "================================="
// // //     );

// // //     console.log(
// // //       "MULTIPLE PASSENGER BOOKING"
// // //     );

// // //     console.log(
// // //       "Adults:",
// // //       adultCount
// // //     );

// // //     console.log(
// // //       "Children:",
// // //       childCount
// // //     );

// // //     console.log(
// // //       "Infants:",
// // //       infantCount
// // //     );

// // //     console.log(
// // //       "Passengers:",
// // //       passengers
// // //     );

// // //     console.log(
// // //       "Passenger Fare:",
// // //       passengerFareTotal
// // //     );

// // //     console.log(
// // //       "================================="
// // //     );


// // //     // ===================================================
// // //     // GO TO SEAT SELECTION
// // //     // ===================================================

// // //     navigate(
// // //       "/seat-selection",
// // //       {
// // //         state:
// // //           bookingState,
// // //       }
// // //     );

// // //   };


// // //   // =====================================================
// // //   // NO FLIGHT
// // //   // =====================================================

// // //   if (!selectedFlight) {

// // //     return (
// // //       <>

// // //         <Navbar />

// // //         <section className="booking-page">

// // //           <div className="no-flight-selected">

// // //             <h2>
// // //               No Flight Selected ✈️
// // //             </h2>

// // //             <p>
// // //               Please search and select a
// // //               flight before continuing
// // //               to booking.
// // //             </p>

// // //             <button
// // //               className="back-home-btn"
// // //               onClick={() =>
// // //                 navigate("/")
// // //               }
// // //             >
// // //               Back To Home
// // //             </button>

// // //           </div>

// // //         </section>

// // //         <Footer />

// // //       </>
// // //     );

// // //   }


// // //   // =====================================================
// // //   // UI
// // //   // =====================================================

// // //   return (
// // //     <>

// // //       <Navbar />


// // //       <section className="booking-page">

// // //         <div className="booking-container">


// // //           {/* =================================================
// // //                     FLIGHT SUMMARY
// // //           ================================================= */}

// // //           <div
// // //             className="booking-flight-summary"
// // //             style={{
// // //               marginBottom:
// // //                 "25px",

// // //               padding:
// // //                 "18px",

// // //               borderRadius:
// // //                 "12px",

// // //               background:
// // //                 "#f8fafc",

// // //               border:
// // //                 "1px solid #e5e7eb",
// // //             }}
// // //           >

// // //             <h2>
// // //               Passenger Details
// // //             </h2>


// // //             <p
// // //               style={{
// // //                 margin:
// // //                   "8px 0",

// // //                 color:
// // //                   "#64748b",
// // //               }}
// // //             >

// // //               {selectedFlight.airline}

// // //               {" • "}

// // //               {selectedFlight.flightNo}

// // //               {" • "}

// // //               {selectedFlight.fromCode}

// // //               {" → "}

// // //               {selectedFlight.toCode}

// // //             </p>


// // //             {/* =================================================
// // //                          TRAVELLER BADGES
// // //             ================================================= */}

// // //             <div
// // //               style={{
// // //                 display:
// // //                   "flex",

// // //                 gap:
// // //                   "10px",

// // //                 flexWrap:
// // //                   "wrap",

// // //                 marginTop:
// // //                   "12px",
// // //               }}
// // //             >

// // //               <span className="traveller-badge">

// // //                 👤 {adultCount} Adult
// // //                 {adultCount > 1
// // //                   ? "s"
// // //                   : ""}

// // //               </span>


// // //               {childCount > 0 && (

// // //                 <span className="traveller-badge">

// // //                   🧒 {childCount} Child
// // //                   {childCount > 1
// // //                     ? "ren"
// // //                     : ""}

// // //                 </span>

// // //               )}


// // //               {infantCount > 0 && (

// // //                 <span className="traveller-badge">

// // //                   👶 {infantCount} Infant
// // //                   {infantCount > 1
// // //                     ? "s"
// // //                     : ""}

// // //                 </span>

// // //               )}


// // //               <span className="traveller-badge">

// // //                 💺{" "}
// // //                 {travellers.cabin ||
// // //                   "Economy"}

// // //               </span>

// // //             </div>


// // //             {/* =================================================
// // //                             PRICE
// // //             ================================================= */}

// // //             <div
// // //               style={{
// // //                 marginTop:
// // //                   "18px",

// // //                 paddingTop:
// // //                   "15px",

// // //                 borderTop:
// // //                   "1px solid #e5e7eb",
// // //               }}
// // //             >

// // //               {/* ADULT */}

// // //               <div
// // //                 style={{
// // //                   display:
// // //                     "flex",

// // //                   justifyContent:
// // //                     "space-between",

// // //                   marginBottom:
// // //                     "7px",
// // //                 }}
// // //               >

// // //                 <span>
// // //                   Adults ({adultCount})
// // //                 </span>

// // //                 <strong>

// // //                   ₹{" "}

// // //                   {adultTotal.toLocaleString(
// // //                     "en-IN"
// // //                   )}

// // //                 </strong>

// // //               </div>


// // //               {/* CHILD */}

// // //               {childCount > 0 && (

// // //                 <div
// // //                   style={{
// // //                     display:
// // //                       "flex",

// // //                     justifyContent:
// // //                       "space-between",

// // //                     marginBottom:
// // //                       "7px",
// // //                   }}
// // //                 >

// // //                   <span>
// // //                     Children ({childCount})
// // //                   </span>

// // //                   <strong>

// // //                     ₹{" "}

// // //                     {childTotal.toLocaleString(
// // //                       "en-IN"
// // //                     )}

// // //                   </strong>

// // //                 </div>

// // //               )}


// // //               {/* INFANT */}

// // //               {infantCount > 0 && (

// // //                 <div
// // //                   style={{
// // //                     display:
// // //                       "flex",

// // //                     justifyContent:
// // //                       "space-between",

// // //                     marginBottom:
// // //                       "7px",
// // //                   }}
// // //                 >

// // //                   <span>
// // //                     Infants ({infantCount})
// // //                   </span>

// // //                   <strong>

// // //                     ₹{" "}

// // //                     {infantTotal.toLocaleString(
// // //                       "en-IN"
// // //                     )}

// // //                   </strong>

// // //                 </div>

// // //               )}


// // //               {/* TOTAL */}

// // //               <div
// // //                 style={{
// // //                   display:
// // //                     "flex",

// // //                   justifyContent:
// // //                     "space-between",

// // //                   marginTop:
// // //                     "12px",

// // //                   paddingTop:
// // //                     "12px",

// // //                   borderTop:
// // //                     "1px solid #dbeafe",

// // //                   fontSize:
// // //                     "17px",
// // //                 }}
// // //               >

// // //                 <strong>
// // //                   Ticket Total
// // //                 </strong>

// // //                 <strong>

// // //                   ₹{" "}

// // //                   {passengerFareTotal.toLocaleString(
// // //                     "en-IN"
// // //                   )}

// // //                 </strong>

// // //               </div>

// // //             </div>

// // //           </div>


// // //           {/* =================================================
// // //                     ALL PASSENGERS
// // //           ================================================= */}

// // //           {passengers.map(
// // //             (
// // //               passenger,
// // //               index
// // //             ) => (

// // //               <div
// // //                 key={index}
// // //                 className="passenger-card"
// // //                 style={{
// // //                   marginBottom:
// // //                     "25px",

// // //                   padding:
// // //                     "24px",

// // //                   borderRadius:
// // //                     "16px",

// // //                   background:
// // //                     "#ffffff",

// // //                   border:
// // //                     "1px solid #e5e7eb",

// // //                   boxShadow:
// // //                     "0 5px 20px rgba(0,0,0,0.05)",
// // //                 }}
// // //               >

// // //                 {/* -----------------------------------------
// // //                           PASSENGER HEADER
// // //                 ----------------------------------------- */}

// // //                 <div
// // //                   style={{
// // //                     display:
// // //                       "flex",

// // //                     justifyContent:
// // //                       "space-between",

// // //                     alignItems:
// // //                       "center",

// // //                     gap:
// // //                       "15px",

// // //                     flexWrap:
// // //                       "wrap",

// // //                     marginBottom:
// // //                       "20px",
// // //                   }}
// // //                 >

// // //                   <div>

// // //                     <h2
// // //                       style={{
// // //                         margin:
// // //                           "0 0 5px",
// // //                       }}
// // //                     >

// // //                       {getPassengerLabel(
// // //                         passenger.type,
// // //                         index
// // //                       )}

// // //                     </h2>

// // //                     <span
// // //                       style={{
// // //                         display:
// // //                           "inline-block",

// // //                         padding:
// // //                           "5px 10px",

// // //                         borderRadius:
// // //                           "20px",

// // //                         background:
// // //                           passenger.type ===
// // //                           "Adult"
// // //                             ? "#e0f2fe"
// // //                             : passenger.type ===
// // //                               "Child"
// // //                             ? "#dcfce7"
// // //                             : "#fef3c7",

// // //                         color:
// // //                           "#334155",

// // //                         fontSize:
// // //                           "13px",

// // //                         fontWeight:
// // //                           "600",
// // //                       }}
// // //                     >

// // //                       {passenger.type}

// // //                     </span>

// // //                   </div>


// // //                   <strong
// // //                     style={{
// // //                       fontSize:
// // //                         "18px",
// // //                     }}
// // //                   >

// // //                     Ticket Fare: ₹{" "}

// // //                     {getPassengerFare(
// // //                       passenger.type
// // //                     ).toLocaleString(
// // //                       "en-IN"
// // //                     )}

// // //                   </strong>

// // //                 </div>


// // //                 {/* =================================================
// // //                               NAME
// // //                 ================================================= */}

// // //                 <div className="input-group">

// // //                   <input
// // //                     type="text"
// // //                     placeholder="First Name"
// // //                     value={
// // //                       passenger.firstName
// // //                     }
// // //                     onChange={(e) =>
// // //                       handlePassengerChange(
// // //                         index,
// // //                         "firstName",
// // //                         e.target.value
// // //                       )
// // //                     }
// // //                     required
// // //                   />


// // //                   <input
// // //                     type="text"
// // //                     placeholder="Last Name"
// // //                     value={
// // //                       passenger.lastName
// // //                     }
// // //                     onChange={(e) =>
// // //                       handlePassengerChange(
// // //                         index,
// // //                         "lastName",
// // //                         e.target.value
// // //                       )
// // //                     }
// // //                     required
// // //                   />

// // //                 </div>


// // //                 {/* =================================================
// // //                            DOB + GENDER
// // //                 ================================================= */}

// // //                 <div className="input-group">

// // //                   <div className="form-field">

// // //                     <label>
// // //                       Date of Birth
// // //                     </label>

// // //                     <input
// // //                       type="date"
// // //                       value={
// // //                         passenger.dob
// // //                       }
// // //                       onChange={(e) =>
// // //                         handlePassengerChange(
// // //                           index,
// // //                           "dob",
// // //                           e.target.value
// // //                         )
// // //                       }
// // //                       required
// // //                     />

// // //                   </div>


// // //                   <div className="form-field">

// // //                     <label>
// // //                       Gender
// // //                     </label>

// // //                     <select
// // //                       value={
// // //                         passenger.gender
// // //                       }
// // //                       onChange={(e) =>
// // //                         handlePassengerChange(
// // //                           index,
// // //                           "gender",
// // //                           e.target.value
// // //                         )
// // //                       }
// // //                       required
// // //                     >

// // //                       <option value="">
// // //                         Select Gender
// // //                       </option>

// // //                       <option value="Male">
// // //                         Male
// // //                       </option>

// // //                       <option value="Female">
// // //                         Female
// // //                       </option>

// // //                       <option value="Other">
// // //                         Other
// // //                       </option>

// // //                     </select>

// // //                   </div>

// // //                 </div>


// // //                 {/* =================================================
// // //                        NATIONALITY + PASSPORT
// // //                 ================================================= */}

// // //                 <div className="input-group">

// // //                   <input
// // //                     type="text"
// // //                     placeholder="Nationality"
// // //                     value={
// // //                       passenger.nationality
// // //                     }
// // //                     onChange={(e) =>
// // //                       handlePassengerChange(
// // //                         index,
// // //                         "nationality",
// // //                         e.target.value
// // //                       )
// // //                     }
// // //                     required
// // //                   />


// // //                   <input
// // //                     type="text"
// // //                     placeholder="Passport Number"
// // //                     value={
// // //                       passenger.passport
// // //                     }
// // //                     onChange={(e) =>
// // //                       handlePassengerChange(
// // //                         index,
// // //                         "passport",
// // //                         e.target.value
// // //                       )
// // //                     }
// // //                     required
// // //                   />

// // //                 </div>


// // //                 {/* =================================================
// // //                        PASSPORT EXPIRY + EMAIL
// // //                 ================================================= */}

// // //                 <div className="input-group">

// // //                   <div className="form-field">

// // //                     <label>
// // //                       Passport Expiry
// // //                     </label>

// // //                     <input
// // //                       type="date"
// // //                       value={
// // //                         passenger.passportExpiry
// // //                       }
// // //                       onChange={(e) =>
// // //                         handlePassengerChange(
// // //                           index,
// // //                           "passportExpiry",
// // //                           e.target.value
// // //                         )
// // //                       }
// // //                       required
// // //                     />

// // //                   </div>


// // //                   <input
// // //                     type="email"
// // //                     placeholder={
// // //                       index === 0
// // //                         ? "Email Address"
// // //                         : "Email (Optional)"
// // //                     }
// // //                     value={
// // //                       passenger.email
// // //                     }
// // //                     onChange={(e) =>
// // //                       handlePassengerChange(
// // //                         index,
// // //                         "email",
// // //                         e.target.value
// // //                       )
// // //                     }
// // //                     required={
// // //                       index === 0
// // //                     }
// // //                   />

// // //                 </div>


// // //                 {/* =================================================
// // //                            PHONE + CITY
// // //                 ================================================= */}

// // //                 <div className="input-group">

// // //                   <input
// // //                     type="tel"
// // //                     placeholder={
// // //                       index === 0
// // //                         ? "Phone Number"
// // //                         : "Phone (Optional)"
// // //                     }
// // //                     value={
// // //                       passenger.phone
// // //                     }
// // //                     onChange={(e) =>
// // //                       handlePassengerChange(
// // //                         index,
// // //                         "phone",
// // //                         e.target.value
// // //                       )
// // //                     }
// // //                     required={
// // //                       index === 0
// // //                     }
// // //                   />


// // //                   <input
// // //                     type="text"
// // //                     placeholder="City"
// // //                     value={
// // //                       passenger.city
// // //                     }
// // //                     onChange={(e) =>
// // //                       handlePassengerChange(
// // //                         index,
// // //                         "city",
// // //                         e.target.value
// // //                       )
// // //                     }
// // //                     required
// // //                   />

// // //                 </div>


// // //                 {/* =================================================
// // //                               ADDRESS
// // //                 ================================================= */}

// // //                 <textarea
// // //                   rows="4"
// // //                   placeholder="Full Address"
// // //                   value={
// // //                     passenger.address
// // //                   }
// // //                   onChange={(e) =>
// // //                     handlePassengerChange(
// // //                       index,
// // //                       "address",
// // //                       e.target.value
// // //                     )
// // //                   }
// // //                 />


// // //                 {/* =================================================
// // //                          SPECIAL REQUEST
// // //                 ================================================= */}

// // //                 <textarea
// // //                   rows="3"
// // //                   placeholder="Special Request (Optional)"
// // //                   value={
// // //                     passenger.request
// // //                   }
// // //                   onChange={(e) =>
// // //                     handlePassengerChange(
// // //                       index,
// // //                       "request",
// // //                       e.target.value
// // //                     )
// // //                   }
// // //                 />

// // //               </div>

// // //             )
// // //           )}


// // //           {/* =================================================
// // //                          FINAL SUMMARY
// // //           ================================================= */}

// // //           <div
// // //             className="booking-total-box"
// // //             style={{
// // //               marginTop:
// // //                 "10px",

// // //               padding:
// // //                 "22px",

// // //               borderRadius:
// // //                 "14px",

// // //               background:
// // //                 "#f8fafc",

// // //               border:
// // //                 "1px solid #e2e8f0",
// // //             }}
// // //           >

// // //             <h3>
// // //               Booking Summary
// // //             </h3>


// // //             <div
// // //               style={{
// // //                 display:
// // //                   "flex",

// // //                 justifyContent:
// // //                   "space-between",

// // //                 margin:
// // //                   "8px 0",
// // //               }}
// // //             >

// // //               <span>
// // //                 Adult ({adultCount})
// // //               </span>

// // //               <strong>
// // //                 ₹{" "}
// // //                 {adultTotal.toLocaleString(
// // //                   "en-IN"
// // //                 )}
// // //               </strong>

// // //             </div>


// // //             {childCount > 0 && (

// // //               <div
// // //                 style={{
// // //                   display:
// // //                     "flex",

// // //                   justifyContent:
// // //                     "space-between",

// // //                   margin:
// // //                     "8px 0",
// // //                 }}
// // //               >

// // //                 <span>
// // //                   Child ({childCount})
// // //                 </span>

// // //                 <strong>
// // //                   ₹{" "}
// // //                   {childTotal.toLocaleString(
// // //                     "en-IN"
// // //                   )}
// // //                 </strong>

// // //               </div>

// // //             )}


// // //             {infantCount > 0 && (

// // //               <div
// // //                 style={{
// // //                   display:
// // //                     "flex",

// // //                   justifyContent:
// // //                     "space-between",

// // //                   margin:
// // //                     "8px 0",
// // //                 }}
// // //               >

// // //                 <span>
// // //                   Infant ({infantCount})
// // //                 </span>

// // //                 <strong>
// // //                   ₹{" "}
// // //                   {infantTotal.toLocaleString(
// // //                     "en-IN"
// // //                   )}
// // //                 </strong>

// // //               </div>

// // //             )}


// // //             <div
// // //               style={{
// // //                 display:
// // //                   "flex",

// // //                 justifyContent:
// // //                   "space-between",

// // //                 marginTop:
// // //                   "15px",

// // //                 paddingTop:
// // //                   "15px",

// // //                 borderTop:
// // //                   "1px solid #cbd5e1",

// // //                 fontSize:
// // //                   "19px",
// // //               }}
// // //             >

// // //               <strong>
// // //                 Total Flight Fare
// // //               </strong>

// // //               <strong>
// // //                 ₹{" "}
// // //                 {passengerFareTotal.toLocaleString(
// // //                   "en-IN"
// // //                 )}
// // //               </strong>

// // //             </div>

// // //           </div>


// // //           {/* =================================================
// // //                          CONTINUE
// // //           ================================================= */}

// // //           <button
// // //             type="button"
// // //             className="continue-btn"
// // //             onClick={
// // //               handleContinue
// // //             }
// // //           >

// // //             Continue To Seat Selection

// // //           </button>


// // //         </div>

// // //       </section>


// // //       <Footer />

// // //     </>
// // //   );

// // // }


// // // export default Booking;


























































// // import "./Booking.css";

// // import { useState } from "react";
// // import {
// //   useLocation,
// //   useNavigate,
// // } from "react-router-dom";

// // import Navbar from "../../Components/Navbar/Navbar";
// // import Footer from "../../Components/Footer/Footer";


// // function Booking() {

// //   const navigate = useNavigate();
// //   const location = useLocation();


// //   // =====================================================
// //   // FLIGHT DATA
// //   // =====================================================

// //   const selectedFlight =
// //     location.state?.flight || null;


// //   // =====================================================
// //   // TRAVELLERS
// //   // =====================================================

// //   const travellers =
// //     location.state?.travellers || {
// //       adults: 1,
// //       children: 0,
// //       infants: 0,
// //       cabin: "Economy",
// //     };


// //   const previousPricing =
// //     location.state?.pricing || {};


// //   // =====================================================
// //   // PASSENGER COUNTS
// //   // =====================================================

// //   const adultCount = Math.max(
// //     Number(travellers.adults) || 1,
// //     1
// //   );


// //   const childCount = Math.max(
// //     Number(travellers.children) || 0,
// //     0
// //   );


// //   const infantCount = Math.max(
// //     Number(travellers.infants) || 0,
// //     0
// //   );


// //   const totalPassengers =
// //     adultCount +
// //     childCount +
// //     infantCount;


// //   // =====================================================
// //   // FARES
// //   // =====================================================

// //   const adultFare = Number(
// //     selectedFlight?.adultFare ??
// //     previousPricing?.adultFare ??
// //     selectedFlight?.finalPrice ??
// //     0
// //   );


// //   const childFare = Number(
// //     selectedFlight?.childFare ??
// //     previousPricing?.childFare ??
// //     0
// //   );


// //   const infantFare = Number(
// //     selectedFlight?.infantFare ??
// //     previousPricing?.infantFare ??
// //     0
// //   );


// //   const adultTotal =
// //     adultFare * adultCount;


// //   const childTotal =
// //     childFare * childCount;


// //   const infantTotal =
// //     infantFare * infantCount;


// //   const passengerFareTotal =
// //     adultTotal +
// //     childTotal +
// //     infantTotal;


// //   // =====================================================
// //   // EMPTY PASSENGER OBJECT
// //   // =====================================================

// //   const createPassenger = (type) => ({
// //     type,

// //     firstName: "",
// //     lastName: "",
// //     dob: "",
// //     gender: "",
// //     nationality: "",
// //     passport: "",
// //     passportExpiry: "",
// //     email: "",
// //     phone: "",
// //     city: "",
// //     address: "",
// //     request: "",
// //   });


// //   // =====================================================
// //   // CREATE PASSENGER LIST
// //   // =====================================================

// //   const createPassengerList = () => {

// //     const list = [];


// //     // Adults

// //     for (
// //       let i = 0;
// //       i < adultCount;
// //       i++
// //     ) {

// //       list.push(
// //         createPassenger("Adult")
// //       );

// //     }


// //     // Children

// //     for (
// //       let i = 0;
// //       i < childCount;
// //       i++
// //     ) {

// //       list.push(
// //         createPassenger("Child")
// //       );

// //     }


// //     // Infants

// //     for (
// //       let i = 0;
// //       i < infantCount;
// //       i++
// //     ) {

// //       list.push(
// //         createPassenger("Infant")
// //       );

// //     }


// //     return list;

// //   };


// //   // =====================================================
// //   // PASSENGER FORM STATE
// //   // =====================================================

// //   const [
// //     passengers,
// //     setPassengers,
// //   ] = useState(
// //     createPassengerList
// //   );


// //   // =====================================================
// //   // HANDLE PASSENGER CHANGE
// //   // =====================================================

// //   const handlePassengerChange = (
// //     index,
// //     field,
// //     value
// //   ) => {

// //     setPassengers(
// //       (prev) =>
// //         prev.map(
// //           (passenger, passengerIndex) => {

// //             if (
// //               passengerIndex !== index
// //             ) {

// //               return passenger;

// //             }


// //             return {
// //               ...passenger,
// //               [field]: value,
// //             };

// //           }
// //         )
// //     );

// //   };


// //   // =====================================================
// //   // VALIDATION
// //   // =====================================================

// //   const validatePassengers = () => {

// //     for (
// //       let i = 0;
// //       i < passengers.length;
// //       i++
// //     ) {

// //       const passenger =
// //         passengers[i];


// //       const passengerNumber =
// //         i + 1;


// //       if (
// //         !passenger.firstName.trim()
// //       ) {

// //         alert(
// //           `Please enter First Name for Passenger ${passengerNumber}`
// //         );

// //         return false;

// //       }


// //       if (
// //         !passenger.lastName.trim()
// //       ) {

// //         alert(
// //           `Please enter Last Name for Passenger ${passengerNumber}`
// //         );

// //         return false;

// //       }


// //       if (
// //         !passenger.dob
// //       ) {

// //         alert(
// //           `Please select Date of Birth for Passenger ${passengerNumber}`
// //         );

// //         return false;

// //       }


// //       if (
// //         !passenger.gender
// //       ) {

// //         alert(
// //           `Please select Gender for Passenger ${passengerNumber}`
// //         );

// //         return false;

// //       }


// //       if (
// //         !passenger.nationality.trim()
// //       ) {

// //         alert(
// //           `Please enter Nationality for Passenger ${passengerNumber}`
// //         );

// //         return false;

// //       }


// //       if (
// //         !passenger.passport.trim()
// //       ) {

// //         alert(
// //           `Please enter Passport Number for Passenger ${passengerNumber}`
// //         );

// //         return false;

// //       }


// //       if (
// //         !passenger.passportExpiry
// //       ) {

// //         alert(
// //           `Please select Passport Expiry for Passenger ${passengerNumber}`
// //         );

// //         return false;

// //       }


// //       /*
// //         Email and phone are mainly required
// //         for the first passenger / contact person.
// //       */

// //       if (
// //         i === 0 &&
// //         !passenger.email.trim()
// //       ) {

// //         alert(
// //           "Please enter Email Address"
// //         );

// //         return false;

// //       }


// //       if (
// //         i === 0 &&
// //         !passenger.phone.trim()
// //       ) {

// //         alert(
// //           "Please enter Phone Number"
// //         );

// //         return false;

// //       }


// //       if (
// //         !passenger.city.trim()
// //       ) {

// //         alert(
// //           `Please enter City for Passenger ${passengerNumber}`
// //         );

// //         return false;

// //       }

// //     }


// //     return true;

// //   };


// //   // =====================================================
// //   // GET PASSENGER LABEL
// //   // =====================================================

// //   const getPassengerLabel = (
// //     type,
// //     index
// //   ) => {

// //     const sameTypePassengers =
// //       passengers.filter(
// //         (item) =>
// //           item.type === type
// //       );


// //     const currentSameTypeIndex =
// //       sameTypePassengers.findIndex(
// //         (item) =>
// //           item ===
// //           passengers[index]
// //       );


// //     if (type === "Adult") {

// //       return `Adult ${
// //         currentSameTypeIndex + 1
// //       }`;

// //     }


// //     if (type === "Child") {

// //       return `Child ${
// //         currentSameTypeIndex + 1
// //       }`;

// //     }


// //     return `Infant ${
// //       currentSameTypeIndex + 1
// //     }`;

// //   };


// //   // =====================================================
// //   // GET PASSENGER FARE
// //   // =====================================================

// //   const getPassengerFare = (
// //     type
// //   ) => {

// //     if (
// //       type === "Child"
// //     ) {

// //       return childFare;

// //     }


// //     if (
// //       type === "Infant"
// //     ) {

// //       return infantFare;

// //     }


// //     return adultFare;

// //   };


// //   // =====================================================
// //   // CONTINUE
// //   // =====================================================

// //   const handleContinue = () => {

// //     if (
// //       !validatePassengers()
// //     ) {

// //       return;

// //     }


// //     // ===================================================
// //     // GET FLIGHT ID
// //     // ===================================================

// //     const flightId =
// //       selectedFlight?._id ||
// //       selectedFlight?.id ||
// //       selectedFlight?.flightId;


// //     if (!flightId) {

// //       alert(
// //         "Flight ID is missing. Please go back and select the flight again."
// //       );

// //       console.error(
// //         "FLIGHT ID MISSING:",
// //         selectedFlight
// //       );

// //       return;

// //     }


// //     // ===================================================
// //     // CLEAN FLIGHT OBJECT
// //     // ===================================================

// //     const flight = {

// //       ...selectedFlight,

// //       _id:
// //         flightId,

// //       flightId:
// //         flightId,


// //       // -----------------------------------------------
// //       // PASSENGER FARES
// //       // -----------------------------------------------

// //       adultFare:
// //         adultFare,

// //       childFare:
// //         childFare,

// //       infantFare:
// //         infantFare,


// //       // -----------------------------------------------
// //       // PASSENGER TOTALS
// //       // -----------------------------------------------

// //       adultTotal:
// //         adultTotal,

// //       childTotal:
// //         childTotal,

// //       infantTotal:
// //         infantTotal,

// //       passengerFareTotal:
// //         passengerFareTotal,


// //       // -----------------------------------------------
// //       // MEAL PRICES
// //       // -----------------------------------------------

// //       adultMealPrice:
// //         Number(
// //           selectedFlight?.adultMealPrice
// //         ) || 0,

// //       childMealPrice:
// //         Number(
// //           selectedFlight?.childMealPrice
// //         ) || 0,

// //       infantMealPrice:
// //         Number(
// //           selectedFlight?.infantMealPrice
// //         ) || 0,


// //       // -----------------------------------------------
// //       // SEAT PRICES
// //       // -----------------------------------------------

// //       adultSeatPrice:
// //         Number(
// //           selectedFlight?.adultSeatPrice
// //         ) || 0,

// //       childSeatPrice:
// //         Number(
// //           selectedFlight?.childSeatPrice
// //         ) || 0,

// //       infantSeatPrice:
// //         Number(
// //           selectedFlight?.infantSeatPrice
// //         ) || 0,


// //       // -----------------------------------------------
// //       // BAGGAGE PRICES
// //       // -----------------------------------------------

// //       adultBaggagePrice:
// //         Number(
// //           selectedFlight?.adultBaggagePrice
// //         ) || 0,

// //       childBaggagePrice:
// //         Number(
// //           selectedFlight?.childBaggagePrice
// //         ) || 0,

// //       infantBaggagePrice:
// //         Number(
// //           selectedFlight?.infantBaggagePrice
// //         ) || 0,

// //     };


// //     // ===================================================
// //     // BOOKING STATE
// //     // ===================================================

// //     const bookingState = {

// //       flight,

// //       flightId,


// //       // -----------------------------------------------
// //       // TRAVELLERS
// //       // -----------------------------------------------

// //       travellers: {

// //         adults:
// //           adultCount,

// //         children:
// //           childCount,

// //         infants:
// //           infantCount,

// //         totalPassengers:
// //           totalPassengers,

// //         cabin:
// //           travellers.cabin ||
// //           "Economy",

// //       },


// //       // -----------------------------------------------
// //       // IMPORTANT
// //       // MULTIPLE PASSENGERS
// //       // -----------------------------------------------

// //       passengers:


// //         passengers.map(
// //           (passenger) => ({
// //             ...passenger,

// //             type:
// //               passenger.type ||
// //               "Adult",
// //           })
// //         ),


// //       // -----------------------------------------------
// //       // BACKWARD COMPATIBILITY
// //       // -----------------------------------------------

// //       passenger:
// //         passengers[0],


// //       // -----------------------------------------------
// //       // PRICING
// //       // -----------------------------------------------

// //       pricing: {

// //         adultFare,

// //         childFare,

// //         infantFare,

// //         adultTotal,

// //         childTotal,

// //         infantTotal,

// //         passengerFareTotal,

// //       },

// //     };


// //     console.log(
// //       "================================="
// //     );

// //     console.log(
// //       "MULTIPLE PASSENGER BOOKING"
// //     );

// //     console.log(
// //       "Adults:",
// //       adultCount
// //     );

// //     console.log(
// //       "Children:",
// //       childCount
// //     );

// //     console.log(
// //       "Infants:",
// //       infantCount
// //     );

// //     console.log(
// //       "Passengers:",
// //       passengers
// //     );

// //     console.log(
// //       "Passenger Fare:",
// //       passengerFareTotal
// //     );

// //     console.log(
// //       "================================="
// //     );


// //     // ===================================================
// //     // GO TO SEAT SELECTION
// //     // ===================================================

// //     navigate(
// //       "/seat-selection",
// //       {
// //         state:
// //           bookingState,
// //       }
// //     );

// //   };


// //   // =====================================================
// //   // NO FLIGHT
// //   // =====================================================

// //   if (!selectedFlight) {

// //     return (
// //       <>

// //         <Navbar />

// //         <section className="booking-page">

// //           <div className="no-flight-selected">

// //             <h2>
// //               No Flight Selected ✈️
// //             </h2>

// //             <p>
// //               Please search and select a
// //               flight before continuing
// //               to booking.
// //             </p>

// //             <button
// //               className="back-home-btn"
// //               onClick={() =>
// //                 navigate("/")
// //               }
// //             >
// //               Back To Home
// //             </button>

// //           </div>

// //         </section>

// //         <Footer />

// //       </>
// //     );

// //   }


// //   // =====================================================
// //   // UI
// //   // =====================================================

// //   return (
// //     <>

// //       <Navbar />


// //       <section className="booking-page">

// //         <div className="booking-container">


// //           {/* =================================================
// //                     FLIGHT SUMMARY
// //           ================================================= */}

// //           <div
// //             className="booking-flight-summary"
// //             style={{
// //               marginBottom:
// //                 "25px",

// //               padding:
// //                 "18px",

// //               borderRadius:
// //                 "12px",

// //               background:
// //                 "#f8fafc",

// //               border:
// //                 "1px solid #e5e7eb",
// //             }}
// //           >

// //             <h2>
// //               Passenger Details
// //             </h2>


// //             <p
// //               style={{
// //                 margin:
// //                   "8px 0",

// //                 color:
// //                   "#64748b",
// //               }}
// //             >

// //               {selectedFlight.airline}

// //               {" • "}

// //               {selectedFlight.flightNo}

// //               {" • "}

// //               {selectedFlight.fromCode}

// //               {" → "}

// //               {selectedFlight.toCode}

// //             </p>


// //             {/* =================================================
// //                          TRAVELLER BADGES
// //             ================================================= */}

// //             <div
// //               style={{
// //                 display:
// //                   "flex",

// //                 gap:
// //                   "10px",

// //                 flexWrap:
// //                   "wrap",

// //                 marginTop:
// //                   "12px",
// //               }}
// //             >

// //               <span className="traveller-badge">

// //                 👤 {adultCount} Adult
// //                 {adultCount > 1
// //                   ? "s"
// //                   : ""}

// //               </span>


// //               {childCount > 0 && (

// //                 <span className="traveller-badge">

// //                   🧒 {childCount} Child
// //                   {childCount > 1
// //                     ? "ren"
// //                     : ""}

// //                 </span>

// //               )}


// //               {infantCount > 0 && (

// //                 <span className="traveller-badge">

// //                   👶 {infantCount} Infant
// //                   {infantCount > 1
// //                     ? "s"
// //                     : ""}

// //                 </span>

// //               )}


// //               <span className="traveller-badge">

// //                 💺{" "}
// //                 {travellers.cabin ||
// //                   "Economy"}

// //               </span>

// //             </div>


// //             {/* =================================================
// //                             PRICE
// //             ================================================= */}

// //             <div
// //               style={{
// //                 marginTop:
// //                   "18px",

// //                 paddingTop:
// //                   "15px",

// //                 borderTop:
// //                   "1px solid #e5e7eb",
// //               }}
// //             >

// //               {/* ADULT */}

// //               <div
// //                 style={{
// //                   display:
// //                     "flex",

// //                   justifyContent:
// //                     "space-between",

// //                   marginBottom:
// //                     "7px",
// //                 }}
// //               >

// //                 <span>
// //                   Adults ({adultCount})
// //                 </span>

// //                 <strong>

// //                   ₹{" "}

// //                   {adultTotal.toLocaleString(
// //                     "en-IN"
// //                   )}

// //                 </strong>

// //               </div>


// //               {/* CHILD */}

// //               {childCount > 0 && (

// //                 <div
// //                   style={{
// //                     display:
// //                       "flex",

// //                     justifyContent:
// //                       "space-between",

// //                     marginBottom:
// //                       "7px",
// //                   }}
// //                 >

// //                   <span>
// //                     Children ({childCount})
// //                   </span>

// //                   <strong>

// //                     ₹{" "}

// //                     {childTotal.toLocaleString(
// //                       "en-IN"
// //                     )}

// //                   </strong>

// //                 </div>

// //               )}


// //               {/* INFANT */}

// //               {infantCount > 0 && (

// //                 <div
// //                   style={{
// //                     display:
// //                       "flex",

// //                     justifyContent:
// //                       "space-between",

// //                     marginBottom:
// //                       "7px",
// //                   }}
// //                 >

// //                   <span>
// //                     Infants ({infantCount})
// //                   </span>

// //                   <strong>

// //                     ₹{" "}

// //                     {infantTotal.toLocaleString(
// //                       "en-IN"
// //                     )}

// //                   </strong>

// //                 </div>

// //               )}


// //               {/* TOTAL */}

// //               <div
// //                 style={{
// //                   display:
// //                     "flex",

// //                   justifyContent:
// //                     "space-between",

// //                   marginTop:
// //                     "12px",

// //                   paddingTop:
// //                     "12px",

// //                   borderTop:
// //                     "1px solid #dbeafe",

// //                   fontSize:
// //                     "17px",
// //                 }}
// //               >

// //                 <strong>
// //                   Ticket Total
// //                 </strong>

// //                 <strong>

// //                   ₹{" "}

// //                   {passengerFareTotal.toLocaleString(
// //                     "en-IN"
// //                   )}

// //                 </strong>

// //               </div>

// //             </div>

// //           </div>


// //           {/* =================================================
// //                     ALL PASSENGERS
// //           ================================================= */}

// //           {passengers.map(
// //             (
// //               passenger,
// //               index
// //             ) => (

// //               <div
// //                 key={index}
// //                 className="passenger-card"
// //                 style={{
// //                   marginBottom:
// //                     "25px",

// //                   padding:
// //                     "24px",

// //                   borderRadius:
// //                     "16px",

// //                   background:
// //                     "#ffffff",

// //                   border:
// //                     "1px solid #e5e7eb",

// //                   boxShadow:
// //                     "0 5px 20px rgba(0,0,0,0.05)",
// //                 }}
// //               >

// //                 {/* -----------------------------------------
// //                           PASSENGER HEADER
// //                 ----------------------------------------- */}

// //                 <div
// //                   style={{
// //                     display:
// //                       "flex",

// //                     justifyContent:
// //                       "space-between",

// //                     alignItems:
// //                       "center",

// //                     gap:
// //                       "15px",

// //                     flexWrap:
// //                       "wrap",

// //                     marginBottom:
// //                       "20px",
// //                   }}
// //                 >

// //                   <div>

// //                     <h2
// //                       style={{
// //                         margin:
// //                           "0 0 5px",
// //                       }}
// //                     >

// //                       {getPassengerLabel(
// //                         passenger.type,
// //                         index
// //                       )}

// //                     </h2>

// //                     <span
// //                       style={{
// //                         display:
// //                           "inline-block",

// //                         padding:
// //                           "5px 10px",

// //                         borderRadius:
// //                           "20px",

// //                         background:
// //                           passenger.type ===
// //                           "Adult"
// //                             ? "#e0f2fe"
// //                             : passenger.type ===
// //                               "Child"
// //                             ? "#dcfce7"
// //                             : "#fef3c7",

// //                         color:
// //                           "#334155",

// //                         fontSize:
// //                           "13px",

// //                         fontWeight:
// //                           "600",
// //                       }}
// //                     >

// //                       {passenger.type}

// //                     </span>

// //                   </div>


// //                   <strong
// //                     style={{
// //                       fontSize:
// //                         "18px",
// //                     }}
// //                   >

// //                     Ticket Fare: ₹{" "}

// //                     {getPassengerFare(
// //                       passenger.type
// //                     ).toLocaleString(
// //                       "en-IN"
// //                     )}

// //                   </strong>

// //                 </div>


// //                 {/* =================================================
// //                               NAME
// //                 ================================================= */}

// //                 <div className="input-group">

// //                   <input
// //                     type="text"
// //                     placeholder="First Name"
// //                     value={
// //                       passenger.firstName
// //                     }
// //                     onChange={(e) =>
// //                       handlePassengerChange(
// //                         index,
// //                         "firstName",
// //                         e.target.value
// //                       )
// //                     }
// //                     required
// //                   />


// //                   <input
// //                     type="text"
// //                     placeholder="Last Name"
// //                     value={
// //                       passenger.lastName
// //                     }
// //                     onChange={(e) =>
// //                       handlePassengerChange(
// //                         index,
// //                         "lastName",
// //                         e.target.value
// //                       )
// //                     }
// //                     required
// //                   />

// //                 </div>


// //                 {/* =================================================
// //                            DOB + GENDER
// //                 ================================================= */}

// //                 <div className="input-group">

// //                   <div className="form-field">

// //                     <label>
// //                       Date of Birth
// //                     </label>

// //                     <input
// //                       type="date"
// //                       value={
// //                         passenger.dob
// //                       }
// //                       onChange={(e) =>
// //                         handlePassengerChange(
// //                           index,
// //                           "dob",
// //                           e.target.value
// //                         )
// //                       }
// //                       required
// //                     />

// //                   </div>


// //                   <div className="form-field">

// //                     <label>
// //                       Gender
// //                     </label>

// //                     <select
// //                       value={
// //                         passenger.gender
// //                       }
// //                       onChange={(e) =>
// //                         handlePassengerChange(
// //                           index,
// //                           "gender",
// //                           e.target.value
// //                         )
// //                       }
// //                       required
// //                     >

// //                       <option value="">
// //                         Select Gender
// //                       </option>

// //                       <option value="Male">
// //                         Male
// //                       </option>

// //                       <option value="Female">
// //                         Female
// //                       </option>

// //                       <option value="Other">
// //                         Other
// //                       </option>

// //                     </select>

// //                   </div>

// //                 </div>


// //                 {/* =================================================
// //                        NATIONALITY + PASSPORT
// //                 ================================================= */}

// //                 <div className="input-group">

// //                   <input
// //                     type="text"
// //                     placeholder="Nationality"
// //                     value={
// //                       passenger.nationality
// //                     }
// //                     onChange={(e) =>
// //                       handlePassengerChange(
// //                         index,
// //                         "nationality",
// //                         e.target.value
// //                       )
// //                     }
// //                     required
// //                   />


// //                   <input
// //                     type="text"
// //                     placeholder="Passport Number"
// //                     value={
// //                       passenger.passport
// //                     }
// //                     onChange={(e) =>
// //                       handlePassengerChange(
// //                         index,
// //                         "passport",
// //                         e.target.value
// //                       )
// //                     }
// //                     required
// //                   />

// //                 </div>


// //                 {/* =================================================
// //                        PASSPORT EXPIRY + EMAIL
// //                 ================================================= */}

// //                 <div className="input-group">

// //                   <div className="form-field">

// //                     <label>
// //                       Passport Expiry
// //                     </label>

// //                     <input
// //                       type="date"
// //                       value={
// //                         passenger.passportExpiry
// //                       }
// //                       onChange={(e) =>
// //                         handlePassengerChange(
// //                           index,
// //                           "passportExpiry",
// //                           e.target.value
// //                         )
// //                       }
// //                       required
// //                     />

// //                   </div>


// //                   <input
// //                     type="email"
// //                     placeholder={
// //                       index === 0
// //                         ? "Email Address"
// //                         : "Email (Optional)"
// //                     }
// //                     value={
// //                       passenger.email
// //                     }
// //                     onChange={(e) =>
// //                       handlePassengerChange(
// //                         index,
// //                         "email",
// //                         e.target.value
// //                       )
// //                     }
// //                     required={
// //                       index === 0
// //                     }
// //                   />

// //                 </div>


// //                 {/* =================================================
// //                            PHONE + CITY
// //                 ================================================= */}

// //                 <div className="input-group">

// //                   <input
// //                     type="tel"
// //                     placeholder={
// //                       index === 0
// //                         ? "Phone Number"
// //                         : "Phone (Optional)"
// //                     }
// //                     value={
// //                       passenger.phone
// //                     }
// //                     onChange={(e) =>
// //                       handlePassengerChange(
// //                         index,
// //                         "phone",
// //                         e.target.value
// //                       )
// //                     }
// //                     required={
// //                       index === 0
// //                     }
// //                   />


// //                   <input
// //                     type="text"
// //                     placeholder="City"
// //                     value={
// //                       passenger.city
// //                     }
// //                     onChange={(e) =>
// //                       handlePassengerChange(
// //                         index,
// //                         "city",
// //                         e.target.value
// //                       )
// //                     }
// //                     required
// //                   />

// //                 </div>


// //                 {/* =================================================
// //                               ADDRESS
// //                 ================================================= */}

// //                 <textarea
// //                   rows="4"
// //                   placeholder="Full Address"
// //                   value={
// //                     passenger.address
// //                   }
// //                   onChange={(e) =>
// //                     handlePassengerChange(
// //                       index,
// //                       "address",
// //                       e.target.value
// //                     )
// //                   }
// //                 />


// //                 {/* =================================================
// //                          SPECIAL REQUEST
// //                 ================================================= */}

// //                 <textarea
// //                   rows="3"
// //                   placeholder="Special Request (Optional)"
// //                   value={
// //                     passenger.request
// //                   }
// //                   onChange={(e) =>
// //                     handlePassengerChange(
// //                       index,
// //                       "request",
// //                       e.target.value
// //                     )
// //                   }
// //                 />

// //               </div>

// //             )
// //           )}


// //           {/* =================================================
// //                          FINAL SUMMARY
// //           ================================================= */}

// //           <div
// //             className="booking-total-box"
// //             style={{
// //               marginTop:
// //                 "10px",

// //               padding:
// //                 "22px",

// //               borderRadius:
// //                 "14px",

// //               background:
// //                 "#f8fafc",

// //               border:
// //                 "1px solid #e2e8f0",
// //             }}
// //           >

// //             <h3>
// //               Booking Summary
// //             </h3>


// //             <div
// //               style={{
// //                 display:
// //                   "flex",

// //                 justifyContent:
// //                   "space-between",

// //                 margin:
// //                   "8px 0",
// //               }}
// //             >

// //               <span>
// //                 Adult ({adultCount})
// //               </span>

// //               <strong>
// //                 ₹{" "}
// //                 {adultTotal.toLocaleString(
// //                   "en-IN"
// //                 )}
// //               </strong>

// //             </div>


// //             {childCount > 0 && (

// //               <div
// //                 style={{
// //                   display:
// //                     "flex",

// //                   justifyContent:
// //                     "space-between",

// //                   margin:
// //                     "8px 0",
// //                 }}
// //               >

// //                 <span>
// //                   Child ({childCount})
// //                 </span>

// //                 <strong>
// //                   ₹{" "}
// //                   {childTotal.toLocaleString(
// //                     "en-IN"
// //                   )}
// //                 </strong>

// //               </div>

// //             )}


// //             {infantCount > 0 && (

// //               <div
// //                 style={{
// //                   display:
// //                     "flex",

// //                   justifyContent:
// //                     "space-between",

// //                   margin:
// //                     "8px 0",
// //                 }}
// //               >

// //                 <span>
// //                   Infant ({infantCount})
// //                 </span>

// //                 <strong>
// //                   ₹{" "}
// //                   {infantTotal.toLocaleString(
// //                     "en-IN"
// //                   )}
// //                 </strong>

// //               </div>

// //             )}


// //             <div
// //               style={{
// //                 display:
// //                   "flex",

// //                 justifyContent:
// //                   "space-between",

// //                 marginTop:
// //                   "15px",

// //                 paddingTop:
// //                   "15px",

// //                 borderTop:
// //                   "1px solid #cbd5e1",

// //                 fontSize:
// //                   "19px",
// //               }}
// //             >

// //               <strong>
// //                 Total Flight Fare
// //               </strong>

// //               <strong>
// //                 ₹{" "}
// //                 {passengerFareTotal.toLocaleString(
// //                   "en-IN"
// //                 )}
// //               </strong>

// //             </div>

// //           </div>


// //           {/* =================================================
// //                          CONTINUE
// //           ================================================= */}

// //           <button
// //             type="button"
// //             className="continue-btn"
// //             onClick={
// //               handleContinue
// //             }
// //           >

// //             Continue To Seat Selection

// //           </button>


// //         </div>

// //       </section>


// //       <Footer />

// //     </>
// //   );

// // }


// // export default Booking;





























// import "./Booking.css";

// import { useState } from "react";
// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";

// function Booking() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // =====================================================
//   // FLIGHT DATA
//   // =====================================================

//   const selectedFlight = location.state?.flight || null;

//   // =====================================================
//   // TRAVELLERS
//   // =====================================================

//   const travellers = location.state?.travellers || {
//     adults: 1,
//     children: 0,
//     infants: 0,
//     cabin: "Economy",
//   };

//   const previousPricing = location.state?.pricing || {};

//   // =====================================================
//   // PASSENGER COUNTS
//   // =====================================================

//   const adultCount = Math.max(
//     Number(travellers.adults) || 1,
//     1
//   );

//   const childCount = Math.max(
//     Number(travellers.children) || 0,
//     0
//   );

//   const infantCount = Math.max(
//     Number(travellers.infants) || 0,
//     0
//   );

//   const totalPassengers =
//     adultCount +
//     childCount +
//     infantCount;

//   // =====================================================
//   // FARES
//   // =====================================================

//   const adultFare = Number(
//     selectedFlight?.adultFare ??
//       previousPricing?.adultFare ??
//       selectedFlight?.finalPrice ??
//       selectedFlight?.price ??
//       0
//   );

//   const childFare = Number(
//     selectedFlight?.childFare ??
//       previousPricing?.childFare ??
//       0
//   );

//   const infantFare = Number(
//     selectedFlight?.infantFare ??
//       previousPricing?.infantFare ??
//       0
//   );

//   const adultTotal = adultFare * adultCount;
//   const childTotal = childFare * childCount;
//   const infantTotal = infantFare * infantCount;

//   const passengerFareTotal =
//     adultTotal +
//     childTotal +
//     infantTotal;

//   // =====================================================
//   // PASSENGER OBJECT
//   // =====================================================

//   const createPassenger = (type) => ({
//     type,
//     firstName: "",
//     lastName: "",
//     dob: "",
//     gender: "",
//     nationality: "",
//     passport: "",
//     passportExpiry: "",
//     email: "",
//     phone: "",
//     city: "",
//     address: "",
//     request: "",
//   });

//   // =====================================================
//   // PASSENGER LIST
//   // =====================================================

//   const createPassengerList = () => {
//     const list = [];

//     for (let i = 0; i < adultCount; i++) {
//       list.push(createPassenger("Adult"));
//     }

//     for (let i = 0; i < childCount; i++) {
//       list.push(createPassenger("Child"));
//     }

//     for (let i = 0; i < infantCount; i++) {
//       list.push(createPassenger("Infant"));
//     }

//     return list;
//   };

//   const [passengers, setPassengers] = useState(
//     createPassengerList
//   );

//   // =====================================================
//   // PASSENGER CHANGE
//   // =====================================================

//   const handlePassengerChange = (
//     index,
//     field,
//     value
//   ) => {
//     setPassengers((prev) =>
//       prev.map((passenger, passengerIndex) =>
//         passengerIndex === index
//           ? {
//               ...passenger,
//               [field]: value,
//             }
//           : passenger
//       )
//     );
//   };

//   // =====================================================
//   // VALIDATION
//   // =====================================================

//   const validatePassengers = () => {
//     for (let i = 0; i < passengers.length; i++) {
//       const passenger = passengers[i];
//       const passengerNumber = i + 1;

//       if (!passenger.firstName.trim()) {
//         alert(
//           `Please enter First Name for Passenger ${passengerNumber}`
//         );
//         return false;
//       }

//       if (!passenger.lastName.trim()) {
//         alert(
//           `Please enter Last Name for Passenger ${passengerNumber}`
//         );
//         return false;
//       }

//       if (!passenger.dob) {
//         alert(
//           `Please select Date of Birth for Passenger ${passengerNumber}`
//         );
//         return false;
//       }

//       if (!passenger.gender) {
//         alert(
//           `Please select Gender for Passenger ${passengerNumber}`
//         );
//         return false;
//       }

//       if (!passenger.nationality.trim()) {
//         alert(
//           `Please enter Nationality for Passenger ${passengerNumber}`
//         );
//         return false;
//       }

//       if (!passenger.passport.trim()) {
//         alert(
//           `Please enter Passport Number for Passenger ${passengerNumber}`
//         );
//         return false;
//       }

//       if (!passenger.passportExpiry) {
//         alert(
//           `Please select Passport Expiry for Passenger ${passengerNumber}`
//         );
//         return false;
//       }

//       if (i === 0 && !passenger.email.trim()) {
//         alert("Please enter Email Address");
//         return false;
//       }

//       if (i === 0 && !passenger.phone.trim()) {
//         alert("Please enter Phone Number");
//         return false;
//       }

//       if (!passenger.city.trim()) {
//         alert(
//           `Please enter City for Passenger ${passengerNumber}`
//         );
//         return false;
//       }
//     }

//     return true;
//   };

//   // =====================================================
//   // PASSENGER LABEL
//   // =====================================================

//   const getPassengerLabel = (type, index) => {
//     const sameTypePassengers = passengers.filter(
//       (item) => item.type === type
//     );

//     const currentSameTypeIndex =
//       sameTypePassengers.findIndex(
//         (item) => item === passengers[index]
//       );

//     if (type === "Adult") {
//       return `Adult ${currentSameTypeIndex + 1}`;
//     }

//     if (type === "Child") {
//       return `Child ${currentSameTypeIndex + 1}`;
//     }

//     return `Infant ${currentSameTypeIndex + 1}`;
//   };

//   // =====================================================
//   // PASSENGER FARE
//   // =====================================================

//   const getPassengerFare = (type) => {
//     if (type === "Child") {
//       return childFare;
//     }

//     if (type === "Infant") {
//       return infantFare;
//     }

//     return adultFare;
//   };

//   // =====================================================
//   // CONTINUE
//   // =====================================================

//   const handleContinue = () => {
//     if (!validatePassengers()) {
//       return;
//     }

//     const flightId =
//       selectedFlight?._id ||
//       selectedFlight?.id ||
//       selectedFlight?.flightId;

//     if (!flightId) {
//       alert(
//         "Flight ID is missing. Please go back and select the flight again."
//       );

//       console.error(
//         "FLIGHT ID MISSING:",
//         selectedFlight
//       );

//       return;
//     }

//     const flight = {
//       ...selectedFlight,

//       _id: flightId,
//       flightId,

//       adultFare,
//       childFare,
//       infantFare,

//       adultTotal,
//       childTotal,
//       infantTotal,

//       passengerFareTotal,

//       adultMealPrice:
//         Number(selectedFlight?.adultMealPrice) || 0,

//       childMealPrice:
//         Number(selectedFlight?.childMealPrice) || 0,

//       infantMealPrice:
//         Number(selectedFlight?.infantMealPrice) || 0,

//       adultSeatPrice:
//         Number(selectedFlight?.adultSeatPrice) || 0,

//       childSeatPrice:
//         Number(selectedFlight?.childSeatPrice) || 0,

//       infantSeatPrice:
//         Number(selectedFlight?.infantSeatPrice) || 0,

//       adultBaggagePrice:
//         Number(selectedFlight?.adultBaggagePrice) || 0,

//       childBaggagePrice:
//         Number(selectedFlight?.childBaggagePrice) || 0,

//       infantBaggagePrice:
//         Number(selectedFlight?.infantBaggagePrice) || 0,
//     };

//     const bookingState = {
//       flight,
//       flightId,

//       travellers: {
//         adults: adultCount,
//         children: childCount,
//         infants: infantCount,
//         totalPassengers,
//         cabin: travellers.cabin || "Economy",
//       },

//       passengers: passengers.map((passenger) => ({
//         ...passenger,
//         type: passenger.type || "Adult",
//       })),

//       passenger: passengers[0],

//       pricing: {
//         adultFare,
//         childFare,
//         infantFare,

//         adultTotal,
//         childTotal,
//         infantTotal,

//         passengerFareTotal,
//       },
//     };

//     console.log(
//       "================================="
//     );
//     console.log(
//       "MULTIPLE PASSENGER BOOKING"
//     );
//     console.log("Adults:", adultCount);
//     console.log("Children:", childCount);
//     console.log("Infants:", infantCount);
//     console.log("Passengers:", passengers);
//     console.log(
//       "Passenger Fare:",
//       passengerFareTotal
//     );
//     console.log(
//       "================================="
//     );

//     navigate("/seat-selection", {
//       state: bookingState,
//     });
//   };

//   // =====================================================
//   // NO FLIGHT
//   // =====================================================

//   if (!selectedFlight) {
//     return (
//       <>
//         <Navbar />

//         <section className="booking-page">
//           <div className="booking-container">
//             <div className="no-flight-selected">
//               <div className="no-flight-icon">
//                 ✈️
//               </div>

//               <h2>
//                 No Flight Selected
//               </h2>

//               <p>
//                 Please search and select a flight
//                 before continuing to booking.
//               </p>

//               <button
//                 type="button"
//                 className="back-home-btn"
//                 onClick={() => navigate("/")}
//               >
//                 Back To Home
//               </button>
//             </div>
//           </div>
//         </section>

//         <Footer />
//       </>
//     );
//   }

//   // =====================================================
//   // UI
//   // =====================================================

//   return (
//     <>
//       <Navbar />

//       <main className="booking-page">
//         <div className="booking-container">

//           {/* =================================================
//                     PAGE HEADER
//           ================================================= */}

//           <div className="booking-page-header">
//             <div>
//               <span className="booking-eyebrow">
//                 SAIYED TRAVELS
//               </span>

//               <h1>
//                 Passenger Details
//               </h1>

//               <p>
//                 Enter passenger information carefully
//                 before continuing.
//               </p>
//             </div>

//             <div className="booking-step">
//               <span className="step-active">
//                 1
//               </span>

//               <span>
//                 Passenger
//               </span>

//               <i />

//               <span className="step">
//                 2
//               </span>

//               <span>
//                 Seat
//               </span>

//               <i />

//               <span className="step">
//                 3
//               </span>

//               <span>
//                 Payment
//               </span>
//             </div>
//           </div>

//           {/* =================================================
//                     FLIGHT SUMMARY
//           ================================================= */}

//           <section className="booking-flight-summary">

//             <div className="flight-summary-top">

//               <div>
//                 <span className="summary-label">
//                   SELECTED FLIGHT
//                 </span>

//                 <h2>
//                   {selectedFlight.airline ||
//                     "Airline"}
//                 </h2>

//                 <p>
//                   {selectedFlight.flightNo ||
//                     "Flight"}{" "}
//                   •{" "}
//                   {selectedFlight.fromCode ||
//                     selectedFlight.from ||
//                     "From"}{" "}
//                   →{" "}
//                   {selectedFlight.toCode ||
//                     selectedFlight.to ||
//                     "To"}
//                 </p>
//               </div>

//               <div className="flight-route-badge">
//                 ✈️{" "}
//                 {selectedFlight.fromCode ||
//                   selectedFlight.from ||
//                   "From"}
//                 {" → "}
//                 {selectedFlight.toCode ||
//                   selectedFlight.to ||
//                   "To"}
//               </div>

//             </div>

//             {/* TRAVELLERS */}

//             <div className="traveller-badges">

//               <span className="traveller-badge">
//                 👤 {adultCount} Adult
//                 {adultCount > 1 ? "s" : ""}
//               </span>

//               {childCount > 0 && (
//                 <span className="traveller-badge">
//                   🧒 {childCount} Child
//                   {childCount > 1 ? "ren" : ""}
//                 </span>
//               )}

//               {infantCount > 0 && (
//                 <span className="traveller-badge">
//                   👶 {infantCount} Infant
//                   {infantCount > 1 ? "s" : ""}
//                 </span>
//               )}

//               <span className="traveller-badge">
//                 💺{" "}
//                 {travellers.cabin ||
//                   "Economy"}
//               </span>

//             </div>

//             {/* FLIGHT PRICE */}

//             <div className="flight-summary-price">

//               <div className="fare-mini-row">
//                 <span>
//                   Adults ({adultCount})
//                 </span>

//                 <strong>
//                   ₹{" "}
//                   {adultTotal.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>
//               </div>

//               {childCount > 0 && (
//                 <div className="fare-mini-row">
//                   <span>
//                     Children ({childCount})
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {childTotal.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>
//               )}

//               {infantCount > 0 && (
//                 <div className="fare-mini-row">
//                   <span>
//                     Infants ({infantCount})
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {infantTotal.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>
//               )}

//               <div className="flight-total-row">
//                 <span>
//                   Ticket Total
//                 </span>

//                 <strong>
//                   ₹{" "}
//                   {passengerFareTotal.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>
//               </div>

//             </div>
//           </section>

//           {/* =================================================
//                     ALL PASSENGERS
//           ================================================= */}

//           <div className="passengers-wrapper">

//             {passengers.map(
//               (passenger, index) => (

//                 <section
//                   key={index}
//                   className="passenger-card"
//                 >

//                   {/* HEADER */}

//                   <div className="passenger-header">

//                     <div className="passenger-title">

//                       <div className="passenger-number">
//                         {index + 1}
//                       </div>

//                       <div>
//                         <h2>
//                           {getPassengerLabel(
//                             passenger.type,
//                             index
//                           )}
//                         </h2>

//                         <span
//                           className={`passenger-type ${passenger.type.toLowerCase()}`}
//                         >
//                           {passenger.type}
//                         </span>
//                       </div>

//                     </div>

//                     <div className="passenger-fare">
//                       Ticket Fare:{" "}
//                       <strong>
//                         ₹{" "}
//                         {getPassengerFare(
//                           passenger.type
//                         ).toLocaleString(
//                           "en-IN"
//                         )}
//                       </strong>
//                     </div>

//                   </div>

//                   {/* NAME */}

//                   <div className="input-group">

//                     <div className="form-field">
//                       <label>
//                         First Name
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="Enter first name"
//                         value={
//                           passenger.firstName
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "firstName",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                     <div className="form-field">
//                       <label>
//                         Last Name
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="Enter last name"
//                         value={
//                           passenger.lastName
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "lastName",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                   </div>

//                   {/* DOB + GENDER */}

//                   <div className="input-group">

//                     <div className="form-field">
//                       <label>
//                         Date of Birth
//                       </label>

//                       <input
//                         type="date"
//                         value={
//                           passenger.dob
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "dob",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                     <div className="form-field">
//                       <label>
//                         Gender
//                       </label>

//                       <select
//                         value={
//                           passenger.gender
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "gender",
//                             e.target.value
//                           )
//                         }
//                       >
//                         <option value="">
//                           Select Gender
//                         </option>

//                         <option value="Male">
//                           Male
//                         </option>

//                         <option value="Female">
//                           Female
//                         </option>

//                         <option value="Other">
//                           Other
//                         </option>
//                       </select>
//                     </div>

//                   </div>

//                   {/* NATIONALITY + PASSPORT */}

//                   <div className="input-group">

//                     <div className="form-field">
//                       <label>
//                         Nationality
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="e.g. Indian"
//                         value={
//                           passenger.nationality
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "nationality",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                     <div className="form-field">
//                       <label>
//                         Passport Number
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="Enter passport number"
//                         value={
//                           passenger.passport
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "passport",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                   </div>

//                   {/* PASSPORT EXPIRY + EMAIL */}

//                   <div className="input-group">

//                     <div className="form-field">
//                       <label>
//                         Passport Expiry
//                       </label>

//                       <input
//                         type="date"
//                         value={
//                           passenger.passportExpiry
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "passportExpiry",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                     <div className="form-field">
//                       <label>
//                         Email Address
//                         {index !== 0 &&
//                           " (Optional)"}
//                       </label>

//                       <input
//                         type="email"
//                         placeholder={
//                           index === 0
//                             ? "Enter email address"
//                             : "Optional email"
//                         }
//                         value={
//                           passenger.email
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "email",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                   </div>

//                   {/* PHONE + CITY */}

//                   <div className="input-group">

//                     <div className="form-field">
//                       <label>
//                         Phone Number
//                         {index !== 0 &&
//                           " (Optional)"}
//                       </label>

//                       <input
//                         type="tel"
//                         placeholder={
//                           index === 0
//                             ? "Enter phone number"
//                             : "Optional phone"
//                         }
//                         value={
//                           passenger.phone
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "phone",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                     <div className="form-field">
//                       <label>
//                         City
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="Enter city"
//                         value={
//                           passenger.city
//                         }
//                         onChange={(e) =>
//                           handlePassengerChange(
//                             index,
//                             "city",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                   </div>

//                   {/* ADDRESS */}

//                   <div className="form-field full-width">
//                     <label>
//                       Full Address
//                     </label>

//                     <textarea
//                       rows="3"
//                       placeholder="Enter full address"
//                       value={
//                         passenger.address
//                       }
//                       onChange={(e) =>
//                         handlePassengerChange(
//                           index,
//                           "address",
//                           e.target.value
//                         )
//                       }
//                     />
//                   </div>

//                   {/* REQUEST */}

//                   <div className="form-field full-width">
//                     <label>
//                       Special Request
//                       <span>
//                         {" "}
//                         (Optional)
//                       </span>
//                     </label>

//                     <textarea
//                       rows="2"
//                       placeholder="Any special request..."
//                       value={
//                         passenger.request
//                       }
//                       onChange={(e) =>
//                         handlePassengerChange(
//                           index,
//                           "request",
//                           e.target.value
//                         )
//                       }
//                     />
//                   </div>

//                 </section>
//               )
//             )}

//           </div>

//           {/* =================================================
//                     FINAL SUMMARY
//           ================================================= */}

//           <section className="booking-total-box">

//             <div className="summary-heading">
//               <div>
//                 <span>
//                   FINAL SUMMARY
//                 </span>

//                 <h2>
//                   Booking Summary
//                 </h2>
//               </div>

//               <div className="summary-passenger-count">
//                 {totalPassengers} Passenger
//                 {totalPassengers > 1
//                   ? "s"
//                   : ""}
//               </div>
//             </div>

//             <div className="summary-rows">

//               <div className="summary-row">
//                 <span>
//                   Adult ({adultCount})
//                 </span>

//                 <strong>
//                   ₹{" "}
//                   {adultTotal.toLocaleString(
//                     "en-IN"
//                   )}
//                 </strong>
//               </div>

//               {childCount > 0 && (
//                 <div className="summary-row">
//                   <span>
//                     Child ({childCount})
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {childTotal.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>
//               )}

//               {infantCount > 0 && (
//                 <div className="summary-row">
//                   <span>
//                     Infant ({infantCount})
//                   </span>

//                   <strong>
//                     ₹{" "}
//                     {infantTotal.toLocaleString(
//                       "en-IN"
//                     )}
//                   </strong>
//                 </div>
//               )}

//             </div>

//             <div className="summary-grand-total">

//               <span>
//                 Total Flight Fare
//               </span>

//               <strong>
//                 ₹{" "}
//                 {passengerFareTotal.toLocaleString(
//                   "en-IN"
//                 )}
//               </strong>

//             </div>

//           </section>

//           {/* =================================================
//                     CONTINUE
//           ================================================= */}

//           <div className="continue-section">

//             <div className="secure-note">
//               🔒 Your passenger information is
//               securely processed.
//             </div>

//             <button
//               type="button"
//               className="continue-btn"
//               onClick={handleContinue}
//             >
//               Continue To Seat Selection
//               <span>→</span>
//             </button>

//           </div>

//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default Booking;























































import "./Booking.css";

import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


function Booking() {

  const navigate = useNavigate();
  const location = useLocation();


  // =====================================================
  // FLIGHT
  // =====================================================

  const selectedFlight =
    location.state?.flight || null;


  // =====================================================
  // TRAVELLERS
  // =====================================================

  const travellers =
    location.state?.travellers || {
      adults: 1,
      children: 0,
      infants: 0,
      cabin: "Economy",
    };


  const previousPricing =
    location.state?.pricing || {};


  // =====================================================
  // PASSENGER COUNTS
  // =====================================================

  const adultCount = Math.max(
    Number(travellers.adults) || 1,
    1
  );

  const childCount = Math.max(
    Number(travellers.children) || 0,
    0
  );

  const infantCount = Math.max(
    Number(travellers.infants) || 0,
    0
  );

  const totalPassengers =
    adultCount +
    childCount +
    infantCount;


  // =====================================================
  // FARES
  // =====================================================

  const adultFare = Number(
    selectedFlight?.adultFare ??
    previousPricing?.adultFare ??
    selectedFlight?.finalPrice ??
    0
  );

  const childFare = Number(
    selectedFlight?.childFare ??
    previousPricing?.childFare ??
    0
  );

  const infantFare = Number(
    selectedFlight?.infantFare ??
    previousPricing?.infantFare ??
    0
  );


  const adultTotal =
    adultFare * adultCount;

  const childTotal =
    childFare * childCount;

  const infantTotal =
    infantFare * infantCount;

  const passengerFareTotal =
    adultTotal +
    childTotal +
    infantTotal;


  // =====================================================
  // CREATE PASSENGER
  // =====================================================

  const createPassenger = (type) => ({
    type,

    firstName: "",
    lastName: "",

    dob: "",
    gender: "",

    nationality: "",
    passport: "",
    passportExpiry: "",

    email: "",
    phone: "",

    city: "",
    address: "",
  });


  // =====================================================
  // CREATE PASSENGER LIST
  // =====================================================

  const createPassengerList = () => {

    const list = [];

    for (
      let i = 0;
      i < adultCount;
      i++
    ) {
      list.push(
        createPassenger("Adult")
      );
    }

    for (
      let i = 0;
      i < childCount;
      i++
    ) {
      list.push(
        createPassenger("Child")
      );
    }

    for (
      let i = 0;
      i < infantCount;
      i++
    ) {
      list.push(
        createPassenger("Infant")
      );
    }

    return list;
  };


  // =====================================================
  // PASSENGERS STATE
  // =====================================================

  const [
    passengers,
    setPassengers,
  ] = useState(
    createPassengerList
  );


  // =====================================================
  // CHANGE PASSENGER
  // =====================================================

  const handlePassengerChange = (
    index,
    field,
    value
  ) => {

    setPassengers(
      (prev) =>
        prev.map(
          (passenger, passengerIndex) => {

            if (
              passengerIndex !== index
            ) {
              return passenger;
            }

            return {
              ...passenger,
              [field]: value,
            };

          }
        )
    );

  };


  // =====================================================
  // VALIDATION
  // =====================================================

  const validatePassengers = () => {

    for (
      let i = 0;
      i < passengers.length;
      i++
    ) {

      const passenger =
        passengers[i];

      const number =
        i + 1;


      if (
        !passenger.firstName.trim()
      ) {
        alert(
          `Please enter First Name for Passenger ${number}`
        );
        return false;
      }


      if (
        !passenger.lastName.trim()
      ) {
        alert(
          `Please enter Last Name for Passenger ${number}`
        );
        return false;
      }


      if (!passenger.dob) {
        alert(
          `Please select Date of Birth for Passenger ${number}`
        );
        return false;
      }


      if (!passenger.gender) {
        alert(
          `Please select Gender for Passenger ${number}`
        );
        return false;
      }


      if (
        !passenger.nationality.trim()
      ) {
        alert(
          `Please enter Nationality for Passenger ${number}`
        );
        return false;
      }


      if (
        !passenger.passport.trim()
      ) {
        alert(
          `Please enter Passport Number for Passenger ${number}`
        );
        return false;
      }


      if (
        !passenger.passportExpiry
      ) {
        alert(
          `Please select Passport Expiry for Passenger ${number}`
        );
        return false;
      }


      if (
        i === 0 &&
        !passenger.email.trim()
      ) {
        alert(
          "Please enter Email Address"
        );
        return false;
      }


      if (
        i === 0 &&
        !passenger.phone.trim()
      ) {
        alert(
          "Please enter Phone Number"
        );
        return false;
      }


      if (
        !passenger.city.trim()
      ) {
        alert(
          `Please enter City for Passenger ${number}`
        );
        return false;
      }

    }

    return true;
  };


  // =====================================================
  // PASSENGER LABEL
  // =====================================================

  const getPassengerLabel = (
    type,
    index
  ) => {

    const sameType =
      passengers.filter(
        (item) =>
          item.type === type
      );

    const currentIndex =
      sameType.findIndex(
        (item) =>
          item === passengers[index]
      );


    if (type === "Adult") {
      return `Adult ${currentIndex + 1}`;
    }

    if (type === "Child") {
      return `Child ${currentIndex + 1}`;
    }

    return `Infant ${currentIndex + 1}`;
  };


  // =====================================================
  // PASSENGER FARE
  // =====================================================

  const getPassengerFare = (
    type
  ) => {

    if (type === "Child") {
      return childFare;
    }

    if (type === "Infant") {
      return infantFare;
    }

    return adultFare;
  };


  // =====================================================
  // CONTINUE
  // =====================================================

  const handleContinue = () => {

    if (!validatePassengers()) {
      return;
    }


    const flightId =
      selectedFlight?._id ||
      selectedFlight?.id ||
      selectedFlight?.flightId;


    if (!flightId) {

      alert(
        "Flight ID is missing. Please go back and select the flight again."
      );

      console.error(
        "FLIGHT ID MISSING:",
        selectedFlight
      );

      return;
    }


    // ===================================================
    // CLEAN FLIGHT
    // ===================================================

    const flight = {

      ...selectedFlight,

      _id: flightId,

      flightId: flightId,


      // FARES

      adultFare,
      childFare,
      infantFare,


      adultTotal,
      childTotal,
      infantTotal,

      passengerFareTotal,


      // MEAL

      adultMealPrice:
        Number(
          selectedFlight?.adultMealPrice
        ) || 0,

      childMealPrice:
        Number(
          selectedFlight?.childMealPrice
        ) || 0,

      infantMealPrice:
        Number(
          selectedFlight?.infantMealPrice
        ) || 0,


      // SEAT

      adultSeatPrice:
        Number(
          selectedFlight?.adultSeatPrice
        ) || 0,

      childSeatPrice:
        Number(
          selectedFlight?.childSeatPrice
        ) || 0,

      infantSeatPrice:
        Number(
          selectedFlight?.infantSeatPrice
        ) || 0,


      // BAGGAGE

      adultBaggagePrice:
        Number(
          selectedFlight?.adultBaggagePrice
        ) || 0,

      childBaggagePrice:
        Number(
          selectedFlight?.childBaggagePrice
        ) || 0,

      infantBaggagePrice:
        Number(
          selectedFlight?.infantBaggagePrice
        ) || 0,

    };


    // ===================================================
    // BOOKING STATE
    // ===================================================

    const bookingState = {

      flight,

      flightId,


      travellers: {

        adults:
          adultCount,

        children:
          childCount,

        infants:
          infantCount,

        totalPassengers:
          totalPassengers,

        cabin:
          travellers.cabin ||
          "Economy",

      },


      passengers:
        passengers.map(
          (passenger) => ({
            ...passenger,

            type:
              passenger.type ||
              "Adult",
          })
        ),


      passenger:
        passengers[0],


      pricing: {

        adultFare,

        childFare,

        infantFare,

        adultTotal,

        childTotal,

        infantTotal,

        passengerFareTotal,

      },

    };


    console.log(
      "================================="
    );

    console.log(
      "BOOKING DATA"
    );

    console.log(
      "Flight:",
      flight
    );

    console.log(
      "Passengers:",
      passengers
    );

    console.log(
      "Total Fare:",
      passengerFareTotal
    );

    console.log(
      "================================="
    );


    // ===================================================
    // NEXT PAGE
    // ===================================================

    navigate(
      "/seat-selection",
      {
        state: bookingState,
      }
    );

  };


  // =====================================================
  // NO FLIGHT
  // =====================================================

  if (!selectedFlight) {

    return (
      <>

        <Navbar />

        <section className="booking-page">

          <div className="no-flight-selected">

            <h2>
              No Flight Selected ✈️
            </h2>

            <p>
              Please search and select a
              flight before continuing
              to booking.
            </p>

            <button
              className="back-home-btn"
              onClick={() =>
                navigate("/")
              }
            >
              Back To Home
            </button>

          </div>

        </section>

        <Footer />

      </>
    );
  }


  // =====================================================
  // UI
  // =====================================================

  return (
    <>

      <Navbar />


      <main className="booking-page">

        <div className="booking-container">


          {/* =================================================
                         FLIGHT CARD
          ================================================= */}

          <div className="booking-flight-summary">

            <div className="booking-summary-top">

              <div>

                <span className="booking-small-title">
                  Booking Details
                </span>

                <h2>
                  Passenger Details
                </h2>

                <p>
                  {selectedFlight.airline}
                  {" • "}
                  {selectedFlight.flightNo}
                  {" • "}
                  {selectedFlight.fromCode}
                  {" → "}
                  {selectedFlight.toCode}
                </p>

              </div>


              <div className="booking-flight-price">

                <span>
                  Ticket Fare
                </span>

                <strong>
                  ₹{" "}
                  {passengerFareTotal.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>

            </div>


            <div className="traveller-badges">

              <span className="traveller-badge">
                👤 {adultCount} Adult
                {adultCount > 1 ? "s" : ""}
              </span>


              {childCount > 0 && (

                <span className="traveller-badge">
                  🧒 {childCount} Child
                  {childCount > 1
                    ? "ren"
                    : ""}
                </span>

              )}


              {infantCount > 0 && (

                <span className="traveller-badge">
                  👶 {infantCount} Infant
                  {infantCount > 1
                    ? "s"
                    : ""}
                </span>

              )}


              <span className="traveller-badge">
                💺{" "}
                {travellers.cabin ||
                  "Economy"}
              </span>

            </div>


            <div className="fare-mini-summary">

              <div>
                <span>
                  Adult ({adultCount})
                </span>

                <strong>
                  ₹{" "}
                  {adultTotal.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>


              {childCount > 0 && (

                <div>
                  <span>
                    Child ({childCount})
                  </span>

                  <strong>
                    ₹{" "}
                    {childTotal.toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>

              )}


              {infantCount > 0 && (

                <div>
                  <span>
                    Infant ({infantCount})
                  </span>

                  <strong>
                    ₹{" "}
                    {infantTotal.toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>

              )}

            </div>

          </div>


          {/* =================================================
                       PASSENGER CARDS
          ================================================= */}

          <div className="passengers-list">

            {passengers.map(
              (
                passenger,
                index
              ) => (

                <section
                  key={index}
                  className="passenger-card"
                >


                  {/* HEADER */}

                  <div className="passenger-card-header">

                    <div>

                      <h2>
                        {getPassengerLabel(
                          passenger.type,
                          index
                        )}
                      </h2>

                      <span
                        className={`passenger-type ${passenger.type.toLowerCase()}`}
                      >
                        {passenger.type}
                      </span>

                    </div>


                    <div className="passenger-fare">

                      <span>
                        Ticket Fare
                      </span>

                      <strong>
                        ₹{" "}
                        {getPassengerFare(
                          passenger.type
                        ).toLocaleString(
                          "en-IN"
                        )}
                      </strong>

                    </div>

                  </div>


                  {/* FORM */}

                  <div className="passenger-form">


                    {/* NAME */}

                    <div className="form-field">

                      <label>
                        First Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter first name"
                        value={
                          passenger.firstName
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "firstName",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    <div className="form-field">

                      <label>
                        Last Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter last name"
                        value={
                          passenger.lastName
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "lastName",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* DOB */}

                    <div className="form-field">

                      <label>
                        Date of Birth
                      </label>

                      <input
                        type="date"
                        value={
                          passenger.dob
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "dob",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* GENDER */}

                    <div className="form-field">

                      <label>
                        Gender
                      </label>

                      <select
                        value={
                          passenger.gender
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "gender",
                            e.target.value
                          )
                        }
                      >

                        <option value="">
                          Select Gender
                        </option>

                        <option value="Male">
                          Male
                        </option>

                        <option value="Female">
                          Female
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                    </div>


                    {/* NATIONALITY */}

                    <div className="form-field">

                      <label>
                        Nationality
                      </label>

                      <input
                        type="text"
                        placeholder="Enter nationality"
                        value={
                          passenger.nationality
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "nationality",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* PASSPORT */}

                    <div className="form-field">

                      <label>
                        Passport Number
                      </label>

                      <input
                        type="text"
                        placeholder="Enter passport number"
                        value={
                          passenger.passport
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "passport",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* PASSPORT EXPIRY */}

                    <div className="form-field">

                      <label>
                        Passport Expiry
                      </label>

                      <input
                        type="date"
                        value={
                          passenger.passportExpiry
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "passportExpiry",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* EMAIL */}

                    <div className="form-field">

                      <label>
                        Email Address
                        {index !== 0 && (
                          <span>
                            {" "}Optional
                          </span>
                        )}
                      </label>

                      <input
                        type="email"
                        placeholder="Enter email address"
                        value={
                          passenger.email
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "email",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* PHONE */}

                    <div className="form-field">

                      <label>
                        Phone Number
                        {index !== 0 && (
                          <span>
                            {" "}Optional
                          </span>
                        )}
                      </label>

                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        value={
                          passenger.phone
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "phone",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* CITY */}

                    <div className="form-field">

                      <label>
                        City
                      </label>

                      <input
                        type="text"
                        placeholder="Enter city"
                        value={
                          passenger.city
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "city",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* ADDRESS */}

                    <div className="form-field full-width">

                      <label>
                        Full Address
                      </label>

                      <textarea
                        rows="2"
                        placeholder="Enter full address"
                        value={
                          passenger.address
                        }
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "address",
                            e.target.value
                          )
                        }
                      />

                    </div>

                  </div>

                </section>

              )
            )}

          </div>


          {/* =================================================
                       FINAL BOOKING SUMMARY
          ================================================= */}

          <section className="booking-total-box">

            <div className="total-heading">

              <div>

                <span>
                  Final Summary
                </span>

                <h3>
                  Booking Summary
                </h3>

              </div>

              <div className="total-main-price">

                <span>
                  Total
                </span>

                <strong>
                  ₹{" "}
                  {passengerFareTotal.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>

            </div>


            <div className="total-rows">

              <div>
                <span>
                  Adult × {adultCount}
                </span>

                <strong>
                  ₹{" "}
                  {adultTotal.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>


              {childCount > 0 && (

                <div>
                  <span>
                    Child × {childCount}
                  </span>

                  <strong>
                    ₹{" "}
                    {childTotal.toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>

              )}


              {infantCount > 0 && (

                <div>
                  <span>
                    Infant × {infantCount}
                  </span>

                  <strong>
                    ₹{" "}
                    {infantTotal.toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>

              )}

            </div>


            <div className="final-total">

              <span>
                Total Flight Fare
              </span>

              <strong>
                ₹{" "}
                {passengerFareTotal.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

          </section>


          {/* =================================================
                         CONTINUE
          ================================================= */}

          <button
            type="button"
            className="continue-btn"
            onClick={handleContinue}
          >
            Continue To Seat Selection
          </button>


        </div>

      </main>


      <Footer />

    </>
  );
}


export default Booking;