import { useEffect, useState } from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Outlet } from "react-router";
import { motion } from "framer-motion";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    const panelColors = ["#02110D", "#06281F", "#0B3D2E", "#0C1A17"];

    return (
      <main className="relative flex min-h-screen items-center justify-center p-10 bg-gradient-to-br from-[#02110D] via-[#06281F] to-[#0B3D2E] overflow-hidden">
        {/* Sliding Panels Animation */}
        {panelColors.map((color, index) => (
          <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: index * 0.25,
            }}
            className="absolute top-0 h-full w-1/4"
            style={{
              left: `${index * 25}%`,
              backgroundColor: color,
            }}
          />
        ))}

        {/* Center Content */}
        <section className="relative flex justify-center items-center w-full h-[89vh] border-2 border-[#A67C00]/80 z-10">
          <motion.img
            src="images/logo.png"
            alt="Cafe Logo"
            className="h-[10vh]  sm:h-[40vh]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          />
        </section>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-br from-[#02110D] to-[#06281F] font-quick">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
