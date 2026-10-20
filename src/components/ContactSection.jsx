import React, { useState } from 'react';
import { BAKERY_CONFIG } from '../config/bakeryData';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Copy, Check, RefreshCw } from 'lucide-react';

export default function ContactSection({ initialItem = "" }) {
  const { contact } = BAKERY_CONFIG;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: initialItem ? `Enquiry about ${initialItem}` : '',
    message: initialItem ? `Hello Golden Crust Bakery, I would like to enquire about ordering the ${initialItem}.` : ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@example.com).';
    }

    if (formData.phone.trim() && !/^[0-9+\s\-().]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (digits and standard formatting).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message or enquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Record submission data locally and present clear, honest response
    setSubmittedData({
      ...formData,
      timestamp: new Date().toLocaleString()
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setErrors({});
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const summaryText = `Golden Crust Bakery Enquiry Summary:
Name: ${submittedData.name}
Email: ${submittedData.email}
Phone: ${submittedData.phone || 'Not provided'}
Subject: ${submittedData.subject || 'General Enquiry'}
Message: ${submittedData.message}
Submitted (Local): ${submittedData.timestamp}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const mailtoLink = submittedData
    ? `mailto:${contact.emailPlaceholder}?subject=${encodeURIComponent(
        submittedData.subject || `Enquiry from ${submittedData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${submittedData.name}\nContact: ${submittedData.email} | ${submittedData.phone}\n\nMessage:\n${submittedData.message}`
      )}`
    : '#';

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF7E6] border border-[#EFCB68] text-[#9A6A12] text-xs font-semibold tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5 text-[#D99B26]" />
            <span>Connect With Us</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
            {contact.title}
          </h2>

          <p className="text-base sm:text-lg text-[#5A3825] leading-relaxed">
            {contact.subtitle}
          </p>

          <div className="w-16 h-[2px] bg-[#D99B26] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bakery Contact Information & Honest Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E8DEC8] shadow-sm space-y-6">
              
              <div className="border-b border-[#F3EDE2] pb-5">
                <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-2">
                  Golden Crust Bakery
                </h3>
                <p className="text-xs sm:text-sm text-[#5A3825] leading-relaxed">
                  We look forward to baking for you. Feel free to contact us for enquiries, custom orders, and dietary questions.
                </p>
              </div>

              {/* Editable Information Placeholders */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FEF7E6] border border-[#EFCB68] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#D99B26]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2C1810]">Location</h4>
                    <p className="text-xs text-[#5A3825] leading-relaxed mt-0.5">
                      {contact.addressPlaceholder}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FEF7E6] border border-[#EFCB68] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#D99B26]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2C1810]">Telephone</h4>
                    <p className="text-xs text-[#5A3825] leading-relaxed mt-0.5">
                      {contact.phonePlaceholder}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FEF7E6] border border-[#EFCB68] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#D99B26]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2C1810]">Email</h4>
                    <p className="text-xs text-[#5A3825] leading-relaxed mt-0.5 font-mono">
                      {contact.emailPlaceholder}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FEF7E6] border border-[#EFCB68] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#D99B26]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2C1810]">Bakery Hours</h4>
                    <p className="text-xs text-[#5A3825] leading-relaxed mt-0.5">
                      {contact.hoursPlaceholder}
                    </p>
                    <p className="text-[11px] text-[#7A543E] mt-0.5">
                      {contact.closedPlaceholder}
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic Disclaimer Notice */}
              <div className="p-3.5 rounded-xl bg-[#F5EDE2] border border-[#DECBB6] text-[11px] text-[#7A543E] leading-relaxed">
                {contact.disclaimer}
              </div>

            </div>
          </div>

          {/* Right Column: Enquiry Form / Submission Status Response */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E8DEC8] shadow-sm">
              
              {submittedData ? (
                /* Submission Response Panel */
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-4 rounded-xl bg-[#FEF7E6] border border-[#EFCB68] flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#9A6A12] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#2C1810]">
                        Enquiry Form Validated
                      </h4>
                      <p className="text-xs text-[#5A3825] mt-1 leading-relaxed">
                        Thank you, <strong>{submittedData.name}</strong>. Your enquiry details have been verified and recorded locally for this session.
                      </p>
                      <p className="text-[11px] text-[#7A543E] mt-2 italic">
                        Note: Because this is a front-end college internship project without an active mail server, your message was not transmitted across external servers.
                      </p>
                    </div>
                  </div>

                  {/* Summary of Submitted Details */}
                  <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#7A543E]">
                      Enquiry Summary
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[#9D7B64] block">Full Name:</span>
                        <span className="font-semibold text-[#2C1810]">{submittedData.name}</span>
                      </div>
                      <div>
                        <span className="text-[#9D7B64] block">Email:</span>
                        <span className="font-semibold text-[#2C1810]">{submittedData.email}</span>
                      </div>
                      <div>
                        <span className="text-[#9D7B64] block">Phone:</span>
                        <span className="font-semibold text-[#2C1810]">{submittedData.phone || 'Not specified'}</span>
                      </div>
                      <div>
                        <span className="text-[#9D7B64] block">Subject:</span>
                        <span className="font-semibold text-[#2C1810]">{submittedData.subject || 'General Enquiry'}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-[#E8DEC8]">
                      <span className="text-[#9D7B64] text-xs block mb-1">Message Content:</span>
                      <p className="text-xs text-[#2C1810] bg-[#FFFFFF] p-3 rounded-lg border border-[#DECBB6] whitespace-pre-wrap">
                        {submittedData.message}
                      </p>
                    </div>
                  </div>

                  {/* Real Action Options */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2C1810] text-[#FAF7F2] hover:bg-[#3B2314] text-xs font-semibold tracking-wide transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-[#D99B26]" />
                      <span>Send via Email Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#E8DEC8] text-[#2C1810] border border-[#DECBB6] text-xs font-semibold transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#D99B26]" />
                          <span>Copy Summary</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-transparent text-[#7A543E] hover:text-[#2C1810] text-xs font-semibold transition-colors ml-auto"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>New Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* The Enquiry Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="font-serif text-xl font-bold text-[#2C1810] mb-2">
                    Send an Enquiry
                  </h3>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#2C1810] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border text-xs sm:text-sm text-[#2C1810] placeholder-[#9D7B64] focus:outline-none focus:ring-2 focus:ring-[#D99B26] transition-all ${
                        errors.name ? 'border-red-400 bg-red-50/30' : 'border-[#DECBB6]'
                      }`}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-[11px] text-red-600 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Contact Details Grid (Email & Phone) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#2C1810] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. jane@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border text-xs sm:text-sm text-[#2C1810] placeholder-[#9D7B64] focus:outline-none focus:ring-2 focus:ring-[#D99B26] transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-[#DECBB6]'
                        }`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-[11px] text-red-600 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#2C1810] mb-1.5">
                        Phone Number <span className="text-[#9D7B64] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border text-xs sm:text-sm text-[#2C1810] placeholder-[#9D7B64] focus:outline-none focus:ring-2 focus:ring-[#D99B26] transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-[#DECBB6]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1 text-[11px] text-red-600 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#2C1810] mb-1.5">
                      Subject / Topic of Interest
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Custom Celebration Cake Order"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECBB6] text-xs sm:text-sm text-[#2C1810] placeholder-[#9D7B64] focus:outline-none focus:ring-2 focus:ring-[#D99B26] transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#2C1810] mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details such as desired event date, number of servings, flavor preferences, or any questions..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border text-xs sm:text-sm text-[#2C1810] placeholder-[#9D7B64] focus:outline-none focus:ring-2 focus:ring-[#D99B26] transition-all resize-y ${
                        errors.message ? 'border-red-400 bg-red-50/30' : 'border-[#DECBB6]'
                      }`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-[11px] text-red-600 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2C1810] hover:bg-[#3B2314] text-[#FAF7F2] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Send className="w-4 h-4 text-[#D99B26]" />
                      <span>Submit Enquiry</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
