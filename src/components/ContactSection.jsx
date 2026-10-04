import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { Phone, MapPin, Scissors, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ContactSection({ onOpenGrooming }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    petType: 'Dog',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSent(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `🐾 *New Website Enquiry - Casper's*\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Pet Type:* ${formData.petType}\n` +
      `*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#E9E1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECF8] text-[#54158A] font-bold text-xs uppercase tracking-wider mb-3">
            <span>💬</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29242D] tracking-tight mb-2 font-['Nunito']">
            We're Here For You & Your Pets
          </h2>
          <p className="text-sm sm:text-base text-[#706A73]">
            Have a question about pet food, sizes, stock, or grooming? Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: 3 Quick Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {/* Call Card */}
            <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-2xl border border-[#E9E1EC] hover:border-[#54158A]/30 transition">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F3ECF8] text-[#54158A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#706A73]">
                    Call Us
                  </h3>
                  <a
                    href={STORE_INFO.phoneTel}
                    className="text-lg font-extrabold text-[#54158A] hover:underline block mt-0.5"
                  >
                    {STORE_INFO.phone}
                  </a>
                  <p className="text-xs text-[#706A73] mt-1">
                    Call directly for urgent enquiries or immediate product confirmation.
                  </p>
                </div>
              </div>
            </div>

            {/* Visit Card */}
            <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-2xl border border-[#E9E1EC] hover:border-[#54158A]/30 transition">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F3ECF8] text-[#54158A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#706A73]">
                    Visit Our Store
                  </h3>
                  <p className="text-sm font-bold text-[#29242D] mt-0.5 leading-snug">
                    {STORE_INFO.address.line1}, {STORE_INFO.address.landmark},<br />
                    {STORE_INFO.address.area}, {STORE_INFO.address.city}
                  </p>
                  <p className="text-xs text-[#706A73] mt-1">
                    Open 7 days a week until 10:00 PM.
                  </p>
                </div>
              </div>
            </div>

            {/* Grooming Appointment Card */}
            <div className="bg-[#54158A] text-white p-5 sm:p-6 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-amber-200">
                    Grooming Parlour
                  </h3>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Book a gentle grooming appointment
                  </p>
                  <p className="text-xs text-[#F3ECF8] mt-1 mb-3">
                    Baths, nail clipping, sanitary trim, haircuts & styling.
                  </p>
                  <button
                    onClick={onOpenGrooming}
                    className="inline-flex items-center gap-1.5 bg-white text-[#54158A] font-bold text-xs px-3.5 py-2 rounded-xl hover:bg-[#F3ECF8] transition"
                  >
                    <span>Request Grooming Slot</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#FAF7F0] p-6 sm:p-8 rounded-3xl border border-[#E9E1EC] shadow-sm text-left">
            {sent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#29242D] font-['Nunito']">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-[#706A73] max-w-md mx-auto">
                  We have received your enquiry and our store team will call or message you shortly.
                </p>
                <div className="pt-3 max-w-sm mx-auto space-y-2">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full bg-[#1B8755] hover:bg-[#156e45] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send directly via WhatsApp now
                  </button>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', phone: '', email: '', petType: 'Dog', message: '' });
                    }}
                    className="w-full text-xs text-[#706A73] hover:text-[#54158A] font-bold py-2"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#29242D] font-['Nunito'] mb-1">
                  Send an Enquiry
                </h3>
                <p className="text-xs text-[#706A73] mb-4">
                  We usually respond within a couple of hours during store working hours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#706A73] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#E9E1EC] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#706A73] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 075500 58222"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#E9E1EC] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#706A73] mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#E9E1EC] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#706A73] mb-1">
                      Pet Type
                    </label>
                    <select
                      value={formData.petType}
                      onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                      className="w-full bg-white border border-[#E9E1EC] rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[#29242D] focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                    >
                      <option value="Dog">Dog 🐶</option>
                      <option value="Cat">Cat 🐱</option>
                      <option value="Both">Both Dogs & Cats</option>
                      <option value="Other Pet">Other Pet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#706A73] mb-1">
                    Your Message / Question
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Ask about pet food availability, diet suggestions, grooming slots, accessories..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#E9E1EC] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#54158A] hover:bg-[#3B0D63] text-white font-bold py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4 text-amber-200" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
