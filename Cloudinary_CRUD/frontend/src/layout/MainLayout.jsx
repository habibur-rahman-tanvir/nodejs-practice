import { Link, Outlet } from "react-router";
import Header from "../components/common/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-dvh">
      <div>
        <Header />
      </div>
      <div className="flex-1 overflow-y-scroll scroll-smooth no-scrollbar">
        <Outlet />
      </div>
      <Link
        to="/upload"
        className="absolute z-40 px-3 py-2 text-2xl text-white uppercase bg-blue-500 rounded-full bottom-3 right-3"
      >
        Upload
      </Link>
    </div>
  );
};

export default MainLayout;
