// // // // // import "./Navbar.css";
// // // // // import { useState, useEffect, useRef } from "react";
// // // // // import { NavLink, Link } from "react-router-dom";

// // // // // import {
// // // // //   FaPlaneDeparture,
// // // // //   FaBars,
// // // // //   FaTimes,
// // // // //   FaUserCircle,
// // // // //   FaBell,
// // // // //   FaHeart,
// // // // //   FaUser,
// // // // //   FaBook,
// // // // //   FaCog,
// // // // //   FaSignOutAlt,
// // // // // } from "react-icons/fa";

// // // // // function Navbar() {

// // // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // // //   const [accountOpen, setAccountOpen] = useState(false);

// // // // //   const accountRef = useRef(null);

// // // // //   const closeMenu = () => {
// // // // //     setMenuOpen(false);
// // // // //     setAccountOpen(false);
// // // // //   };

// // // // //   useEffect(() => {

// // // // //     const handleClickOutside = (e) => {

// // // // //       if (
// // // // //         accountRef.current &&
// // // // //         !accountRef.current.contains(e.target)
// // // // //       ) {
// // // // //         setAccountOpen(false);
// // // // //       }

// // // // //     };

// // // // //     document.addEventListener(
// // // // //       "mousedown",
// // // // //       handleClickOutside
// // // // //     );

// // // // //     return () =>
// // // // //       document.removeEventListener(
// // // // //         "mousedown",
// // // // //         handleClickOutside
// // // // //       );

// // // // //   }, []);

// // // // //   return (

// // // // //     <header className="navbar">

// // // // //       <div className="nav-container">

// // // // //         {/* ================= LOGO ================= */}

// // // // //         <Link
// // // // //           to="/"
// // // // //           className="logo"
// // // // //           onClick={closeMenu}
// // // // //         >

// // // // //           <FaPlaneDeparture className="logo-icon" />

// // // // //           <h2>
// // // // //             Saiyed <span>Travels</span>
// // // // //           </h2>

// // // // //         </Link>

// // // // //         {/* ================= MENU ================= */}

// // // // //         <ul
// // // // //           className={`nav-menu ${
// // // // //             menuOpen ? "active" : ""
// // // // //           }`}
// // // // //         >

// // // // //           <li>
// // // // //             <NavLink
// // // // //               to="/"
// // // // //               onClick={closeMenu}
// // // // //             >
// // // // //               Home
// // // // //             </NavLink>
// // // // //           </li>

// // // // //           <li>
// // // // //             <NavLink
// // // // //               to="/flights"
// // // // //               onClick={closeMenu}
// // // // //             >
// // // // //               Flights
// // // // //             </NavLink>
// // // // //           </li>

// // // // //           <li>
// // // // //             <NavLink
// // // // //               to="/offers"
// // // // //               onClick={closeMenu}
// // // // //             >
// // // // //               Offers
// // // // //             </NavLink>
// // // // //           </li>

// // // // //           <li>
// // // // //             <NavLink
// // // // //               to="/about"
// // // // //               onClick={closeMenu}
// // // // //             >
// // // // //               About
// // // // //             </NavLink>
// // // // //           </li>

// // // // //           <li>
// // // // //             <NavLink
// // // // //               to="/contact"
// // // // //               onClick={closeMenu}
// // // // //             >
// // // // //               Contact
// // // // //             </NavLink>
// // // // //           </li>


          

// // // // //         </ul>

// // // // //                 {/* ================= RIGHT ================= */}

// // // // //         <div className="nav-right">

// // // // //           <Link
// // // // //             to="/login"
// // // // //             className="login-btn"
// // // // //             onClick={closeMenu}
// // // // //           >
// // // // //             Login
// // // // //           </Link>

// // // // //           <Link
// // // // //             to="/signup"
// // // // //             className="signup-btn"
// // // // //             onClick={closeMenu}
// // // // //           >
// // // // //             Sign Up
// // // // //           </Link>

// // // // //           {/* ================= ACCOUNT ================= */}

// // // // //           <div
// // // // //             className="account-menu"
// // // // //             ref={accountRef}
// // // // //           >

// // // // //             <button
// // // // //               className="account-btn"
// // // // //               onClick={() =>
// // // // //                 setAccountOpen(!accountOpen)
// // // // //               }
// // // // //             >

// // // // //               <FaUserCircle />

// // // // //             </button>

// // // // //             {accountOpen && (

// // // // //               <div className="account-dropdown">

// // // // //                 <div className="dropdown-title">
// // // // //                   👤 My Account
// // // // //                 </div>

// // // // //                 <Link
// // // // //                   to="/notifications"
// // // // //                   onClick={closeMenu}
// // // // //                 >
// // // // //                   <FaBell />
// // // // //                   Notifications
// // // // //                 </Link>

// // // // //                 <Link
// // // // //                   to="/wishlist"
// // // // //                   onClick={closeMenu}
// // // // //                 >
// // // // //                   <FaHeart />
// // // // //                   Wishlist
// // // // //                 </Link>

// // // // //                 <Link
// // // // //                   to="/profile"
// // // // //                   onClick={closeMenu}
// // // // //                 >
// // // // //                   <FaUser />
// // // // //                   My Profile
// // // // //                 </Link>

// // // // //                 <Link
// // // // //                   to="/my-bookings"
// // // // //                   onClick={closeMenu}
// // // // //                 >
// // // // //                   <FaBook />
// // // // //                   My Bookings
// // // // //                 </Link>

// // // // //                 <Link
// // // // //                   to="/settings"
// // // // //                   onClick={closeMenu}
// // // // //                 >
// // // // //                   <FaCog />
// // // // //                   Settings
// // // // //                 </Link>

// // // // //                 <hr />

// // // // //                 <Link
// // // // //                   to="/logout"
// // // // //                   className="logout-link"
// // // // //                   onClick={closeMenu}
// // // // //                 >
// // // // //                   <FaSignOutAlt />
// // // // //                   Logout
// // // // //                 </Link>

