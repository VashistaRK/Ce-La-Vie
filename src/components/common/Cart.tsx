/* eslint-disable @typescript-eslint/no-explicit-any */
import { X } from "lucide-react";

type CartProps = {
  cart: { item: any; qty: number }[];
  setCartOpen: (open: boolean) => void;
  updateQty: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
};

export default function Cart({
  cart,
  setCartOpen,
  updateQty,
  removeFromCart,
}: CartProps) {
  const total = cart.reduce((sum, ci) => sum + ci.item.price * ci.qty, 0);

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex justify-end">
      <div className="w-full sm:w-[400px] bg-white h-full shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={() => setCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length > 0 ? (
            cart.map((ci) => (
              <div key={ci.item.id} className="flex items-center gap-3">
                <img
                  src={ci.item.image}
                  alt={ci.item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{ci.item.name}</h3>
                  <p className="text-sm text-gray-500">₹{ci.item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQty(ci.item.id, ci.qty - 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="px-3">{ci.qty}</span>
                    <button
                      onClick={() => updateQty(ci.item.id, ci.qty + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(ci.item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total</span>
            <span className="font-bold">₹{total}</span>
          </div>
          <button className="w-full bg-[#013024] text-white py-2 rounded-lg hover:bg-[#00503c] transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
