import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Flights from "./Pages/Flights/Flights";
import Booking from "./Pages/Booking/Booking";
import SeatSelection from "./Pages/SeatSelection/SeatSelection";
import MealSelection from "./Pages/MealSelection/MealSelection";
import ExtraBaggage from "./Pages/ExtraBaggage/ExtraBaggage";
import Payment from "./Pages/Payment/Payment";
import Success from "./Pages/Success/Success";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Offers from "./Pages/Offers/Offers";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import MyBookings from "./Pages/MyBookings/MyBookings";
import Ticket from "./Pages/Ticket/Ticket";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import Notifications from "./Pages/Notifications/Notifications";
import Wishlist from "./Pages/Wishlist/Wishlist";
import FlightDetails from "./Pages/FlightDetails/FlightDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/seat-selection" element={<SeatSelection />} />
      <Route path="/meal-selection" element={<MealSelection />} />
      <Route path="/extra-baggage" element={<ExtraBaggage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route
  path="/flight-details"
  element={<FlightDetails />}
/>
    </Routes>
  );
}

export default App;