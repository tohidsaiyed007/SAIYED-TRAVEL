// // import "./Footer.css";
// // import {
// //   FaFacebookF,
// //   FaInstagram,
// //   FaWhatsapp,
// //   FaYoutube,
// //   FaPhoneAlt,
// //   FaEnvelope,
// //   FaMapMarkerAlt,
// //   FaPlaneDeparture,
// // } from "react-icons/fa";

// // function Footer() {
// //   return (
// //     <footer className="footer">

// //       <div className="footer-container">

// //         {/* Company */}

// //         <div className="footer-box">

// //           <div className="footer-logo">
// //             <FaPlaneDeparture />
// //             <h2>Saiyed Travels</h2>
// //           </div>

// //           <p>
// //             Book Domestic & International Flights with
// //             confidence at the best prices.
// //           </p>

// //           <div className="footer-contact">
// //             <p><FaMapMarkerAlt /> Jhunjhunu, Rajasthan</p>
// //             <p><FaPhoneAlt /> +91 98765 43210</p>
// //             <p><FaEnvelope /> support@saiyedtravels.com</p>
// //           </div>

// //         </div>

// //         {/* Quick Links */}

// //         <div className="footer-box">

// //           <h3>Quick Links</h3>

// //           <ul>
// //             <li>Home</li>
// //             <li>Flights</li>
// //             <li>Offers</li>
// //             <li>About</li>
// //             <li>Contact</li>
// //           </ul>

// //         </div>

// //         {/* Support */}

// //         <div className="footer-box">

// //           <h3>Support</h3>

// //           <ul>
// //             <li>Privacy Policy</li>
// //             <li>Terms & Conditions</li>
// //             <li>Refund Policy</li>
// //             <li>Help Center</li>
// //           </ul>

// //         </div>

// //         {/* Follow */}

// //         <div className="footer-box">

// //           <h3>Follow Us</h3>

// //           <div className="social-icons">

// //             <a href="#"><FaFacebookF /></a>

// //             <a href="#"><FaInstagram /></a>

// //             <a href="#"><FaWhatsapp /></a>

// //             <a href="#"><FaYoutube /></a>

// //           </div>

// //         </div>

// //       </div>

// //       <div className="footer-bottom">
// //         © 2026 Saiyed Travels. All Rights Reserved.
// //       </div>

// //     </footer>
// //   );
// // }

// // export default Footer;


// import "./Footer.css";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaWhatsapp,
//   FaYoutube,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaPlaneDeparture,
//   FaPaperPlane,
// } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="footer">

//       <div className="footer-container">

//         {/* Company */}

//         <div className="footer-box">

//           <div className="footer-logo">
//             <FaPlaneDeparture />
//             <h2>Saiyed <span>Travels</span></h2>
//           </div>

//           <p>
//             Your trusted travel partner for Domestic &
//             International Flights at the best fares.
//           </p>

//           <div className="footer-contact">

//             <p><FaMapMarkerAlt /> Jhunjhunu, Rajasthan</p>

//             <p><FaPhoneAlt /> +91 98765 43210</p>

//             <p><FaEnvelope /> support@saiyedtravels.com</p>

//           </div>

//         </div>

//         {/* Quick Links */}

//         <div className="footer-box">

//           <h3>Quick Links</h3>

//           <ul>
//             <li>Home</li>
//             <li>Flights</li>
//             <li>Offers</li>
//             <li>About</li>
//             <li>Contact</li>
//           </ul>

//         </div>

//         {/* Services */}

//         <div className="footer-box">

//           <h3>Services</h3>

//           <ul>
//             <li>Flight Booking</li>
//             <li>Visa Services</li>
//             <li>Holiday Packages</li>
//             <li>Umrah Packages</li>
//           </ul>

//         </div>

//         {/* Newsletter */}

//         <div className="footer-box">

//           <h3>Newsletter</h3>

//           <p>
//             Subscribe to receive travel offers and flight updates.
//           </p>

//           <div className="newsletter">

//             <input
//               type="email"
//               placeholder="Enter your email"
//             />

//             <button>

//               <FaPaperPlane />

//             </button>

//           </div>

//           <div className="social-icons">

//             <a href="#"><FaFacebookF /></a>

//             <a href="#"><FaInstagram /></a>

//             <a href="#"><FaWhatsapp /></a>

//             <a href="#"><FaYoutube /></a>

//           </div>

//         </div>

//       </div>

//       <div className="footer-bottom">

//         © 2026 Saiyed Travels | All Rights Reserved.

//       </div>

//     </footer>
//   );
// }

// export default Footer;


import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPlaneDeparture,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <div className="footer-logo">
            <FaPlaneDeparture className="logo-icon" />
            <h2>
              Saiyed <span>Travels</span>
            </h2>
          </div>

          <p className="footer-desc">
            Your trusted travel partner for Domestic &
            International Flight Booking with secure payments
            and 24×7 customer support.
          </p>

          <div className="footer-contact">

            <p>
              <FaMapMarkerAlt />
              Jhunjhunu, Rajasthan, India
            </p>

            <p>
              <FaPhoneAlt />
              <strong>Booking:</strong> +91 98765 43210
            </p>

            <p>
              <FaPhoneAlt />
              <strong>Support:</strong> +91 98765 43211
            </p>

            <p>
              <FaPhoneAlt />
              <strong>Emergency:</strong> +91 98765 43212
            </p>

            <p>
              <FaEnvelope />
              booking@saiyedtravels.com
            </p>

            <p>
              <FaEnvelope />
              support@saiyedtravels.com
            </p>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Flights</li>
            <li>Payment</li>
            <li>Offers</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        </div>

        {/* Services */}

        <div className="footer-box">

          <h3>Our Services</h3>

          <ul>
            <li>Domestic Flights</li>
            <li>International Flights</li>
            <li>Visa Services</li>
            <li>Holiday Packages</li>
            <li>Umrah Packages</li>
            <li>Travel Insurance</li>
          </ul>

        </div>

        {/* Follow Us */}

        <div className="footer-box">

          <h3>Follow Us</h3>

          <p>
            Follow us on social media for the latest flight offers,
            travel deals and updates.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 <strong>Saiyed Travels</strong>. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;