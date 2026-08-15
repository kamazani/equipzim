import { Link } from 'react-router-dom';
import {
  Heart,
  Shield,
  Users,
  Star,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Globe,
} from 'lucide-react';

const stats = [
  { value: '500+', label: 'Lives Transformed' },
  { value: '8+', label: 'Years of Ministry' },
  { value: '12', label: 'African Communities' },
  { value: '95%', label: 'Recovery Success Rate' },
];

const programs = [
  {
    icon: <Shield size={28} className="text-orange-500" />,
    title: 'Drug Addiction Recovery',
    desc: 'Faith-based rehabilitation programmes combining counselling, community support and spiritual healing.',
  },
  {
    icon: <Heart size={28} className="text-orange-500" />,
    title: 'Alcohol Abuse',
    desc: 'Compassionate support for individuals and families affected by alcohol dependence.',
  },
  {
    icon: <BookOpen size={28} className="text-orange-500" />,
    title: 'Sex Addiction Counselling',
    desc: 'Confidential counselling grounded in Christian values to restore dignity and wholeness.',
  },
  {
    icon: <Lightbulb size={28} className="text-orange-500" />,
    title: 'Mental Health Support',
    desc: 'Professional mental health care integrated with faith to bring healing and hope.',
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 60%, #1a2f5a 100%)',
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-orange-400/5 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-orange-500/30">
            A Christian Ministry in Africa
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Restoring Lives,
            <br />
            <span className="text-orange-400">Rebuilding Futures</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            EquipZim brings hope and healing to those struggling with drug
            addiction, alcohol abuse, sex addiction and mental health challenges
            — through the power of faith, community and professional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              Explore Our Programs <ArrowRight size={18} />
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-orange-400 hover:text-orange-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-all"
            >
              <Heart size={18} /> Support Our Mission
            </Link>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path fill="#f8fafc" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f8fafc] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl shadow-sm p-6">
                <p className="text-4xl font-extrabold text-[#1e3a6e]">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs overview */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl font-extrabold text-[#0f1f3d] mt-2">Our Core Programs</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Every program is designed to meet people where they are and walk
              with them towards complete restoration.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-[#0f1f3d] font-bold text-base mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
            >
              View All Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission banner */}
      <section
        className="py-20 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe size={40} className="text-orange-400 mx-auto mb-5" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            "He heals the broken-hearted and binds up their wounds."
          </h2>
          <p className="text-blue-100 text-base max-w-2xl mx-auto mb-3 italic">— Psalm 147:3</p>
          <p className="text-blue-200 text-base max-w-2xl mx-auto">
            EquipZim is rooted in the belief that every life has value and every
            person deserves a second chance. Our work across Africa is powered by
            faith, funded by generous donors, and driven by love.
          </p>
        </div>
      </section>

      {/* Impact teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Real Impact</span>
              <h2 className="text-4xl font-extrabold text-[#0f1f3d] mt-2 mb-5">
                Changing Lives Across Africa
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-4">
                From Harare to surrounding communities, EquipZim has touched
                hundreds of families. Our holistic approach — combining spiritual
                support, professional counselling and practical skills — creates
                lasting transformation.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                We believe recovery is not just about breaking free from
                addiction — it is about rebuilding identity, restoring
                relationships and equipping people with skills to sustain a
                healthy, purposeful life.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/impact"
                  className="inline-flex items-center gap-2 bg-[#0f1f3d] hover:bg-[#1e3a6e] text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  See Our Impact <ArrowRight size={16} />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 border-2 border-[#0f1f3d] text-[#0f1f3d] hover:bg-[#0f1f3d] hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Skills Projects
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Users size={22} className="text-orange-500" />, title: 'Family Restoration', desc: 'Healing fractured families through counselling and community support.' },
                { icon: <Star size={22} className="text-orange-500" />, title: 'Youth Outreach', desc: 'Reaching young people before addiction takes hold.' },
                { icon: <Lightbulb size={22} className="text-orange-500" />, title: 'Skills Training', desc: 'Vocational training to empower recovered individuals.' },
                { icon: <Heart size={22} className="text-orange-500" />, title: 'Aftercare', desc: 'Ongoing support to prevent relapse and build resilience.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#f8fafc] rounded-2xl p-5 border border-gray-100">
                  <div className="mb-2">{item.icon}</div>
                  <h4 className="text-[#0f1f3d] font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Your Donation Changes Lives
          </h2>
          <p className="text-orange-100 text-base max-w-xl mx-auto mb-8">
            EquipZim relies entirely on the generosity of donors like you. Every
            contribution — large or small — helps us reach one more person who
            needs hope.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg"
          >
            <Heart size={18} /> Donate Today
          </Link>
        </div>
      </section>
    </main>
  );
}
