import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'recording',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', service: 'recording', message: '' });
  };

  return (
    <section id="contact" className="section-padding contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header text-center">
          <h2 id="contact-title" className="section-title">Ready to <span className="text-accent">Record?</span></h2>
          <p className="section-description">Drop us a line to discuss your project, book a session, or request a quote.</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="info-title">Studio Information</h3>
            <ul className="info-list">
              <li>
                <span className="info-icon" aria-hidden="true">📍</span>
                <div>
                  <strong>Location</strong>
                  <address>Thamel, Kathmandu, Nepal</address>
                </div>
              </li>
              <li>
                <span className="info-icon" aria-hidden="true">📞</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+977123456789">+977 12 345 6789</a>
                </div>
              </li>
              <li>
                <span className="info-icon" aria-hidden="true">✉️</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@ymstudionepal.com">info@ymstudionepal.com</a>
                </div>
              </li>
              <li>
                <span className="info-icon" aria-hidden="true">🕒</span>
                <div>
                  <strong>Hours</strong>
                  <p>Mon-Sat: 10:00 AM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-label="Booking Form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                aria-required="true"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                aria-required="true"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service" className="form-label">Service Required</label>
              <select 
                id="service" 
                name="service" 
                className="form-input" 
                value={formData.service} 
                onChange={handleChange}
              >
                <option value="recording">Studio Recording</option>
                <option value="mixing">Mixing & Mastering</option>
                <option value="production">Music Production</option>
                <option value="voiceover">Voiceover/ADR</option>
                <option value="podcast">Podcast Production</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Project Details</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-textarea" 
                value={formData.message} 
                onChange={handleChange} 
                required
                aria-required="true"
                placeholder="Tell us about your project, timeline, and goals..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
