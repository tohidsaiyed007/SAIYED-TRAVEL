
// // import "./AddFlight.css";

// // import { useState } from "react";

// // import {
// //   FaTimes,
// //   FaPlane,
// //   FaSave,
// //   FaPlus,
// //   FaTrash,
// // } from "react-icons/fa";

// // function AddFlight({ closeModal }) {

// //   const [loading, setLoading] =
// //     useState(false);

// //   const [formData, setFormData] =
// //     useState({
// //       airline: "",
// //       flightNo: "",
// //       flightType: "Domestic",
// //       aircraft: "",

// //       fromCity: "",
// //       fromAirport: "",
// //       fromCode: "",

// //       toCity: "",
// //       toAirport: "",
// //       toCode: "",

// //       departureDate: "",
// //       departureTime: "",
// //       departureTerminal: "",

// //       arrivalDate: "",
// //       arrivalTime: "",
// //       arrivalTerminal: "",

// //       duration: "",
// //       stops: "Non-stop",
// //       stopAirport: "",
// //       stopCity: "",
// //       layoverDuration: "",

// //       cabins: [
// //         {
// //           name: "Economy",
// //           totalSeats: "",
// //           availableSeats: "",
// //           price: "",
// //           baggage: "15 KG",
// //         },
// //       ],

// //       baseFare: "",
// //       taxes: "",
// //       airportCharges: "",
// //       serviceFee: "",
// //       discount: "",
// //       finalPrice: "",
// //       currency: "INR",

// //       cabinBaggage: "7 KG",
// //       checkinBaggage: "15 KG",
// //       extraBaggagePrice: "",

// //       mealAvailable: false,
// //       wifiAvailable: false,
// //       entertainmentAvailable: false,
// //       powerAvailable: false,

// //       bookingStartDate: "",
// //       bookingClosingDate: "",

// //       refundable: false,
// //       changeable: false,

// //       status: "Scheduled",

// //       description: "",
// //       specialInstructions: "",
// //     });


// //   // =====================================================
// //   // NORMAL INPUT
// //   // =====================================================

// //   const handleChange = (e) => {

// //     const {
// //       name,
// //       value,
// //       type,
// //       checked,
// //     } = e.target;

// //     setFormData((prev) => ({
// //       ...prev,
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

// //     setFormData((prev) => {

// //       const cabins = [
// //         ...prev.cabins,
// //       ];

// //       cabins[index] = {
// //         ...cabins[index],
// //         [field]: value,
// //       };

// //       return {
// //         ...prev,
// //         cabins,
// //       };
// //     });
// //   };


// //   // =====================================================
// //   // ADD CABIN
// //   // =====================================================

// //   const addCabin = () => {

// //     setFormData((prev) => ({
// //       ...prev,

// //       cabins: [
// //         ...prev.cabins,

// //         {
// //           name: "Business",
// //           totalSeats: "",
// //           availableSeats: "",
// //           price: "",
// //           baggage: "30 KG",
// //         },
// //       ],
// //     }));
// //   };


// //   // =====================================================
// //   // REMOVE CABIN
// //   // =====================================================

// //   const removeCabin = (index) => {

// //     setFormData((prev) => ({
// //       ...prev,

// //       cabins: prev.cabins.filter(
// //         (_, i) => i !== index
// //       ),
// //     }));
// //   };


// //   // =====================================================
// //   // SUBMIT
// //   // =====================================================

// //   const handleSubmit = async (e) => {

// //     e.preventDefault();

// //     if (loading) return;

// //     const token =
// //       localStorage.getItem(
// //         "token"
// //       );

// //     if (!token) {
// //       alert(
// //         "Admin login required."
// //       );
// //       return;
// //     }


// //     // ==============================================
// //     // VALIDATION
// //     // ==============================================

// //     if (
// //       !formData.airline ||
// //       !formData.flightNo ||
// //       !formData.aircraft ||
// //       !formData.fromCity ||
// //       !formData.fromAirport ||
// //       !formData.fromCode ||
// //       !formData.toCity ||
// //       !formData.toAirport ||
// //       !formData.toCode
// //     ) {
// //       alert(
// //         "Please fill all required basic and route fields."
// //       );
// //       return;
// //     }


// //     if (
// //       formData.cabins.length ===
// //       0
// //     ) {
// //       alert(
// //         "Please add at least one cabin."
// //       );
// //       return;
// //     }


// //     const cabins =
// //       formData.cabins.map(
// //         (cabin) => ({
// //           name: cabin.name,

// //           totalSeats:
// //             Number(
// //               cabin.totalSeats
// //             ),

// //           availableSeats:
// //             Number(
// //               cabin.availableSeats ||
// //               cabin.totalSeats
// //             ),

// //           price:
// //             Number(
// //               cabin.price
// //             ),

// //           baggage:
// //             cabin.baggage,
// //         })
// //       );


// //     const finalPrice =
// //       Number(
// //         formData.finalPrice
// //       );


// //     if (
// //       Number.isNaN(
// //         finalPrice
// //       ) ||
// //       finalPrice < 0
// //     ) {
// //       alert(
// //         "Please enter a valid final price."
// //       );
// //       return;
// //     }


// //     const flightData = {
// //       ...formData,

// //       flightNo:
// //         formData.flightNo
// //           .trim()
// //           .toUpperCase(),

// //       fromCode:
// //         formData.fromCode
// //           .trim()
// //           .toUpperCase(),

// //       toCode:
// //         formData.toCode
// //           .trim()
// //           .toUpperCase(),

// //       cabins,

// //       baseFare:
// //         Number(
// //           formData.baseFare || 0
// //         ),

// //       taxes:
// //         Number(
// //           formData.taxes || 0
// //         ),

// //       airportCharges:
// //         Number(
// //           formData.airportCharges ||
// //           0
// //         ),

// //       serviceFee:
// //         Number(
// //           formData.serviceFee || 0
// //         ),

// //       discount:
// //         Number(
// //           formData.discount || 0
// //         ),

// //       finalPrice,

// //       extraBaggagePrice:
// //         Number(
// //           formData.extraBaggagePrice ||
// //           0
// //         ),
// //     };


// //     console.log(
// //       "SENDING COMPLETE FLIGHT:",
// //       flightData
// //     );


// //     try {

// //       setLoading(true);

// //       const response =
// //         await fetch(
// //           "http://localhost:5000/api/flights",
// //           {
// //             method: "POST",

// //             headers: {
// //               "Content-Type":
// //                 "application/json",

// //               Authorization:
// //                 `Bearer ${token}`,
// //             },

// //             body:
// //               JSON.stringify(
// //                 flightData
// //               ),
// //           }
// //         );


// //       const data =
// //         await response.json();


// //       console.log(
// //         "SERVER RESPONSE:",
// //         data
// //       );


// //       if (!response.ok) {

// //         alert(
// //           data.message ||
// //           "Flight could not be added."
// //         );

// //         return;
// //       }


// //       alert(
// //         "Flight added successfully ✅"
// //       );

// //       closeModal();

// //       window.location.reload();

// //     } catch (error) {

// //       console.error(
// //         "ADD FLIGHT ERROR:",
// //         error
// //       );

// //       alert(
// //         "Backend connection failed."
// //       );

// //     } finally {

// //       setLoading(false);

// //     }
// //   };


// //   return (
// //     <div className="add-flight-overlay">

// //       <div className="add-flight-modal">

// //         {/* =================================================
// //             HEADER
// //         ================================================= */}

// //         <div className="add-flight-header">

// //           <div className="add-flight-title">

// //             <div className="add-flight-icon">
// //               <FaPlane />
// //             </div>

// //             <div>
// //               <h2>
// //                 Add New Flight
// //               </h2>

// //               <p>
// //                 Complete flight information
// //               </p>
// //             </div>

// //           </div>


// //           <button
// //             type="button"
// //             className="close-flight-btn"
// //             onClick={closeModal}
// //           >
// //             <FaTimes />
// //           </button>

// //         </div>


// //         <form
// //           className="add-flight-form"
// //           onSubmit={handleSubmit}
// //         >

// //           {/* =================================================
// //               BASIC INFORMATION
// //           ================================================= */}

// //           <div className="form-section">

// //             <div className="section-heading">
// //               <h3>
// //                 Basic Information
// //               </h3>

// //               <span>
// //                 Flight identification
// //               </span>
// //             </div>


// //             <div className="form-row">

// //               <div className="form-group">
// //                 <label>
// //                   Airline *
// //                 </label>

// //                 <input
// //                   name="airline"
// //                   value={
// //                     formData.airline
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="Emirates"
// //                   required
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Flight Number *
// //                 </label>

// //                 <input
// //                   name="flightNo"
// //                   value={
// //                     formData.flightNo
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="EK-501"
// //                   required
// //                 />
// //               </div>

// //             </div>


// //             <div className="form-row">

// //               <div className="form-group">
// //                 <label>
// //                   Flight Type *
// //                 </label>

// //                 <select
// //                   name="flightType"
// //                   value={
// //                     formData.flightType
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                 >
// //                   <option>
// //                     Domestic
// //                   </option>

// //                   <option>
// //                     International
// //                   </option>
// //                 </select>
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Aircraft *
// //                 </label>

// //                 <input
// //                   name="aircraft"
// //                   value={
// //                     formData.aircraft
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="Boeing 777-300ER"
// //                   required
// //                 />
// //               </div>

// //             </div>

// //           </div>


// //           {/* =================================================
// //               ROUTE
// //           ================================================= */}

// //           <div className="form-section">

// //             <div className="section-heading">
// //               <h3>
// //                 Route Information
// //               </h3>

// //               <span>
// //                 Departure and destination
// //               </span>
// //             </div>


// //             <div className="route-box">

// //               <div className="route-title">
// //                 Departure
// //               </div>


// //               <div className="form-row">

// //                 <div className="form-group">
// //                   <label>
// //                     From City *
// //                   </label>

// //                   <input
// //                     name="fromCity"
// //                     value={
// //                       formData.fromCity
// //                     }
// //                     onChange={
// //                       handleChange
// //                     }
// //                     placeholder="Delhi"
// //                     required
// //                   />
// //                 </div>


