import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Services | YM Studio Nepal";
  }, []);

  return (
    <div className="pt-24 min-h-[calc(100vh-80px)] bg-zinc-950">
      
      {/* Header */}
      <div className="bg-zinc-900 py-16 text-center border-b border-zinc-800 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-[#00f0ff]">Services</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            We offer a full spectrum of audio solutions, split into creative direction and technical execution.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* Creative Services */}
        <section className="mb-24" aria-labelledby="creative-title">
          <h2 id="creative-title" className="text-3xl md:text-4xl font-bold mb-10 pb-4 border-b-2 border-zinc-800 inline-block">
            Creative <span className="text-[#00f0ff]">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 hover:border-[#00f0ff] hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300 group">
              <div className="text-5xl mb-6 inline-block bg-gradient-to-br from-cyan-500/10 to-transparent p-4 rounded-xl" aria-hidden="true">✍️</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#00f0ff] transition-colors">Lyrics & Writing Support</h3>
              <p className="text-zinc-400">Need help finding the right words? We provide full lyrics writing and expert guidance to perfect your existing drafts.</p>
            </article>
            
            <article className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 hover:border-[#00f0ff] hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300 group">
              <div className="text-5xl mb-6 inline-block bg-gradient-to-br from-cyan-500/10 to-transparent p-4 rounded-xl" aria-hidden="true">🎼</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#00f0ff] transition-colors">Composition</h3>
              <p className="text-zinc-400">Creating melodies and musical structures from scratch, or providing creative direction to enhance your current compositions.</p>
            </article>
            
            <article className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 hover:border-[#00f0ff] hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300 group">
              <div className="text-5xl mb-6 inline-block bg-gradient-to-br from-cyan-500/10 to-transparent p-4 rounded-xl" aria-hidden="true">🎤</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#00f0ff] transition-colors">Vocals</h3>
              <p className="text-zinc-400">We provide professional male vocals tailored to the needs of your track, adding emotion and power to your music.</p>
            </article>

            <article className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 hover:border-[#00f0ff] hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300 group">
              <div className="text-5xl mb-6 inline-block bg-gradient-to-br from-cyan-500/10 to-transparent p-4 rounded-xl" aria-hidden="true">🗣️</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#00f0ff] transition-colors">Voiceover</h3>
              <p className="text-zinc-400">Professional voice acting for scripts, commercials, documentaries, and narrations.</p>
            </article>
          </div>
        </section>

        {/* Technical Services */}
        <section aria-labelledby="technical-title">
          <h2 id="technical-title" className="text-3xl md:text-4xl font-bold mb-10 pb-4 border-b-2 border-zinc-800 inline-block">
            Technical <span className="text-[#00f0ff]">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 hover:border-[#00f0ff] hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300 group">
              <div className="text-5xl mb-6 inline-block bg-gradient-to-br from-cyan-500/10 to-transparent p-4 rounded-xl" aria-hidden="true">🎙️</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#00f0ff] transition-colors">Studio Recording</h3>
              <p className="text-zinc-400">High-fidelity recording sessions for podcasts, songs, voiceovers, and live instruments.</p>
            </article>

            <article className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 hover:border-[#00f0ff] hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300 group">
              <div className="text-5xl mb-6 inline-block bg-gradient-to-br from-cyan-500/10 to-transparent p-4 rounded-xl" aria-hidden="true">🎛️</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#00f0ff] transition-colors">Mixing</h3>
              <p className="text-zinc-400">We balance levels, EQ, dynamics, and spatial effects to ensure every element of your mix sits perfectly.</p>
            </article>

            <article className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 hover:border-[#00f0ff] hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300 group">
              <div className="text-5xl mb-6 inline-block bg-gradient-to-br from-cyan-500/10 to-transparent p-4 rounded-xl" aria-hidden="true">🎚️</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#00f0ff] transition-colors">Mastering</h3>
              <p className="text-zinc-400">The final polish. Making sure your audio translates flawlessly to Spotify, Apple Music, radio, and beyond.</p>
            </article>
            
            <article className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 hover:border-[#00f0ff] hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300 group">
              <div className="text-5xl mb-6 inline-block bg-gradient-to-br from-cyan-500/10 to-transparent p-4 rounded-xl" aria-hidden="true">🎹</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#00f0ff] transition-colors">Music Production</h3>
              <p className="text-zinc-400">Taking a barebones idea and producing a full, rich instrumental track ready for release.</p>
            </article>
          </div>
        </section>

      </div>
      
      {/* Call to Action */}
      <section className="py-24 relative bg-zinc-900 border-t border-zinc-800 text-center">
        <div className="absolute inset-0 bg-[#00f0ff]/5 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to bring your vision to life?</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Secure your time at YM Studio Nepal today and let's craft something extraordinary together.
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

export default ServicesPage;
