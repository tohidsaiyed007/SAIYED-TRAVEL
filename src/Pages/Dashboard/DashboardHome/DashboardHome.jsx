import Cards from "../Cards/Cards";
import Charts from "../Charts/Charts";
import BookingTable from "../BookingTable/BookingTable";
import RecentActivity from "../RecentActivity/RecentActivity";
import Notifications from "../Notifications/Notifications";

function DashboardHome() {

  return (
    <>
      <Cards />

      <Charts />

      <BookingTable />

      <div className="dashboard-bottom">

        <RecentActivity />

        <Notifications />

      </div>
    </>
  );
}

export default DashboardHome;