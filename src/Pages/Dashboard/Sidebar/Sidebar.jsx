












// // import "./Sidebar.css";

// // import { NavLink, useNavigate } from "react-router-dom";

// // import {
// //   FaPlaneDeparture,
// //   FaTachometerAlt,
// //   FaPlane,
// //   FaTicketAlt,
// //   FaUsers,
// //   FaMoneyCheckAlt,
// //   FaUserCircle,
// //   FaSignOutAlt,
// //   FaChevronLeft,
// //   FaChevronRight,
// //   FaCreditCard,
// // } from "react-icons/fa";

// // import { useState } from "react";

// // function Sidebar() {
// //   const [collapsed, setCollapsed] = useState(false);

// //   const navigate = useNavigate();

// //   // ==========================================
// //   // LOGOUT
// //   // ==========================================

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("user");
// //     localStorage.removeItem("userRole");

// //     navigate("/login");
// //   };

// //   return (
// //     <aside
// //       className={`dashboard-sidebar ${
// //         collapsed ? "collapsed" : ""
// //       }`}
// //     >

// //       {/* ======================================
// //                     LOGO
// //       ====================================== */}

// //       <div className="sidebar-logo">

// //         <div className="logo-box">

// //           <FaPlaneDeparture className="logo-icon" />

// //           {!collapsed && (
// //             <div className="logo-text">
// //               <h2>Saiyed</h2>
// //               <span>Travels</span>
// //             </div>
// //           )}

// //         </div>

// //         <button
// //           type="button"
// //           className="collapse-btn"
// //           onClick={() =>
// //             setCollapsed(!collapsed)
// //           }
// //           aria-label="Toggle sidebar"
// //         >
// //           {collapsed ? (
// //             <FaChevronRight />
// //           ) : (
// //             <FaChevronLeft />
// //           )}
// //         </button>

// //       </div>

// //       {/* ======================================
// //                     MENU
// //       ====================================== */}

// //       <nav className="sidebar-menu">

// //         {/* Dashboard */}

// //         <NavLink
// //           to="/dashboard"
// //           end
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >
// //           <FaTachometerAlt />

// //           {!collapsed && (
// //             <span>Dashboard</span>
// //           )}
// //         </NavLink>


// //         {/* Flight Booking */}

// //         <NavLink
// //           to="/dashboard/flights"
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >
// //           <FaPlane />

// //           {!collapsed && (
// //             <span>Flight Booking</span>
// //           )}
// //         </NavLink>


// //         {/* My Bookings */}

// //         <NavLink
// //           to="/dashboard/my-bookings"
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >
// //           <FaTicketAlt />

// //           {!collapsed && (
// //             <span>My Bookings</span>
// //           )}
// //         </NavLink>


// //         {/* Users */}

// //         <NavLink
// //           to="/dashboard/users"
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >
// //           <FaUsers />

// //           {!collapsed && (
// //             <span>Users</span>
// //           )}
// //         </NavLink>


// //         {/* Payments */}
// // {/* 
// //         <NavLink
// //           to="/dashboard/payments"
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >
// //           <FaMoneyCheckAlt />

// //           {!collapsed && (
// //             <span>Payments</span>
// //           )}
// //         </NavLink> */}


// //         {/* Payment Requests */}

// //         <NavLink
// //           to="/dashboard/payment-requests"
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >
// //           <FaCreditCard />

// //           {!collapsed && (
// //             <span>Payment Requests</span>
// //           )}
// //         </NavLink>


// //         {/* Profile */}

// //         <NavLink
// //           to="/dashboard/profile"
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >
// //           <FaUserCircle />

// //           {!collapsed && (
// //             <span>Profile</span>
// //           )}
// //         </NavLink>

// //       </nav>


// //       {/* ======================================
// //                     BOTTOM LOGOUT
// //       ====================================== */}

// //       <div className="sidebar-bottom">

// //         <button
// //           type="button"
// //           className="logout-btn"
// //           onClick={handleLogout}
// //         >
// //           <FaSignOutAlt />

// //           {!collapsed && (
// //             <span>Logout</span>
// //           )}
// //         </button>

// //       </div>

// //     </aside>
// //   );
// // }

// // export default Sidebar;






































// import "./Sidebar.css";

// import { NavLink, useNavigate } from "react-router-dom";

