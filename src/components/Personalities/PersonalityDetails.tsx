import { useParams, Link } from 'react-router-dom';
import Data from '../Data/data';
import React , { useMemo } from 'react';


const PersonalityDetails = () => {
  const { id } = useParams();
  const person = useMemo(() => { return Data.find((p) => p.id === Number(id))}, [id])

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brown-900 mb-4">لم يتم العثور على الشخصية</h2>
          <Link to="/" className="btn bg-brown-900 text-cream hover:bg-brown-800 transition-colors duration-300">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
        <div className="bg-cream rounded-2xl shadow-2xl overflow-hidden m-auto w-[90%] ">
          {/* Header */}
          <div className="relative h-[400px] md:h-[600px] mb-8 ">
            <div className="absolute inset-0 bg-black/40" />
            <img
              src={person.img}
              alt={person.name}
              className="w-full h-full object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 w-full p-8 md:p-12">
              <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-off-white drop-shadow-lg">
                  {person.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="px-6 py-2.5 bg-cream/20 backdrop-blur-sm rounded-full text-lg text-cream/90 shadow-lg">
                    {person.title}
                  </span>
                  <span className="px-6 py-2.5 bg-cream/20 backdrop-blur-sm rounded-full text-cream/90 shadow-lg">
                    {person.date}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Description */}
            <div className="max-w-4xl mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-navy-900 px-4 leading-relaxed text-xl md:text-2xl font-medium">
                  {person.details || person.text}
                </p>
              </div>
            </div>

            {/* Accomplishments */}
            {person.accomplishments && (
              <div className="max-w-4xl">
                <h2 className="text-4xl font-bold text-navy-900 mb-12 px-4">أبرز الإنجازات</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {person.accomplishments.map((accomplishment, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <span className="text-navy-900 text-3xl font-bold ">{index + 1}</span>
                      <p className="text-navy-900 leading-relaxed text-lg md:text-xl font-medium">{accomplishment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="mt-12">
              <Link
                to="/"
                className="bg-blue-900 text-cream px-6 py-3 rounded-lg font-bold text-xl hover:bg-blue-800 transition-colors duration-300"
              >
                العودة للرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default React.memo (PersonalityDetails);