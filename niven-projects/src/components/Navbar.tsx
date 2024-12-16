"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on smaller screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Hamburger Menu (Visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path
    strokeLinecap="round"  // Updated this to camelCase
    strokeLinejoin="round" // Corrected this too
    strokeWidth="2"        // Use camelCase for strokeWidth
    d="M4 6h16M4 12h16M4 18h16"
  />
</svg>

          </button>
        </div>

        {/* Links (Visible on medium and up) */}
        <ul
          className={`flex space-x-6 md:flex md:space-x-6 ${isMenuOpen ? "block" : "hidden"} md:block`}
        >
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Dropdown menu (for mobile) */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4 p-4 bg-gray-700">
          <li>
            <Link href="/" className="block text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block text-white hover:underline">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/skills" className="block text-white hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="block text-white hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block text-white hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
