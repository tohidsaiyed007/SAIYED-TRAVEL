import "./AdminProfile.css";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaEdit,
  FaLock,
  FaSignOutAlt,
  FaShieldAlt,
} from "react-icons/fa";


function AdminProfile() {

  const navigate =
    useNavigate();


  const [admin, setAdmin] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  // ==========================================
  // LOAD ADMIN PROFILE
  // ==========================================

  useEffect(() => {

    const loadAdminProfile =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );

          const role =
            localStorage.getItem(
              "userRole"
            );


          // Login check

          if (!token) {

            navigate("/login");

            return;
          }


          // Admin check

          if (role !== "admin") {

            navigate("/");

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

            setError(
              data.message ||
              "Unable to load admin profile."
            );

            return;
          }


          // ==================================
          // EXTRA ADMIN SECURITY
          // ==================================

          if (
            data.user.role !==
            "admin"
          ) {

            navigate("/");

            return;
          }


          setAdmin(
            data.user
          );


        } catch (error) {

          console.error(
            "Admin Profile Error:",
            error
          );

          setError(
            "Unable to connect to server."
          );

        } finally {

          setLoading(false);

        }

      };


    loadAdminProfile();

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
      <div className="admin-profile-loading">
        Loading Admin Profile...
      </div>
    );

  }


  // ==========================================
  // ERROR
  // ==========================================

  if (error) {

    return (
      <div className="admin-profile-error">
        {error}
      </div>
    );

  }


  if (!admin) {

    return null;

  }


  // ==========================================
  // FULL NAME
  // ==========================================

  const fullName =
    `${admin.firstName || ""} ${
      admin.lastName || ""
    }`.trim();


  // ==========================================
  // RETURN
  // ==========================================

  return (

    <div className="admin-profile-page">

      <div className="admin-profile-header">

        <div className="admin-profile-title">

          <FaShieldAlt />

          <div>

            <h1>
              Admin Profile
            </h1>

            <p>
              Manage your administrator
              account information.
            </p>

          </div>

        </div>

      </div>


      <div className="admin-profile-grid">


        {/* ==================================
                  LEFT PROFILE CARD
        ================================== */}

        <div className="admin-profile-card">

          <div className="admin-profile-avatar">

            <FaUserCircle />

          </div>


          <h2>

            {fullName ||
              "Administrator"}

          </h2>


          <p className="admin-email">

            {admin.email}

          </p>


          <div className="admin-role-badge">

            <FaShieldAlt />

            Administrator

          </div>


          <div className="admin-status">

            <span></span>

            {admin.isActive
              ? "Active Account"
              : "Disabled Account"}

          </div>


          <button
            type="button"
            className="admin-edit-btn"
            onClick={() =>
              navigate(
                "/dashboard/profile/edit"
              )
            }
          >

            <FaEdit />

            Edit Profile

          </button>

        </div>


        {/* ==================================
                  RIGHT DETAILS
        ================================== */}

        <div className="admin-profile-details">

          <h2>
            Personal Information
          </h2>


          <div className="admin-details-grid">


            {/* FIRST NAME */}

            <div className="admin-detail-box">

              <span>
                First Name
              </span>

              <strong>
                {admin.firstName ||
                  "Not added"}
              </strong>

            </div>


            {/* LAST NAME */}

            <div className="admin-detail-box">

              <span>
                Last Name
              </span>

              <strong>
                {admin.lastName ||
                  "Not added"}
              </strong>

            </div>


            {/* EMAIL */}

            <div className="admin-detail-box">

              <span>
                Email Address
              </span>

              <strong>
                {admin.email ||
                  "Not added"}
              </strong>

            </div>


            {/* PHONE */}

            <div className="admin-detail-box">

              <span>
                Phone Number
              </span>

              <strong>
                {admin.phone ||
                  "Not added"}
              </strong>

            </div>


            {/* CITY */}

            <div className="admin-detail-box">

              <span>
                City
              </span>

              <strong>
                {admin.city ||
                  "Not added"}
              </strong>

            </div>


            {/* STATE */}

            <div className="admin-detail-box">

              <span>
                State
              </span>

              <strong>
                {admin.state ||
                  "Not added"}
              </strong>

            </div>


            {/* AGENCY */}

            <div className="admin-detail-box">

              <span>
                Agency Name
              </span>

              <strong>
                {admin.agencyName ||
                  "Not added"}
              </strong>

            </div>


            {/* GST */}

            <div className="admin-detail-box">

              <span>
                GST Number
              </span>

              <strong>
                {admin.gstNumber ||
                  "Not added"}
              </strong>

            </div>


            {/* ROLE */}

            <div className="admin-detail-box">

              <span>
                Account Type
              </span>

              <strong>
                Administrator
              </strong>

            </div>


            {/* STATUS */}

            <div className="admin-detail-box">

              <span>
                Account Status
              </span>

              <strong>
                {admin.isActive
                  ? "Active"
                  : "Disabled"}
              </strong>

            </div>

          </div>


          {/* ==================================
                    ACCOUNT ACTIONS
          ================================== */}

          <div className="admin-account-actions">

            <button
              type="button"
              className="admin-password-btn"
              onClick={() =>
                navigate(
                  "/dashboard/profile/change-password"
                )
              }
            >

              <FaLock />

              Change Password

            </button>


            <button
              type="button"
              className="admin-logout-btn"
              onClick={
                handleLogout
              }
            >

              <FaSignOutAlt />

              Logout

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}


export default AdminProfile;