// //                 <div className="form-group">
// //                   <label>
// //                     From Airport *
// //                   </label>

// //                   <input
// //                     name="fromAirport"
// //                     value={
// //                       formData.fromAirport
// //                     }
// //                     onChange={
// //                       handleChange
// //                     }
// //                     placeholder="Indira Gandhi International Airport"
// //                     required
// //                   />
// //                 </div>


// //                 <div className="form-group">
// //                   <label>
// //                     IATA Code *
// //                   </label>

// //                   <input
// //                     name="fromCode"
// //                     value={
// //                       formData.fromCode
// //                     }
// //                     onChange={
// //                       handleChange
// //                     }
// //                     placeholder="DEL"
// //                     maxLength="3"
// //                     required
// //                   />
// //                 </div>

// //               </div>

// //             </div>


// //             <div className="route-box">

// //               <div className="route-title">
// //                 Destination
// //               </div>


// //               <div className="form-row">

// //                 <div className="form-group">
// //                   <label>
// //                     To City *
// //                   </label>

// //                   <input
// //                     name="toCity"
// //                     value={
// //                       formData.toCity
// //                     }
// //                     onChange={
// //                       handleChange
// //                     }
// //                     placeholder="Dubai"
// //                     required
// //                   />
// //                 </div>


// //                 <div className="form-group">
// //                   <label>
// //                     To Airport *
// //                   </label>

// //                   <input
// //                     name="toAirport"
// //                     value={
// //                       formData.toAirport
// //                     }
// //                     onChange={
// //                       handleChange
// //                     }
// //                     placeholder="Dubai International Airport"
// //                     required
// //                   />
// //                 </div>


// //                 <div className="form-group">
// //                   <label>
// //                     IATA Code *
// //                   </label>

// //                   <input
// //                     name="toCode"
// //                     value={
// //                       formData.toCode
// //                     }
// //                     onChange={
// //                       handleChange
// //                     }
// //                     placeholder="DXB"
// //                     maxLength="3"
// //                     required
// //                   />
// //                 </div>

// //               </div>

// //             </div>

// //           </div>


// //           {/* =================================================
// //               DEPARTURE / ARRIVAL
// //           ================================================= */}

// //           <div className="form-section">

// //             <div className="section-heading">
// //               <h3>
// //                 Schedule
// //               </h3>

// //               <span>
// //                 Flight timing information
// //               </span>
// //             </div>


// //             <div className="form-row">

// //               <div className="form-group">
// //                 <label>
// //                   Departure Date *
// //                 </label>

// //                 <input
// //                   type="date"
// //                   name="departureDate"
// //                   value={
// //                     formData.departureDate
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   required
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Departure Time *
// //                 </label>

// //                 <input
// //                   type="time"
// //                   name="departureTime"
// //                   value={
// //                     formData.departureTime
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   required
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Departure Terminal
// //                 </label>

// //                 <input
// //                   name="departureTerminal"
// //                   value={
// //                     formData.departureTerminal
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="Terminal 3"
// //                 />
// //               </div>

// //             </div>


// //             <div className="form-row">

// //               <div className="form-group">
// //                 <label>
// //                   Arrival Date *
// //                 </label>

// //                 <input
// //                   type="date"
// //                   name="arrivalDate"
// //                   value={
// //                     formData.arrivalDate
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   required
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Arrival Time *
// //                 </label>

// //                 <input
// //                   type="time"
// //                   name="arrivalTime"
// //                   value={
// //                     formData.arrivalTime
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   required
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Arrival Terminal
// //                 </label>

// //                 <input
// //                   name="arrivalTerminal"
// //                   value={
// //                     formData.arrivalTerminal
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="Terminal 3"
// //                 />
// //               </div>

// //             </div>


// //             <div className="form-row">

// //               <div className="form-group">
// //                 <label>
// //                   Duration *
// //                 </label>

// //                 <input
// //                   name="duration"
// //                   value={
// //                     formData.duration
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="3h 10m"
// //                   required
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Stops
// //                 </label>

// //                 <select
// //                   name="stops"
// //                   value={
// //                     formData.stops
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                 >
// //                   <option>
// //                     Non-stop
// //                   </option>

// //                   <option>
// //                     1 Stop
// //                   </option>

// //                   <option>
// //                     2 Stops
// //                   </option>
// //                 </select>
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Stop Airport
// //                 </label>

// //                 <input
// //                   name="stopAirport"
// //                   value={
// //                     formData.stopAirport
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="Doha International Airport"
// //                 />
// //               </div>

// //             </div>


// //             {formData.stops !==
// //               "Non-stop" && (

// //               <div className="form-row">

// //                 <div className="form-group">
// //                   <label>
// //                     Stop City
// //                   </label>

// //                   <input
// //                     name="stopCity"
// //                     value={
// //                       formData.stopCity
// //                     }
// //                     onChange={
// //                       handleChange
// //                     }
// //                     placeholder="Doha"
// //                   />
// //                 </div>


// //                 <div className="form-group">
// //                   <label>
// //                     Layover Duration
// //                   </label>

// //                   <input
// //                     name="layoverDuration"
// //                     value={
// //                       formData.layoverDuration
// //                     }
// //                     onChange={
// //                       handleChange
// //                     }
// //                     placeholder="2h 15m"
// //                   />
// //                 </div>

// //               </div>

// //             )}

// //           </div>


// //           {/* =================================================
// //               CABINS
// //           ================================================= */}

// //           <div className="form-section">

// //             <div className="section-heading cabin-heading">

// //               <div>
// //                 <h3>
// //                   Cabin & Seats
// //                 </h3>

// //                 <span>
// //                   Add cabin-wise pricing
// //                 </span>
// //               </div>


// //               <button
// //                 type="button"
// //                 className="add-cabin-btn"
// //                 onClick={addCabin}
// //               >
// //                 <FaPlus />
// //                 Add Cabin
// //               </button>

// //             </div>


// //             {formData.cabins.map(
// //               (cabin, index) => (

// //                 <div
// //                   className="cabin-card"
// //                   key={index}
// //                 >

// //                   <div className="cabin-card-header">

// //                     <strong>
// //                       Cabin {index + 1}
// //                     </strong>


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
// //                         <FaTrash />
// //                       </button>

// //                     )}

// //                   </div>


// //                   <div className="form-row">

// //                     <div className="form-group">
// //                       <label>
// //                         Cabin Class
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


// //                     <div className="form-group">
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
// //                         placeholder="150"
// //                         required
// //                       />
// //                     </div>


// //                     <div className="form-group">
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
// //                         placeholder="150"
// //                         required
// //                       />
// //                     </div>


// //                     <div className="form-group">
// //                       <label>
// //                         Price
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
// //                         placeholder="28500"
// //                         required
// //                       />
// //                     </div>


// //                     <div className="form-group">
// //                       <label>
// //                         Baggage
// //                       </label>

// //                       <input
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
// //                         placeholder="30 KG"
// //                       />
// //                     </div>

// //                   </div>

// //                 </div>

// //               )
// //             )}

// //           </div>


// //           {/* =================================================
// //               PRICING
// //           ================================================= */}

// //           <div className="form-section">

// //             <div className="section-heading">
// //               <h3>
// //                 Pricing
// //               </h3>

// //               <span>
// //                 Fare breakdown
// //               </span>
// //             </div>


// //             <div className="form-row">

// //               <div className="form-group">
// //                 <label>
// //                   Base Fare
// //                 </label>

// //                 <input
// //                   type="number"
// //                   name="baseFare"
// //                   value={
// //                     formData.baseFare
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="24000"
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Taxes
// //                 </label>

// //                 <input
// //                   type="number"
// //                   name="taxes"
// //                   value={
// //                     formData.taxes
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="3500"
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Airport Charges
// //                 </label>

// //                 <input
// //                   type="number"
// //                   name="airportCharges"
// //                   value={
// //                     formData.airportCharges
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="700"
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Service Fee
// //                 </label>

// //                 <input
// //                   type="number"
// //                   name="serviceFee"
// //                   value={
// //                     formData.serviceFee
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="300"
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Discount
// //                 </label>

// //                 <input
// //                   type="number"
// //                   name="discount"
// //                   value={
// //                     formData.discount
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="0"
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Final Price *
// //                 </label>

// //                 <input
// //                   type="number"
// //                   name="finalPrice"
// //                   value={
// //                     formData.finalPrice
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="28500"
// //                   required
// //                 />
// //               </div>

// //             </div>

// //           </div>


// //           {/* =================================================
// //               BAGGAGE
// //           ================================================= */}

// //           <div className="form-section">

// //             <div className="section-heading">
// //               <h3>
// //                 Baggage
// //               </h3>

// //               <span>
// //                 Baggage allowance
// //               </span>
// //             </div>


// //             <div className="form-row">

// //               <div className="form-group">
// //                 <label>
// //                   Cabin Baggage
// //                 </label>

// //                 <input
// //                   name="cabinBaggage"
// //                   value={
// //                     formData.cabinBaggage
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="7 KG"
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Check-in Baggage
// //                 </label>

// //                 <input
// //                   name="checkinBaggage"
// //                   value={
// //                     formData.checkinBaggage
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="30 KG"
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Extra Baggage Price
// //                 </label>

// //                 <input
// //                   type="number"
// //                   name="extraBaggagePrice"
// //                   value={
// //                     formData.extraBaggagePrice
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                   placeholder="1500"
// //                 />
// //               </div>

// //             </div>

// //           </div>


// //           {/* =================================================
// //               SERVICES
// //           ================================================= */}

// //           <div className="form-section">

// //             <div className="section-heading">
// //               <h3>
// //                 Services
// //               </h3>

// //               <span>
// //                 Available onboard services
// //               </span>
// //             </div>


// //             <div className="checkbox-grid">

// //               <label className="check-item">
// //                 <input
// //                   type="checkbox"
// //                   name="mealAvailable"
// //                   checked={
// //                     formData.mealAvailable
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                 />

// //                 <span>
// //                   Meal Available
// //                 </span>
// //               </label>


