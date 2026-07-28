import "./ChangePassword.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

function ChangePassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New Password and Confirm Password do not match.");
      return;
    }

    alert("Password Updated Successfully!");
    navigate("/profile");
  };

  return (
    <section className="change-password-page">
      <div className="change-password-container">

        <div className="change-password-header">
          <FaLock className="lock-icon" />
          <h1>Change Password</h1>
          <p>Keep your account secure by updating your password.</p>
        </div>

        <form className="change-password-form" onSubmit={handleSubmit}>

          <div className="password-group">
            <label>Current Password</label>

            <div className="password-input">

              <input
                type={showCurrent ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Enter current password"
                required
              />

              <span onClick={() => setShowCurrent(!showCurrent)}>
                {showCurrent ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>
          </div>

          <div className="password-group">
            <label>New Password</label>

            <div className="password-input">

              <input
                type={showNew ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                required
              />

              <span onClick={() => setShowNew(!showNew)}>
                {showNew ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>
          </div>

          <div className="password-group">
            <label>Confirm Password</label>

            <div className="password-input">

              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                required
              />

              <span onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>
          </div>

          <div className="change-password-buttons">

            <button
              type="submit"
              className="update-password-btn"
            >
              Update Password
            </button>

            <button
              type="button"
              className="cancel-password-btn"
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

export default ChangePassword;