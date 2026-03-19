import React from 'react';
import './Services.css';

const services = [
  {
    id: 'recording',
    title: 'Studio Recording',
    description: 'Pristine audio capture using world-class microphones and preamps in a professionally acoustically treated live room.',
    icon: '🎙️'
  },
  {
    id: 'mixing',
    title: 'Mixing',
    description: 'Transforming your raw tracks into a cohesive, professional mix with clarity, punch, and depth.',
    icon: '🎛️'
  },
  {
    id: 'mastering',
    title: 'Mastering',
    description: 'The final polish. We ensure your tracks translate perfectly across all playback systems and streaming platforms.',
    icon: '🎚️'
  },
  {
    id: 'production',
    title: 'Music Production',
    description: 'From beat making to full instrumentation, we help you arrange and produce your musical ideas from scratch.',
    icon: '🎹'
  },
  {
    id: 'voiceover',
    title: 'Voiceover & ADR',
    description: 'Crystal-clear dialogue recording for commercials, films, audiobooks, and podcasts.',
    icon: '🗣️'
  },
  {
    id: 'podcast',
    title: 'Podcast Production',
    description: 'Comprehensive podcast solutions including multi-mic setups, live mixing, and post-production editing.',
    icon: '🎧'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding services-section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header text-center">
          <h2 id="services-title" className="section-title">Our <span className="text-accent">Services</span></h2>
          <p className="section-description">We offer a comprehensive suite of audio services tailored to artists, businesses, and content creators.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card" tabIndex="0">
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-body">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