// //               <label className="check-item">
// //                 <input
// //                   type="checkbox"
// //                   name="wifiAvailable"
// //                   checked={
// //                     formData.wifiAvailable
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                 />

// //                 <span>
// //                   Wi-Fi Available
// //                 </span>
// //               </label>


// //               <label className="check-item">
// //                 <input
// //                   type="checkbox"
// //                   name="entertainmentAvailable"
// //                   checked={
// //                     formData.entertainmentAvailable
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                 />

// //                 <span>
// //                   Entertainment
// //                 </span>
// //               </label>


// //               <label className="check-item">
// //                 <input
// //                   type="checkbox"
// //                   name="powerAvailable"
// //                   checked={
// //                     formData.powerAvailable
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                 />

// //                 <span>
// //                   Power Available
// //                 </span>
// //               </label>

// //             </div>

// //           </div>


// //           {/* =================================================
// //               BOOKING RULES
// //           ================================================= */}

// //           <div className="form-section">

// //             <div className="section-heading">
// //               <h3>
// //                 Booking Rules
// //               </h3>

// //               <span>
// //                 Booking and cancellation
// //               </span>
// //             </div>


// //             <div className="form-row">

// //               <div className="form-group">
// //                 <label>
// //                   Booking Start Date
// //                 </label>

// //                 <input
// //                   type="date"
// //                   name="bookingStartDate"
// //                   value={
// //                     formData.bookingStartDate
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                 />
// //               </div>


// //               <div className="form-group">
// //                 <label>
// //                   Booking Closing Date
// //                 </label>

// //                 <input
// //                   type="date"
// //                   name="bookingClosingDate"
// //                   value={
// //                     formData.bookingClosingDate
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                 />
// //               </div>

// //             </div>


// //             <div className="checkbox-grid">

// //               <label className="check-item">

// //                 <input
// //                   type="checkbox"
// //                   name="refundable"
// //                   checked={
// //                     formData.refundable
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                 />

// //                 <span>
// //                   Refundable Ticket
// //                 </span>

// //               </label>


// //               <label className="check-item">

// //                 <input
// //                   type="checkbox"
// //                   name="changeable"
// //                   checked={
// //                     formData.changeable
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                 />

// //                 <span>
// //                   Date Change Allowed
// //                 </span>

// //               </label>

// //             </div>

// //           </div>


// //           {/* =================================================
// //               STATUS
// //           ================================================= */}

// //           <div className="form-section">

// //             <div className="section-heading">
// //               <h3>
// //                 Status & Description
// //               </h3>
// //             </div>


// //             <div className="form-row">

// //               <div className="form-group">

// //                 <label>
// //                   Flight Status
// //                 </label>

// //                 <select
// //                   name="status"
// //                   value={
// //                     formData.status
// //                   }
// //                   onChange={
// //                     handleChange
// //                   }
// //                 >
// //                   <option>
// //                     Scheduled
// //                   </option>

// //                   <option>
// //                     Delayed
// //                   </option>

// //                   <option>
// //                     Cancelled
// //                   </option>

// //                   <option>
// //                     Boarding
// //                   </option>

// //                   <option>
// //                     Departed
// //                   </option>

// //                   <option>
// //                     Arrived
// //                   </option>
// //                 </select>

// //               </div>

// //             </div>


// //             <div className="form-group">

// //               <label>
// //                 Flight Description
// //               </label>

// //               <textarea
// //                 name="description"
// //                 value={
// //                   formData.description
// //                 }
// //                 onChange={
// //                   handleChange
// //                 }
// //                 placeholder="Enter flight description..."
// //               />

// //             </div>


// //             <div className="form-group">

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
// //                 placeholder="Enter special instructions..."
// //               />

// //             </div>

// //           </div>


// //           {/* =================================================
// //               FOOTER
// //           ================================================= */}

// //           <div className="add-flight-footer">

// //             <button
// //               type="button"
// //               className="cancel-flight-btn"
// //               onClick={closeModal}
// //               disabled={loading}
// //             >
// //               Cancel
// //             </button>


// //             <button
// //               type="submit"
// //               className="save-flight-btn"
// //               disabled={loading}
// //             >

// //               <FaSave />

// //               {loading
// //                 ? "Saving..."
// //                 : "Save Flight"}

// //             </button>

// //           </div>

// //         </form>

// //       </div>

// //     </div>
// //   );
// // }

// // export default AddFlight;

// import "./AddFlight.css";

// import { useState } from "react";

// import {
//   FaPlane,
//   FaTimes,
//   FaPlus,
//   FaTrash,
//   FaSave,
// } from "react-icons/fa";

// function AddFlight({
//   onClose,
//   onFlightAdded,
// }) {

//   // =====================================================
//   // FORM DATA
//   // =====================================================

//   const [formData, setFormData] = useState({

//     // BASIC
//     airline: "",
//     flightNo: "",
//     flightType: "Domestic",
//     aircraft: "",

//     // ROUTE
//     fromCity: "",
//     fromAirport: "",
//     fromCode: "",

//     toCity: "",
//     toAirport: "",
//     toCode: "",

//     // DEPARTURE
//     departureDate: "",
//     departureTime: "",
//     departureTerminal: "",

//     // ARRIVAL
//     arrivalDate: "",
//     arrivalTime: "",
//     arrivalTerminal: "",

//     // DETAILS
//     duration: "",
//     stops: "Non-stop",
//     stopAirport: "",
//     stopCity: "",
//     layoverDuration: "",

//     // PRICING
//     baseFare: "",
//     taxes: "",
//     airportCharges: "",
//     serviceFee: "",
//     discount: "",
//     finalPrice: "",
//     currency: "INR",

//     // BAGGAGE
//     cabinBaggage: "7 KG",
//     checkinBaggage: "15 KG",
//     extraBaggagePrice: "",

//     // SERVICES
//     mealAvailable: false,
//     wifiAvailable: false,
//     entertainmentAvailable: false,
//     powerAvailable: false,

//     // BOOKING
//     bookingStartDate: "",
//     bookingClosingDate: "",
//     refundable: false,
//     changeable: false,

//     // STATUS
//     status: "Scheduled",
//     description: "",
//     specialInstructions: "",

//     // PNR
//     totalTickets: "",
//     tickets: "",
//   });


//   // =====================================================
//   // CABINS
//   // =====================================================

//   const [cabins, setCabins] = useState([
//     {
//       name: "Economy",
//       totalSeats: "",
//       availableSeats: "",
//       price: "",
//       baggage: "15 KG",
//     },
//   ]);


//   const [saving, setSaving] = useState(false);


//   // =====================================================
//   // HANDLE INPUT
//   // =====================================================

//   const handleChange = (e) => {

//     const {
//       name,
//       value,
//       type,
//       checked,
//     } = e.target;

//     setFormData((prev) => ({
//       ...prev,

//       [name]:
//         type === "checkbox"
//           ? checked
//           : value,
//     }));

//   };


//   // =====================================================
//   // HANDLE CABIN
//   // =====================================================

//   const handleCabinChange = (
//     index,
//     field,
//     value
//   ) => {

//     setCabins((prev) => {

//       const updated = [...prev];

//       updated[index] = {
//         ...updated[index],
//         [field]: value,
//       };

//       return updated;

//     });

//   };


//   // =====================================================
//   // ADD CABIN
//   // =====================================================

//   const addCabin = () => {

//     setCabins((prev) => [
//       ...prev,

//       {
//         name: "Business",
//         totalSeats: "",
//         availableSeats: "",
//         price: "",
//         baggage: "15 KG",
//       },
//     ]);

//   };


//   // =====================================================
//   // REMOVE CABIN
//   // =====================================================

//   const removeCabin = (index) => {

//     if (cabins.length === 1) {
//       return;
//     }

//     setCabins((prev) =>
//       prev.filter(
//         (_, i) => i !== index
//       )
//     );

//   };


//   // =====================================================
//   // PNR LIST
//   // =====================================================

//   const getPNRList = () => {

//     return formData.tickets
//       .split(/\r?\n/)
//       .map((pnr) =>
//         pnr.trim().toUpperCase()
//       )
//       .filter(Boolean);

//   };


//   // =====================================================
//   // DUPLICATE PNR CHECK
//   // =====================================================

//   const hasDuplicatePNR = (
//     pnrList
//   ) => {

//     return (
//       new Set(pnrList).size !==
//       pnrList.length
//     );

//   };


//   // =====================================================
//   // SAVE FLIGHT
//   // =====================================================

//   const handleSubmit = async (e) => {

//     e.preventDefault();


//     // -----------------------------------------------
//     // PNR LIST
//     // -----------------------------------------------

//     const pnrList =
//       getPNRList();


//     // -----------------------------------------------
//     // TOTAL TICKETS
//     // -----------------------------------------------

//     const totalTickets =
//       Number(
//         formData.totalTickets
//       );


//     // -----------------------------------------------
//     // VALIDATE TICKET COUNT
//     // -----------------------------------------------

//     if (
//       !totalTickets ||
//       totalTickets < 1
//     ) {

//       alert(
//         "Please enter Total Tickets."
//       );

//       return;
//     }


//     // -----------------------------------------------
//     // VALIDATE PNR
//     // -----------------------------------------------

//     if (
//       pnrList.length === 0
//     ) {

//       alert(
//         "Please enter ticket PNR numbers."
//       );

//       return;
//     }


//     // -----------------------------------------------
//     // PNR COUNT MATCH
//     // -----------------------------------------------

//     if (
//       pnrList.length !==
//       totalTickets
//     ) {

//       alert(
//         `Total Tickets ${totalTickets} hai, lekin ${pnrList.length} PNR diye gaye hain. Dono same hone chahiye.`
//       );

//       return;
//     }


//     // -----------------------------------------------
//     // DUPLICATE PNR
//     // -----------------------------------------------

//     if (
//       hasDuplicatePNR(
//         pnrList
//       )
//     ) {

//       alert(
//         "Duplicate PNR numbers found. Har PNR unique hona chahiye."
//       );

//       return;
//     }


//     // -----------------------------------------------
//     // REQUIRED BASIC FIELDS
//     // -----------------------------------------------

//     if (
//       !formData.airline.trim()
//     ) {

