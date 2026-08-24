// // // import "./Navbar.css";
// // // import { useState, useEffect, useRef } from "react";
// // // import { NavLink, Link } from "react-router-dom";

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
// // // } from "react-icons/fa";

// // // function Navbar() {

// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [accountOpen, setAccountOpen] = useState(false);

// // //   const accountRef = useRef(null);

// // //   const closeMenu = () => {
// // //     setMenuOpen(false);
// // //     setAccountOpen(false);
// // //   };

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

// // //     return () =>
// // //       document.removeEventListener(
// // //         "mousedown",
// // //         handleClickOutside
// // //       );

// // //   }, []);

// // //   return (

// // //     <header className="navbar">

// // //       <div className="nav-container">

// // //         {/* ================= LOGO ================= */}

// // //         <Link
// // //           to="/"
// // //           className="logo"
// // //           onClick={closeMenu}
// // //         >

// // //           <FaPlaneDeparture className="logo-icon" />

// // //           <h2>
// // //             Saiyed <span>Travels</span>
// // //           </h2>

// // //         </Link>

// // //         {/* ================= MENU ================= */}

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


          

// // //         </ul>

// // //                 {/* ================= RIGHT ================= */}

// // //         <div className="nav-right">

// // //           <Link
// // //             to="/login"
// // //             className="login-btn"
// // //             onClick={closeMenu}
// // //           >
// // //             Login
// // //           </Link>

// // //           <Link
// // //             to="/signup"
// // //             className="signup-btn"
// // //             onClick={closeMenu}
// // //           >
// // //             Sign Up
// // //           </Link>

// // //           {/* ================= ACCOUNT ================= */}

// // //           <div
// // //             className="account-menu"
// // //             ref={accountRef}
// // //           >

// // //             <button
// // //               className="account-btn"
// // //               onClick={() =>
// // //                 setAccountOpen(!accountOpen)
// // //               }
// // //             >

// // //               <FaUserCircle />

// // //             </button>

// // //             {accountOpen && (

// // //               <div className="account-dropdown">

// // //                 <div className="dropdown-title">
// // //                   👤 My Account
// // //                 </div>

// // //                 <Link
// // //                   to="/notifications"
// // //                   onClick={closeMenu}
// // //                 >
// // //                   <FaBell />
// // //                   Notifications
// // //                 </Link>

// // //                 <Link
// // //                   to="/wishlist"
// // //                   onClick={closeMenu}
// // //                 >
// // //                   <FaHeart />
// // //                   Wishlist
// // //                 </Link>

// // //                 <Link
// // //                   to="/profile"
// // //                   onClick={closeMenu}
// // //                 >
// // //                   <FaUser />
// // //                   My Profile
// // //                 </Link>

// // //                 <Link
// // //                   to="/my-bookings"
// // //                   onClick={closeMenu}
// // //                 >
// // //                   <FaBook />
// // //                   My Bookings
// // //                 </Link>

// // //                 <Link
// // //                   to="/settings"
// // //                   onClick={closeMenu}
// // //                 >
// // //                   <FaCog />
// // //                   Settings
// // //                 </Link>

// // //                 <hr />

// // //                 <Link
// // //                   to="/logout"
// // //                   className="logout-link"
// // //                   onClick={closeMenu}
// // //                 >
// // //                   <FaSignOutAlt />
// // //                   Logout
// // //                 </Link>

// // //               </div>

// // //             )}

// // //           </div>

// // //         </div>

// // //                 {/* ================= MOBILE MENU ================= */}

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
// // import { useState, useEffect, useRef } from "react";
// // import { NavLink, Link } from "react-router-dom";

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

// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [accountOpen, setAccountOpen] = useState(false);

// //   const accountRef = useRef(null);

// //   const closeMenu = () => {
// //     setMenuOpen(false);
// //     setAccountOpen(false);
// //   };

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

// //     return () =>
// //       document.removeEventListener(
// //         "mousedown",
// //         handleClickOutside
// //       );

// //   }, []);

// //   return (

// //     <header className="navbar">

// //       <div className="nav-container">

// //         {/* ================= LOGO ================= */}

// //         <Link
// //           to="/"
// //           className="logo"
// //           onClick={closeMenu}
// //         >

// //           <FaPlaneDeparture className="logo-icon" />

// //           <h2>
// //             Saiyed <span>Travels</span>
// //           </h2>

// //         </Link>

// //         {/* ================= MENU ================= */}

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

// //           <li>
// //             <NavLink
// //               to="/dashboard"
// //               onClick={closeMenu}
// //             >
// //               <FaTachometerAlt
// //                 style={{ marginRight: "6px" }}
// //               />
// //               Dashboard
// //             </NavLink>
// //           </li>

// //         </ul>

// //                 {/* ================= RIGHT ================= */}

// //         <div className="nav-right">

// //           <Link
// //             to="/login"
// //             className="login-btn"
// //             onClick={closeMenu}
// //           >
// //             Login
// //           </Link>

// //           <Link
// //             to="/signup"
// //             className="signup-btn"
// //             onClick={closeMenu}
// //           >
// //             Sign Up
// //           </Link>

