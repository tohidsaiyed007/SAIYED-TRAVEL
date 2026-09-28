import "./EditProfile.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  FaCamera,
  FaUser,
  FaArrowLeft,
  FaSave,
  FaTimes,
} from "react-icons/fa";

function EditProfile() {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [profilePhoto, setProfilePhoto] =
    useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agencyName: "",
    city: "",
    state: "",
    gstNumber: "",
  });

  // ==========================================
  // LOAD PROFILE
  // ==========================================

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError("");

        const token =
          localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          "https://saiyed-travels-backend-1.onrender.com/api/users/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("userRole");

          navigate("/login");
          return;
        }

        const user = data.user || {};

        setFormData({
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          phone: user.phone || "",
          agencyName: user.agencyName || "",
          city: user.city || "",
          state: user.state || "",
          gstNumber: user.gstNumber || "",
        });

        // ======================================
        // LOAD SAVED PHOTO
        // ======================================

        const savedPhoto =
          localStorage.getItem(
            "profilePhoto"
          );

        if (savedPhoto) {
          setProfilePhoto(savedPhoto);
        }
      } catch (error) {
        console.error(
          "Load Edit Profile Error:",
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ==========================================
  // PHOTO UPLOAD
  // ==========================================

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Only image
    if (!file.type.startsWith("image/")) {
      setError(
        "Please select a valid image."
      );
      return;
    }

    // 5 MB limit
    if (file.size > 5 * 1024 * 1024) {
      setError(
        "Image size must be less than 5 MB."
      );
      return;
    }

    setError("");

    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData =
        reader.result;

      setProfilePhoto(imageData);

      localStorage.setItem(
        "profilePhoto",
        imageData
      );
    };

    reader.readAsDataURL(file);
  };

  // ==========================================
  // REMOVE PHOTO
  // ==========================================

  const handleRemovePhoto = () => {
    setProfilePhoto("");

    localStorage.removeItem(
      "profilePhoto"
    );

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // ==========================================
  // SAVE PROFILE
  // ==========================================

  const handleSave = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const token =
        localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch(
        "https://saiyed-travels-backend-1.onrender.com/api/users/profile",
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
      // SAVE UPDATED USER
      // ======================================

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setSuccess(
        "Profile updated successfully."
      );

      setTimeout(() => {
        navigate("/profile");
      }, 1000);

    } catch (error) {
      console.error(
        "Update Profile Error:",
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
      <section className="edit-profile-page">

        <div className="edit-profile-container">

          <div className="profile-loading">
            <div className="loading-spinner"></div>
            Loading Profile...
          </div>

        </div>

      </section>
    );
  }

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <section className="edit-profile-page">

      <div className="edit-profile-container">

        {/* ======================================
            HEADER
        ====================================== */}

        <div className="edit-profile-header">

          <button
            type="button"
            className="back-profile-btn"
            onClick={() =>
              navigate("/profile")
            }
          >
            <FaArrowLeft />
          </button>

          <div>
            <h1>
              Edit Profile
            </h1>

            <p>
              Update your personal
              information.
            </p>
          </div>

        </div>


        {/* ======================================
            ERROR
        ====================================== */}

        {error && (
          <div className="profile-error">
            {error}
          </div>
        )}


        {/* ======================================
            SUCCESS
        ====================================== */}

        {success && (
          <div className="profile-success">
            {success}
          </div>
        )}


        {/* ======================================
            PROFILE PHOTO
        ====================================== */}

        <div className="profile-photo-section">

          <div className="profile-photo-wrapper">

            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile"
                className="profile-photo-img"
              />
            ) : (
              <div className="profile-photo-placeholder">
                <FaUser />
              </div>
            )}

            <button
              type="button"
              className="photo-camera-btn"
              onClick={() =>
                fileInputRef.current?.click()
              }
              title="Change photo"
            >
              <FaCamera />
            </button>

          </div>

          <div className="photo-actions">

            <h3>
              Profile Photo
            </h3>

            <p>
              JPG, PNG or WEBP. Maximum 5 MB.
            </p>

            <div className="photo-buttons">

              <button
                type="button"
                className="change-photo-btn"
                onClick={() =>
                  fileInputRef.current?.click()
                }
              >
                <FaCamera />
                Change Photo
              </button>

              {profilePhoto && (
                <button
                  type="button"
                  className="remove-photo-btn"
                  onClick={handleRemovePhoto}
                >
                  <FaTimes />
                  Remove
                </button>
              )}

            </div>

          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={handlePhotoChange}
            hidden
          />

        </div>


        {/* ======================================
            FORM
        ====================================== */}

        <form
          className="edit-profile-form"
          onSubmit={handleSave}
        >

          <div className="form-grid">

            {/* FIRST NAME */}

            <div className="form-group">

              <label>
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                required
              />

            </div>


            {/* LAST NAME */}

            <div className="form-group">

              <label>
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
              />

              <small>
                Email cannot be changed.
              </small>

            </div>


            {/* PHONE */}

            <div className="form-group">

              <label>
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />

            </div>


            {/* CITY */}

            <div className="form-group">

              <label>
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
              />

            </div>


            {/* STATE */}

            <div className="form-group">

              <label>
                State
              </label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
              />

            </div>


            {/* AGENCY */}

            <div className="form-group">

              <label>
                Agency Name
              </label>

              <input
                type="text"
                name="agencyName"
                value={formData.agencyName}
                onChange={handleChange}
                placeholder="Agency name"
              />

            </div>


            {/* GST */}

            <div className="form-group">

              <label>
                GST Number
              </label>

              <input
                type="text"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
                placeholder="GST number"
              />

            </div>

          </div>


          {/* ======================================
              BUTTONS
          ====================================== */}

          <div className="form-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={() =>
                navigate("/profile")
              }
              disabled={saving}
            >
              <FaTimes />
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
              disabled={saving}
            >
              <FaSave />

              {saving
                ? "Saving..."
                : "Save Changes"}
            </button>

          </div>

        </form>

      </div>

    </section>
  );
}

export default EditProfile;