//       alert(
//         "Please enter Airline."
//       );

//       return;
//     }


//     if (
//       !formData.flightNo.trim()
//     ) {

//       alert(
//         "Please enter Flight Number."
//       );

//       return;
//     }


//     if (
//       !formData.aircraft.trim()
//     ) {

//       alert(
//         "Please enter Aircraft."
//       );

//       return;
//     }


//     // -----------------------------------------------
//     // CABIN VALIDATION
//     // -----------------------------------------------

//     for (
//       const cabin of cabins
//     ) {

//       if (
//         !cabin.name ||
//         !cabin.totalSeats ||
//         !cabin.availableSeats ||
//         cabin.price === ""
//       ) {

//         alert(
//           "Please complete all cabin details."
//         );

//         return;
//       }

//     }


//     // -----------------------------------------------
//     // PREPARE DATA
//     // -----------------------------------------------

//     const payload = {

//       ...formData,

//       totalTickets,

//       tickets:
//         pnrList,

//       cabins:
//         cabins.map(
//           (cabin) => ({

//             name:
//               cabin.name,

//             totalSeats:
//               Number(
//                 cabin.totalSeats
//               ),

//             availableSeats:
//               Number(
//                 cabin.availableSeats
//               ),

//             price:
//               Number(
//                 cabin.price
//               ),

//             baggage:
//               cabin.baggage ||
//               "15 KG",

//           })
//         ),

//       baseFare:
//         Number(
//           formData.baseFare || 0
//         ),

//       taxes:
//         Number(
//           formData.taxes || 0
//         ),

//       airportCharges:
//         Number(
//           formData.airportCharges || 0
//         ),

//       serviceFee:
//         Number(
//           formData.serviceFee || 0
//         ),

//       discount:
//         Number(
//           formData.discount || 0
//         ),

//       finalPrice:
//         Number(
//           formData.finalPrice || 0
//         ),

//       extraBaggagePrice:
//         Number(
//           formData.extraBaggagePrice || 0
//         ),

//     };


//     // -----------------------------------------------
//     // API
//     // -----------------------------------------------

//     try {

//       setSaving(true);


//       const token =
//         localStorage.getItem(
//           "token"
//         );


//       const response =
//         await fetch(
//           "http://localhost:5000/api/flights",
//           {
//             method: "POST",

//             headers: {

//               "Content-Type":
//                 "application/json",

//               Authorization:
//                 `Bearer ${token}`,

//             },

//             body:
//               JSON.stringify(
//                 payload
//               ),

//           }
//         );


//       const data =
//         await response.json();


//       if (!response.ok) {

//         throw new Error(
//           data.message ||
//           "Failed to add flight."
//         );

//       }


//       alert(
//         "Flight + PNR tickets added successfully."
//       );


//       // Parent ko updated flight
//       if (
//         onFlightAdded
//       ) {

//         onFlightAdded(
//           data.flight
//         );

//       }


//       if (onClose) {
//         onClose();
//       }


//     } catch (error) {

//       console.error(
//         "ADD FLIGHT ERROR:",
//         error
//       );


//       alert(
//         error.message ||
//         "Something went wrong."
//       );

//     } finally {

//       setSaving(false);

//     }

//   };


//   // =====================================================
//   // PNR COUNT
//   // =====================================================

//   const pnrCount =
//     getPNRList().length;


//   // =====================================================
//   // UI
//   // =====================================================

//   return (

//     <div className="add-flight-overlay">

//       <div className="add-flight-modal">


//         {/* =================================================
//             HEADER
//         ================================================= */}

//         <div className="add-flight-header">

//           <div className="add-flight-title">

//             <div className="add-flight-icon">
//               <FaPlane />
//             </div>

//             <div>

//               <h2>
//                 Add Flight
//               </h2>

//               <p>
//                 Add flight details and ticket inventory
//               </p>

//             </div>

//           </div>


//           <button
//             type="button"
//             className="close-flight-btn"
//             onClick={onClose}
//           >
//             <FaTimes />
//           </button>

//         </div>


//         {/* =================================================
//             FORM
//         ================================================= */}

//         <form
//           className="add-flight-form"
//           onSubmit={handleSubmit}
//         >


//           {/* =================================================
//               BASIC INFORMATION
//           ================================================= */}

//           <div className="form-section">

//             <div className="section-heading">

//               <h3>
//                 Basic Information
//               </h3>

//               <span>
//                 Airline and aircraft details
//               </span>

//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Airline *
//                 </label>

//                 <input
//                   type="text"
//                   name="airline"
//                   placeholder="e.g. IndiGo"
//                   value={
//                     formData.airline
//                   }
//                   onChange={
//                     handleChange
//                   }
//                   required
//                 />

//               </div>


//               <div className="form-group">

//                 <label>
//                   Flight Number *
//                 </label>

//                 <input
//                   type="text"
//                   name="flightNo"
//                   placeholder="e.g. 6E-123"
//                   value={
//                     formData.flightNo
//                   }
//                   onChange={
//                     handleChange
//                   }
//                   required
//                 />

//               </div>


//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Flight Type
//                 </label>

//                 <select
//                   name="flightType"
//                   value={
//                     formData.flightType
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 >

//                   <option value="Domestic">
//                     Domestic
//                   </option>

//                   <option value="International">
//                     International
//                   </option>

//                 </select>

//               </div>


//               <div className="form-group">

//                 <label>
//                   Aircraft *
//                 </label>

//                 <input
//                   type="text"
//                   name="aircraft"
//                   placeholder="e.g. Airbus A320"
//                   value={
//                     formData.aircraft
//                   }
//                   onChange={
//                     handleChange
//                   }
//                   required
//                 />

//               </div>


//             </div>

//           </div>


//           {/* =================================================
//               ROUTE
//           ================================================= */}

//           <div className="form-section">

//             <div className="section-heading">

//               <h3>
//                 Route
//               </h3>

//               <span>
//                 Departure and arrival airports
//               </span>

//             </div>


//             <div className="route-box">

//               <div className="route-title">
//                 Departure
//               </div>


//               <div className="form-row">


//                 <div className="form-group">

//                   <label>
//                     City *
//                   </label>

//                   <input
//                     type="text"
//                     name="fromCity"
//                     placeholder="Delhi"
//                     value={
//                       formData.fromCity
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     required
//                   />

//                 </div>


//                 <div className="form-group">

//                   <label>
//                     Airport *
//                   </label>

//                   <input
//                     type="text"
//                     name="fromAirport"
//                     placeholder="Indira Gandhi International"
//                     value={
//                       formData.fromAirport
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     required
//                   />

//                 </div>


//                 <div className="form-group">

//                   <label>
//                     Code *
//                   </label>

//                   <input
//                     type="text"
//                     name="fromCode"
//                     placeholder="DEL"
//                     value={
//                       formData.fromCode
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     required
//                   />

//                 </div>


//               </div>


//               <div className="route-title">
//                 Arrival
//               </div>


//               <div className="form-row">


//                 <div className="form-group">

//                   <label>
//                     City *
//                   </label>

//                   <input
//                     type="text"
//                     name="toCity"
//                     placeholder="Mumbai"
//                     value={
//                       formData.toCity
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     required
//                   />

//                 </div>


//                 <div className="form-group">

//                   <label>
//                     Airport *
//                   </label>

//                   <input
//                     type="text"
//                     name="toAirport"
//                     placeholder="Chhatrapati Shivaji Airport"
//                     value={
//                       formData.toAirport
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     required
//                   />

//                 </div>


//                 <div className="form-group">

//                   <label>
//                     Code *
//                   </label>

//                   <input
//                     type="text"
//                     name="toCode"
//                     placeholder="BOM"
//                     value={
//                       formData.toCode
//                     }
//                     onChange={
//                       handleChange
//                     }
//                     required
//                   />

//                 </div>


//               </div>

//             </div>

//           </div>


//           {/* =================================================
//               SCHEDULE
//           ================================================= */}

//           <div className="form-section">

//             <div className="section-heading">

//               <h3>
//                 Schedule
//               </h3>

//               <span>
//                 Date, time and terminal
//               </span>

//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Departure Date *
//                 </label>

//                 <input
//                   type="date"
//                   name="departureDate"
//                   value={
//                     formData.departureDate
//                   }
//                   onChange={
//                     handleChange
//                   }
//                   required
//                 />

//               </div>


//               <div className="form-group">

//                 <label>
//                   Departure Time *
//                 </label>

//                 <input
//                   type="time"
//                   name="departureTime"
//                   value={
//                     formData.departureTime
//                   }
//                   onChange={
//                     handleChange
//                   }
//                   required
//                 />

//               </div>


//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Departure Terminal
//                 </label>

//                 <input
//                   type="text"
//                   name="departureTerminal"
//                   placeholder="T1"
//                   value={
//                     formData.departureTerminal
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//               <div className="form-group">

//                 <label>
//                   Arrival Terminal
//                 </label>

//                 <input
//                   type="text"
//                   name="arrivalTerminal"
//                   placeholder="T2"
//                   value={
//                     formData.arrivalTerminal
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Arrival Date *
//                 </label>

//                 <input
//                   type="date"
//                   name="arrivalDate"
//                   value={
//                     formData.arrivalDate
//                   }
//                   onChange={
//                     handleChange
//                   }
//                   required
//                 />

//               </div>


//               <div className="form-group">

//                 <label>
//                   Arrival Time *
//                 </label>

//                 <input
//                   type="time"
//                   name="arrivalTime"
//                   value={
//                     formData.arrivalTime
//                   }
//                   onChange={
//                     handleChange
//                   }
//                   required
//                 />

//               </div>


//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Duration *
//                 </label>

//                 <input
//                   type="text"
//                   name="duration"
//                   placeholder="2h 15m"
//                   value={
//                     formData.duration
//                   }
//                   onChange={
//                     handleChange
//                   }
//                   required
//                 />

//               </div>


//               <div className="form-group">

//                 <label>
//                   Stops
//                 </label>

//                 <select
//                   name="stops"
//                   value={
//                     formData.stops
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 >

//                   <option value="Non-stop">
//                     Non-stop
//                   </option>

