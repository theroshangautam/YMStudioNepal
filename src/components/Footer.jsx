import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-12 mb-12">
          
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-2xl font-bold tracking-widest mb-4">YM STUDIO <span className="text-[#00f0ff]">NEPAL</span></h2>
            <p className="text-zinc-400 text-base">कर्न पृयको पृय studio.</p>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-6 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-[#00f0ff]">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-zinc-400 hover:text-[#00f0ff] focus-visible:text-[#00f0ff] transition-colors outline-none rounded p-1">Home</Link></li>
              <li><Link to="/services" className="text-zinc-400 hover:text-[#00f0ff] focus-visible:text-[#00f0ff] transition-colors outline-none rounded p-1">Services</Link></li>
              <li><Link to="/about" className="text-zinc-400 hover:text-[#00f0ff] focus-visible:text-[#00f0ff] transition-colors outline-none rounded p-1">About Us</Link></li>
              <li><Link to="/contact" className="text-zinc-400 hover:text-[#00f0ff] focus-visible:text-[#00f0ff] transition-colors outline-none rounded p-1">Contact</Link></li>
            </ul>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-6 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-[#00f0ff]">Connect With Us</h3>
            <div className="flex gap-4" aria-label="Social Media Links">
              <a href="https://www.facebook.com/YMStudioNepal" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 text-zinc-400 hover:bg-[#00f0ff] hover:text-black hover:-translate-y-1 transition-all outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.youtube.com/@ymstudionepal" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 text-zinc-400 hover:bg-[#00f0ff] hover:text-black hover:-translate-y-1 transition-all outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50">
                <FaYoutube size={20} />
              </a>
              <a href="https://www.instagram.com/ymstudionepal01/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 text-zinc-400 hover:bg-[#00f0ff] hover:text-black hover:-translate-y-1 transition-all outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-zinc-800 text-zinc-500 text-sm">
          <p>&copy; {currentYear} YM Studio Nepal. All rights reserved. Subahaa marg, Pashchim, Lalitpur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
