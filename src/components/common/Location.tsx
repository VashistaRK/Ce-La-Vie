import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiSwiggy, SiZomato } from "react-icons/si";

const Location = () => {
  return (
    <section className="bg-gradient-to-br from-[#02110D] to-[#06281F] text-white py-16 px-6 md:px-20">
      {/* Title */}
      <h2 className="font-[Ekatori] text-start text-5xl md:text-6xl text-[#E4C590] mb-12">
        VISIT US AT
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Google Maps */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5729016718836!2d78.4456408!3d17.4417196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91785d00115d%3A0xb808efe923659ff4!2sCe%20La%20Vie%20The%20Roof%20Top%20Lounge!5e0!3m2!1sen!2sin!4v1692429876543!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="text-[#E4C590] w-24 sm:w-12 h-24" />
            <p>
              Ce La Vie The Roof Top Lounge, 4th Floor, 60/3RT, Street Number 6,
              above Vijetha Supermarket, East Srinivas Nagar Colony, Sanjeeva
              Reddy Nagar, Hyderabad, Telangana 500038
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="text-[#E4C590] w-6 h-6" />
            <p>+91 94949 29137</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="text-[#E4C590] w-6 h-6" />
            <p>celavietherooftop@gmail.com</p>
          </div>

          {/* Timings */}
          <div className="flex items-center gap-4">
            <Clock className="text-[#E4C590] w-6 h-6" />
            <p>Mon – Sun: 12:30 PM – 11:30 PM</p>
          </div>

          {/* Social Media */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://api.whatsapp.com/send?phone=919494929137"
              className="text-green-500 hover:text-[#E4C590] transition"
              target="_blank"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-[#E4C590] transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/celavietherooftop/"
              className=" hover:text-[#E4C590] transition"
              target="_blank"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Swiggy & Zomato */}
          <div className="mt-8 flex gap-6 items-center">
            <p className="text-lg font-semibold">Also available on:</p>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              <SiSwiggy className="text-4xl text-orange-500 transition-transform duration-300 hover:scale-110" />
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              <SiZomato className="text-6xl text-red-500 transition-transform duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
