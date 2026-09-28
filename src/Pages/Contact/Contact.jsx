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
  FaMapMarkedAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">

        {/* ================= HERO ================= */}

        <div className="contact-hero">

          <span className="contact-hero-label">
            SAIYED TRAVELS
          </span>

          <h1>Contact Saiyed Travels</h1>

          <p>
            We're always here to help you with your travel plans.
            Contact our travel experts anytime.
          </p>

        </div>

        {/* ================= MAIN CONTACT + MAP ================= */}

        <div className="contact-container">

          {/* ================= LEFT : GET IN TOUCH ================= */}

          <div className="contact-info">

            <div className="contact-info-header">

              <div className="contact-icon-main">
                <FaEnvelope />
              </div>

              <div>
                <span>CONTACT US</span>
                <h2>Get In Touch</h2>
                <p>
                  Reach out to our travel team for bookings,
                  assistance and travel information.
                </p>
              </div>

            </div>

            <div className="contact-divider"></div>

            {/* ADDRESS */}

            <div className="info-card">

              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="info-content">

                <h3>Office Address</h3>

                <p>
                  <strong>Saiyed Travels</strong>
                  <br />
                  Near Madina Masjid, Mohalla Kaziwara,
                  Jhunjhunu, Rajasthan, India
                </p>

              </div>

            </div>

            {/* AYUB */}

            <div className="info-card">

              <div className="info-icon">
                <FaPhoneAlt />
              </div>

              <div className="info-content">

                <h3>Ayub Saiyed</h3>

                <a href="tel:+919414080277">
                  +91 9414080277
                </a>

              </div>

            </div>

            {/* TAYYUB */}

            <div className="info-card">

              <div className="info-icon">
                <FaPhoneAlt />
              </div>

              <div className="info-content">

                <h3>Tayyub Saiyed</h3>

                <a href="tel:+919928222512">
                  +91 99282 22512
                </a>

              </div>

            </div>

            {/* ABDUL WAHID */}

            <div className="info-card">

              <div className="info-icon">
                <FaPhoneAlt />
              </div>

              <div className="info-content">

                <h3>Abdul Wahid</h3>

                <a href="tel:+919660497018">
                  +91 9960497018
                </a>

              </div>

            </div>

            {/* EMAIL */}

            <div className="info-card">

              <div className="info-icon">
                <FaEnvelope />
              </div>

              <div className="info-content">

                <h3>Email Address</h3>

                {/* <a href="mailto:support@saiyedtravels.com">
                  support@saiyedtravels.com
                </a> */}

                <p> 
              {/* <FaEnvelope />  */}
              <a href="mailto:saiyedtravels786@gmail.com"> 
                saiyedtravels786@gmail.com 
              </a> 
            </p>     

                <p>
              {/* <FaEnvelope /> */}
              <a href="mailto:tayub.saiyed786@gmail.com">
                tayub.saiyed786@gmail.com
              </a>
            </p>

              </div>

            </div>

            {/* WORKING HOURS */}

            <div className="info-card">

              <div className="info-icon">
                <FaClock />
              </div>

              <div className="info-content">

                <h3>Working Hours</h3>

                <p>
                  Monday - Sunday
                  <br />
                  <strong>Open 24×7</strong>
                </p>

              </div>

            </div>

            {/* SOCIAL */}

            <div className="social-area">

              <span>FOLLOW SAIYED TRAVELS</span>

              <div className="social-icons">

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>

              </div>

            </div>

          </div>

          {/* ================= RIGHT : MAP ================= */}

          <div className="map-card">

            <div className="map-card-header">

              <div className="map-title-icon">
                <FaMapMarkedAlt />
              </div>

              <div>
                <span>OUR LOCATION</span>

                <h2>Find Us On Map</h2>

                <p>
                  Visit our Saiyed Travels office in
                  Jhunjhunu, Rajasthan.
                </p>
              </div>

            </div>

            <div className="map-box">

              <iframe
                title="Saiyed Travels Office"
                src="https://www.google.com/maps?q=Kajiwada%20Mohalla,%20Jhunjhunu,%20Gorir,%20Rajasthan%20333001,%20India&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
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
                <FaMapMarkerAlt />
                Get Directions
              </a>

            </div>

          </div>

        </div>

        {/* ================= QUICK SERVICES ================= */}

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