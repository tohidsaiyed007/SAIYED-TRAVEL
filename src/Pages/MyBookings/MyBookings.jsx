


// import "./MyBookings.css";

// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";

// import { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import {
//   FaPlaneDeparture,
//   FaSearch,
//   FaEye,
//   FaDownload,
//   FaTimesCircle,
// } from "react-icons/fa";


// function MyBookings() {

//   const navigate = useNavigate();

//   const [bookings, setBookings] = useState([]);

//   const [search, setSearch] = useState("");

//   const [activeTab, setActiveTab] =
//     useState("Upcoming");

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState("");


//   // =====================================================
//   // GET CUSTOMER BOOKINGS
//   // USER ID + EMAIL BASED
//   // =====================================================

//   const fetchMyBookings = async () => {

//     try {

//       setLoading(true);

//       setError("");


//       // =================================================
//       // TOKEN
//       // =================================================

//       const token =
//         localStorage.getItem("token") || "";


//       // =================================================
//       // GET LOGGED-IN USER
//       // =================================================

//       let user = null;

//       try {

//         const storedUser =
//           localStorage.getItem("user");

//         user =
//           storedUser
//             ? JSON.parse(storedUser)
//             : null;

//       } catch (err) {

//         console.error(
//           "USER JSON ERROR:",
//           err
//         );

//         user = null;

//       }


//       // =================================================
//       // USER ID
//       // =================================================

//       const userId =
//         user?._id ||
//         user?.id ||
//         localStorage.getItem("userId") ||
//         "";


//       // =================================================
//       // CUSTOMER EMAIL
//       // =================================================

//       const userEmail =
//         String(
//           user?.email ||
//           user?.emailAddress ||
//           user?.userEmail ||
//           localStorage.getItem("userEmail") ||
//           localStorage.getItem("email") ||
//           ""
//         )
//           .trim()
//           .toLowerCase();


//       // =================================================
//       // DEBUG
//       // =================================================

//       console.log(
//         "========================================"
//       );

//       console.log(
//         "MY BOOKINGS REQUEST"
//       );

//       console.log(
//         "USER ID:",
//         userId
//       );

//       console.log(
//         "USER EMAIL:",
//         userEmail
//       );

//       console.log(
//         "========================================"
//       );


//       // =================================================
//       // QUERY PARAMETERS
//       // EMAIL IS SENT IN URL
//       // NOT IN CUSTOM HEADER
//       // =================================================

//       const params =
//         new URLSearchParams();


//       if (userId) {

//         params.append(
//           "userId",
//           userId
//         );

//       }


//       if (userEmail) {

//         params.append(
//           "email",
//           userEmail
//         );

//       }


//       // =================================================
//       // API URL
//       // =================================================

//       const url =
//         `https://saiyed-travels-backend-1.onrender.com/api/bookings/my-bookings?${params.toString()}`;


//       console.log(
//         "MY BOOKINGS URL:",
//         url
//       );


//       // =================================================
//       // HEADERS
//       // IMPORTANT:
//       // NO x-user-email HEADER
//       // =================================================

//       const headers = {

//         "Content-Type":
//           "application/json",

//         ...(token
//           ? {
//               Authorization:
//                 `Bearer ${token}`,
//             }
//           : {}),

//         ...(userId
//           ? {
//               "x-user-id":
//                 userId,
//             }
//           : {}),

//       };


//       // =================================================
//       // REQUEST
//       // =================================================

//       const response =
//         await fetch(
//           url,
//           {
//             method: "GET",
//             headers,
//           }
//         );


//       // =================================================
//       // RESPONSE
//       // =================================================

//       const data =
//         await response.json();


//       console.log(
//         "MY BOOKINGS RESPONSE:",
//         data
//       );


//       // =================================================
//       // ERROR
//       // =================================================

//       if (!response.ok) {

//         throw new Error(
//           data?.message ||
//           "Unable to load bookings."
//         );

//       }


//       // =================================================
//       // BOOKINGS
//       // =================================================

//       const customerBookings =
//         Array.isArray(
//           data?.bookings
//         )
//           ? data.bookings
//           : [];


//       console.log(
//         "CUSTOMER BOOKINGS FOUND:",
//         customerBookings.length
//       );


//       // =================================================
//       // SET BOOKINGS
//       // =================================================

//       setBookings(
//         customerBookings
//       );


