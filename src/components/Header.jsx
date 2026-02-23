import React, { useState } from "react";
import companyLogo from "../asses/compeny_logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-zinc-100 shadow-sm">
      {/* Main Header Bar */}
      <div className="px-4 sm:px-7 py-4 flex justify-between items-center gap-4">

        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-10 sm:h-14 w-auto object-contain"
            src={companyLogo}
            alt="Company Logo"
          />
        </div>

        {/* Search Inputs — hidden on mobile, visible on lg+ */}
        <div className="hidden lg:flex items-center gap-1.5 flex-1 max-w-2xl mx-4">
          {/* Location Search */}
          <div className="flex-1 p-3 bg-white rounded-lg shadow-[0px_10px_35px_0px_rgba(139,139,139,0.08)] outline outline-1 outline-offset-[-1px] outline-sky-800 flex items-center gap-[5px]">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0 text-neutral-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search Location"
              className="text-neutral-400 text-sm bg-transparent outline-none w-full font-['Inter_Tight']"
            />
          </div>

          {/* Product/Store Search */}
          <div className="flex-[1.5] p-3 bg-white rounded-lg shadow-[0px_10px_35px_0px_rgba(139,139,139,0.08)] outline outline-1 outline-offset-[-1px] outline-sky-800 flex items-center gap-[5px]">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0 text-neutral-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search for products or stores"
              className="text-neutral-400 text-sm bg-transparent outline-none w-full font-['Inter_Tight']"
            />
          </div>

          {/* Search Button */}
          <button className="px-6 py-3 bg-cyan-800 rounded-lg text-white text-sm font-['Inter_Tight'] hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer">
            Search
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
          {/* Mobile Search Toggle */}
          <button
            className="lg:hidden p-2 text-neutral-600 hover:text-cyan-800 transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Auth Buttons — desktop */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-7">
            <button className="text-neutral-800 text-sm sm:text-base font-['Inter_Tight'] cursor-pointer hover:opacity-70 transition-opacity">
              Log In
            </button>
            <button className="px-5 sm:px-8 py-2.5 sm:py-3.5 bg-[#285A8C] rounded-lg text-white text-sm sm:text-base font-['Inter_Tight'] hover:opacity-90 transition-opacity cursor-pointer">
              Sign Up
            </button>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="sm:hidden p-2 text-neutral-600 hover:text-cyan-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Dropdown */}
      {searchOpen && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-2 border-t border-zinc-100">
          <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-800 flex items-center gap-2">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0 text-neutral-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search Location"
              className="text-neutral-400 text-sm bg-transparent outline-none w-full font-['Inter_Tight']"
            />
          </div>
          <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-800 flex items-center gap-2">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0 text-neutral-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search for products or stores"
              className="text-neutral-400 text-sm bg-transparent outline-none w-full font-['Inter_Tight']"
            />
          </div>
          <button className="w-full py-3 bg-cyan-800 rounded-lg text-white text-sm font-['Inter_Tight'] hover:opacity-90 transition-opacity cursor-pointer">
            Search
          </button>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 flex flex-col gap-3 border-t border-zinc-100">
          <button className="w-full py-3 text-neutral-800 text-base font-['Inter_Tight'] text-center hover:opacity-70 transition-opacity cursor-pointer">
            Log In
          </button>
          <button className="w-full py-3 bg-[#285A8C] rounded-lg text-white text-base font-['Inter_Tight'] hover:opacity-90 transition-opacity cursor-pointer">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;