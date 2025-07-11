import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        <Outlet />
      </div>
      <Toaster />
      <Footer />
    </div>
  );
};

export default MainLayout;
