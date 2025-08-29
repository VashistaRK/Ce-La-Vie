import { useState, useEffect } from "react";
import { Search, ShoppingCart } from "lucide-react";
import Cart from "../components/common/Cart";

type FoodItem = {
  id: number;
  name: string;
  category: string;
  type: "Veg" | "Non-Veg";
  price: number;
  image: string;
};

const allItems: FoodItem[] = [
  {
    id: 1,
    name: "Paneer Tikka",
    category: "Starters",
    type: "Veg",
    price: 220,
    image: "images/paneer.jpg",
  },
  {
    id: 2,
    name: "Chicken Kebab",
    category: "Starters",
    type: "Non-Veg",
    price: 280,
    image: "images/kebab.jpg",
  },
  {
    id: 3,
    name: "Veg Biryani",
    category: "Main Course",
    type: "Veg",
    price: 350,
    image: "images/veg-biryani.jpg",
  },
  {
    id: 4,
    name: "Hyderabadi Chicken Biryani",
    category: "Main Course",
    type: "Non-Veg",
    price: 420,
    image: "images/chicken-biryani.jpg",
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    category: "Desserts",
    type: "Veg",
    price: 180,
    image: "images/brownie.jpg",
  },
  {
    id: 6,
    name: "Mango Lassi",
    category: "Beverages",
    type: "Veg",
    price: 120,
    image: "images/lassi.jpg",
  },
];

const categories = ["All", "Starters", "Main Course", "Desserts", "Beverages"];
const filters = ["All", "Veg", "Non-Veg"];

export default function OrderPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<{ item: FoodItem; qty: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [isOpenHours, setIsOpenHours] = useState(true);

  useEffect(() => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const openMinutes = 12 * 60 + 30;
    const closeMinutes = 11 * 60 + 30;

    setIsOpenHours(
      currentMinutes >= openMinutes && currentMinutes <= closeMinutes
    );
  }, []);

  const filteredItems = allItems.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchFilter =
      selectedFilter === "All" || item.type === selectedFilter;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchFilter && matchSearch;
  });

  const addToCart = (item: FoodItem) => {
    setCart((prev) => {
      const exists = prev.find((ci) => ci.item.id === item.id);
      if (exists) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci
        );
      }
      return [...prev, { item, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((ci) => (ci.item.id === id ? { ...ci, qty } : ci))
    );
  };

  return (
    <div className="min-h-screen bg-[#E6F1EB] pt-40 py-12 px-6 sm:px-12 relative">
      {/* Closed Overlay */}
      {!isOpenHours && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              🚫 Restaurant Closed
            </h2>
            <p className="text-gray-700 mb-6">
              We are currently closed. Ordering is available only between <br />
              <span className="font-semibold text-[#013024]">
                12:30 PM - 11:30 PM
              </span>
              .
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-[#013024] text-white px-6 py-2 rounded-lg hover:bg-[#00503c] transition-all"
            >
              Go Back Home
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Order Your Favorite Food 🍽️
        </h1>
        <button
          onClick={() => setCartOpen(true)}
          className="relative bg-[#013024] text-white px-4 py-2 rounded-lg hover:bg-[#00503c] transition-all flex items-center"
        >
          <ShoppingCart className="mr-2" size={20} />
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2 py-0.5">
              {cart.reduce((sum, ci) => sum + ci.qty, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        {/* Search */}
        <div className="flex items-center bg-white border rounded-lg shadow-sm px-3 py-2 w-full md:w-1/3">
          <Search className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search for dishes..."
            className="w-full outline-none text-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[#013024] text-white shadow-md"
                  : "bg-white border text-gray-600"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Veg / Non-Veg Filter */}
        <div className="flex gap-3">
          {filters.map((f) => (
            <button
              key={f}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilter === f
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white border text-gray-600"
              }`}
              onClick={() => setSelectedFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFF9E5] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-40">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.category} • {item.type}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-[#00503c]">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-[#013024] text-white px-4 py-2 rounded-lg hover:bg-[#00503c] transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No items match your search.
          </p>
        )}
      </div>

      {/* Cart Component */}
      {cartOpen && (
        <Cart
          cart={cart}
          setCartOpen={setCartOpen}
          updateQty={updateQty}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}
