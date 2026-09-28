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
        <span>{from}</span>

        <FaPlane className="plane-icon" />

        <span>{to}</span>
      </div>

      <div className="summary-info">

        <div className="summary-item">
          <FaCalendarAlt />
          <span>
            {departureDate
              ? new Date(departureDate).toLocaleDateString(
                  "en-IN",
                  {
                    day: "numeric",
                    month: "short",
                  }
                )
              : "--"}
          </span>
        </div>

        <div className="summary-item">
          <FaUserFriends />
          <span>
            {travellers?.adults || 1} Adult
            {(travellers?.adults || 1) > 1 ? "s" : ""}
            {" • "}
            {travellers?.cabin || "Economy"}
          </span>
        </div>

      </div>

    </div>
  );
}

export default SearchSummary;