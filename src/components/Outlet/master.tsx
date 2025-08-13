import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import bg from "../../assets/img/innerBg.jpg";

const Master = () => {
  return (
    <>
      {/* Background ثابت خلف كل المحتوى */}
      <div className="fixed inset-0 z-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* المحتوى */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Master;
