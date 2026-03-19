import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Contact Us | YM Studio Nepal";
  }, []);

  return (
    <div className="pt-24 min-h-[calc(100vh-80px)] bg-zinc-950 relative overflow-hidden flex flex-col justify-center">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,rgba(0,240,255,0.03)_0%,transparent_60%)] pointer-events-none z-0"></div>

      {/* Header */}
      <div className="bg-zinc-900 py-16 text-center border-b border-zinc-800 mb-16 relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-[#00f0ff]">Us</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Have questions or just want to chat? Reach out to us directly below.
          </p>
        </div>
      </div>

      <section className="pb-24 relative z-10 w-full flex-grow flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto px-6">
          
          <div className="bg-[#1a1a1a] p-8 md:p-16 rounded-xl border border-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <h3 className="text-3xl font-bold mb-12 pb-4 border-b border-zinc-800 text-center">Studio Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <ul className="flex flex-col gap-10 text-neutral-200">
                <li className="flex items-start gap-5">
                  <span className="text-3xl drop-shadow-[0_0_5px_rgba(0,240,255,0.3)] mt-1" aria-hidden="true">📍</span>
                  <div>
                    <strong className="block text-sm text-zinc-400 uppercase tracking-widest mb-2">Location</strong>
                    <address className="not-italic text-lg text-neutral-300">Subahaa marg, Pashchim,<br/>Lalitpur, Nepal</address>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <span className="text-3xl drop-shadow-[0_0_5px_rgba(0,240,255,0.3)] mt-1" aria-hidden="true">🕒</span>
                  <div>
                    <strong className="block text-sm text-zinc-400 uppercase tracking-widest mb-2">Hours</strong>
                    <p className="text-lg text-neutral-300">Mon-Sat: 10:00 AM - 8:00 PM</p>
                  </div>
                </li>
              </ul>
              
              <ul className="flex flex-col gap-10 text-neutral-200">
                <li className="flex flex-col gap-4">
                  <div className="flex items-start gap-5">
                    <span className="text-3xl drop-shadow-[0_0_5px_rgba(0,240,255,0.3)] mt-1" aria-hidden="true">📞</span>
                    <div>
                      <strong className="block text-sm text-zinc-400 uppercase tracking-widest mb-2">Phone</strong>
                      <span className="text-xl font-medium block">+977 986-1121450</span>
                    </div>
                  </div>
                  <button type="button" onClick={() => window.location.href='tel:+9779861121450'} accessKey="c" title="Shortcut: Alt + C" className="mt-2 inline-block w-full py-4 px-6 font-semibold text-center rounded bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700 hover:-translate-y-0.5 transition-all uppercase tracking-wider text-sm outline-none focus-visible:ring-4 focus-visible:ring-zinc-500/50">
                    Call Now <span aria-hidden="true" className="text-xs opacity-60 ml-1">(Alt+C)</span>
                  </button>
                </li>
                
                <li className="flex flex-col gap-4">
                  <div className="flex items-start gap-5">
                    <span className="text-3xl drop-shadow-[0_0_5px_rgba(0,240,255,0.3)] mt-1" aria-hidden="true">✉️</span>
                    <div>
                      <strong className="block text-sm text-zinc-400 uppercase tracking-widest mb-2">Email</strong>
                      <span className="text-xl font-medium block break-all">ymstudionepal@gmail.com</span>
                    </div>
                  </div>
                  <button type="button" onClick={() => window.location.href='mailto:ymstudionepal@gmail.com'} accessKey="m" title="Shortcut: Alt + M" className="mt-2 inline-block w-full py-4 px-6 font-semibold text-center rounded bg-[#00f0ff] text-black shadow-[0_4px_14px_rgba(0,240,255,0.3)] hover:bg-[#00c3cc] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,240,255,0.4)] transition-all uppercase tracking-wider text-sm outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50">
                    Send an Email <span aria-hidden="true" className="text-xs opacity-60 ml-1">(Alt+M)</span>
                  </button>
                </li>
              </ul>
            </div>
            
          </div>

          {/* Book Session Standout */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to bypass the questions and start a project?</h3>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Our automated booking intake explicitly grabs everything we need to instantly evaluate your requirements and reserve studio time!
            </p>
            <button 
              type="button"
              onClick={() => navigate('/booking')}
              accessKey="b"
              title="Shortcut: Alt + B"
              className="inline-block px-10 py-5 font-bold text-center rounded-xl bg-transparent border-2 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:bg-[#00f0ff] hover:text-black hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,240,255,0.4)] transition-all uppercase tracking-widest text-lg outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50"
            >
              Go to Booking Form <span aria-hidden="true" className="block text-xs font-normal opacity-70 mt-1 lowercase tracking-normal">Shortcut: Alt + B</span>
            </button>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
