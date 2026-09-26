
// // // // // // // import "./Hero.css";
// // // // // // // import { FaPlaneDeparture } from "react-icons/fa";
// // // // // // // import { MdFlightTakeoff } from "react-icons/md";
// // // // // // // import { FaUsers } from "react-icons/fa";
// // // // // // // import { FaGlobeAsia } from "react-icons/fa";

// // // // // // // function Hero() {
// // // // // // //   return (
// // // // // // //     <section className="hero">

// // // // // // //       <div className="circle one"></div>
// // // // // // //       <div className="circle two"></div>

// // // // // // //       <div className="hero-left">

// // // // // // //         <span className="hero-badge">
// // // // // // //           ✈ India's Trusted Flight Booking Platform
// // // // // // //         </span>

// // // // // // //         <h1 className="hero-title">
// // // // // // //           Fly Smarter <br />
// // // // // // //           with <span>Saiyed Travels</span>
// // // // // // //         </h1>

// // // // // // //         <p className="hero-description">
// // // // // // //           Compare fares, book domestic & international flights,
// // // // // // //           and travel with confidence.
// // // // // // //         </p>

// // // // // // //         <div className="hero-buttons">
// // // // // // //           <button className="hero-btn">
// // // // // // //             <FaPlaneDeparture />
// // // // // // //             Book Flight
// // // // // // //           </button>

// // // // // // //           <button className="outline-btn">
// // // // // // //             Explore
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //       </div>

// // // // // // //       <div className="hero-right">

// // // // // // //         <img
// // // // // // //           src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
// // // // // // //           alt=""
// // // // // // //         />

// // // // // // //         <div className="card card1">
// // // // // // //           <MdFlightTakeoff />
// // // // // // //           5000+ Flights
// // // // // // //         </div>

// // // // // // //         <div className="card card2">
// // // // // // //           <FaUsers />
// // // // // // //           20K+ Customers
// // // // // // //         </div>

// // // // // // //         <div className="card card3">
// // // // // // //           <FaGlobeAsia />
// // // // // // //           70+ Countries
// // // // // // //         </div>

// // // // // // //       </div>

// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Hero;




// // // // // // import "./Hero.css";
// // // // // // import { FaPlaneDeparture, FaUsers, FaGlobeAsia } from "react-icons/fa";
// // // // // // import { MdFlightTakeoff } from "react-icons/md";

// // // // // // function Hero() {
// // // // // //   return (
// // // // // //     <section className="hero">

// // // // // //       <div className="circle one"></div>
// // // // // //       <div className="circle two"></div>

// // // // // //       {/* ================= LEFT ================= */}

// // // // // //       <div className="hero-left">

// // // // // //         <span className="hero-badge">
// // // // // //           ✈ India's Trusted Flight Booking Platform
// // // // // //         </span>

// // // // // //         <h1 className="hero-title">
// // // // // //           Fly Smarter <br />
// // // // // //           with <span>Saiyed Travels</span>
// // // // // //         </h1>

// // // // // //         <p className="hero-description">
// // // // // //           Compare fares, book domestic & international
// // // // // //           flights, discover exclusive offers and enjoy
// // // // // //           a safe, affordable and seamless travel
// // // // // //           experience with Saiyed Travels.
// // // // // //         </p>

// // // // // //         <div className="hero-buttons">

// // // // // //           <button className="hero-btn">

// // // // // //             <FaPlaneDeparture />

// // // // // //             Book Flight

// // // // // //           </button>

// // // // // //           <button className="outline-btn">

// // // // // //             Explore Offers

// // // // // //           </button>

// // // // // //         </div>

// // // // // //       </div>

// // // // // //       {/* ================= RIGHT ================= */}

// // // // // //       <div className="hero-right">

// // // // // //         <img
// // // // // //           src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
// // // // // //           alt="Flight"
// // // // // //         />

// // // // // //         <div className="card card1">

// // // // // //           <MdFlightTakeoff />

// // // // // //           <div>

// // // // // //             <h4>5000+</h4>

// // // // // //             <p>Flights Daily</p>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //         <div className="card card2">

// // // // // //           <FaUsers />

// // // // // //           <div>

// // // // // //             <h4>20K+</h4>

// // // // // //             <p>Happy Customers</p>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //         <div className="card card3">

// // // // // //           <FaGlobeAsia />