// // // // //               </div>

// // // // //             )}

// // // // //           </div>

// // // // //         </div>

// // // // //                 {/* ================= MOBILE MENU ================= */}

// // // // //         <div
// // // // //           className="menu-toggle"
// // // // //           onClick={() =>
// // // // //             setMenuOpen(!menuOpen)
// // // // //           }
// // // // //         >

// // // // //           {menuOpen ? (
// // // // //             <FaTimes />
// // // // //           ) : (
// // // // //             <FaBars />
// // // // //           )}

// // // // //         </div>

// // // // //       </div>

// // // // //     </header>

// // // // //   );

// // // // // }

// // // // // export default Navbar;

// // // // import "./Navbar.css";
// // // // import { useState, useEffect, useRef } from "react";
// // // // import { NavLink, Link } from "react-router-dom";

// // // // import {
// // // //   FaPlaneDeparture,
// // // //   FaBars,
// // // //   FaTimes,
// // // //   FaUserCircle,
// // // //   FaBell,
// // // //   FaHeart,
// // // //   FaUser,
// // // //   FaBook,
// // // //   FaCog,
// // // //   FaSignOutAlt,
// // // //   FaTachometerAlt,
// // // // } from "react-icons/fa";

// // // // function Navbar() {

// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [accountOpen, setAccountOpen] = useState(false);

// // // //   const accountRef = useRef(null);

// // // //   const closeMenu = () => {
// // // //     setMenuOpen(false);
// // // //     setAccountOpen(false);
// // // //   };

// // // //   useEffect(() => {

// // // //     const handleClickOutside = (e) => {

// // // //       if (
// // // //         accountRef.current &&
// // // //         !accountRef.current.contains(e.target)
// // // //       ) {
// // // //         setAccountOpen(false);
// // // //       }

// // // //     };

// // // //     document.addEventListener(
// // // //       "mousedown",
// // // //       handleClickOutside
// // // //     );

// // // //     return () =>
// // // //       document.removeEventListener(
// // // //         "mousedown",
// // // //         handleClickOutside
// // // //       );

// // // //   }, []);

// // // //   return (

// // // //     <header className="navbar">

// // // //       <div className="nav-container">

// // // //         {/* ================= LOGO ================= */}

// // // //         <Link
// // // //           to="/"
// // // //           className="logo"
// // // //           onClick={closeMenu}
// // // //         >

// // // //           <FaPlaneDeparture className="logo-icon" />

// // // //           <h2>
// // // //             Saiyed <span>Travels</span>
// // // //           </h2>

// // // //         </Link>

// // // //         {/* ================= MENU ================= */}

// // // //         <ul
// // // //           className={`nav-menu ${
// // // //             menuOpen ? "active" : ""
// // // //           }`}
// // // //         >

// // // //           <li>
// // // //             <NavLink
// // // //               to="/"
// // // //               onClick={closeMenu}
// // // //             >
// // // //               Home
// // // //             </NavLink>
// // // //           </li>

// // // //           <li>
// // // //             <NavLink
// // // //               to="/flights"
// // // //               onClick={closeMenu}
// // // //             >
// // // //               Flights
// // // //             </NavLink>
// // // //           </li>

// // // //           <li>
// // // //             <NavLink
// // // //               to="/offers"
// // // //               onClick={closeMenu}
// // // //             >
// // // //               Offers
// // // //             </NavLink>
// // // //           </li>

// // // //           <li>
// // // //             <NavLink
// // // //               to="/about"
// // // //               onClick={closeMenu}
// // // //             >
// // // //               About
// // // //             </NavLink>
// // // //           </li>

// // // //           <li>
// // // //             <NavLink
// // // //               to="/contact"
// // // //               onClick={closeMenu}
// // // //             >
// // // //               Contact
// // // //             </NavLink>
// // // //           </li>

// // // //           <li>
// // // //             <NavLink
// // // //               to="/dashboard"
// // // //               onClick={closeMenu}
// // // //             >
// // // //               <FaTachometerAlt
// // // //                 style={{ marginRight: "6px" }}
// // // //               />
// // // //               Dashboard
// // // //             </NavLink>
// // // //           </li>

// // // //         </ul>

// // // //                 {/* ================= RIGHT ================= */}

// // // //         <div className="nav-right">

// // // //           <Link
// // // //             to="/login"
// // // //             className="login-btn"
// // // //             onClick={closeMenu}
// // // //           >
// // // //             Login
// // // //           </Link>

// // // //           <Link
// // // //             to="/signup"
// // // //             className="signup-btn"
// // // //             onClick={closeMenu}
// // // //           >
// // // //             Sign Up
// // // //           </Link>

// // // //           {/* ================= ACCOUNT ================= */}

// // // //           <div
// // // //             className="account-menu"
// // // //             ref={accountRef}
// // // //           >

// // // //             <button
// // // //               className="account-btn"
// // // //               onClick={() =>
// // // //                 setAccountOpen(!accountOpen)
// // // //               }
// // // //             >

// // // //               <FaUserCircle />

// // // //             </button>

// // // //             {accountOpen && (

// // // //               <div className="account-dropdown">

// // // //                 <div className="dropdown-title">
// // // //                   👤 My Account
// // // //                 </div>

// // // //                 <Link
// // // //                   to="/dashboard"
// // // //                   onClick={closeMenu}
// // // //                 >
// // // //                   <FaTachometerAlt />
// // // //                   Dashboard
// // // //                 </Link>

// // // //                 <Link
// // // //                   to="/notifications"
// // // //                   onClick={closeMenu}
// // // //                 >
// // // //                   <FaBell />
// // // //                   Notifications
// // // //                 </Link>

// // // //                 <Link
// // // //                   to="/wishlist"
// // // //                   onClick={closeMenu}
// // // //                 >
// // // //                   <FaHeart />
// // // //                   Wishlist
// // // //                 </Link>

// // // //                 <Link
// // // //                   to="/profile"
// // // //                   onClick={closeMenu}
// // // //                 >
// // // //                   <FaUser />
// // // //                   My Profile
// // // //                 </Link>

