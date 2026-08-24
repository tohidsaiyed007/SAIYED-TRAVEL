// import { useEffect, useState } from "react";
// import {
//   FaEdit,
//   FaTrash,
//   FaEye,
//   FaUserPlus,
//   FaTimes,
// } from "react-icons/fa";

// import "./Users.css";


// function Users() {

//   // ==========================================
//   // STATES
//   // ==========================================

//   const [users, setUsers] = useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState("");

//   const [selectedUser, setSelectedUser] =
//     useState(null);

//   const [showViewModal, setShowViewModal] =
//     useState(false);

//   const [showEditModal, setShowEditModal] =
//     useState(false);

//   const [editData, setEditData] =
//     useState({});


//   // ==========================================
//   // GET TOKEN
//   // ==========================================

//   const getToken = () => {

//     return localStorage.getItem("token");

//   };


//   // ==========================================
//   // FETCH USERS
//   // ==========================================

//   const fetchUsers = async () => {

//     try {

//       setLoading(true);

//       setError("");

//       const token = getToken();


//       if (!token) {

//         setError(
//           "Admin login required."
//         );

//         setLoading(false);

//         return;

//       }


//       const response = await fetch(
//         "http://localhost:5000/api/users",
//         {
//           method: "GET",

//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );


//       const data =
//         await response.json();


//       if (!response.ok) {

//         setError(
//           data.message ||
//           "Unable to fetch users."
//         );

//         setLoading(false);

//         return;

//       }


//       setUsers(
//         data.users || []
//       );


//     } catch (error) {

//       console.error(
//         "Fetch Users Error:",
//         error
//       );

//       setError(
//         "Unable to connect to server."
//       );

//     } finally {

//       setLoading(false);

//     }

//   };


//   // ==========================================
//   // LOAD USERS
//   // ==========================================

//   useEffect(() => {

//     fetchUsers();

//   }, []);


//   // ==========================================
//   // VIEW USER
//   // ==========================================

//   const handleView = (user) => {

//     setSelectedUser(user);

//     setShowViewModal(true);

//   };


//   // ==========================================
//   // OPEN EDIT
//   // ==========================================

//   const handleEdit = (user) => {

//     setSelectedUser(user);

//     setEditData({

//       firstName:
//         user.firstName || "",

//       lastName:
//         user.lastName || "",

//       email:
//         user.email || "",

//       phone:
//         user.phone || "",

//       role:
//         user.role || "customer",

//       agencyName:
//         user.agencyName || "",

//       city:
//         user.city || "",

//       state:
//         user.state || "",

//       gstNumber:
//         user.gstNumber || "",

//       isActive:
//         user.isActive !== false,

//     });

//     setShowEditModal(true);

//   };


//   // ==========================================
//   // EDIT INPUT
//   // ==========================================

//   const handleEditChange = (e) => {

//     const {
//       name,
//       value,
//       type,
//       checked,
//     } = e.target;


//     setEditData({

//       ...editData,

//       [name]:
//         type === "checkbox"
//           ? checked
//           : value,

//     });

//   };


//   // ==========================================
//   // UPDATE USER
//   // ==========================================

//   const handleUpdate = async (e) => {

//     e.preventDefault();

//     try {

//       const token = getToken();


//       const response = await fetch(

//         `http://localhost:5000/api/users/${selectedUser._id}`,

//         {
//           method: "PUT",

//           headers: {

//             "Content-Type":
//               "application/json",

//             Authorization:
//               `Bearer ${token}`,

//           },

//           body: JSON.stringify(
//             editData
//           ),

//         }

//       );


//       const data =
//         await response.json();


//       if (!response.ok) {

//         alert(
//           data.message ||
//           "Unable to update user."
//         );

//         return;

//       }


//       // Update table

//       setUsers((prevUsers) =>

//         prevUsers.map((user) =>

//           user._id === selectedUser._id
//             ? data.user
//             : user

//         )

//       );


//       setShowEditModal(false);

//       setSelectedUser(null);


//       alert(
//         "User updated successfully."
//       );


//     } catch (error) {

//       console.error(
//         "Update User Error:",
//         error
//       );

//       alert(
//         "Unable to connect to server."
//       );

//     }

//   };


//   // ==========================================
//   // DELETE USER
//   // ==========================================

