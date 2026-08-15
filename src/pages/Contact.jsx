import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-1 pt-16">
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MessageCircle size={44} className="text-orange-400 mx-auto mb-5" />
          <h1 className="text-5xl font-extrabold mb-5">Get in Touch</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Whether you are seeking help, want to volunteer, partner with us or
            simply want to find out more — we are here and ready to listen.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Contact Info</span>
                <h2 className="text-3xl font-extrabold text-[#0f1f3d] mt-1 mb-5">We're Here for You</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  No question is too small and no situation too difficult. Reach
                  out in whatever way feels comfortable for you.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f1f3d] text-sm">Our Location</p>
                    <p className="text-gray-500 text-sm">Harare, Zimbabwe, Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f1f3d] text-sm">Email Us</p>
                    <a href="mailto:info@equipzim.org" className="text-gray-500 text-sm hover:text-orange-500 transition-colors">
                      info@equipzim.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f1f3d] text-sm">Call / WhatsApp</p>
                    <a href="tel:+2630000000000" className="text-gray-500 text-sm hover:text-orange-500 transition-colors">
                      +263 000 000 000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f1f3d] text-sm">Office Hours</p>
                    <p className="text-gray-500 text-sm">Mon – Fri: 8:00 AM – 5:00 PM</p>
                    <p className="text-gray-500 text-xs">Emergency line available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500 text-white rounded-2xl p-5">
                <p className="font-bold mb-1">Crisis / Emergency?</p>
                <p className="text-sm text-orange-100">
                  If you or someone you know is in immediate danger, please call
                  our crisis line or visit the nearest emergency services.
                </p>
                <a href="tel:+2630000000000" className="mt-3 inline-block bg-white text-orange-600 text-sm font-bold px-4 py-2 rounded-full">
                  Call Crisis Line
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={56} className="text-green-500 mx-auto mb-5" />
                  <h2 className="text-2xl font-extrabold text-[#0f1f3d] mb-3">Message Received!</h2>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    Thank you for reaching out, <strong>{form.name || 'friend'}</strong>. 
                    We will get back to you at <strong>{form.email}</strong> within 24 hours.
                  </p>
                  <p className="text-orange-500 font-semibold mt-5">God bless you.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-extrabold text-[#0f1f3d] mb-1">Send Us a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone (optional)</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                        placeholder="+263 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Subject *</label>
                      <select
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option>Seeking Help / Referral</option>
                        <option>Programme Enquiry</option>
                        <option>Donation / Partnership</option>
                        <option>Volunteering</option>
                        <option>Prayer Request</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#0f1f3d] hover:bg-[#1e3a6e] text-white font-bold py-4 rounded-xl text-base transition-all hover:scale-[1.02]"
                  >
                    <Send size={18} /> Send Message
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Your details are kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
