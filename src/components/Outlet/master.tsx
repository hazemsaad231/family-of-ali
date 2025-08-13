import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";

const Master = () => {
  return (
    <>
      {/* المحتوى */}
      <div >
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
