// // // // import "./Sidebar.css";

// // // // import { NavLink } from "react-router-dom";

// // // // import {
// // // //   FaPlaneDeparture,
// // // //   FaTachometerAlt,
// // // //   FaPlane,
// // // //   FaTicketAlt,
// // // //   FaUsers,
// // // //   FaMoneyCheckAlt,
// // // //   FaWallet,
// // // //   FaChartBar,
// // // //   FaUserCircle,
// // // //   FaCog,
// // // //   FaSignOutAlt,
// // // //   FaChevronLeft,
// // // //   FaChevronRight,
// // // // } from "react-icons/fa";

// // // // import { useState } from "react";

// // // // function Sidebar() {

// // // //   const [collapsed, setCollapsed] = useState(false);

// // // //   return (

// // // //     <aside
// // // //       className={`dashboard-sidebar ${
// // // //         collapsed ? "collapsed" : ""
// // // //       }`}
// // // //     >

// // // //       {/* Logo */}

// // // //       <div className="sidebar-logo">

// // // //         <div className="logo-box">

// // // //           <FaPlaneDeparture className="logo-icon" />

// // // //           {!collapsed && (

// // // //             <div>

// // // //               <h2>Saiyed</h2>

// // // //               <span>Travels</span>

// // // //             </div>

// // // //           )}

// // // //         </div>

// // // //         <button
// // // //           className="collapse-btn"
// // // //           onClick={() =>
// // // //             setCollapsed(!collapsed)
// // // //           }
// // // //         >

// // // //           {collapsed ? (
// // // //             <FaChevronRight />
// // // //           ) : (
// // // //             <FaChevronLeft />
// // // //           )}

// // // //         </button>

// // // //       </div>

// // // //       {/* Menu */}

// // // //       <nav className="sidebar-menu">

// // // //         <NavLink to="/dashboard">

// // // //           <FaTachometerAlt />

// // // //           {!collapsed && <span>Dashboard</span>}

// // // //         </NavLink>

// // // //         <NavLink to="/dashboard/flights">

// // // //           <FaPlane />

// // // //           {!collapsed && (
// // // //             <span>Flight Booking</span>
// // // //           )}

// // // //         </NavLink>

// // // //         <NavLink to="/dashboard/bookings">

// // // //           <FaTicketAlt />

// // // //           {!collapsed && (
// // // //             <span>My Bookings</span>
// // // //           )}

// // // //         </NavLink>

// // // //         <NavLink to="/dashboard/customers">

// // // //           <FaUsers />

// // // //           {!collapsed && (
// // // //             <span>Customers</span>
// // // //           )}

// // // //         </NavLink>

// // // //         <NavLink to="/dashboard/payments">

// // // //           <FaMoneyCheckAlt />

// // // //           {!collapsed && (
// // // //             <span>Payments</span>
// // // //           )}

// // // //         </NavLink>

// // // //                 <NavLink to="/dashboard/earnings">

// // // //           <FaWallet />

// // // //           {!collapsed && (
// // // //             <span>Earnings</span>
// // // //           )}

// // // //         </NavLink>

// // // //         <NavLink to="/dashboard/reports">

// // // //           <FaChartBar />

// // // //           {!collapsed && (
// // // //             <span>Reports</span>
// // // //           )}

// // // //         </NavLink>

// // // //         <NavLink to="/dashboard/profile">

// // // //           <FaUserCircle />

// // // //           {!collapsed && (
// // // //             <span>Profile</span>
// // // //           )}

// // // //         </NavLink>

// // // //         <NavLink to="/dashboard/settings">

// // // //           <FaCog />

// // // //           {!collapsed && (
// // // //             <span>Settings</span>
// // // //           )}

// // // //         </NavLink>

// // // //       </nav>

// // // //       {/* Bottom */}

// // // //       <div className="sidebar-bottom">

// // // //         <NavLink
// // // //           to="/logout"
// // // //           className="logout-btn"
// // // //         >

// // // //           <FaSignOutAlt />

// // // //           {!collapsed && (
// // // //             <span>Logout</span>
// // // //           )}

// // // //         </NavLink>

// // // //       </div>

// // // //     </aside>

// // // //   );

// // // // }

// // // // export default Sidebar;




// // // import "./Sidebar.css";

// // // import { NavLink } from "react-router-dom";

// // // import {
// // //   FaPlaneDeparture,
// // //   FaTachometerAlt,
// // //   FaPlane,
// // //   FaTicketAlt,
// // //   FaUsers,
// // //   FaMoneyCheckAlt,
// // //   FaWallet,
// // //   FaChartBar,
// // //   FaUserCircle,
// // //   FaCog,
// // //   FaSignOutAlt,
// // //   FaChevronLeft,
// // //   FaChevronRight,
// // // } from "react-icons/fa";

