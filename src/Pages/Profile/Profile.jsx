

// // import "./Profile.css";
// // import { useNavigate } from "react-router-dom";

// // function Profile() {

// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     navigate("/login");
// //   };

// //   return (
// //     <section className="profile-page">

// //       <div className="profile-container">

// //         {/* Left Card */}

// //         <div className="profile-card">

// //           <div className="profile-image">
// //             <img
// //               src="https://i.pravatar.cc/250?img=12"
// //               alt="Profile"
// //             />
// //           </div>

// //           <h2>Tohid Saiyed</h2>

// //           <p className="profile-email">
// //             tohid@example.com
// //           </p>

// //           <button
// //             className="edit-btn"
// //             onClick={() => navigate("/edit-profile")}
// //           >
// //             Edit Profile
// //           </button>

// //         </div>

// //         {/* Right */}

// //         <div className="profile-details">

// //           <h2>Personal Information</h2>

// //           <div className="details-grid">

// //             <div className="detail-box">
// //               <h4>Full Name</h4>
// //               <p>Tohid Saiyed</p>
// //             </div>

// //             <div className="detail-box">
// //               <h4>Email</h4>
// //               <p>tohid@example.com</p>
// //             </div>

// //             <div className="detail-box">
// //               <h4>Phone</h4>
// //               <p>+91 9876543210</p>
// //             </div>

// //             <div className="detail-box">
// //               <h4>Gender</h4>
// //               <p>Male</p>
// //             </div>

// //             <div className="detail-box">
// //               <h4>Date of Birth</h4>
// //               <p>10 Jan 2005</p>
// //             </div>

// //             <div className="detail-box">
// //               <h4>City</h4>
// //               <p>Jhunjhunu</p>
// //             </div>

// //             <div className="detail-box">
// //               <h4>State</h4>
// //               <p>Rajasthan</p>
// //             </div>

// //             <div className="detail-box">
// //               <h4>Country</h4>
// //               <p>India</p>
// //             </div>

// //           </div>

// //           <div className="account-section">

// //             <h2>Account</h2>

// //             <div className="account-buttons">

// //               <button
// //                 className="booking-btn"
// //                 onClick={() => navigate("/my-bookings")}
// //               >
// //                 My Bookings
// //               </button>

// //               <button
// //                 className="password-btn"
// //                 onClick={() => navigate("/change-password")}
// //               >
// //                 Change Password
// //               </button>

// //               <button
// //                 className="logout-btn"
// //                 onClick={handleLogout}
// //               >
// //                 Logout
// //               </button>

// //             </div>

// //           </div>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default Profile;


// import "./Profile.css";
// import { useNavigate } from "react-router-dom";

// function Profile() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <section className="profile-page">
//       <div className="profile-container">

//         {/* Left Card */}

//         <div className="profile-card">
//           <div className="profile-image">
//             <img
//               src="https://i.pravatar.cc/250?img=12"
//               alt="Profile"
//             />
//           </div>

//           <h2>Tohid Saiyed</h2>

//           <p className="profile-email">
//             tohid@example.com
//           </p>

//           <button
//             className="edit-btn"
//             onClick={() => navigate("/edit-profile")}
//           >
//             Edit Profile
//           </button>
//         </div>

//         {/* Right Section */}

//         <div className="profile-details">

//           <h2>Personal Information</h2>

//           <div className="details-grid">

//             <div className="detail-box">
//               <h4>Full Name</h4>
//               <p>Tohid Saiyed</p>
//             </div>

//             <div className="detail-box">
//               <h4>Email</h4>
//               <p>tohid@example.com</p>
//             </div>

//             <div className="detail-box">
//               <h4>Phone</h4>
//               <p>+91 9876543210</p>
//             </div>

//             <div className="detail-box">
//               <h4>Gender</h4>
//               <p>Male</p>
//             </div>

//             <div className="detail-box">
//               <h4>Date of Birth</h4>
//               <p>10 Jan 2005</p>
//             </div>

//             <div className="detail-box">
//               <h4>City</h4>
//               <p>Jhunjhunu</p>
//             </div>

//             <div className="detail-box">
//               <h4>State</h4>
//               <p>Rajasthan</p>
//             </div>

//             <div className="detail-box">
//               <h4>Country</h4>
//               <p>India</p>
//             </div>

//           </div>

//           <div className="account-section">

//             <h2>Account</h2>

//             <div className="account-buttons">

//               <button
//                 className="booking-btn"
//                 onClick={() => navigate("/my-bookings")}
//               >
//                 My Bookings
//               </button>

//               <button
//                 className="password-btn"
//                 onClick={() => navigate("/change-password")}
//               >
//                 Change Password
//               </button>

//               <button
//                 className="logout-btn"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Profile;


import "./Profile.css";

import { useEffect, useState } from "react";

import {
  useNavigate,
} from "react-router-dom";


