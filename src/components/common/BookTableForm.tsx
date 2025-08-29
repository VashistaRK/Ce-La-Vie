import { useState } from "react";

type BookTableFormProps = {
  closeModal: () => void;
};

const BookTableForm = ({ closeModal }: BookTableFormProps) => {
  const [resultsShow, setResultsShow] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // stop form refresh
    setResultsShow(true); // show thank you message
  };
  if (resultsShow) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
        <div className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-4xl rounded-2xl shadow-2xl font-synco overflow-hidden">
          {/* Background Layers */}
          <div className="absolute inset-0">
            {/* Dark gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F252A] via-[#263132] to-[#1b2625]"></div>
            {/* Image background with 50% opacity */}
            <div className="absolute inset-0 bg-[url('/images/bg-2.png')] bg-center bg-cover opacity-50"></div>
            {/* Dark overlay for better contrast */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-10 md:py-16 md:px-20 text-center text-white">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>

            <h1 className="text-5xl sm:text-6xl font-bold mb-4">THANK YOU!</h1>
            <h4 className="text-base sm:text-lg font-medium text-gray-300">
              Our administrator will contact you within 10 minutes
            </h4>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-4xl rounded-lg shadow-lg font-synco overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0">
          <div className="bg-gradient-to-br from-[#1F252A] via-[#263132] to-[#1b2625] absolute inset-0"></div>
          <div className="bg-[url('images/bg-2.png')] bg-center bg-cover opacity-60 absolute inset-0"></div>
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
                placeholder="Your name"
                className="w-full px-3 py-2 border-b bg-transparent focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="Your phone number"
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
                min="1"
                placeholder="e.g. 4"
                className="w-full px-3 py-2 border-b bg-transparent focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Time Selector */}
            <div>
              <label className="block text-sm font-medium">Time</label>
              <input
                type="time"
                className="w-full px-3 py-2 border-b bg-transparent focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Date Selector */}
            <div>
              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border-b bg-transparent focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTableForm;
