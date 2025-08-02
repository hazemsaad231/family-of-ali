import Achievements from './Achievements/Achievements';
import Personalities from './Personalities/Personalities';
import History from "./History/history";


const Home = () => {
  return (
    <div className="min-h-screen py-24">

      {/* Hero Section */}
      <section className='flex justify-center items-center h-screen py-6' id='home'>
     
        <div className="z-10 text-center max-w-3xl mx-auto px-4 text-white">
          <h1 className="font-bold text-[3rem] sm:text-[3.5rem]  md:text-[5rem]  mb-3" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)" }}>أسرة محمد علي</h1>

          <p className="font-serif text-lg mb-3" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)" }}>
            رحلة عبر العصور لاكتشاف قصة الأسرة التي أسست مصر الحديثة وساهمت في
            نهضة الدولة اقتصادياً واجتماعياً، حيث أعادت هيكلة التعليم، وأطلقت مشاريع
            صناعية ضخمة، واهتمت بتطوير الجيش ليكون قوة فاعلة على الساحة الدولية
          </p>
          
          <div className="flex gap-2 justify-center mt-12">
            <button 
              className="bg-[--primary-color] py-2 px-4 rounded-lg hover:bg-blue-900 hover:translate-y-[-4px] transition-colors duration-100"
              onClick={() => document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })}
            >
              النظرة التاريخية
            </button>
            <button 
              className="border-2 border-[--primary-color] py-2 px-4 rounded-lg hover:bg-blue-900 hover:translate-y-[-4px] transition-colors duration-100"
              onClick={() => document.getElementById('personalities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              أبرز الشخصيات
            </button>
          </div>
        </div>

      </section>

      {/* Historical Overview Section */}
      <section id="history" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-color text-center mb-16">نظرة تاريخية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <History />
          </div>
        </div>
      </section>

      {/* Personalities Section */}
      <section id="personalities" className="py-20">
        <Personalities />
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <Achievements />
        </div>
      </section>
    </div>
  );
};

export default Home;