//                   <option value="1 Stop">
//                     1 Stop
//                   </option>

//                   <option value="2 Stops">
//                     2 Stops
//                   </option>

//                 </select>

//               </div>


//             </div>


//             {formData.stops !== "Non-stop" && (

//               <div className="form-row">

//                 <div className="form-group">

//                   <label>
//                     Stop Airport
//                   </label>

//                   <input
//                     type="text"
//                     name="stopAirport"
//                     placeholder="Airport"
//                     value={
//                       formData.stopAirport
//                     }
//                     onChange={
//                       handleChange
//                     }
//                   />

//                 </div>


//                 <div className="form-group">

//                   <label>
//                     Stop City
//                   </label>

//                   <input
//                     type="text"
//                     name="stopCity"
//                     placeholder="City"
//                     value={
//                       formData.stopCity
//                     }
//                     onChange={
//                       handleChange
//                     }
//                   />

//                 </div>


//               </div>

//             )}

//           </div>


//           {/* =================================================
//               CABINS
//           ================================================= */}

//           <div className="form-section">

//             <div className="section-heading cabin-heading">

//               <div>

//                 <h3>
//                   Cabins
//                 </h3>

//                 <span>
//                   Seat and cabin pricing
//                 </span>

//               </div>


//               <button
//                 type="button"
//                 className="add-cabin-btn"
//                 onClick={addCabin}
//               >

//                 <FaPlus />

//                 Add Cabin

//               </button>

//             </div>


//             {cabins.map(
//               (cabin, index) => (

//                 <div
//                   className="cabin-card"
//                   key={index}
//                 >

//                   <div className="cabin-card-header">

//                     <strong>
//                       Cabin {index + 1}
//                     </strong>


//                     {cabins.length > 1 && (

//                       <button
//                         type="button"
//                         className="remove-cabin-btn"
//                         onClick={() =>
//                           removeCabin(index)
//                         }
//                       >

//                         <FaTrash />

//                       </button>

//                     )}

//                   </div>


//                   <div className="form-row">


//                     <div className="form-group">

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


//                     <div className="form-group">

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


//                     <div className="form-group">

//                       <label>
//                         Available
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


//                     <div className="form-group">

//                       <label>
//                         Price
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


//                     <div className="form-group">

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

//           </div>


//           {/* =================================================
//               TICKET INVENTORY
//           ================================================= */}

//           <div className="form-section">

//             <div className="section-heading">

//               <h3>
//                 Ticket Inventory
//               </h3>

//               <span>
//                 Add airline tickets and individual PNR numbers
//               </span>

//             </div>


//             <div className="ticket-inventory-box">


//               <div className="ticket-inventory-top">


//                 {/* TOTAL TICKETS */}

//                 <div className="ticket-count-box">

//                   <label>
//                     Total Tickets *
//                   </label>

//                   <input
//                     type="number"
//                     name="totalTickets"
//                     min="1"
//                     placeholder="e.g. 100"
//                     value={
//                       formData.totalTickets
//                     }
//                     onChange={
//                       handleChange
//                     }
//                   />

//                 </div>


//                 {/* PNR */}

//                 <div className="pnr-box">

//                   <label>
//                     PNR Numbers *
//                   </label>

//                   <textarea
//                     name="tickets"
//                     placeholder={`Enter one PNR per line

// ABC123
// DEF456
// GHI789
// JKL321`}
//                     value={
//                       formData.tickets
//                     }
//                     onChange={
//                       handleChange
//                     }
//                   />


//                   <p className="pnr-help">

//                     Har ticket ka alag PNR enter karo.
//                     Ek line me ek PNR.

//                   </p>


//                   <div className="pnr-count">

//                     <span>
//                       PNR Entered
//                     </span>

//                     <strong>
//                       {pnrCount}
//                     </strong>

//                   </div>

//                 </div>


//               </div>


//               <p className="pnr-help">

//                 Example: Agar airline se 100 tickets liye hain,
//                 Total Tickets = 100 aur 100 unique PNR enter karo.

//               </p>


//             </div>

//           </div>


//           {/* =================================================
//               PRICING
//           ================================================= */}

//           <div className="form-section">

//             <div className="section-heading">

//               <h3>
//                 Pricing
//               </h3>

//               <span>
//                 Flight fare and charges
//               </span>

//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Base Fare
//                 </label>

//                 <input
//                   type="number"
//                   min="0"
//                   name="baseFare"
//                   placeholder="4500"
//                   value={
//                     formData.baseFare
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//               <div className="form-group">

//                 <label>
//                   Taxes
//                 </label>

//                 <input
//                   type="number"
//                   min="0"
//                   name="taxes"
//                   placeholder="350"
//                   value={
//                     formData.taxes
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Airport Charges
//                 </label>

//                 <input
//                   type="number"
//                   min="0"
//                   name="airportCharges"
//                   value={
//                     formData.airportCharges
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//               <div className="form-group">

//                 <label>
//                   Service Fee
//                 </label>

//                 <input
//                   type="number"
//                   min="0"
//                   name="serviceFee"
//                   value={
//                     formData.serviceFee
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Discount
//                 </label>

//                 <input
//                   type="number"
//                   min="0"
//                   name="discount"
//                   value={
//                     formData.discount
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//               <div className="form-group">

//                 <label>
//                   Final Price *
//                 </label>

//                 <input
//                   type="number"
//                   min="0"
//                   name="finalPrice"
//                   placeholder="5000"
//                   value={
//                     formData.finalPrice
//                   }
//                   onChange={
//                     handleChange
//                   }
//                   required
//                 />

//               </div>


//             </div>

//           </div>


//           {/* =================================================
//               BAGGAGE
//           ================================================= */}

//           <div className="form-section">

//             <div className="section-heading">

//               <h3>
//                 Baggage
//               </h3>

//               <span>
//                 Included and extra baggage
//               </span>

//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Cabin Baggage
//                 </label>

//                 <input
//                   type="text"
//                   name="cabinBaggage"
//                   value={
//                     formData.cabinBaggage
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//               <div className="form-group">

//                 <label>
//                   Check-in Baggage
//                 </label>

//                 <input
//                   type="text"
//                   name="checkinBaggage"
//                   value={
//                     formData.checkinBaggage
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//             </div>


//             <div className="form-row">

//               <div className="form-group">

//                 <label>
//                   Extra Baggage Price
//                 </label>

//                 <input
//                   type="number"
//                   min="0"
//                   name="extraBaggagePrice"
//                   placeholder="500"
//                   value={
//                     formData.extraBaggagePrice
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>

//             </div>

//           </div>


//           {/* =================================================
//               SERVICES
//           ================================================= */}

//           <div className="form-section">

//             <div className="section-heading">

//               <h3>
//                 Services
//               </h3>

//               <span>
//                 Available onboard facilities
//               </span>

//             </div>


//             <div className="checkbox-grid">


//               <label className="check-item">

//                 <input
//                   type="checkbox"
//                   name="mealAvailable"
//                   checked={
//                     formData.mealAvailable
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//                 Meal Available

//               </label>


//               <label className="check-item">

//                 <input
//                   type="checkbox"
//                   name="wifiAvailable"
//                   checked={
//                     formData.wifiAvailable
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//                 WiFi

//               </label>


//               <label className="check-item">

//                 <input
//                   type="checkbox"
//                   name="entertainmentAvailable"
//                   checked={
//                     formData.entertainmentAvailable
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//                 Entertainment

//               </label>


//               <label className="check-item">

//                 <input
//                   type="checkbox"
//                   name="powerAvailable"
//                   checked={
//                     formData.powerAvailable
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//                 Power

//               </label>


//             </div>

//           </div>


//           {/* =================================================
//               BOOKING RULES
//           ================================================= */}

//           <div className="form-section">

//             <div className="section-heading">

//               <h3>
//                 Booking Rules
//               </h3>

//               <span>
//                 Booking dates and ticket rules
//               </span>

//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Booking Start Date
//                 </label>

//                 <input
//                   type="date"
//                   name="bookingStartDate"
//                   value={
//                     formData.bookingStartDate
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//               <div className="form-group">

//                 <label>
//                   Booking Closing Date
//                 </label>

//                 <input
//                   type="date"
//                   name="bookingClosingDate"
//                   value={
//                     formData.bookingClosingDate
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//             </div>


//             <div className="checkbox-grid">


//               <label className="check-item">

//                 <input
//                   type="checkbox"
//                   name="refundable"
//                   checked={
//                     formData.refundable
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//                 Refundable

//               </label>


//               <label className="check-item">

//                 <input
//                   type="checkbox"
//                   name="changeable"
//                   checked={
//                     formData.changeable
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//                 Changeable

//               </label>


//             </div>

//           </div>


//           {/* =================================================
//               STATUS
//           ================================================= */}

//           <div className="form-section">

//             <div className="section-heading">

//               <h3>
//                 Status
//               </h3>

//               <span>
//                 Current flight status
//               </span>

//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Status
//                 </label>

//                 <select
//                   name="status"
//                   value={
//                     formData.status
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 >

//                   <option value="Scheduled">
//                     Scheduled
//                   </option>

//                   <option value="Delayed">
//                     Delayed
//                   </option>

//                   <option value="Cancelled">
//                     Cancelled
//                   </option>

//                   <option value="Boarding">
//                     Boarding
//                   </option>

//                   <option value="Departed">
//                     Departed
//                   </option>

//                   <option value="Arrived">
//                     Arrived
//                   </option>

//                 </select>

//               </div>


//               <div className="form-group">

//                 <label>
//                   Stop / Layover Duration
//                 </label>

//                 <input
//                   type="text"
//                   name="layoverDuration"
//                   placeholder="1h 30m"
//                   value={
//                     formData.layoverDuration
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//             </div>


//             <div className="form-row">


//               <div className="form-group">

//                 <label>
//                   Description
//                 </label>

//                 <textarea
//                   name="description"
//                   placeholder="Flight description..."
//                   value={
//                     formData.description
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//               <div className="form-group">

//                 <label>
//                   Special Instructions
//                 </label>

