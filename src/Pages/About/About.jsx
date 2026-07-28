import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import {
  FaPlaneDeparture,
  FaUsers,
  FaShieldAlt,
  FaHeadset,
  FaGlobeAsia,
  FaAward,
} from "react-icons/fa";

function About() {

  const stats = [
    {
      number: "10K+",
      title: "Happy Customers",
    },
    {
      number: "50+",
      title: "Airlines",
    },
    {
      number: "100+",
      title: "Destinations",
    },
    {
      number: "24×7",
      title: "Customer Support",
    },
  ];

  const services = [

    {
      icon: <FaPlaneDeparture />,
      title: "Flight Booking",
      text: "Domestic & International flight booking at the best prices.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Secure Payments",
      text: "100% safe and encrypted payment experience.",
    },

    {
      icon: <FaHeadset />,
      title: "24×7 Support",
      text: "Dedicated travel experts always ready to help.",
    },

    {
      icon: <FaGlobeAsia />,
      title: "Worldwide Destinations",
      text: "Travel anywhere with trusted airline partners.",
    },

    {
      icon: <FaAward />,
      title: "Best Deals",
      text: "Exclusive offers and lowest airfare guarantee.",
    },

    {
      icon: <FaUsers />,
      title: "Trusted by Thousands",
      text: "Thousands of satisfied travellers across India.",
    },

  ];

  return (

    <>

      <Navbar />

      <section className="about-page">

        <div className="about-hero">

          <h1>About Saiyed Travels</h1>

          <p>

            Your trusted travel partner for affordable,
            secure and hassle-free flight bookings.

          </p>

        </div>

                {/* Company Story */}

        <div className="about-story">

          <div className="story-left">

            <h2>Who We Are</h2>

            <p>

              Saiyed Travels is a modern online travel platform
              committed to making flight booking simple, affordable,
              and secure. Whether you're planning a business trip,
              family vacation, or international journey, we help you
              find the best flight deals at competitive prices.

            </p>

            <p>

              Our goal is to provide a smooth booking experience,
              transparent pricing, and reliable customer support for
              every traveller.

            </p>

          </div>

          <div className="story-right">

            <div className="mission-card">

              <h3>Our Mission</h3>

              <p>

                To provide affordable, secure, and hassle-free travel
                solutions while delivering excellent customer
                satisfaction.

              </p>

            </div>

            <div className="vision-card">

              <h3>Our Vision</h3>

              <p>

                To become India's most trusted online travel company by
                offering innovative travel services and exceptional user
                experience.

              </p>

            </div>

          </div>

        </div>

        {/* Statistics */}

        <section className="stats-section">

          {stats.map((item, index) => (

            <div
              className="stat-card"
              key={index}
            >

              <h2>{item.number}</h2>

              <p>{item.title}</p>

            </div>

          ))}

        </section>

        {/* Services */}

        <section className="services-section">

          <h2>Why Choose Saiyed Travels?</h2>

          <p className="service-subtitle">

            We provide everything you need for a smooth and stress-free
            travel experience.

          </p>

          <div className="services-grid">

            {services.map((service, index) => (

              <div
                className="service-card"
                key={index}
              >

                <div className="service-icon">

                  {service.icon}

                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

              </div>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="about-cta">

          <h2>

            Ready To Explore The World?

          </h2>

          <p>

            Book your next journey with confidence and enjoy the best
            flight deals only at Saiyed Travels.

          </p>

          <button>

            Book Your Flight

          </button>

        </section>

      </section>

      <Footer />

    </>

  );

}

export default About;