//   const handleDelete = async (user) => {

//     const confirmDelete =
//       window.confirm(

//         `Delete ${user.firstName || "this user"}?`

//       );


//     if (!confirmDelete) {
//       return;
//     }


//     try {

//       const token = getToken();


//       const response = await fetch(

//         `http://localhost:5000/api/users/${user._id}`,

//         {
//           method: "DELETE",

//           headers: {

//             Authorization:
//               `Bearer ${token}`,

//           },

//         }

//       );


//       const data =
//         await response.json();


//       if (!response.ok) {

//         alert(
//           data.message ||
//           "Unable to delete user."
//         );

//         return;

//       }


//       setUsers((prevUsers) =>

//         prevUsers.filter(
//           (item) =>
//             item._id !== user._id
//         )

//       );


//       alert(
//         "User deleted successfully."
//       );


//     } catch (error) {

//       console.error(
//         "Delete User Error:",
//         error
//       );

//       alert(
//         "Unable to connect to server."
//       );

//     }

//   };


//   // ==========================================
//   // ROLE CLASS
//   // ==========================================

//   const getRoleClass = (role) => {

//     if (role === "admin") {
//       return "role-admin";
//     }

//     if (role === "agent") {
//       return "role-agent";
//     }

//     return "role-customer";

//   };


//   // ==========================================
//   // STATUS CLASS
//   // ==========================================

//   const getStatusClass = (isActive) => {

//     return isActive
//       ? "status-active"
//       : "status-inactive";

//   };


//   return (

//     <section className="users-page">


//       {/* ======================================
//                     HEADER
//       ====================================== */}

//       <div className="users-header">

//         <div>

//           <h2>
//             User Management
//           </h2>

//           <p>
//             Manage customers, travel agents
//             and administrators
//           </p>

//         </div>


//         <div className="users-count">

//           <FaUserPlus />

//           <span>
//             {users.length} Users
//           </span>

//         </div>

//       </div>


//       {/* ======================================
//                     ERROR
//       ====================================== */}

//       {error && (

//         <div className="users-error">

//           {error}

//         </div>

//       )}


//       {/* ======================================
//                     LOADING
//       ====================================== */}

//       {loading ? (

//         <div className="users-loading">

//           Loading users...

//         </div>

//       ) : (

//         <div className="users-card">


//           {/* ==================================
//                     TABLE
//           ================================== */}

//           <div className="users-table-responsive">

//             <table className="users-table">

//               <thead>

//                 <tr>

//                   <th>
//                     #
//                   </th>

//                   <th>
//                     User
//                   </th>

//                   <th>
//                     Email
//                   </th>

//                   <th>
//                     Phone
//                   </th>

//                   <th>
//                     Role
//                   </th>

//                   <th>
//                     Status
//                   </th>

//                   <th>
//                     Action
//                   </th>

//                 </tr>

//               </thead>


//               <tbody>

//                 {users.length === 0 ? (

//                   <tr>

//                     <td
//                       colSpan="7"
//                       className="empty-users"
//                     >
//                       No users found.
//                     </td>

//                   </tr>

//                 ) : (

//                   users.map(
//                     (user, index) => (

//                       <tr
//                         key={user._id}
//                       >

//                         <td>
//                           {index + 1}
//                         </td>


//                         <td>

//                           <div className="user-name">

//                             <div className="user-avatar">

//                               {(
//                                 user.firstName ||
//                                 user.email ||
//                                 "U"
//                               )
//                                 .charAt(0)
//                                 .toUpperCase()}

//                             </div>

//                             <div>

//                               <strong>

//                                 {user.firstName ||
//                                   "User"}{" "}

//                                 {user.lastName ||
//                                   ""}

//                               </strong>

//                             </div>

//                           </div>

//                         </td>


//                         <td>

//                           {user.email}

//                         </td>


//                         <td>

//                           {user.phone ||
//                             "—"}

//                         </td>


//                         <td>

//                           <span
//                             className={`role-badge ${getRoleClass(
//                               user.role
//                             )}`}
//                           >

//                             {user.role}

//                           </span>

//                         </td>


//                         <td>

//                           <span
//                             className={`status-badge ${getStatusClass(
//                               user.isActive
//                             )}`}
//                           >