//     } catch (error) {

//       console.error(
//         "MY BOOKINGS ERROR:",
//         error
//       );


//       setBookings([]);


//       setError(
//         error.message ||
//         "Unable to load your bookings."
//       );


//     } finally {

//       setLoading(false);

//     }

//   };


//   // =====================================================
//   // LOAD BOOKINGS
//   // REFRESH EVERY 3 SECONDS
//   // =====================================================
// // =====================================================
// // LOAD BOOKINGS
// // =====================================================

// useEffect(() => {
//   fetchMyBookings();

//   const handleVisibilityChange = () => {
//     if (document.visibilityState === "visible") {
//       fetchMyBookings();
//     }
//   };

//   document.addEventListener(
//     "visibilitychange",
//     handleVisibilityChange
//   );

//   return () => {
//     document.removeEventListener(
//       "visibilitychange",
//       handleVisibilityChange
//     );
//   };
// }, []);
//   // useEffect(() => {

//   //   fetchMyBookings();


//   //   const bookingInterval =
//   //     setInterval(() => {

//   //       fetchMyBookings();

//   //     }, 3000);


//   //   const handleVisibilityChange =
//   //     () => {

//   //       if (
//   //         document.visibilityState ===
//   //         "visible"
//   //       ) {

//   //         fetchMyBookings();

//   //       }

//   //     };


//   //   document.addEventListener(
//   //     "visibilitychange",
//   //     handleVisibilityChange
//   //   );


//   //   return () => {

//   //     clearInterval(
//   //       bookingInterval
//   //     );


//   //     document.removeEventListener(
//   //       "visibilitychange",
//   //       handleVisibilityChange
//   //     );

//   //   };

//   // }, []);


//   // =====================================================
//   // FORMAT DATE
//   // =====================================================

//   const formatDate = (
//     date
//   ) => {

//     if (!date) {

//       return "N/A";

//     }


//     try {

//       return new Date(
//         date
//       ).toLocaleDateString(
//         "en-IN",
//         {
//           day: "2-digit",
//           month: "short",
//           year: "numeric",
//         }
//       );

//     } catch (error) {

//       return date;

//     }

//   };


//   // =====================================================
//   // GET BOOKING STATUS
//   // =====================================================

//   const getStatus = (
//     booking
//   ) => {

//     return (
//       booking?.bookingStatus ||
//       booking?.status ||
//       "Confirmed"
//     );

//   };


//   // =====================================================
//   // BOOKING CATEGORY
//   // =====================================================

//   const getBookingCategory = (
//     booking
//   ) => {

//     const status =
//       String(
//         getStatus(
//           booking
//         )
//       ).toLowerCase();


//     if (
//       status.includes(
//         "cancel"
//       )
//     ) {

//       return "Cancelled";

//     }


//     if (
//       status.includes(
//         "complete"
//       )
//     ) {

//       return "Completed";

//     }


//     return "Upcoming";

//   };


//   // =====================================================
//   // SEARCH + TAB FILTER
//   // =====================================================

//   const filteredBookings =
//     useMemo(() => {

//       return bookings.filter(
//         (booking) => {

//           const bookingId =
//             String(
//               booking?.bookingId ||
//               booking?.id ||
//               ""
//             ).toLowerCase();


//           const pnr =
//             String(
//               booking?.pnr ||
//               ""
//             ).toLowerCase();


//           const searchText =
//             search
//               .trim()
//               .toLowerCase();


//           const matchesSearch =
//             !searchText ||
//             bookingId.includes(
//               searchText
//             ) ||
//             pnr.includes(
//               searchText
//             );


//           const category =
//             getBookingCategory(
//               booking
//             );


//           const matchesTab =
//             activeTab ===
//             category;


//           return (
//             matchesSearch &&
//             matchesTab
//           );

//         }
//       );

//     }, [
//       bookings,
//       search,
//       activeTab,
//     ]);


//   // =====================================================
//   // VIEW TICKET
//   // =====================================================

//   const handleViewTicket = (
//     booking
//   ) => {

//     navigate(
//       "/success",
//       {
//         state: {
//           booking,
//           fromMyBookings: true,
//           autoDownload: false,
//         },
//       }
//     );

//   };


//   // =====================================================
//   // DOWNLOAD TICKET
//   // =====================================================

//   const handleDownload = (
//     booking
//   ) => {