// // // //                 <Link
// // // //                   to="/my-bookings"
// // // //                   onClick={closeMenu}
// // // //                 >
// // // //                   <FaBook />
// // // //                   My Bookings
// // // //                 </Link>

// // // //                 <Link
// // // //                   to="/settings"
// // // //                   onClick={closeMenu}
// // // //                 >
// // // //                   <FaCog />
// // // //                   Settings
// // // //                 </Link>

// // // //                 <hr />

// // // //                 <Link
// // // //                   to="/logout"
// // // //                   className="logout-link"
// // // //                   onClick={closeMenu}
// // // //                 >
// // // //                   <FaSignOutAlt />
// // // //                   Logout
// // // //                 </Link>

// // // //               </div>

// // // //             )}

// // // //           </div>

// // // //         </div>

// // // //         {/* ================= MOBILE MENU ================= */}

// // // //         <div
// // // //           className="menu-toggle"
// // // //           onClick={() =>
// // // //             setMenuOpen(!menuOpen)
// // // //           }
// // // //         >

// // // //           {menuOpen ? (
// // // //             <FaTimes />
// // // //           ) : (
// // // //             <FaBars />
// // // //           )}

// // // //         </div>

// // // //       </div>

// // // //     </header>

// // // //   );

// // // // }

// // // // export default Navbar;



// // // import "./Navbar.css";

// // // import {
// // //   useState,
// // //   useEffect,
// // //   useRef,
// // // } from "react";

// // // import {
// // //   NavLink,
// // //   Link,
// // //   useNavigate,
// // // } from "react-router-dom";

// // // import {
// // //   FaPlaneDeparture,
// // //   FaBars,
// // //   FaTimes,
// // //   FaUserCircle,
// // //   FaBell,
// // //   FaHeart,
// // //   FaUser,
// // //   FaBook,
// // //   FaCog,
// // //   FaSignOutAlt,
// // //   FaTachometerAlt,
// // // } from "react-icons/fa";


// // // function Navbar() {

// // //   const navigate = useNavigate();


// // //   const [menuOpen, setMenuOpen] =
// // //     useState(false);

// // //   const [accountOpen, setAccountOpen] =
// // //     useState(false);


// // //   const accountRef =
// // //     useRef(null);


// // //   // ==========================================
// // //   // USER AUTH DATA
// // //   // ==========================================

// // //   const token =
// // //     localStorage.getItem("token");

// // //   const userRole =
// // //     localStorage.getItem("userRole");

// // //   const isLoggedIn =
// // //     Boolean(token);

// // //   const isAdmin =
// // //     userRole === "admin";


// // //   // ==========================================
// // //   // CLOSE MENU
// // //   // ==========================================

// // //   const closeMenu = () => {

// // //     setMenuOpen(false);

// // //     setAccountOpen(false);

// // //   };


// // //   // ==========================================
// // //   // CLOSE ACCOUNT DROPDOWN
// // //   // ==========================================

// // //   useEffect(() => {

// // //     const handleClickOutside = (e) => {

// // //       if (
// // //         accountRef.current &&
// // //         !accountRef.current.contains(e.target)
// // //       ) {

// // //         setAccountOpen(false);

// // //       }

// // //     };


// // //     document.addEventListener(
// // //       "mousedown",
// // //       handleClickOutside
// // //     );


// // //     return () => {

// // //       document.removeEventListener(
// // //         "mousedown",
// // //         handleClickOutside
// // //       );

// // //     };

// // //   }, []);


// // //   // ==========================================
// // //   // LOGOUT
// // //   // ==========================================

// // //   const handleLogout = () => {

// // //     localStorage.removeItem("token");

// // //     localStorage.removeItem("user");

// // //     localStorage.removeItem("userRole");

// // //     closeMenu();

// // //     navigate("/login");

// // //   };


// // //   return (

// // //     <header className="navbar">

// // //       <div className="nav-container">


// // //         {/* ==================================
// // //                     LOGO
// // //         ================================== */}

// // //         <Link
// // //           to="/"
// // //           className="logo"
// // //           onClick={closeMenu}
// // //         >

// // //           <FaPlaneDeparture
// // //             className="logo-icon"
// // //           />

// // //           <h2>

// // //             Saiyed{" "}

// // //             <span>
// // //               Travels
// // //             </span>

// // //           </h2>

// // //         </Link>


// // //         {/* ==================================
// // //                     MENU
// // //         ================================== */}

// // //         <ul
// // //           className={`nav-menu ${
// // //             menuOpen ? "active" : ""
// // //           }`}
// // //         >


// // //           <li>

// // //             <NavLink
// // //               to="/"
// // //               onClick={closeMenu}
// // //             >
// // //               Home
// // //             </NavLink>

// // //           </li>


// // //           <li>

// // //             <NavLink
// // //               to="/flights"
// // //               onClick={closeMenu}
// // //             >
// // //               Flights
// // //             </NavLink>

// // //           </li>


// // //           <li>

// // //             <NavLink
// // //               to="/offers"
// // //               onClick={closeMenu}
// // //             >
// // //               Offers
// // //             </NavLink>

// // //           </li>


// // //           <li>

// // //             <NavLink
// // //               to="/about"
// // //               onClick={closeMenu}
// // //             >
// // //               About
// // //             </NavLink>

// // //           </li>


// // //           <li>

// // //             <NavLink
// // //               to="/contact"
// // //               onClick={closeMenu}
// // //             >
// // //               Contact
// // //             </NavLink>

// // //           </li>


// // //           {/* =================================
// // //                 ADMIN DASHBOARD ONLY
// // //           ================================= */}

// // //           {isAdmin && (

// // //             <li>

// // //               <NavLink
// // //                 to="/dashboard"
// // //                 onClick={closeMenu}
// // //               >

// // //                 <FaTachometerAlt
// // //                   style={{
// // //                     marginRight: "6px",
// // //                   }}
// // //                 />

