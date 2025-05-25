import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <main>
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default Dashboard;
