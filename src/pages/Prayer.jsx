import { useState } from 'react';
import { Send, CheckCircle, Heart } from 'lucide-react';

const categories = [
  'Personal Healing',
  'Family Member',
  'Mental Health',
  'Addiction Recovery',
  'Financial Breakthrough',
  'Relationships',
  'Other',
];

const shared = [
  {
    initial: 'A.M.',
    request: 'Please pray for my son who is struggling with drug addiction. He is only 22 and I am afraid of losing him. Lord, bring him back.',
    date: '3 days ago',
    category: 'Family Member',
    prayed: 47,
  },
  {
    initial: 'T.N.',
    request: 'I am in recovery from alcohol abuse. Pray that I stay strong and do not go back. I have a job interview next week.',
    date: '5 days ago',
    category: 'Addiction Recovery',
    prayed: 63,
  },
  {
    initial: 'R.K.',
    request: 'Dealing with severe depression. Some days I cannot get out of bed. Please pray for strength and light in my darkness.',
    date: '1 week ago',
    category: 'Mental Health',
    prayed: 89,
  },
  {
    initial: 'M.C.',
    request: 'Pray for my marriage — addiction destroyed it and I am trying to rebuild. God has brought us both through so much.',
    date: '1 week ago',
    category: 'Relationships',
    prayed: 54,
  },
];

export default function Prayer() {
  const [form, setForm] = useState({ name: '', request: '', category: '', anonymous: false });
  const [submitted, setSubmitted] = useState(false);
  const [prayedFor, setPrayedFor] = useState({});

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
          <span className="text-4xl mb-5 block">🙏</span>
          <h1 className="text-5xl font-extrabold mb-5">Prayer Requests</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            You are not alone. Our community prays daily for those on the
            journey to healing. Share your request and allow others to stand
            with you in faith.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-fit">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-extrabold text-[#0f1f3d] mb-2">Prayer Request Submitted</h3>
                  <p className="text-gray-500 text-sm">
                    Our community will be praying for you. You are deeply loved.
                  </p>
                  <p className="text-orange-500 font-semibold mt-4">God hears every prayer. 🙏</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-extrabold text-[#0f1f3d] mb-1">Share Your Request</h2>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                      placeholder="First name or initials"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-white"
                    >
                      <option value="">Select...</option>
                      {categories.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Prayer Request *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.request}
                      onChange={(e) => setForm({ ...form, request: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none"
                      placeholder="Share what you would like prayer for..."
                    />
                  </div>
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.anonymous}
                      onChange={(e) => setForm({ ...form, anonymous: e.target.checked })}
                      className="rounded"
                    />
                    Share anonymously (initials only)
                  </label>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02]"
                  >
                    <Send size={16} /> Submit Request
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    All requests are treated with confidentiality and respect.
                  </p>
                </form>
              )}
            </div>

            {/* Community wall */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold text-[#0f1f3d] mb-6">Community Prayer Wall</h2>
              <div className="space-y-5">
                {shared.map((r, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0f1f3d] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {r.initial}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-orange-50 text-orange-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {r.category}
                          </span>
                          <span className="text-gray-400 text-xs">{r.date}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed italic">"{r.request}"</p>
                        <div className="flex items-center gap-2 mt-4">
                          <button
                            onClick={() => setPrayedFor((prev) => ({ ...prev, [i]: true }))}
                            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                              prayedFor[i]
                                ? 'bg-orange-500 text-white'
                                : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                            }`}
                          >
                            <Heart size={12} fill={prayedFor[i] ? 'white' : 'none'} />
                            {prayedFor[i] ? 'Prayed ✓' : 'I Prayed'} ({r.prayed + (prayedFor[i] ? 1 : 0)})
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
