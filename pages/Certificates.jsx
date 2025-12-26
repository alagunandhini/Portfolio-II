import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useRef } from "react";

const certificates = [
  { title: "Full Stack Web Development", image: "cc.png" },
  { title: "React.js Certification", image: "web.png" },
  { title: "MongoDB Developer Basics", image: "md.png" },
  { title: "Node.js Backend Development", image: "gen.png" },
    { title: "Node.js Backend Development", image: "py.png" },
      { title: "Node.js Backend Development", image: "f.png" },
        { title: "Node.js Backend Development", image: "htmll.png" },
];

const Certificates = () => {
  const swiperRef = useRef(null);

  return (
    <section id="certificates" className="relative bg-slate-50 py-16 px-6 -[80vh] ">
            <div className="absolute top-20 left-20 w-72 h-72 bg-sky-200/60 rounded-full blur-[140px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200/60 rounded-full blur-[140px]" />
      <div className="max-w-6xl mx-auto relative">

          <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-slate-800">
          My <span className="text-sky-500">Certification</span>
        </h2>
        <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full" />
      </div>

        {/* Header */}
        <div className="flex items-center justify-end mb-8">
        

          {/* External Controls */}
          <div className="flex gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full bg-sky-600 border border-sky-300 
                         hover:bg-gray-100 transition"
            >
              ←
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full bg-sky-600 border border-sky-300 
                         hover:bg-gray-100 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={32}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <div
                className="group bg-white rounded-2xl overflow-hidden 
                           border border-gray-200 shadow-sm 
                           hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-66 object-fit 
                               group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Title */}
              
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Certificates;