//                 <textarea
//                   name="specialInstructions"
//                   placeholder="Special instructions..."
//                   value={
//                     formData.specialInstructions
//                   }
//                   onChange={
//                     handleChange
//                   }
//                 />

//               </div>


//             </div>

//           </div>


//           {/* =================================================
//               FOOTER
//           ================================================= */}

//           <div className="add-flight-footer">

//             <button
//               type="button"
//               className="cancel-flight-btn"
//               onClick={onClose}
//               disabled={saving}
//             >

//               <FaTimes />

//               Cancel

//             </button>


//             <button
//               type="submit"
//               className="save-flight-btn"
//               disabled={saving}
//             >

//               <FaSave />

//               {saving
//                 ? "Saving..."
//                 : "Save Flight"}

//             </button>

//           </div>


//         </form>

//       </div>

//     </div>

//   );

// }

// export default AddFlight;


import "./AddFlight.css";
import { useState } from "react";

import {
  FaPlane,
  FaTimes,
  FaPlus,
  FaTrash,
  FaSave,
} from "react-icons/fa";

function AddFlight({
  onClose,
  closeModal,
  onFlightAdded,
}) {

  // =====================================================
  // CLOSE HANDLER
  // =====================================================

  const handleClose = () => {
    if (onClose) {
      onClose();
      return;
    }

    if (closeModal) {
      closeModal();
    }
  };


  // =====================================================
  // FORM DATA
  // =====================================================

  const [formData, setFormData] = useState({

    // BASIC
    airline: "",
    flightNo: "",
    flightType: "Domestic",
    aircraft: "",

    // ROUTE
    fromCity: "",
    fromAirport: "",
    fromCode: "",

    toCity: "",
    toAirport: "",
    toCode: "",

    // DEPARTURE
    departureDate: "",
    departureTime: "",
    departureTerminal: "",

    // ARRIVAL
    arrivalDate: "",
    arrivalTime: "",
    arrivalTerminal: "",

    // DETAILS
    duration: "",
    stops: "Non-stop",
    stopAirport: "",
    stopCity: "",
    layoverDuration: "",

    // =================================================
    // GENERAL PRICING
    // =================================================

    baseFare: "",
    taxes: "",
    airportCharges: "",
    serviceFee: "",
    discount: "",
    finalPrice: "",
    currency: "INR",

    // =================================================
    // PASSENGER FARES
    // =================================================

    adultFare: "",
    childFare: "",
    infantFare: "",

    // =================================================
    // MEAL PRICES
    // =================================================

    adultMealPrice: "",
    childMealPrice: "",
    infantMealPrice: "",

    // =================================================
    // BAGGAGE PRICES
    // =================================================

    adultBaggagePrice: "",
    childBaggagePrice: "",
    infantBaggagePrice: "",

    // =================================================
    // SEAT PRICES
    // =================================================

    adultSeatPrice: "",
    childSeatPrice: "",
    infantSeatPrice: "",

    // =================================================
    // BAGGAGE
    // =================================================

    cabinBaggage: "7 KG",
    checkinBaggage: "15 KG",
    extraBaggagePrice: "",

    // =================================================
    // SERVICES
    // =================================================

    mealAvailable: false,
    wifiAvailable: false,
    entertainmentAvailable: false,
    powerAvailable: false,

    // =================================================
    // BOOKING
    // =================================================

    bookingStartDate: "",
    bookingClosingDate: "",
    refundable: false,
    changeable: false,

    // =================================================
    // STATUS
    // =================================================

    status: "Scheduled",
    description: "",
    specialInstructions: "",

    // =================================================
    // PNR
    // =================================================

    totalTickets: "",
    tickets: "",
  });


  // =====================================================
  // CABINS
  // =====================================================

  const [cabins, setCabins] = useState([
    {
      name: "Economy",
      totalSeats: "",
      availableSeats: "",
      price: "",
      baggage: "15 KG",
    },
  ]);


  // =====================================================
  // SAVING
  // =====================================================

  const [saving, setSaving] = useState(false);


  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;


    setFormData((prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

  };


  // =====================================================
  // HANDLE CABIN
  // =====================================================

  const handleCabinChange = (
    index,
    field,
    value
  ) => {

    setCabins((prev) => {

      const updated = [...prev];

      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      return updated;

    });

  };


  // =====================================================
  // ADD CABIN
  // =====================================================

  const addCabin = () => {

    setCabins((prev) => [
      ...prev,

      {
        name: "Business",
        totalSeats: "",
        availableSeats: "",
        price: "",
        baggage: "15 KG",
      },
    ]);

  };


  // =====================================================
  // REMOVE CABIN
  // =====================================================

  const removeCabin = (index) => {

    if (cabins.length === 1) {
      return;
    }

    setCabins((prev) =>
      prev.filter(
        (_, i) => i !== index
      )
    );

  };


  // =====================================================
  // PNR LIST
  // =====================================================

  const getPNRList = () => {

    return formData.tickets
      .split(/\r?\n/)
      .map((pnr) =>
        pnr.trim().toUpperCase()
      )
      .filter(Boolean);

  };


  // =====================================================
  // DUPLICATE PNR CHECK
  // =====================================================

  const hasDuplicatePNR = (
    pnrList
  ) => {

    return (
      new Set(pnrList).size !==
      pnrList.length
    );

  };


  // =====================================================
  // NUMBER HELPER
  // =====================================================

  const numberValue = (value) => {
    return Number(value || 0);
  };


  // =====================================================
  // SAVE FLIGHT
  // =====================================================

  const handleSubmit = async (e) => {

    e.preventDefault();


    // -----------------------------------------------
    // PNR LIST
    // -----------------------------------------------

    const pnrList =
      getPNRList();


    // -----------------------------------------------
    // TOTAL TICKETS
    // -----------------------------------------------

    const totalTickets =
      Number(
        formData.totalTickets
      );


    // -----------------------------------------------
    // VALIDATE TICKET COUNT
    // -----------------------------------------------

    if (
      !totalTickets ||
      totalTickets < 1
    ) {

      alert(
        "Please enter Total Tickets."
      );

      return;
    }


    // -----------------------------------------------
    // VALIDATE PNR
    // -----------------------------------------------

    if (
      pnrList.length === 0
    ) {

      alert(
        "Please enter ticket PNR numbers."
      );

      return;
    }


    // -----------------------------------------------
    // PNR COUNT MATCH
    // -----------------------------------------------

    if (
      pnrList.length !==
      totalTickets
    ) {

      alert(
        `Total Tickets ${totalTickets} hai, lekin ${pnrList.length} PNR diye gaye hain. Dono same hone chahiye.`
      );

      return;
    }


    // -----------------------------------------------
    // DUPLICATE PNR
    // -----------------------------------------------

    if (
      hasDuplicatePNR(
        pnrList
      )
    ) {

      alert(
        "Duplicate PNR numbers found. Har PNR unique hona chahiye."
      );

      return;
    }


    // -----------------------------------------------
    // REQUIRED BASIC FIELDS
    // -----------------------------------------------

    if (
      !formData.airline.trim()
    ) {

      alert(
        "Please enter Airline."
      );

      return;
    }


    if (
      !formData.flightNo.trim()
    ) {

      alert(
        "Please enter Flight Number."
      );

      return;
    }


    if (
      !formData.aircraft.trim()
    ) {

      alert(
        "Please enter Aircraft."
      );

      return;
    }


    // -----------------------------------------------
    // REQUIRED ROUTE
    // -----------------------------------------------

    if (
      !formData.fromCity.trim() ||
      !formData.fromAirport.trim() ||
      !formData.fromCode.trim()
    ) {

      alert(
        "Please complete departure route details."
      );

      return;
    }


    if (
      !formData.toCity.trim() ||
      !formData.toAirport.trim() ||
      !formData.toCode.trim()
    ) {

      alert(
        "Please complete arrival route details."
      );

      return;
    }


    // -----------------------------------------------
    // CABIN VALIDATION
    // -----------------------------------------------

    for (
      const cabin of cabins
    ) {

      if (
        !cabin.name ||
        cabin.totalSeats === "" ||
        cabin.availableSeats === "" ||
        cabin.price === ""
      ) {

        alert(
          "Please complete all cabin details."
        );

        return;
      }


      if (
        Number(cabin.availableSeats) >
        Number(cabin.totalSeats)
      ) {

        alert(
          "Available seats cannot be greater than total seats."
        );

        return;
      }

    }


    // -----------------------------------------------
    // PASSENGER FARE VALIDATION
    // -----------------------------------------------

    if (
      formData.adultFare === ""
    ) {

      alert(
        "Please enter Adult Fare."
      );

      return;
    }


    if (
      formData.childFare === ""
    ) {

      alert(
        "Please enter Child Fare."
      );

      return;
    }


    if (
      formData.infantFare === ""
    ) {

      alert(
        "Please enter Infant Fare."
      );

      return;
    }


    // -----------------------------------------------
    // PREPARE TICKETS
    // -----------------------------------------------

    const ticketObjects =
      pnrList.map((pnr) => ({
        pnr,
        status: "Available",
        bookingId: "",
        passengerName: "",
        bookedAt: null,
      }));


    // -----------------------------------------------
    // PREPARE DATA
    // -----------------------------------------------

    const payload = {

      ...formData,

      // =============================================
      // TICKETS
      // =============================================

      totalTickets,

      tickets:
        ticketObjects,


      // =============================================
      // CABINS
      // =============================================

      cabins:
        cabins.map(
          (cabin) => ({

            name:
              cabin.name,

            totalSeats:
              Number(
                cabin.totalSeats
              ),

            availableSeats:
              Number(
                cabin.availableSeats
              ),

            price:
              Number(
                cabin.price
              ),

            baggage:
              cabin.baggage ||
              "15 KG",

          })
        ),


      // =============================================
      // GENERAL PRICING
      // =============================================

      baseFare:
        numberValue(
          formData.baseFare
        ),

      taxes:
        numberValue(
          formData.taxes
        ),

      airportCharges:
        numberValue(
          formData.airportCharges
        ),

      serviceFee:
        numberValue(
          formData.serviceFee
        ),

      discount:
        numberValue(
          formData.discount
        ),

      finalPrice:
        numberValue(
          formData.finalPrice
        ),


      // =============================================
      // PASSENGER FARES
      // =============================================

      adultFare:
        numberValue(
          formData.adultFare
        ),

      childFare:
        numberValue(
          formData.childFare
        ),

      infantFare:
        numberValue(
          formData.infantFare
        ),


      // =============================================
      // MEAL PRICES
      // =============================================

      adultMealPrice:
        numberValue(
          formData.adultMealPrice
        ),

      childMealPrice:
        numberValue(
          formData.childMealPrice
        ),

      infantMealPrice:
        numberValue(
          formData.infantMealPrice
        ),


      // =============================================
      // BAGGAGE PRICES
      // =============================================

      adultBaggagePrice:
        numberValue(
          formData.adultBaggagePrice
        ),

      childBaggagePrice:
        numberValue(
          formData.childBaggagePrice
        ),

      infantBaggagePrice:
        numberValue(
          formData.infantBaggagePrice
        ),


      // =============================================
      // SEAT PRICES
      // =============================================

      adultSeatPrice:
        numberValue(
          formData.adultSeatPrice
        ),

      childSeatPrice:
        numberValue(
          formData.childSeatPrice
        ),

      infantSeatPrice:
        numberValue(
          formData.infantSeatPrice
        ),


      // =============================================
      // EXTRA BAGGAGE
      // =============================================

      extraBaggagePrice:
        numberValue(
          formData.extraBaggagePrice
        ),

    };


    // -----------------------------------------------
    // API
    // -----------------------------------------------

    try {

      setSaving(true);


      const token =
        localStorage.getItem(
          "token"
        );


      if (!token) {

        alert(
          "Please login as admin."
        );

        return;
      }


      const response =
        await fetch(
          "http://localhost:5000/api/flights",
          {
            method: "POST",

            headers: {

              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,

            },

            body:
              JSON.stringify(
                payload
              ),

          }
        );


      const data =
        await response.json();


      if (!response.ok) {

        throw new Error(
          data.message ||
          "Failed to add flight."
        );

      }


      alert(
        "Flight + Passenger Pricing + PNR tickets added successfully."
      );


      // ---------------------------------------------
      // PARENT UPDATE
      // ---------------------------------------------

      if (
        onFlightAdded
      ) {

        onFlightAdded(
          data.flight
        );

      }


      // ---------------------------------------------
      // CLOSE
      // ---------------------------------------------

      handleClose();


    } catch (error) {

      console.error(
        "ADD FLIGHT ERROR:",
        error
      );


      alert(
        error.message ||
        "Something went wrong."
      );


    } finally {

      setSaving(false);

    }

  };


  // =====================================================
  // PNR COUNT
  // =====================================================

  const pnrCount =
    getPNRList().length;


  // =====================================================
  // UI
  // =====================================================

  return (

    <div className="add-flight-overlay">

      <div className="add-flight-modal">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="add-flight-header">

          <div className="add-flight-title">

            <div className="add-flight-icon">

              <FaPlane />

            </div>

            <div>

              <h2>
                Add Flight
              </h2>

              <p>
                Add flight details, passenger fares and ticket inventory
              </p>

            </div>

          </div>


          <button
            type="button"
            className="close-flight-btn"
            onClick={handleClose}
          >

            <FaTimes />

          </button>

        </div>


        {/* =================================================
            FORM
        ================================================= */}

        <form
          className="add-flight-form"
          onSubmit={handleSubmit}
        >


          {/* =================================================
              BASIC INFORMATION
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                Basic Information
              </h3>

              <span>
                Airline and aircraft details
              </span>

            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Airline *
                </label>

                <input
                  type="text"
                  name="airline"
                  placeholder="e.g. IndiGo"
                  value={
                    formData.airline
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Flight Number *
                </label>

                <input
                  type="text"
                  name="flightNo"
                  placeholder="e.g. 6E-123"
                  value={
                    formData.flightNo
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Flight Type
                </label>

                <select
                  name="flightType"
                  value={
                    formData.flightType
                  }
                  onChange={
                    handleChange
                  }
                >

                  <option value="Domestic">
                    Domestic
                  </option>

                  <option value="International">
                    International
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Aircraft *
                </label>

                <input
                  type="text"
                  name="aircraft"
                  placeholder="e.g. Airbus A320"
                  value={
                    formData.aircraft
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


            </div>

          </div>


          {/* =================================================
              ROUTE
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                Route
              </h3>

              <span>
                Departure and arrival airports
              </span>

            </div>


            <div className="route-box">

              <div className="route-title">
                Departure
              </div>


              <div className="form-row">


                <div className="form-group">

                  <label>
                    City *
                  </label>

                  <input
                    type="text"
                    name="fromCity"
                    placeholder="Delhi"
                    value={
                      formData.fromCity
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Airport *
                  </label>

                  <input
                    type="text"
                    name="fromAirport"
                    placeholder="Indira Gandhi International"
                    value={
                      formData.fromAirport
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Code *
                  </label>

                  <input
                    type="text"
                    name="fromCode"
                    placeholder="DEL"
                    value={
                      formData.fromCode
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>


              </div>


              <div className="route-title">
                Arrival
              </div>


              <div className="form-row">


                <div className="form-group">

                  <label>
                    City *
                  </label>

                  <input
                    type="text"
                    name="toCity"
                    placeholder="Mumbai"
                    value={
                      formData.toCity
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Airport *
                  </label>

                  <input
                    type="text"
                    name="toAirport"
                    placeholder="Chhatrapati Shivaji Airport"
                    value={
                      formData.toAirport
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Code *
                  </label>

                  <input
                    type="text"
                    name="toCode"
                    placeholder="BOM"
                    value={
                      formData.toCode
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>


              </div>

            </div>

          </div>


          {/* =================================================
              SCHEDULE
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                Schedule
              </h3>

              <span>
                Date, time and terminal
              </span>

            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Departure Date *
                </label>

                <input
                  type="date"
                  name="departureDate"
                  value={
                    formData.departureDate
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Departure Time *
                </label>

                <input
                  type="time"
                  name="departureTime"
                  value={
                    formData.departureTime
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Departure Terminal
                </label>

                <input
                  type="text"
                  name="departureTerminal"
                  placeholder="T1"
                  value={
                    formData.departureTerminal
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Arrival Terminal
                </label>

                <input
                  type="text"
                  name="arrivalTerminal"
                  placeholder="T2"
                  value={
                    formData.arrivalTerminal
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Arrival Date *
                </label>

                <input
                  type="date"
                  name="arrivalDate"
                  value={
                    formData.arrivalDate
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Arrival Time *
                </label>

                <input
                  type="time"
                  name="arrivalTime"
                  value={
                    formData.arrivalTime
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Duration *
                </label>

                <input
                  type="text"
                  name="duration"
                  placeholder="2h 15m"
                  value={
                    formData.duration
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Stops
                </label>

                <select
                  name="stops"
                  value={
                    formData.stops
                  }
                  onChange={
                    handleChange
                  }
                >

                  <option value="Non-stop">
                    Non-stop
                  </option>

                  <option value="1 Stop">
                    1 Stop
                  </option>

                  <option value="2 Stops">
                    2 Stops
                  </option>

                </select>

              </div>


            </div>


            {formData.stops !== "Non-stop" && (

              <div className="form-row">


                <div className="form-group">

                  <label>
                    Stop Airport
                  </label>

                  <input
                    type="text"
                    name="stopAirport"
                    placeholder="Airport"
                    value={
                      formData.stopAirport
                    }
                    onChange={
                      handleChange
                    }
                  />

                </div>


                <div className="form-group">

                  <label>
                    Stop City
                  </label>

                  <input
                    type="text"
                    name="stopCity"
                    placeholder="City"
                    value={
                      formData.stopCity
                    }
                    onChange={
                      handleChange
                    }
                  />

                </div>


              </div>

            )}

          </div>


          {/* =================================================
              CABINS
          ================================================= */}

          <div className="form-section">

            <div className="section-heading cabin-heading">

              <div>

                <h3>
                  Cabins
                </h3>

                <span>
                  Seat and cabin pricing
                </span>

              </div>


              <button
                type="button"
                className="add-cabin-btn"
                onClick={addCabin}
              >

                <FaPlus />

                Add Cabin

              </button>

            </div>


            {cabins.map(
              (cabin, index) => (

                <div
                  className="cabin-card"
                  key={index}
                >

                  <div className="cabin-card-header">

                    <strong>
                      Cabin {index + 1}
                    </strong>


                    {cabins.length > 1 && (

                      <button
                        type="button"
                        className="remove-cabin-btn"
                        onClick={() =>
                          removeCabin(index)
                        }
                      >

                        <FaTrash />

                      </button>

                    )}

                  </div>


                  <div className="form-row">


                    <div className="form-group">

                      <label>
                        Cabin
                      </label>

                      <select
                        value={
                          cabin.name
                        }
                        onChange={(e) =>
                          handleCabinChange(
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      >

                        <option>
                          Economy
                        </option>

                        <option>
                          Premium Economy
                        </option>

                        <option>
                          Business
                        </option>

                        <option>
                          First Class
                        </option>

                      </select>

                    </div>


                    <div className="form-group">

                      <label>
                        Total Seats
                      </label>

                      <input
                        type="number"
                        min="0"
                        value={
                          cabin.totalSeats
                        }
                        onChange={(e) =>
                          handleCabinChange(
                            index,
                            "totalSeats",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Available
                      </label>

                      <input
                        type="number"
                        min="0"
                        value={
                          cabin.availableSeats
                        }
                        onChange={(e) =>
                          handleCabinChange(
                            index,
                            "availableSeats",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Price
                      </label>

                      <input
                        type="number"
                        min="0"
                        value={
                          cabin.price
                        }
                        onChange={(e) =>
                          handleCabinChange(
                            index,
                            "price",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Baggage
                      </label>

                      <input
                        type="text"
                        value={
                          cabin.baggage
                        }
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

          </div>


          {/* =================================================
              TICKET INVENTORY
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                Ticket Inventory
              </h3>

              <span>
                Add airline tickets and individual PNR numbers
              </span>

            </div>


            <div className="ticket-inventory-box">

              <div className="ticket-inventory-top">


                <div className="ticket-count-box">

                  <label>
                    Total Tickets *
                  </label>

                  <input
                    type="number"
                    name="totalTickets"
                    min="1"
                    placeholder="e.g. 100"
                    value={
                      formData.totalTickets
                    }
                    onChange={
                      handleChange
                    }
                  />

                </div>


                <div className="pnr-box">

                  <label>
                    PNR Numbers *
                  </label>

                  <textarea
                    name="tickets"
                    placeholder={`Enter one PNR per line

ABC123
DEF456
GHI789
JKL321`}
                    value={
                      formData.tickets
                    }
                    onChange={
                      handleChange
                    }
                  />


                  <p className="pnr-help">

                    Har ticket ka alag PNR enter karo.
                    Ek line me ek PNR.

                  </p>


                  <div className="pnr-count">

                    <span>
                      PNR Entered
                    </span>

                    <strong>
                      {pnrCount}
                    </strong>

                  </div>

                </div>


              </div>


              <p className="pnr-help">

                Example: Agar airline se 100 tickets liye hain,
                Total Tickets = 100 aur 100 unique PNR enter karo.

              </p>

            </div>

          </div>


          {/* =================================================
              GENERAL PRICING
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                General Pricing
              </h3>

              <span>
                General flight fare and charges
              </span>

            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Base Fare
                </label>

                <input
                  type="number"
                  min="0"
                  name="baseFare"
                  placeholder="4500"
                  value={
                    formData.baseFare
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Taxes
                </label>

                <input
                  type="number"
                  min="0"
                  name="taxes"
                  placeholder="350"
                  value={
                    formData.taxes
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Airport Charges
                </label>

                <input
                  type="number"
                  min="0"
                  name="airportCharges"
                  value={
                    formData.airportCharges
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Service Fee
                </label>

                <input
                  type="number"
                  min="0"
                  name="serviceFee"
                  value={
                    formData.serviceFee
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Discount
                </label>

                <input
                  type="number"
                  min="0"
                  name="discount"
                  value={
                    formData.discount
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Final Price *
                </label>

                <input
                  type="number"
                  min="0"
                  name="finalPrice"
                  placeholder="5000"
                  value={
                    formData.finalPrice
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


            </div>

          </div>


          {/* =================================================
              PASSENGER FARES
          ================================================= */}

          <div className="form-section passenger-pricing-section">

            <div className="section-heading">

              <h3>
                Passenger Fares
              </h3>

              <span>
                Set separate ticket prices for adults, children and infants
              </span>

            </div>


            <div className="pricing-info-box">

              <strong>
                Important
              </strong>

              <p>
                Customer ke selected passenger count ke according
                backend final fare calculate karega.
              </p>

            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Adult Fare *
                </label>

                <input
                  type="number"
                  min="0"
                  name="adultFare"
                  placeholder="e.g. 5000"
                  value={
                    formData.adultFare
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Child Fare *
                </label>

                <input
                  type="number"
                  min="0"
                  name="childFare"
                  placeholder="e.g. 3500"
                  value={
                    formData.childFare
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Infant Fare *
                </label>

                <input
                  type="number"
                  min="0"
                  name="infantFare"
                  placeholder="e.g. 1500"
                  value={
                    formData.infantFare
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


            </div>

          </div>


          {/* =================================================
              MEAL PRICES
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                Meal Prices
              </h3>

              <span>
                Passenger type wise meal pricing
              </span>

            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Adult Meal Price
                </label>

                <input
                  type="number"
                  min="0"
                  name="adultMealPrice"
                  placeholder="e.g. 500"
                  value={
                    formData.adultMealPrice
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Child Meal Price
                </label>

                <input
                  type="number"
                  min="0"
                  name="childMealPrice"
                  placeholder="e.g. 300"
                  value={
                    formData.childMealPrice
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Infant Meal Price
                </label>

                <input
                  type="number"
                  min="0"
                  name="infantMealPrice"
                  placeholder="e.g. 150"
                  value={
                    formData.infantMealPrice
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


            </div>

          </div>


          {/* =================================================
              BAGGAGE PRICES
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                Baggage Prices
              </h3>

              <span>
                Passenger type wise extra baggage pricing
              </span>

            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Adult Baggage Price
                </label>

                <input
                  type="number"
                  min="0"
                  name="adultBaggagePrice"
                  placeholder="e.g. 1000"
                  value={
                    formData.adultBaggagePrice
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Child Baggage Price
                </label>

                <input
                  type="number"
                  min="0"
                  name="childBaggagePrice"
                  placeholder="e.g. 700"
                  value={
                    formData.childBaggagePrice
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Infant Baggage Price
                </label>

                <input
                  type="number"
                  min="0"
                  name="infantBaggagePrice"
                  placeholder="e.g. 300"
                  value={
                    formData.infantBaggagePrice
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


            </div>

          </div>


          {/* =================================================
              SEAT PRICES
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                Seat Prices
              </h3>

              <span>
                Passenger type wise seat selection pricing
              </span>

            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Adult Seat Price
                </label>

                <input
                  type="number"
                  min="0"
                  name="adultSeatPrice"
                  placeholder="e.g. 500"
                  value={
                    formData.adultSeatPrice
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Child Seat Price
                </label>

                <input
                  type="number"
                  min="0"
                  name="childSeatPrice"
                  placeholder="e.g. 300"
                  value={
                    formData.childSeatPrice
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Infant Seat Price
                </label>

                <input
                  type="number"
                  min="0"
                  name="infantSeatPrice"
                  placeholder="e.g. 0"
                  value={
                    formData.infantSeatPrice
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


            </div>

          </div>


          {/* =================================================
              BAGGAGE
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                Baggage
              </h3>

              <span>
                Included and general extra baggage
              </span>

            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Cabin Baggage
                </label>

                <input
                  type="text"
                  name="cabinBaggage"
                  value={
                    formData.cabinBaggage
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Check-in Baggage
                </label>

                <input
                  type="text"
                  name="checkinBaggage"
                  value={
                    formData.checkinBaggage
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


            </div>


            <div className="form-row">

              <div className="form-group">

                <label>
                  General Extra Baggage Price
                </label>

                <input
                  type="number"
                  min="0"
                  name="extraBaggagePrice"
                  placeholder="500"
                  value={
                    formData.extraBaggagePrice
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>

            </div>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                Services
              </h3>

              <span>
                Available onboard facilities
              </span>

            </div>


            <div className="checkbox-grid">


              <label className="check-item">

                <input
                  type="checkbox"
                  name="mealAvailable"
                  checked={
                    formData.mealAvailable
                  }
                  onChange={
                    handleChange
                  }
                />

                Meal Available

              </label>


              <label className="check-item">

                <input
                  type="checkbox"
                  name="wifiAvailable"
                  checked={
                    formData.wifiAvailable
                  }
                  onChange={
                    handleChange
                  }
                />

                WiFi

              </label>


              <label className="check-item">

                <input
                  type="checkbox"
                  name="entertainmentAvailable"
                  checked={
                    formData.entertainmentAvailable
                  }
                  onChange={
                    handleChange
                  }
                />

                Entertainment

              </label>


              <label className="check-item">

                <input
                  type="checkbox"
                  name="powerAvailable"
                  checked={
                    formData.powerAvailable
                  }
                  onChange={
                    handleChange
                  }
                />

                Power

              </label>


            </div>

          </div>


          {/* =================================================
              BOOKING RULES
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                Booking Rules
              </h3>

              <span>
                Booking dates and ticket rules
              </span>

            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Booking Start Date
                </label>

                <input
                  type="date"
                  name="bookingStartDate"
                  value={
                    formData.bookingStartDate
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Booking Closing Date
                </label>

                <input
                  type="date"
                  name="bookingClosingDate"
                  value={
                    formData.bookingClosingDate
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


            </div>


            <div className="checkbox-grid">


              <label className="check-item">

                <input
                  type="checkbox"
                  name="refundable"
                  checked={
                    formData.refundable
                  }
                  onChange={
                    handleChange
                  }
                />

                Refundable

              </label>


              <label className="check-item">

                <input
                  type="checkbox"
                  name="changeable"
                  checked={
                    formData.changeable
                  }
                  onChange={
                    handleChange
                  }
                />

                Changeable

              </label>


            </div>

          </div>


          {/* =================================================
              STATUS
          ================================================= */}

          <div className="form-section">

            <div className="section-heading">

              <h3>
                Status
              </h3>

              <span>
                Current flight status
              </span>

            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Status
                </label>

                <select
                  name="status"
                  value={
                    formData.status
                  }
                  onChange={
                    handleChange
                  }
                >

                  <option value="Scheduled">
                    Scheduled
                  </option>

                  <option value="Delayed">
                    Delayed
                  </option>

                  <option value="Cancelled">
                    Cancelled
                  </option>

                  <option value="Boarding">
                    Boarding
                  </option>

                  <option value="Departed">
                    Departed
                  </option>

                  <option value="Arrived">
                    Arrived
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Stop / Layover Duration
                </label>

                <input
                  type="text"
                  name="layoverDuration"
                  placeholder="1h 30m"
                  value={
                    formData.layoverDuration
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


            </div>


            <div className="form-row">


              <div className="form-group">

                <label>
                  Description
                </label>

                <textarea
                  name="description"
                  placeholder="Flight description..."
                  value={
                    formData.description
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Special Instructions
                </label>

                <textarea
                  name="specialInstructions"
                  placeholder="Special instructions..."
                  value={
                    formData.specialInstructions
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>


            </div>

          </div>


          {/* =================================================
              FOOTER
          ================================================= */}

          <div className="add-flight-footer">

            <button
              type="button"
              className="cancel-flight-btn"
              onClick={handleClose}
              disabled={saving}
            >

              <FaTimes />

              Cancel

            </button>


            <button
              type="submit"
              className="save-flight-btn"
              disabled={saving}
            >

              <FaSave />

              {saving
                ? "Saving..."
                : "Save Flight"}

            </button>

          </div>


        </form>

      </div>

    </div>

  );
}


export default AddFlight;