
// import { useState } from "react";

// import "./BookingTable.css";

// import {
//   FaEye,
//   FaEdit,
//   FaTrash,
// } from "react-icons/fa";

// import EditFlight from "../EditFlight/EditFlight";

// function BookingTable() {

//   const [showEditModal, setShowEditModal] = useState(false);

//   const bookings = [

//     {
//       id:1,
//       passenger:"Mohammed Ali",
//       from:"Delhi",
//       to:"Dubai",
//       airline:"Emirates",
//       amount:"₹28,500",
//       status:"Confirmed"
//     },

//     {
//       id:2,
//       passenger:"Aamir Khan",
//       from:"Mumbai",
//       to:"Jeddah",
//       airline:"Saudia",
//       amount:"₹36,800",
//       status:"Pending"
//     },

//     {
//       id:3,
//       passenger:"Ahmed Raza",
//       from:"Jaipur",
//       to:"Doha",
//       airline:"Qatar Airways",
//       amount:"₹41,200",
//       status:"Confirmed"
//     },

//     {
//       id:4,
//       passenger:"Sajid Khan",
//       from:"Delhi",
//       to:"Riyadh",
//       airline:"Flynas",
//       amount:"₹24,900",
//       status:"Cancelled"
//     },

//     {
//       id:5,
//       passenger:"Imran Sheikh",
//       from:"Lucknow",
//       to:"Sharjah",
//       airline:"Air Arabia",
//       amount:"₹22,400",
//       status:"Confirmed"
//     }

//   ];

//   return (

//     <section className="booking-table-card">

//       <div className="table-header">

//         <div>

//           <h2>

//             Recent Bookings

//           </h2>

//           <p>

//             Latest Flight Booking List

//           </p>

//         </div>

//       </div>

//       <div className="table-responsive">

//         <table>

//           <thead>

//             <tr>

//               <th>ID</th>

//               <th>Passenger</th>

//               <th>Route</th>

//               <th>Airline</th>

//               <th>Amount</th>

//               <th>Status</th>

//               <th>Action</th>

//             </tr>

//           </thead>

//           <tbody>

//             {

//               bookings.map((item)=>(

//                 <tr key={item.id}>

//                   <td>

//                     #{item.id}

//                   </td>

//                   <td>

//                     {item.passenger}

//                   </td>

//                   <td>

//                     {item.from} → {item.to}

//                   </td>

//                   <td>

//                     {item.airline}

//                   </td>

//                   <td>

//                     {item.amount}

//                   </td>

//                   <td>

//                     <span
//                       className={`status ${item.status.toLowerCase()}`}
//                     >

//                       {item.status}

//                     </span>

//                   </td>

//                   <td className="action-buttons">

//                                         <button>

//                       <FaEye />

//                     </button>

//                     <button
//                       onClick={() => setShowEditModal(true)}
//                     >

//                       <FaEdit />

//                     </button>

//                     <button>

//                       <FaTrash />

//                     </button>

//                   </td>

//                 </tr>

//               ))

//             }

//           </tbody>

//         </table>

//       </div>

//       {showEditModal && (

//         <EditFlight
//           closeModal={() =>
//             setShowEditModal(false)
//           }
//         />

//       )}

//     </section>

//   );

// }

// export default BookingTable;











import { useEffect, useState } from "react";

import "./BookingTable.css";

import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import EditFlight from "../EditFlight/EditFlight";