//     navigate(
//       "/success",
//       {
//         state: {
//           booking,
//           fromMyBookings: true,
//           autoDownload: true,
//         },
//       }
//     );

//   };


//   // =====================================================
//   // CANCEL BOOKING
//   // =====================================================

//   const handleCancel = async (
//     booking
//   ) => {

//     const confirmCancel =
//       window.confirm(
//         "Are you sure you want to cancel this booking?"
//       );


//     if (!confirmCancel) {

//       return;

//     }


//     try {

//       const token =
//         localStorage.getItem(
//           "token"
//         ) || "";


//       const userId =
//         localStorage.getItem(
//           "userId"
//         ) || "";


//       const response =
//         await fetch(
//           `https://saiyed-travels-backend-1.onrender.com/api/bookings/${booking._id}`,
//           {
//             method: "DELETE",

//             headers: {

//               "Content-Type":
//                 "application/json",

//               ...(token
//                 ? {
//                     Authorization:
//                       `Bearer ${token}`,
//                   }
//                 : {}),

//               ...(userId
//                 ? {
//                     "x-user-id":
//                       userId,
//                   }
//                 : {}),

//             },

//           }
//         );


//       const data =
//         await response.json();


//       if (!response.ok) {

//         throw new Error(
//           data?.message ||
//           "Unable to cancel booking."
//         );

//       }


//       await fetchMyBookings();


//       alert(
//         "Booking cancelled successfully."
//       );


//     } catch (error) {

//       console.error(
//         "CANCEL BOOKING ERROR:",
//         error
//       );


//       alert(
//         error.message ||
//         "Unable to cancel booking."
//       );

//     }

//   };


//   // =====================================================
//   // LOADING
//   // =====================================================

//   if (loading) {

//     return (

//       <>

//         <Navbar />

//         <section
//           className="bookings-page"
//         >

//           <div
//             className="booking-hero"
//           >

//             <h1>
//               My Bookings
//             </h1>

//             <p>
//               Loading your bookings...
//             </p>

//           </div>


//           <div
//             className="booking-loading"
//           >

//             <div
//               className="booking-loader"
//             ></div>

//             <p>
//               Please wait...
//             </p>

//           </div>

//         </section>


//         <Footer />

//       </>

//     );

//   }


//   // =====================================================
//   // PAGE
//   // =====================================================

//   return (

//     <>

//       <Navbar />


//       <section
//         className="bookings-page"
//       >


//         {/* =================================================
//             HERO
//         ================================================= */}

//         <div
//           className="booking-hero"
//         >

//           <h1>
//             My Bookings
//           </h1>

//           <p>
//             View, manage and track all your
//             flight bookings in one place.
//           </p>

//         </div>


//         {/* =================================================
//             SEARCH
//         ================================================= */}

//         <div
//           className="booking-search"
//         >

//           <div
//             className="search-box"
//           >

//             <FaSearch />

//             <input
//               type="text"
//               placeholder="Search Booking ID or PNR"
//               value={search}
//               onChange={(e) =>
//                 setSearch(
//                   e.target.value
//                 )
//               }
//             />

//           </div>

//         </div>


//         {/* =================================================
//             ERROR
//         ================================================= */}

//         {error && (

//           <div
//             className="booking-error"
//           >

//             <p>
//               {error}
//             </p>

//             <button
//               type="button"
//               onClick={
//                 fetchMyBookings
//               }
//             >
//               Try Again
//             </button>

//           </div>

//         )}


//         {/* =================================================
//             TABS
//         ================================================= */}

//         <div
//           className="booking-tabs"
//         >

//           <button
//             className={
//               activeTab ===
//               "Upcoming"
//                 ? "active"
//                 : ""
//             }
//             onClick={() =>
//               setActiveTab(
//                 "Upcoming"
//               )
//             }
//           >
//             Upcoming
//           </button>


//           <button
//             className={
//               activeTab ===
//               "Completed"
//                 ? "active"
//                 : ""
//             }
//             onClick={() =>
//               setActiveTab(
//                 "Completed"
//               )
//             }
//           >
//             Completed
//           </button>


//           <button
//             className={
//               activeTab ===
//               "Cancelled"
//                 ? "active"
//                 : ""
//             }
//             onClick={() =>
//               setActiveTab(
//                 "Cancelled"
//               )
//             }
//           >
//             Cancelled
//           </button>

