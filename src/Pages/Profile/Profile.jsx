import "./Profile.css";

import { useEffect, useState } from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  FaCamera,
  FaEdit,
} from "react-icons/fa";

function Profile() {

  const navigate = useNavigate();

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [profilePhoto, setProfilePhoto] =
    useState("");


  // ==========================================
  // LOAD LOGGED-IN USER
  // ==========================================

  useEffect(() => {

    const loadProfile = async () => {

      try {

        const token =
          localStorage.getItem("token");

        if (!token) {

          navigate("/login");

          return;
        }


        const response =
          await fetch(
            "https://saiyed-travels-backend-1.onrender.com/api/users/profile",
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
            "profilePhoto"
          );

          navigate("/login");

          return;
        }


        // REAL USER FROM MONGODB

        setUser(data.user);


        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );


        // ======================================
        // LOAD PROFILE PHOTO
        // ======================================

        const savedPhoto =
          localStorage.getItem(
            "profilePhoto"
          );

        if (savedPhoto) {

          setProfilePhoto(
            savedPhoto
          );

        }

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
  // ROLE
  // ==========================================

  const accountType =
    user.role === "admin"
      ? "Administrator"
      : user.role === "agent"
      ? "Travel Agent"
      : "Customer";


  // ==========================================
  // PROFILE
  // ==========================================

  return (

    <section className="profile-page">

      <div className="profile-container">


        {/* ==================================
                    LEFT CARD
        ================================== */}

        <div className="profile-card">


          {/* PROFILE PHOTO */}

          <div className="profile-image">

            {profilePhoto ? (

              <img
                src={profilePhoto}
                alt="Profile"
              />

            ) : (

              <div className="profile-photo-empty">

                {fullName
                  ? fullName
                      .charAt(0)
                      .toUpperCase()
                  : "U"}

              </div>

            )}

            {/* CAMERA ICON */}

            <button
              className="profile-photo-edit"
              onClick={() =>
                navigate(
                  "/edit-profile"
                )
              }
              title="Change Profile Photo"
            >

              <FaCamera />

            </button>

          </div>


          {/* NAME */}

          <h2>
            {fullName || "User"}
          </h2>


          {/* EMAIL */}

          <p className="profile-email">

            {user.email}

          </p>


          {/* ROLE */}

          <p className="profile-role">

            {accountType}

          </p>


          {/* EDIT */}

          <button
            className="edit-btn"
            onClick={() =>
              navigate(
                "/edit-profile"
              )
            }
          >

            <FaEdit />

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
                {accountType}
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

              <p
                className={
                  user.isActive
                    ? "status-active"
                    : "status-disabled"
                }
              >
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