// // //                 Dashboard

// // //               </NavLink>

// // //             </li>

// // //           )}

// // //         </ul>


// // //         {/* ==================================
// // //                     RIGHT
// // //         ================================== */}

// // //         <div className="nav-right">


// // //           {/* =================================
// // //                     NOT LOGGED IN
// // //           ================================= */}

// // //           {!isLoggedIn && (

// // //             <>

// // //               <Link
// // //                 to="/login"
// // //                 className="login-btn"
// // //                 onClick={closeMenu}
// // //               >
// // //                 Login
// // //               </Link>


// // //               <Link
// // //                 to="/signup"
// // //                 className="signup-btn"
// // //                 onClick={closeMenu}
// // //               >
// // //                 Sign Up
// // //               </Link>

// // //             </>

// // //           )}


// // //           {/* =================================
// // //                     ACCOUNT
// // //           ================================= */}

// // //           {isLoggedIn && (

// // //             <div
// // //               className="account-menu"
// // //               ref={accountRef}
// // //             >


// // //               <button
// // //                 className="account-btn"
// // //                 onClick={() =>
// // //                   setAccountOpen(
// // //                     !accountOpen
// // //                   )
// // //                 }
// // //               >

// // //                 <FaUserCircle />

// // //               </button>


// // //               {accountOpen && (

// // //                 <div className="account-dropdown">


// // //                   <div className="dropdown-title">

// // //                     👤 My Account

// // //                   </div>


// // //                   {/* =========================
// // //                         ADMIN DASHBOARD
// // //                   ========================= */}

// // //                   {isAdmin && (

// // //                     <Link
// // //                       to="/dashboard"
// // //                       onClick={closeMenu}
// // //                     >

// // //                       <FaTachometerAlt />

// // //                       Dashboard

// // //                     </Link>

// // //                   )}


// // //                   {/* =========================
// // //                         CUSTOMER / USER
// // //                   ========================= */}

// // //                   <Link
// // //                     to="/notifications"
// // //                     onClick={closeMenu}
// // //                   >

// // //                     <FaBell />

// // //                     Notifications

// // //                   </Link>


// // //                   <Link
// // //                     to="/wishlist"
// // //                     onClick={closeMenu}
// // //                   >

// // //                     <FaHeart />

// // //                     Wishlist

// // //                   </Link>


// // //                   <Link
// // //                     to="/profile"
// // //                     onClick={closeMenu}
// // //                   >

// // //                     <FaUser />

// // //                     My Profile

// // //                   </Link>


// // //                   <Link
// // //                     to="/my-bookings"
// // //                     onClick={closeMenu}
// // //                   >

// // //                     <FaBook />

// // //                     My Bookings

// // //                   </Link>


// // //                   <Link
// // //                     to="/settings"
// // //                     onClick={closeMenu}
// // //                   >

// // //                     <FaCog />

// // //                     Settings

// // //                   </Link>


// // //                   <hr />


// // //                   {/* =========================
// // //                         REAL LOGOUT
// // //                   ========================= */}

// // //                   <button
// // //                     type="button"
// // //                     className="logout-link"
// // //                     onClick={handleLogout}
// // //                   >

// // //                     <FaSignOutAlt />

// // //                     Logout

// // //                   </button>


// // //                 </div>

// // //               )}

// // //             </div>

// // //           )}


// // //         </div>


// // //         {/* ==================================
// // //                 MOBILE MENU
// // //         ================================== */}

// // //         <div
// // //           className="menu-toggle"
// // //           onClick={() =>
// // //             setMenuOpen(!menuOpen)
// // //           }
// // //         >

// // //           {menuOpen ? (
// // //             <FaTimes />
// // //           ) : (
// // //             <FaBars />
// // //           )}

// // //         </div>


// // //       </div>

// // //     </header>

// // //   );

// // // }


// // // export default Navbar;



// // import "./Navbar.css";

// // import {
// //   useState,
// //   useEffect,
// //   useRef,
// // } from "react";

// // import {
// //   NavLink,
// //   Link,
// //   useNavigate,
// // } from "react-router-dom";

// // import {
// //   FaPlaneDeparture,
// //   FaBars,
// //   FaTimes,
// //   FaUserCircle,
// //   FaBell,
// //   FaHeart,
// //   FaUser,
// //   FaBook,
// //   FaCog,
// //   FaSignOutAlt,
// //   FaTachometerAlt,
// // } from "react-icons/fa";


// // function Navbar() {

// //   const navigate = useNavigate();

// //   const [menuOpen, setMenuOpen] =
// //     useState(false);

// //   const [accountOpen, setAccountOpen] =
// //     useState(false);

// //   const accountRef =
// //     useRef(null);


// //   // ==========================================
// //   // USER AUTH DATA
// //   // ==========================================

// //   const token =
// //     localStorage.getItem("token");

// //   const userRole =
// //     localStorage.getItem("userRole");

// //   const isLoggedIn =
// //     Boolean(token);

// //   const isAdmin =
// //     userRole === "admin";


// //   // ==========================================
// //   // CLOSE MENU
// //   // ==========================================

// //   const closeMenu = () => {

// //     setMenuOpen(false);

// //     setAccountOpen(false);

// //   };


// //   // ==========================================
// //   // CLOSE ACCOUNT DROPDOWN
// //   // ==========================================

// //   useEffect(() => {

// //     const handleClickOutside = (e) => {

// //       if (
// //         accountRef.current &&
// //         !accountRef.current.contains(e.target)
// //       ) {

// //         setAccountOpen(false);

// //       }

// //     };


// //     document.addEventListener(
// //       "mousedown",
// //       handleClickOutside
// //     );


// //     return () => {

// //       document.removeEventListener(
// //         "mousedown",
// //         handleClickOutside
// //       );

// //     };

// //   }, []);


// //   // ==========================================
// //   // LOGOUT
// //   // ==========================================

// //   const handleLogout = () => {

// //     localStorage.removeItem("token");

// //     localStorage.removeItem("user");

