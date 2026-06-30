import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta property="og:site_name" content="YM Studio Nepal" />
        <meta property="og:title" content="YM Studio Nepal" />
        <meta
          property="og:description"
          content="YM Studio Nepal is a professional audio production studio offering recording, mixing, mastering, and sound design with premium quality and creative precision."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Router>
        <div className="flex flex-col min-h-screen bg-zinc-950 text-neutral-200">
          <Navbar />
          <main id="main-content" className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/booking" element={<BookingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
