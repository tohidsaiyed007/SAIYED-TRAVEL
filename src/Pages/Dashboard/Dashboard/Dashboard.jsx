
import "./Dashboard.css";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

import { Outlet } from "react-router-dom";

function Dashboard() {

  return (
    <div className="dashboard-page">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT SIDE */}
      <div className="dashboard-content">

        {/* TOPBAR */}
        <Topbar />

        {/* YAHAN PAGES OPEN HONGE */}
        <div className="dashboard-main-content">

          <Outlet />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;