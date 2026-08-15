import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Understanding the Link Between Trauma and Addiction',
    category: 'Mental Health',
    date: 'July 28, 2025',
    author: 'Dr. Grace Ncube',
    excerpt:
      'Many people who struggle with addiction have experienced significant trauma. Understanding this connection is key to providing effective, compassionate care.',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'How Faith Supports the Recovery Journey',
    category: 'Faith & Recovery',
    date: 'July 14, 2025',
    author: 'Pastor James Moyo',
    excerpt:
      'Spiritual anchoring plays a powerful role in sustained recovery. We explore how biblical principles and community provide the foundation for lasting change.',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Breaking the Stigma Around Mental Health in Africa',
    category: 'Mental Health',
    date: 'June 30, 2025',
    author: 'Tendai Chikwanda',
    excerpt:
      'Mental health remains deeply stigmatised across much of Africa. EquipZim is working to change this through awareness, community dialogue and compassionate care.',
    readTime: '4 min read',
  },
  {
    id: 4,
    title: 'EquipZim Graduates 30 from Skills Programme',
    category: 'News',
    date: 'June 15, 2025',
    author: 'EquipZim Team',
    excerpt:
      'We are celebrating 30 graduates from our carpentry, tailoring and digital skills programmes. Hear their stories and what comes next for these remarkable individuals.',
    readTime: '3 min read',
  },
  {
    id: 5,
    title: 'The Role of Family in the Recovery Process',
    category: 'Family Support',
    date: 'May 22, 2025',
    author: 'Rev. Samuel Dube',
    excerpt:
      'Recovery is rarely a solo journey. Families play a crucial role — for better or worse. We discuss how to support a loved one while also caring for yourself.',
    readTime: '7 min read',
  },
  {
    id: 6,
    title: 'Alcohol Abuse in Zimbabwe: What the Data Says',
    category: 'Research',
    date: 'May 8, 2025',
    author: 'Dr. Grace Ncube',
    excerpt:
      'A look at current statistics around alcohol abuse in Zimbabwe and Southern Africa, and why faith-based organisations are uniquely positioned to respond.',
    readTime: '5 min read',
  },
];

const categoryColors = {
  'Mental Health': 'bg-blue-50 text-blue-600',
  'Faith & Recovery': 'bg-purple-50 text-purple-600',
  'News': 'bg-green-50 text-green-600',
  'Family Support': 'bg-pink-50 text-pink-600',
  'Research': 'bg-yellow-50 text-yellow-700',
};

export default function Blog() {
  return (
    <main className="flex-1 pt-16">
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-orange-500/30">
            Insights & Updates
          </span>
          <h1 className="text-5xl font-extrabold mb-5">Blog & News</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Articles, testimonies, research and updates from the EquipZim
            community. Stay informed, stay encouraged.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <div className="mb-10 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden grid lg:grid-cols-2">
            <div className="bg-gradient-to-br from-[#0f1f3d] to-[#1e3a6e] min-h-48 flex items-center justify-center p-10">
              <p className="text-white text-2xl font-extrabold leading-snug">
                "Understanding the Link Between Trauma and Addiction"
              </p>
            </div>
            <div className="p-8">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${categoryColors['Mental Health']}`}>
                Mental Health
              </span>
              <h2 className="text-2xl font-extrabold text-[#0f1f3d] mb-3">
                {posts[0].title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                <span className="flex items-center gap-1"><User size={12} /> {posts[0].author}</span>
                <span className="flex items-center gap-1"><Calendar size={12} /> {posts[0].date}</span>
              </div>
              <Link
                to="#"
                className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors"
              >
                Read Article <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.slice(1).map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <div
                  className="h-36 flex items-center justify-center px-6"
                  style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
                >
                  <Tag size={28} className="text-orange-400" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit ${categoryColors[p.category] || 'bg-gray-100 text-gray-600'}`}>
                    {p.category}
                  </span>
                  <h3 className="text-[#0f1f3d] font-extrabold text-base mb-2 leading-snug">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{p.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1"><User size={11} /> {p.author}</span>
                    <span className="flex items-center gap-1"><Calendar size={11} /> {p.date}</span>
                  </div>
                  <Link
                    to="#"
                    className="mt-3 inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors"
                  >
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
