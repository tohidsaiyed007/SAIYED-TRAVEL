import "./AdminEditProfile.css";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  FaUserCircle,
  FaSave,
  FaTimes,
  FaCamera,
} from "react-icons/fa";


function AdminEditProfile() {

  const navigate =
    useNavigate();


  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");


  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      agencyName: "",
      city: "",
      state: "",
      gstNumber: "",
      profileImage: "",
    });


  // ==========================================
  // LOAD ADMIN PROFILE
  // ==========================================

  useEffect(() => {

    const loadProfile =
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


          if (!token) {

            navigate("/login");

            return;
          }


          if (role !== "admin") {

            navigate("/");

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

            setError(
              data.message ||
              "Unable to load profile."
            );

            return;
          }


          if (
            data.user.role !==
            "admin"
          ) {

            navigate("/");

            return;
          }


          setFormData({

            firstName:
              data.user.firstName ||
              "",

            lastName:
              data.user.lastName ||
              "",

            email:
              data.user.email ||
              "",

            phone:
              data.user.phone ||
              "",

            agencyName:
              data.user.agencyName ||
              "",

            city:
              data.user.city ||
              "",

            state:
              data.user.state ||
              "",

            gstNumber:
              data.user.gstNumber ||
              "",

            profileImage:
              data.user.profileImage ||
              "",

          });


        } catch (error) {

          console.error(
            "Admin Edit Profile Error:",
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
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target;


    setFormData({
      ...formData,
      [name]: value,
    });

  };


  // ==========================================
  // PROFILE IMAGE
  // ==========================================

  const handleImageChange = (e) => {

    const file =
      e.target.files?.[0];


    if (!file) {
      return;
    }


    // Maximum 2MB

    if (
      file.size >
      2 * 1024 * 1024
    ) {

      setError(
        "Profile image must be less than 2MB."
      );

      return;
    }


    if (
      !file.type.startsWith(
        "image/"
      )
    ) {

      setError(
        "Please select a valid image."
      );

      return;
    }


    setError("");


    const reader =
      new FileReader();


    reader.onload = () => {

      setFormData(
        (previous) => ({
          ...previous,

          profileImage:
            reader.result,
        })
      );

    };


    reader.readAsDataURL(file);

  };


  // ==========================================
  // SAVE PROFILE
  // ==========================================

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    setError("");

    setSuccess("");

    setSaving(true);


    try {

      const token =
        localStorage.getItem(
          "token"
        );


      if (!token) {

        navigate("/login");

        return;
      }


      if (
        !formData.firstName.trim()
      ) {

        setError(
          "First name is required."
        );

        return;
      }


      const response =
        await fetch(
          "http://localhost:5000/api/users/profile",
          {
            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,
            },

            body: JSON.stringify({

              firstName:
                formData.firstName,

              lastName:
                formData.lastName,

              phone:
                formData.phone,

              agencyName:
                formData.agencyName,

              city:
                formData.city,

              state:
                formData.state,

              gstNumber:
                formData.gstNumber,

              profileImage:
                formData.profileImage,

            }),

          }
        );


      const data =
        await response.json();


      if (!response.ok) {

        setError(
          data.message ||
          "Unable to update profile."
        );

        return;
      }


      // ======================================
      // UPDATE LOCAL USER
      // ======================================

      localStorage.setItem(
        "user",
        JSON.stringify(
          data.user
        )
      );


      setSuccess(
        "Admin profile updated successfully."
      );


      setTimeout(() => {

        navigate(
          "/dashboard/profile"
        );

      }, 1000);


    } catch (error) {

      console.error(
        "Save Admin Profile Error:",
        error
      );

      setError(
        "Unable to connect to server."
      );

    } finally {

      setSaving(false);

    }

  };


  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {

    return (

      <div className="admin-edit-loading">

        Loading Profile...

      </div>

    );

  }


  // ==========================================
  // PAGE
  // ==========================================

  return (

    <div className="admin-edit-profile-page">


      {/* ======================================
                    HEADER
      ====================================== */}

      <div className="admin-edit-header">

        <div>

          <h1>
            Edit Admin Profile
          </h1>

          <p>
            Update your administrator
            account information.
          </p>

        </div>

      </div>


      {/* ======================================
                    ERROR
      ====================================== */}

      {error && (

        <div className="admin-edit-error">

          {error}

        </div>

      )}


      {/* ======================================
                    SUCCESS
      ====================================== */}

      {success && (

        <div className="admin-edit-success">

          {success}

        </div>

      )}


      <form
        className="admin-edit-form"
        onSubmit={handleSubmit}
      >


        {/* ====================================
                  PROFILE IMAGE
        ==================================== */}

        <div className="admin-edit-photo-section">

          <div className="admin-edit-photo">

            {formData.profileImage ? (

              <img
                src={
                  formData.profileImage
                }
                alt="Admin Profile"
              />

            ) : (

              <FaUserCircle />

            )}

          </div>


          <div className="admin-photo-content">

            <h3>
              Profile Photo
            </h3>

            <p>
              JPG, PNG or WEBP. Maximum 2MB.
            </p>


            <label
              htmlFor="admin-profile-image"
              className="admin-photo-btn"
            >

              <FaCamera />

              Change Photo

            </label>


            <input
              id="admin-profile-image"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={
                handleImageChange
              }
              hidden
            />

          </div>

        </div>


        {/* ====================================
                  FORM GRID
        ==================================== */}

        <div className="admin-edit-grid">


          {/* FIRST NAME */}

          <div className="admin-edit-group">

            <label>
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={
                formData.firstName
              }
              onChange={
                handleChange
              }
              placeholder="Enter first name"
              required
            />

          </div>


          {/* LAST NAME */}

          <div className="admin-edit-group">

            <label>
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={
                formData.lastName
              }
              onChange={
                handleChange
              }
              placeholder="Enter last name"
            />

          </div>


          {/* EMAIL */}

          <div className="admin-edit-group">

            <label>
              Email
            </label>

            <input
              type="email"
              value={
                formData.email
              }
              disabled
            />

            <small>
              Email cannot be changed.
            </small>

          </div>


          {/* PHONE */}

          <div className="admin-edit-group">

            <label>
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={
                formData.phone
              }
              onChange={
                handleChange
              }
              placeholder="Enter phone number"
            />

          </div>


          {/* AGENCY */}

          <div className="admin-edit-group">

            <label>
              Agency Name
            </label>

            <input
              type="text"
              name="agencyName"
              value={
                formData.agencyName
              }
              onChange={
                handleChange
              }
              placeholder="Enter agency name"
            />

          </div>


          {/* GST */}

          <div className="admin-edit-group">

            <label>
              GST Number
            </label>

            <input
              type="text"
              name="gstNumber"
              value={
                formData.gstNumber
              }
              onChange={
                handleChange
              }
              placeholder="Enter GST number"
            />

          </div>


          {/* CITY */}

          <div className="admin-edit-group">

            <label>
              City
            </label>

            <input
              type="text"
              name="city"
              value={
                formData.city
              }
              onChange={
                handleChange
              }
              placeholder="Enter city"
            />

          </div>


          {/* STATE */}

          <div className="admin-edit-group">

            <label>
              State
            </label>

            <input
              type="text"
              name="state"
              value={
                formData.state
              }
              onChange={
                handleChange
              }
              placeholder="Enter state"
            />

          </div>

        </div>


        {/* ====================================
                  BUTTONS
        ==================================== */}

        <div className="admin-edit-buttons">

          <button
            type="submit"
            className="admin-save-btn"
            disabled={saving}
          >

            <FaSave />

            {saving
              ? "Saving..."
              : "Save Changes"}

          </button>


          <button
            type="button"
            className="admin-cancel-btn"
            onClick={() =>
              navigate(
                "/dashboard/profile"
              )
            }
          >

            <FaTimes />

            Cancel

          </button>

        </div>

      </form>

    </div>

  );

}


export default AdminEditProfile;