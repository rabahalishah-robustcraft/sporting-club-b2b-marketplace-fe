import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/navBar/NavBar";
import { Sidebar } from "@/components/sideBar/SideBar";

const UserDashboardLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-1 justify-between p-4">
        <Outlet />
        <Sidebar />
      </div>
    </div>
  );
};

export default UserDashboardLayout;