// //     localStorage.removeItem("userRole");

// //     localStorage.removeItem("userId");

// //     closeMenu();

// //     navigate("/login");

// //   };


// //   return (

// //     <header className="navbar">

// //       <div className="nav-container">


// //         {/* ==================================
// //                     LOGO
// //         ================================== */}

// //         <Link
// //           to="/"
// //           className="logo"
// //           onClick={closeMenu}
// //         >

// //           <FaPlaneDeparture
// //             className="logo-icon"
// //           />

// //           <h2>

// //             Saiyed{" "}

// //             <span>
// //               Travels
// //             </span>

// //           </h2>

// //         </Link>


// //         {/* ==================================
// //                     MENU
// //         ================================== */}

// //         <ul
// //           className={`nav-menu ${
// //             menuOpen ? "active" : ""
// //           }`}
// //         >

// //           <li>

// //             <NavLink
// //               to="/"
// //               onClick={closeMenu}
// //             >
// //               Home
// //             </NavLink>

// //           </li>


// //           <li>

// //             <NavLink
// //               to="/flights"
// //               onClick={closeMenu}
// //             >
// //               Flights
// //             </NavLink>

// //           </li>


// //           <li>

// //             <NavLink
// //               to="/offers"
// //               onClick={closeMenu}
// //             >
// //               Offers
// //             </NavLink>

// //           </li>


// //           <li>

// //             <NavLink
// //               to="/about"
// //               onClick={closeMenu}
// //             >
// //               About
// //             </NavLink>

// //           </li>


// //           <li>

// //             <NavLink
// //               to="/contact"
// //               onClick={closeMenu}
// //             >
// //               Contact
// //             </NavLink>

// //           </li>


// //           {/* =================================
// //                 ADMIN DASHBOARD ONLY
// //           ================================= */}

// //           {isAdmin && (

// //             <li>

// //               <NavLink
// //                 to="/dashboard"
// //                 onClick={closeMenu}
// //               >

// //                 <FaTachometerAlt
// //                   style={{
// //                     marginRight: "6px",
// //                   }}
// //                 />

// //                 Dashboard

// //               </NavLink>

// //             </li>

// //           )}


// //           {/* =================================
// //                 MOBILE MY BOOKINGS
// //           ================================= */}

// //           {isLoggedIn &&
// //             !isAdmin && (

// //               <li>

// //                 <NavLink
// //                   to="/my-bookings"
// //                   onClick={closeMenu}
// //                 >

// //                   <FaBook
// //                     style={{
// //                       marginRight: "6px",
// //                     }}
// //                   />

// //                   My Bookings

// //                 </NavLink>

// //               </li>

// //             )}

// //         </ul>


// //         {/* ==================================
// //                     RIGHT
// //         ================================== */}

// //         <div className="nav-right">


// //           {/* =================================
// //                     NOT LOGGED IN
// //           ================================= */}

// //           {!isLoggedIn && (

// //             <>

// //               <Link
// //                 to="/login"
// //                 className="login-btn"
// //                 onClick={closeMenu}
// //               >
// //                 Login
// //               </Link>


// //               <Link
// //                 to="/signup"
// //                 className="signup-btn"
// //                 onClick={closeMenu}
// //               >
// //                 Sign Up
// //               </Link>

// //             </>

// //           )}


// //           {/* =================================
// //                 CUSTOMER MY BOOKINGS BUTTON
// //           ================================= */}

// //           {isLoggedIn &&
// //             !isAdmin && (

// //               <Link
// //                 to="/my-bookings"
// //                 className="my-bookings-btn"
// //                 onClick={closeMenu}
// //               >

// //                 <FaBook />

// //                 <span>
// //                   My Bookings
// //                 </span>

// //               </Link>

// //             )}


// //           {/* =================================
// //                     ACCOUNT
// //           ================================= */}

// //           {isLoggedIn && (

// //             <div
// //               className="account-menu"
// //               ref={accountRef}
// //             >

// //               <button
// //                 className="account-btn"
// //                 onClick={() =>
// //                   setAccountOpen(
// //                     !accountOpen
// //                   )
// //                 }
// //               >

// //                 <FaUserCircle />

// //               </button>


// //               {accountOpen && (

// //                 <div className="account-dropdown">


// //                   <div className="dropdown-title">

// //                     👤 My Account

// //                   </div>


// //                   {/* =========================
// //                         ADMIN DASHBOARD
// //                   ========================= */}

// //                   {isAdmin && (

// //                     <Link
// //                       to="/dashboard"
// //                       onClick={closeMenu}
// //                     >

// //                       <FaTachometerAlt />

// //                       Dashboard

// //                     </Link>

// //                   )}


// //                   {/* =========================
// //                         CUSTOMER / USER
// //                   ========================= */}

// //                   <Link
// //                     to="/notifications"
// //                     onClick={closeMenu}
// //                   >

// //                     <FaBell />

// //                     Notifications

// //                   </Link>


// //                   <Link
// //                     to="/wishlist"
// //                     onClick={closeMenu}
// //                   >

// //                     <FaHeart />

// //                     Wishlist

// //                   </Link>


// //                   <Link
// //                     to="/profile"
// //                     onClick={closeMenu}
// //                   >

// //                     <FaUser />

// //                     My Profile

// //                   </Link>


// //                   {/* =========================
// //                         MY BOOKINGS
// //                   ========================= */}

// //                   {!isAdmin && (

// //                     <Link
// //                       to="/my-bookings"
// //                       onClick={closeMenu}
// //                     >

// //                       <FaBook />

// //                       My Bookings

// //                     </Link>

// //                   )}


// //                   <Link
// //                     to="/settings"
// //                     onClick={closeMenu}
// //                   >

// //                     <FaCog />

// //                     Settings

// //                   </Link>


// //                   <hr />


// //                   {/* =========================
// //                         LOGOUT
// //                   ========================= */}

// //                   <button
// //                     type="button"
// //                     className="logout-link"
// //                     onClick={handleLogout}
// //                   >