// // // // // //           <div>

// // // // // //             <h4>70+</h4>

// // // // // //             <p>Countries</p>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //       </div>

// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // export default Hero;



// // // // // import "./Hero.css";
// // // // // import { useState } from "react";
// // // // // import {
// // // // //   FaPlaneDeparture,
// // // // //   FaUsers,
// // // // //   FaGlobeAsia,
// // // // //   FaExchangeAlt,
// // // // //   FaSearch,
// // // // // } from "react-icons/fa";
// // // // // import { MdFlightTakeoff } from "react-icons/md";

// // // // // function Hero() {

// // // // //   const [tripType, setTripType] = useState("oneway");

// // // // //   const [searchData, setSearchData] = useState({
// // // // //     from: "",
// // // // //     to: "",
// // // // //     departure: "",
// // // // //     returnDate: "",
// // // // //     travellers: "1 Traveller",
// // // // //     cabin: "Economy",
// // // // //   });

// // // // //   const handleChange = (e) => {
// // // // //     setSearchData({
// // // // //       ...searchData,
// // // // //       [e.target.name]: e.target.value,
// // // // //     });
// // // // //   };

// // // // //   const swapCities = () => {
// // // // //     setSearchData({
// // // // //       ...searchData,
// // // // //       from: searchData.to,
// // // // //       to: searchData.from,
// // // // //     });
// // // // //   };

// // // // //   const handleSearch = () => {
// // // // //     if (
// // // // //       !searchData.from ||
// // // // //       !searchData.to ||
// // // // //       !searchData.departure
// // // // //     ) {
// // // // //       alert("Please fill all required fields.");
// // // // //       return;
// // // // //     }

// // // // //     console.log(searchData);

// // // // //     // Later:
// // // // //     // navigate("/flights", { state: searchData });
// // // // //   };

// // // // //   return (
// // // // //     <section className="hero">

// // // // //       <div className="circle one"></div>
// // // // //       <div className="circle two"></div>

// // // // //       <div className="hero-left">

// // // // //         <span className="hero-badge">
// // // // //           ✈ India's Trusted Flight Booking Platform
// // // // //         </span>

// // // // //         <h1 className="hero-title">
// // // // //           Fly Smarter <br />
// // // // //           with <span>Saiyed Travels</span>
// // // // //         </h1>

// // // // //         <p className="hero-description">
// // // // //           Compare fares, book domestic &
// // // // //           international flights, discover exclusive
// // // // //           offers and enjoy a safe, affordable
// // // // //           travel experience.
// // // // //         </p>

// // // // //         <div className="hero-buttons">

// // // // //           <button className="hero-btn">
// // // // //             <FaPlaneDeparture />
// // // // //             Book Flight
// // // // //           </button>

// // // // //           <button className="outline-btn">
// // // // //             Explore Offers
// // // // //           </button>

// // // // //         </div>  

// // // // //                 {/* ================= SEARCH CARD ================= */}

// // // // //         <div className="search-card">

// // // // //           <div className="trip-type">

// // // // //             <button
// // // // //               className={tripType === "oneway" ? "active" : ""}
// // // // //               onClick={() => setTripType("oneway")}
// // // // //             >
// // // // //               One Way
// // // // //             </button>

// // // // //             <button
// // // // //               className={tripType === "round" ? "active" : ""}
// // // // //               onClick={() => setTripType("round")}
// // // // //             >
// // // // //               Round Trip
// // // // //             </button>

// // // // //             <button
// // // // //               className={tripType === "multi" ? "active" : ""}
// // // // //               onClick={() => setTripType("multi")}
// // // // //             >
// // // // //               Multi City
// // // // //             </button>

// // // // //           </div>

// // // // //           <div className="search-grid">

// // // // //             <div className="field">

// // // // //               <label>From</label>

// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="from"
// // // // //                 placeholder="Delhi"
// // // // //                 value={searchData.from}
// // // // //                 onChange={handleChange}
// // // // //               />

// // // // //             </div>

// // // // //             <button
// // // // //               type="button"
// // // // //               className="swap-btn"
// // // // //               onClick={swapCities}
// // // // //             >
// // // // //               <FaExchangeAlt />
// // // // //             </button>

// // // // //             <div className="field">

// // // // //               <label>To</label>

// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="to"
// // // // //                 placeholder="Dubai"
// // // // //                 value={searchData.to}
// // // // //                 onChange={handleChange}
// // // // //               />

// // // // //             </div>

// // // // //             <div className="field">

// // // // //               <label>Departure</label>

// // // // //               <input
// // // // //                 type="date"
// // // // //                 name="departure"
// // // // //                 value={searchData.departure}
// // // // //                 onChange={handleChange}
// // // // //               />

// // // // //             </div>

// // // // //             {tripType === "round" && (

// // // // //               <div className="field">

// // // // //                 <label>Return</label>

// // // // //                 <input
// // // // //                   type="date"
// // // // //                   name="returnDate"
// // // // //                   value={searchData.returnDate}
// // // // //                   onChange={handleChange}
// // // // //                 />

// // // // //               </div>

// // // // //             )}

// // // // //             <div className="field">

// // // // //               <label>Travellers</label>

// // // // //               <select
// // // // //                 name="travellers"
// // // // //                 value={searchData.travellers}
// // // // //                 onChange={handleChange}
// // // // //               >
// // // // //                 <option>1 Traveller</option>
// // // // //                 <option>2 Travellers</option>
// // // // //                 <option>3 Travellers</option>
// // // // //                 <option>4 Travellers</option>
// // // // //                 <option>5+ Travellers</option>
// // // // //               </select>

// // // // //             </div>

// // // // //             <div className="field">

// // // // //               <label>Cabin Class</label>

// // // // //               <select
// // // // //                 name="cabin"
// // // // //                 value={searchData.cabin}
// // // // //                 onChange={handleChange}
// // // // //               >
// // // // //                 <option>Economy</option>
// // // // //                 <option>Premium Economy</option>
// // // // //                 <option>Business</option>
// // // // //                 <option>First Class</option>
// // // // //               </select>

// // // // //             </div>

// // // // //           </div>

// // // // //           <button
// // // // //             className="search-flight-btn"
// // // // //             onClick={handleSearch}
// // // // //           >
// // // // //             <FaSearch />
// // // // //             Search Flights
// // // // //           </button>

// // // // //         </div>

// // // // //       </div>

// // // // //             {/* ================= RIGHT ================= */}

// // // // //       <div className="hero-right">

// // // // //         <img
// // // // //           src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&auto=format&fit=crop&q=80"
// // // // //           alt="Flight"
// // // // //           className="hero-image"
// // // // //         />

// // // // //         {/* Flight Card */}

// // // // //         <div className="card card1">

// // // // //           <MdFlightTakeoff />

// // // // //           <div>

// // // // //             <h4>5000+</h4>

// // // // //             <p>Flights Daily</p>

// // // // //           </div>

// // // // //         </div>

// // // // //         {/* Customers */}

// // // // //         <div className="card card2">

// // // // //           <FaUsers />

// // // // //           <div>

// // // // //             <h4>20K+</h4>

// // // // //             <p>Happy Customers</p>

// // // // //           </div>

// // // // //         </div>

// // // // //         {/* Countries */}

// // // // //         <div className="card card3">

// // // // //           <FaGlobeAsia />

// // // // //           <div>

// // // // //             <h4>70+</h4>

// // // // //             <p>Countries</p>

// // // // //           </div>

// // // // //         </div>

// // // // //       </div>

// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // export default Hero;




































// // // // // import "./Hero.css";

// // // // // import {
// // // // //   FaPlaneDeparture,
// // // // //   FaUsers,
// // // // //   FaGlobeAsia,
// // // // // } from "react-icons/fa";

// // // // // import { MdFlightTakeoff } from "react-icons/md";

// // // // // function Hero() {

// // // // //   return (

// // // // //     <section className="hero">

// // // // //       {/* Background Shapes */}

// // // // //       <div className="circle one"></div>
// // // // //       <div className="circle two"></div>

// // // // //       {/* ================= LEFT ================= */}

// // // // //       <div className="hero-left">

// // // // //         <span className="hero-badge">

// // // // //           ✈ India's Trusted Flight Booking Platform

// // // // //         </span>

// // // // //         <h1 className="hero-title">

// // // // //           Fly Smarter <br />

// // // // //           with <span>Saiyed Travels</span>

// // // // //         </h1>

// // // // //         <p className="hero-description">

