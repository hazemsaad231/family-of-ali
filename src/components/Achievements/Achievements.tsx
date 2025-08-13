import { motion } from 'framer-motion';
import { achievements } from '../Data/data';

const Achievements = () => {



 

  return (
    <section className="py-16 text-basic">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">أبرز الإنجازات</h2>
        
        <div className="timeline-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {achievements.map((achievement, index) => (
              <motion.div
              whileInView={{ opacity: 1   , rotate: 1.5 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}

                key={index} 
                className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-500 hover:scale-105 border-t-4 border-blue-800"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4 hover:scale-110 duration-500">{achievement.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                    <span className="font-semibold">{achievement.year}</span>
                  </div>
                </div>
                <p className="text-content mb-4">{achievement.description}</p>
                <ul className="space-y-2">
                  {achievement.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-primary-color rounded-full ml-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="quote-box mt-12">
          <p className="text-lg">
            "لقد سعت أسرة محمد علي دائماً لتطوير مصر وجعلها في مصاف الدول المتقدمة، 
            وتركوا إرثاً عظيماً من الإنجازات التي ما زالت تؤثر في مصر حتى اليوم."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 