import { Mail, Phone, MapPin } from "lucide-react";
import Insta from "../components/common/Insta";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <main className="bg-[#02110D] overflow-hidden text-white px-6 md:px-20 py-20 pt-30">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E4C590]">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or feedback? Reach out to us directly or visit us at
            our location.
          </p>
        </section>

        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5729016718836!2d78.4456408!3d17.4417196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91785d00115d%3A0xb808efe923659ff4!2sCe%20La%20Vie%20The%20Roof%20Top%20Lounge!5e0!3m2!1sen!2sin!4v1692429876543!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          className="rounded-2xl shadow-lg"
        ></iframe>

        {/* Contact Section */}
        <section className="flex flex-col md:flex-row items-start justify-between mt-10 p-8 gap-10 max-w-6xl mx-auto bg-[#0C1A17] rounded-2xl shadow-lg">
          {/* Contact Info */}
          <div className="flex-1 space-y-6 border-b-2 md:border-b-0 md:border-r-2 border-[#1e3f39] pb-6 md:pb-0 md:pr-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#E4C590]" />
              <p className="break-words">celavietherooftop@gmail.com</p>
            </div>

            <a
              className="flex items-center gap-4 hover:text-[#E4C590] transition"
              href="tel:+919494929137"
            >
              <Phone className="w-6 h-6 text-[#E4C590]" />
              <p>+91 94949 29137</p>
            </a>

            <div className="flex items-start gap-4 max-w-md">
              <MapPin className="w-6 h-6 text-[#E4C590] shrink-0" />
              <p className="text-gray-300">
                Ce La Vie The Roof Top Lounge, 4th Floor, 60/3RT, Street Number
                6, above Vijetha Supermarket, East Srinivas Nagar Colony,
                Sanjeeva Reddy Nagar, Hyderabad, Telangana 500038
              </p>
            </div>
          </div>

          {/* Timings + WhatsApp */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Timings</h2>
            <div>
              <p className="text-gray-300">Monday - Sunday</p>
              <p className="text-gray-300">12:30 PM - 11:30 PM</p>
            </div>

            <div>
              <p className="text-gray-300 mb-2">Contact us through WhatsApp</p>
              <a
                href="https://api.whatsapp.com/send?phone=919494929137"
                className="inline-flex items-center gap-2 text-green-500 hover:text-[#E4C590] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
                <span>Chat with us</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Instagram Feed Component */}
      <Insta />
    </>
  );
}