// // // // //           Compare fares, discover exclusive flight
// // // // //           deals, and book domestic & international
// // // // //           flights with confidence. Travel smarter,
// // // // //           faster and more securely with Saiyed Travels.

// // // // //         </p>

// // // // //         <div className="hero-buttons">

// // // // //           <button className="hero-btn">

// // // // //             <FaPlaneDeparture />

// // // // //             Book Flight

// // // // //           </button>

// // // // //           <button className="outline-btn">

// // // // //             Explore Offers

// // // // //           </button>

// // // // //         </div>

// // // // //         {/* Trust Points */}

// // // // //         <div className="hero-features">

// // // // //           <div className="feature">

// // // // //             ✅ Secure Booking

// // // // //           </div>

// // // // //           <div className="feature">

// // // // //             💳 Safe Payments

// // // // //           </div>

// // // // //           <div className="feature">

// // // // //             ☎ 24×7 Support

// // // // //           </div>

// // // // //         </div>

// // // // //       </div>

// // // // //             {/* ================= RIGHT ================= */}

// // // // //       <div className="hero-right">

// // // // //         <img
// // // // //           src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80"
// // // // //           alt="Flight"
// // // // //           className="hero-image"
// // // // //         />

// // // // //         {/* Flights Card */}

// // // // //         <div className="card card1">

// // // // //           <MdFlightTakeoff className="card-icon" />

// // // // //           <div>

// // // // //             <h4>5000+</h4>

// // // // //             <p>Flights Daily</p>

// // // // //           </div>

// // // // //         </div>

// // // // //         {/* Customers Card */}

// // // // //         <div className="card card2">

// // // // //           <FaUsers className="card-icon" />

// // // // //           <div>

// // // // //             <h4>20K+</h4>

// // // // //             <p>Happy Customers</p>

// // // // //           </div>

// // // // //         </div>

// // // // //         {/* Countries Card */}

// // // // //         <div className="card card3">

// // // // //           <FaGlobeAsia className="card-icon" />

// // // // //           <div>

// // // // //             <h4>70+</h4>

// // // // //             <p>Countries</p>

// // // // //           </div>

// // // // //         </div>

// // // // //       </div>

// // // // //     </section>

// // // // //   );

// // // // // }

// // // // // export default Hero;






















// // // // import "./Hero.css";

// // // // import {
// // // //   FaPlaneDeparture,
// // // //   FaUsers,
// // // //   FaGlobeAsia,
// // // // } from "react-icons/fa";

// // // // import { MdFlightTakeoff } from "react-icons/md";

// // // // import { useEffect, useState } from "react";

// // // // function Hero() {
// // // //   const images = [
// // // //     "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
// // // //     "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=85",
// // // //     "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=85",
// // // //     "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=90",
// // // //     "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=85",
// // // //     "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
// // // //   ];

// // // //   const [currentImage, setCurrentImage] = useState(0);

// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => {
// // // //       setCurrentImage((prev) => (prev + 1) % images.length);
// // // //     }, 4500);

// // // //     return () => clearInterval(interval);
// // // //   }, [images.length]);

// // // //   return (
// // // //     <section className="hero">

// // // //       {/* Background Shapes */}
// // // //       <div className="circle one"></div>
// // // //       <div className="circle two"></div>

// // // //       {/* ================= LEFT ================= */}

// // // //       <div className="hero-left">

// // // //         <span className="hero-badge">
// // // //           ✈ India's Trusted Flight Booking Platform
// // // //         </span>

// // // //         <h1 className="hero-title">
// // // //           Fly Smarter <br />
// // // //           with <span>Saiyed Travels</span>
// // // //         </h1>

// // // //         <p className="hero-description">
// // // //           Compare fares, discover exclusive flight
// // // //           deals, and book domestic & international
// // // //           flights with confidence. Travel smarter,
// // // //           faster and more securely with Saiyed Travels.
// // // //         </p>

// // // //         <div className="hero-buttons">

// // // //           <button className="hero-btn">
// // // //             <FaPlaneDeparture />
// // // //             Book Flight
// // // //           </button>

// // // //           <button className="outline-btn">
// // // //             Explore Offers
// // // //           </button>

// // // //         </div>

// // // //         {/* Trust Points */}

// // // //         <div className="hero-features">

// // // //           <div className="feature">
// // // //             ✅ Secure Booking
// // // //           </div>

