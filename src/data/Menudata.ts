// src/data/menuData.ts

// Define the type for each menu item
export interface MenuItem {
  name: string;
  price: string;
  desc: string;
}

// Define the type for menu categories
export type MenuCategory = "Main Dishes" | "Salads" | "Desserts";

// Record type ensures keys are strictly MenuCategory
export const menuData: Record<MenuCategory, MenuItem[]> = {
  "Main Dishes": [
    {
      name: "Grilled Salmon",
      price: "$22",
      desc: "Fresh salmon with herbs and lemon.",
    },
    {
      name: "Steak Au Poivre",
      price: "$28",
      desc: "Classic French-style peppered steak.",
    },
  ],
  Salads: [
    {
      name: "Caesar Salad",
      price: "$12",
      desc: "Romaine, parmesan, and Caesar dressing.",
    },
    {
      name: "Greek Salad",
      price: "$14",
      desc: "Feta, olives, cucumber, and tomatoes.",
    },
  ],
  Desserts: [
    {
      name: "Blueberry Cheesecake",
      price: "$10",
      desc: "Rich and creamy cheesecake with berries.",
    },
    {
      name: "Chocolate Lava Cake",
      price: "$12",
      desc: "Molten chocolate center with ice cream.",
    },
  ],
};
