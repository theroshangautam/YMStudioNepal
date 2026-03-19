import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "About Us | YM Studio Nepal";
  }, []);

  return (
    <div className="pt-24 min-h-[calc(100vh-80px)] bg-zinc-950">
      
      {/* Header */}
      <div className="bg-zinc-900 py-16 text-center border-b border-zinc-800 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-[#00f0ff]">Story</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            We're a passionate team just starting out, dedicated to making YOUR sound incredible.
          </p>
        </div>
      </div>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8">Rooted in <span className="text-[#00f0ff]">Sound</span></h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Located in Kathmandu, YM Studio Nepal is driven by a profound passion for audio excellence. 
                We are a fresh, dynamic studio built on the belief that every creator deserves access to high-quality audio solutions.
              </p>
              <p>
                We focus on building strong relationships with our clients. Whether you need writing support, proper vocal recording, or full technical production, we pour our hearts into understanding your vision and executing it flawlessly. We are musicians, writers, and engineers deeply committed to your creative success.
              </p>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-8 border-t border-zinc-800">
              <li className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#00f0ff] mb-2 leading-none">100%</span>
                <span className="text-sm text-zinc-400 uppercase tracking-wider">Dedication</span>
              </li>
              <li className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#00f0ff] mb-2 leading-none">24/7</span>
                <span className="text-sm text-zinc-400 uppercase tracking-wider">Creative Support</span>
              </li>
              <li className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#00f0ff] mb-2 leading-none mt-2">Endless</span>
                <span className="text-sm text-zinc-400 uppercase tracking-wider mt-1">Possibilities</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 flex justify-center w-full" aria-hidden="true">
            {/* Visual Graphic representing soundwaves using the standard animation defined in index.css */}
            <div className="w-full max-w-[400px] h-[300px] bg-[radial-gradient(circle,rgba(0,240,255,0.05)_0%,transparent_70%)] flex items-center justify-center gap-2">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
              <div className="bar bar-4"></div>
              <div className="bar bar-5"></div>
              <div className="bar bar-6"></div>
              <div className="bar bar-7"></div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative bg-zinc-900 border-t border-zinc-800 text-center">
        <div className="absolute inset-0 bg-[#00f0ff]/5 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Journey With Us</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need a quick vocal take or full track production, we are fully equipped and ready for you.
          </p>
          <button 
            type="button"
            onClick={() => navigate('/booking')}
            accessKey="b"
            title="Shortcut: Alt + B"
            className="inline-block px-10 py-5 font-bold text-center rounded-xl bg-[#00f0ff] text-black shadow-[0_4px_20px_rgba(0,240,255,0.4)] hover:bg-[#00c3cc] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,240,255,0.6)] transition-all uppercase tracking-widest text-lg outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50"
          >
            Book a Session <span aria-hidden="true" className="block text-xs font-normal opacity-70 mt-1 lowercase tracking-normal">Shortcut: Alt + B</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
