import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = "YM Studio Nepal | Home";
  }, []);

  return (
    <>
      <Hero />
      
      {/* Mini Services Overview */}
      <section className="py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We <span className="text-[#00f0ff]">Do</span></h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-16">
            From creative songwriting to pristine technical recording and mixing, we handle your audio journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <article className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-10 hover:-translate-y-1.5 hover:border-[#00f0ff] hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300">
              <div className="text-5xl mb-6 inline-block bg-cyan-500/10 p-4 rounded-xl shadow-inner">🎵</div>
              <h3 className="text-2xl font-bold mb-4">Creative Services</h3>
              <p className="text-zinc-400 leading-relaxed">Lyrics writing, composition support, custom vocals, and professional voiceovers.</p>
            </article>

            <article className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-10 hover:-translate-y-1.5 hover:border-[#00f0ff] hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300">
              <div className="text-5xl mb-6 inline-block bg-cyan-500/10 p-4 rounded-xl shadow-inner">🎚️</div>
              <h3 className="text-2xl font-bold mb-4">Technical Services</h3>
              <p className="text-zinc-400 leading-relaxed">High-end recording, mixing, mastering, and complete music production.</p>
            </article>
          </div>
          
          <Link 
            to="/services" 
            className="inline-block px-8 py-4 font-semibold text-center rounded border tracking-wider border-[#00f0ff] text-[#00f0ff] hover:bg-cyan-500/10 transition-colors uppercase outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Brief About Snippet */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to YM Studio <span className="text-[#00f0ff]">Nepal</span></h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
            Located in Kathmandu, we are a passionate startup dedicated to bringing your sonic vision to life. 
            Let's make something amazing together.
          </p>
          <Link 
            to="/about" 
            className="inline-block px-8 py-4 font-semibold text-center rounded border tracking-wider border-[#00f0ff] text-[#00f0ff] hover:bg-cyan-500/10 transition-colors uppercase outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
