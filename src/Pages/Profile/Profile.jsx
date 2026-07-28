

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

//         {/* Right */}

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
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <section className="profile-page">
      <div className="profile-container">

        {/* Left Card */}

        <div className="profile-card">
          <div className="profile-image">
            <img
              src="https://i.pravatar.cc/250?img=12"
              alt="Profile"
            />
          </div>

          <h2>Tohid Saiyed</h2>

          <p className="profile-email">
            tohid@example.com
          </p>

          <button
            className="edit-btn"
            onClick={() => navigate("/edit-profile")}
          >
            Edit Profile
          </button>
        </div>

        {/* Right Section */}

        <div className="profile-details">

          <h2>Personal Information</h2>

          <div className="details-grid">

            <div className="detail-box">
              <h4>Full Name</h4>
              <p>Tohid Saiyed</p>
            </div>

            <div className="detail-box">
              <h4>Email</h4>
              <p>tohid@example.com</p>
            </div>

            <div className="detail-box">
              <h4>Phone</h4>
              <p>+91 9876543210</p>
            </div>

            <div className="detail-box">
              <h4>Gender</h4>
              <p>Male</p>
            </div>

            <div className="detail-box">
              <h4>Date of Birth</h4>
              <p>10 Jan 2005</p>
            </div>

            <div className="detail-box">
              <h4>City</h4>
              <p>Jhunjhunu</p>
            </div>

            <div className="detail-box">
              <h4>State</h4>
              <p>Rajasthan</p>
            </div>

            <div className="detail-box">
              <h4>Country</h4>
              <p>India</p>
            </div>

          </div>

          <div className="account-section">

            <h2>Account</h2>

            <div className="account-buttons">

              <button
                className="booking-btn"
                onClick={() => navigate("/my-bookings")}
              >
                My Bookings
              </button>

              <button
                className="password-btn"
                onClick={() => navigate("/change-password")}
              >
                Change Password
              </button>

              <button
                className="logout-btn"
                onClick={handleLogout}
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