// //                     <FaSignOutAlt />

// //                     Logout

// //                   </button>


// //                 </div>

// //               )}

// //             </div>

// //           )}

// //         </div>


// //         {/* ==================================
// //                 MOBILE MENU
// //         ================================== */}

// //         <div
// //           className="menu-toggle"
// //           onClick={() =>
// //             setMenuOpen(!menuOpen)
// //           }
// //         >

// //           {menuOpen ? (
// //             <FaTimes />
// //           ) : (
// //             <FaBars />
// //           )}

// //         </div>


// //       </div>

// //     </header>

// //   );

// // }


// // export default Navbar;




// import "./Navbar.css";

// import {
//   useState,
//   useEffect,
//   useRef,
// } from "react";

// import {
//   NavLink,
//   Link,
//   useNavigate,
// } from "react-router-dom";

// import {
//   FaPlaneDeparture,
//   FaBars,
//   FaTimes,
//   FaUserCircle,
//   FaBell,
//   FaHeart,
//   FaUser,
//   FaCog,
//   FaSignOutAlt,
//   FaTachometerAlt,
// } from "react-icons/fa";


// function Navbar() {

//   const navigate = useNavigate();

//   const [menuOpen, setMenuOpen] =
//     useState(false);

//   const [accountOpen, setAccountOpen] =
//     useState(false);

//   const accountRef =
//     useRef(null);


//   // ==========================================
//   // USER AUTH DATA
//   // ==========================================

//   const token =
//     localStorage.getItem("token");

//   const userRole =
//     localStorage.getItem("userRole");

//   const isLoggedIn =
//     Boolean(token);

//   const isAdmin =
//     userRole === "admin";


//   // ==========================================
//   // CLOSE EVERYTHING
//   // ==========================================

//   const closeMenu = () => {

//     setMenuOpen(false);

//     setAccountOpen(false);

//   };


//   // ==========================================
//   // ACCOUNT DROPDOWN TOGGLE
//   // ==========================================

//   const toggleAccount = () => {

//     setAccountOpen(
//       (previous) => !previous
//     );

//   };


//   // ==========================================
//   // CLOSE ACCOUNT WHEN CLICKING OUTSIDE
//   // ==========================================

//   useEffect(() => {

//     const handleClickOutside = (event) => {

//       if (
//         accountRef.current &&
//         !accountRef.current.contains(
//           event.target
//         )
//       ) {

//         setAccountOpen(false);

//       }

//     };


//     document.addEventListener(
//       "mousedown",
//       handleClickOutside
//     );


//     return () => {

//       document.removeEventListener(
//         "mousedown",
//         handleClickOutside
//       );

//     };

//   }, []);


//   // ==========================================
//   // ESCAPE KEY
//   // ==========================================

//   useEffect(() => {

//     const handleEscape = (event) => {

//       if (
//         event.key === "Escape"
//       ) {

//         setMenuOpen(false);

//         setAccountOpen(false);

//       }

//     };


//     document.addEventListener(
//       "keydown",
//       handleEscape
//     );


//     return () => {

//       document.removeEventListener(
//         "keydown",
//         handleEscape
//       );

//     };

//   }, []);


//   // ==========================================
//   // LOCK BODY SCROLL ON MOBILE MENU
//   // ==========================================

//   useEffect(() => {

//     if (menuOpen) {

//       document.body.classList.add(
//         "navbar-menu-open"
//       );

//     } else {

//       document.body.classList.remove(
//         "navbar-menu-open"
//       );

//     }


//     return () => {

//       document.body.classList.remove(
//         "navbar-menu-open"
//       );

//     };

//   }, [menuOpen]);


//   // ==========================================
//   // LOGOUT
//   // ==========================================

//   const handleLogout = () => {

//     localStorage.removeItem(
//       "token"
//     );

//     localStorage.removeItem(
//       "user"
//     );

//     localStorage.removeItem(
//       "userRole"
//     );

//     localStorage.removeItem(
//       "userId"
//     );

//     closeMenu();

//     navigate("/login");

//   };


//   // ==========================================
//   // MOBILE MENU TOGGLE
//   // ==========================================

//   const toggleMobileMenu = () => {

//     setMenuOpen(
//       (previous) => !previous
//     );

//     setAccountOpen(false);

//   };


//   return (

//     <header className="navbar">

//       <div className="nav-container">


//         {/* ==================================
//                     LOGO
//         ================================== */}

//         <Link
//           to="/"
//           className="logo"
//           onClick={closeMenu}
//         >

//           <FaPlaneDeparture
//             className="logo-icon"
//           />

//           <h2>

//             Saiyed{" "}

//             <span>
//               Travels
//             </span>

//           </h2>

//         </Link>


//         {/* ==================================
//                     NAVIGATION MENU
//         ================================== */}

//         <nav
//           className={`nav-menu ${
//             menuOpen
//               ? "active"
//               : ""
//           }`}
//         >

//           <ul>

//             <li>

//               <NavLink
//                 to="/"
//                 onClick={closeMenu}
//               >

//                 Home

//               </NavLink>

//             </li>


//             <li>

//               <NavLink
//                 to="/flights"
//                 onClick={closeMenu}
//               >

//                 Flights

//               </NavLink>

//             </li>


//             <li>

//               <NavLink
//                 to="/offers"
//                 onClick={closeMenu}
//               >

//                 Offers

//               </NavLink>

//             </li>


//             <li>

//               <NavLink
//                 to="/about"
//                 onClick={closeMenu}
//               >

//                 About

//               </NavLink>

//             </li>


//             <li>

//               <NavLink
//                 to="/contact"
//                 onClick={closeMenu}
//               >

//                 Contact

//               </NavLink>

//             </li>


//             {/* =================================
//                   ADMIN DASHBOARD
//             ================================= */}

//             {isAdmin && (

//               <li>

//                 <NavLink
//                   to="/dashboard"
//                   onClick={closeMenu}
//                 >

//                   <FaTachometerAlt />

//                   <span>
//                     Dashboard
//                   </span>

