// // // // import "./EditFlight.css";

// // // // import { useState } from "react";

// // // // function EditFlight({ closeModal }) {

// // // //   const [flight, setFlight] = useState({

// // // //     airline: "Emirates",

// // // //     flightNo: "EK-501",

// // // //     from: "Delhi",

// // // //     to: "Dubai",

// // // //     departureDate: "2026-08-10",

// // // //     departureTime: "09:00",

// // // //     arrivalDate: "2026-08-10",

// // // //     arrivalTime: "12:15",

// // // //     aircraft: "Boeing 777",

// // // //     cabin: "Business",

// // // //     seats: "180",

// // // //     price: "28500",

// // // //     status: "Scheduled",

// // // //   });

// // // //   const handleChange = (e) => {

// // // //     setFlight({

// // // //       ...flight,

// // // //       [e.target.name]: e.target.value,

// // // //     });

// // // //   };

// // // //   const handleSubmit = (e) => {

// // // //     e.preventDefault();

// // // //     alert("Flight Updated Successfully ✅");

// // // //   };

// // // //   return (

// // // //     <div className="edit-modal-overlay">

// // // //       <div className="edit-flight-modal">

// // // //         <div className="edit-modal-header">

// // // //           <h2>Edit Flight</h2>

// // // //           <button

// // // //             className="edit-close-btn"

// // // //             onClick={closeModal}

// // // //           >

// // // //             ✕

// // // //           </button>

// // // //         </div>

// // // //         <form onSubmit={handleSubmit}>

// // // //           <div className="edit-grid">

// // // //             <div>

// // // //               <label>Airline</label>

// // // //               <input

// // // //                 type="text"

// // // //                 name="airline"

// // // //                 value={flight.airline}

// // // //                 onChange={handleChange}

// // // //               />

// // // //             </div>

// // // //             <div>

// // // //               <label>Flight Number</label>

// // // //               <input

// // // //                 type="text"

// // // //                 name="flightNo"

// // // //                 value={flight.flightNo}

// // // //                 onChange={handleChange}

// // // //               />

// // // //             </div>

// // // //             <div>

// // // //               <label>From</label>

// // // //               <input

// // // //                 type="text"

// // // //                 name="from"

// // // //                 value={flight.from}

// // // //                 onChange={handleChange}

// // // //               />

// // // //             </div>

// // // //             <div>

// // // //               <label>To</label>

// // // //               <input

// // // //                 type="text"

// // // //                 name="to"

// // // //                 value={flight.to}

// // // //                 onChange={handleChange}

// // // //               />

// // // //             </div>

// // // //                         <div>

// // // //               <label>Departure Date</label>

// // // //               <input

// // // //                 type="date"

// // // //                 name="departureDate"

// // // //                 value={flight.departureDate}

// // // //                 onChange={handleChange}

// // // //               />

// // // //             </div>

// // // //             <div>

// // // //               <label>Departure Time</label>

// // // //               <input

// // // //                 type="time"

// // // //                 name="departureTime"

// // // //                 value={flight.departureTime}

// // // //                 onChange={handleChange}

// // // //               />

// // // //             </div>

// // // //             <div>

// // // //               <label>Arrival Date</label>

// // // //               <input

// // // //                 type="date"

// // // //                 name="arrivalDate"

// // // //                 value={flight.arrivalDate}

// // // //                 onChange={handleChange}

// // // //               />

// // // //             </div>

// // // //             <div>

// // // //               <label>Arrival Time</label>

// // // //               <input

// // // //                 type="time"

// // // //                 name="arrivalTime"

// // // //                 value={flight.arrivalTime}

// // // //                 onChange={handleChange}

// // // //               />

// // // //             </div>

// // // //             <div>

// // // //               <label>Aircraft</label>

// // // //               <input

// // // //                 type="text"

// // // //                 name="aircraft"

// // // //                 value={flight.aircraft}

// // // //                 onChange={handleChange}

// // // //               />

// // // //             </div>

// // // //             <div>

// // // //               <label>Cabin</label>

// // // //               <select

// // // //                 name="cabin"

// // // //                 value={flight.cabin}

// // // //                 onChange={handleChange}

// // // //               >

// // // //                 <option>Economy</option>

// // // //                 <option>Premium Economy</option>

// // // //                 <option>Business</option>

// // // //                 <option>First Class</option>

// // // //               </select>

// // // //             </div>

// // // //             <div>

// // // //               <label>Available Seats</label>

// // // //               <input

// // // //                 type="number"

// // // //                 name="seats"

// // // //                 value={flight.seats}

// // // //                 onChange={handleChange}

// // // //               />

// // // //             </div>

// // // //             <div>

// // // //               <label>Ticket Price (₹)</label>

// // // //               <input

// // // //                 type="number"

// // // //                 name="price"

// // // //                 value={flight.price}

// // // //                 onChange={handleChange}

// // // //               />

// // // //             </div>

// // // //             <div>

// // // //               <label>Status</label>

// // // //               <select

// // // //                 name="status"

// // // //                 value={flight.status}

// // // //                 onChange={handleChange}

// // // //               >

// // // //                 <option>Scheduled</option>

// // // //                 <option>Delayed</option>

// // // //                 <option>Cancelled</option>

// // // //               </select>

// // // //             </div>

// // // //           </div>

// // // //           <div className="edit-modal-buttons">

// // // //             <button

// // // //               type="button"

// // // //               className="edit-cancel-btn"

// // // //               onClick={closeModal}

// // // //             >

// // // //               Cancel

// // // //             </button>

// // // //             <button

// // // //               type="submit"

// // // //               className="update-btn"

// // // //             >

// // // //               Update Flight

// // // //             </button>

// // // //           </div>

// // // //         </form>

// // // //       </div>

// // // //     </div>

// // // //   );

// // // // }

// // // // export default EditFlight;



// // // import "./EditFlight.css";

// // // import { useEffect, useState } from "react";

// // // function EditFlight({
// // //   flight,
// // //   closeModal,
// // //   onSuccess,
// // // }) {
// // //   // =====================================================
// // //   // FORM STATE
// // //   // =====================================================

// // //   const [formData, setFormData] = useState({
// // //     airline: "",
// // //     flightNo: "",
// // //     from: "",
// // //     to: "",
// // //     departure: "",
// // //     arrival: "",
// // //     duration: "",
// // //     seats: "",
// // //     price: "",
// // //     status: "Scheduled",
// // //     availableSeats: "",
// // //   });

// // //   const [loading, setLoading] =
// // //     useState(false);

// // //   const [error, setError] =
// // //     useState("");

// // //   // =====================================================
// // //   // LOAD SELECTED FLIGHT
// // //   // =====================================================

// // //   useEffect(() => {
// // //     if (!flight) return;

// // //     setFormData({
// // //       airline:
// // //         flight.airline || "",

// // //       flightNo:
// // //         flight.flightNo ||
// // //         flight.flightNumber ||
// // //         "",

// // //       from:
// // //         flight.from ||
// // //         flight.fromCity ||
// // //         "",

// // //       to:
// // //         flight.to ||
// // //         flight.toCity ||
// // //         "",

// // //       departure:
// // //         flight.departure ||
// // //         flight.departureTime ||
// // //         "",

// // //       arrival:
// // //         flight.arrival ||
// // //         flight.arrivalTime ||
// // //         "",

// // //       duration:
// // //         flight.duration || "",

// // //       seats:
// // //         flight.seats ??
// // //         flight.availableSeats ??
// // //         "",

// // //       price:
// // //         flight.price ??
// // //         flight.finalPrice ??
// // //         "",

// // //       status:
// // //         flight.status ||
// // //         "Scheduled",

// // //       availableSeats:
// // //         flight.availableSeats ??
// // //         flight.seats ??
// // //         "",
// // //     });
// // //   }, [flight]);

// // //   // =====================================================
// // //   // INPUT CHANGE
// // //   // =====================================================

// // //   const handleChange = (e) => {
// // //     const { name, value } =
// // //       e.target;

// // //     setFormData((previous) => ({
// // //       ...previous,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   // =====================================================
// // //   // SUBMIT
// // //   // =====================================================

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!flight?._id) {
// // //       setError(
// // //         "Flight ID not found."
// // //       );
// // //       return;
// // //     }

// // //     // Basic validation

// // //     if (
// // //       !formData.airline.trim() ||
// // //       !formData.flightNo.trim() ||
// // //       !formData.from.trim() ||
// // //       !formData.to.trim() ||
// // //       !formData.departure.trim() ||
// // //       !formData.arrival.trim() ||
// // //       !formData.duration.trim()
// // //     ) {
// // //       setError(
// // //         "Please fill all required fields."
// // //       );
// // //       return;
// // //     }

// // //     if (
// // //       formData.seats === "" ||
// // //       formData.price === ""
// // //     ) {
// // //       setError(
// // //         "Seats and price are required."
// // //       );
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);
// // //       setError("");

// // //       const token =
// // //         localStorage.getItem("token");

// // //       if (!token) {
// // //         setError(
// // //           "Admin login session expired. Please login again."
// // //         );

// // //         setLoading(false);
// // //         return;
// // //       }

// // //       // =================================================
// // //       // UPDATE DATA
// // //       // =================================================

// // //       const updateData = {
// // //         airline:
// // //           formData.airline.trim(),

// // //         flightNo:
// // //           formData.flightNo
// // //             .trim()
// // //             .toUpperCase(),

// // //         from:
// // //           formData.from.trim(),

// // //         to:
// // //           formData.to.trim(),

// // //         departure:
// // //           formData.departure.trim(),

// // //         arrival:
// // //           formData.arrival.trim(),

// // //         duration:
// // //           formData.duration.trim(),

// // //         seats:
// // //           Number(formData.seats),

// // //         price:
// // //           Number(formData.price),

// // //         status:
// // //           formData.status,

// // //         availableSeats:
// // //           formData.availableSeats === ""
// // //             ? Number(formData.seats)
// // //             : Number(
// // //                 formData.availableSeats
// // //               ),
// // //       };

// // //       console.log(
// // //         "Updating Flight:",
// // //         flight._id
// // //       );

// // //       console.log(
// // //         "Update Data:",
// // //         updateData
// // //       );

// // //       // =================================================
// // //       // API
// // //       // =================================================

// // //       const response =
// // //         await fetch(
// // //           `http://localhost:5000/api/flights/${flight._id}`,
// // //           {
// // //             method: "PUT",

// // //             headers: {
// // //               "Content-Type":
// // //                 "application/json",

// // //               Authorization:
// // //                 `Bearer ${token}`,
// // //             },

// // //             body:
// // //               JSON.stringify(
// // //                 updateData
// // //               ),
// // //           }
// // //         );

// // //       const data =
// // //         await response.json();

// // //       console.log(
// // //         "Update Flight Response:",
// // //         data
// // //       );

