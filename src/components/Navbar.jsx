import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const renderNavLinks = () => (
    <>
      <li>
        <NavLink 
          to="/" 
          onClick={closeMenu} 
          className={({ isActive }) => 
            `font-medium p-2 rounded transition-colors duration-200 outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50 ${isActive ? 'text-[#00f0ff]' : 'hover:text-[#00f0ff]'}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/services" 
          onClick={closeMenu} 
          className={({ isActive }) => 
            `font-medium p-2 rounded transition-colors duration-200 outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50 ${isActive ? 'text-[#00f0ff]' : 'hover:text-[#00f0ff]'}`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/about" 
          onClick={closeMenu} 
          className={({ isActive }) => 
            `font-medium p-2 rounded transition-colors duration-200 outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50 ${isActive ? 'text-[#00f0ff]' : 'hover:text-[#00f0ff]'}`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/contact" 
          onClick={closeMenu} 
          className={({ isActive }) => 
            `font-medium p-2 rounded transition-colors duration-200 outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50 ${isActive ? 'text-[#00f0ff]' : 'hover:text-[#00f0ff]'}`
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 z-50 py-4 transition-all duration-300">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-4 z-[60] rounded focus-visible:ring-4 focus-visible:ring-cyan-500/50 outline-none" 
          aria-label="YM Studio Nepal Home" 
          onClick={closeMenu}
        >
          <img 
            src="/YM_Studio_Nepal_logo_1080x1080.png" 
            alt="YM Studio Nepal Logo" 
            className="rounded-full border border-zinc-700 w-12 h-12" 
          />
          <span className="text-xl font-extrabold tracking-widest hidden sm:block">
            YM STUDIO <span className="text-[#00f0ff]">NEPAL</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center" 
          aria-label="Desktop Navigation"
        >
          <ul className="flex flex-row items-center gap-8 text-base">
            {renderNavLinks()}
          </ul>
        </nav>

        {/* Hamburger Mobile Menu Button */}
        <button 
          className="md:hidden z-[60] p-2 focus-visible:ring-4 focus-visible:ring-cyan-500/50 rounded outline-none" 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-5">
            <span className={`absolute left-0 w-full h-0.5 bg-neutral-200 transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
            <span className={`absolute left-0 w-full h-0.5 bg-neutral-200 top-2 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute left-0 w-full h-0.5 bg-neutral-200 transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
          </div>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav 
            className="md:hidden flex items-center absolute top-0 left-0 w-full h-screen bg-zinc-950 flex-col justify-center" 
            aria-label="Mobile Navigation"
          >
            <ul className="flex flex-col items-center gap-8 text-2xl">
              {renderNavLinks()}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