// // // import { useState } from "react";

// // // function Sidebar() {

// // //   const [collapsed, setCollapsed] = useState(false);

// // //   return (

// // //     <aside
// // //       className={`dashboard-sidebar ${
// // //         collapsed ? "collapsed" : ""
// // //       }`}
// // //     >

// // //       {/* ==========================================
// // //                     LOGO
// // //       ========================================== */}

// // //       <div className="sidebar-logo">

// // //         <div className="logo-box">

// // //           <FaPlaneDeparture className="logo-icon" />

// // //           {!collapsed && (

// // //             <div>

// // //               <h2>Saiyed</h2>

// // //               <span>Travels</span>

// // //             </div>

// // //           )}

// // //         </div>


// // //         <button
// // //           className="collapse-btn"
// // //           onClick={() =>
// // //             setCollapsed(!collapsed)
// // //           }
// // //         >

// // //           {collapsed ? (
// // //             <FaChevronRight />
// // //           ) : (
// // //             <FaChevronLeft />
// // //           )}

// // //         </button>

// // //       </div>


// // //       {/* ==========================================
// // //                     MENU
// // //       ========================================== */}

// // //       <nav className="sidebar-menu">


// // //         {/* Dashboard */}

// // //         <NavLink to="/dashboard">

// // //           <FaTachometerAlt />

// // //           {!collapsed && (
// // //             <span>Dashboard</span>
// // //           )}

// // //         </NavLink>


// // //         {/* Flight Booking */}

// // //         <NavLink to="/dashboard/flights">

// // //           <FaPlane />

// // //           {!collapsed && (
// // //             <span>Flight Booking</span>
// // //           )}

// // //         </NavLink>


// // //         {/* Bookings */}

// // //         <NavLink to="/dashboard/bookings">

// // //           <FaTicketAlt />

// // //           {!collapsed && (
// // //             <span>My Bookings</span>
// // //           )}

// // //         </NavLink>


// // //         {/* ======================================
// // //                     USERS
// // //         ====================================== */}

// // //         <NavLink to="/dashboard/users">

// // //           <FaUsers />

// // //           {!collapsed && (
// // //             <span>Users</span>
// // //           )}

// // //         </NavLink>


// // //         {/* Customers */}

// // //         <NavLink to="/dashboard/customers">

// // //           <FaUsers />

// // //           {!collapsed && (
// // //             <span>Customers</span>
// // //           )}

// // //         </NavLink>


// // //         {/* Payments */}

// // //         <NavLink to="/dashboard/payments">

// // //           <FaMoneyCheckAlt />

// // //           {!collapsed && (
// // //             <span>Payments</span>
// // //           )}

// // //         </NavLink>


// // //         {/* Earnings */}

// // //         <NavLink to="/dashboard/earnings">

// // //           <FaWallet />

// // //           {!collapsed && (
// // //             <span>Earnings</span>
// // //           )}

// // //         </NavLink>


// // //         {/* Reports */}

// // //         <NavLink to="/dashboard/reports">

// // //           <FaChartBar />

// // //           {!collapsed && (
// // //             <span>Reports</span>
// // //           )}

// // //         </NavLink>


// // //         {/* Profile */}

// // //         <NavLink to="/dashboard/profile">

// // //           <FaUserCircle />

// // //           {!collapsed && (
// // //             <span>Profile</span>
// // //           )}

// // //         </NavLink>


// // //         {/* Settings */}

// // //         <NavLink to="/dashboard/settings">

// // //           <FaCog />

// // //           {!collapsed && (
// // //             <span>Settings</span>
// // //           )}

// // //         </NavLink>

// // //       </nav>


// // //       {/* ==========================================
// // //                     LOGOUT
// // //       ========================================== */}

// // //       <div className="sidebar-bottom">

// // //         <NavLink
// // //           to="/logout"
// // //           className="logout-btn"
// // //         >

// // //           <FaSignOutAlt />

// // //           {!collapsed && (
// // //             <span>Logout</span>
// // //           )}

// // //         </NavLink>

// // //       </div>

// // //     </aside>

// // //   );

// // // }

// // // export default Sidebar;


// // import "./Sidebar.css";

// // import { NavLink, useNavigate } from "react-router-dom";

// // import {
// //   FaPlaneDeparture,
// //   FaTachometerAlt,
// //   FaPlane,
// //   FaTicketAlt,
// //   FaUsers,
// //   FaMoneyCheckAlt,
// //   FaWallet,
// //   FaChartBar,
// //   FaUserCircle,
// //   FaCog,
// //   FaSignOutAlt,
// //   FaChevronLeft,
// //   FaChevronRight,
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
// // {/* 
// //         <NavLink
// //           to="/dashboard/bookings"
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >

