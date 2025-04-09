import image from "../../assets/img/castle.png";

const One = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Hero Title */}
        <h1 className="title">
          أسرة محمد علي
        </h1>
  
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 animate-fade-in-up">
          رحلة عبر التاريخ لاكتشاف قصة الأسرة التي وضعت أساس مصر الحديثة، ونهضت بالتعليم، الصناعة، والجيش.
        </p>
  
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 animate-fade-in-up">
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition">
          <a href="#home">
          تعرف على الشخصيات
                </a>
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-xl shadow-lg border transition">
           <a href="#about">
           أبرز الإنجازات
            </a>
          </button>
        </div>
  
        {/* Image */}
        <img
          src={image}
          alt="أسرة محمد علي"
          className="w-80 sm:w-80 md:w-96 lg:w-[400px] xl:w-[400px] h-80 rounded-2xl shadow-2xl opacity-70"
          id="image"
        />
      </div>
    );
  };
  
  export default One;
  
  