//                             {user.isActive
//                               ? "Active"
//                               : "Inactive"}

//                           </span>

//                         </td>


//                         <td>

//                           <div className="user-actions">


//                             <button
//                               className="view-btn"
//                               title="View User"
//                               onClick={() =>
//                                 handleView(
//                                   user
//                                 )
//                               }
//                             >

//                               <FaEye />

//                             </button>


//                             <button
//                               className="edit-btn"
//                               title="Edit User"
//                               onClick={() =>
//                                 handleEdit(
//                                   user
//                                 )
//                               }
//                             >

//                               <FaEdit />

//                             </button>


//                             <button
//                               className="delete-btn"
//                               title="Delete User"
//                               onClick={() =>
//                                 handleDelete(
//                                   user
//                                 )
//                               }
//                             >

//                               <FaTrash />

//                             </button>


//                           </div>

//                         </td>

//                       </tr>

//                     )
//                   )

//                 )}

//               </tbody>

//             </table>

//           </div>

//         </div>

//       )}


//       {/* ======================================
//                     VIEW MODAL
//       ====================================== */}

//       {showViewModal &&
//         selectedUser && (

//           <div className="user-modal-overlay">

//             <div className="user-modal">


//               <div className="user-modal-header">

//                 <h3>
//                   User Details
//                 </h3>

//                 <button
//                   onClick={() => {

//                     setShowViewModal(false);

//                     setSelectedUser(null);

//                   }}
//                 >

//                   <FaTimes />

//                 </button>

//               </div>


//               <div className="user-details">


//                 <div className="detail-item">

//                   <span>
//                     Name
//                   </span>

//                   <strong>

//                     {selectedUser.firstName ||
//                       "—"}{" "}

//                     {selectedUser.lastName ||
//                       ""}

//                   </strong>

//                 </div>


//                 <div className="detail-item">

//                   <span>
//                     Email
//                   </span>

//                   <strong>
//                     {selectedUser.email}
//                   </strong>

//                 </div>


//                 <div className="detail-item">

//                   <span>
//                     Phone
//                   </span>

//                   <strong>
//                     {selectedUser.phone ||
//                       "—"}
//                   </strong>

//                 </div>


//                 <div className="detail-item">

//                   <span>
//                     Role
//                   </span>

//                   <strong>
//                     {selectedUser.role}
//                   </strong>

//                 </div>


//                 {selectedUser.role ===
//                   "agent" && (

//                   <>

//                     <div className="detail-item">

//                       <span>
//                         Agency
//                       </span>

//                       <strong>
//                         {selectedUser.agencyName ||
//                           "—"}
//                       </strong>

//                     </div>


//                     <div className="detail-item">

//                       <span>
//                         City
//                       </span>

//                       <strong>
//                         {selectedUser.city ||
//                           "—"}
//                       </strong>

//                     </div>


//                     <div className="detail-item">

//                       <span>
//                         State
//                       </span>

//                       <strong>
//                         {selectedUser.state ||
//                           "—"}
//                       </strong>

//                     </div>


//                     <div className="detail-item">

//                       <span>
//                         GST
//                       </span>

//                       <strong>
//                         {selectedUser.gstNumber ||
//                           "—"}
//                       </strong>

//                     </div>

//                   </>

//                 )}


//                 <div className="detail-item">

//                   <span>
//                     Status
//                   </span>

//                   <strong>

//                     {selectedUser.isActive
//                       ? "Active"
//                       : "Inactive"}

//                   </strong>

//                 </div>


//               </div>

//             </div>

//           </div>

//         )}


//       {/* ======================================
//                     EDIT MODAL
//       ====================================== */}

//       {showEditModal &&
//         selectedUser && (

//           <div className="user-modal-overlay">

//             <div className="user-modal edit-user-modal">


//               <div className="user-modal-header">

//                 <h3>
//                   Edit User
//                 </h3>

//                 <button
//                   type="button"
//                   onClick={() => {

//                     setShowEditModal(false);

//                     setSelectedUser(null);

//                   }}
//                 >

//                   <FaTimes />

//                 </button>

//               </div>


//               <form
//                 className="edit-user-form"
//                 onSubmit={handleUpdate}
//               >


//                 <div className="edit-form-row">


//                   <div>

