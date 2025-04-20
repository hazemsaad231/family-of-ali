import { useEffect, useRef } from 'react';

const Achievements = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const cards = cardsRef.current?.querySelectorAll('.achievement-card');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const achievements = [
    {
      year: "1805-1848",
      title: "تأسيس الأسرة الحاكمة",
      description: "تولي محمد علي باشا حكم مصر وإرساء دعائم الدولة الحديثة. قام بإصلاحات شاملة في الجيش والإدارة والتعليم والاقتصاد.",
      icon: "🏛️",
      details: [
        "تأسيس الجيش المصري الحديث",
        "إعادة هيكلة النظام الإداري",
        "تطوير نظام الضرائب",
        "إنشاء المدارس العسكرية"
      ]
    },
    {
      year: "1811-1840",
      title: "النهضة التعليمية",
      description: "إنشاء نظام تعليمي متكامل وإرسال البعثات التعليمية لأوروبا. تأسيس المدارس العليا والمتخصصة في مختلف المجالات.",
      icon: "📚",
      details: [
        "إنشاء مدرسة الطب",
        "تأسيس مدرسة الهندسة",
        "إنشاء مدرسة الزراعة",
        "إرسال البعثات التعليمية لأوروبا"
      ]
    },
    {
      year: "1820-1840",
      title: "التنمية الصناعية",
      description: "إنشاء المصانع والمشاريع الصناعية الأولى في مصر. تطوير الصناعات الحربية والمدنية.",
      icon: "🏭",
      details: [
        "إنشاء مصانع الأسلحة",
        "تطوير صناعة النسيج",
        "إنشاء مصانع السكر",
        "تطوير الصناعات الحرفية"
      ]
    },
    {
      year: "1830-1848",
      title: "الإصلاحات الزراعية",
      description: "تطوير نظام الري وإدخال المحاصيل الجديدة. تحسين أساليب الزراعة وتنظيم الأراضي.",
      icon: "🌾",
      details: [
        "تطوير نظام الري",
        "إدخال محاصيل جديدة",
        "إنشاء السدود والقنوات",
        "تنظيم ملكية الأراضي"
      ]
    },
    {
      year: "1840-1863",
      title: "التطور العسكري",
      description: "تحديث الجيش المصري وتطوير القوات البحرية. إنشاء المدارس العسكرية وتطوير الأسلحة.",
      icon: "⚓",
      details: [
        "تطوير القوات البحرية",
        "إنشاء المدارس العسكرية",
        "تحديث الأسلحة والمعدات",
        "تدريب الضباط"
      ]
    },
    {
      year: "1850-1879",
      title: "النهضة الثقافية",
      description: "دعم الحركة الثقافية والفنية في مصر. إنشاء المكتبات والمتاحف ودعم الفنون.",
      icon: "🎨",
      details: [
        "إنشاء المكتبة الخديوية",
        "تأسيس المتاحف",
        "دعم الفنون والآداب",
        "تطوير الصحافة"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="title mb-12">أبرز الإنجازات</h2>
        
        <div className="timeline-container" ref={cardsRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="card achievement-card group"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">{achievement.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary-color">{achievement.title}</h3>
                    <span className="text-secondary-color font-semibold">{achievement.year}</span>
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
              </div>
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