import "./SearchSummary.css";
import { FaPlane, FaCalendarAlt, FaUserFriends } from "react-icons/fa";

function SearchSummary({
  from,
  to,
  departureDate,
  travellers,
}) {
  return (
    <div className="search-summary">

      <div className="summary-route">

        <h2>
          {from}
          <FaPlane className="plane-icon" />
          {to}
        </h2>

      </div>

      <div className="summary-info">

        <div className="summary-item">

          <FaCalendarAlt />

          <span>
            {new Date(departureDate).toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
          </span>

        </div>

        <div className="summary-item">

          <FaUserFriends />

          <span>
            {travellers.adults} Adult
            {travellers.adults > 1 ? "s" : ""}
            {" • "}
            {travellers.cabin}
          </span>

        </div>

      </div>

    </div>
  );
}

export default SearchSummary;