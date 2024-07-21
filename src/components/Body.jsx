import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div>
      <Head/>
      <div
        className={`grid ${isMenuOpen ? "grid-cols-[250px_auto]" : "grid-cols-auto"}`}
      >
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
