import { useState } from "react";
import logotext from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#f7f7f7] p-4">
      <div className="container mx-auto flex max-w-[1180px] items-center justify-between">

        {/* Logo */}
        <div>
          <img src={logotext} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-4 md:flex">
          <a
            href="#"
            className="text-red-500 text-lg transition hover:text-[#D70BE5]"
          >
            Home
          </a>

          <a
            href="#"
            className="text-black text-lg transition hover:text-[#D70BE5]"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-black text-lg transition hover:text-[#D70BE5]"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-black text-lg transition hover:text-[#D70BE5]"
          >
            About
          </a>

          <a
            href="#"
            className="text-black text-lg transition hover:text-[#D70BE5]"
          >
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:block">
          <button className="rounded-[20px] px-4 py-2 text-black text-lg transition hover:bg-[#D70BE5] hover:text-white">
            Login
          </button>

          <button className="ml-2 rounded-[20px] bg-red-500 px-4 py-2 text-white text-lg transition hover:bg-red-600">
            Sign Up
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-black md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 border-t border-gray-200 pt-4 md:hidden">
          <div className="flex flex-col space-y-4">

            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-red-500 transition hover:text-[#D70BE5]"
            >
              Home
            </a>

            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-black transition hover:text-[#D70BE5]"
            >
              Technologies
            </a>

            <a href="#" onClick={() => setIsOpen(false)}
              className="text-black transition hover:text-[#D70BE5]">
              Projects
            </a>

            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-black transition hover:text-[#D70BE5]"
            >
              About
            </a>

            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-black transition hover:text-[#D70BE5]"
            >
              Contact
            </a>




            {/* Mobile Buttons */}


            <div className="flex gap-2 pt-2">
              <button className="rounded-[20px] px-4 py-2 text-black transition hover:bg-[#D70BE5] hover:text-white">
                Login
              </button>

              <button className="rounded-[20px] bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
                Sign Up
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;