//         </div>


//         {/* =================================================
//             EMPTY
//         ================================================= */}

//         {!error &&
//           filteredBookings.length ===
//             0 && (

//             <div
//               className="no-bookings"
//             >

//               <div
//                 className="no-bookings-icon"
//               >

//                 <FaPlaneDeparture />

//               </div>


//               <h2>
//                 No {activeTab} Bookings
//               </h2>


//               <p>

//                 {search
//                   ? "No booking found matching your search."
//                   : `You don't have any ${activeTab.toLowerCase()} bookings.`}

//               </p>

//             </div>

//           )}


//         {/* =================================================
//             BOOKING LIST
//         ================================================= */}

//         <div
//           className="booking-list"
//         >

//           {filteredBookings.map(
//             (booking) => {

//               // =================================================
//               // FLIGHT
//               // =================================================

//               const flight =
//                 booking?.flight ||
//                 {};


//               // =================================================
//               // PASSENGER
//               // =================================================

//               const passenger =
//                 booking?.passengers?.[0] ||
//                 booking?.passenger ||
//                 {};


//               const passengerName =
//                 `${passenger?.firstName || ""} ${
//                   passenger?.lastName || ""
//                 }`.trim() ||
//                 "Customer";


//               const passengerEmail =
//                 passenger?.email ||
//                 "No Email";


//               const passengerPhone =
//                 passenger?.phone ||
//                 "No Phone";


//               const passengerDOB =
//                 passenger?.dob ||
//                 "N/A";


//               const passengerGender =
//                 passenger?.gender ||
//                 "N/A";


//               const passengerPassport =
//                 passenger?.passport ||
//                 "N/A";


//               const passengerCity =
//                 passenger?.city ||
//                 "N/A";


//               const passengerAddress =
//                 passenger?.address ||
//                 "N/A";


//               // =================================================
//               // STATUS
//               // =================================================

//               const status =
//                 getStatus(
//                   booking
//                 );


//               // =================================================
//               // SEAT
//               // =================================================

//               const seat =
//                 booking?.seat ||
//                 booking?.seats?.[0]
//                   ?.seatNumber ||
//                 "N/A";


//               // =================================================
//               // MEAL
//               // =================================================

//               const meal =
//                 booking?.meal?.name ||
//                 booking?.meals?.[0]
//                   ?.name ||
//                 "No Meal";


//               // =================================================
//               // BAGGAGE
//               // =================================================

//               const baggage =
//                 booking?.baggage?.weight ||
//                 booking?.baggages?.[0]
//                   ?.weight ||
//                 "15 KG";


//               // =================================================
//               // PRICE
//               // =================================================

//               const price =
//                 booking?.total ??
//                 booking?.finalPrice ??
//                 booking?.price ??
//                 0;


//               return (

//                 <div
//                   className="booking-card"
//                   key={
//                     booking?._id ||
//                     booking?.bookingId
//                   }
//                 >


//                   {/* =================================================
//                       LEFT
//                   ================================================= */}

//                   <div
//                     className="booking-left"
//                   >

//                     <div
//                       className="airline-icon"
//                     >

//                       <FaPlaneDeparture />

//                     </div>


//                     <div>

//                       <h2>

//                         {
//                           flight?.airline ||
//                           booking?.airline ||
//                           "Airline"
//                         }

//                       </h2>


//                       <p>

//                         {
//                           flight?.flightNo ||
//                           booking?.flightNo ||
//                           "Flight"
//                         }

//                       </p>


//                       <span>

//                         {
//                           flight?.fromCity ||
//                           flight?.from ||
//                           booking?.from ||
//                           "From"
//                         }

//                         {" → "}

//                         {
//                           flight?.toCity ||
//                           flight?.to ||
//                           booking?.to ||
//                           "To"
//                         }

//                       </span>

//                     </div>

//                   </div>


//                   {/* =================================================
//                       MIDDLE
//                   ================================================= */}

//                   <div
//                     className="booking-middle"
//                   >


//                     <div>

//                       <strong>
//                         Booking ID
//                       </strong>

//                       <p>
//                         {
//                           booking?.bookingId ||
//                           booking?.id ||
//                           "N/A"
//                         }
//                       </p>

//                     </div>


//                     <div>

//                       <strong>
//                         PNR
//                       </strong>

