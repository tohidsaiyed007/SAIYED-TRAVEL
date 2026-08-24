// import "./EditProfile.css";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// function EditProfile() {

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "Tohid Saiyed",
//     email: "tohid@example.com",
//     phone: "+91 9876543210",
//     dob: "2005-01-10",
//     gender: "Male",
//     country: "India",
//     state: "Rajasthan",
//     city: "Jhunjhunu",
//     address: "Jhunjhunu, Rajasthan"
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSave = () => {
//     alert("Profile Updated Successfully!");
//     navigate("/profile");
//   };

//   return (
//     <section className="edit-profile-page">

//       <div className="edit-profile-container">

//         <div className="edit-profile-header">

//           <h1>Edit Profile</h1>

//           <p>
//             Update your personal information.
//           </p>

//         </div>

//         <div className="profile-photo">

//           <img
//             src="https://i.pravatar.cc/250?img=12"
//             alt="Profile"
//           />

//           <button className="change-photo-btn">
//             Change Photo
//           </button>

//         </div>

//         <form className="edit-profile-form">

//           <div className="form-grid">

//             <div className="form-group">

//               <label>Full Name</label>

//               <input
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//               />

//             </div>

//             <div className="form-group">

//               <label>Email</label>

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />

//             </div>

//             <div className="form-group">

//               <label>Phone Number</label>

//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />

//             </div>

//             <div className="form-group">

//               <label>Date of Birth</label>

//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//               />

//             </div>
//                         <div className="form-group">

//               <label>Gender</label>

//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//               >
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>Other</option>
//               </select>

//             </div>

//             <div className="form-group">

//               <label>Country</label>

//               <input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//               />

//             </div>

//             <div className="form-group">

//               <label>State</label>

//               <input
//                 type="text"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//               />

//             </div>

//             <div className="form-group">

//               <label>City</label>

//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//               />

//             </div>

//           </div>

//           <div className="form-group full-width">

//             <label>Address</label>

//             <textarea
//               name="address"
//               rows="4"
//               value={formData.address}
//               onChange={handleChange}
//             />

//           </div>

//           <div className="form-buttons">

//             <button
//               type="button"
//               className="save-btn"
//               onClick={handleSave}
//             >
//               Save Changes
//             </button>

//             <button
//               type="button"
//               className="cancel-btn"
//               onClick={() => navigate("/profile")}
//             >
//               Cancel
//             </button>

//           </div>

//         </form>

//       </div>

//     </section>
//   );
// }

// export default EditProfile;


import "./EditProfile.css";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";


function EditProfile() {

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
    });


  // ==========================================
  // LOAD PROFILE
  // ==========================================

  useEffect(() => {

    const loadProfile = async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );


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


        const user =
          data.user;


        setFormData({

          firstName:
            user.firstName || "",

          lastName:
            user.lastName || "",

          email:
            user.email || "",

          phone:
            user.phone || "",

          agencyName:
            user.agencyName || "",

          city:
            user.city || "",

          state:
            user.state || "",

          gstNumber:
            user.gstNumber || "",

        });


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
  // HANDLE CHANGE
  // ==========================================

  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });

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
        localStorage.getItem(
          "token"
        );


      if (!token) {

        navigate("/login");

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
      // SAVE UPDATED USER LOCALLY
      // ======================================

      localStorage.setItem(
        "user",
        JSON.stringify(
          data.user
        )
      );


      setSuccess(
        "Profile updated successfully."
      );


      // ======================================
      // GO BACK TO PROFILE
      // ======================================

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


        {/* ==================================
                  HEADER
        ================================== */}

        <div className="edit-profile-header">

          <h1>
            Edit Profile
          </h1>

          <p>
            Update your personal
            information.
          </p>

        </div>


        {/* ==================================
                  ERROR
        ================================== */}

        {error && (

          <div className="profile-error">

            {error}

          </div>

        )}


        {/* ==================================
                  SUCCESS
        ================================== */}

        {success && (

          <div className="profile-success">

            {success}

          </div>

        )}


        {/* ==================================
                  PROFILE PHOTO
        ================================== */}

        <div className="profile-photo">

          <img
            src="https://i.pravatar.cc/250?img=12"
            alt="Profile"
          />

        </div>


        {/* ==================================
                  FORM
        ================================== */}

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

            <div className="form-group">

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

            <div className="form-group">

              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
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

            <div className="form-group">

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


            {/* CITY */}

            <div className="form-group">

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

            <div className="form-group">

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


            {/* =================================
                      AGENT DETAILS
            ================================= */}

            <div className="form-group">

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
                placeholder="Agency name"
              />

            </div>


            <div className="form-group">

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
                placeholder="GST number"
              />

            </div>

          </div>


          {/* ==================================
                    BUTTONS
          ================================== */}

          <div className="form-buttons">

            <button
              type="submit"
              className="save-btn"
              disabled={saving}
            >

              {saving
                ? "Saving..."
                : "Save Changes"}

            </button>


            <button
              type="button"
              className="cancel-btn"
              onClick={() =>
                navigate("/profile")
              }
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