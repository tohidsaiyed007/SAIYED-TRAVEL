

import "./Footer.css";
import { Link } from "react-router-dom";

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
            International Flight Booking with secure
            payments and 24×7 customer support.

          </p>

          <div className="footer-contact">

  <p>
    <FaMapMarkerAlt />
    Near Madina Masjid, Mohalla Kaziwara, Jhunjhunu, Rajasthan, India
  </p>

  <p>
    <FaPhoneAlt />
    <strong>Ayub Saiyed:</strong>{" "}
    <a href="tel:+919414080277">
      +91 9414080277
    </a>
  </p>

  <p>
    <FaPhoneAlt />
    <strong>Tayyub Saiyed:</strong>{" "}
    <a href="tel:+919928222512">
      +91 99282 22512
    </a>
  </p>

  <p>
    <FaPhoneAlt />
    <strong>Abdul Wahid:</strong>{" "}
    <a href="tel:+919660497018">
      +91 9960497018
    </a>
  </p>

  <p>
    <FaEnvelope />
    <a href="mailto:saiyedtravels786@gmail.com">
      saiyedtravels786@gmail.com
    </a>
  </p>

  <p>
    <FaEnvelope />
    <a href="tayub.saiyed786@gmail.com">
      tayub.saiyed786@gmail.com
    </a>
  </p>

</div>
{/* 
          <div className="footer-contact">

            <p>

              <FaMapMarkerAlt />

              Jhunjhunu, Rajasthan, India

            </p>

            <p>

              <FaPhoneAlt />

              <a href="tel:+919928222512">
                +91 99282 22512
              </a>

            </p>

            <p>

              <FaEnvelope />

              <a href="mailto:booking@saiyedtravels.com">
                booking@saiyedtravels.com
              </a>

            </p>

          </div> */}

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/flights">Flights</Link>
            </li>

            <li>
              <Link to="/booking">Booking</Link>
            </li>

            <li>
              <Link to="/payment">Payment</Link>
            </li>

            <li>
              <Link to="/offers">Offers</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/signup">Sign Up</Link>
            </li>

            <li>
              <Link to="/privacy">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/terms">
                Terms & Conditions
              </Link>
            </li>

          </ul>

        </div>

                {/* Services */}

        <div className="footer-box">

          <h3>Our Services</h3>

          <ul>

            <li>
              <Link to="/flights">
                Domestic Flights
              </Link>
            </li>

            <li>
              <Link to="/flights">
                International Flights
              </Link>
            </li>

            <li>
              <Link to="/visa">
                Visa Services
              </Link>
            </li>

            <li>
              <Link to="/holiday">
                Holiday Packages
              </Link>
            </li>

            <li>
              <Link to="/umrah">
                Umrah Packages
              </Link>
            </li>

            <li>
              <Link to="/insurance">
                Travel Insurance
              </Link>
            </li>

          </ul>

        </div>

        {/* Follow Us */}

        <div className="footer-box">

          <h3>Follow Us</h3>

          <p>

            Follow us on social media for the latest
            flight offers, travel deals and updates.

          </p>

          <div className="social-icons">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919928222512"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      {/* Footer Bottom */}

      <div className="footer-bottom">

        <p>

          © 2026 <strong>Saiyed Travels</strong>. All Rights Reserved.

        </p>

      </div>

    </footer>

  );

}

export default Footer;
