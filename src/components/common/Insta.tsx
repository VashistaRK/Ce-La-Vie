import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const Insta = () => {
  return (
    <section className="relative flex flex-col bg-gradient-to-br h-screen from-[#02110D] to-[#06281F] text-white py-16 px-6 md:px-20 overflow-hidden">
      {/* Title */}
      <h2 className="font-[Ekatori] text-start text-5xl md:text-6xl text-[#E4C590] mb-12">
        OUR INSTAGRAM
      </h2>

      {/* Image grids */}
      <aside className="flex justify-between gap-6">
        {/* Left side */}
        <div className="grid grid-col-1 sm:grid-cols-2 gap-4 items-start">
          <motion.img
            src="images/I-post1.jpg"
            alt="Seafood Dish"
            className="rounded-lg object-cover h-64 md:h-80 shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src="images/I-post2.jpg"
            alt="Chef cooking"
            className="rounded-lg object-cover h-64 md:h-96 shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Right side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
          <motion.img
            src="images/I-post3.jpg"
            alt="Fine dining"
            className="rounded-lg object-cover h-64 md:h-72 shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="images/I-post4.jpg"
            alt="Restaurant vibes"
            className="rounded-lg object-cover h-64 md:h-96 shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </aside>

      {/* Follow us section */}
      <motion.a
        className="flex justify-end mt-20 items-center gap-3 cursor-pointer text-[#E4C590]"
        whileHover={{ scale: 1.1 }}
        href="https://www.instagram.com/celavietherooftop/"
        target="_blank"
      >
        <Instagram className="w-6 h-6" />
        <span className="font-medium tracking-wide">
          Follow us on Instagram
        </span>
      </motion.a>
    </section>
  );
};

export default Insta;
