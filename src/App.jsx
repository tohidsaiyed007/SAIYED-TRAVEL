// import {
//   Routes,
//   Route,
// } from "react-router-dom";

// // ==========================================
// // WEBSITE
// // ==========================================

// import Home from "./Pages/Home/Home";
// import Flights from "./Pages/Flights/Flights";
// import FlightDetails from "./Pages/FlightDetails/FlightDetails";
// import Booking from "./Pages/Booking/Booking";
// import Payment from "./Pages/Payment/Payment";
// import Success from "./Pages/Success/Success";

// // ==========================================
// // AUTH
// // ==========================================

// import Login from "./Pages/Login/Login";
// import Signup from "./Pages/Signup/Signup";
// import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";

// // ==========================================
// // OTHER PAGES
// // ==========================================

// import Offers from "./Pages/Offers/Offers";
// import About from "./Pages/About/About";
// import Contact from "./Pages/Contact/Contact";

// import MyBookings from "./Pages/MyBookings/MyBookings";

// import Notifications from "./Pages/Notifications/Notifications";
// import Wishlist from "./Pages/Wishlist/Wishlist";

// // ==========================================
// // CUSTOMER PROFILE
// // ==========================================

// import Profile from "./Pages/Profile/Profile";
// import EditProfile from "./Pages/EditProfile/EditProfile";
// import ChangePassword from "./Pages/ChangePassword/ChangePassword";

// // ==========================================
// // ADMIN
// // ==========================================

// import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
// import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
// import FlightBooking from "./Pages/Dashboard/FlightBooking/FlightBooking";
// import Users from "./Pages/Dashboard/Users/Users";

// import AdminMyBookings from "./Pages/Dashboard/MyBookings/MyBookings";

// import AdminProfile from "./Pages/Dashboard/AdminProfile/AdminProfile";
// import AdminEditProfile from "./Pages/Dashboard/AdminEditProfile/AdminEditProfile";

// // ==========================================
// // PAYMENT REQUESTS
// // ==========================================

// import PaymentRequests from "./Pages/Dashboard/PaymentRequests/PaymentRequests";

// // ==========================================
// // PROTECTED ROUTE
// // ==========================================

// import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";


// function App() {

//   return (

//     <Routes>

//       {/* =====================================================
//                             WEBSITE
//       ===================================================== */}

//       <Route
//         path="/"
//         element={<Home />}
//       />


//       {/* =====================================================
//                             FLIGHTS
//       ===================================================== */}

//       <Route
//         path="/flights"
//         element={<Flights />}
//       />


//       {/* =====================================================
//                         FLIGHT DETAILS
//       ===================================================== */}

//       <Route
//         path="/flight-details"
//         element={<FlightDetails />}
//       />


//       {/* =====================================================
//                           BOOKING
//       ===================================================== */}

//       <Route
//         path="/booking"
//         element={<Booking />}
//       />


//       {/* =====================================================
//                           PAYMENT
//       ===================================================== */}

//       <Route
//         path="/payment"
//         element={<Payment />}
//       />


//       {/* =====================================================
//                     SUCCESS / TICKET
//       ===================================================== */}

//       <Route
//         path="/success"
//         element={<Success />}
//       />


//       {/* =====================================================
//                             AUTH
//       ===================================================== */}

//       <Route
//         path="/login"
//         element={<Login />}
//       />

//       <Route
//         path="/signup"
//         element={<Signup />}
//       />

//       <Route
//         path="/forgot-password"
//         element={<ForgotPassword />}
//       />


//       {/* =====================================================
//                          OTHER PAGES
//       ===================================================== */}

//       <Route
//         path="/offers"
//         element={<Offers />}
//       />

//       <Route
//         path="/about"
//         element={<About />}
//       />

//       <Route
//         path="/contact"
//         element={<Contact />}
//       />

//       <Route
//         path="/my-bookings"
//         element={<MyBookings />}
//       />

//       <Route
//         path="/notifications"
//         element={<Notifications />}
//       />

//       <Route
//         path="/wishlist"
//         element={<Wishlist />}
//       />


//       {/* =====================================================
//                     CUSTOMER PROTECTED ROUTES
//       ===================================================== */}

//       <Route
//         element={
//           <ProtectedRoute />
//         }
//       >

//         <Route
//           path="/profile"
//           element={<Profile />}
//         />

//         <Route
//           path="/edit-profile"
//           element={<EditProfile />}
//         />

//         <Route
//           path="/change-password"
//           element={<ChangePassword />}
//         />

//       </Route>


//       {/* =====================================================
//                       ADMIN PROTECTED ROUTES
//       ===================================================== */}

//       <Route
//         element={
//           <ProtectedRoute
//             allowedRole="admin"
//           />
//         }
//       >

//         {/* =================================================
//                          ADMIN DASHBOARD
//         ================================================= */}

//         <Route
//           path="/dashboard"
//           element={<Dashboard />}
//         >

//           {/* ===============================================
//                        DASHBOARD HOME
//           =============================================== */}

//           <Route
//             index
//             element={<DashboardHome />}
//           />


//           {/* ===============================================
//                        FLIGHT MANAGEMENT
//           =============================================== */}

//           <Route
//             path="flights"
//             element={<FlightBooking />}
//           />


//           {/* ===============================================
//                        ADMIN BOOKINGS
//           =============================================== */}

//           <Route
//             path="my-bookings"
//             element={<AdminMyBookings />}
//           />


//           {/* ===============================================
//                             USERS
//           =============================================== */}

//           <Route
//             path="users"
//             element={<Users />}
//           />


