import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex relative">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