// // // //           <div className="feature">
// // // //             💳 Safe Payments
// // // //           </div>

// // // //           <div className="feature">
// // // //             ☎ 24×7 Support
// // // //           </div>

// // // //         </div>

// // // //       </div>

// // // //       {/* ================= RIGHT ================= */}

// // // //       <div className="hero-right">

// // // //         <div className="hero-image-box">

// // // //           {images.map((image, index) => (
// // // //             <img
// // // //               key={index}
// // // //               src={image}
// // // //               alt={`Saiyed Travels Flight ${index + 1}`}
// // // //               className={`hero-image ${
// // // //                 index === currentImage ? "active" : ""
// // // //               }`}
// // // //             />
// // // //           ))}

// // // //           <div className="hero-image-overlay"></div>

// // // //         </div>

// // // //         {/* Flights Card */}

// // // //         <div className="card card1">

// // // //           <MdFlightTakeoff className="card-icon" />

// // // //           <div>
// // // //             <h4>5000+</h4>
// // // //             <p>Flights Daily</p>
// // // //           </div>

// // // //         </div>

// // // //         {/* Customers Card */}

// // // //         <div className="card card2">

// // // //           <FaUsers className="card-icon" />

// // // //           <div>
// // // //             <h4>20K+</h4>
// // // //             <p>Happy Customers</p>
// // // //           </div>

// // // //         </div>

// // // //         {/* Countries Card */}

// // // //         <div className="card card3">

// // // //           <FaGlobeAsia className="card-icon" />

// // // //           <div>
// // // //             <h4>70+</h4>
// // // //             <p>Countries</p>
// // // //           </div>

// // // //         </div>

// // // //         {/* Slider Dots */}

// // // //         <div className="hero-dots">

// // // //           {images.map((_, index) => (
// // // //             <span
// // // //               key={index}
// // // //               className={`hero-dot ${
// // // //                 index === currentImage ? "active" : ""
// // // //               }`}
// // // //             ></span>
// // // //           ))}

// // // //         </div>

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }

// // // // export default Hero;












// // // import "./Hero.css";

// // // import { useEffect, useState } from "react";

// // // import {
// // //   FaPlaneDeparture,
// // //   FaUsers,
// // //   FaGlobeAsia,
// // // } from "react-icons/fa";

// // // import { MdFlightTakeoff } from "react-icons/md";

// // // function Hero() {
// // //   const images = [
// // //     "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85",
// // //     "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1000&q=85",
// // //     "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1000&q=85",
// // //     "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=85",
// // //     "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=85",
// // //   ];

// // //   const [currentImage, setCurrentImage] = useState(0);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentImage((prev) => (prev + 1) % images.length);
// // //     }, 4500);

// // //     return () => clearInterval(interval);
// // //   }, [images.length]);

// // //   return (
// // //     <section className="hero">

// // //       {/* Background Shapes */}
// // //       <div className="circle one"></div>
// // //       <div className="circle two"></div>

// // //       {/* ================= LEFT ================= */}

// // //       <div className="hero-left">

// // //         <span className="hero-badge">
// // //           ✈ India's Trusted Flight Booking Platform
// // //         </span>

// // //         <h1 className="hero-title">
// // //           Fly Smarter <br />
// // //           with <span>Saiyed Travels</span>
// // //         </h1>

// // //         <p className="hero-description">
// // //           Compare fares, discover exclusive flight
// // //           deals, and book domestic & international
// // //           flights with confidence. Travel smarter,
// // //           faster and more securely with Saiyed Travels.
// // //         </p>

// // //         <div className="hero-buttons">

// // //           <button className="hero-btn">
// // //             <FaPlaneDeparture />
// // //             Book Flight
// // //           </button>

// // //           <button className="outline-btn">
// // //             Explore Offers
// // //           </button>

// // //         </div>

// // //         {/* Trust Points */}

// // //         <div className="hero-features">

// // //           <div className="feature">
// // //             ✅ Secure Booking
// // //           </div>

// // //           <div className="feature">
// // //             💳 Safe Payments
// // //           </div>

// // //           <div className="feature">
// // //             ☎ 24×7 Support
// // //           </div>

// // //         </div>

// // //       </div>

// // //       {/* ================= RIGHT ================= */}

// // //       <div className="hero-right">

// // //         <div className="hero-image-box">

