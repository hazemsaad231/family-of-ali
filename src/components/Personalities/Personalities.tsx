import { Link } from 'react-router-dom';
import Data from '../Data/data';
import React from 'react';

interface PersonType {
  id: number;
  name: string;
  title: string;
  text: string;
  date: string;
  img: string;
  details?: string;
  accomplishments?: string[];
}

const Personalities = () => {
  return (
    <section className="py-16 bg-cream/5 backdrop-blur-sm text-basic">
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">شخصيات الأسرة</h2>
        <div className="grid gap-8">
          {Data.map((person: PersonType) => (
            <div
              key={person.id}
            >
              <div className="h-full sm:h-full md:h-[28rem] flex flex-col md:flex-row bg-cream rounded-xl hover:rotate-2 transition-transform duration-500">
                <div className="md:w-1/3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-brown-900/20 to-transparent z-10" />
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-80 sm:h-80 md:h-full rounded-r-xl object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{person.name}</h3>
                    <span className="text-brown-700 text-sm font-medium">{person.date}</span>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-brown-900/10 text-brown-800 rounded-full text-sm font-medium">
                      {person.title}
                    </span>
                  </div>
                  <p className="text-brown-800 mt-4 leading-relaxed line-clamp-3">
                    {person.text}
                  </p>
                  {person.accomplishments && (
                    <div className="mt-4">
                      <h4 className="font-bold text-brown-900 mb-2">أبرز الإنجازات:</h4>
                      <ul className="list-disc list-inside space-y-1 text-brown-700">
                        {person.accomplishments.slice(0, 3).map((accomplishment: string, index: number) => (
                          <li key={index} className="line-clamp-1">{accomplishment}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-6">
                    <Link 
                      to={`/personality/${person.id}`}
                      className="text-white bg-basic rounded-lg hover:bg-blue-800 font-bold p-4"
                    >
                      اقرأ المزيد
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo (Personalities) ;