// // //       // =================================================
// // //       // API ERROR
// // //       // =================================================

// // //       if (!response.ok) {
// // //         throw new Error(
// // //           data.message ||
// // //             "Unable to update flight."
// // //         );
// // //       }

// // //       // =================================================
// // //       // SUCCESS
// // //       // =================================================

// // //       alert(
// // //         "Flight updated successfully ✅"
// // //       );

// // //       if (onSuccess) {
// // //         onSuccess(
// // //           data.flight
// // //         );
// // //       } else {
// // //         closeModal();
// // //       }

// // //     } catch (error) {
// // //       console.error(
// // //         "Update Flight Error:",
// // //         error
// // //       );

// // //       setError(
// // //         error.message ||
// // //           "Something went wrong while updating flight."
// // //       );

// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // =====================================================
// // //   // NO FLIGHT
// // //   // =====================================================

// // //   if (!flight) {
// // //     return null;
// // //   }

// // //   // =====================================================
// // //   // UI
// // //   // =====================================================

// // //   return (
// // //     <div className="edit-modal-overlay">

// // //       <div className="edit-flight-modal">

// // //         {/* =================================================
// // //             HEADER
// // //         ================================================= */}

// // //         <div className="edit-modal-header">

// // //           <div>
// // //             <h2>
// // //               Edit Flight
// // //             </h2>

// // //             <p>
// // //               Update flight information
// // //             </p>
// // //           </div>

// // //           <button
// // //             type="button"
// // //             className="edit-close-btn"
// // //             onClick={closeModal}
// // //             disabled={loading}
// // //           >
// // //             ✕
// // //           </button>

// // //         </div>


// // //         {/* =================================================
// // //             FORM
// // //         ================================================= */}

// // //         <form
// // //           onSubmit={
// // //             handleSubmit
// // //           }
// // //         >

// // //           <div className="edit-grid">

// // //             {/* AIRLINE */}

// // //             <div className="edit-form-group">

// // //               <label>
// // //                 Airline *
// // //               </label>

// // //               <input
// // //                 type="text"
// // //                 name="airline"
// // //                 value={
// // //                   formData.airline
// // //                 }
// // //                 onChange={
// // //                   handleChange
// // //                 }
// // //                 placeholder="Emirates"
// // //               />

// // //             </div>


// // //             {/* FLIGHT NUMBER */}

// // //             <div className="edit-form-group">

// // //               <label>
// // //                 Flight Number *
// // //               </label>

// // //               <input
// // //                 type="text"
// // //                 name="flightNo"
// // //                 value={
// // //                   formData.flightNo
// // //                 }
// // //                 onChange={
// // //                   handleChange
// // //                 }
// // //                 placeholder="EK-501"
// // //               />

// // //             </div>


// // //             {/* FROM */}

// // //             <div className="edit-form-group">

// // //               <label>
// // //                 From *
// // //               </label>

// // //               <input
// // //                 type="text"
// // //                 name="from"
// // //                 value={
// // //                   formData.from
// // //                 }
// // //                 onChange={
// // //                   handleChange
// // //                 }
// // //                 placeholder="Delhi"
// // //               />

// // //             </div>


// // //             {/* TO */}

// // //             <div className="edit-form-group">

// // //               <label>
// // //                 To *
// // //               </label>

// // //               <input
// // //                 type="text"
// // //                 name="to"
// // //                 value={
// // //                   formData.to
// // //                 }
// // //                 onChange={
// // //                   handleChange
// // //                 }
// // //                 placeholder="Dubai"
// // //               />

// // //             </div>


// // //             {/* DEPARTURE */}

// // //             <div className="edit-form-group">

// // //               <label>
// // //                 Departure *
// // //               </label>

// // //               <input
// // //                 type="text"
// // //                 name="departure"
// // //                 value={
// // //                   formData.departure
// // //                 }
// // //                 onChange={
// // //                   handleChange
// // //                 }
// // //                 placeholder="09:00 AM"
// // //               />

// // //             </div>


// // //             {/* ARRIVAL */}

// // //             <div className="edit-form-group">

// // //               <label>
// // //                 Arrival *
// // //               </label>

// // //               <input
// // //                 type="text"
// // //                 name="arrival"
// // //                 value={
// // //                   formData.arrival
// // //                 }
// // //                 onChange={
// // //                   handleChange
// // //                 }
// // //                 placeholder="12:15 PM"
// // //               />

// // //             </div>


// // //             {/* DURATION */}

// // //             <div className="edit-form-group">

// // //               <label>
// // //                 Duration *
// // //               </label>

// // //               <input
// // //                 type="text"
// // //                 name="duration"
// // //                 value={
// // //                   formData.duration
// // //                 }
// // //                 onChange={
// // //                   handleChange
// // //                 }
// // //                 placeholder="3h 15m"
// // //               />

// // //             </div>


// // //             {/* SEATS */}

// // //             <div className="edit-form-group">

// // //               <label>
// // //                 Total Seats *
// // //               </label>

// // //               <input
// // //                 type="number"
// // //                 min="0"
// // //                 name="seats"
// // //                 value={
// // //                   formData.seats
// // //                 }
// // //                 onChange={
// // //                   handleChange
// // //                 }
// // //                 placeholder="180"
// // //               />

// // //             </div>


// // //             {/* AVAILABLE SEATS */}

// // //             <div className="edit-form-group">

// // //               <label>
// // //                 Available Seats
// // //               </label>

// // //               <input
// // //                 type="number"
// // //                 min="0"
// // //                 name="availableSeats"
// // //                 value={
// // //                   formData.availableSeats
// // //                 }
// // //                 onChange={
// // //                   handleChange
// // //                 }
// // //                 placeholder="180"
// // //               />

// // //             </div>


// // //             {/* PRICE */}

// // //             <div className="edit-form-group">

// // //               <label>
// // //                 Ticket Price (₹) *
// // //               </label>

// // //               <input
// // //                 type="number"
// // //                 min="0"
// // //                 name="price"
// // //                 value={
// // //                   formData.price
// // //                 }
// // //                 onChange={
// // //                   handleChange
// // //                 }
// // //                 placeholder="28500"
// // //               />

// // //             </div>


// // //             {/* STATUS */}

// // //             <div className="edit-form-group">

// // //               <label>
// // //                 Status
// // //               </label>

// // //               <select
// // //                 name="status"
// // //                 value={
// // //                   formData.status
// // //                 }
// // //                 onChange={
// // //                   handleChange
// // //                 }
// // //               >

// // //                 <option value="Scheduled">
// // //                   Scheduled
// // //                 </option>

// // //                 <option value="Delayed">
// // //                   Delayed
// // //                 </option>

// // //                 <option value="Cancelled">
// // //                   Cancelled
// // //                 </option>

// // //               </select>

// // //             </div>

// // //           </div>


// // //           {/* =================================================
// // //               ERROR
// // //           ================================================= */}

// // //           {error && (

// // //             <div className="edit-error">
// // //               {error}
// // //             </div>

// // //           )}


// // //           {/* =================================================
// // //               BUTTONS
// // //           ================================================= */}

// // //           <div className="edit-modal-buttons">

// // //             <button
// // //               type="button"
// // //               className="edit-cancel-btn"
// // //               onClick={
// // //                 closeModal
// // //               }
// // //               disabled={loading}
// // //             >
// // //               Cancel
// // //             </button>


// // //             <button
// // //               type="submit"
// // //               className="update-btn"
// // //               disabled={loading}
// // //             >

// // //               {loading
// // //                 ? "Updating..."
// // //                 : "Update Flight"}

// // //             </button>

// // //           </div>

// // //         </form>

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // export default EditFlight;


// // import "./EditFlight.css";

// // import { useEffect, useState } from "react";

// // function EditFlight({
// //   flight,
// //   closeModal,
// //   onSuccess,
// // }) {
// //   // =====================================================
// //   // FORM DATA
// //   // =====================================================

// //   const [formData, setFormData] = useState({
// //     airline: "",
// //     flightNo: "",
// //     flightType: "Domestic",
// //     aircraft: "",

// //     fromCity: "",
// //     fromAirport: "",
// //     fromCode: "",

// //     toCity: "",
// //     toAirport: "",
// //     toCode: "",

// //     departureDate: "",
// //     departureTime: "",
// //     departureTerminal: "",

// //     arrivalDate: "",
// //     arrivalTime: "",
// //     arrivalTerminal: "",

// //     duration: "",
// //     stops: "Non-stop",
// //     stopAirport: "",
// //     stopCity: "",
// //     layoverDuration: "",

// //     cabins: [
// //       {
// //         name: "Economy",
// //         totalSeats: "",
// //         availableSeats: "",
// //         price: "",
// //         baggage: "15 KG",
// //       },
// //     ],

// //     baseFare: "",
// //     taxes: "",
// //     airportCharges: "",
// //     serviceFee: "",
// //     discount: "",
// //     finalPrice: "",
// //     currency: "INR",

// //     cabinBaggage: "7 KG",
// //     checkinBaggage: "15 KG",
// //     extraBaggagePrice: "",

// //     mealAvailable: false,
// //     wifiAvailable: false,
// //     entertainmentAvailable: false,
// //     powerAvailable: false,

// //     bookingStartDate: "",
// //     bookingClosingDate: "",

// //     refundable: false,
// //     changeable: false,

// //     status: "Scheduled",

// //     description: "",
// //     specialInstructions: "",
// //   });

// //   const [loading, setLoading] =
// //     useState(false);

// //   const [error, setError] =
// //     useState("");

// //   // =====================================================
// //   // LOAD SELECTED FLIGHT
// //   // =====================================================

// //   useEffect(() => {
// //     if (!flight) return;

// //     setFormData({
// //       airline:
// //         flight.airline || "",

// //       flightNo:
// //         flight.flightNo || "",

// //       flightType:
// //         flight.flightType ||
// //         "Domestic",

// //       aircraft:
// //         flight.aircraft || "",

// //       fromCity:
// //         flight.fromCity || "",

// //       fromAirport:
// //         flight.fromAirport || "",

// //       fromCode:
// //         flight.fromCode || "",

// //       toCity:
// //         flight.toCity || "",

// //       toAirport:
// //         flight.toAirport || "",

// //       toCode:
// //         flight.toCode || "",

// //       departureDate:
// //         flight.departureDate || "",

// //       departureTime:
// //         flight.departureTime || "",

// //       departureTerminal:
// //         flight.departureTerminal || "",

// //       arrivalDate:
// //         flight.arrivalDate || "",

// //       arrivalTime:
// //         flight.arrivalTime || "",

// //       arrivalTerminal:
// //         flight.arrivalTerminal || "",

// //       duration:
// //         flight.duration || "",

// //       stops:
// //         flight.stops || "Non-stop",

// //       stopAirport:
// //         flight.stopAirport || "",

