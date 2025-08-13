// import Achievements from '../Achievements/Achievements';
// import Personalities from '../Personalities/Personalities';
// import History from "../History/history";


const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className='flex justify-center items-center h-screen' id='home'>
     
        <div className="z-10 text-center max-w-3xl mx-auto p-4  text-basic">
          <h1 className="font-bold text-[3rem] sm:text-[3.5rem]  md:text-[5rem] mb-3" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)" }}>أسرة محمد علي</h1>

          <p className="font-serif text-lg mb-3" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)" }}>
            رحلة عبر العصور لاكتشاف قصة الأسرة التي أسست مصر الحديثة وساهمت في
            نهضة الدولة اقتصادياً واجتماعياً، حيث أعادت هيكلة التعليم، وأطلقت مشاريع
            صناعية ضخمة، واهتمت بتطوير الجيش ليكون قوة فاعلة على الساحة الدولية
          </p>
          
          <div className="flex gap-2 justify-center mt-12">
            <button 
              className="bg-basic py-2 px-4 rounded-lg text-white hover:bg-transparent hover:text-basic border-2 hover:border-basic hover:translate-y-[-4px] transition-colors duration-100"
              onClick={() => document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })}
            >
              النظرة التاريخية
            </button>
            <button 
              className="border-2 border-basic text-basic py-2 px-4 rounded-lg hover:bg-basic hover:text-cream hover:translate-y-[-4px] transition-colors duration-100"
              onClick={() => document.getElementById('personalities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              أبرز الشخصيات
            </button>
          </div>
        </div>

      </section>

      {/* Historical Overview Section
      <section id="history"> 
            <History />
      </section> */}

      {/* Personalities Section */}
      {/* <section id="personalities">
        <Personalities />
      </section> */}

      {/* Achievements Section */}
      {/* <section id="achievements">
          <Achievements />
      </section> */}
    </div>
  );
};

export default Home;