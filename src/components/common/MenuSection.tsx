import { useState } from "react";
import { menuData } from "../../data/Menudata";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-br from-[#02110D] to-[#06281F] text-white py-16 px-6 md:px-20">
      {/* Title */}
      <h2 className="font-[Ekatori] text-5xl md:text-6xl text-[#E4C590] mb-12">
        OUR MENU
      </h2>

      {/* Menu Categories */}
      {!selectedCategory ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Dishes */}
          <div
            onClick={() => setSelectedCategory("Main Dishes")}
            className="cursor-pointer h-96 relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src="images/main-dish.jpg"
              alt="Main Dishes"
              className="w-full h-96 object-cover transform group-hover:scale-105 transition-all duration-500"
            />
            <p className="absolute bottom-4 left-4 text-lg font-medium">
              Main Dishes
            </p>
          </div>

          {/* Salads */}
          <div
            onClick={() => setSelectedCategory("Salads")}
            className="cursor-pointer h-72 relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src="images/salads.jpg"
              alt="Salads"
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-all duration-500"
            />
            <p className="absolute bottom-4 left-4 text-lg font-medium">
              Salads
            </p>
          </div>

          {/* Desserts */}
          <div
            onClick={() => setSelectedCategory("Desserts")}
            className="cursor-pointer h-64 relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src="images/desserts.jpg"
              alt="Desserts"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-500"
            />
            <p className="absolute bottom-4 left-4 text-lg font-medium">
              Desserts
            </p>
          </div>
        </div>
      ) : (
        /* Menu Items */
        <div>
          <h3 className="text-3xl md:text-4xl mb-6">{selectedCategory}</h3>
          <div className="grid gap-6">
            {menuData[selectedCategory as keyof typeof menuData]?.map(
              (item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0B3D2E]/40 p-6 rounded-xl border border-[#E4C590]/30 hover:border-[#E4C590] transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <span className="text-[#E4C590] font-medium">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
                </div>
              )
            )}
          </div>

          {/* Back Button */}
          <button
            onClick={() => setSelectedCategory(null)}
            className="mt-8 px-6 py-2 bg-[#E4C590] text-black rounded-lg font-medium hover:bg-[#d6ad66] transition-all duration-300"
          >
            ← Back to Menu
          </button>
        </div>
      )}

      {/* All Menu CTA */}
      {!selectedCategory && (
        <div className="flex justify-end mt-10">
          <a
            className="flex items-center gap-2 cursor-pointer text-[#E4C590] hover:underline transition"
            href="/menu"
          >
            → All menu
          </a>
        </div>
      )}
    </div>
  );
}