function BookingTable() {

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [bookings, setBookings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // ==========================================
  // FETCH REAL BOOKINGS
  // ==========================================

  const fetchBookings = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://saiyed-travels-backend-1.onrender.com/api/bookings"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to fetch bookings"
        );
      }

      setBookings(
        data.bookings || []
      );

    } catch (error) {

      console.error(
        "Booking Fetch Error:",
        error
      );

      setBookings([]);

    } finally {

      setLoading(false);

    }
  };

  // ==========================================
  // LOAD BOOKINGS
  // ==========================================

  useEffect(() => {
    fetchBookings();
  }, []);

  // ==========================================
  // CUSTOMER NAME
  // ==========================================

  const getCustomerName = (booking) => {

    const passenger =
      booking.passenger || {};

    return (
      `${passenger.firstName || ""} ${
        passenger.lastName || ""
      }`.trim() ||
      "Unknown Customer"
    );
  };

  // ==========================================
  // ROUTE
  // ==========================================

  const getRoute = (booking) => {

    const flight =
      booking.flight || {};

    const from =
      flight.fromCity || "-";

    const to =
      flight.toCity || "-";

    return `${from} → ${to}`;
  };

  // ==========================================
  // FLIGHT
  // ==========================================

  const getAirline = (booking) => {

    return (
      booking.flight?.airline ||
      "-"
    );
  };

  // ==========================================
  // FLIGHT NUMBER
  // ==========================================

  const getFlightNumber = (booking) => {

    return (
      booking.flight?.flightNo ||
      "-"
    );
  };

  // ==========================================
  // FORMAT PRICE
  // ==========================================

  const formatPrice = (price) => {

    return Number(
      price || 0
    ).toLocaleString("en-IN");

  };

  // ==========================================
  // DELETE BOOKING
  // ==========================================

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this booking?"
      );

    if (!confirmDelete) {
      return;
    }

    try {

      const response = await fetch(
        `https://saiyed-travels-backend-1.onrender.com/api/bookings/${id}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await response.json();

      if (!response.ok) {

        throw new Error(
          data.message ||
            "Unable to delete booking"
        );

      }

      alert(
        "Booking deleted successfully."
      );

      fetchBookings();

    } catch (error) {

      console.error(
        "Delete Booking Error:",
        error
      );

      alert(
        error.message ||
          "Unable to delete booking."
      );

    }
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {

    return (
      <section className="booking-table-card">

        <div className="table-header">

          <div>

            <h2>
              Recent Bookings
            </h2>

            <p>
              Latest Flight Booking List
            </p>

          </div>

        </div>

        <div className="booking-table-loading">

          <p>
            Loading bookings...
          </p>

        </div>

      </section>
    );

  }

  // ==========================================
  // TABLE
  // ==========================================

  return (

    <section className="booking-table-card">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="table-header">

        <div>

          <h2>
            Recent Bookings
          </h2>

          <p>
            Latest Flight Booking List
          </p>

        </div>

        <button
          className="booking-refresh-btn"
          onClick={fetchBookings}
        >
          Refresh
        </button>

      </div>


      {/* ======================================
          NO BOOKINGS
      ====================================== */}

      {bookings.length === 0 ? (

        <div className="no-bookings">

          <h3>
            No Bookings Found
          </h3>

          <p>
            Real customer bookings will
            appear here.
          </p>

        </div>

      ) : (

        <div className="table-responsive">

          <table>

            <thead>

              <tr>

                <th>
                  ID
                </th>

                <th>
                  Passenger
                </th>

                <th>
                  Route
                </th>

                <th>
                  Airline
                </th>

                <th>
                  Amount
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

              {bookings.map(
                (item, index) => (

                  <tr
                    key={
                      item._id
                    }
                  >

                    {/* ID */}

                    <td>

                      <strong>
                        #
                        {item.bookingId ||
                          String(
                            index + 1
                          ).padStart(
                            3,
                            "0"
                          )}
                      </strong>

                    </td>


                    {/* PASSENGER */}

                    <td>

                      <div className="booking-passenger">

                        <strong>
                          {getCustomerName(
                            item
                          )}
                        </strong>

                        <small>
                          {
                            item.passenger
                              ?.email ||
                            "-"
                          }
                        </small>

                      </div>

                    </td>


                    {/* ROUTE */}

                    <td>

                      <div className="booking-route">

                        <strong>
                          {getRoute(
                            item
                          )}
                        </strong>

                        <small>

                          {
                            item.flight
                              ?.fromCode ||
                            ""
                          }

                          {item.flight
                            ?.fromCode &&
                          item.flight
                            ?.toCode
                            ? " → "
                            : ""}

                          {
                            item.flight
                              ?.toCode ||
                            ""
                          }

                        </small>

                      </div>

                    </td>


                    {/* AIRLINE */}

                    <td>

                      <div className="booking-airline">

                        <strong>
                          {getAirline(
                            item
                          )}
                        </strong>

                        <small>
                          {getFlightNumber(
                            item
                          )}
                        </small>

                      </div>

                    </td>


                    {/* AMOUNT */}

                    <td>

                      <strong className="booking-amount">

                        ₹{" "}

                        {formatPrice(
                          item.total
                        )}

                      </strong>

                    </td>


                    {/* STATUS */}

                    <td>

                      <span
                        className={`status ${
                          (
                            item.bookingStatus ||
                            item.paymentStatus ||
                            "Pending"
                          )
                            .toLowerCase()
                        }`}
                      >

                        {
                          item.bookingStatus ||
                          item.paymentStatus ||
                          "Pending"
                        }

                      </span>

                    </td>


                    {/* ACTION */}

                    <td>

                      <div className="action-buttons">

                        {/* VIEW */}

                        <button
                          type="button"
                          title="View Booking"
                          onClick={() => {
                            // Abhi view ke liye
                            // My Bookings page open hoga
                            window.location.href =
                              "/dashboard/my-bookings";
                          }}
                        >
                          <FaEye />
                        </button>


                        {/* EDIT */}

                        <button
                          type="button"
                          title="Edit Booking"
                          onClick={() =>
                            setShowEditModal(
                              true
                            )
                          }
                        >
                          <FaEdit />
                        </button>


                        {/* DELETE */}

                        <button
                          type="button"
                          title="Delete Booking"
                          onClick={() =>
                            handleDelete(
                              item._id
                            )
                          }
                        >
                          <FaTrash />
                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      )}


      {/* ======================================
          EDIT MODAL
      ====================================== */}

      {showEditModal && (

        <EditFlight
          closeModal={() =>
            setShowEditModal(
              false
            )
          }
        />

      )}

    </section>

  );

}

export default BookingTable;