// import {
//   FaPlaneDeparture,
//   FaTachometerAlt,
//   FaPlane,
//   FaTicketAlt,
//   FaUsers,
//   FaUserCircle,
//   FaSignOutAlt,
//   FaChevronLeft,
//   FaChevronRight,
//   FaCreditCard,
//   FaHome,
// } from "react-icons/fa";

// import { useState } from "react";

// function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [homeLoading, setHomeLoading] = useState(false);

//   const navigate = useNavigate();

//   // ==========================================
//   // HOME PAGE
//   // ==========================================

//   const handleHomeClick = () => {
//     if (homeLoading) return;

//     setHomeLoading(true);

//     setTimeout(() => {
//       navigate("/");
//     }, 700);
//   };

//   // ==========================================
//   // LOGOUT
//   // ==========================================

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     localStorage.removeItem("userRole");

//     navigate("/login");
//   };

//   return (
//     <aside
//       className={`dashboard-sidebar ${
//         collapsed ? "collapsed" : ""
//       }`}
//     >

//       {/* ======================================
//                     HOME ANIMATION
//       ====================================== */}

//       {homeLoading && (
//         <div className="home-transition-overlay">
//           <div className="home-animation-content">
//             <FaPlaneDeparture className="home-flying-plane" />

//             <div className="home-animation-line"></div>

//             <h3>Going Home...</h3>
//             <span>Saiyed Travels</span>
//           </div>
//         </div>
//       )}

//       {/* ======================================
//                     LOGO
//       ====================================== */}

//       <div className="sidebar-logo">

//         <div className="logo-box">

//           <FaPlaneDeparture className="logo-icon" />

//           {!collapsed && (
//             <div className="logo-text">
//               <h2>Saiyed</h2>
//               <span>Travels</span>
//             </div>
//           )}

//         </div>

//         <button
//           type="button"
//           className="collapse-btn"
//           onClick={() =>
//             setCollapsed(!collapsed)
//           }
//           aria-label="Toggle sidebar"
//         >
//           {collapsed ? (
//             <FaChevronRight />
//           ) : (
//             <FaChevronLeft />
//           )}
//         </button>

//       </div>

//       {/* ======================================
//                     MENU
//       ====================================== */}

//       <nav className="sidebar-menu">

//         {/* HOME PAGE */}

//         <button
//           type="button"
//           className="sidebar-home-btn"
//           onClick={handleHomeClick}
//           disabled={homeLoading}
//         >
//           <FaHome />

//           {!collapsed && (
//             <span>Home Page</span>
//           )}
//         </button>


//         {/* Dashboard */}

//         <NavLink
//           to="/dashboard"
//           end
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaTachometerAlt />

//           {!collapsed && (
//             <span>Dashboard</span>
//           )}
//         </NavLink>


//         {/* Flight Booking */}

//         <NavLink
//           to="/dashboard/flights"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaPlane />

//           {!collapsed && (
//             <span>Flight Booking</span>
//           )}
//         </NavLink>


//         {/* My Bookings */}

//         <NavLink
//           to="/dashboard/my-bookings"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaTicketAlt />

//           {!collapsed && (
//             <span>My Bookings</span>
//           )}
//         </NavLink>


//         {/* Users */}

//         <NavLink
//           to="/dashboard/users"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaUsers />

//           {!collapsed && (
//             <span>Users</span>
//           )}
//         </NavLink>


//         {/* Payment Requests */}

//         <NavLink
//           to="/dashboard/payment-requests"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaCreditCard />

//           {!collapsed && (
//             <span>Payment Requests</span>
//           )}
//         </NavLink>


//         {/* Profile */}

//         <NavLink
//           to="/dashboard/profile"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaUserCircle />

//           {!collapsed && (
//             <span>Profile</span>
//           )}
//         </NavLink>

//       </nav>


//       {/* ======================================
//                     BOTTOM LOGOUT
//       ====================================== */}

//       <div className="sidebar-bottom">

//         <button
//           type="button"
//           className="logout-btn"
//           onClick={handleLogout}
//         >
//           <FaSignOutAlt />

//           {!collapsed && (
//             <span>Logout</span>
//           )}
//         </button>

//       </div>

//     </aside>
//   );
// }

// export default Sidebar;














































import "./Sidebar.css";

import { NavLink, useNavigate } from "react-router-dom";

