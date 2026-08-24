import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Users } from 'lucide-react';

const values = [
  { icon: <Heart size={22} className="text-orange-500" />, title: 'Compassion', desc: 'We meet every person with unconditional love, dignity and respect, regardless of their story.' },
  { icon: <Target size={22} className="text-orange-500" />, title: 'Faith', desc: 'Our foundation is rooted in the Christian belief that restoration and new life are possible for everyone.' },
  { icon: <Users size={22} className="text-orange-500" />, title: 'Community', desc: 'Healing happens in community. We build safe, supportive environments where people belong.' },
  { icon: <Eye size={22} className="text-orange-500" />, title: 'Integrity', desc: 'We operate with transparency, accountability and the highest ethical standards in all we do.' },
];

const team = [
  { name: 'Tinashe Murwisi', role: 'Founder & Executive Director', initial: 'TM' },
  { name: 'Tatenda Kambeu', role: 'Director', initial: 'TK' },
  { name: 'Dr. Grace Ncube', role: 'Clinical Counsellor', initial: 'GN' },
  { name: 'Rev. Samuel Dube', role: 'Spiritual Director', initial: 'SD' },
  { name: 'Tendai Chikwanda', role: 'Programme Coordinator', initial: 'TC' },
];

export default function About() {
  return (
    <main className="flex-1 pt-16">
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-orange-500/30">
            Our Story
          </span>
          <h1 className="text-5xl font-extrabold mb-5">About EquipZim</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Born out of a calling to serve the most vulnerable, EquipZim has
            grown from a small outreach into a life-changing ministry impacting
            communities across Africa.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl font-extrabold text-[#0f1f3d] mt-2 mb-5">
                From a Vision to a Movement
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                EquipZim was founded in Harare, Zimbabwe, when a group of
                passionate Christians saw the devastating impact of addiction and
                mental health crises on their communities — and chose to act.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                What began as a small counselling ministry has grown into a
                fully-fledged rehabilitation and support organisation, serving
                hundreds of individuals and families each year across multiple
                African communities.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                We are entirely donor-funded and driven by the belief that every
                person, no matter how broken, can experience true healing through
                faith, community and the right support.
              </p>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Support Our Work <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0f1f3d] text-white rounded-2xl p-8 text-center">
                <p className="text-5xl font-extrabold text-orange-400">8+</p>
                <p className="text-sm text-blue-200 mt-2">Years of Ministry</p>
              </div>
              <div className="bg-orange-500 text-white rounded-2xl p-8 text-center">
                <p className="text-5xl font-extrabold">500+</p>
                <p className="text-sm text-orange-100 mt-2">Lives Transformed</p>
              </div>
              <div className="bg-orange-500 text-white rounded-2xl p-8 text-center">
                <p className="text-5xl font-extrabold">12</p>
                <p className="text-sm text-orange-100 mt-2">Communities Reached</p>
              </div>
              <div className="bg-[#0f1f3d] text-white rounded-2xl p-8 text-center">
                <p className="text-5xl font-extrabold text-orange-400">95%</p>
                <p className="text-sm text-blue-200 mt-2">Recovery Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#0f1f3d] flex items-center justify-center mb-5">
                <Target size={24} className="text-orange-400" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0f1f3d] mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To bring hope, healing and restoration to individuals and
                families affected by addiction and mental health challenges
                through Christ-centred counselling, rehabilitation, skills
                development and community support across Africa.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-5">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0f1f3d] mb-3">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                An Africa where every person struggling with addiction or mental
                health challenges has access to compassionate, faith-based care —
                and where restored individuals become beacons of hope in their
                own communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-4xl font-extrabold text-[#0f1f3d] mt-2">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center bg-[#f8fafc] rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                  {v.icon}
                </div>
                <h4 className="text-[#0f1f3d] font-bold mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Meet The Team</span>
            <h2 className="text-4xl font-extrabold text-[#0f1f3d] mt-2">The People Behind the Mission</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-[#0f1f3d] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {t.initial}
                </div>
                <h4 className="text-[#0f1f3d] font-bold text-sm">{t.name}</h4>
                <p className="text-orange-500 text-xs mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