// //           {/* ================= ACCOUNT ================= */}

// //           <div
// //             className="account-menu"
// //             ref={accountRef}
// //           >

// //             <button
// //               className="account-btn"
// //               onClick={() =>
// //                 setAccountOpen(!accountOpen)
// //               }
// //             >

// //               <FaUserCircle />

// //             </button>

// //             {accountOpen && (

// //               <div className="account-dropdown">

// //                 <div className="dropdown-title">
// //                   👤 My Account
// //                 </div>

// //                 <Link
// //                   to="/dashboard"
// //                   onClick={closeMenu}
// //                 >
// //                   <FaTachometerAlt />
// //                   Dashboard
// //                 </Link>

// //                 <Link
// //                   to="/notifications"
// //                   onClick={closeMenu}
// //                 >
// //                   <FaBell />
// //                   Notifications
// //                 </Link>

// //                 <Link
// //                   to="/wishlist"
// //                   onClick={closeMenu}
// //                 >
// //                   <FaHeart />
// //                   Wishlist
// //                 </Link>

// //                 <Link
// //                   to="/profile"
// //                   onClick={closeMenu}
// //                 >
// //                   <FaUser />
// //                   My Profile
// //                 </Link>

// //                 <Link
// //                   to="/my-bookings"
// //                   onClick={closeMenu}
// //                 >
// //                   <FaBook />
// //                   My Bookings
// //                 </Link>

// //                 <Link
// //                   to="/settings"
// //                   onClick={closeMenu}
// //                 >
// //                   <FaCog />
// //                   Settings
// //                 </Link>

// //                 <hr />

// //                 <Link
// //                   to="/logout"
// //                   className="logout-link"
// //                   onClick={closeMenu}
// //                 >
// //                   <FaSignOutAlt />
// //                   Logout
// //                 </Link>

// //               </div>

// //             )}

// //           </div>

// //         </div>

// //         {/* ================= MOBILE MENU ================= */}

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
//   FaBook,
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
//   // CLOSE MENU
//   // ==========================================

//   const closeMenu = () => {

//     setMenuOpen(false);

//     setAccountOpen(false);

//   };


//   // ==========================================
//   // CLOSE ACCOUNT DROPDOWN
//   // ==========================================

//   useEffect(() => {

//     const handleClickOutside = (e) => {

//       if (
//         accountRef.current &&
//         !accountRef.current.contains(e.target)
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
//   // LOGOUT
//   // ==========================================

//   const handleLogout = () => {

//     localStorage.removeItem("token");

//     localStorage.removeItem("user");

//     localStorage.removeItem("userRole");

//     closeMenu();

//     navigate("/login");

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
//                     MENU
//         ================================== */}

//         <ul
//           className={`nav-menu ${
//             menuOpen ? "active" : ""
//           }`}
//         >


//           <li>

//             <NavLink
//               to="/"
//               onClick={closeMenu}
//             >
//               Home
//             </NavLink>

//           </li>


//           <li>

//             <NavLink
//               to="/flights"
//               onClick={closeMenu}
//             >
//               Flights
//             </NavLink>

//           </li>


//           <li>

//             <NavLink
//               to="/offers"
//               onClick={closeMenu}
//             >
//               Offers
//             </NavLink>

//           </li>


//           <li>

//             <NavLink
//               to="/about"
//               onClick={closeMenu}
//             >
//               About
//             </NavLink>

//           </li>


//           <li>

//             <NavLink
//               to="/contact"
//               onClick={closeMenu}
//             >
//               Contact
//             </NavLink>

//           </li>


//           {/* =================================
//                 ADMIN DASHBOARD ONLY
//           ================================= */}

//           {isAdmin && (

//             <li>

//               <NavLink
//                 to="/dashboard"
//                 onClick={closeMenu}
//               >

//                 <FaTachometerAlt
//                   style={{
//                     marginRight: "6px",
//                   }}
//                 />

//                 Dashboard

//               </NavLink>

//             </li>

//           )}

//         </ul>


//         {/* ==================================
//                     RIGHT
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
//               className="account-menu"
//               ref={accountRef}
//             >


//               <button
//                 className="account-btn"
//                 onClick={() =>
//                   setAccountOpen(
//                     !accountOpen
//                   )
//                 }
//               >

//                 <FaUserCircle />

//               </button>


//               {accountOpen && (

//                 <div className="account-dropdown">


//                   <div className="dropdown-title">

//                     👤 My Account

//                   </div>


//                   {/* =========================
//                         ADMIN DASHBOARD
//                   ========================= */}

//                   {isAdmin && (

//                     <Link
//                       to="/dashboard"
//                       onClick={closeMenu}
//                     >

//                       <FaTachometerAlt />

//                       Dashboard

//                     </Link>

//                   )}


//                   {/* =========================
//                         CUSTOMER / USER
//                   ========================= */}

//                   <Link
//                     to="/notifications"
//                     onClick={closeMenu}
//                   >

//                     <FaBell />

//                     Notifications

//                   </Link>


//                   <Link
//                     to="/wishlist"
//                     onClick={closeMenu}
//                   >