import {
  FaPlaneDeparture,
  FaTachometerAlt,
  FaPlane,
  FaTicketAlt,
  FaUsers,
  FaUserCircle,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
  FaCreditCard,
  FaWallet,
  FaHome,
} from "react-icons/fa";

import { useState } from "react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [homeLoading, setHomeLoading] = useState(false);

  const navigate = useNavigate();

  // ==========================================
  // USER ROLE
  // ==========================================

  const userRole =
    localStorage.getItem("userRole") ||
    JSON.parse(localStorage.getItem("user") || "{}")?.role ||
    "";

  const normalizedRole =
    String(userRole).toLowerCase();

  // ==========================================
  // HOME PAGE
  // ==========================================

  const handleHomeClick = () => {
    if (homeLoading) return;

    setHomeLoading(true);

    setTimeout(() => {
      navigate("/");
    }, 700);
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");

    navigate("/login");
  };

  return (
    <aside
      className={`dashboard-sidebar ${
        collapsed ? "collapsed" : ""
      }`}
    >
      {/* ======================================
                    HOME ANIMATION
      ====================================== */}

      {homeLoading && (
        <div className="home-transition-overlay">
          <div className="home-animation-content">
            <FaPlaneDeparture className="home-flying-plane" />

            <div className="home-animation-line"></div>

            <h3>Going Home...</h3>
            <span>Saiyed Travels</span>
          </div>
        </div>
      )}

      {/* ======================================
                    LOGO
      ====================================== */}

      <div className="sidebar-logo">
        <div className="logo-box">
          <FaPlaneDeparture className="logo-icon" />

          {!collapsed && (
            <div className="logo-text">
              <h2>Saiyed</h2>
              <span>Travels</span>
            </div>
          )}
        </div>

        <button
          type="button"
          className="collapse-btn"
          onClick={() =>
            setCollapsed(!collapsed)
          }
          aria-label="Toggle sidebar"
        >
          {collapsed ? (
            <FaChevronRight />
          ) : (
            <FaChevronLeft />
          )}
        </button>
      </div>

      {/* ======================================
                    MENU
      ====================================== */}

      <nav className="sidebar-menu">

        {/* ======================================
                    HOME PAGE
        ====================================== */}

        <button
          type="button"
          className="sidebar-home-btn"
          onClick={handleHomeClick}
          disabled={homeLoading}
        >
          <FaHome />

          {!collapsed && (
            <span>Home Page</span>
          )}
        </button>

        {/* ======================================
                    DASHBOARD
        ====================================== */}

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <FaTachometerAlt />

          {!collapsed && (
            <span>Dashboard</span>
          )}
        </NavLink>

        {/* ======================================
                    FLIGHT BOOKING
        ====================================== */}

        <NavLink
          to="/dashboard/flights"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <FaPlane />

          {!collapsed && (
            <span>Flight Booking</span>
          )}
        </NavLink>

        {/* ======================================
                    MY BOOKINGS
        ====================================== */}

        <NavLink
          to="/dashboard/my-bookings"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <FaTicketAlt />

          {!collapsed && (
            <span>My Bookings</span>
          )}
        </NavLink>

        {/* ======================================
                    USERS
        ====================================== */}

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <FaUsers />

          {!collapsed && (
            <span>Users</span>
          )}
        </NavLink>

        {/* ======================================
                    PAYMENT REQUESTS
        ====================================== */}

        <NavLink
          to="/dashboard/payment-requests"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <FaCreditCard />

          {!collapsed && (
            <span>Payment Requests</span>
          )}
        </NavLink>

        {/* ======================================
                    ADMIN - AGENT WALLET
        ====================================== */}

        {normalizedRole === "admin" && (
          <NavLink
            to="/dashboard/agent-wallet"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <FaWallet />

            {!collapsed && (
              <span>Agent Wallet</span>
            )}
          </NavLink>
        )}

        {/* ======================================
                    PROFILE
        ====================================== */}

        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <FaUserCircle />

          {!collapsed && (
            <span>Profile</span>
          )}
        </NavLink>
      </nav>

      {/* ======================================
                    BOTTOM LOGOUT
      ====================================== */}

      <div className="sidebar-bottom">
        <button
          type="button"
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />

          {!collapsed && (
            <span>Logout</span>
          )}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
