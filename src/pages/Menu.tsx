const Menu = () => {
  return (
    <main className="bg-gradient-to-br from-[#02110D] to-[#06281F] min-h-screen pt-40 text-white px-6 md:px-20 py-12">
      <h1 className="text-4xl sm:text-5xl font-serif text-center text-[#E4C590] mb-12">
        OUR MENU
      </h1>
      <ul className="flex items-center justify-center flex-col gap-8">
        <li>
          <img src="images/menu-1.jpg" alt="" />
        </li>
        <li>
          <img src="images/menu-2.jpg" alt="" />
        </li>
        <li>
          <img src="images/menu-3.jpg" alt="" />
        </li>
        <li>
          <img src="images/menu-4.jpg" alt="" />
        </li>
        <li>
          <img src="images/menu-5.jpg" alt="" />
        </li>
      </ul>
    </main>
  );
};

export default Menu;
