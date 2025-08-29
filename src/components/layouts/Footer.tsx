// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="relative bg-black text-white text-center py-16 px-6">
//       {/* Side Borders */}
//       <div className="absolute inset-y-0 left-0 w-[15px] bg-[repeating-linear-gradient(45deg,#c9a34d,#c9a34d_2px,transparent_2px,transparent_6px)]"></div>
//       <div className="absolute inset-y-0 right-0 w-[15px] bg-[repeating-linear-gradient(45deg,#c9a34d,#c9a34d_2px,transparent_2px,transparent_6px)]"></div>

//       {/* Content */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
//         {/* Logo */}
//         <div>
//           <h2 className="text-3xl tracking-[0.25em] font-bold">THEORY</h2>
//           <p className="mt-2 text-sm text-gray-400">Cafe | Dessert Bar</p>
//         </div>

//         {/* Working Hours */}
//         <div>
//           <h3 className="text-[#c9a34d] font-semibold mb-3">Working Hours</h3>
//           <p>Mon - Sun: 08:00 AM - 11:00 PM</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-[#c9a34d] font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="hover:text-[#c9a34d] transition">
//                 Menu
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-[#c9a34d] transition">
//                 Book a Table
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-[#c9a34d] transition">
//                 Leave Feedback
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-[#c9a34d] font-semibold mb-3">Contact</h3>
//           <p>Email: theorycdb@gmail.com</p>
//           <p>Phone: +91 8367 6967 69</p>
//           <p>+91 8688 9918 26</p>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-[#c9a34d] font-semibold mb-3">Follow Us</h3>
//           <div className="flex justify-center gap-6 text-xl">
//             <a href="#" className="hover:text-[#c9a34d] transition">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="hover:text-[#c9a34d] transition">
//               <FaInstagram />
//             </a>
//             <a href="#" className="hover:text-[#c9a34d] transition">
//               <FaTwitter />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="mt-10 text-sm text-gray-500">
//         © 2025 Theory Cafe. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiSwiggy, SiZomato } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="text-gray-300 border-t-2 border-t-[#E4C590]/40 shadow-2xl bg-[#02110D]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white">Ce La Vie</h2>
          <p className="mt-4 text-sm leading-relaxed">
            The Roof Top Lounge where flavors meet the sky. Experience fine
            dining with stunning views and a vibrant atmosphere.
          </p>
          <h3 className="mt-8 mb-2 text-white">WORK HOURS</h3>
          <p>Monday - Sunday : 12:30 - 11:30</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-white">
                Menu
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Book a table
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Leave Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2">
            📍 4th Floor, 60/3RT, Street No.6, above Vijetha Supermarket,
            Hyderabad, Telangana 500038
          </p>
          <p className="text-sm mb-2">📧 info@celavie.com</p>
          <p className="text-sm mb-2">📞 +91 98765 43210</p>
        </div>

        {/* Social & Delivery */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Us
          </h3>
          <div className="flex gap-4 mb-6">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-sm font-semibold mb-3">Also available on:</p>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-orange-500 hover:scale-110 transition">
              <SiSwiggy size={38} />
            </a>
            <a href="#" className="text-red-500 hover:scale-110 transition">
              <SiZomato size={38} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Ce La Vie The Roof Top Lounge. All rights
        reserved.
      </div>
    </footer>
  );
}
