import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";

const Master = () => {
  return (
    <>
      {/* Background ثابت خلف كل المحتوى */}
      <div className="fixed inset-0 z-0">
        <img
          src="/src/assets/img/innerBackground.jpg"
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
