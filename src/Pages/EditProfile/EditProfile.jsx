import "./EditProfile.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function EditProfile() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "Tohid Saiyed",
    email: "tohid@example.com",
    phone: "+91 9876543210",
    dob: "2005-01-10",
    gender: "Male",
    country: "India",
    state: "Rajasthan",
    city: "Jhunjhunu",
    address: "Jhunjhunu, Rajasthan"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Profile Updated Successfully!");
    navigate("/profile");
  };

  return (
    <section className="edit-profile-page">

      <div className="edit-profile-container">

        <div className="edit-profile-header">

          <h1>Edit Profile</h1>

          <p>
            Update your personal information.
          </p>

        </div>

        <div className="profile-photo">

          <img
            src="https://i.pravatar.cc/250?img=12"
            alt="Profile"
          />

          <button className="change-photo-btn">
            Change Photo
          </button>

        </div>

        <form className="edit-profile-form">

          <div className="form-grid">

            <div className="form-group">

              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Date of Birth</label>

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />

            </div>
                        <div className="form-group">

              <label>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

            </div>

            <div className="form-group">

              <label>Country</label>

              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>State</label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>City</label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="form-group full-width">

            <label>Address</label>

            <textarea
              name="address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
            />

          </div>

          <div className="form-buttons">

            <button
              type="button"
              className="save-btn"
              onClick={handleSave}
            >
              Save Changes
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </section>
  );
}

export default EditProfile;