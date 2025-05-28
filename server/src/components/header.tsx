"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import LocaleSwitcher from "@/components/language-switcher";

export const HEADER_HEIGHT = 70;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="bg-gray-800 text-white relative"
      style={{ height: HEADER_HEIGHT }}
    >
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
        <div className="font-bold text-lg">My Portfolio</div>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        <ul className="hidden md:flex justify-center space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/album">Album</Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <LocaleSwitcher />
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full z-50 bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/album" onClick={() => setMenuOpen(false)}>
                Album
              </Link>
            </li>
            <li>
              <LocaleSwitcher />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
