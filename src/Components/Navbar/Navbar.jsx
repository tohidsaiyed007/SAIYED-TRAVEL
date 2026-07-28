

// import "./Navbar.css";
// import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import {
//   FaPlaneDeparture,
//   FaUserCircle,
//   FaBell,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className="navbar">

//       <div className="nav-container">

//         {/* Logo */}

//         <Link
//           to="/"
//           className="logo"
//           onClick={closeMenu}
//         >
//           <FaPlaneDeparture className="logo-icon" />

//           <h2>
//             Saiyed <span>Travels</span>
//           </h2>
//         </Link>

//         {/* Desktop Menu */}

//         <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

//           <li>
//             <NavLink to="/" onClick={closeMenu}>
//               Home
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/flights" onClick={closeMenu}>
//               Flights
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/offers" onClick={closeMenu}>
//               Offers
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/my-bookings" onClick={closeMenu}>
//               My Bookings
//             </NavLink>
//           </li>


//           <li>
//   <NavLink to="/wishlist">Wishlist</NavLink>
// </li>

//           <li>
//             <NavLink to="/about" onClick={closeMenu}>
//               About
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/contact" onClick={closeMenu}>
//               Contact
//             </NavLink>
//           </li>

//         </ul>

//         {/* Right Side */}

//         <div className="nav-right">

//           {/* Notification */}

//           <Link
//             to="/notifications"
//             className="icon-btn"
//             onClick={closeMenu}
//           >
//             <FaBell />

//             <span className="notification-dot"></span>

//           </Link>

//           {/* Profile */}

//           <Link
//             to="/profile"
//             className="icon-btn"
//             onClick={closeMenu}
//           >
//             <FaUserCircle />
//           </Link>

//           {/* Login */}

//           <Link
//             to="/login"
//             className="login-btn"
//             onClick={closeMenu}
//           >
//             Login
//           </Link>

//           {/* Signup */}

//           <Link
//             to="/signup"
//             className="signup-btn"
//             onClick={closeMenu}
//           >
//             Sign Up
//           </Link>

//         </div>

//         {/* Toggle */}

//         <div
//           className="menu-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//       </div>

//     </header>
//   );
// }

// export default Navbar;




import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

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
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [accountOpen, setAccountOpen] = useState(false);

  const accountRef = useRef(null);

  const closeMenu = () => {

    setMenuOpen(false);

    setAccountOpen(false);

  };

  useEffect(() => {

    const handleClickOutside = (e) => {

      if (
        accountRef.current &&
        !accountRef.current.contains(e.target)
      ) {
        setAccountOpen(false);
      }

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

    return (
    <header className="navbar">

      <div className="nav-container">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <FaPlaneDeparture className="logo-icon" />

          <h2>
            Saiyed <span>Travels</span>
          </h2>

        </Link>

        {/* ================= MENU ================= */}

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

        </ul>

        {/* ================= RIGHT ================= */}

        <div className="nav-right">

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

          {/* ================= ACCOUNT ================= */}

          <div
            className="account-menu"
            ref={accountRef}
          >

            <button
              className="account-btn"
              onClick={() =>
                setAccountOpen(!accountOpen)
              }
            >

              <FaUserCircle />

            </button>

            {accountOpen && (

              <div className="account-dropdown">

                <div className="dropdown-title">

                  👤 Account

                </div>

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

                <Link
                  to="/my-bookings"
                  onClick={closeMenu}
                >
                  <FaBook />
                  My Bookings
                </Link>

                <Link
                  to="/settings"
                  onClick={closeMenu}
                >
                  <FaCog />
                  Settings
                </Link>

                <hr />

                <Link
                  to="/logout"
                  onClick={closeMenu}
                  className="logout-link"
                >
                  <FaSignOutAlt />
                  Logout
                </Link>

              </div>

            )}

          </div>

        </div>

        {/* ================= MOBILE ================= */}

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