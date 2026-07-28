// import "./Contact.css";
// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";

// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaClock,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// function Contact() {

//   return (

//     <>

//       <Navbar />

//       <section className="contact-page">

//         {/* Hero */}

//         <div className="contact-hero">

//           <h1>Contact Saiyed Travels</h1>

//           <p>

//             We're always here to help you with your
//             travel plans. Get in touch with our team.

//           </p>

//         </div>

//         {/* Contact Info */}

//         <div className="contact-container">

//           <div className="contact-info">

//             <h2>Get In Touch</h2>

//             <div className="info-card">

//               <FaMapMarkerAlt />

//               <div>

//                 <h3>Office Address</h3>

//                 <p>
//                   Jhunjhunu, Rajasthan, India
//                 </p>

//               </div>

//             </div>

//             <div className="info-card">

//               <FaPhoneAlt />

//               <div>

//                 <h3>Phone Number</h3>

//                 <p>+91 XXXXX XXXXX</p>

//               </div>

//             </div>

//             <div className="info-card">

//               <FaEnvelope />

//               <div>

//                 <h3>Email</h3>

//                 <p>support@saiyedtravels.com</p>

//               </div>

//             </div>

//             <div className="info-card">

//               <FaClock />

//               <div>

//                 <h3>Working Hours</h3>

//                 <p>24×7 Customer Support</p>

//               </div>

//             </div>

//             <div className="social-icons">

//               <a href="#"><FaFacebookF /></a>

//               <a href="#"><FaInstagram /></a>

//               <a href="#"><FaLinkedinIn /></a>

//               <a href="#"><FaYoutube /></a>

//             </div>

//           </div>

//                     {/* Contact Form */}

//           <div className="contact-form">

//             <h2>Send Us a Message</h2>

//             <form>

//               <div className="input-row">

//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   required
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   required
//                 />

//               </div>

//               <div className="input-row">

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   required
//                 />

//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   required
//                 />

//               </div>

//               <textarea
//                 rows="6"
//                 placeholder="Write Your Message..."
//                 required
//               ></textarea>

//               <button
//                 type="submit"
//                 className="send-btn"
//               >
//                 Send Message
//               </button>

//             </form>

//           </div>

//         </div>

//         {/* Google Map */}

//         <section className="map-section">

//           <h2>Our Location</h2>

//           <div className="map-box">

//             <h3>📍 Google Map</h3>

//             <p>
//               Google Map will be integrated here
//               after Backend & Deployment.
//             </p>

//           </div>

//         </section>

//         {/* Help Section */}

//         <section className="help-section">

//           <h2>Need Immediate Help?</h2>

//           <p>

//             Our travel experts are available 24×7 to
//             assist you with bookings, cancellations,
//             refunds and travel queries.

//           </p>

//           <div className="help-buttons">

//             <button className="call-btn">
//               📞 Call Now
//             </button>

//             <button className="whatsapp-btn">
//               💬 WhatsApp
//             </button>

//           </div>

//         </section>

//       </section>

//       <Footer />

//     </>

//   );

// }

// export default Contact;





import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Contact() {

  return (

    <>

      <Navbar />

      <section className="contact-page">

        {/* Hero */}

        <div className="contact-hero">

          <h1>Contact Saiyed Travels</h1>

          <p>

            We're always here to help you with your travel plans.
            Contact our travel experts anytime.

          </p>

        </div>

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <div className="info-card">

              <FaMapMarkerAlt />

              <div>

                <h3>Office Address</h3>

                <p>

                  Saiyed Travels<br/>

                  Jhunjhunu, Rajasthan, India

                </p>

              </div>

            </div>

            <div className="info-card">

              <FaPhoneAlt />

              <div>

                <h3>Sales Enquiry</h3>

                <p>+91 98765 43210</p>

              </div>

            </div>

            <div className="info-card">

              <FaPhoneAlt />

              <div>

                <h3>Customer Support</h3>

                <p>+91 98765 43211</p>

              </div>

            </div>

            <div className="info-card">

              <FaPhoneAlt />

              <div>

                <h3>WhatsApp Support</h3>

                <p>+91 98765 43212</p>

              </div>

            </div>

            <div className="info-card">

              <FaEnvelope />

              <div>

                <h3>Email Address</h3>

                <p>support@saiyedtravels.com</p>

                <p>booking@saiyedtravels.com</p>

              </div>

            </div>

            <div className="info-card">

              <FaClock />

              <div>

                <h3>Working Hours</h3>

                <p>Monday - Sunday</p>

                <p>Open 24×7</p>

              </div>

            </div>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="contact-form">

            <h2>Send Us A Message</h2>

            <form>

              <div className="input-row">

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />

              </div>

              <div className="input-row">

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                />

                <input
                  type="text"
                  placeholder="Subject"
                  required
                />

              </div>

              <textarea
                rows="6"
                placeholder="Write Your Message..."
                required
              ></textarea>

              <button
                className="send-btn"
                type="submit"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

                  {/* Google Map */}

        <section className="map-section">

          <h2>Find Us On Map</h2>

          <p className="map-subtitle">
            Visit our Saiyed Travels office in Jhunjhunu, Rajasthan.
          </p>

          <div className="map-box">

            <iframe
              title="Saiyed Travels Office"
              src="https://www.google.com/maps?q=Kajiwada%20Mohalla,%20Jhunjhunu,%20Gorir,%20Rajasthan%20333001,%20India&output=embed"
              width="100%"
              height="450"
              style={{
                border: 0,
                borderRadius: "20px",
              }}
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

          <div className="map-actions">

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kajiwada+Mohalla+Jhunjhunu+Gorir+Rajasthan+333001+India"
              target="_blank"
              rel="noreferrer"
              className="direction-btn"
            >
              📍 Get Directions
            </a>

          </div>

        </section>

        {/* Need Help */}

        <section className="help-section">

          <h2>Need Immediate Help?</h2>

          <p>

            Our travel experts are available 24×7 to help you with
            flight bookings, cancellations, refunds, visa assistance
            and all travel related queries.

          </p>

          <div className="help-buttons">

            <a
              href="tel:+919876543211"
              className="call-btn"
            >
              📞 Call Support
            </a>

            <a
              href="https://wa.me/919876543212"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              💬 WhatsApp Us
            </a>

          </div>

        </section>

        {/* Quick Services */}

        <section className="quick-services">

          <div className="service-box">

            <h3>✈ Flight Booking</h3>

            <p>
              Domestic & International Flight Ticket Booking
            </p>

          </div>

          <div className="service-box">

            <h3>🛂 Visa Assistance</h3>

            <p>
              Tourist, Business & Student Visa Services
            </p>

          </div>

          <div className="service-box">

            <h3>💳 Secure Payment</h3>

            <p>
              Safe & Secure Online Payment Gateway
            </p>

          </div>

          <div className="service-box">

            <h3>🕒 24×7 Customer Support</h3>

            <p>
              Our travel team is available anytime to assist you.
            </p>

          </div>

        </section>

      </section>

      <Footer />

    </>

  );

}

export default Contact;