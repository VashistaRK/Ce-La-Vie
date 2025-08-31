import { useState, useEffect } from "react";
import BookTableForm from "../common/BookTableForm";
import { useNavigate, useLocation } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Book Table modal
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile menu
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const isOrder = path.includes("/order");

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen || isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, isMobileOpen]);

  return (
    <header
      className={`w-full text-zinc-300 ${
        isOrder ? "bg-[#013024]" : "sm:bg-transparent bg-[#02110D]"
      } sm:px-30 px-6 py-4 flex text-black items-center justify-between fixed top-0 z-50`}
    >
      {/* Left - Logo */}
      <div className="flex items-center">
        <img
          src="/images/logo.png"
          alt="Celavie Logo"
          className="h-18 w-auto object-contain hover:cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Center - Nav (Desktop) */}
      <nav className="hidden md:flex space-x-12 text-lg font-medium text-white">
        <a
          href="/menu"
          className="hover:border-white hover:border hover:bg-white/30 hover:text-black rounded py-2 px-4 transition"
        >
          Menu
        </a>
        <a
          href="https://www.celavietherooftop.com/order-menu/parcel"
          className="hover:border-white hover:border hover:bg-white/30 hover:text-black rounded py-2 px-4 transition"
        >
          Order Online
        </a>
        <a
          href="/contact"
          className="hover:border-white hover:border hover:bg-white/30 rounded py-2 px-4 transition"
        >
          Contact
        </a>
      </nav>

      {/* Right - Button */}
      <div className="hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white px-9 py-2 border hover:bg-white/30 border-zinc-400 rounded font-semibold transition"
        >
          Book a Table
        </button>
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className="md:hidden flex items-center">
        <button
          className="text-3xl focus:outline-none"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#02110D] text-zinc-300 flex flex-col items-center space-y-6 py-6 md:hidden z-40">
          <a
            href="/menu"
            onClick={() => setIsMobileOpen(false)}
            className="hover:text-yellow-400 text-lg"
          >
            Menu
          </a>
          <a
            href="https://www.celavietherooftop.com/order-menu/parcel"
            onClick={() => setIsMobileOpen(false)}
            className="hover:text-yellow-400 text-lg"
          >
            Order Online
          </a>
          <a
            href="/contact"
            onClick={() => setIsMobileOpen(false)}
            className="hover:text-yellow-400 text-lg"
          >
            Contact
          </a>
          <button
            onClick={() => {
              setIsOpen(true);
              setIsMobileOpen(false);
            }}
            className="text-zinc-300 px-9 py-2 border hover:bg-white/30 border-zinc-400 rounded font-semibold transition"
          >
            Book a Table
          </button>
        </div>
      )}

      {/* Modal */}
      {isOpen && <BookTableForm closeModal={closeModal} />}
    </header>
  );
}