// //       stopCity:
// //         flight.stopCity || "",

// //       layoverDuration:
// //         flight.layoverDuration || "",

// //       cabins:
// //         Array.isArray(flight.cabins) &&
// //         flight.cabins.length > 0
// //           ? flight.cabins.map((cabin) => ({
// //               name:
// //                 cabin.name ||
// //                 "Economy",

// //               totalSeats:
// //                 cabin.totalSeats ?? "",

// //               availableSeats:
// //                 cabin.availableSeats ?? "",

// //               price:
// //                 cabin.price ?? "",

// //               baggage:
// //                 cabin.baggage ||
// //                 "15 KG",
// //             }))
// //           : [
// //               {
// //                 name: "Economy",
// //                 totalSeats: "",
// //                 availableSeats: "",
// //                 price: "",
// //                 baggage: "15 KG",
// //               },
// //             ],

// //       baseFare:
// //         flight.baseFare ?? "",

// //       taxes:
// //         flight.taxes ?? "",

// //       airportCharges:
// //         flight.airportCharges ?? "",

// //       serviceFee:
// //         flight.serviceFee ?? "",

// //       discount:
// //         flight.discount ?? "",

// //       finalPrice:
// //         flight.finalPrice ?? "",

// //       currency:
// //         flight.currency || "INR",

// //       cabinBaggage:
// //         flight.cabinBaggage ||
// //         "7 KG",

// //       checkinBaggage:
// //         flight.checkinBaggage ||
// //         "15 KG",

// //       extraBaggagePrice:
// //         flight.extraBaggagePrice ?? "",

// //       mealAvailable:
// //         Boolean(
// //           flight.mealAvailable
// //         ),

// //       wifiAvailable:
// //         Boolean(
// //           flight.wifiAvailable
// //         ),

// //       entertainmentAvailable:
// //         Boolean(
// //           flight.entertainmentAvailable
// //         ),

// //       powerAvailable:
// //         Boolean(
// //           flight.powerAvailable
// //         ),

// //       bookingStartDate:
// //         flight.bookingStartDate ||
// //         "",

// //       bookingClosingDate:
// //         flight.bookingClosingDate ||
// //         "",

// //       refundable:
// //         Boolean(
// //           flight.refundable
// //         ),

// //       changeable:
// //         Boolean(
// //           flight.changeable
// //         ),

// //       status:
// //         flight.status ||
// //         "Scheduled",

// //       description:
// //         flight.description || "",

// //       specialInstructions:
// //         flight.specialInstructions ||
// //         "",
// //     });
// //   }, [flight]);

// //   // =====================================================
// //   // NORMAL INPUT CHANGE
// //   // =====================================================

// //   const handleChange = (e) => {
// //     const {
// //       name,
// //       value,
// //       type,
// //       checked,
// //     } = e.target;

// //     setFormData((previous) => ({
// //       ...previous,

// //       [name]:
// //         type === "checkbox"
// //           ? checked
// //           : value,
// //     }));
// //   };

// //   // =====================================================
// //   // CABIN CHANGE
// //   // =====================================================

// //   const handleCabinChange = (
// //     index,
// //     field,
// //     value
// //   ) => {
// //     setFormData((previous) => {
// //       const cabins = [
// //         ...previous.cabins,
// //       ];

// //       cabins[index] = {
// //         ...cabins[index],
// //         [field]: value,
// //       };

// //       return {
// //         ...previous,
// //         cabins,
// //       };
// //     });
// //   };

// //   // =====================================================
// //   // ADD CABIN
// //   // =====================================================

// //   const addCabin = () => {
// //     setFormData((previous) => ({
// //       ...previous,

// //       cabins: [
// //         ...previous.cabins,

// //         {
// //           name: "Economy",
// //           totalSeats: "",
// //           availableSeats: "",
// //           price: "",
// //           baggage: "15 KG",
// //         },
// //       ],
// //     }));
// //   };

// //   // =====================================================
// //   // REMOVE CABIN
// //   // =====================================================

// //   const removeCabin = (index) => {
// //     setFormData((previous) => {
// //       if (
// //         previous.cabins.length <= 1
// //       ) {
// //         return previous;
// //       }

// //       return {
// //         ...previous,

// //         cabins:
// //           previous.cabins.filter(
// //             (_, cabinIndex) =>
// //               cabinIndex !== index
// //           ),
// //       };
// //     });
// //   };

