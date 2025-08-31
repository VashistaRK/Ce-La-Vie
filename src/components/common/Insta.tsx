import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useRef } from "react";

const Insta = () => {
  const posts = [
    { type: "image", src: "images/I-post1.jpg", alt: "Seafood Dish" },
    { type: "image", src: "images/I-post2.jpg", alt: "Chef cooking" },
    { type: "video", src: "videos/I-post1.mp4", alt: "Restaurant ambience" },
    { type: "image", src: "images/I-post3.jpg", alt: "Fine dining" },
    { type: "video", src: "videos/I-post2.mp4", alt: "Cooking video" },
    { type: "image", src: "images/I-post4.jpg", alt: "Restaurant vibes" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Predefined aesthetic heights for images (random look)
  const imageHeights = ["h-[300px]", "h-[400px]", "h-[500px]"];

  return (
    <section className="relative flex flex-col bg-gradient-to-br from-[#02110D] to-[#06281F] text-white py-16 px-6 md:px-20 overflow-hidden">
      {/* Title */}
      <h2 className="font-[Ekatori] text-start text-4xl md:text-6xl text-[#E4C590] mb-10">
        OUR INSTAGRAM
      </h2>

      {/* Scrollable feed */}
      <div className="relative">
        {/* Arrows (desktop only) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-3 rounded-full hover:bg-black/60 transition"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-3 rounded-full hover:bg-black/60 transition"
        >
          ▶
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar items-end"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {posts.map((post, index) => {
            const randomHeight =
              post.type === "image"
                ? imageHeights[index % imageHeights.length]
                : "h-[500px]"; // Videos always 500px

            return (
              <motion.div
                key={index}
                className={`min-w-[250px] sm:min-w-[320px] md:min-w-[380px] ${randomHeight} snap-center rounded-2xl overflow-hidden shadow-lg`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + index * 0.2 }}
              >
                {post.type === "image" ? (
                  <img
                    src={post.src}
                    alt={post.alt}
                    className={`object-cover w-full ${randomHeight}`}
                  />
                ) : (
                  <video
                    src={post.src}
                    className={`object-cover w-full ${randomHeight}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Follow us section */}
      <motion.a
        className="flex justify-end mt-12 items-center gap-3 cursor-pointer text-[#E4C590]"
        whileHover={{ scale: 1.1 }}
        href="https://www.instagram.com/celavietherooftop/"
        target="_blank"
      >
        <Instagram />
        <span className="font-medium tracking-wide">
          Follow us on Instagram
        </span>
      </motion.a>

      {/* Hide scrollbar */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default Insta;
