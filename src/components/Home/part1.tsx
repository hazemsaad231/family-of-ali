
import image from "../../assets/img/castle.png";

  
const One = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
  
      <div>
  {/* Hero Title */}
  <h1 className="title">
        أسرة محمد علي
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center p-2 ">
      رحلة عبر العصور لاكتشاف قصة الأسرة التي أسست مصر الحديثة وساهمت في نهضة الدولة اقتصاديًا واجتماعيًا، حيث أعادت هيكلة التعليم، وأطلقت مشاريع صناعية ضخمة، واهتمت بتطوير الجيش ليكون قوة فاعلة على الساحة الدولية

      </p>
{/* Image */}
<img
        src={image}
        alt="أسرة محمد علي"
        className="w-80 sm:w-80 md:w-96 lg:w-96 xl:w-96 rounded-2xl shadow-2xl opacity-70"
        id="image"
      />
      {/* CTA Buttons */}
      <div className="flex flex-col justify-center items-center md:flex-row gap-4 my-8">
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition">
        <a href="#home">
        ابرز الشخصيات
              </a>
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-xl shadow-lg border transition">
         <a href="#about">
         أبرز الإنجازات
          </a>
        </button>
      </div>
      </div>
    

    
    </div>
  );
};

export default One;


