// import "./DeleteFlight.css";

// import {
//   FaTrashAlt,
//   FaTimes,
// } from "react-icons/fa";

// function DeleteFlight({

//   closeModal,

//   flightName = "EK-501"

// }) {

//   const handleDelete = () => {

//     alert(`${flightName} deleted successfully`);

//     closeModal();

//   };

//   return (

//     <div className="delete-overlay">

//       <div className="delete-modal">

//         <div className="delete-header">

//           <div className="delete-icon">

//             <FaTrashAlt />

//           </div>

//           <button
//             className="delete-close"
//             onClick={closeModal}
//           >
//             <FaTimes />
//           </button>

//         </div>

//         <div className="delete-body">

//           <h2>

//             Delete Flight

//           </h2>

//           <p>

//             Are you sure you want to delete

//           </p>

//           <h3>

//             {flightName}

//           </h3>

//           <p>

//             This action cannot be undone.

//           </p>

//                     <div className="delete-buttons">

//             <button
//               className="cancel-delete-btn"
//               onClick={closeModal}
//             >
//               Cancel
//             </button>

//             <button
//               className="confirm-delete-btn"
//               onClick={handleDelete}
//             >
//               Delete Flight
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>

//   );

// }

// export default DeleteFlight;


import "./DeleteFlight.css";

import { useState } from "react";

import {
  FaTrashAlt,
  FaTimes,
  FaSpinner,
} from "react-icons/fa";

function DeleteFlight({
  flight,
  flightName = "Flight",
  closeModal,
  onSuccess,
}) {
  const [deleting, setDeleting] =
    useState(false);

  const [error, setError] =
    useState("");

  // =====================================================
  // DELETE FLIGHT
  // =====================================================

  const handleDelete = async () => {
    if (!flight?._id) {
      setError(
        "Flight ID not found. Cannot delete this flight."
      );
      return;
    }

    try {
      setDeleting(true);
      setError("");

      const token =
        localStorage.getItem("token");

      if (!token) {
        setError(
          "Admin login session expired. Please login again."
        );

        setDeleting(false);
        return;
      }

      console.log(
        "Deleting Flight:",
        flight._id
      );

      const response = await fetch(
        `http://localhost:5000/api/flights/${flight._id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data =
        await response.json();

      console.log(
        "Delete Flight Response:",
        data
      );

      // =================================================
      // ERROR
      // =================================================

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to delete flight."
        );
      }

      // =================================================
      // SUCCESS
      // =================================================

      alert(
        `${flightName} deleted successfully`
      );

      // FlightTable ko batao ki delete successful hai
      if (onSuccess) {
        onSuccess(flight._id);
      } else {
        closeModal();
      }

    } catch (error) {
      console.error(
        "Delete Flight Error:",
        error
      );

      setError(
        error.message ||
          "Something went wrong while deleting flight."
      );

    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="delete-overlay">

      <div className="delete-modal">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="delete-header">

          <div className="delete-icon">
            <FaTrashAlt />
          </div>

          <button
            type="button"
            className="delete-close"
            onClick={closeModal}
            disabled={deleting}
            aria-label="Close"
          >
            <FaTimes />
          </button>

        </div>


        {/* =================================================
            BODY
        ================================================= */}

        <div className="delete-body">

          <h2>
            Delete Flight
          </h2>

          <p>
            Are you sure you want to delete
            this flight?
          </p>

          <h3>
            {flightName}
          </h3>

          <p>
            This action cannot be undone.
          </p>


          {/* =================================================
              ERROR
          ================================================= */}

          {error && (
            <div className="delete-error">
              {error}
            </div>
          )}


          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="delete-buttons">

            <button
              type="button"
              className="cancel-delete-btn"
              onClick={closeModal}
              disabled={deleting}
            >
              Cancel
            </button>


            <button
              type="button"
              className="confirm-delete-btn"
              onClick={handleDelete}
              disabled={deleting}
            >

              {deleting ? (
                <>
                  <FaSpinner className="delete-spinner" />
                  Deleting...
                </>
              ) : (
                <>
                  <FaTrashAlt />
                  Delete Flight
                </>
              )}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DeleteFlight;