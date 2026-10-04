import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, Sparkles, CheckCircle2, MessageCircle, Dog, Cat } from 'lucide-react';
import { STORE_INFO, GROOMING_SERVICES } from '../data/storeData';

export default function GroomingModal({ isOpen, onClose, preselectedService = '' }) {
  const [petType, setPetType] = useState('Dog');
  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');
  const [petAge, setPetAge] = useState('');
  const [service, setService] = useState(preselectedService || 'Full Grooming');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim() || !petName.trim()) {
      alert('Please fill in your Pet Name and Phone Number');
      return;
    }
    const ref = `CPG-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const message = encodeURIComponent(
      `🐾 *Casper's Grooming Appointment Request*\n` +
      `--------------------------------\n` +
      `*Ref:* ${bookingRef}\n` +
      `*Pet:* ${petName} (${petType} - ${breed || 'Not specified'})\n` +
      `*Age:* ${petAge || 'Not specified'}\n` +
      `*Service:* ${service}\n` +
      `*Date:* ${preferredDate || 'Earliest available'}\n` +
      `*Time Slot:* ${preferredTime}\n` +
      `*Phone:* ${phone}\n` +
      (notes ? `*Notes:* ${notes}\n` : '') +
      `--------------------------------\n` +
      `Please let me know if this slot is available at your Madambakkam parlour.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setPetName('');
    setBreed('');
    setPetAge('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="grooming-modal-title"
        className="relative bg-[#FFFDF9] rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#E9E1EC] z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="bg-[#54158A] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gentle Care Parlour</span>
          </div>
          <h2 id="grooming-modal-title" className="text-2xl font-bold font-['Nunito']">
            Book a Grooming Session
          </h2>
          <p className="text-xs sm:text-sm text-[#F3ECF8] mt-1">
            Madambakkam, Tambaram • Dedicated stress-free grooming for dogs & cats
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 text-left max-h-[80vh] overflow-y-auto">
          {submitted ? (
            /* Confirmation View */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-xl font-bold text-[#29242D] font-['Nunito']">
                Grooming Request Received!
              </h3>

              <div className="bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl p-4 text-xs sm:text-sm text-[#29242D] space-y-1.5 text-left">
                <div className="flex justify-between border-b border-[#E9E1EC] pb-2">
                  <span className="text-[#706A73]">Booking Request Ref:</span>
                  <strong>{bookingRef}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#706A73]">Pet:</span>
                  <span>{petName} ({petType} - {breed || 'Mix'})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#706A73]">Service:</span>
                  <strong>{service}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#706A73]">Date & Time:</span>
                  <span>{preferredDate || 'Earliest available'} at {preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#706A73]">Contact:</span>
                  <span>{phone}</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed text-left">
                <strong>Please Note:</strong> Thanks! Your grooming request has been received. We'll contact you via phone or WhatsApp shortly to confirm your slot based on availability.
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full bg-[#1B8755] hover:bg-[#156e45] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send Request Details to Store WhatsApp
                </button>
                <button
                  onClick={handleReset}
                  className="w-full bg-[#FAF7F0] hover:bg-[#F3ECF8] border border-[#E9E1EC] text-[#54158A] font-bold py-2.5 rounded-xl text-xs transition"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Pet Type Select */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#706A73] mb-2">
                  1. Select Pet Type *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPetType('Dog')}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-bold transition ${
                      petType === 'Dog'
                        ? 'border-[#54158A] bg-[#F3ECF8] text-[#54158A] shadow-sm'
                        : 'border-[#E9E1EC] bg-white text-[#29242D] hover:bg-[#FAF7F0]'
                    }`}
                  >
                    <Dog className="w-4 h-4" />
                    <span>Dog 🐶</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPetType('Cat')}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-bold transition ${
                      petType === 'Cat'
                        ? 'border-[#54158A] bg-[#F3ECF8] text-[#54158A] shadow-sm'
                        : 'border-[#E9E1EC] bg-white text-[#29242D] hover:bg-[#FAF7F0]'
                    }`}
                  >
                    <Cat className="w-4 h-4" />
                    <span>Cat 🐱</span>
                  </button>
                </div>
              </div>

              {/* Pet Name & Breed */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#706A73] mb-1">
                    Pet Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Casper, Bruno, Simba"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#706A73] mb-1">
                    Breed
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Golden Retriever, Persian, Indie"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                  />
                </div>
              </div>

              {/* Pet Age & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#706A73] mb-1">
                    Pet Age
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 8 months, 3 years"
                    value={petAge}
                    onChange={(e) => setPetAge(e.target.value)}
                    className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#706A73] mb-1">
                    Service Required *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl px-3 py-2 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                  >
                    {GROOMING_SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.priceRange})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#706A73] mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#54158A]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#706A73] mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#54158A]" />
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl px-3 py-2 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                  >
                    <option value="10:00 AM">Morning: 10:00 AM</option>
                    <option value="11:30 AM">Morning: 11:30 AM</option>
                    <option value="02:00 PM">Afternoon: 02:00 PM</option>
                    <option value="04:00 PM">Evening: 04:00 PM</option>
                    <option value="06:00 PM">Evening: 06:00 PM</option>
                    <option value="07:30 PM">Evening: 07:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-[#706A73] mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#54158A]" />
                  Your Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98400 12345"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-[#706A73] mb-1">
                  Additional Notes (e.g., temperament, allergies, coat knots)
                </label>
                <textarea
                  rows="2"
                  placeholder="Tell us if your pet is sensitive to water, has skin allergies, or needs tick shampoo..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#54158A] hover:bg-[#3B0D63] text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  Request Appointment
                </button>
                <p className="text-[11px] text-[#706A73] text-center mt-2">
                  No advance payment needed. We will call you to confirm your slot!
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