//           {/* ===============================================
//                        PAYMENT REQUESTS
//           =============================================== */}

//           <Route
//             path="payment-requests"
//             element={<PaymentRequests />}
//           />


//           {/* ===============================================
//                        ADMIN PROFILE
//           =============================================== */}

//           <Route
//             path="profile"
//             element={<AdminProfile />}
//           />


//           {/* ===============================================
//                     EDIT ADMIN PROFILE
//           =============================================== */}

//           <Route
//             path="profile/edit"
//             element={<AdminEditProfile />}
//           />

//         </Route>

//       </Route>

//     </Routes>

//   );

// }


// export default App;
























import {
  Routes,
  Route,
} from "react-router-dom";

// ==========================================
// WEBSITE
// ==========================================

import Home from "./Pages/Home/Home";
import Flights from "./Pages/Flights/Flights";
import FlightDetails from "./Pages/FlightDetails/FlightDetails";
import Booking from "./Pages/Booking/Booking";
import Payment from "./Pages/Payment/Payment";
import Success from "./Pages/Success/Success";

// ==========================================
// AUTH
// ==========================================

import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";

// ==========================================
// OTHER PAGES
// ==========================================

import Offers from "./Pages/Offers/Offers";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

import MyBookings from "./Pages/MyBookings/MyBookings";

import Notifications from "./Pages/Notifications/Notifications";
import Wishlist from "./Pages/Wishlist/Wishlist";

// ==========================================
// CUSTOMER PROFILE
// ==========================================

import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";

// ==========================================
// ADMIN
// ==========================================

import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import FlightBooking from "./Pages/Dashboard/FlightBooking/FlightBooking";
import Users from "./Pages/Dashboard/Users/Users";

import AdminMyBookings from "./Pages/Dashboard/MyBookings/MyBookings";

import AdminProfile from "./Pages/Dashboard/AdminProfile/AdminProfile";
import AdminEditProfile from "./Pages/Dashboard/AdminEditProfile/AdminEditProfile";

// ==========================================
// PAYMENT REQUESTS
// ==========================================

import PaymentRequests from "./Pages/Dashboard/PaymentRequests/PaymentRequests";

// ==========================================
// AGENT WALLET
// ==========================================

import AgentWallet from "./Pages/AgentWallet/AgentWallet";

// ==========================================
// PROTECTED ROUTE
// ==========================================

import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";


function App() {

  return (

    <Routes>

      {/* =====================================================
                            WEBSITE
      ===================================================== */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* =====================================================
                            FLIGHTS
      ===================================================== */}

      <Route
        path="/flights"
        element={<Flights />}
      />


      {/* =====================================================
                        FLIGHT DETAILS
      ===================================================== */}

      <Route
        path="/flight-details"
        element={<FlightDetails />}
      />


      {/* =====================================================
                          BOOKING
      ===================================================== */}

      <Route
        path="/booking"
        element={<Booking />}
      />


      {/* =====================================================
                          PAYMENT
      ===================================================== */}

      <Route
        path="/payment"
        element={<Payment />}
      />


      {/* =====================================================
                    SUCCESS / TICKET
      ===================================================== */}

      <Route
        path="/success"
        element={<Success />}
      />


      {/* =====================================================
                            AUTH
      ===================================================== */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />


      {/* =====================================================
                         OTHER PAGES
      ===================================================== */}

      <Route
        path="/offers"
        element={<Offers />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/my-bookings"
        element={<MyBookings />}
      />

      <Route
        path="/notifications"
        element={<Notifications />}
      />

      <Route
        path="/wishlist"
        element={<Wishlist />}
      />


      {/* =====================================================
                    CUSTOMER PROTECTED ROUTES
      ===================================================== */}

      <Route
        element={
          <ProtectedRoute />
        }
      >

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/edit-profile"
          element={<EditProfile />}
        />

        <Route
          path="/change-password"
          element={<ChangePassword />}
        />

      </Route>


      {/* =====================================================
                      ADMIN PROTECTED ROUTES
      ===================================================== */}

      <Route
        element={
          <ProtectedRoute
            allowedRole="admin"
          />
        }
      >

        {/* =================================================
                         ADMIN DASHBOARD
        ================================================= */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        >

          {/* ===============================================
                       DASHBOARD HOME
          =============================================== */}

          <Route
            index
            element={<DashboardHome />}
          />


          {/* ===============================================
                       FLIGHT MANAGEMENT
          =============================================== */}

          <Route
            path="flights"
            element={<FlightBooking />}
          />


          {/* ===============================================
                       ADMIN BOOKINGS
          =============================================== */}

          <Route
            path="my-bookings"
            element={<AdminMyBookings />}
          />


          {/* ===============================================
                            USERS
          =============================================== */}

          <Route
            path="users"
            element={<Users />}
          />


          {/* ===============================================
                       PAYMENT REQUESTS
          =============================================== */}

          <Route
            path="payment-requests"
            element={<PaymentRequests />}
          />


          {/* ===============================================
                       AGENT WALLET
          =============================================== */}

          <Route
            path="agent-wallet"
            element={<AgentWallet />}
          />


          {/* ===============================================
                       ADMIN PROFILE
          =============================================== */}

          <Route
            path="profile"
            element={<AdminProfile />}
          />


          {/* ===============================================
                    EDIT ADMIN PROFILE
          =============================================== */}

          <Route
            path="profile/edit"
            element={<AdminEditProfile />}
          />

        </Route>

      </Route>

    </Routes>

  );

}


export default App;