// // //           {images.map((image, index) => (
// // //             <img
// // //               key={index}
// // //               src={image}
// // //               alt={`Flight ${index + 1}`}
// // //               className={`hero-image ${
// // //                 index === currentImage ? "active" : ""
// // //               }`}
// // //             />
// // //           ))}

// // //           <div className="hero-image-overlay"></div>

// // //           {/* Slider Dots */}

// // //           <div className="hero-dots">
// // //             {images.map((_, index) => (
// // //               <span
// // //                 key={index}
// // //                 className={`hero-dot ${
// // //                   index === currentImage ? "active" : ""
// // //                 }`}
// // //               ></span>
// // //             ))}
// // //           </div>

// // //         </div>

// // //         {/* Flights Card */}

// // //         <div className="card card1">

// // //           <MdFlightTakeoff className="card-icon" />

// // //           <div>
// // //             <h4>5000+</h4>
// // //             <p>Flights Daily</p>
// // //           </div>

// // //         </div>

// // //         {/* Customers Card */}

// // //         <div className="card card2">

// // //           <FaUsers className="card-icon" />

// // //           <div>
// // //             <h4>20K+</h4>
// // //             <p>Happy Customers</p>
// // //           </div>

// // //         </div>

// // //         {/* Countries Card */}

// // //         <div className="card card3">

// // //           <FaGlobeAsia className="card-icon" />

// // //           <div>
// // //             <h4>70+</h4>
// // //             <p>Countries</p>
// // //           </div>

// // //         </div>

// // //       </div>

// // //     </section>
// // //   );
// // // }

// // // export default Hero;



























// // import "./Hero.css";

// // import { useEffect, useState } from "react";

// // import {
// //   FaPlaneDeparture,
// //   FaUsers,
// //   FaGlobeAsia,
// // } from "react-icons/fa";

// // import { MdFlightTakeoff } from "react-icons/md";

// // function Hero() {
// //   const images = [
// //     "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=90",
// //     "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=90",
// //     "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=90",
// //     "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1200&q=90",
// //     "https://images.unsplash.com/photo-1464037866556-6812c9c1c72e?auto=format&fit=crop&w=1200&q=90",
// //     "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1200&q=90",
// //   ];

// //   const [currentImage, setCurrentImage] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImage((prev) => (prev + 1) % images.length);
// //     }, 4500);

// //     return () => clearInterval(interval);
// //   }, [images.length]);

// //   return (
// //     <section className="hero">

// //       {/* Background Shapes */}
// //       <div className="circle one"></div>
// //       <div className="circle two"></div>

// //       {/* ================= LEFT ================= */}

// //       <div className="hero-left">

// //         <span className="hero-badge">
// //           <span className="badge-plane">✈</span>
// //           India's Trusted Flight Booking Platform
// //         </span>

// //         <h1 className="hero-title">
// //           Fly Smarter
// //           <br />
// //           with <span>Saiyed Travels</span>
// //         </h1>

// //         <p className="hero-description">
// //           Discover the best domestic and international flight
// //           fares with Saiyed Travels. Compare, choose and book
// //           your journey with a fast, secure and reliable travel
// //           experience.
// //         </p>

// //         <div className="hero-buttons">

// //           <button className="hero-btn">
// //             <FaPlaneDeparture />
// //             Book Flight
// //           </button>

// //           <button className="outline-btn">
// //             Explore Offers
// //           </button>

// //         </div>

// //         {/* Trust Points */}

// //         <div className="hero-features">

// //           <div className="feature">
// //             ✅ Secure Booking
// //           </div>

// //           <div className="feature">
// //             💳 Safe Payments
// //           </div>

// //           <div className="feature">
// //             ☎ 24×7 Support
// //           </div>

// //         </div>

// //       </div>

// //       {/* ================= RIGHT ================= */}

// //       <div className="hero-right">

// //         <div className="hero-image-box">

// //           {images.map((image, index) => (
// //             <img
// //               key={image}
// //               src={image}
// //               alt={`Saiyed Travels flight ${index + 1}`}
// //               className={`hero-image ${
// //                 index === currentImage ? "active" : ""
// //               }`}
// //             />
// //           ))}

// //           <div className="hero-image-overlay"></div>

// //           {/* Slider Dots */}

