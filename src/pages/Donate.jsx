import { useState } from 'react';
import { Heart, CreditCard, Smartphone, Building2, CheckCircle } from 'lucide-react';

const amounts = [10, 25, 50, 100, 250, 500];

const causes = [
  'Where Most Needed',
  'Drug Recovery Programme',
  'Alcohol Rehabilitation',
  'Mental Health Support',
  'Skills Development Projects',
  'Family Restoration',
];

export default function Donate() {
  const [selected, setSelected] = useState(50);
  const [custom, setCustom] = useState('');
  const [cause, setCause] = useState(causes[0]);
  const [frequency, setFrequency] = useState('once');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const displayAmount = custom || selected;

  return (
    <main className="flex-1 pt-16">
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heart size={44} className="text-orange-400 mx-auto mb-5" />
          <h1 className="text-5xl font-extrabold mb-5">Make a Donation</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Your generosity directly funds counselling, rehabilitation,
            skills training and community support for people in desperate
            need across Africa. Every dollar changes a life.
          </p>
        </div>
      </section>

      {/* Donation form */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={56} className="text-green-500 mx-auto mb-5" />
                  <h2 className="text-2xl font-extrabold text-[#0f1f3d] mb-3">
                    Thank You, {form.name || 'Friend'}!
                  </h2>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    Your generous donation of <strong>${displayAmount}</strong> to{' '}
                    <strong>{cause}</strong> has been received. We will send a
                    confirmation to <strong>{form.email}</strong>.
                  </p>
                  <p className="text-orange-500 font-semibold mt-6">
                    God bless you for your support!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-extrabold text-[#0f1f3d] mb-1">Your Donation</h2>

                  {/* Frequency */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Donation Frequency
                    </label>
                    <div className="flex gap-3">
                      {['once', 'monthly'].map((f) => (
                        <button
                          type="button"
                          key={f}
                          onClick={() => setFrequency(f)}
                          className={`flex-1 py-2.5 rounded-full text-sm font-semibold border-2 transition-colors capitalize ${
                            frequency === f
                              ? 'bg-[#0f1f3d] text-white border-[#0f1f3d]'
                              : 'border-gray-200 text-gray-600 hover:border-[#0f1f3d]'
                          }`}
                        >
                          {f === 'once' ? 'Give Once' : 'Give Monthly'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Amount (USD)
                    </label>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {amounts.map((a) => (
                        <button
                          type="button"
                          key={a}
                          onClick={() => { setSelected(a); setCustom(''); }}
                          className={`py-3 rounded-xl text-sm font-bold border-2 transition-colors ${
                            selected === a && !custom
                              ? 'bg-orange-500 text-white border-orange-500'
                              : 'border-gray-200 text-gray-700 hover:border-orange-400'
                          }`}
                        >
                          ${a}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      placeholder="Or enter custom amount"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                      min="1"
                    />
                  </div>

                  {/* Cause */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Designate Your Gift
                    </label>
                    <select
                      value={cause}
                      onChange={(e) => setCause(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-white"
                    >
                      {causes.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Personal details */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
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
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
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

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Message (optional)
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none"
                      placeholder="A word of encouragement or prayer..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg shadow-orange-500/30"
                  >
                    <Heart size={18} />
                    Donate ${displayAmount || '0'}{frequency === 'monthly' ? '/mo' : ''}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    🔒 Secure donation · EquipZim is a registered non-profit organisation
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Impact */}
              <div className="bg-[#0f1f3d] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4 text-orange-300">Your Impact</h3>
                <ul className="space-y-3 text-sm text-blue-100">
                  {[
                    ['$10', 'Provides a counselling session for one person'],
                    ['$25', 'Supplies learning materials for a skills class'],
                    ['$50', 'Covers a week of aftercare support'],
                    ['$100', 'Sponsors one month of rehabilitation'],
                    ['$250', 'Funds a family restoration workshop'],
                    ['$500', 'Supports a full skills training course'],
                  ].map(([amt, impact]) => (
                    <li key={amt} className="flex gap-2">
                      <span className="text-orange-400 font-bold shrink-0 w-12">{amt}</span>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other ways to give */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-[#0f1f3d] mb-4">Other Ways to Give</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                      <Building2 size={16} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Bank Transfer</p>
                      <p className="text-gray-400 text-xs">Contact us for banking details</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                      <Smartphone size={16} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Mobile Money (EcoCash)</p>
                      <p className="text-gray-400 text-xs">Contact us for mobile number</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                      <CreditCard size={16} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">In-Kind Donations</p>
                      <p className="text-gray-400 text-xs">Tools, food, clothing &amp; equipment</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 text-sm text-orange-800">
                <p className="font-semibold mb-1">📧 Questions about giving?</p>
                <p>Email us at <a href="mailto:info@equipzim.com" className="underline font-medium">info@equipzim.com</a> and we will be happy to assist.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
