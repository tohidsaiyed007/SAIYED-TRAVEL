
import { useState } from "react";

import "./BookingTable.css";

import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import EditFlight from "../EditFlight/EditFlight";

function BookingTable() {

  const [showEditModal, setShowEditModal] = useState(false);

  const bookings = [

    {
      id:1,
      passenger:"Mohammed Ali",
      from:"Delhi",
      to:"Dubai",
      airline:"Emirates",
      amount:"₹28,500",
      status:"Confirmed"
    },

    {
      id:2,
      passenger:"Aamir Khan",
      from:"Mumbai",
      to:"Jeddah",
      airline:"Saudia",
      amount:"₹36,800",
      status:"Pending"
    },

    {
      id:3,
      passenger:"Ahmed Raza",
      from:"Jaipur",
      to:"Doha",
      airline:"Qatar Airways",
      amount:"₹41,200",
      status:"Confirmed"
    },

    {
      id:4,
      passenger:"Sajid Khan",
      from:"Delhi",
      to:"Riyadh",
      airline:"Flynas",
      amount:"₹24,900",
      status:"Cancelled"
    },

    {
      id:5,
      passenger:"Imran Sheikh",
      from:"Lucknow",
      to:"Sharjah",
      airline:"Air Arabia",
      amount:"₹22,400",
      status:"Confirmed"
    }

  ];

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

      <div className="table-responsive">

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Passenger</th>

              <th>Route</th>

              <th>Airline</th>

              <th>Amount</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {

              bookings.map((item)=>(

                <tr key={item.id}>

                  <td>

                    #{item.id}

                  </td>

                  <td>

                    {item.passenger}

                  </td>

                  <td>

                    {item.from} → {item.to}

                  </td>

                  <td>

                    {item.airline}

                  </td>

                  <td>

                    {item.amount}

                  </td>

                  <td>

                    <span
                      className={`status ${item.status.toLowerCase()}`}
                    >

                      {item.status}

                    </span>

                  </td>

                  <td className="action-buttons">

                                        <button>

                      <FaEye />

                    </button>

                    <button
                      onClick={() => setShowEditModal(true)}
                    >

                      <FaEdit />

                    </button>

                    <button>

                      <FaTrash />

                    </button>

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

      {showEditModal && (

        <EditFlight
          closeModal={() =>
            setShowEditModal(false)
          }
        />

      )}

    </section>

  );

}

export default BookingTable;