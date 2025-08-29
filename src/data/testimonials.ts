export interface Testimonial {
  name: string;
  image: string;
  rating: number;
  feedback: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Anna",
    image: "/images/client1.jpg",
    rating: 5,
    feedback:
      "The seafood dishes were a genuine revelation for my taste buds. The restaurant chef’s recommendations introduced me to new gastronomic horizons, and I had the chance to try combinations of ingredients that turned out to be incredibly delicious.",
  },
  {
    name: "Brown & Emma",
    image: "/images/client2.jpg",
    rating: 5,
    feedback:
      "The service was impeccable, with a knowledgeable and friendly staff that enhanced the overall dining pleasure. From the moment I entered until the final farewell, I felt like a valued guest. The menu recommendations were spot-on.",
  },
  {
    name: "Victoria",
    image: "/images/client3.jpg",
    rating: 5,
    feedback:
      "The seafood dishes were a genuine revelation for my taste buds. The chef’s recommendations introduced me to new horizons, and I had the chance to try delicious ingredient combinations.",
  },
];