//                 </NavLink>

//               </li>

//             )}

//           </ul>

//         </nav>


//         {/* ==================================
//                     RIGHT SIDE
//         ================================== */}

//         <div className="nav-right">


//           {/* =================================
//                     NOT LOGGED IN
//           ================================= */}

//           {!isLoggedIn && (

//             <>

//               <Link
//                 to="/login"
//                 className="login-btn"
//                 onClick={closeMenu}
//               >

//                 Login

//               </Link>


//               <Link
//                 to="/signup"
//                 className="signup-btn"
//                 onClick={closeMenu}
//               >

//                 Sign Up

//               </Link>

//             </>

//           )}


//           {/* =================================
//                     ACCOUNT
//           ================================= */}

//           {isLoggedIn && (

//             <div
//               className={`account-menu ${
//                 accountOpen
//                   ? "open"
//                   : ""
//               }`}
//               ref={accountRef}
//             >

//               <button
//                 type="button"
//                 className="account-btn"
//                 aria-label="Open account menu"
//                 aria-expanded={
//                   accountOpen
//                 }
//                 onClick={
//                   toggleAccount
//                 }
//               >

//                 <FaUserCircle />

//               </button>


//               {/* =================================
//                     ACCOUNT DROPDOWN
//               ================================= */}

//               {accountOpen && (

//                 <div
//                   className="account-dropdown"
//                 >

//                   <div
//                     className="dropdown-title"
//                   >

//                     <FaUserCircle />

//                     <span>
//                       My Account
//                     </span>

//                   </div>


//                   {/* =========================
//                         ADMIN DASHBOARD
//                   ========================= */}

//                   {isAdmin && (

//                     <Link
//                       to="/dashboard"
//                       onClick={
//                         closeMenu
//                       }
//                     >

//                       <FaTachometerAlt />

//                       <span>
//                         Dashboard
//                       </span>

//                     </Link>

//                   )}


//                   {/* =========================
//                         NOTIFICATIONS
//                   ========================= */}

//                   <Link
//                     to="/notifications"
//                     onClick={
//                       closeMenu
//                     }
//                   >

//                     <FaBell />

//                     <span>
//                       Notifications
//                     </span>

//                   </Link>


//                   {/* =========================
//                         WISHLIST
//                   ========================= */}

//                   <Link
//                     to="/wishlist"
//                     onClick={
//                       closeMenu
//                     }
//                   >

//                     <FaHeart />

//                     <span>
//                       Wishlist
//                     </span>

//                   </Link>


//                   {/* =========================
//                         PROFILE
//                   ========================= */}

//                   <Link
//                     to="/profile"
//                     onClick={
//                       closeMenu
//                     }
//                   >

//                     <FaUser />

//                     <span>
//                       My Profile
//                     </span>

//                   </Link>


//                   {/* =========================
//                         SETTINGS
//                   ========================= */}

//                   <Link
//                     to="/settings"
//                     onClick={
//                       closeMenu
//                     }
//                   >

//                     <FaCog />

//                     <span>
//                       Settings
//                     </span>

//                   </Link>


//                   <hr />


//                   {/* =========================
//                         LOGOUT
//                   ========================= */}

//                   <button
//                     type="button"
//                     className="logout-link"
//                     onClick={
//                       handleLogout
//                     }
//                   >

//                     <FaSignOutAlt />

//                     <span>
//                       Logout
//                     </span>

//                   </button>

//                 </div>

//               )}

//             </div>

//           )}

//         </div>


//         {/* ==================================
//                 MOBILE MENU BUTTON
//         ================================== */}

//         <button
//           type="button"
//           className={`menu-toggle ${
//             menuOpen
//               ? "active"
//               : ""
//           }`}
//           aria-label={
//             menuOpen
//               ? "Close navigation menu"
//               : "Open navigation menu"
//           }
//           aria-expanded={
//             menuOpen
//           }
//           onClick={
//             toggleMobileMenu
//           }
//         >

//           {menuOpen ? (

//             <FaTimes />

//           ) : (

//             <FaBars />

//           )}

//         </button>


//       </div>


//       {/* ==================================
//             MOBILE MENU OVERLAY
//       ================================== */}

//       {menuOpen && (

//         <div
//           className="mobile-menu-overlay"
//           onClick={closeMenu}
//         />

//       )}

//     </header>

//   );

// }


// export default Navbar;



import "./Navbar.css";

import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  NavLink,
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaPlaneDeparture,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaBell,
  FaHeart,
  FaUser,
  FaBook,
  FaCog,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";