//                     <label>
//                       First Name
//                     </label>

//                     <input
//                       type="text"
//                       name="firstName"
//                       value={
//                         editData.firstName
//                       }
//                       onChange={
//                         handleEditChange
//                       }
//                       required
//                     />

//                   </div>


//                   <div>

//                     <label>
//                       Last Name
//                     </label>

//                     <input
//                       type="text"
//                       name="lastName"
//                       value={
//                         editData.lastName
//                       }
//                       onChange={
//                         handleEditChange
//                       }
//                     />

//                   </div>


//                 </div>


//                 <label>
//                   Email
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   value={
//                     editData.email
//                   }
//                   onChange={
//                     handleEditChange
//                   }
//                   required
//                 />


//                 <label>
//                   Phone
//                 </label>

//                 <input
//                   type="text"
//                   name="phone"
//                   value={
//                     editData.phone
//                   }
//                   onChange={
//                     handleEditChange
//                   }
//                 />


//                 <label>
//                   Role
//                 </label>

//                 <select
//                   name="role"
//                   value={
//                     editData.role
//                   }
//                   onChange={
//                     handleEditChange
//                   }
//                 >

//                   <option value="customer">
//                     Customer
//                   </option>

//                   <option value="agent">
//                     Agent
//                   </option>

//                   <option value="admin">
//                     Admin
//                   </option>

//                 </select>


//                 <label>
//                   Status
//                 </label>

//                 <label className="active-toggle">

//                   <input
//                     type="checkbox"
//                     name="isActive"
//                     checked={
//                       editData.isActive
//                     }
//                     onChange={
//                       handleEditChange
//                     }
//                   />

//                   Account Active

//                 </label>


//                 <div className="edit-modal-actions">

//                   <button
//                     type="button"
//                     className="cancel-btn"
//                     onClick={() => {

//                       setShowEditModal(
//                         false
//                       );

//                       setSelectedUser(
//                         null
//                       );

//                     }}
//                   >

//                     Cancel

//                   </button>


//                   <button
//                     type="submit"
//                     className="save-btn"
//                   >

//                     Save Changes

//                   </button>

//                 </div>


//               </form>

//             </div>

//           </div>

//         )}

//     </section>

//   );

// }


// export default Users;



import "./Users.css";

import {
  useEffect,
  useState,
} from "react";

import {
  useSearchParams,
} from "react-router-dom";

import {
  FaEdit,
  FaTrash,
  FaEye,
  FaUserPlus,
  FaTimes,
} from "react-icons/fa";


function Users() {


  // ==========================================
  // STATES
  // ==========================================

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  const [selectedUser, setSelectedUser] =
    useState(null);


  const [showViewModal, setShowViewModal] =
    useState(false);


  const [showEditModal, setShowEditModal] =
    useState(false);


  const [editData, setEditData] =
    useState({});


  // ==========================================
  // URL SEARCH
  // ==========================================

  const [searchParams] =
    useSearchParams();


  const searchQuery =
    (
      searchParams.get("search") || ""
    )
      .toLowerCase()
      .trim();


  // ==========================================
  // TOKEN
  // ==========================================

  const getToken = () => {

    return localStorage.getItem(
      "token"
    );

  };


  // ==========================================
  // FETCH USERS
  // ==========================================

  const fetchUsers = async () => {

    try {

      setLoading(true);

      setError("");


      const token = getToken();


      if (!token) {

        setError(
          "Admin login required."
        );

        return;

      }


      const response = await fetch(
        "http://localhost:5000/api/users",
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
          "Unable to fetch users."
        );

        return;

      }


      /*
        Backend agar directly array
        bheje to bhi support karega.
      */

      const userList =
        Array.isArray(data)
          ? data
          : data.users || [];


      setUsers(userList);


    } catch (error) {

      console.error(
        "Fetch Users Error:",
        error
      );


      setError(
        "Unable to connect to server."
      );


    } finally {

      setLoading(false);

    }

  };


  // ==========================================
  // LOAD USERS
  // ==========================================

  useEffect(() => {

    fetchUsers();

  }, []);


  // ==========================================
  // FILTER USERS
  // ==========================================

  const filteredUsers =
    users.filter((user) => {


      // No search
      if (!searchQuery) {

        return true;

      }


      const firstName =
        (
          user.firstName || ""
        ).toLowerCase();


      const lastName =
        (
          user.lastName || ""
        ).toLowerCase();


      const fullName =
        `${firstName} ${lastName}`;


      const email =
        (
          user.email || ""
        ).toLowerCase();


      const phone =
        (
          user.phone || ""
        ).toLowerCase();


      const role =
        (
          user.role || ""
        ).toLowerCase();


      const agencyName =
        (
          user.agencyName || ""
        ).toLowerCase();


      const city =
        (
          user.city || ""
        ).toLowerCase();


      return (

        fullName.includes(
          searchQuery
        ) ||

        firstName.includes(
          searchQuery
        ) ||

        lastName.includes(
          searchQuery
        ) ||

        email.includes(
          searchQuery
        ) ||

        phone.includes(
          searchQuery
        ) ||

        role.includes(
          searchQuery
        ) ||

        agencyName.includes(
          searchQuery
        ) ||

        city.includes(
          searchQuery
        )

      );

    });


  // ==========================================
  // VIEW USER
  // ==========================================

  const handleView = (user) => {

    setSelectedUser(user);

    setShowViewModal(true);

  };


  // ==========================================
  // EDIT USER
  // ==========================================

  const handleEdit = (user) => {

    setSelectedUser(user);


    setEditData({

      firstName:
        user.firstName || "",

      lastName:
        user.lastName || "",

      email:
        user.email || "",

      phone:
        user.phone || "",

      role:
        user.role || "customer",

      agencyName:
        user.agencyName || "",

      city:
        user.city || "",

      state:
        user.state || "",

      gstNumber:
        user.gstNumber || "",

      isActive:
        user.isActive !== false,

    });


    setShowEditModal(true);

  };


  // ==========================================
  // EDIT INPUT
  // ==========================================

  const handleEditChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;


    setEditData({

      ...editData,

      [name]:
        type === "checkbox"
          ? checked
          : value,

    });

  };


  // ==========================================
  // UPDATE USER
  // ==========================================

  const handleUpdate = async (e) => {

    e.preventDefault();


    try {

      const token =
        getToken();


      const response =
        await fetch(

          `http://localhost:5000/api/users/${selectedUser._id}`,

          {

            method: "PUT",

            headers: {

              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,

            },

            body:
              JSON.stringify(
                editData
              ),

          }

        );


      const data =
        await response.json();


      if (!response.ok) {

        alert(
          data.message ||
          "Unable to update user."
        );

        return;

      }


      setUsers(
        (prevUsers) =>

          prevUsers.map(
            (user) =>

              user._id ===
              selectedUser._id

                ? data.user

                : user

          )

      );


      setShowEditModal(false);

      setSelectedUser(null);


      alert(
        "User updated successfully."
      );


    } catch (error) {

      console.error(
        "Update User Error:",
        error
      );


      alert(
        "Unable to connect to server."
      );

    }

  };


  // ==========================================
  // DELETE USER
  // ==========================================

  const handleDelete = async (user) => {

    const confirmed =
      window.confirm(

        `Delete ${
          user.firstName ||
          user.email ||
          "this user"
        }?`

      );


    if (!confirmed) {

      return;

    }


    try {

      const token =
        getToken();


      const response =
        await fetch(

          `http://localhost:5000/api/users/${user._id}`,

          {

            method: "DELETE",

            headers: {

              Authorization:
                `Bearer ${token}`,

            },

          }

        );


      const data =
        await response.json();


      if (!response.ok) {

        alert(
          data.message ||
          "Unable to delete user."
        );

        return;

      }


      setUsers(
        (prevUsers) =>

          prevUsers.filter(
            (item) =>
              item._id !== user._id
          )

      );


      alert(
        "User deleted successfully."
      );


    } catch (error) {

      console.error(
        "Delete User Error:",
        error
      );


      alert(
        "Unable to connect to server."
      );

    }

  };


  // ==========================================
  // ROLE CLASS
  // ==========================================

  const getRoleClass = (role) => {

    if (role === "admin") {

      return "role-admin";

    }


    if (role === "agent") {

      return "role-agent";

    }


    return "role-customer";

  };


  // ==========================================
  // STATUS CLASS
  // ==========================================

  const getStatusClass =
    (isActive) => {

      return isActive
        ? "status-active"
        : "status-inactive";

    };


  // ==========================================
  // JSX
  // ==========================================

  return (

    <section className="users-page">


      {/* ======================================
                    HEADER
      ====================================== */}

      <div className="users-header">

        <div>

          <h2>
            User Management
          </h2>

          <p>

            {searchQuery
              ? `Search results for "${searchQuery}"`
              : "Manage customers, travel agents and administrators"}

          </p>

        </div>


        <div className="users-count">

          <FaUserPlus />

          <span>

            {searchQuery
              ? `${filteredUsers.length} Found`
              : `${users.length} Users`}

          </span>

        </div>

      </div>


      {/* ======================================
                    ERROR
      ====================================== */}

      {error && (

        <div className="users-error">

          {error}

        </div>

      )}


      {/* ======================================
                    LOADING
      ====================================== */}

      {loading ? (

        <div className="users-loading">

          Loading users...

        </div>

      ) : (

        <div className="users-card">


          {/* ==================================
                    SEARCH RESULT INFO
          ================================== */}

          {searchQuery && (

            <div className="search-result-bar">

              <span>

                Search:
                <strong>
                  {" "}
                  {searchQuery}
                </strong>

              </span>


              <button
                type="button"
                onClick={() => {

                  window.history.pushState(
                    {},
                    "",
                    "/dashboard/users"
                  );

                  window.location.reload();

                }}
              >

                Clear Search

              </button>

            </div>

          )}


          {/* ==================================
                    TABLE
          ================================== */}

          <div className="users-table-responsive">

            <table className="users-table">

              <thead>

                <tr>

                  <th>
                    #
                  </th>

                  <th>
                    User
                  </th>

                  <th>
                    Email
                  </th>

                  <th>
                    Phone
                  </th>

                  <th>
                    Role
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Action
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredUsers.length ===
                0 ? (

                  <tr>

                    <td
                      colSpan="7"
                      className="empty-users"
                    >

                      {searchQuery
                        ? `No user found for "${searchQuery}"`
                        : "No users found."}

                    </td>

                  </tr>

                ) : (

                  filteredUsers.map(
                    (user, index) => (

                      <tr
                        key={user._id}
                      >


                        {/* Number */}

                        <td>

                          {index + 1}

                        </td>


                        {/* User */}

                        <td>

                          <div className="user-name">

                            <div className="user-avatar">

                              {(
                                user.firstName ||
                                user.email ||
                                "U"
                              )
                                .charAt(0)
                                .toUpperCase()}

                            </div>


                            <strong>

                              {user.firstName ||
                                "User"}{" "}

                              {user.lastName ||
                                ""}

                            </strong>

                          </div>

                        </td>


                        {/* Email */}

                        <td>

                          {user.email}

                        </td>


                        {/* Phone */}

                        <td>

                          {user.phone ||
                            "—"}

                        </td>


                        {/* Role */}

                        <td>

                          <span
                            className={`role-badge ${getRoleClass(
                              user.role
                            )}`}
                          >

                            {user.role}

                          </span>

                        </td>


                        {/* Status */}

                        <td>

                          <span
                            className={`status-badge ${getStatusClass(
                              user.isActive
                            )}`}
                          >

                            {user.isActive
                              ? "Active"
                              : "Inactive"}

                          </span>

                        </td>


                        {/* Actions */}

                        <td>

                          <div className="user-actions">


                            <button
                              type="button"
                              className="view-btn"
                              title="View"
                              onClick={() =>
                                handleView(
                                  user
                                )
                              }
                            >

                              <FaEye />

                            </button>


                            <button
                              type="button"
                              className="edit-btn"
                              title="Edit"
                              onClick={() =>
                                handleEdit(
                                  user
                                )
                              }
                            >

                              <FaEdit />

                            </button>


                            <button
                              type="button"
                              className="delete-btn"
                              title="Delete"
                              onClick={() =>
                                handleDelete(
                                  user
                                )
                              }
                            >

                              <FaTrash />

                            </button>


                          </div>

                        </td>

                      </tr>

                    )

                  )

                )}

              </tbody>

            </table>

          </div>

        </div>

      )}


      {/* ======================================
                    VIEW MODAL
      ====================================== */}

      {showViewModal &&
        selectedUser && (

          <div className="user-modal-overlay">

            <div className="user-modal">


              <div className="user-modal-header">

                <h3>
                  User Details
                </h3>


                <button
                  type="button"
                  onClick={() => {

                    setShowViewModal(false);

                    setSelectedUser(null);

                  }}
                >

                  <FaTimes />

                </button>

              </div>


              <div className="user-details">


                <div className="detail-item">

                  <span>
                    Name
                  </span>

                  <strong>

                    {selectedUser.firstName ||
                      "—"}{" "}

                    {selectedUser.lastName ||
                      ""}

                  </strong>

                </div>


                <div className="detail-item">

                  <span>
                    Email
                  </span>

                  <strong>
                    {selectedUser.email}
                  </strong>

                </div>


                <div className="detail-item">

                  <span>
                    Phone
                  </span>

                  <strong>
                    {selectedUser.phone ||
                      "—"}
                  </strong>

                </div>


                <div className="detail-item">

                  <span>
                    Role
                  </span>

                  <strong>
                    {selectedUser.role}
                  </strong>

                </div>


                {selectedUser.role ===
                  "agent" && (

                  <>

                    <div className="detail-item">

                      <span>
                        Agency
                      </span>

                      <strong>
                        {selectedUser.agencyName ||
                          "—"}
                      </strong>

                    </div>


                    <div className="detail-item">

                      <span>
                        City
                      </span>

                      <strong>
                        {selectedUser.city ||
                          "—"}
                      </strong>

                    </div>


                    <div className="detail-item">

                      <span>
                        State
                      </span>

                      <strong>
                        {selectedUser.state ||
                          "—"}
                      </strong>

                    </div>


                    <div className="detail-item">

                      <span>
                        GST
                      </span>

                      <strong>
                        {selectedUser.gstNumber ||
                          "—"}
                      </strong>

                    </div>

                  </>

                )}


                <div className="detail-item">

                  <span>
                    Status
                  </span>

                  <strong>

                    {selectedUser.isActive
                      ? "Active"
                      : "Inactive"}

                  </strong>

                </div>


              </div>

            </div>

          </div>

        )}


      {/* ======================================
                    EDIT MODAL
      ====================================== */}

      {showEditModal &&
        selectedUser && (

          <div className="user-modal-overlay">

            <div className="user-modal edit-user-modal">


              <div className="user-modal-header">

                <h3>
                  Edit User
                </h3>


                <button
                  type="button"
                  onClick={() => {

                    setShowEditModal(false);

                    setSelectedUser(null);

                  }}
                >

                  <FaTimes />

                </button>

              </div>


              <form
                className="edit-user-form"
                onSubmit={handleUpdate}
              >


                <div className="edit-form-row">


                  <div>

                    <label>
                      First Name
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      value={
                        editData.firstName
                      }
                      onChange={
                        handleEditChange
                      }
                      required
                    />

                  </div>


                  <div>

                    <label>
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      value={
                        editData.lastName
                      }
                      onChange={
                        handleEditChange
                      }
                    />

                  </div>


                </div>


                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={
                    editData.email
                  }
                  onChange={
                    handleEditChange
                  }
                  required
                />


                <label>
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  value={
                    editData.phone
                  }
                  onChange={
                    handleEditChange
                  }
                />


                <label>
                  Role
                </label>

                <select
                  name="role"
                  value={
                    editData.role
                  }
                  onChange={
                    handleEditChange
                  }
                >

                  <option value="customer">
                    Customer
                  </option>

                  <option value="agent">
                    Agent
                  </option>

                  <option value="admin">
                    Admin
                  </option>

                </select>


                <label className="active-toggle">

                  <input
                    type="checkbox"
                    name="isActive"
                    checked={
                      editData.isActive
                    }
                    onChange={
                      handleEditChange
                    }
                  />

                  Account Active

                </label>


                <div className="edit-modal-actions">

                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => {

                      setShowEditModal(false);

                      setSelectedUser(null);

                    }}
                  >

                    Cancel

                  </button>


                  <button
                    type="submit"
                    className="save-btn"
                  >

                    Save Changes

                  </button>

                </div>


              </form>

            </div>

          </div>

        )}

    </section>

  );

}


export default Users;