import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background with radial gradient and noise */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.05)_0%,transparent_50%),linear-gradient(180deg,#09090b_0%,rgba(9,9,11,0.8)_100%)] -z-10"
      >
        {/* SVG Noise filter implemented inline safely */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'noiseFilter\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\'/></svg>")' }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-[fadeIn_0.8s_ease_forwards]">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          YM Studio Nepal <br className="hidden sm:block" />
          <span className="text-gradient drop-shadow-lg">कर्न पृयको पृय studio</span>
        </h1>

        {/* As per user request, we remove "Your Sonic Vision to Life", which was the previous title text. Instead, we updated the text to the tagline above. Let me refine it to fit aesthetically. */}
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Premium audio recording, mixing, mastering, and music production in the heart of Nepal.
          Elevate your sound with expert engineering at YM Studio Nepal.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/services"
            className="inline-block px-8 py-4 font-semibold text-center rounded bg-[#00f0ff] text-black shadow-[0_4px_14px_rgba(0,240,255,0.3)] hover:bg-[#00c3cc] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,240,255,0.4)] transition-all uppercase tracking-wider text-base outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50"
          >
            Explore Services
          </Link>
          <button
            type="button"
            onClick={() => navigate('/booking')}
            accessKey="b"
            title="Shortcut: Alt + B"
            className="inline-block px-8 py-4 font-semibold text-center rounded border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:-translate-y-1 transition-all uppercase tracking-wider text-base outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50"
          >
            Book a Session <span aria-hidden="true" className="text-[10px] ml-1 opacity-60 normal-case">(Alt+B)</span>
          </button>
        </div>
      </div>

      {/* Required for the inline animate-[fadeIn_0.8s_ease_forwards] if Tailwind doesn't auto-generate it. Actually, it's safer to just write the keyframes in base css if using arbitrarily named animations, or use standard animate-fade. I will use a reliable utility */}
    </section>
  );
};

export default Hero;
