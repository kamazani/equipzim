import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Heart, BookOpen, Lightbulb, Users, CheckCircle } from 'lucide-react';

const programs = [
  {
    icon: <Shield size={32} className="text-orange-500" />,
    title: 'Drug Addiction Recovery',
    tag: 'Rehabilitation',
    desc: 'Our drug recovery programme offers a structured, faith-based path out of substance dependency. Through professional counselling, group therapy, spiritual direction and aftercare, participants receive the holistic support they need.',
    features: [
      'Personalised recovery plans',
      'Individual & group counselling',
      'Detox support & medical referrals',
      'Spiritual discipleship',
      'Family involvement sessions',
      '12-month aftercare follow-up',
    ],
  },
  {
    icon: <Heart size={32} className="text-orange-500" />,
    title: 'Alcohol Abuse Rehabilitation',
    tag: 'Rehabilitation',
    desc: 'Alcohol addiction tears apart families and communities. EquipZim provides compassionate, judgement-free support to help individuals break free from alcohol dependency and restore relationships.',
    features: [
      'Alcohol dependency assessments',
      'Motivational counselling',
      'Relapse prevention planning',
      'Peer support groups',
      'Family reconciliation workshops',
      'Community reintegration support',
    ],
  },
  {
    icon: <BookOpen size={32} className="text-orange-500" />,
    title: 'Sex Addiction Counselling',
    tag: 'Counselling',
    desc: 'Often misunderstood and rarely discussed, sex addiction causes profound shame and isolation. Our certified counsellors provide a safe, confidential space for healing grounded in Christian values and professional care.',
    features: [
      'Confidential one-on-one counselling',
      'Biblical identity restoration',
      'Accountability groups',
      'Couples and marriage support',
      'Trauma-informed therapy',
      'Ongoing mentorship',
    ],
  },
  {
    icon: <Lightbulb size={32} className="text-orange-500" />,
    title: 'Mental Health Support',
    tag: 'Mental Health',
    desc: 'Mental health challenges are widespread yet deeply stigmatised in Africa. EquipZim is breaking the silence through awareness, professional counselling and a community of care that says: you are not alone.',
    features: [
      'Mental health assessments',
      'Depression & anxiety counselling',
      'Trauma & grief support',
      'Crisis intervention',
      'Community awareness campaigns',
      'Referrals to clinical professionals',
    ],
  },
  {
    icon: <Users size={32} className="text-orange-500" />,
    title: 'Family Restoration',
    tag: 'Family Support',
    desc: 'Addiction and mental health struggles affect the whole family. We walk alongside families with counselling, education and practical support to restore trust, communication and wholeness.',
    features: [
      'Family counselling sessions',
      'Co-dependency education',
      'Parenting and relationship workshops',
      'Children\'s support groups',
      'Safe house referrals when needed',
      'Ongoing family follow-up',
    ],
  },
  {
    icon: <CheckCircle size={32} className="text-orange-500" />,
    title: 'Aftercare & Follow-up',
    tag: 'Aftercare',
    desc: 'Recovery does not end at discharge. Our structured aftercare programme ensures that individuals maintain their progress through mentorship, community connection and ongoing pastoral care.',
    features: [
      'Monthly check-in meetings',
      'Peer mentorship pairing',
      'Sobriety milestone celebrations',
      'Employment & skills referrals',
      'Spiritual growth groups',
      'Emergency support line',
    ],
  },
];

export default function Programs() {
  return (
    <main className="flex-1 pt-16">
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-orange-500/30">
            What We Offer
          </span>
          <h1 className="text-5xl font-extrabold mb-5">Our Programs</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Every programme is designed with compassion, professional expertise
            and a deep faith conviction — walking alongside people from their
            darkest moments to complete restoration.
          </p>
        </div>
      </section>

      {/* Programs list */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className={`bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden grid lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-last' : ''
              }`}
            >
              {/* Content */}
              <div className="p-8 lg:p-10">
                <span className="inline-block bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {p.tag}
                </span>
                <div className="flex items-center gap-3 mb-4">
                  {p.icon}
                  <h2 className="text-2xl font-extrabold text-[#0f1f3d]">{p.title}</h2>
                </div>
                <p className="text-gray-500 leading-relaxed mb-6">{p.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0f1f3d] hover:bg-[#1e3a6e] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  Get Help <ArrowRight size={14} />
                </Link>
              </div>
              {/* Features */}
              <div className="bg-[#f8fafc] lg:bg-[#0f1f3d]/5 p-8 lg:p-10">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">
                  What's Included
                </h4>
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Take the First Step?</h2>
          <p className="text-orange-100 mb-8">
            Reaching out is the bravest thing you can do. Our team is ready to
            listen and walk with you towards healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 border-2 border-white hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              <Heart size={16} /> Support a Programme
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
