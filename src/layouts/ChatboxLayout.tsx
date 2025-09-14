import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/navBar/NavBar";

const ChatboxLayout = () => {
  return (
    <div>
      <NavBar />

      <Outlet />
    </div>
  );
};

export default ChatboxLayout;
