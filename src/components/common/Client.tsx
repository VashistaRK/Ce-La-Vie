import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimonials } from "../../data/testimonials";

export default function Clients() {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-[#02110D] to-[#111] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-start">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-[#E4C590] mb-12">
          OUR CLIENTS
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg p-6 flex flex-col h-full">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                <p className="text-[#D4AF37] mb-3">
                  {"★".repeat(client.rating)}
                </p>
                <p className="text-gray-300 text-sm">{client.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Leave feedback link */}
        <div className="mt-10 flex justify-end items-center gap-2">
          <span className="text-gray-300 text-sm">Leave feedback</span>
          <span className="text-gray-300">→</span>
        </div>
      </div>
    </section>
  );
}