// //           <div className="hero-dots">
// //             {images.map((_, index) => (
// //               <span
// //                 key={index}
// //                 className={`hero-dot ${
// //                   index === currentImage ? "active" : ""
// //                 }`}
// //               ></span>
// //             ))}
// //           </div>

// //         </div>

// //         {/* Flights Card */}

// //         <div className="card card1">

// //           <MdFlightTakeoff className="card-icon" />

// //           <div>
// //             <h4>5000+</h4>
// //             <p>Flights Daily</p>
// //           </div>

// //         </div>

// //         {/* Customers Card */}

// //         <div className="card card2">

// //           <FaUsers className="card-icon" />

// //           <div>
// //             <h4>20K+</h4>
// //             <p>Happy Customers</p>
// //           </div>

// //         </div>

// //         {/* Countries Card */}

// //         <div className="card card3">

// //           <FaGlobeAsia className="card-icon" />

// //           <div>
// //             <h4>70+</h4>
// //             <p>Destinations</p>
// //           </div>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default Hero;


















// import "./Hero.css";

// import { useEffect, useState } from "react";

// import {
//   FaPlaneDeparture,
//   FaUsers,
//   FaGlobeAsia,
// } from "react-icons/fa";

// import { MdFlightTakeoff } from "react-icons/md";

// function Hero() {
//   const images = [
//     "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=90",
//     "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=90",
//     "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=90",
//     "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1200&q=90",
//     "https://images.unsplash.com/photo-1464037866556-6812c9c1c72e?auto=format&fit=crop&w=1200&q=90",
//     "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1200&q=90",
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const slider = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 4500);

//     return () => clearInterval(slider);
//   }, [images.length]);

//   return (
//     <section className="hero">

//       {/* Background Shapes */}
//       <div className="circle one"></div>
//       <div className="circle two"></div>

//       {/* ================= LEFT ================= */}

//       <div className="hero-left">

//         {/* Brand Badge */}
//         <span className="hero-badge">
//           <span className="badge-icon">
//             ✈
//           </span>

//           <span>
//             India's Trusted Flight Booking Platform
//           </span>
//         </span>

//         {/* Main Heading */}
//         <h1 className="hero-title">

//           <span className="hero-small-title">
//             Welcome to
//           </span>

//           <span className="brand-name">
//             Saiyed Travels
//           </span>

//           <span className="hero-main-line">
//             Fly Smarter.
//           </span>

//           <span className="hero-main-line">
//             Travel Better.
//           </span>

//         </h1>

//         {/* Brand Tagline */}
//         <div className="brand-tagline">
//           <span></span>
//           Your Journey, Our Responsibility
//           <span></span>
//         </div>

//         <p className="hero-description">
//           Discover the best domestic and international flight
//           fares with <strong>Saiyed Travels</strong>. Compare,
//           choose and book your journey with a fast, secure and
//           reliable travel experience.
//         </p>

//         {/* Buttons */}

//         <div className="hero-buttons">

//           <button className="hero-btn">
//             <FaPlaneDeparture />
//             Book Flight
//           </button>

//           <button className="outline-btn">
//             Explore Offers
//           </button>

//         </div>

//         {/* Trust Points */}

//         <div className="hero-features">

//           <div className="feature">
//             <span>✓</span>
//             Secure Booking
//           </div>

//           <div className="feature">
//             <span>✓</span>
//             Safe Payments
//           </div>

//           <div className="feature">
//             <span>✓</span>
//             24×7 Support
//           </div>

//         </div>

//       </div>

//       {/* ================= RIGHT ================= */}

//       <div className="hero-right">

//         <div className="hero-image-box">

//           {images.map((image, index) => (
//             <img
//               key={image}
//               src={image}
//               alt={`Saiyed Travels Flight ${index + 1}`}
//               className={`hero-image ${
//                 index === currentImage ? "active" : ""
//               }`}
//             />
//           ))}

//           <div className="hero-image-overlay"></div>

//           {/* Image Brand Label */}

//           <div className="image-brand">
//             <span>✈</span>
//             <div>
//               <strong>Saiyed Travels</strong>
//               <small>Fly With Confidence</small>
//             </div>
//           </div>

//           {/* Slider Dots */}

//           <div className="hero-dots">
//             {images.map((_, index) => (
//               <span
//                 key={index}
//                 className={`hero-dot ${
//                   index === currentImage ? "active" : ""
//                 }`}
//               ></span>
//             ))}
//           </div>

