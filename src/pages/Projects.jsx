import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Wrench, Scissors, Laptop, Leaf, BookOpen, ChefHat } from 'lucide-react';

const projects = [
  {
    icon: <Wrench size={28} className="text-orange-500" />,
    title: 'Construction & Carpentry',
    duration: '6 months',
    desc: 'Participants learn practical construction and carpentry skills — from basic joinery to furniture making — giving them a marketable trade upon graduation.',
    outcomes: ['Nationally recognised certificate', 'Placement assistance', 'Tool starter kit on completion'],
  },
  {
    icon: <Scissors size={28} className="text-orange-500" />,
    title: 'Tailoring & Fashion Design',
    duration: '4 months',
    desc: 'A popular programme especially for women in recovery, covering garment making, alterations and basic fashion design. Many graduates go on to start their own tailoring businesses.',
    outcomes: ['Sewing machine provided on placement', 'Small business mentorship', 'Market linkages'],
  },
  {
    icon: <Laptop size={28} className="text-orange-500" />,
    title: 'Digital Skills & IT',
    duration: '3 months',
    desc: 'Basic computer literacy, Microsoft Office, internet skills and introduction to freelancing. Equipping participants for the digital economy and remote work opportunities.',
    outcomes: ['Certificate in Digital Literacy', 'Access to computer lab', 'Freelancing platform registration'],
  },
  {
    icon: <Leaf size={28} className="text-orange-500" />,
    title: 'Urban Agriculture & Gardening',
    duration: '4 months',
    desc: 'Teaching sustainable food production, market gardening and permaculture principles. Graduates can grow food for themselves and sell surplus produce.',
    outcomes: ['Starter seeds & tools', 'Plot allocation at community garden', 'Market access support'],
  },
  {
    icon: <ChefHat size={28} className="text-orange-500" />,
    title: 'Catering & Food Business',
    duration: '3 months',
    desc: 'Practical cooking, food hygiene, catering management and small food business operations. Perfect for those passionate about food and entrepreneurship.',
    outcomes: ['Food hygiene certificate', 'Business plan development', 'Startup capital referrals'],
  },
  {
    icon: <BookOpen size={28} className="text-orange-500" />,
    title: 'Literacy & Life Skills',
    duration: 'Ongoing',
    desc: 'For those who need foundational education, this programme covers reading, writing, numeracy and essential life skills like financial management, parenting and conflict resolution.',
    outcomes: ['Adult literacy certification', 'Financial literacy training', 'Ongoing mentorship'],
  },
];

export default function Projects() {
  return (
    <main className="flex-1 pt-16">
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-orange-500/30">
            Skills & Livelihood
          </span>
          <h1 className="text-5xl font-extrabold mb-5">Skills Projects</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Recovery is just the beginning. Our skills development projects
            equip graduates with practical trades and life skills so they can
            support themselves, their families and their communities.
          </p>
        </div>
      </section>

      {/* Why skills */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Our Approach</span>
          <h2 className="text-4xl font-extrabold text-[#0f1f3d] mt-2 mb-5">
            Equipping for Life After Recovery
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
            One of the greatest barriers to sustained recovery is the lack of
            economic opportunity. When people have no income and no skills, the
            risk of relapse is high. EquipZim's skills projects address this
            directly — giving recovering individuals a reason to stay clean and a
            means to build a dignified future.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-10 pb-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="p-7 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                      {p.icon}
                    </div>
                    <span className="text-xs font-semibold bg-[#0f1f3d]/10 text-[#0f1f3d] px-3 py-1 rounded-full">
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="text-[#0f1f3d] font-extrabold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-orange-500 font-bold mt-0.5">✓</span> {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-7 py-4 border-t border-gray-100 bg-[#f8fafc]">
                  <Link
                    to="/contact"
                    className="text-sm font-semibold text-orange-500 hover:text-orange-600 flex items-center gap-1 transition-colors"
                  >
                    Apply / Enquire <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Help Us Equip More Lives
          </h2>
          <p className="text-blue-200 mb-8">
            Your donation funds tools, training materials and instructor salaries
            that make these life-changing programmes possible.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            <Heart size={18} /> Fund a Skills Project
          </Link>
        </div>
      </section>
    </main>
  );
}
