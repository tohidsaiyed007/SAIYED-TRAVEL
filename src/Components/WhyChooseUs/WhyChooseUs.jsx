import "./WhyChooseUs.css";
import {
  FaTags,
  FaShieldAlt,
  FaPlaneDeparture,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {

  const features = [
    {
      id: 1,
      icon: <FaTags />,
      title: "Best Price",
      desc: "Get the lowest airfare with exclusive deals.",
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      title: "Secure Booking",
      desc: "100% safe and secure online payments.",
    },
    {
      id: 3,
      icon: <FaPlaneDeparture />,
      title: "Easy Flight Booking",
      desc: "Book domestic & international flights easily.",
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "24×7 Support",
      desc: "Our team is always available to help you.",
    },
  ];

  return (
    <section className="why">

      <div className="section-title">
        <h2>Why Choose Saiyed Travels</h2>
        <p>We make your travel simple, secure and affordable.</p>
      </div>

      <div className="why-grid">

        {features.map((item) => (

          <div className="why-card" key={item.id}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;