function Profile() {

  const navigate =
    useNavigate();

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  // ==========================================
  // LOAD LOGGED-IN USER
  // ==========================================

  useEffect(() => {

    const loadProfile = async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );


        // Login nahi hai
        if (!token) {

          navigate("/login");

          return;
        }


        const response =
          await fetch(
            "http://localhost:5000/api/users/profile",
            {
              method: "GET",

              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );


        const data =
          await response.json();


        if (!response.ok) {

          console.error(
            "Profile Error:",
            data
          );

          localStorage.removeItem(
            "token"
          );

          localStorage.removeItem(
            "user"
          );

          localStorage.removeItem(
            "userRole"
          );

          navigate("/login");

          return;
        }


        // Actual MongoDB user
        setUser(data.user);


        // LocalStorage bhi update
        localStorage.setItem(
          "user",
          JSON.stringify(
            data.user
          )
        );


      } catch (error) {

        console.error(
          "Profile Error:",
          error
        );

        setError(
          "Unable to connect to server."
        );

      } finally {

        setLoading(false);

      }

    };


    loadProfile();

  }, [navigate]);


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

    navigate("/login");

  };


  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {

    return (
      <section className="profile-page">

        <div className="profile-container">

          <div className="profile-loading">

            Loading Profile...

          </div>

        </div>

      </section>
    );

  }


  // ==========================================
  // ERROR
  // ==========================================

  if (error) {

    return (
      <section className="profile-page">

        <div className="profile-container">

          <div className="profile-error">

            {error}

          </div>

        </div>

      </section>
    );

  }


  // ==========================================
  // NO USER
  // ==========================================

  if (!user) {

    return null;

  }


  // ==========================================
  // FULL NAME
  // ==========================================

  const fullName =
    `${user.firstName || ""} ${
      user.lastName || ""
    }`.trim();


  // ==========================================
  // RETURN
  // ==========================================

  return (

    <section className="profile-page">

      <div className="profile-container">


        {/* ==================================
                    LEFT CARD
        ================================== */}

        <div className="profile-card">

          <div className="profile-image">

            <img
              src="https://i.pravatar.cc/250?img=12"
              alt="Profile"
            />

          </div>


          <h2>
            {fullName ||
              "User"}
          </h2>


          <p className="profile-email">

            {user.email}

          </p>


          <p className="profile-role">

            {user.role === "admin"
              ? "Administrator"
              : user.role === "agent"
              ? "Travel Agent"
              : "Customer"}

          </p>


          <button
            className="edit-btn"
            onClick={() =>
              navigate(
                "/edit-profile"
              )
            }
          >
            Edit Profile
          </button>

        </div>


        {/* ==================================
                  RIGHT SECTION
        ================================== */}

        <div className="profile-details">

          <h2>
            Personal Information
          </h2>


          <div className="details-grid">


            {/* FULL NAME */}

            <div className="detail-box">

              <h4>
                Full Name
              </h4>

              <p>
                {fullName ||
                  "Not added"}
              </p>

            </div>


            {/* EMAIL */}

            <div className="detail-box">

              <h4>
                Email
              </h4>

              <p>
                {user.email ||
                  "Not added"}
              </p>

            </div>


            {/* PHONE */}

            <div className="detail-box">

              <h4>
                Phone
              </h4>

              <p>
                {user.phone ||
                  "Not added"}
              </p>

            </div>


            {/* ROLE */}

            <div className="detail-box">

              <h4>
                Account Type
              </h4>

              <p>
                {user.role === "admin"
                  ? "Administrator"
                  : user.role === "agent"
                  ? "Travel Agent"
                  : "Customer"}
              </p>

            </div>


            {/* CITY */}

            <div className="detail-box">

              <h4>
                City
              </h4>

              <p>
                {user.city ||
                  "Not added"}
              </p>

            </div>


            {/* STATE */}

            <div className="detail-box">

              <h4>
                State
              </h4>

              <p>
                {user.state ||
                  "Not added"}
              </p>

            </div>


            {/* AGENCY */}

            {user.role === "agent" && (

              <div className="detail-box">

                <h4>
                  Agency Name
                </h4>

                <p>
                  {user.agencyName ||
                    "Not added"}
                </p>

              </div>

            )}


            {/* GST */}

            {user.role === "agent" && (

              <div className="detail-box">

                <h4>
                  GST Number
                </h4>

                <p>
                  {user.gstNumber ||
                    "Not added"}
                </p>

              </div>

            )}


            {/* STATUS */}

            <div className="detail-box">

              <h4>
                Account Status
              </h4>

              <p>
                {user.isActive
                  ? "Active"
                  : "Disabled"}
              </p>

            </div>


          </div>


          {/* ==================================
                    ACCOUNT
          ================================== */}

          <div className="account-section">

            <h2>
              Account
            </h2>


            <div className="account-buttons">


              {/* MY BOOKINGS */}

              {user.role !== "admin" && (

                <button
                  className="booking-btn"
                  onClick={() =>
                    navigate(
                      "/my-bookings"
                    )
                  }
                >
                  My Bookings
                </button>

              )}


              {/* CHANGE PASSWORD */}

              <button
                className="password-btn"
                onClick={() =>
                  navigate(
                    "/change-password"
                  )
                }
              >
                Change Password
              </button>


              {/* LOGOUT */}

              <button
                className="logout-btn"
                onClick={
                  handleLogout
                }
              >
                Logout
              </button>


            </div>

          </div>

        </div>

      </div>

    </section>

  );

}


export default Profile;