//                     <FaHeart />

//                     Wishlist

//                   </Link>


//                   <Link
//                     to="/profile"
//                     onClick={closeMenu}
//                   >

//                     <FaUser />

//                     My Profile

//                   </Link>


//                   <Link
//                     to="/my-bookings"
//                     onClick={closeMenu}
//                   >

//                     <FaBook />

//                     My Bookings

//                   </Link>


//                   <Link
//                     to="/settings"
//                     onClick={closeMenu}
//                   >

//                     <FaCog />

//                     Settings

//                   </Link>


//                   <hr />


//                   {/* =========================
//                         REAL LOGOUT
//                   ========================= */}

//                   <button
//                     type="button"
//                     className="logout-link"
//                     onClick={handleLogout}
//                   >

//                     <FaSignOutAlt />

//                     Logout

//                   </button>


//                 </div>

//               )}

//             </div>

//           )}


//         </div>


//         {/* ==================================
//                 MOBILE MENU
//         ================================== */}

//         <div
//           className="menu-toggle"
//           onClick={() =>
//             setMenuOpen(!menuOpen)
//           }
//         >

//           {menuOpen ? (
//             <FaTimes />
//           ) : (
//             <FaBars />
//           )}

//         </div>


//       </div>

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
  // CLOSE ACCOUNT DROPDOWN
  // ==========================================

  useEffect(() => {

    const handleClickOutside = (e) => {

      if (
        accountRef.current &&
        !accountRef.current.contains(e.target)
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
  // LOGOUT
  // ==========================================

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    localStorage.removeItem("userRole");

    localStorage.removeItem("userId");

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
                    MENU
        ================================== */}

        <ul
          className={`nav-menu ${
            menuOpen ? "active" : ""
          }`}
        >

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
                ADMIN DASHBOARD ONLY
          ================================= */}

          {isAdmin && (

            <li>

              <NavLink
                to="/dashboard"
                onClick={closeMenu}
              >

                <FaTachometerAlt
                  style={{
                    marginRight: "6px",
                  }}
                />

                Dashboard

              </NavLink>

            </li>

          )}


          {/* =================================
                MOBILE MY BOOKINGS
          ================================= */}

          {isLoggedIn &&
            !isAdmin && (

              <li>

                <NavLink
                  to="/my-bookings"
                  onClick={closeMenu}
                >

                  <FaBook
                    style={{
                      marginRight: "6px",
                    }}
                  />

                  My Bookings

                </NavLink>

              </li>

            )}

        </ul>


        {/* ==================================
                    RIGHT
        ================================== */}

        <div className="nav-right">


          {/* =================================
                    NOT LOGGED IN
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
                CUSTOMER MY BOOKINGS BUTTON
          ================================= */}

          {isLoggedIn &&
            !isAdmin && (

              <Link
                to="/my-bookings"
                className="my-bookings-btn"
                onClick={closeMenu}
              >

                <FaBook />

                <span>
                  My Bookings
                </span>

              </Link>

            )}


          {/* =================================
                    ACCOUNT
          ================================= */}

          {isLoggedIn && (

            <div
              className="account-menu"
              ref={accountRef}
            >

              <button
                className="account-btn"
                onClick={() =>
                  setAccountOpen(
                    !accountOpen
                  )
                }
              >

                <FaUserCircle />

              </button>


              {accountOpen && (

                <div className="account-dropdown">


                  <div className="dropdown-title">

                    👤 My Account

                  </div>


                  {/* =========================
                        ADMIN DASHBOARD
                  ========================= */}

                  {isAdmin && (

                    <Link
                      to="/dashboard"
                      onClick={closeMenu}
                    >

                      <FaTachometerAlt />

                      Dashboard

                    </Link>

                  )}


                  {/* =========================
                        CUSTOMER / USER
                  ========================= */}

                  <Link
                    to="/notifications"
                    onClick={closeMenu}
                  >

                    <FaBell />

                    Notifications

                  </Link>


                  <Link
                    to="/wishlist"
                    onClick={closeMenu}
                  >

                    <FaHeart />

                    Wishlist

                  </Link>


                  <Link
                    to="/profile"
                    onClick={closeMenu}
                  >

                    <FaUser />

                    My Profile

                  </Link>


                  {/* =========================
                        MY BOOKINGS
                  ========================= */}

                  {!isAdmin && (

                    <Link
                      to="/my-bookings"
                      onClick={closeMenu}
                    >

                      <FaBook />

                      My Bookings

                    </Link>

                  )}


                  <Link
                    to="/settings"
                    onClick={closeMenu}
                  >

                    <FaCog />

                    Settings

                  </Link>


                  <hr />


                  {/* =========================
                        LOGOUT
                  ========================= */}

                  <button
                    type="button"
                    className="logout-link"
                    onClick={handleLogout}
                  >

                    <FaSignOutAlt />

                    Logout

                  </button>


                </div>

              )}

            </div>

          )}

        </div>


        {/* ==================================
                MOBILE MENU
        ================================== */}

        <div
          className="menu-toggle"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}

        </div>


      </div>

    </header>

  );

}


export default Navbar;