import { motion } from "framer-motion";
import { Data2 } from "../Data/data";


const History = () => {



    return (
        <>
        <div className="text-basic">
        <h2 className="text-4xl font-bold text-center mb-16">نظرة تاريخية</h2>
        <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {Data2.map((item, index) => (
        <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    whileInView={{ opacity: 1, y: 0, scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full bg-white rounded-2xl p-4 border border-gray-200"
      key={index}
    >
    
                        <h3 className="text-2xl font-bold text-primary-color mb-6">{item.title}</h3>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{item.nums[0]}</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary-color mb-2">{item.subjects[0]}</h4>
                        <p className="leading-relaxed">
                          {item.details[0]}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{item.nums[1]}</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary-color mb-2">{item.subjects[1]}</h4>
                        <p className="leading-relaxed">
                            {item.details[1]}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{item.nums[2]}</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary-color mb-2">{item.subjects[2]}</h4>
                        <p className="leading-relaxed">
                            {item.details[2]}
                        </p>
                    </div>
                </div>
            </div>
    </motion.div>
))}
</div>
</div>

        </>
    );
};

export default History; 

