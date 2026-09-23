// import "./Topbar.css";

// import { useState } from "react";
// import {
//   Link,
//   useNavigate,
//   useSearchParams,
// } from "react-router-dom";

// import {
//   FaBars,
//   FaSearch,
//   FaBell,
//   FaEnvelope,
//   FaCog,
//   FaUserCircle,
//   FaChevronDown,
//   FaUser,
//   FaEdit,
//   FaLock,
//   FaSignOutAlt,
// } from "react-icons/fa";


// function Topbar() {

//   const [showProfile, setShowProfile] =
//     useState(false);

//   const [search, setSearch] =
//     useState("");

//   const navigate = useNavigate();

//   const [searchParams] =
//     useSearchParams();


//   // ==========================================
//   // SEARCH
//   // ==========================================

//   const handleSearch = (e) => {

//     const value = e.target.value;

//     setSearch(value);


//     if (value.trim()) {

//       navigate(
//         `/dashboard/users?search=${encodeURIComponent(
//           value.trim()
//         )}`
//       );

//     } else {

//       navigate("/dashboard");

//     }

//   };


//   // ==========================================
//   // CLEAR SEARCH
//   // ==========================================

//   const clearSearch = () => {

//     setSearch("");

//     navigate("/dashboard");

//   };


//   // ==========================================
//   // LOGOUT
//   // ==========================================

//   const handleLogout = () => {

//     localStorage.removeItem("token");

//     localStorage.removeItem("user");

//     setShowProfile(false);

//     navigate("/login");

//   };


//   return (

//     <header className="topbar">


//       {/* ======================================
//                     LEFT
//       ====================================== */}

//       <div className="topbar-left">


//         {/* Menu */}

//         <button
//           type="button"
//           className="menu-btn"
//           aria-label="Menu"
//         >

//           <FaBars />

//         </button>


//         {/* ====================================
//                     SEARCH BOX
//         ==================================== */}

//         <div className="search-box">

//           <FaSearch
//             className="search-icon"
//           />


//           <input
//             type="search"
//             value={search}
//             onChange={handleSearch}
//             placeholder="Search users, bookings..."
//             autoComplete="off"
//           />


//           {search && (

//             <button
//               type="button"
//               className="search-clear"
//               onClick={clearSearch}
//               aria-label="Clear search"
//             >

//               ×

//             </button>

//           )}

//         </div>

//       </div>


//       {/* ======================================
//                     RIGHT
//       ====================================== */}

//       <div className="topbar-right">


//         {/* Messages */}

//         <button
//           type="button"
//           className="icon-btn"
//           title="Messages"
//         >

//           <FaEnvelope />

//           <span className="badge">
//             4
//           </span>

//         </button>


//         {/* Notifications */}

//         <button
//           type="button"
//           className="icon-btn"
//           title="Notifications"
//         >

//           <FaBell />

//           <span className="badge">
//             8
//           </span>

//         </button>


//         {/* Settings */}

//         <button
//           type="button"
//           className="icon-btn"
//           title="Settings"
//           onClick={() =>
//             navigate(
//               "/dashboard/settings"
//             )
//           }
//         >

//           <FaCog />

//         </button>


//         {/* ==================================
//                   PROFILE
//         ================================== */}

//         <div
//           className={`profile-box ${
//             showProfile ? "active" : ""
//           }`}
//           onClick={() =>
//             setShowProfile(
//               !showProfile
//             )
//           }
//         >

//           <FaUserCircle
//             className="profile-icon"
//           />


//           <div className="profile-info">

//             <h4>
//               Admin
//             </h4>

//             <p>
//               Saiyed Travels
//             </p>

//           </div>


//           <FaChevronDown
//             className="profile-arrow"
//           />


//           {/* =================================
//                     DROPDOWN
//           ================================= */}

//           {showProfile && (

//             <div
//               className="profile-dropdown"
//               onClick={(e) =>
//                 e.stopPropagation()
//               }
//             >


//               <div className="dropdown-user">

//                 <FaUserCircle />

//                 <div>

//                   <strong>
//                     Admin
//                   </strong>

//                   <span>
//                     Saiyed Travels
//                   </span>

//                 </div>

//               </div>


//               <div className="dropdown-divider" />


//               <Link
//                 to="/dashboard/profile"
//                 onClick={() =>
//                   setShowProfile(false)
//                 }
//               >

//                 <FaUser />

