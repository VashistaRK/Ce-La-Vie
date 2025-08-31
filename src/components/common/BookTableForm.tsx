import { useState } from "react";

type BookTableFormProps = {
  closeModal: () => void;
};

const BookTableForm = ({ closeModal }: BookTableFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    people: "",
    time: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp message
    const message = `📌 New Table Booking:
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
👥 People: ${formData.people}
⏰ Time: ${formData.time}
📅 Date: ${formData.date}`;

    const phoneNumber = "919494929137"; // <-- Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-4xl rounded-lg shadow-lg font-synco overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0">
          <div className="bg-gradient-to-br from-[#1F252A] via-[#263132] to-[#1b2625] absolute inset-0"></div>
          <div className="bg-[url('/images/bg-2.png')] bg-center bg-cover opacity-60 absolute inset-0"></div>
          <div className="bg-black/30 absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative p-6 sm:p-10 md:py-16 md:px-30">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 text-start sm:text-center mb-3">
            Book a Table
          </h2>

          <h4 className="text-base sm:text-lg font-semibold text-start sm:text-center mb-6 text-gray-300">
            Write your details and we will contact you shortly
          </h4>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-gray-300 text-start"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b bg-transparent focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b bg-transparent focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Number of People */}
            <div>
              <label className="block text-sm font-medium">
                Number of People
              </label>
              <input
                type="number"
                name="people"
                min="1"
                placeholder="e.g. 4"
                value={formData.people}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b bg-transparent focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Time Selector */}
            <div>
              <label className="block text-sm font-medium">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b bg-transparent focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Date Selector */}
            <div>
              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b bg-transparent focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Confirm Booking via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTableForm;