//         </div>

//         {/* Flights Card */}

//         <div className="card card1">
//           <MdFlightTakeoff className="card-icon" />

//           <div>
//             <h4>5000+</h4>
//             <p>Flights Daily</p>
//           </div>
//         </div>

//         {/* Customers Card */}

//         <div className="card card2">
//           <FaUsers className="card-icon" />

//           <div>
//             <h4>20K+</h4>
//             <p>Happy Customers</p>
//           </div>
//         </div>

//         {/* Destinations Card */}

//         <div className="card card3">
//           <FaGlobeAsia className="card-icon" />

//           <div>
//             <h4>70+</h4>
//             <p>Destinations</p>
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;















import "./Hero.css";
import { useEffect, useState } from "react";

import {
  FaPlaneDeparture,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";

import { MdFlightTakeoff } from "react-icons/md";

function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1400&q=90",
    // "https://images.unsplash.com/photo-1464037866556-6812c9c1c72e?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1400&q=90",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <section className="hero">

      {/* Background Shapes */}
      <div className="circle one"></div>
      <div className="circle two"></div>

      {/* ================= LEFT ================= */}

      <div className="hero-left">

        <span className="hero-badge">
          <span className="badge-icon">✈</span>
          <span>India's Trusted Flight Booking Platform</span>
        </span>

        <h1 className="hero-title">

          <span className="hero-small-title">
            Welcome to
          </span>

          <span className="brand-name">
            Saiyed Travels
          </span>

          <span className="hero-main-line">
            Fly Smarter.
          </span>

          <span className="hero-main-line">
            Travel Better.
          </span>

        </h1>

        <div className="brand-tagline">
          <span></span>
          Your Journey, Our Responsibility
          <span></span>
        </div>

        <p className="hero-description">
          Discover the best domestic and international flight
          fares with <strong>Saiyed Travels</strong>. Compare,
          choose and book your journey with a fast, secure and
          reliable travel experience.
        </p>

        <div className="hero-buttons">

          <button className="hero-btn">
            <FaPlaneDeparture />
            Book Flight
          </button>

          <button className="outline-btn">
            Explore Offers
          </button>

        </div>

        <div className="hero-features">

          <div className="feature">
            <span>✓</span>
            Secure Booking
          </div>

          <div className="feature">
            <span>✓</span>
            Safe Payments
          </div>

          <div className="feature">
            <span>✓</span>
            24×7 Support
          </div>

        </div>

      </div>

      {/* ================= RIGHT ================= */}

      <div className="hero-right">

        <div className="hero-image-box">

          {images.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`Saiyed Travels Flight ${index + 1}`}
              className={`hero-image ${
                index === currentImage ? "active" : ""
              }`}
            />
          ))}

          <div className="hero-image-overlay"></div>

          {/* LOGO INSIDE IMAGE */}
          <div className="image-logo">

            <div className="image-logo-mark">
              <MdFlightTakeoff />
            </div>

            <div className="image-logo-text">
              <strong>SAIYED TRAVELS</strong>
              <span>FLY • TRAVEL • EXPLORE</span>
            </div>

          </div>

          {/* IMAGE NUMBER */}
          <div className="image-counter">
            <span>
              {String(currentImage + 1).padStart(2, "0")}
            </span>
            <i>/</i>
            <span>
              {String(images.length).padStart(2, "0")}
            </span>
          </div>

          {/* DOTS */}
          <div className="hero-dots">

            {images.map((_, index) => (
              <span
                key={index}
                className={`hero-dot ${
                  index === currentImage ? "active" : ""
                }`}
              ></span>
            ))}

          </div>

        </div>

        {/* Flights Card */}

        <div className="card card1">

          <MdFlightTakeoff className="card-icon" />

          <div>
            <h4>5000+</h4>
            <p>Flights Daily</p>
          </div>

        </div>

        {/* Customers Card */}

        <div className="card card2">

          <FaUsers className="card-icon" />

          <div>
            <h4>20K+</h4>
            <p>Happy Customers</p>
          </div>

        </div>

        {/* Destinations Card */}

        <div className="card card3">

          <FaGlobeAsia className="card-icon" />

          <div>
            <h4>70+</h4>
            <p>Destinations</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;