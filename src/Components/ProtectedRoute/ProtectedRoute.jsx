// import { Navigate, Outlet, useLocation } from "react-router-dom";

// function ProtectedRoute({ allowedRole }) {

//   const location = useLocation();

//   const token = localStorage.getItem("token");

//   const userRole = localStorage.getItem("userRole");


//   // ==========================================
//   // NOT LOGGED IN
//   // ==========================================

//   if (!token) {

//     return (
//       <Navigate
//         to="/login"
//         replace
//         state={{
//           from: location.pathname,
//         }}
//       />
//     );

//   }


//   // ==========================================
//   // ROLE NOT ALLOWED
//   // ==========================================

//   if (
//     allowedRole &&
//     userRole !== allowedRole
//   ) {

//     return (
//       <Navigate
//         to="/"
//         replace
//       />
//     );

//   }


//   // ==========================================
//   // ACCESS GRANTED
//   // ==========================================

//   return <Outlet />;

// }

// export default ProtectedRoute;


import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";


function ProtectedRoute({
  allowedRole,
  allowedRoles,
}) {

  const location =
    useLocation();


  // ==========================================
  // GET LOGIN DATA
  // ==========================================

  const token =
    localStorage.getItem("token");

  const userRole =
    localStorage.getItem("userRole");


  // ==========================================
  // NOT LOGGED IN
  // ==========================================

  if (!token) {

    return (
      <Navigate
        to="/login"
        replace
        state={{
          from:
            location.pathname,

          fromState:
            location.state,
        }}
      />
    );

  }


  // ==========================================
  // ROLE CHECK
  // ==========================================

  let roleAllowed = true;


  // Existing allowedRole support
  if (allowedRole) {

    roleAllowed =
      userRole === allowedRole;

  }


  // Multiple roles support
  if (
    allowedRoles &&
    Array.isArray(allowedRoles)
  ) {

    roleAllowed =
      allowedRoles.includes(
        userRole
      );

  }


  // ==========================================
  // ROLE NOT ALLOWED
  // ==========================================

  if (!roleAllowed) {

    // Admin
    if (userRole === "admin") {

      return (
        <Navigate
          to="/dashboard"
          replace
        />
      );

    }


    // Customer / Agent
    return (
      <Navigate
        to="/"
        replace
      />
    );

  }


  // ==========================================
  // ACCESS GRANTED
  // ==========================================

  return <Outlet />;

}


export default ProtectedRoute;