//                       <p>
//                         {
//                           booking?.pnr ||
//                           "N/A"
//                         }
//                       </p>

//                     </div>


//                     <div>

//                       <strong>
//                         Passenger
//                       </strong>

//                       <p>

//                         {
//                           passenger?.firstName ||
//                           ""
//                         }{" "}

//                         {
//                           passenger?.lastName ||
//                           ""
//                         }

//                       </p>

//                     </div>


//                     <div>

//                       <strong>
//                         Date
//                       </strong>

//                       <p>

//                         {
//                           formatDate(
//                             flight?.departureDate ||
//                             booking?.departureDate
//                           )
//                         }

//                       </p>

//                     </div>


//                     <div>

//                       <strong>
//                         Departure
//                       </strong>

//                       <p>

//                         {
//                           flight?.departureTime ||
//                           booking?.departure ||
//                           "N/A"
//                         }

//                       </p>

//                     </div>


//                     <div>

//                       <strong>
//                         Arrival
//                       </strong>

//                       <p>

//                         {
//                           flight?.arrivalTime ||
//                           booking?.arrival ||
//                           "N/A"
//                         }

//                       </p>

//                     </div>


//                     <div>

//                       <strong>
//                         Seat
//                       </strong>

//                       <p>
//                         {seat}
//                       </p>

//                     </div>


//                     <div>

//                       <strong>
//                         Meal
//                       </strong>

//                       <p>
//                         {meal}
//                       </p>

//                     </div>


//                     <div>

//                       <strong>
//                         Baggage
//                       </strong>

//                       <p>
//                         {baggage}
//                       </p>

//                     </div>


//                   </div>


//                   {/* =================================================
//                       RIGHT
//                   ================================================= */}

//                   <div
//                     className="booking-right"
//                   >


//                     <span
//                       className={`
//                         status
//                         ${
//                           status
//                             .toLowerCase()
//                             .includes("cancel")
//                             ? "cancelled"
//                             : status
//                                 .toLowerCase()
//                                 .includes("complete")
//                             ? "completed"
//                             : "confirmed"
//                         }
//                       `}
//                     >

//                       {status}

//                     </span>


//                     <h2
//                       className="booking-price"
//                     >

//                       ₹{" "}

//                       {Number(
//                         price
//                       ).toLocaleString(
//                         "en-IN"
//                       )}

//                     </h2>


//                     {/* =================================================
//                         BUTTONS
//                     ================================================= */}

//                     <div
//                       className="booking-buttons"
//                     >


//                       {/* VIEW TICKET */}

//                       <button
//                         type="button"
//                         className="view-btn"
//                         onClick={() =>
//                           handleViewTicket(
//                             booking
//                           )
//                         }
//                       >

//                         <FaEye />

//                         View Ticket

//                       </button>


//                       {/* DOWNLOAD TICKET */}

//                       <button
//                         type="button"
//                         className="download-btn"
//                         onClick={() =>
//                           handleDownload(
//                             booking
//                           )
//                         }
//                       >

//                         <FaDownload />

//                         Download

//                       </button>


//                       {/* CANCEL */}

//                       {!status
//                         .toLowerCase()
//                         .includes(
//                           "cancel"
//                         ) && (

//                         <button
//                           type="button"
//                           className="cancel-btn"
//                           onClick={() =>
//                             handleCancel(
//                               booking
//                             )
//                           }
//                         >

//                           <FaTimesCircle />

//                           Cancel

//                         </button>

//                       )}

//                     </div>


//                   </div>


//                 </div>

//               );

//             }
//           )}

//         </div>

//       </section>


//       <Footer />

//     </>

//   );

// }


// export default MyBookings;




import "./MyBookings.css";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaPlaneDeparture,
  FaSearch,
  FaHome,
  FaEye,
  FaDownload,
  FaTimesCircle,
} from "react-icons/fa";

function MyBookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // GET CUSTOMER BOOKINGS
  // =====================================================
  const fetchMyBookings = async () => {
    try {
      setLoading(true);
      setError("");

      // TOKEN
      const token =
        localStorage.getItem("token") || "";

      // GET USER
      let user = null;

      try {
        const storedUser =
          localStorage.getItem("user");

        user = storedUser
          ? JSON.parse(storedUser)
          : null;
      } catch (err) {
        console.error(
          "USER JSON ERROR:",
          err
        );
      }

      // USER ID
      const userId =
        user?._id ||
        user?.id ||
        localStorage.getItem("userId") ||
        "";

      // EMAIL
      const userEmail = String(
        user?.email ||
          user?.emailAddress ||
          user?.userEmail ||
          localStorage.getItem("userEmail") ||
          localStorage.getItem("email") ||
          ""
      )
        .trim()
        .toLowerCase();

      // QUERY
      const params =
        new URLSearchParams();

      if (userId) {
        params.append(
          "userId",
          userId
        );
      }

      if (userEmail) {
        params.append(
          "email",
          userEmail
        );
      }

      // API
      const url =
        `https://saiyed-travels-backend-1.onrender.com/api/bookings/my-bookings?${params.toString()}`;

      console.log(
        "MY BOOKINGS URL:",
        url
      );

      // HEADERS
      const headers = {
        "Content-Type":
          "application/json",

        ...(token
          ? {
              Authorization:
                `Bearer ${token}`,
            }
          : {}),

        ...(userId
          ? {
              "x-user-id":
                userId,
            }
          : {}),
      };

      // REQUEST
      const response =
        await fetch(
          url,
          {
            method: "GET",
            headers,
          }
        );

      const data =
        await response.json();

      console.log(
        "MY BOOKINGS RESPONSE:",
        data
      );

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to load bookings."
        );
      }

      const customerBookings =
        Array.isArray(data?.bookings)
          ? data.bookings
          : [];

      console.log(
        "CUSTOMER BOOKINGS FOUND:",
        customerBookings.length
      );

      setBookings(
        customerBookings
      );
    } catch (err) {
      console.error(
        "MY BOOKINGS ERROR:",
        err
      );

      setBookings([]);

      setError(
        err.message ||
          "Unable to load your bookings."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // LOAD BOOKINGS
  // NO 3 SECOND AUTO REFRESH
  // =====================================================
  useEffect(() => {
    fetchMyBookings();

    const handleVisibilityChange = () => {
      if (
        document.visibilityState ===
        "visible"
      ) {
        fetchMyBookings();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  // =====================================================
  // FORMAT DATE
  // =====================================================
  const formatDate = (date) => {
    if (!date) {
      return "N/A";
    }

    try {
      return new Date(
        date
      ).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      );
    } catch {
      return date;
    }
  };

  // =====================================================
  // STATUS
  // =====================================================
  const getStatus = (booking) => {
    return (
      booking?.bookingStatus ||
      booking?.status ||
      "Confirmed"
    );
  };

  // =====================================================
  // SEARCH
  // BOOKING ID + PNR
  // =====================================================
  const searchText =
    search.trim().toLowerCase();

  const filteredBookings =
    bookings.filter((booking) => {
      if (!searchText) {
        return true;
      }

      const bookingId =
        String(
          booking?.bookingId ||
            booking?.id ||
            booking?._id ||
            ""
        ).toLowerCase();

      const pnr =
        String(
          booking?.pnr || ""
        ).toLowerCase();

      return (
        bookingId.includes(
          searchText
        ) ||
        pnr.includes(
          searchText
        )
      );
    });

  // =====================================================
  // VIEW TICKET
  // =====================================================
  const handleViewTicket = (
    booking
  ) => {
    navigate("/success", {
      state: {
        booking,
        fromMyBookings: true,
        autoDownload: false,
      },
    });
  };

  // =====================================================
  // DOWNLOAD TICKET
  // =====================================================
  const handleDownload = (
    booking
  ) => {
    navigate("/success", {
      state: {
        booking,
        fromMyBookings: true,
        autoDownload: true,
      },
    });
  };

  // =====================================================
  // CANCEL BOOKING
  // =====================================================
  const handleCancel = async (
    booking
  ) => {
    const confirmCancel =
      window.confirm(
        "Are you sure you want to cancel this booking?"
      );

    if (!confirmCancel) {
      return;
    }

    try {
      const token =
        localStorage.getItem(
          "token"
        ) || "";

      const userId =
        localStorage.getItem(
          "userId"
        ) || "";

      const response =
        await fetch(
          `https://saiyed-travels-backend-1.onrender.com/api/bookings/${booking._id}`,
          {
            method: "DELETE",

            headers: {
              "Content-Type":
                "application/json",

              ...(token
                ? {
                    Authorization:
                      `Bearer ${token}`,
                  }
                : {}),

              ...(userId
                ? {
                    "x-user-id":
                      userId,
                  }
                : {}),
            },
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to cancel booking."
        );
      }

      alert(
        "Booking cancelled successfully."
      );

      await fetchMyBookings();
    } catch (err) {
      console.error(
        "CANCEL BOOKING ERROR:",
        err
      );

      alert(
        err.message ||
          "Unable to cancel booking."
      );
    }
  };

  // =====================================================
  // LOADING
  // =====================================================
  if (loading) {
    return (
      <>
        <Navbar />

        <section className="bookings-page">

          <div className="booking-hero">

            <div className="booking-hero-content">

              <div className="booking-hero-icon">
                <FaPlaneDeparture />
              </div>

              <h1>
                My Bookings
              </h1>

              <p>
                Loading your bookings...
              </p>

            </div>

          </div>

          <div className="booking-loading">

            <div className="booking-loader"></div>

            <p>
              Please wait...
            </p>

          </div>

        </section>

        <Footer />
      </>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================
  return (
    <>
      <Navbar />

      <section className="bookings-page">

        {/* =================================================
            HERO
        ================================================= */}
        <div className="booking-hero">

          <div className="booking-hero-content">

            <div className="booking-hero-icon">
              <FaPlaneDeparture />
            </div>

            <h1>
              My Bookings
            </h1>

            <p>
              View, manage and track all your
              flight bookings in one place.
            </p>

            {/* HOME BUTTON */}
            <button
              type="button"
              className="home-booking-btn"
              onClick={() =>
                navigate("/")
              }
            >
              <FaHome />
              Home
            </button>

          </div>

        </div>

        {/* =================================================
            SEARCH
        ================================================= */}
        <div className="booking-search">

          <div className="search-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search Booking ID or PNR"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />

            {search && (
              <button
                type="button"
                className="search-clear"
                onClick={() =>
                  setSearch("")
                }
              >
                ×
              </button>
            )}

          </div>

        </div>

        {/* =================================================
            ERROR
        ================================================= */}
        {error && (
          <div className="booking-error">

            <p>
              {error}
            </p>

            <button
              type="button"
              onClick={
                fetchMyBookings
              }
            >
              Try Again
            </button>

          </div>
        )}

        {/* =================================================
            NO SEARCH RESULT
        ================================================= */}
        {!error &&
          bookings.length > 0 &&
          filteredBookings.length === 0 && (
            <div className="no-bookings">

              <div className="no-bookings-icon">
                <FaSearch />
              </div>

              <h2>
                No Booking Found
              </h2>

              <p>
                No booking matches
                "{search}".
              </p>

              <button
                type="button"
                className="home-booking-btn"
                onClick={() =>
                  setSearch("")
                }
              >
                Clear Search
              </button>

            </div>
          )}

        {/* =================================================
            NO BOOKINGS
        ================================================= */}
        {!error &&
          bookings.length === 0 && (
            <div className="no-bookings">

              <div className="no-bookings-icon">
                <FaPlaneDeparture />
              </div>

              <h2>
                No Bookings Found
              </h2>

              <p>
                You don't have any
                flight bookings yet.
              </p>

              <button
                type="button"
                className="home-booking-btn"
                onClick={() =>
                  navigate("/")
                }
              >
                <FaHome />
                Home
              </button>

            </div>
          )}

        {/* =================================================
            BOOKING LIST
        ================================================= */}
        {!error &&
          filteredBookings.length > 0 && (
            <div className="booking-list">

              {filteredBookings.map(
                (booking) => {

                  const flight =
                    booking?.flight ||
                    {};

                  const passenger =
                    booking?.passengers?.[0] ||
                    booking?.passenger ||
                    {};

                  const passengerName =
                    `${passenger?.firstName || ""} ${
                      passenger?.lastName || ""
                    }`.trim() ||
                    "Customer";

                  const status =
                    getStatus(
                      booking
                    );

                  const seat =
                    booking?.seat ||
                    booking?.seats?.[0]
                      ?.seatNumber ||
                    "N/A";

                  const meal =
                    booking?.meal?.name ||
                    booking?.meals?.[0]
                      ?.name ||
                    "No Meal";

                  const baggage =
                    booking?.baggage?.weight ||
                    booking?.baggages?.[0]
                      ?.weight ||
                    "15 KG";

                  const price =
                    booking?.total ??
                    booking?.finalPrice ??
                    booking?.price ??
                    0;

                  return (
                    <div
                      className="booking-card"
                      key={
                        booking?._id ||
                        booking?.bookingId
                      }
                    >

                      {/* LEFT */}
                      <div className="booking-left">

                        <div className="airline-icon">
                          <FaPlaneDeparture />
                        </div>

                        <div>

                          <h2>
                            {
                              flight?.airline ||
                              booking?.airline ||
                              "Airline"
                            }
                          </h2>

                          <p>
                            {
                              flight?.flightNo ||
                              booking?.flightNo ||
                              "Flight"
                            }
                          </p>

                          <span>
                            {
                              flight?.fromCity ||
                              flight?.from ||
                              booking?.from ||
                              "From"
                            }

                            {" → "}

                            {
                              flight?.toCity ||
                              flight?.to ||
                              booking?.to ||
                              "To"
                            }
                          </span>

                        </div>

                      </div>

                      {/* MIDDLE */}
                      <div className="booking-middle">

                        <div>
                          <strong>
                            Booking ID
                          </strong>

                          <p>
                            {
                              booking?.bookingId ||
                              booking?.id ||
                              "N/A"
                            }
                          </p>
                        </div>

                        <div>
                          <strong>
                            PNR
                          </strong>

                          <p>
                            {
                              booking?.pnr ||
                              "N/A"
                            }
                          </p>
                        </div>

                        <div>
                          <strong>
                            Passenger
                          </strong>

                          <p>
                            {passengerName}
                          </p>
                        </div>

                        <div>
                          <strong>
                            Date
                          </strong>

                          <p>
                            {formatDate(
                              flight?.departureDate ||
                              booking?.departureDate
                            )}
                          </p>
                        </div>

                        <div>
                          <strong>
                            Departure
                          </strong>

                          <p>
                            {
                              flight?.departureTime ||
                              booking?.departure ||
                              "N/A"
                            }
                          </p>
                        </div>

                        <div>
                          <strong>
                            Arrival
                          </strong>

                          <p>
                            {
                              flight?.arrivalTime ||
                              booking?.arrival ||
                              "N/A"
                            }
                          </p>
                        </div>

                        <div>
                          <strong>
                            Seat
                          </strong>

                          <p>
                            {seat}
                          </p>
                        </div>

                        <div>
                          <strong>
                            Meal
                          </strong>

                          <p>
                            {meal}
                          </p>
                        </div>

                        <div>
                          <strong>
                            Baggage
                          </strong>

                          <p>
                            {baggage}
                          </p>
                        </div>

                      </div>

                      {/* RIGHT */}
                      <div className="booking-right">

                        <span
                          className={`
                            status
                            ${
                              String(status)
                                .toLowerCase()
                                .includes("cancel")
                                ? "cancelled"
                                : String(status)
                                    .toLowerCase()
                                    .includes("complete")
                                ? "completed"
                                : "confirmed"
                            }
                          `}
                        >
                          {status}
                        </span>

                        <h2 className="booking-price">
                          ₹{" "}
                          {Number(
                            price
                          ).toLocaleString(
                            "en-IN"
                          )}
                        </h2>

                        {/* BUTTONS */}
                        <div className="booking-buttons">

                          {/* VIEW TICKET */}
                          <button
                            type="button"
                            className="view-btn"
                            onClick={() =>
                              handleViewTicket(
                                booking
                              )
                            }
                          >
                            <FaEye />
                            View Ticket
                          </button>

                          {/* DOWNLOAD */}
                          <button
                            type="button"
                            className="download-btn"
                            onClick={() =>
                              handleDownload(
                                booking
                              )
                            }
                          >
                            <FaDownload />
                            Download
                          </button>

                          {/* CANCEL */}
                          {!String(
                            status
                          )
                            .toLowerCase()
                            .includes(
                              "cancel"
                            ) && (
                            <button
                              type="button"
                              className="cancel-btn"
                              onClick={() =>
                                handleCancel(
                                  booking
                                )
                              }
                            >
                              <FaTimesCircle />
                              Cancel
                            </button>
                          )}

                        </div>

                      </div>

                    </div>
                  );
                }
              )}

            </div>
          )}

      </section>

      <Footer />
    </>
  );
}

export default MyBookings;