function Navbar() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [accountOpen, setAccountOpen] =
    useState(false);

  const accountRef =
    useRef(null);


  // ==========================================
  // USER AUTH DATA
  // ==========================================

  const token =
    localStorage.getItem("token");

  const userRole =
    localStorage.getItem("userRole");

  const isLoggedIn =
    Boolean(token);

  const isAdmin =
    userRole === "admin";


  // ==========================================
  // CLOSE MENU
  // ==========================================

  const closeMenu = () => {

    setMenuOpen(false);

    setAccountOpen(false);

  };


  // ==========================================
  // MOBILE MENU TOGGLE
  // ==========================================

  const toggleMobileMenu = () => {

    setMenuOpen(
      (previous) => !previous
    );

    setAccountOpen(false);

  };


  // ==========================================
  // ACCOUNT TOGGLE
  // ==========================================

  const toggleAccount = () => {

    setAccountOpen(
      (previous) => !previous
    );

  };


  // ==========================================
  // CLOSE ACCOUNT WHEN CLICKING OUTSIDE
  // ==========================================

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        accountRef.current &&
        !accountRef.current.contains(
          event.target
        )
      ) {

        setAccountOpen(false);

      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);


  // ==========================================
  // ESCAPE KEY
  // ==========================================

  useEffect(() => {

    const handleEscape = (event) => {

      if (
        event.key === "Escape"
      ) {

        setMenuOpen(false);

        setAccountOpen(false);

      }

    };


    document.addEventListener(
      "keydown",
      handleEscape
    );


    return () => {

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, []);


  // ==========================================
  // BODY SCROLL LOCK
  // ==========================================

  useEffect(() => {

    if (menuOpen) {

      document.body.classList.add(
        "navbar-menu-open"
      );

    } else {

      document.body.classList.remove(
        "navbar-menu-open"
      );

    }


    return () => {

      document.body.classList.remove(
        "navbar-menu-open"
      );

    };

  }, [menuOpen]);


  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "userRole"
    );

    localStorage.removeItem(
      "userId"
    );

    closeMenu();

    navigate("/login");

  };


  return (

    <header className="navbar">

      <div className="nav-container">


        {/* ==================================
                    LOGO
        ================================== */}

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >

          <FaPlaneDeparture
            className="logo-icon"
          />

          <h2>

            Saiyed{" "}

            <span>
              Travels
            </span>

          </h2>

        </Link>


        {/* ==================================
                    MAIN NAVIGATION
        ================================== */}

        <nav
          className={`nav-menu ${
            menuOpen
              ? "active"
              : ""
          }`}
        >

          <ul>

            <li>

              <NavLink
                to="/"
                onClick={closeMenu}
              >
                Home
              </NavLink>

            </li>


            <li>

              <NavLink
                to="/flights"
                onClick={closeMenu}
              >
                Flights
              </NavLink>

            </li>


            <li>

              <NavLink
                to="/offers"
                onClick={closeMenu}
              >
                Offers
              </NavLink>

            </li>


            <li>

              <NavLink
                to="/about"
                onClick={closeMenu}
              >
                About
              </NavLink>

            </li>


            <li>

              <NavLink
                to="/contact"
                onClick={closeMenu}
              >
                Contact
              </NavLink>

            </li>


            {/* =================================
                  ADMIN DASHBOARD
            ================================= */}

            {isAdmin && (

              <li>

                <NavLink
                  to="/dashboard"
                  onClick={closeMenu}
                >

                  <FaTachometerAlt />

                  <span>
                    Dashboard
                  </span>

                </NavLink>

              </li>

            )}

          </ul>

        </nav>


        {/* ==================================
                    RIGHT SIDE
        ================================== */}

        <div className="nav-right">


          {/* =================================
                  LOGIN / SIGNUP
          ================================= */}

          {!isLoggedIn && (

            <>

              <Link
                to="/login"
                className="login-btn"
                onClick={closeMenu}
              >

                Login

              </Link>


              <Link
                to="/signup"
                className="signup-btn"
                onClick={closeMenu}
              >

                Sign Up

              </Link>

            </>

          )}


          {/* =================================
                    ACCOUNT MENU
          ================================= */}

          {isLoggedIn && (

            <div
              className={`account-menu ${
                accountOpen
                  ? "open"
                  : ""
              }`}
              ref={accountRef}
            >

              <button
                type="button"
                className="account-btn"
                aria-label="Open account menu"
                aria-expanded={
                  accountOpen
                }
                onClick={
                  toggleAccount
                }
              >

                <FaUserCircle />

              </button>


              {/* =================================
                    ACCOUNT DROPDOWN
              ================================= */}

              {accountOpen && (

                <div
                  className="account-dropdown"
                >

                  <div
                    className="dropdown-title"
                  >

                    <FaUserCircle />

                    <span>
                      My Account
                    </span>

                  </div>


                  {/* =========================
                        ADMIN DASHBOARD
                  ========================= */}

                  {isAdmin && (

                    <Link
                      to="/dashboard"
                      onClick={
                        closeMenu
                      }
                    >

                      <FaTachometerAlt />

                      <span>
                        Dashboard
                      </span>

                    </Link>

                  )}


                  {/* =========================
                        NOTIFICATIONS
                  ========================= */}

                  <Link
                    to="/notifications"
                    onClick={
                      closeMenu
                    }
                  >

                    <FaBell />

                    <span>
                      Notifications
                    </span>

                  </Link>


                  {/* =========================
                        WISHLIST
                  ========================= */}

                  <Link
                    to="/wishlist"
                    onClick={
                      closeMenu
                    }
                  >

                    <FaHeart />

                    <span>
                      Wishlist
                    </span>

                  </Link>


                  {/* =========================
                        PROFILE
                  ========================= */}

                  <Link
                    to="/profile"
                    onClick={
                      closeMenu
                    }
                  >

                    <FaUser />

                    <span>
                      My Profile
                    </span>

                  </Link>


                  {/* =========================
                        MY BOOKINGS
                        SIDE / ACCOUNT MENU ONLY
                  ========================= */}

                  {!isAdmin && (

                    <Link
                      to="/my-bookings"
                      onClick={
                        closeMenu
                      }
                    >

                      <FaBook />

                      <span>
                        My Bookings
                      </span>

                    </Link>

                  )}


                  {/* =========================
                        SETTINGS
                  ========================= */}

                  <Link
                    to="/settings"
                    onClick={
                      closeMenu
                    }
                  >

                    <FaCog />

                    <span>
                      Settings
                    </span>

                  </Link>


                  <hr />


                  {/* =========================
                        LOGOUT
                  ========================= */}

                  <button
                    type="button"
                    className="logout-link"
                    onClick={
                      handleLogout
                    }
                  >

                    <FaSignOutAlt />

                    <span>
                      Logout
                    </span>

                  </button>


                </div>

              )}

            </div>

          )}

        </div>


        {/* ==================================
                MOBILE HAMBURGER
        ================================== */}

        <button
          type="button"
          className={`menu-toggle ${
            menuOpen
              ? "active"
              : ""
          }`}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={
            menuOpen
          }
          onClick={
            toggleMobileMenu
          }
        >

          {menuOpen ? (

            <FaTimes />

          ) : (

            <FaBars />

          )}

        </button>


      </div>


      {/* ==================================
              MOBILE OVERLAY
      ================================== */}

      {menuOpen && (

        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
        />

      )}

    </header>

  );

}


export default Navbar;