import React, { useState, useEffect } from 'react';

const countryCodes = [
  { code: '+977', label: 'Nepal (+977)' },
  { code: '+91', label: 'India (+91)' },
  { code: '+1', label: 'US/Canada (+1)' },
  { code: '+44', label: 'UK (+44)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+971', label: 'UAE (+971)' },
  { code: '+65', label: 'Singapore (+65)' },
  { code: '+81', label: 'Japan (+81)' },
];

const BookingPage = () => {
  useEffect(() => {
    document.title = "Book a Session | YM Studio Nepal";
  }, []);

  // Today's date in YYYY-MM-DD format to prevent past date selection
  const today = new Date().toISOString().split('T')[0];

  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    artistName: '',
    
    // Contact Number
    countryCode: '+977',
    contactNumber: '',
    
    // WhatsApp Number
    whatsappCode: '+977',
    whatsappNumber: '',
    isWhatsappSame: false,

    services: [], // Array to hold multiple selected services
    message: '',
    
    // Dynamic fields
    genre: '',
    referenceTrack: '',
    trackCount: '',
    deadline: '',
    voiceoverStyle: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => {
      let updated = { ...prev };
      
      if (type === 'checkbox' && name === 'isWhatsappSame') {
        updated.isWhatsappSame = checked;
        if (checked) {
          updated.whatsappCode = prev.countryCode;
          updated.whatsappNumber = prev.contactNumber;
        }
      } else {
        updated[name] = value;
      }
      
      // Keep WhatsApp fields in sync if checkbox is checked
      if (updated.isWhatsappSame && (name === 'contactNumber' || name === 'countryCode')) {
        updated.whatsappNumber = updated.contactNumber;
        updated.whatsappCode = updated.countryCode;
      }

      return updated;
    });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setFormData(prev => ({ 
      ...prev, 
      services: [], 
      genre: '', 
      referenceTrack: '', 
      trackCount: '', 
      deadline: '',
      voiceoverStyle: ''
    }));
  };

  const handleServiceToggle = (e) => {
    const serviceValue = e.target.value;
    setFormData(prev => {
      let newServices = [...prev.services];
      if (newServices.includes(serviceValue)) {
        newServices = newServices.filter(s => s !== serviceValue);
      } else {
        newServices.push(serviceValue);
      }
      return { ...prev, services: newServices };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.services.length === 0) {
      alert("Please select at least one specific service.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // The Google Form URL - Make sure it ends with /formResponse
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc76_lVGC_LRBC5SfdOj_Su3ryBbEEZ8RvrAOTbBcvVoYr4Vw/formResponse";
    
    // Map our state back to the corresponding entry.XXXX IDs
    const submitData = new URLSearchParams();
    submitData.append("entry.1196248902", formData.name);
    submitData.append("entry.1723322021", formData.email);
    submitData.append("entry.1698923867", formData.countryCode + " " + formData.contactNumber);
    submitData.append("entry.2044035532", formData.whatsappCode + " " + formData.whatsappNumber);
    
    // Prettify strings before sending
    const prettyCategory = category === 'creative' ? 'Creative Services' : 'Technical Services';
    submitData.append("entry.2066203398", prettyCategory);
    
    const prettyServices = formData.services.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ');
    submitData.append("entry.992783111", prettyServices);
    
    submitData.append("entry.2060282617", formData.artistName || "N/A");
    submitData.append("entry.1562342694", formData.genre || "N/A");
    submitData.append("entry.683313400", formData.referenceTrack || "N/A");
    submitData.append("entry.1996451508", formData.voiceoverStyle || "N/A");
    submitData.append("entry.1655055083", formData.trackCount || "N/A");
    submitData.append("entry.503871047", formData.deadline || "N/A");
    submitData.append("entry.1018293472", formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", // CRITICAL for Google Forms to bypass CORS block
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: submitData.toString()
      });

      // Success
      setSubmitStatus('success');
      
      // Reset form on success
      setCategory('');
      setFormData({ 
        name: '', email: '', artistName: '', countryCode: '+977', contactNumber: '', whatsappCode: '+977', whatsappNumber: '', isWhatsappSame: false,
        services: [], message: '', genre: '', referenceTrack: '', trackCount: '', deadline: '', voiceoverStyle: '' 
      });

      // Clear success message after 5 seconds to return to clean state
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error("Google Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper flags for conditional rendering
  const hasVoiceover = formData.services.includes('voiceover');
  const hasCreativeMusic = formData.services.some(s => ['lyrics', 'composition', 'vocals'].includes(s));
  const hasMusicOrTech = hasCreativeMusic || category === 'technical';
  const hasAnyService = formData.services.length > 0;

  // Form Validation Logic for disabling submit button
  let isFormValid = formData.name.trim() !== '' && 
                    formData.email.trim() !== '' && 
                    formData.contactNumber.trim() !== '' &&
                    formData.whatsappNumber.trim() !== '' &&
                    formData.message.trim() !== '' &&
                    formData.services.length > 0 &&
                    category !== '';

  if (hasCreativeMusic) {
    if (!formData.genre.trim() || !formData.referenceTrack.trim()) isFormValid = false;
  }
  if (hasVoiceover) {
    if (!formData.voiceoverStyle.trim()) isFormValid = false;
  }
  if (category === 'technical') {
    if (!formData.trackCount.trim() || !formData.deadline.trim()) isFormValid = false;
  }

  // Determine dynamic placeholder based on selected services
  let messagePlaceholder = "Tell us more about your project...";
  if (hasVoiceover && !hasCreativeMusic) {
    messagePlaceholder = "Share details about the script, desired tone, pacing, and intended audience...";
  } else if (hasCreativeMusic) {
    messagePlaceholder = "Share details about your musical vision, vibe, and creative goals...";
  } else if (category === 'technical') {
    messagePlaceholder = "Share details about your project timeline, current progress, and specific technical requirements...";
  }

  return (
    <div className="pt-24 min-h-[calc(100vh-80px)] bg-zinc-950 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,rgba(0,240,255,0.03)_0%,transparent_60%)] pointer-events-none z-0"></div>

      <div className="bg-zinc-900 py-16 text-center border-b border-zinc-800 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a <span className="text-[#00f0ff]">Session</span></h1>
          <p className="text-zinc-400 text-lg mx-auto">
            Ready to bring your vision to life? Fill out the intake form below to secure your spot at YM Studio Nepal.
          </p>
        </div>
      </div>

      <section className="pb-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <form className="bg-[#1a1a1a] p-8 md:p-12 rounded-xl border border-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-medium text-neutral-200">Full Name *</label>
                <input 
                  type="text" id="name" name="name" 
                  className="w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-200 rounded focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors" 
                  value={formData.name} onChange={handleChange} required 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-medium text-neutral-200">Email Address *</label>
                <input 
                  type="email" id="email" name="email" 
                  className="w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-200 rounded focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors" 
                  value={formData.email} onChange={handleChange} required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label htmlFor="contactNumber" className="mb-2 font-medium text-neutral-200">Contact Number *</label>
                <div className="flex">
                  <select 
                    name="countryCode" 
                    className="p-4 bg-zinc-900 border border-zinc-800 text-neutral-300 rounded-l focus:border-[#00f0ff] outline-none transition-colors border-r-0 max-w-[120px] cursor-pointer"
                    value={formData.countryCode} onChange={handleChange}
                  >
                    {countryCodes.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                    <option value="other">Other</option>
                  </select>
                  <input 
                    type="tel" id="contactNumber" name="contactNumber" 
                    className="w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-200 rounded-r focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors" 
                    value={formData.contactNumber} onChange={handleChange} required 
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="whatsappNumber" className="font-medium text-neutral-200">WhatsApp Number *</label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-400 hover:text-[#00f0ff] transition-colors">
                    <input 
                      type="checkbox" name="isWhatsappSame" 
                      checked={formData.isWhatsappSame} onChange={handleChange} 
                      className="w-3 h-3 accent-[#00f0ff]" 
                    />
                    Same as contact
                  </label>
                </div>
                <div className="flex">
                  <select 
                    name="whatsappCode" 
                    className="p-4 bg-zinc-900 border border-zinc-800 text-neutral-300 rounded-l focus:border-[#00f0ff] outline-none transition-colors border-r-0 max-w-[120px] cursor-pointer"
                    value={formData.whatsappCode} onChange={handleChange}
                    disabled={formData.isWhatsappSame}
                  >
                    {countryCodes.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                    <option value="other">Other</option>
                  </select>
                  <input 
                    type="tel" id="whatsappNumber" name="whatsappNumber" 
                    className={`w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-200 rounded-r focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors ${formData.isWhatsappSame ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    value={formData.whatsappNumber} onChange={handleChange} required 
                    readOnly={formData.isWhatsappSame}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="category" className="mb-2 font-medium text-neutral-200">What kind of service are you looking for? *</label>
              <select 
                id="category" className="w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-200 rounded focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors appearance-none cursor-pointer" 
                value={category} onChange={handleCategoryChange} required
              >
                <option value="" disabled>Select a Category...</option>
                <option value="creative">Creative Services (Writing, Vocals, Composition)</option>
                <option value="technical">Technical Services (Recording, Mixing, Mastering)</option>
              </select>
            </div>

            {category && (
              <fieldset className="flex flex-col mb-6 animate-[fadeIn_0.5s_ease_forwards]">
                <legend className="mb-4 font-medium text-neutral-200">Which specific services? (Select all that apply) *</legend>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category === 'creative' && (
                    <>
                      <label className={`flex items-center gap-3 cursor-pointer p-4 bg-zinc-950 border ${formData.services.includes('lyrics') ? 'border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.1)]' : 'border-zinc-800'} rounded hover:border-[#00f0ff]/70 transition-all`}>
                        <input type="checkbox" value="lyrics" checked={formData.services.includes('lyrics')} onChange={handleServiceToggle} className="w-5 h-5 accent-[#00f0ff]" />
                        <span className="text-neutral-200">Lyrics & Writing Support</span>
                      </label>
                      <label className={`flex items-center gap-3 cursor-pointer p-4 bg-zinc-950 border ${formData.services.includes('composition') ? 'border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.1)]' : 'border-zinc-800'} rounded hover:border-[#00f0ff]/70 transition-all`}>
                        <input type="checkbox" value="composition" checked={formData.services.includes('composition')} onChange={handleServiceToggle} className="w-5 h-5 accent-[#00f0ff]" />
                        <span className="text-neutral-200">Composition Assistance</span>
                      </label>
                      <label className={`flex items-center gap-3 cursor-pointer p-4 bg-zinc-950 border ${formData.services.includes('vocals') ? 'border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.1)]' : 'border-zinc-800'} rounded hover:border-[#00f0ff]/70 transition-all`}>
                        <input type="checkbox" value="vocals" checked={formData.services.includes('vocals')} onChange={handleServiceToggle} className="w-5 h-5 accent-[#00f0ff]" />
                        <span className="text-neutral-200">Male Vocals</span>
                      </label>
                      <label className={`flex items-center gap-3 cursor-pointer p-4 bg-zinc-950 border ${formData.services.includes('voiceover') ? 'border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.1)]' : 'border-zinc-800'} rounded hover:border-[#00f0ff]/70 transition-all`}>
                        <input type="checkbox" value="voiceover" checked={formData.services.includes('voiceover')} onChange={handleServiceToggle} className="w-5 h-5 accent-[#00f0ff]" />
                        <span className="text-neutral-200">Voiceover (Ads, Narrative)</span>
                      </label>
                    </>
                  )}
                  {category === 'technical' && (
                    <>
                      <label className={`flex items-center gap-3 cursor-pointer p-4 bg-zinc-950 border ${formData.services.includes('recording') ? 'border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.1)]' : 'border-zinc-800'} rounded hover:border-[#00f0ff]/70 transition-all`}>
                        <input type="checkbox" value="recording" checked={formData.services.includes('recording')} onChange={handleServiceToggle} className="w-5 h-5 accent-[#00f0ff]" />
                        <span className="text-neutral-200">Studio Recording</span>
                      </label>
                      <label className={`flex items-center gap-3 cursor-pointer p-4 bg-zinc-950 border ${formData.services.includes('mixing') ? 'border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.1)]' : 'border-zinc-800'} rounded hover:border-[#00f0ff]/70 transition-all`}>
                        <input type="checkbox" value="mixing" checked={formData.services.includes('mixing')} onChange={handleServiceToggle} className="w-5 h-5 accent-[#00f0ff]" />
                        <span className="text-neutral-200">Mixing</span>
                      </label>
                      <label className={`flex items-center gap-3 cursor-pointer p-4 bg-zinc-950 border ${formData.services.includes('mastering') ? 'border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.1)]' : 'border-zinc-800'} rounded hover:border-[#00f0ff]/70 transition-all`}>
                        <input type="checkbox" value="mastering" checked={formData.services.includes('mastering')} onChange={handleServiceToggle} className="w-5 h-5 accent-[#00f0ff]" />
                        <span className="text-neutral-200">Mastering</span>
                      </label>
                      <label className={`flex items-center gap-3 cursor-pointer p-4 bg-zinc-950 border ${formData.services.includes('production') ? 'border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.1)]' : 'border-zinc-800'} rounded hover:border-[#00f0ff]/70 transition-all`}>
                        <input type="checkbox" value="production" checked={formData.services.includes('production')} onChange={handleServiceToggle} className="w-5 h-5 accent-[#00f0ff]" />
                        <span className="text-neutral-200">Full Music Production</span>
                      </label>
                    </>
                  )}
                </div>
              </fieldset>
            )}

            {hasAnyService && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 animate-[fadeIn_0.5s_ease_forwards]">
                
                {hasCreativeMusic && (
                  <>
                    <div className="flex flex-col">
                      <label htmlFor="genre" className="mb-2 font-medium text-neutral-200">Genre / Style *</label>
                      <input 
                        type="text" id="genre" name="genre" placeholder="e.g., Pop, Rock, Cinematic..." 
                        className="w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-200 rounded focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors" 
                        value={formData.genre} onChange={handleChange} required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="referenceTrack" className="mb-2 font-medium text-neutral-200">Reference Track URL *</label>
                      <input 
                        type="url" id="referenceTrack" name="referenceTrack" placeholder="Link to a song you like..." 
                        className="w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-200 rounded focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors" 
                        value={formData.referenceTrack} onChange={handleChange} required
                      />
                    </div>
                  </>
                )}

                {hasVoiceover && (
                  <div className="flex flex-col md:col-span-2">
                    <label htmlFor="voiceoverStyle" className="mb-2 font-medium text-neutral-200">Desired Tone / Accent (For Voiceover) *</label>
                    <input 
                      type="text" id="voiceoverStyle" name="voiceoverStyle" placeholder="e.g., Deep narrative, Energetic ad..." 
                      className="w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-200 rounded focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors" 
                      value={formData.voiceoverStyle} onChange={handleChange} required
                    />
                  </div>
                )}

                {category === 'technical' && (
                  <>
                    <div className="flex flex-col">
                      <label htmlFor="trackCount" className="mb-2 font-medium text-neutral-200">Number of Tracks / Stems *</label>
                      <input 
                        type="number" id="trackCount" name="trackCount" placeholder="e.g., 20" 
                        className="w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-200 rounded focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors" 
                        value={formData.trackCount} onChange={handleChange} required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="deadline" className="mb-2 font-medium text-neutral-200">Expected Deadline *</label>
                      <input 
                        type="date" id="deadline" name="deadline" min={today}
                        className="w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-400 rounded focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors" 
                        value={formData.deadline} onChange={handleChange} required
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            {hasMusicOrTech && (
              <div className="flex flex-col mb-6 animate-[fadeIn_0.5s_ease_forwards]">
                <label htmlFor="artistName" className="mb-2 font-medium text-neutral-200">Artist / Stage Name <span className="text-zinc-500 text-sm font-normal">(Optional)</span></label>
                <input 
                  type="text" id="artistName" name="artistName" 
                  placeholder="E.g. Lil YM, The Valley Band..."
                  className="w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-200 rounded focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors" 
                  value={formData.artistName} onChange={handleChange}
                />
              </div>
            )}

            <div className="flex flex-col mb-8">
              <label htmlFor="message" className="mb-2 font-medium text-neutral-200">Project Details *</label>
              <textarea 
                id="message" name="message" 
                className="w-full p-4 bg-zinc-950 border border-zinc-800 text-neutral-200 rounded focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none transition-colors min-h-[120px]" 
                value={formData.message} onChange={handleChange} required
                placeholder={messagePlaceholder}
              ></textarea>
            </div>
            
            {submitStatus === 'success' && (
              <div aria-live="polite" className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-lg text-emerald-400 text-center animate-[fadeIn_0.5s_ease_forwards]" role="alert">
                <strong>Success!</strong> Your booking request has been securely sent. We will review it shortly.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div aria-live="assertive" className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center animate-[fadeIn_0.5s_ease_forwards]" role="alert">
                <strong>Oops!</strong> Something went wrong connecting to the server. Please try again or contact us directly.
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-4 px-6 font-semibold rounded shadow-[0_4px_14px_rgba(0,240,255,0.3)] transition-all uppercase tracking-wider text-sm outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50 
                ${!isFormValid || isSubmitting
                    ? 'bg-zinc-800 text-zinc-500 shadow-none cursor-not-allowed' 
                    : 'bg-[#00f0ff] text-black hover:bg-[#00c3cc] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,240,255,0.4)]'}`}
            >
              {isSubmitting ? "Sending Request..." : (isFormValid ? "Submit Booking Request" : "Please fill required details")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
