import React from "react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#471396] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Logo */}
          <Link to="/" className="text-xl font-bold">
            LibraryApp
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/books" className="hover:underline">
              Books
            </Link>
            <Link to="/create-book" className="hover:underline">
              Add Book
            </Link>
            <Link to="/borrow-summary" className="hover:underline">
              Borrow Summary
            </Link>
          </div>

          {/* Mobile Menu Placeholder (optional if you plan to add) */}
          <div className="md:hidden">
            {/* Add mobile menu toggle logic here if needed */}
            <button className="text-white focus:outline-none">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