// //   // =====================================================
// //   // SUBMIT
// //   // =====================================================

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!flight?._id) {
// //       setError(
// //         "Flight ID not found."
// //       );
// //       return;
// //     }

// //     setLoading(true);
// //     setError("");

// //     try {
// //       const token =
// //         localStorage.getItem(
// //           "token"
// //         );

// //       if (!token) {
// //         throw new Error(
// //           "Admin login session expired. Please login again."
// //         );
// //       }

// //       // =================================================
// //       // PREPARE CABINS
// //       // =================================================

// //       const cleanedCabins =
// //         formData.cabins.map(
// //           (cabin) => ({
// //             name: cabin.name,

// //             totalSeats:
// //               Number(
// //                 cabin.totalSeats
// //               ),

// //             availableSeats:
// //               Number(
// //                 cabin.availableSeats
// //               ),

// //             price:
// //               Number(cabin.price),

// //             baggage:
// //               cabin.baggage ||
// //               "15 KG",
// //           })
// //         );

// //       // =================================================
// //       // PREPARE UPDATE DATA
// //       // =================================================

// //       const updateData = {
// //         airline:
// //           formData.airline.trim(),

// //         flightNo:
// //           formData.flightNo
// //             .trim()
// //             .toUpperCase(),

// //         flightType:
// //           formData.flightType,

// //         aircraft:
// //           formData.aircraft.trim(),

// //         fromCity:
// //           formData.fromCity.trim(),

// //         fromAirport:
// //           formData.fromAirport.trim(),

// //         fromCode:
// //           formData.fromCode
// //             .trim()
// //             .toUpperCase(),

// //         toCity:
// //           formData.toCity.trim(),

// //         toAirport:
// //           formData.toAirport.trim(),

// //         toCode:
// //           formData.toCode
// //             .trim()
// //             .toUpperCase(),

// //         departureDate:
// //           formData.departureDate,

// //         departureTime:
// //           formData.departureTime,

// //         departureTerminal:
// //           formData.departureTerminal,

// //         arrivalDate:
// //           formData.arrivalDate,

// //         arrivalTime:
// //           formData.arrivalTime,

// //         arrivalTerminal:
// //           formData.arrivalTerminal,

// //         duration:
// //           formData.duration.trim(),

// //         stops:
// //           formData.stops,

// //         stopAirport:
// //           formData.stopAirport,

// //         stopCity:
// //           formData.stopCity,

// //         layoverDuration:
// //           formData.layoverDuration,

// //         cabins:
// //           cleanedCabins,

// //         baseFare:
// //           Number(
// //             formData.baseFare || 0
// //           ),

// //         taxes:
// //           Number(
// //             formData.taxes || 0
// //           ),

// //         airportCharges:
// //           Number(
// //             formData.airportCharges || 0
// //           ),

// //         serviceFee:
// //           Number(
// //             formData.serviceFee || 0
// //           ),

// //         discount:
// //           Number(
// //             formData.discount || 0
// //           ),

// //         finalPrice:
// //           Number(
// //             formData.finalPrice || 0
// //           ),

// //         currency:
// //           formData.currency,

// //         cabinBaggage:
// //           formData.cabinBaggage,

// //         checkinBaggage:
// //           formData.checkinBaggage,

// //         extraBaggagePrice:
// //           Number(
// //             formData.extraBaggagePrice ||
// //               0
// //           ),

// //         mealAvailable:
// //           formData.mealAvailable,

// //         wifiAvailable:
// //           formData.wifiAvailable,

// //         entertainmentAvailable:
// //           formData.entertainmentAvailable,

// //         powerAvailable:
// //           formData.powerAvailable,

// //         bookingStartDate:
// //           formData.bookingStartDate,

// //         bookingClosingDate:
// //           formData.bookingClosingDate,

// //         refundable:
// //           formData.refundable,

// //         changeable:
// //           formData.changeable,

// //         status:
// //           formData.status,

// //         description:
// //           formData.description,

// //         specialInstructions:
// //           formData.specialInstructions,
// //       };

// //       console.log(
// //         "UPDATING FLIGHT:",
// //         flight._id
// //       );

// //       console.log(
// //         "UPDATE DATA:",
// //         updateData
// //       );

// //       // =================================================
// //       // PUT API
// //       // =================================================

// //       const response =
// //         await fetch(
// //           `http://localhost:5000/api/flights/${flight._id}`,
// //           {
// //             method: "PUT",

// //             headers: {
// //               "Content-Type":
// //                 "application/json",

// //               Authorization:
// //                 `Bearer ${token}`,
// //             },

// //             body:
// //               JSON.stringify(
// //                 updateData
// //               ),
// //           }
// //         );

// //       const data =
// //         await response.json();

// //       console.log(
// //         "UPDATE RESPONSE:",
// //         data
// //       );

// //       if (!response.ok) {
// //         throw new Error(
// //           data.message ||
// //             "Flight update failed."
// //         );
// //       }

// //       // =================================================
// //       // SUCCESS
// //       // =================================================

// //       alert(
// //         "Flight updated successfully ✅"
// //       );

// //       if (onSuccess) {
// //         onSuccess(
// //           data.flight
// //         );
// //       } else {
// //         closeModal();
// //       }

// //     } catch (error) {
// //       console.error(
// //         "Update Flight Error:",
// //         error
// //       );

// //       setError(
// //         error.message ||
// //           "Unable to update flight."
// //       );

// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // =====================================================
// //   // NO FLIGHT
// //   // =====================================================

// //   if (!flight) {
// //     return null;
// //   }

// //   return (
// //     <div className="edit-modal-overlay">

// //       <div className="edit-flight-modal">

// //         {/* HEADER */}

// //         <div className="edit-modal-header">

// //           <div>
// //             <h2>
// //               Edit Flight
// //             </h2>

// //             <p>
// //               Update flight information
// //             </p>
// //           </div>

// //           <button
// //             type="button"
// //             className="edit-close-btn"
// //             onClick={closeModal}
// //             disabled={loading}
// //           >
// //             ✕
// //           </button>

// //         </div>


// //         <form
// //           onSubmit={
// //             handleSubmit
// //           }
// //         >

// //           <div className="edit-grid">

// //             {/* ========================================
// //                 BASIC INFORMATION
// //             ======================================== */}

// //             <div className="edit-section-title">
// //               Basic Information
// //             </div>


// //             <div>
// //               <label>
// //                 Airline *
// //               </label>

// //               <input
// //                 type="text"
// //                 name="airline"
// //                 value={
// //                   formData.airline
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Flight Number *
// //               </label>

// //               <input
// //                 type="text"
// //                 name="flightNo"
// //                 value={
// //                   formData.flightNo
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Flight Type
// //               </label>

// //               <select
// //                 name="flightType"
// //                 value={
// //                   formData.flightType
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               >
// //                 <option value="Domestic">
// //                   Domestic
// //                 </option>

// //                 <option value="International">
// //                   International
// //                 </option>
// //               </select>
// //             </div>


// //             <div>
// //               <label>
// //                 Aircraft *
// //               </label>

// //               <input
// //                 type="text"
// //                 name="aircraft"
// //                 value={
// //                   formData.aircraft
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             {/* ========================================
// //                 FROM
// //             ======================================== */}

// //             <div className="edit-section-title">
// //               Departure
// //             </div>


// //             <div>
// //               <label>
// //                 From City *
// //               </label>

// //               <input
// //                 type="text"
// //                 name="fromCity"
// //                 value={
// //                   formData.fromCity
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 From Airport *
// //               </label>

// //               <input
// //                 type="text"
// //                 name="fromAirport"
// //                 value={
// //                   formData.fromAirport
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 From Airport Code *
// //               </label>

// //               <input
// //                 type="text"
// //                 name="fromCode"
// //                 value={
// //                   formData.fromCode
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //                 maxLength="3"
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Departure Date *
// //               </label>

// //               <input
// //                 type="date"
// //                 name="departureDate"
// //                 value={
// //                   formData.departureDate
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Departure Time *
// //               </label>

// //               <input
// //                 type="time"
// //                 name="departureTime"
// //                 value={
// //                   formData.departureTime
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Departure Terminal
// //               </label>

// //               <input
// //                 type="text"
// //                 name="departureTerminal"
// //                 value={
// //                   formData.departureTerminal
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //                 placeholder="Terminal 1"
// //               />
// //             </div>


// //             {/* ========================================
// //                 ARRIVAL
// //             ======================================== */}

// //             <div className="edit-section-title">
// //               Arrival
// //             </div>


// //             <div>
// //               <label>
// //                 To City *
// //               </label>

// //               <input
// //                 type="text"
// //                 name="toCity"
// //                 value={
// //                   formData.toCity
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 To Airport *
// //               </label>

// //               <input
// //                 type="text"
// //                 name="toAirport"
// //                 value={
// //                   formData.toAirport
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 To Airport Code *
// //               </label>

// //               <input
// //                 type="text"
// //                 name="toCode"
// //                 value={
// //                   formData.toCode
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //                 maxLength="3"
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Arrival Date *
// //               </label>

// //               <input
// //                 type="date"
// //                 name="arrivalDate"
// //                 value={
// //                   formData.arrivalDate
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Arrival Time *
// //               </label>

// //               <input
// //                 type="time"
// //                 name="arrivalTime"
// //                 value={
// //                   formData.arrivalTime
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Arrival Terminal
// //               </label>

// //               <input
// //                 type="text"
// //                 name="arrivalTerminal"
// //                 value={
// //                   formData.arrivalTerminal
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //                 placeholder="Terminal 3"
// //               />
// //             </div>


// //             {/* ========================================
// //                 FLIGHT DETAILS
// //             ======================================== */}

// //             <div className="edit-section-title">
// //               Flight Details
// //             </div>


// //             <div>
// //               <label>
// //                 Duration *
// //               </label>

// //               <input
// //                 type="text"
// //                 name="duration"
// //                 value={
// //                   formData.duration
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //                 placeholder="3h 15m"
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Stops
// //               </label>

// //               <select
// //                 name="stops"
// //                 value={
// //                   formData.stops
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               >
// //                 <option value="Non-stop">
// //                   Non-stop
// //                 </option>

// //                 <option value="1 Stop">
// //                   1 Stop
// //                 </option>

// //                 <option value="2 Stops">
// //                   2 Stops
// //                 </option>
// //               </select>
// //             </div>


// //             <div>
// //               <label>
// //                 Stop Airport
// //               </label>

// //               <input
// //                 type="text"
// //                 name="stopAirport"
// //                 value={
// //                   formData.stopAirport
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Stop City
// //               </label>

// //               <input
// //                 type="text"
// //                 name="stopCity"
// //                 value={
// //                   formData.stopCity
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Layover Duration
// //               </label>

// //               <input
// //                 type="text"
// //                 name="layoverDuration"
// //                 value={
// //                   formData.layoverDuration
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             {/* ========================================
// //                 CABINS
// //             ======================================== */}

// //             <div className="edit-section-title">
// //               Cabins
// //             </div>

// //           </div>


// //           {/* CABINS OUTSIDE GRID */}

// //           <div className="edit-cabins-container">

// //             {formData.cabins.map(
// //               (cabin, index) => (

// //                 <div
// //                   className="edit-cabin-card"
// //                   key={index}
// //                 >

// //                   <div className="edit-cabin-header">

// //                     <h3>
// //                       Cabin {index + 1}
// //                     </h3>

// //                     {formData.cabins
// //                       .length > 1 && (

// //                       <button
// //                         type="button"
// //                         className="remove-cabin-btn"
// //                         onClick={() =>
// //                           removeCabin(
// //                             index
// //                           )
// //                         }
// //                       >
// //                         Remove
// //                       </button>

// //                     )}

// //                   </div>


// //                   <div className="edit-grid">

// //                     <div>
// //                       <label>
// //                         Cabin
// //                       </label>

// //                       <select
// //                         value={
// //                           cabin.name
// //                         }
// //                         onChange={(e) =>
// //                           handleCabinChange(
// //                             index,
// //                             "name",
// //                             e.target.value
// //                           )
// //                         }
// //                       >
// //                         <option>
// //                           Economy
// //                         </option>

// //                         <option>
// //                           Premium Economy
// //                         </option>

// //                         <option>
// //                           Business
// //                         </option>

// //                         <option>
// //                           First Class
// //                         </option>
// //                       </select>
// //                     </div>


// //                     <div>
// //                       <label>
// //                         Total Seats
// //                       </label>

// //                       <input
// //                         type="number"
// //                         min="0"
// //                         value={
// //                           cabin.totalSeats
// //                         }
// //                         onChange={(e) =>
// //                           handleCabinChange(
// //                             index,
// //                             "totalSeats",
// //                             e.target.value
// //                           )
// //                         }
// //                       />
// //                     </div>


// //                     <div>
// //                       <label>
// //                         Available Seats
// //                       </label>

// //                       <input
// //                         type="number"
// //                         min="0"
// //                         value={
// //                           cabin.availableSeats
// //                         }
// //                         onChange={(e) =>
// //                           handleCabinChange(
// //                             index,
// //                             "availableSeats",
// //                             e.target.value
// //                           )
// //                         }
// //                       />
// //                     </div>


// //                     <div>
// //                       <label>
// //                         Cabin Price
// //                       </label>

// //                       <input
// //                         type="number"
// //                         min="0"
// //                         value={
// //                           cabin.price
// //                         }
// //                         onChange={(e) =>
// //                           handleCabinChange(
// //                             index,
// //                             "price",
// //                             e.target.value
// //                           )
// //                         }
// //                       />
// //                     </div>


// //                     <div>
// //                       <label>
// //                         Baggage
// //                       </label>

// //                       <input
// //                         type="text"
// //                         value={
// //                           cabin.baggage
// //                         }
// //                         onChange={(e) =>
// //                           handleCabinChange(
// //                             index,
// //                             "baggage",
// //                             e.target.value
// //                           )
// //                         }
// //                       />
// //                     </div>

// //                   </div>

// //                 </div>

// //               )
// //             )}

// //             <button
// //               type="button"
// //               className="add-cabin-btn"
// //               onClick={addCabin}
// //             >
// //               + Add Cabin
// //             </button>

// //           </div>


// //           {/* ========================================
// //               PRICING
// //           ======================================== */}

// //           <div className="edit-grid">

// //             <div className="edit-section-title">
// //               Pricing
// //             </div>


// //             <div>
// //               <label>
// //                 Base Fare
// //               </label>

// //               <input
// //                 type="number"
// //                 min="0"
// //                 name="baseFare"
// //                 value={
// //                   formData.baseFare
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Taxes
// //               </label>

// //               <input
// //                 type="number"
// //                 min="0"
// //                 name="taxes"
// //                 value={
// //                   formData.taxes
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Airport Charges
// //               </label>

// //               <input
// //                 type="number"
// //                 min="0"
// //                 name="airportCharges"
// //                 value={
// //                   formData.airportCharges
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Service Fee
// //               </label>

// //               <input
// //                 type="number"
// //                 min="0"
// //                 name="serviceFee"
// //                 value={
// //                   formData.serviceFee
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Discount
// //               </label>

// //               <input
// //                 type="number"
// //                 min="0"
// //                 name="discount"
// //                 value={
// //                   formData.discount
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Final Price *
// //               </label>

// //               <input
// //                 type="number"
// //                 min="0"
// //                 name="finalPrice"
// //                 value={
// //                   formData.finalPrice
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Currency
// //               </label>

// //               <input
// //                 type="text"
// //                 name="currency"
// //                 value={
// //                   formData.currency
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             {/* ========================================
// //                 BAGGAGE
// //             ======================================== */}

// //             <div className="edit-section-title">
// //               Baggage
// //             </div>


// //             <div>
// //               <label>
// //                 Cabin Baggage
// //               </label>

// //               <input
// //                 type="text"
// //                 name="cabinBaggage"
// //                 value={
// //                   formData.cabinBaggage
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Check-in Baggage
// //               </label>

// //               <input
// //                 type="text"
// //                 name="checkinBaggage"
// //                 value={
// //                   formData.checkinBaggage
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Extra Baggage Price
// //               </label>

// //               <input
// //                 type="number"
// //                 min="0"
// //                 name="extraBaggagePrice"
// //                 value={
// //                   formData.extraBaggagePrice
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             {/* ========================================
// //                 BOOKING
// //             ======================================== */}

// //             <div className="edit-section-title">
// //               Booking & Status
// //             </div>


// //             <div>
// //               <label>
// //                 Booking Start Date
// //               </label>

// //               <input
// //                 type="date"
// //                 name="bookingStartDate"
// //                 value={
// //                   formData.bookingStartDate
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Booking Closing Date
// //               </label>

// //               <input
// //                 type="date"
// //                 name="bookingClosingDate"
// //                 value={
// //                   formData.bookingClosingDate
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />
// //             </div>


// //             <div>
// //               <label>
// //                 Status
// //               </label>

// //               <select
// //                 name="status"
// //                 value={
// //                   formData.status
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               >
// //                 <option value="Scheduled">
// //                   Scheduled
// //                 </option>

// //                 <option value="Delayed">
// //                   Delayed
// //                 </option>

// //                 <option value="Cancelled">
// //                   Cancelled
// //                 </option>

// //                 <option value="Boarding">
// //                   Boarding
// //                 </option>

// //                 <option value="Departed">
// //                   Departed
// //                 </option>

// //                 <option value="Arrived">
// //                   Arrived
// //                 </option>
// //               </select>
// //             </div>


// //             {/* ========================================
// //                 SERVICES
// //             ======================================== */}

// //             <div className="edit-section-title">
// //               Services
// //             </div>


// //             <label className="edit-checkbox">
// //               <input
// //                 type="checkbox"
// //                 name="mealAvailable"
// //                 checked={
// //                   formData.mealAvailable
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />

// //               Meal Available
// //             </label>


// //             <label className="edit-checkbox">
// //               <input
// //                 type="checkbox"
// //                 name="wifiAvailable"
// //                 checked={
// //                   formData.wifiAvailable
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />

// //               Wi-Fi Available
// //             </label>


// //             <label className="edit-checkbox">
// //               <input
// //                 type="checkbox"
// //                 name="entertainmentAvailable"
// //                 checked={
// //                   formData.entertainmentAvailable
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />

// //               Entertainment
// //             </label>


// //             <label className="edit-checkbox">
// //               <input
// //                 type="checkbox"
// //                 name="powerAvailable"
// //                 checked={
// //                   formData.powerAvailable
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />

// //               Power Available
// //             </label>


// //             <label className="edit-checkbox">
// //               <input
// //                 type="checkbox"
// //                 name="refundable"
// //                 checked={
// //                   formData.refundable
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />

// //               Refundable
// //             </label>


// //             <label className="edit-checkbox">
// //               <input
// //                 type="checkbox"
// //                 name="changeable"
// //                 checked={
// //                   formData.changeable
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //               />

// //               Changeable
// //             </label>


// //             {/* ========================================
// //                 DESCRIPTION
// //             ======================================== */}

// //             <div className="edit-section-title">
// //               Additional Information
// //             </div>


// //             <div className="edit-full-field">

// //               <label>
// //                 Description
// //               </label>

// //               <textarea
// //                 name="description"
// //                 value={
// //                   formData.description
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //                 rows="3"
// //               />

// //             </div>


// //             <div className="edit-full-field">

// //               <label>
// //                 Special Instructions
// //               </label>

// //               <textarea
// //                 name="specialInstructions"
// //                 value={
// //                   formData.specialInstructions
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //                 rows="3"
// //               />

// //             </div>

// //           </div>


// //           {/* ERROR */}

// //           {error && (
// //             <div className="edit-error">
// //               {error}
// //             </div>
// //           )}


// //           {/* BUTTONS */}

// //           <div className="edit-modal-buttons">

// //             <button
// //               type="button"
// //               className="edit-cancel-btn"
// //               onClick={
// //                 closeModal
// //               }
// //               disabled={loading}
// //             >
// //               Cancel
// //             </button>

// //             <button
// //               type="submit"
// //               className="update-btn"
// //               disabled={loading}
// //             >
// //               {loading
// //                 ? "Updating..."
// //                 : "Update Flight"}
// //             </button>

// //           </div>

// //         </form>

// //       </div>

// //     </div>
// //   );
// // }

// // export default EditFlight;



// import "./EditFlight.css";

// import { useEffect, useState } from "react";

// function EditFlight({
//   flight,
//   closeModal,
//   onSuccess,
// }) {
//   // =====================================================
//   // FORM DATA
//   // =====================================================

//   const [formData, setFormData] = useState({
//     airline: "",
//     flightNo: "",
//     flightType: "Domestic",
//     aircraft: "",

//     fromCity: "",
//     fromAirport: "",
//     fromCode: "",

//     toCity: "",
//     toAirport: "",
//     toCode: "",

//     departureDate: "",
//     departureTime: "",
//     departureTerminal: "",

//     arrivalDate: "",
//     arrivalTime: "",
//     arrivalTerminal: "",

//     duration: "",
//     stops: "Non-stop",
//     stopAirport: "",
//     stopCity: "",
//     layoverDuration: "",

//     cabins: [
//       {
//         name: "Economy",
//         totalSeats: "",
//         availableSeats: "",
//         price: "",
//         baggage: "15 KG",
//       },
//     ],

//     baseFare: "",
//     taxes: "",
//     airportCharges: "",
//     serviceFee: "",
//     discount: "",
//     finalPrice: "",
//     currency: "INR",

//     cabinBaggage: "7 KG",
//     checkinBaggage: "15 KG",
//     extraBaggagePrice: "",

//     mealAvailable: false,
//     wifiAvailable: false,
//     entertainmentAvailable: false,
//     powerAvailable: false,

//     bookingStartDate: "",
//     bookingClosingDate: "",

//     refundable: false,
//     changeable: false,

//     status: "Scheduled",

//     description: "",
//     specialInstructions: "",
//   });

//   const [loading, setLoading] =
//     useState(false);

//   const [error, setError] =
//     useState("");

//   // =====================================================
//   // LOAD SELECTED FLIGHT
//   // =====================================================

//   useEffect(() => {
//     if (!flight) return;

//     setFormData({
//       airline:
//         flight.airline || "",

//       flightNo:
//         flight.flightNo || "",

//       flightType:
//         flight.flightType ||
//         "Domestic",

//       aircraft:
//         flight.aircraft || "",

//       fromCity:
//         flight.fromCity || "",

//       fromAirport:
//         flight.fromAirport || "",

//       fromCode:
//         flight.fromCode || "",

//       toCity:
//         flight.toCity || "",

//       toAirport:
//         flight.toAirport || "",

//       toCode:
//         flight.toCode || "",

//       departureDate:
//         flight.departureDate || "",

//       departureTime:
//         flight.departureTime || "",

//       departureTerminal:
//         flight.departureTerminal || "",

//       arrivalDate:
//         flight.arrivalDate || "",

//       arrivalTime:
//         flight.arrivalTime || "",

//       arrivalTerminal:
//         flight.arrivalTerminal || "",

//       duration:
//         flight.duration || "",

//       stops:
//         flight.stops || "Non-stop",

//       stopAirport:
//         flight.stopAirport || "",

//       stopCity:
//         flight.stopCity || "",

//       layoverDuration:
//         flight.layoverDuration || "",

//       cabins:
//         Array.isArray(flight.cabins) &&
//         flight.cabins.length > 0
//           ? flight.cabins.map((cabin) => ({
//               name:
//                 cabin.name ||
//                 "Economy",

//               totalSeats:
//                 cabin.totalSeats ?? "",

//               availableSeats:
//                 cabin.availableSeats ?? "",

//               price:
//                 cabin.price ?? "",

//               baggage:
//                 cabin.baggage ||
//                 "15 KG",
//             }))
//           : [
//               {
//                 name: "Economy",
//                 totalSeats: "",
//                 availableSeats: "",
//                 price: "",
//                 baggage: "15 KG",
//               },
//             ],

//       baseFare:
//         flight.baseFare ?? "",

//       taxes:
//         flight.taxes ?? "",

//       airportCharges:
//         flight.airportCharges ?? "",

//       serviceFee:
//         flight.serviceFee ?? "",

//       discount:
//         flight.discount ?? "",

//       finalPrice:
//         flight.finalPrice ?? "",

//       currency:
//         flight.currency || "INR",

//       cabinBaggage:
//         flight.cabinBaggage ||
//         "7 KG",

//       checkinBaggage:
//         flight.checkinBaggage ||
//         "15 KG",

//       extraBaggagePrice:
//         flight.extraBaggagePrice ?? "",

//       mealAvailable:
//         Boolean(
//           flight.mealAvailable
//         ),

//       wifiAvailable:
//         Boolean(
//           flight.wifiAvailable
//         ),

//       entertainmentAvailable:
//         Boolean(
//           flight.entertainmentAvailable
//         ),

//       powerAvailable:
//         Boolean(
//           flight.powerAvailable
//         ),

//       bookingStartDate:
//         flight.bookingStartDate ||
//         "",

//       bookingClosingDate:
//         flight.bookingClosingDate ||
//         "",

//       refundable:
//         Boolean(
//           flight.refundable
//         ),

//       changeable:
//         Boolean(
//           flight.changeable
//         ),

//       status:
//         flight.status ||
//         "Scheduled",

//       description:
//         flight.description || "",

//       specialInstructions:
//         flight.specialInstructions ||
//         "",
//     });
//   }, [flight]);

//   // =====================================================
//   // NORMAL INPUT CHANGE
//   // =====================================================

//   const handleChange = (e) => {
//     const {
//       name,
//       value,
//       type,
//       checked,
//     } = e.target;

//     setFormData((previous) => ({
//       ...previous,

//       [name]:
//         type === "checkbox"
//           ? checked
//           : value,
//     }));
//   };

//   // =====================================================
//   // CABIN CHANGE
//   // =====================================================

//   const handleCabinChange = (
//     index,
//     field,
//     value
//   ) => {
//     setFormData((previous) => {
//       const cabins = [
//         ...previous.cabins,
//       ];

//       cabins[index] = {
//         ...cabins[index],
//         [field]: value,
//       };

//       return {
//         ...previous,
//         cabins,
//       };
//     });
//   };

//   // =====================================================
//   // ADD CABIN
//   // =====================================================

//   const addCabin = () => {
//     setFormData((previous) => ({
//       ...previous,

//       cabins: [
//         ...previous.cabins,

//         {
//           name: "Economy",
//           totalSeats: "",
//           availableSeats: "",
//           price: "",
//           baggage: "15 KG",
//         },
//       ],
//     }));
//   };

//   // =====================================================
//   // REMOVE CABIN
//   // =====================================================

//   const removeCabin = (index) => {
//     setFormData((previous) => {
//       if (
//         previous.cabins.length <= 1
//       ) {
//         return previous;
//       }

//       return {
//         ...previous,

//         cabins:
//           previous.cabins.filter(
//             (_, cabinIndex) =>
//               cabinIndex !== index
//           ),
//       };
//     });
//   };

//   // =====================================================
//   // SUBMIT
//   // =====================================================

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!flight?._id) {
//       setError(
//         "Flight ID not found."
//       );
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const token =
//         localStorage.getItem(
//           "token"
//         );

//       if (!token) {
//         throw new Error(
//           "Admin login session expired. Please login again."
//         );
//       }

//       // =================================================
//       // PREPARE CABINS
//       // =================================================

//       const cleanedCabins =
//         formData.cabins.map(
//           (cabin) => ({
//             name: cabin.name,

//             totalSeats:
//               Number(
//                 cabin.totalSeats
//               ),

//             availableSeats:
//               Number(
//                 cabin.availableSeats
//               ),

//             price:
//               Number(cabin.price),

//             baggage:
//               cabin.baggage ||
//               "15 KG",
//           })
//         );

//       // =================================================
//       // PREPARE UPDATE DATA
//       // =================================================

//       const updateData = {
//         airline:
//           formData.airline.trim(),

//         flightNo:
//           formData.flightNo
//             .trim()
//             .toUpperCase(),

//         flightType:
//           formData.flightType,

//         aircraft:
//           formData.aircraft.trim(),

//         fromCity:
//           formData.fromCity.trim(),

//         fromAirport:
//           formData.fromAirport.trim(),

//         fromCode:
//           formData.fromCode
//             .trim()
//             .toUpperCase(),

//         toCity:
//           formData.toCity.trim(),

//         toAirport:
//           formData.toAirport.trim(),

//         toCode:
//           formData.toCode
//             .trim()
//             .toUpperCase(),

//         departureDate:
//           formData.departureDate,

//         departureTime:
//           formData.departureTime,

//         departureTerminal:
//           formData.departureTerminal,

//         arrivalDate:
//           formData.arrivalDate,

//         arrivalTime:
//           formData.arrivalTime,

//         arrivalTerminal:
//           formData.arrivalTerminal,

//         duration:
//           formData.duration.trim(),

//         stops:
//           formData.stops,

//         stopAirport:
//           formData.stopAirport,

//         stopCity:
//           formData.stopCity,

//         layoverDuration:
//           formData.layoverDuration,

//         cabins:
//           cleanedCabins,

//         baseFare:
//           Number(
//             formData.baseFare || 0
//           ),

//         taxes:
//           Number(
//             formData.taxes || 0
//           ),

//         airportCharges:
//           Number(
//             formData.airportCharges || 0
//           ),

//         serviceFee:
//           Number(
//             formData.serviceFee || 0
//           ),

//         discount:
//           Number(
//             formData.discount || 0
//           ),

//         finalPrice:
//           Number(
//             formData.finalPrice || 0
//           ),

//         currency:
//           formData.currency,

//         cabinBaggage:
//           formData.cabinBaggage,

//         checkinBaggage:
//           formData.checkinBaggage,

//         extraBaggagePrice:
//           Number(
//             formData.extraBaggagePrice ||
//               0
//           ),

//         mealAvailable:
//           formData.mealAvailable,

//         wifiAvailable:
//           formData.wifiAvailable,

//         entertainmentAvailable:
//           formData.entertainmentAvailable,

//         powerAvailable:
//           formData.powerAvailable,

//         bookingStartDate:
//           formData.bookingStartDate,

//         bookingClosingDate:
//           formData.bookingClosingDate,

//         refundable:
//           formData.refundable,

//         changeable:
//           formData.changeable,

//         status:
//           formData.status,

//         description:
//           formData.description,

//         specialInstructions:
//           formData.specialInstructions,
//       };

//       console.log(
//         "UPDATING FLIGHT:",
//         flight._id
//       );

//       console.log(
//         "UPDATE DATA:",
//         updateData
//       );

//       // =================================================
//       // PUT API
//       // =================================================

//       const response =
//         await fetch(
//           `http://localhost:5000/api/flights/${flight._id}`,
//           {
//             method: "PUT",

//             headers: {
//               "Content-Type":
//                 "application/json",

//               Authorization:
//                 `Bearer ${token}`,
//             },

//             body:
//               JSON.stringify(
//                 updateData
//               ),
//           }
//         );

//       const data =
//         await response.json();

//       console.log(
//         "UPDATE RESPONSE:",
//         data
//       );

//       if (!response.ok) {
//         throw new Error(
//           data.message ||
//             "Flight update failed."
//         );
//       }

//       // =================================================
//       // SUCCESS
//       // =================================================

//       alert(
//         "Flight updated successfully ✅"
//       );

//       if (onSuccess) {
//         onSuccess(
//           data.flight
//         );
//       } else {
//         closeModal();
//       }

//     } catch (error) {
//       console.error(
//         "Update Flight Error:",
//         error
//       );

//       setError(
//         error.message ||
//           "Unable to update flight."
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   // =====================================================
//   // NO FLIGHT
//   // =====================================================

//   if (!flight) {
//     return null;
//   }

//   return (
//     <div className="edit-modal-overlay">

//       <div className="edit-flight-modal">

//         {/* HEADER */}

//         <div className="edit-modal-header">

//           <div>
//             <h2>
//               Edit Flight
//             </h2>

//             <p>
//               Update flight information
//             </p>
//           </div>

//           <button
//             type="button"
//             className="edit-close-btn"
//             onClick={closeModal}
//             disabled={loading}
//           >
//             ✕
//           </button>

//         </div>


//         <form
//           onSubmit={
//             handleSubmit
//           }
//         >

//           <div className="edit-grid">

//             {/* ========================================
//                 BASIC INFORMATION
//             ======================================== */}

//             <div className="edit-section-title">
//               Basic Information
//             </div>


//             <div>
//               <label>
//                 Airline *
//               </label>

//               <input
//                 type="text"
//                 name="airline"
//                 value={
//                   formData.airline
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Flight Number *
//               </label>

//               <input
//                 type="text"
//                 name="flightNo"
//                 value={
//                   formData.flightNo
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Flight Type
//               </label>

//               <select
//                 name="flightType"
//                 value={
//                   formData.flightType
//                 }
//                 onChange={
//                   handleChange
//                 }
//               >
//                 <option value="Domestic">
//                   Domestic
//                 </option>

//                 <option value="International">
//                   International
//                 </option>
//               </select>
//             </div>


//             <div>
//               <label>
//                 Aircraft *
//               </label>

//               <input
//                 type="text"
//                 name="aircraft"
//                 value={
//                   formData.aircraft
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             {/* ========================================
//                 FROM
//             ======================================== */}

//             <div className="edit-section-title">
//               Departure
//             </div>


//             <div>
//               <label>
//                 From City *
//               </label>

//               <input
//                 type="text"
//                 name="fromCity"
//                 value={
//                   formData.fromCity
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 From Airport *
//               </label>

//               <input
//                 type="text"
//                 name="fromAirport"
//                 value={
//                   formData.fromAirport
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 From Airport Code *
//               </label>

//               <input
//                 type="text"
//                 name="fromCode"
//                 value={
//                   formData.fromCode
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 maxLength="3"
//               />
//             </div>


//             <div>
//               <label>
//                 Departure Date *
//               </label>

//               <input
//                 type="date"
//                 name="departureDate"
//                 value={
//                   formData.departureDate
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Departure Time *
//               </label>

//               <input
//                 type="time"
//                 name="departureTime"
//                 value={
//                   formData.departureTime
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Departure Terminal
//               </label>

//               <input
//                 type="text"
//                 name="departureTerminal"
//                 value={
//                   formData.departureTerminal
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder="Terminal 1"
//               />
//             </div>


//             {/* ========================================
//                 ARRIVAL
//             ======================================== */}

//             <div className="edit-section-title">
//               Arrival
//             </div>


//             <div>
//               <label>
//                 To City *
//               </label>

//               <input
//                 type="text"
//                 name="toCity"
//                 value={
//                   formData.toCity
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 To Airport *
//               </label>

//               <input
//                 type="text"
//                 name="toAirport"
//                 value={
//                   formData.toAirport
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 To Airport Code *
//               </label>

//               <input
//                 type="text"
//                 name="toCode"
//                 value={
//                   formData.toCode
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 maxLength="3"
//               />
//             </div>


//             <div>
//               <label>
//                 Arrival Date *
//               </label>

//               <input
//                 type="date"
//                 name="arrivalDate"
//                 value={
//                   formData.arrivalDate
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Arrival Time *
//               </label>

//               <input
//                 type="time"
//                 name="arrivalTime"
//                 value={
//                   formData.arrivalTime
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Arrival Terminal
//               </label>

//               <input
//                 type="text"
//                 name="arrivalTerminal"
//                 value={
//                   formData.arrivalTerminal
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder="Terminal 3"
//               />
//             </div>


//             {/* ========================================
//                 FLIGHT DETAILS
//             ======================================== */}

//             <div className="edit-section-title">
//               Flight Details
//             </div>


//             <div>
//               <label>
//                 Duration *
//               </label>

//               <input
//                 type="text"
//                 name="duration"
//                 value={
//                   formData.duration
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder="3h 15m"
//               />
//             </div>


//             <div>
//               <label>
//                 Stops
//               </label>

//               <select
//                 name="stops"
//                 value={
//                   formData.stops
//                 }
//                 onChange={
//                   handleChange
//                 }
//               >
//                 <option value="Non-stop">
//                   Non-stop
//                 </option>

//                 <option value="1 Stop">
//                   1 Stop
//                 </option>

//                 <option value="2 Stops">
//                   2 Stops
//                 </option>
//               </select>
//             </div>


//             <div>
//               <label>
//                 Stop Airport
//               </label>

//               <input
//                 type="text"
//                 name="stopAirport"
//                 value={
//                   formData.stopAirport
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Stop City
//               </label>

//               <input
//                 type="text"
//                 name="stopCity"
//                 value={
//                   formData.stopCity
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Layover Duration
//               </label>

//               <input
//                 type="text"
//                 name="layoverDuration"
//                 value={
//                   formData.layoverDuration
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             {/* ========================================
//                 CABINS
//             ======================================== */}

//             <div className="edit-section-title">
//               Cabins
//             </div>

//           </div>


//           {/* CABINS OUTSIDE GRID */}

//           <div className="edit-cabins-container">

//             {formData.cabins.map(
//               (cabin, index) => (

//                 <div
//                   className="edit-cabin-card"
//                   key={index}
//                 >

//                   <div className="edit-cabin-header">

//                     <h3>
//                       Cabin {index + 1}
//                     </h3>

//                     {formData.cabins
//                       .length > 1 && (

//                       <button
//                         type="button"
//                         className="remove-cabin-btn"
//                         onClick={() =>
//                           removeCabin(
//                             index
//                           )
//                         }
//                       >
//                         Remove
//                       </button>

//                     )}

//                   </div>


//                   <div className="edit-grid">

//                     <div>
//                       <label>
//                         Cabin
//                       </label>

//                       <select
//                         value={
//                           cabin.name
//                         }
//                         onChange={(e) =>
//                           handleCabinChange(
//                             index,
//                             "name",
//                             e.target.value
//                           )
//                         }
//                       >
//                         <option>
//                           Economy
//                         </option>

//                         <option>
//                           Premium Economy
//                         </option>

//                         <option>
//                           Business
//                         </option>

//                         <option>
//                           First Class
//                         </option>
//                       </select>
//                     </div>


//                     <div>
//                       <label>
//                         Total Seats
//                       </label>

//                       <input
//                         type="number"
//                         min="0"
//                         value={
//                           cabin.totalSeats
//                         }
//                         onChange={(e) =>
//                           handleCabinChange(
//                             index,
//                             "totalSeats",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>


//                     <div>
//                       <label>
//                         Available Seats
//                       </label>

//                       <input
//                         type="number"
//                         min="0"
//                         value={
//                           cabin.availableSeats
//                         }
//                         onChange={(e) =>
//                           handleCabinChange(
//                             index,
//                             "availableSeats",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>


//                     <div>
//                       <label>
//                         Cabin Price
//                       </label>

//                       <input
//                         type="number"
//                         min="0"
//                         value={
//                           cabin.price
//                         }
//                         onChange={(e) =>
//                           handleCabinChange(
//                             index,
//                             "price",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>


//                     <div>
//                       <label>
//                         Baggage
//                       </label>

//                       <input
//                         type="text"
//                         value={
//                           cabin.baggage
//                         }
//                         onChange={(e) =>
//                           handleCabinChange(
//                             index,
//                             "baggage",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                   </div>

//                 </div>

//               )
//             )}

//             <button
//               type="button"
//               className="add-cabin-btn"
//               onClick={addCabin}
//             >
//               + Add Cabin
//             </button>

//           </div>


//           {/* ========================================
//               PRICING
//           ======================================== */}

//           <div className="edit-grid">

//             <div className="edit-section-title">
//               Pricing
//             </div>


//             <div>
//               <label>
//                 Base Fare
//               </label>

//               <input
//                 type="number"
//                 min="0"
//                 name="baseFare"
//                 value={
//                   formData.baseFare
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Taxes
//               </label>

//               <input
//                 type="number"
//                 min="0"
//                 name="taxes"
//                 value={
//                   formData.taxes
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Airport Charges
//               </label>

//               <input
//                 type="number"
//                 min="0"
//                 name="airportCharges"
//                 value={
//                   formData.airportCharges
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Service Fee
//               </label>

//               <input
//                 type="number"
//                 min="0"
//                 name="serviceFee"
//                 value={
//                   formData.serviceFee
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Discount
//               </label>

//               <input
//                 type="number"
//                 min="0"
//                 name="discount"
//                 value={
//                   formData.discount
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Final Price *
//               </label>

//               <input
//                 type="number"
//                 min="0"
//                 name="finalPrice"
//                 value={
//                   formData.finalPrice
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Currency
//               </label>

//               <input
//                 type="text"
//                 name="currency"
//                 value={
//                   formData.currency
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             {/* ========================================
//                 BAGGAGE
//             ======================================== */}

//             <div className="edit-section-title">
//               Baggage
//             </div>


//             <div>
//               <label>
//                 Cabin Baggage
//               </label>

//               <input
//                 type="text"
//                 name="cabinBaggage"
//                 value={
//                   formData.cabinBaggage
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Check-in Baggage
//               </label>

//               <input
//                 type="text"
//                 name="checkinBaggage"
//                 value={
//                   formData.checkinBaggage
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Extra Baggage Price
//               </label>

//               <input
//                 type="number"
//                 min="0"
//                 name="extraBaggagePrice"
//                 value={
//                   formData.extraBaggagePrice
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             {/* ========================================
//                 BOOKING
//             ======================================== */}

//             <div className="edit-section-title">
//               Booking & Status
//             </div>


//             <div>
//               <label>
//                 Booking Start Date
//               </label>

//               <input
//                 type="date"
//                 name="bookingStartDate"
//                 value={
//                   formData.bookingStartDate
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Booking Closing Date
//               </label>

//               <input
//                 type="date"
//                 name="bookingClosingDate"
//                 value={
//                   formData.bookingClosingDate
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />
//             </div>


//             <div>
//               <label>
//                 Status
//               </label>

//               <select
//                 name="status"
//                 value={
//                   formData.status
//                 }
//                 onChange={
//                   handleChange
//                 }
//               >
//                 <option value="Scheduled">
//                   Scheduled
//                 </option>

//                 <option value="Delayed">
//                   Delayed
//                 </option>

//                 <option value="Cancelled">
//                   Cancelled
//                 </option>

//                 <option value="Boarding">
//                   Boarding
//                 </option>

//                 <option value="Departed">
//                   Departed
//                 </option>

//                 <option value="Arrived">
//                   Arrived
//                 </option>
//               </select>
//             </div>


//             {/* ========================================
//                 SERVICES
//             ======================================== */}

//             <div className="edit-section-title">
//               Services
//             </div>


//             <label className="edit-checkbox">
//               <input
//                 type="checkbox"
//                 name="mealAvailable"
//                 checked={
//                   formData.mealAvailable
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />

//               Meal Available
//             </label>


//             <label className="edit-checkbox">
//               <input
//                 type="checkbox"
//                 name="wifiAvailable"
//                 checked={
//                   formData.wifiAvailable
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />

//               Wi-Fi Available
//             </label>


//             <label className="edit-checkbox">
//               <input
//                 type="checkbox"
//                 name="entertainmentAvailable"
//                 checked={
//                   formData.entertainmentAvailable
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />

//               Entertainment
//             </label>


//             <label className="edit-checkbox">
//               <input
//                 type="checkbox"
//                 name="powerAvailable"
//                 checked={
//                   formData.powerAvailable
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />

//               Power Available
//             </label>


//             <label className="edit-checkbox">
//               <input
//                 type="checkbox"
//                 name="refundable"
//                 checked={
//                   formData.refundable
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />

//               Refundable
//             </label>


//             <label className="edit-checkbox">
//               <input
//                 type="checkbox"
//                 name="changeable"
//                 checked={
//                   formData.changeable
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />

//               Changeable
//             </label>


//             {/* ========================================
//                 DESCRIPTION
//             ======================================== */}

//             <div className="edit-section-title">
//               Additional Information
//             </div>


//             <div className="edit-full-field">

//               <label>
//                 Description
//               </label>

//               <textarea
//                 name="description"
//                 value={
//                   formData.description
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 rows="3"
//               />

//             </div>


//             <div className="edit-full-field">

//               <label>
//                 Special Instructions
//               </label>

//               <textarea
//                 name="specialInstructions"
//                 value={
//                   formData.specialInstructions
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 rows="3"
//               />

//             </div>

//           </div>


//           {/* ERROR */}

//           {error && (
//             <div className="edit-error">
//               {error}
//             </div>
//           )}


//           {/* BUTTONS */}

//           <div className="edit-modal-buttons">

//             <button
//               type="button"
//               className="edit-cancel-btn"
//               onClick={
//                 closeModal
//               }
//               disabled={loading}
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="update-btn"
//               disabled={loading}
//             >
//               {loading
//                 ? "Updating..."
//                 : "Update Flight"}
//             </button>

//           </div>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default EditFlight;


import "./EditFlight.css";
import { useEffect, useState } from "react";

function EditFlight({ flight, closeModal, onSuccess }) {
  const [formData, setFormData] = useState({
    airline: "",
    flightNo: "",
    flightType: "Domestic",
    aircraft: "",

    fromCity: "",
    fromAirport: "",
    fromCode: "",

    toCity: "",
    toAirport: "",
    toCode: "",

    departureDate: "",
    departureTime: "",
    departureTerminal: "",

    arrivalDate: "",
    arrivalTime: "",
    arrivalTerminal: "",

    duration: "",
    stops: "Non-stop",
    stopAirport: "",
    stopCity: "",
    layoverDuration: "",

    cabins: [
      {
        name: "Economy",
        totalSeats: "",
        availableSeats: "",
        price: "",
        baggage: "15 KG",
      },
    ],

    baseFare: "",
    taxes: "",
    airportCharges: "",
    serviceFee: "",
    discount: "",
    finalPrice: "",
    currency: "INR",

    cabinBaggage: "7 KG",
    checkinBaggage: "15 KG",
    extraBaggagePrice: "",

    mealAvailable: false,
    wifiAvailable: false,
    entertainmentAvailable: false,
    powerAvailable: false,

    bookingStartDate: "",
    bookingClosingDate: "",

    refundable: false,
    changeable: false,

    status: "Scheduled",
    description: "",
    specialInstructions: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ==========================================
  // LOAD FLIGHT DATA
  // ==========================================

  useEffect(() => {
    if (!flight) return;

    setFormData({
      airline: flight.airline || "",
      flightNo: flight.flightNo || "",
      flightType: flight.flightType || "Domestic",
      aircraft: flight.aircraft || "",

      fromCity: flight.fromCity || "",
      fromAirport: flight.fromAirport || "",
      fromCode: flight.fromCode || "",

      toCity: flight.toCity || "",
      toAirport: flight.toAirport || "",
      toCode: flight.toCode || "",

      departureDate: flight.departureDate || "",
      departureTime: flight.departureTime || "",
      departureTerminal: flight.departureTerminal || "",

      arrivalDate: flight.arrivalDate || "",
      arrivalTime: flight.arrivalTime || "",
      arrivalTerminal: flight.arrivalTerminal || "",

      duration: flight.duration || "",
      stops: flight.stops || "Non-stop",
      stopAirport: flight.stopAirport || "",
      stopCity: flight.stopCity || "",
      layoverDuration: flight.layoverDuration || "",

      cabins:
        Array.isArray(flight.cabins) && flight.cabins.length
          ? flight.cabins.map((cabin) => ({
              name: cabin.name || "Economy",
              totalSeats: cabin.totalSeats ?? "",
              availableSeats: cabin.availableSeats ?? "",
              price: cabin.price ?? "",
              baggage: cabin.baggage || "15 KG",
            }))
          : [
              {
                name: "Economy",
                totalSeats: "",
                availableSeats: "",
                price: "",
                baggage: "15 KG",
              },
            ],

      baseFare: flight.baseFare ?? "",
      taxes: flight.taxes ?? "",
      airportCharges: flight.airportCharges ?? "",
      serviceFee: flight.serviceFee ?? "",
      discount: flight.discount ?? "",
      finalPrice: flight.finalPrice ?? "",
      currency: flight.currency || "INR",

      cabinBaggage: flight.cabinBaggage || "7 KG",
      checkinBaggage: flight.checkinBaggage || "15 KG",
      extraBaggagePrice: flight.extraBaggagePrice ?? "",

      mealAvailable: Boolean(flight.mealAvailable),
      wifiAvailable: Boolean(flight.wifiAvailable),
      entertainmentAvailable: Boolean(
        flight.entertainmentAvailable
      ),
      powerAvailable: Boolean(flight.powerAvailable),

      bookingStartDate: flight.bookingStartDate || "",
      bookingClosingDate: flight.bookingClosingDate || "",

      refundable: Boolean(flight.refundable),
      changeable: Boolean(flight.changeable),

      status: flight.status || "Scheduled",
      description: flight.description || "",
      specialInstructions: flight.specialInstructions || "",
    });
  }, [flight]);

  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ==========================================
  // CABIN CHANGE
  // ==========================================

  const handleCabinChange = (index, field, value) => {
    setFormData((prev) => {
      const cabins = [...prev.cabins];

      cabins[index] = {
        ...cabins[index],
        [field]: value,
      };

      return {
        ...prev,
        cabins,
      };
    });
  };

  // ==========================================
  // ADD CABIN
  // ==========================================

  const addCabin = () => {
    setFormData((prev) => ({
      ...prev,
      cabins: [
        ...prev.cabins,
        {
          name: "Economy",
          totalSeats: "",
          availableSeats: "",
          price: "",
          baggage: "15 KG",
        },
      ],
    }));
  };

  // ==========================================
  // REMOVE CABIN
  // ==========================================

  const removeCabin = (index) => {
    if (formData.cabins.length === 1) return;

    setFormData((prev) => ({
      ...prev,
      cabins: prev.cabins.filter(
        (_, i) => i !== index
      ),
    }));
  };

  // ==========================================
  // UPDATE FLIGHT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!flight?._id) {
      setError("Flight ID not found.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("adminToken");

      if (!token) {
        throw new Error(
          "Login session expired. Please login again."
        );
      }

      const updateData = {
        ...formData,

        flightNo: formData.flightNo
          .trim()
          .toUpperCase(),

        fromCode: formData.fromCode
          .trim()
          .toUpperCase(),

        toCode: formData.toCode
          .trim()
          .toUpperCase(),

        cabins: formData.cabins.map((cabin) => ({
          name: cabin.name,
          totalSeats: Number(cabin.totalSeats || 0),
          availableSeats: Number(
            cabin.availableSeats || 0
          ),
          price: Number(cabin.price || 0),
          baggage: cabin.baggage || "15 KG",
        })),

        baseFare: Number(formData.baseFare || 0),
        taxes: Number(formData.taxes || 0),
        airportCharges: Number(
          formData.airportCharges || 0
        ),
        serviceFee: Number(
          formData.serviceFee || 0
        ),
        discount: Number(
          formData.discount || 0
        ),
        finalPrice: Number(
          formData.finalPrice || 0
        ),
        extraBaggagePrice: Number(
          formData.extraBaggagePrice || 0
        ),
      };

      console.log("UPDATE FLIGHT ID:", flight._id);
      console.log("UPDATE DATA:", updateData);

      const response = await fetch(
        `http://localhost:5000/api/flights/${flight._id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify(updateData),
        }
      );

      const data = await response.json();

      console.log("UPDATE RESPONSE:", data);

      if (!response.ok) {
        throw new Error(
          data.message || "Flight update failed."
        );
      }

      alert("Flight updated successfully ✅");

      if (onSuccess) {
        onSuccess(data.flight);
      }

      closeModal();
    } catch (error) {
      console.error("Update Flight Error:", error);

      setError(
        error.message || "Unable to update flight."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!flight) return null;

  return (
    <div className="edit-modal-overlay">
      <div className="edit-flight-modal">

        <div className="edit-modal-header">
          <div>
            <h2>Edit Flight</h2>
            <p>Update flight information</p>
          </div>

          <button
            type="button"
            className="edit-close-btn"
            onClick={closeModal}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="edit-grid">

            <div className="edit-section-title">
              Basic Information
            </div>

            <div>
              <label>Airline *</label>
              <input
                name="airline"
                value={formData.airline}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Flight Number *</label>
              <input
                name="flightNo"
                value={formData.flightNo}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Flight Type</label>
              <select
                name="flightType"
                value={formData.flightType}
                onChange={handleChange}
              >
                <option value="Domestic">
                  Domestic
                </option>
                <option value="International">
                  International
                </option>
              </select>
            </div>

            <div>
              <label>Aircraft *</label>
              <input
                name="aircraft"
                value={formData.aircraft}
                onChange={handleChange}
              />
            </div>

            <div className="edit-section-title">
              Departure
            </div>

            <div>
              <label>From City *</label>
              <input
                name="fromCity"
                value={formData.fromCity}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>From Airport *</label>
              <input
                name="fromAirport"
                value={formData.fromAirport}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>From Code *</label>
              <input
                name="fromCode"
                maxLength="3"
                value={formData.fromCode}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Departure Date *</label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Departure Time *</label>
              <input
                type="time"
                name="departureTime"
                value={formData.departureTime}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Departure Terminal</label>
              <input
                name="departureTerminal"
                value={formData.departureTerminal}
                onChange={handleChange}
              />
            </div>

            <div className="edit-section-title">
              Arrival
            </div>

            <div>
              <label>To City *</label>
              <input
                name="toCity"
                value={formData.toCity}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>To Airport *</label>
              <input
                name="toAirport"
                value={formData.toAirport}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>To Code *</label>
              <input
                name="toCode"
                maxLength="3"
                value={formData.toCode}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Arrival Date *</label>
              <input
                type="date"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Arrival Time *</label>
              <input
                type="time"
                name="arrivalTime"
                value={formData.arrivalTime}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Arrival Terminal</label>
              <input
                name="arrivalTerminal"
                value={formData.arrivalTerminal}
                onChange={handleChange}
              />
            </div>

            <div className="edit-section-title">
              Flight Details
            </div>

            <div>
              <label>Duration *</label>
              <input
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="3h 15m"
              />
            </div>

            <div>
              <label>Stops</label>
              <select
                name="stops"
                value={formData.stops}
                onChange={handleChange}
              >
                <option>Non-stop</option>
                <option>1 Stop</option>
                <option>2 Stops</option>
              </select>
            </div>

            <div>
              <label>Stop Airport</label>
              <input
                name="stopAirport"
                value={formData.stopAirport}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Stop City</label>
              <input
                name="stopCity"
                value={formData.stopCity}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Layover Duration</label>
              <input
                name="layoverDuration"
                value={formData.layoverDuration}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* CABINS */}

          <div className="edit-section-title">
            Cabins
          </div>

          <div className="edit-cabins-container">

            {formData.cabins.map(
              (cabin, index) => (
                <div
                  className="edit-cabin-card"
                  key={index}
                >
                  <div className="edit-cabin-header">
                    <h3>
                      Cabin {index + 1}
                    </h3>

                    {formData.cabins.length > 1 && (
                      <button
                        type="button"
                        className="remove-cabin-btn"
                        onClick={() =>
                          removeCabin(index)
                        }
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="edit-grid">

                    <div>
                      <label>Cabin</label>
                      <select
                        value={cabin.name}
                        onChange={(e) =>
                          handleCabinChange(
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      >
                        <option>Economy</option>
                        <option>
                          Premium Economy
                        </option>
                        <option>Business</option>
                        <option>
                          First Class
                        </option>
                      </select>
                    </div>

                    <div>
                      <label>Total Seats</label>
                      <input
                        type="number"
                        value={cabin.totalSeats}
                        onChange={(e) =>
                          handleCabinChange(
                            index,
                            "totalSeats",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div>
                      <label>Available Seats</label>
                      <input
                        type="number"
                        value={cabin.availableSeats}
                        onChange={(e) =>
                          handleCabinChange(
                            index,
                            "availableSeats",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div>
                      <label>Cabin Price</label>
                      <input
                        type="number"
                        value={cabin.price}
                        onChange={(e) =>
                          handleCabinChange(
                            index,
                            "price",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div>
                      <label>Baggage</label>
                      <input
                        value={cabin.baggage}
                        onChange={(e) =>
                          handleCabinChange(
                            index,
                            "baggage",
                            e.target.value
                          )
                        }
                      />
                    </div>

                  </div>
                </div>
              )
            )}

            <button
              type="button"
              className="add-cabin-btn"
              onClick={addCabin}
            >
              + Add Cabin
            </button>

          </div>

          {/* PRICING */}

          <div className="edit-grid">

            <div className="edit-section-title">
              Pricing
            </div>

            <div>
              <label>Base Fare</label>
              <input
                type="number"
                name="baseFare"
                value={formData.baseFare}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Taxes</label>
              <input
                type="number"
                name="taxes"
                value={formData.taxes}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Airport Charges</label>
              <input
                type="number"
                name="airportCharges"
                value={formData.airportCharges}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Service Fee</label>
              <input
                type="number"
                name="serviceFee"
                value={formData.serviceFee}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Discount</label>
              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Final Price *</label>
              <input
                type="number"
                name="finalPrice"
                value={formData.finalPrice}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Currency</label>
              <input
                name="currency"
                value={formData.currency}
                onChange={handleChange}
              />
            </div>

            <div className="edit-section-title">
              Baggage
            </div>

            <div>
              <label>Cabin Baggage</label>
              <input
                name="cabinBaggage"
                value={formData.cabinBaggage}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Check-in Baggage</label>
              <input
                name="checkinBaggage"
                value={formData.checkinBaggage}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Extra Baggage Price</label>
              <input
                type="number"
                name="extraBaggagePrice"
                value={
                  formData.extraBaggagePrice
                }
                onChange={handleChange}
              />
            </div>

            <div className="edit-section-title">
              Booking & Status
            </div>

            <div>
              <label>Booking Start Date</label>
              <input
                type="date"
                name="bookingStartDate"
                value={
                  formData.bookingStartDate
                }
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Booking Closing Date</label>
              <input
                type="date"
                name="bookingClosingDate"
                value={
                  formData.bookingClosingDate
                }
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Scheduled</option>
                <option>Delayed</option>
                <option>Cancelled</option>
                <option>Boarding</option>
                <option>Departed</option>
                <option>Arrived</option>
              </select>
            </div>

          </div>

          {/* SERVICES */}

          <div className="edit-section-title">
            Services
          </div>

          <div className="edit-services">

            {[
              ["mealAvailable", "Meal Available"],
              ["wifiAvailable", "Wi-Fi Available"],
              [
                "entertainmentAvailable",
                "Entertainment",
              ],
              ["powerAvailable", "Power Available"],
              ["refundable", "Refundable"],
              ["changeable", "Changeable"],
            ].map(([name, label]) => (
              <label
                className="edit-checkbox"
                key={name}
              >
                <input
                  type="checkbox"
                  name={name}
                  checked={formData[name]}
                  onChange={handleChange}
                />
                {label}
              </label>
            ))}

          </div>

          {/* DESCRIPTION */}

          <div className="edit-section-title">
            Additional Information
          </div>

          <div className="edit-full-field">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="edit-full-field">
            <label>
              Special Instructions
            </label>
            <textarea
              name="specialInstructions"
              value={
                formData.specialInstructions
              }
              onChange={handleChange}
              rows="3"
            />
          </div>

          {error && (
            <div className="edit-error">
              {error}
            </div>
          )}

          <div className="edit-modal-buttons">

            <button
              type="button"
              className="edit-cancel-btn"
              onClick={closeModal}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="update-btn"
              disabled={loading}
            >
              {loading
                ? "Updating..."
                : "Update Flight"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default EditFlight;