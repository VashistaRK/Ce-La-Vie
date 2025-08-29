import Insta from "../components/common/Insta";
import Clients from "../components/common/Client";
import BookTable from "../components/common/BookTable";
import MenuSection from "../components/common/MenuSection";
import AboutUs from "../components/common/About";
import Location from "../components/common/Location";

import { useState, useEffect } from "react";
import BookTableForm from "../components/common/BookTableForm";

export default function CafeIntro() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <main>
      {" "}
      <div className="bg-gradient-to-br from-[#02110D] to-[#06281F] min-h-screen relative grid grid-cols-1 md:grid-cols-2">
        {/* Absolute Center Text */}
        <div className="absolute inset-0 flex flex-col gap-20 items-center justify-center text-center px-4">
          <h1 className="font-[Ekatori] font-semibold text-8xl sm:text-[180px] lg:text-[240px] drop-shadow-xl leading-tight select-none z-10">
            <span className="text-[#E4C590] sm:text-[#0B3D2E]">Cé L</span>
            <span className="text-[#E4C590]">a Vie</span>
          </h1>
          <button
            onClick={() => setIsOpen(true)}
            className=" text-zinc-300 flex sm:hidden z-10 px-9 py-2 border hover:bg-white/30 border-white rounded font-semibold transition"
          >
            Book a Table
          </button>
          {isOpen && <BookTableForm closeModal={closeModal} />}
        </div>

        {/* Left Half - Image */}
        <div className="md:h-screen">
          <img
            src="images/RoofImage.jpg"
            alt="ambience"
            className="w-full h-full object-cover opacity-50 sm:opacity-100"
          />
        </div>

        {/* Right Half - Image */}
        <div className="h-1/2 md:h-screen hidden sm:flex justify-center md:justify-end items-center md:items-start p-6 sm:pt-30 sm:pr-30 relative">
          <img
            src="images/food.jpeg"
            alt="food"
            className="h-40 md:h-2/6 object-cover rounded-lg shadow-lg"
          />

          {/* Order Now Button with Animation */}
          <div className="absolute bottom-16 left-1/2 md:left-auto md:right-12 transform -translate-x-1/2 md:translate-x-0">
            <button className="relative group overflow-hidden h-26 w-26 p-3 rounded-lg text-black font-semibold flex justify-center items-center gap-2 cursor-pointer bg-[#E4C590]">
              {/* Icon (Charminar) + Text */}
              <a
                className="relative z-10 flex flex-col items-center gap-2 text-sm"
                href="/order"
              >
                {/* Hyderabad Charminar SVG */}
                <img
                  src="images/charminar.png"
                  alt="charminar"
                  className="h-8"
                />
                Order Now
              </a>
            </button>
            {/* Rotating Border Background */}
            <span className="absolute inset-0 border border-[#E4C590] rounded-lg animate-rotateme"></span>
          </div>
        </div>
      </div>
      <AboutUs />
      <MenuSection />
      <BookTable />
      <Clients />
      <Insta />
      <Location />
    </main>
  );
}
