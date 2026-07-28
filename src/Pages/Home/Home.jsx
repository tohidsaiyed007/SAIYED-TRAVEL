
import "./Home.css";

import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import FlightSearch from "../../Components/FlightSearch/FlightSearch";
import Offers from "../../Components/Offers/Offers";
import PopularRoutes from "../../Components/PopularRoutes/PopularRoutes";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FlightSearch />
      <Offers />
      <PopularRoutes />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default Home;