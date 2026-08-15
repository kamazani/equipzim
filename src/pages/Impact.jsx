import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Tendai M.',
    location: 'Harare, Zimbabwe',
    program: 'Drug Recovery',
    initial: 'TM',
    quote:
      'I had given up on life completely. Three years of drug abuse had cost me my family, my job and my dignity. EquipZim took me in without judgement. Through their programme and the love of the community, I found faith and I found myself again. Today I am two years clean and employed.',
  },
  {
    name: 'Chipo R.',
    location: 'Bulawayo, Zimbabwe',
    program: 'Alcohol Rehabilitation',
    initial: 'CR',
    quote:
      'My wife was on the verge of leaving me. Alcohol had destroyed everything. EquipZim\'s family counselling sessions saved our marriage. I am 18 months sober and we are rebuilding together, stronger than ever.',
  },
  {
    name: 'Grace N.',
    location: 'Mutare, Zimbabwe',
    program: 'Mental Health',
    initial: 'GN',
    quote:
      'Depression had made me a prisoner in my own home. I thought something was deeply wrong with me. The counsellors at EquipZim gave me tools to understand my mind, and the community gave me hope. I now help facilitate their women\'s support group.',
  },
  {
    name: 'David K.',
    location: 'South Africa',
    program: 'Skills Project',
    initial: 'DK',
    quote:
      'After completing recovery, I had no idea how to support myself. The carpentry skills project changed that completely. I now run a small furniture business and employ two other graduates from EquipZim.',
  },
  {
    name: 'Nyasha T.',
    location: 'Harare, Zimbabwe',
    program: 'Sex Addiction Counselling',
    initial: 'NT',
    quote:
      'I could never talk about my struggle with anyone. The shame was overwhelming. EquipZim created a safe, confidential space where I finally felt heard and not judged. The biblical counselling brought deep healing I did not think was possible.',
  },
  {
    name: 'Pastor Emmanuel',
    location: 'Zambia',
    program: 'Partner Ministry',
    initial: 'PE',
    quote:
      'We partnered with EquipZim to bring their model to our community in Zambia. The transformation we have witnessed is beyond words. Lives, families and an entire community are being changed.',
  },
];

const stats = [
  { value: '500+', label: 'People Helped' },
  { value: '95%', label: 'Recovery Rate' },
  { value: '12', label: 'Communities' },
  { value: '8+', label: 'Years of Impact' },
];

export default function Impact() {
  return (
    <main className="flex-1 pt-16">
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-orange-500/30">
            Real Stories
          </span>
          <h1 className="text-5xl font-extrabold mb-5">Our Impact</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Numbers tell part of the story. But the real impact is found in the
            lives of people who dared to hope and found healing.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-orange-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-5xl font-extrabold">{s.value}</p>
                <p className="text-orange-100 text-sm mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl font-extrabold text-[#0f1f3d] mt-2">Voices of Transformation</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              These stories are shared with permission. Names have been partially
              anonymised to protect privacy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
              >
                <Quote size={28} className="text-orange-200 mb-3" />
                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic mb-5">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-[#0f1f3d] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-[#0f1f3d] font-bold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                    <span className="inline-block bg-orange-50 text-orange-600 text-xs font-medium px-2 py-0.5 rounded-full mt-0.5">
                      {t.program}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section
        className="py-16 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-center gap-1 text-orange-400 mb-5">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          <blockquote className="text-2xl sm:text-3xl font-bold leading-snug mb-4">
            "I can do all things through Christ who strengthens me."
          </blockquote>
          <p className="text-blue-300 italic">— Philippians 4:13</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-[#0f1f3d] mb-4">Be Part of the Next Story</h2>
          <p className="text-gray-500 mb-8">
            Your support makes every one of these stories possible. Join us in
            creating more moments of breakthrough and redemption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105"
            >
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0f1f3d] text-[#0f1f3d] hover:bg-[#0f1f3d] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
