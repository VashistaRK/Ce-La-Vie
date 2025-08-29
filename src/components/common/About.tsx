export default function AboutUs() {
  return (
    <section className="text-white py-20 px-6 md:px-16 lg:px-24 h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div className="space-y-6">
          <h2 className="font-[Ekatori] text-5xl md:text-6xl text-[#E4C590]">
            ABOUT US
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our restaurant is a welcoming haven that embodies the coastal charm
            and relaxed elegance of a seaside dining experience. We’ve crafted
            an inviting atmosphere, complete with a friendly staff dedicated to
            providing exceptional service.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We offer a diverse and delectable menu featuring the finest and
            freshest seafood. Can’t wait to welcome you to our seafood
            restaurant!
          </p>

          {/* Learn More Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-[#E4C590] font-medium hover:underline"
            >
              <span>Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="grid grid-cols-2 gap-4 items-end">
          <img
            src="images/chef&food.jpg"
            alt="Seafood Dish"
            className="rounded-lg object-cover w-full h-52 md:h-80 shadow-lg"
          />
          <img
            src="images/chef.jpg"
            alt="Chef cooking"
            className="rounded-lg object-cover w-full h-64 md:h-100 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