//                 <span>
//                   My Profile
//                 </span>

//               </Link>


//               <Link
//                 to="/dashboard/profile"
//                 onClick={() =>
//                   setShowProfile(false)
//                 }
//               >

//                 <FaEdit />

//                 <span>
//                   Edit Profile
//                 </span>

//               </Link>


//               <Link
//                 to="/dashboard/change-password"
//                 onClick={() =>
//                   setShowProfile(false)
//                 }
//               >

//                 <FaLock />

//                 <span>
//                   Change Password
//                 </span>

//               </Link>


//               <Link
//                 to="/dashboard/settings"
//                 onClick={() =>
//                   setShowProfile(false)
//                 }
//               >

//                 <FaCog />

//                 <span>
//                   Settings
//                 </span>

//               </Link>


//               <div className="dropdown-divider" />


//               <button
//                 type="button"
//                 className="dropdown-logout"
//                 onClick={handleLogout}
//               >

//                 <FaSignOutAlt />

//                 <span>
//                   Logout
//                 </span>

//               </button>


//             </div>

//           )}

//         </div>

//       </div>

//     </header>

//   );

// }


// export default Topbar;







import "./Topbar.css";

import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaBars,
  FaSearch,
  FaUserCircle,
  FaChevronDown,
  FaUser,
  FaLock,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

function Topbar() {
  const [showProfile, setShowProfile] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const navigate = useNavigate();

  // ==========================================
  // SEARCH
  // ==========================================

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (value.trim()) {
      navigate(
        `/dashboard/users?search=${encodeURIComponent(
          value.trim()
        )}`
      );
    } else {
      navigate("/dashboard");
    }
  };

  // ==========================================
  // CLEAR SEARCH
  // ==========================================

  const clearSearch = () => {
    setSearch("");
    navigate("/dashboard");
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");

    setShowProfile(false);

    navigate("/login");
  };

  // ==========================================
  // MENU
  // ==========================================

  const handleMenu = () => {
    const sidebar =
      document.querySelector(
        ".dashboard-sidebar"
      );

    if (!sidebar) return;

    sidebar.classList.toggle(
      "mobile-open"
    );
  };

  return (
    <header className="topbar">

      {/* ======================================
                    LEFT
      ====================================== */}

      <div className="topbar-left">

        {/* MENU */}

        <button
          type="button"
          className="menu-btn"
          onClick={handleMenu}
          aria-label="Open menu"
        >
          <FaBars />
        </button>


        {/* SEARCH */}

        <div className="topbar-search">

          <FaSearch className="topbar-search-icon" />

          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search users, bookings..."
            autoComplete="off"
          />

          {search && (
            <button
              type="button"
              className="topbar-search-clear"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <FaTimes />
            </button>
          )}

        </div>

      </div>


      {/* ======================================
                    RIGHT
      ====================================== */}

      <div className="topbar-right">

        {/* PROFILE */}

        <div className="profile-wrapper">

          <button
            type="button"
            className={`profile-box ${
              showProfile ? "active" : ""
            }`}
            onClick={() =>
              setShowProfile(
                !showProfile
              )
            }
          >

            <FaUserCircle className="profile-icon" />

            <div className="profile-info">

              <strong>
                Admin
              </strong>

              <span>
                Saiyed Travels
              </span>

            </div>

            <FaChevronDown
              className={`profile-arrow ${
                showProfile
                  ? "rotate"
                  : ""
              }`}
            />

          </button>


          {/* ==================================
                    DROPDOWN
          ================================== */}

          {showProfile && (

            <div className="profile-dropdown">

              <div className="dropdown-user">

                <FaUserCircle />

                <div>

                  <strong>
                    Admin
                  </strong>

                  <span>
                    Saiyed Travels
                  </span>

                </div>

              </div>


              <div className="dropdown-divider" />


              <Link
                to="/dashboard/profile"
                onClick={() =>
                  setShowProfile(false)
                }
              >
                <FaUser />

                <span>
                  My Profile
                </span>
              </Link>


              <Link
                to="/dashboard/change-password"
                onClick={() =>
                  setShowProfile(false)
                }
              >
                <FaLock />

                <span>
                  Change Password
                </span>
              </Link>


              <div className="dropdown-divider" />


              <button
                type="button"
                className="dropdown-logout"
                onClick={handleLogout}
              >
                <FaSignOutAlt />

                <span>
                  Logout
                </span>
              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}

export default Topbar;  