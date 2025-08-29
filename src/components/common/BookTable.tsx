import { useState, useEffect } from "react";
import BookTableForm from "./BookTableForm";
export default function BookTable() {
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
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/table.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content box */}
      <div className="relative bg-black/40 backdrop-blur-sm text-center px-8 py-12 rounded-xl shadow-lg">
        <h2 className="text-4xl md:text-7xl font-serif tracking-wide text-[#E4C590] mb-6">
          HOW TO BOOK A TABLE
        </h2>
        <p className="text-gray-200 text-lg md:text-xl mb-8">
          We look forward to creating a memorable dining experience just for
          you. <br />
          Reserve your table, just by clicking the button below!
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className=" text-zinc-300 px-9 py-2 border hover:bg-white/30 border-zinc-400 rounded font-semibold transition"
        >
          Book a Table
        </button>
      </div>
      {isOpen && <BookTableForm closeModal={closeModal} />}
    </section>
  );
}