// //           <FaTicketAlt />

// //           {!collapsed && (
// //             <span>My Bookings</span>
// //           )}

// //         </NavLink>
// //  */}


// //   <NavLink
// //   to="/dashboard/my-bookings"
// //   className={({ isActive }) =>
// //     isActive ? "active" : ""
// //   }
// // >

// //   <FaTicketAlt />

// //   {!collapsed && (
// //     <span>My Bookings</span>
// //   )}

// // </NavLink>

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


// //         {/* Customers */}

// //         <NavLink
// //           to="/dashboard/customers"
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >

// //           <FaUsers />

// //           {!collapsed && (
// //             <span>Customers</span>
// //           )}

// //         </NavLink>


// //         {/* Payments */}

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

// //         </NavLink>


// //         {/* Earnings */}

// //         <NavLink
// //           to="/dashboard/earnings"
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >

// //           <FaWallet />

// //           {!collapsed && (
// //             <span>Earnings</span>
// //           )}

// //         </NavLink>


// //         {/* Reports */}

// //         <NavLink
// //           to="/dashboard/reports"
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >

// //           <FaChartBar />

// //           {!collapsed && (
// //             <span>Reports</span>
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


// //         {/* Settings */}

// //         <NavLink
// //           to="/dashboard/settings"
// //           className={({ isActive }) =>
// //             isActive ? "active" : ""
// //           }
// //         >

// //           <FaCog />

// //           {!collapsed && (
// //             <span>Settings</span>
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
//   FaMoneyCheckAlt,
//   FaWallet,
//   FaChartBar,
//   FaUserCircle,
//   FaCog,
//   FaSignOutAlt,
//   FaChevronLeft,
//   FaChevronRight,
//   FaCreditCard,
// } from "react-icons/fa";

// import { useState } from "react";

// function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   const navigate = useNavigate();

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
//           onClick={() => setCollapsed(!collapsed)}
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

//         {/* Dashboard */}

//         <NavLink
//           to="/dashboard"
//           end
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaTachometerAlt />

//           {!collapsed && <span>Dashboard</span>}
//         </NavLink>


//         {/* Flight Booking */}

//         <NavLink
//           to="/dashboard/flights"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaPlane />

//           {!collapsed && <span>Flight Booking</span>}
//         </NavLink>


//         {/* My Bookings */}

//         <NavLink
//           to="/dashboard/my-bookings"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaTicketAlt />

//           {!collapsed && <span>My Bookings</span>}
//         </NavLink>


//         {/* Users */}

//         <NavLink
//           to="/dashboard/users"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaUsers />

//           {!collapsed && <span>Users</span>}
//         </NavLink>


//         {/* Customers */}

//         <NavLink
//           to="/dashboard/customers"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaUsers />

//           {!collapsed && <span>Customers</span>}
//         </NavLink>


//         {/* Payments */}

//         <NavLink
//           to="/dashboard/payments"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaMoneyCheckAlt />

//           {!collapsed && <span>Payments</span>}
//         </NavLink>


//         {/* ======================================
//               PAYMENT REQUESTS - NEW
//         ====================================== */}

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


//         {/* Earnings */}

//         <NavLink
//           to="/dashboard/earnings"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaWallet />

//           {!collapsed && <span>Earnings</span>}
//         </NavLink>


//         {/* Reports */}

//         <NavLink
//           to="/dashboard/reports"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaChartBar />

//           {!collapsed && <span>Reports</span>}
//         </NavLink>


//         {/* Profile */}

//         <NavLink
//           to="/dashboard/profile"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaUserCircle />

//           {!collapsed && <span>Profile</span>}
//         </NavLink>


//         {/* Settings */}

//         <NavLink
//           to="/dashboard/settings"
//           className={({ isActive }) =>
//             isActive ? "active" : ""
//           }
//         >
//           <FaCog />

//           {!collapsed && <span>Settings</span>}
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

//           {!collapsed && <span>Logout</span>}
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
  FaMoneyCheckAlt,
  FaUserCircle,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
  FaCreditCard,
} from "react-icons/fa";

import { useState } from "react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

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

        {/* Dashboard */}

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


        {/* Flight Booking */}

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


        {/* My Bookings */}

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


        {/* Users */}

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


        {/* Payments */}
{/* 
        <NavLink
          to="/dashboard/payments"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <FaMoneyCheckAlt />

          {!collapsed && (
            <span>Payments</span>
          )}
        </NavLink> */}


        {/* Payment Requests */}

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


        {/* Profile */}

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