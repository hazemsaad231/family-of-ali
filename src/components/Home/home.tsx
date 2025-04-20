import Achievements from '../Achievements';
import Personalities from '../Personalities';
import One from "./part1";
import Two from "./part2";
import img from "../../assets/img/castle.png";


const Home = () => {
  return (
    <div className="min-h-screen py-24">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">أسرة محمد علي</h1>
          <p className="hero-description">
            رحلة عبر العصور لاكتشاف قصة الأسرة التي أسست مصر الحديثة وساهمت في
            نهضة الدولة اقتصادياً واجتماعياً، حيث أعادت هيكلة التعليم، وأطلقت مشاريع
            صناعية ضخمة، واهتمت بتطوير الجيش ليكون قوة فاعلة على الساحة الدولية
          </p>
          <img alt="أسرة محمد علي" className="hero-img w-80 sm:w-80 md:w-96 lg:w-96 xl:w-96 rounded-2xl shadow-2xl opacity-70" id="image" src = {img}></img>
          
          <div className="hero-buttons mt-12">
            <button 
              className="hero-btn hero-btn-primary"
              onClick={() => document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })}
            >
              النظرة التاريخية
            </button>
            <button 
              className="hero-btn hero-btn-secondary"
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
            <One />
            <Two />
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