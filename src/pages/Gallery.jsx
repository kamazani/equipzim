import { useState } from 'react';
import { Camera, Play } from 'lucide-react';

const categories = ['All', 'Graduation', 'Outreach', 'Skills', 'Worship', 'Community'];

const items = [
  { id: 1, cat: 'Graduation', type: 'photo', title: 'Skills Programme Graduation 2025', emoji: '🎓' },
  { id: 2, cat: 'Outreach', type: 'photo', title: 'Community Outreach – Mbare', emoji: '🌍' },
  { id: 3, cat: 'Skills', type: 'photo', title: 'Carpentry Workshop in Action', emoji: '🔨' },
  { id: 4, cat: 'Worship', type: 'video', title: 'Sunday Worship Service', emoji: '🙏' },
  { id: 5, cat: 'Community', type: 'photo', title: 'Family Day & Picnic', emoji: '🏡' },
  { id: 6, cat: 'Outreach', type: 'photo', title: 'Youth Awareness Campaign', emoji: '✊' },
  { id: 7, cat: 'Skills', type: 'photo', title: 'Tailoring Class – Harare Centre', emoji: '✂️' },
  { id: 8, cat: 'Graduation', type: 'video', title: 'Testimonies Night – June 2025', emoji: '🎤' },
  { id: 9, cat: 'Community', type: 'photo', title: 'Feeding Programme Volunteers', emoji: '🍽️' },
  { id: 10, cat: 'Outreach', type: 'photo', title: 'Rural Outreach – Masvingo', emoji: '🌾' },
  { id: 11, cat: 'Skills', type: 'photo', title: 'Digital Literacy Class', emoji: '💻' },
  { id: 12, cat: 'Worship', type: 'video', title: 'Prayer & Healing Night', emoji: '🕯️' },
];

const bgPatterns = [
  'from-[#0f1f3d] to-[#1e3a6e]',
  'from-orange-600 to-orange-400',
  'from-[#1e3a6e] to-orange-500',
  'from-orange-400 to-[#0f1f3d]',
];

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? items : items.filter((i) => i.cat === active);

  return (
    <main className="flex-1 pt-16">
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1e3a6e 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Camera size={44} className="text-orange-400 mx-auto mb-5" />
          <h1 className="text-5xl font-extrabold mb-5">Gallery</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            A glimpse into the life of EquipZim — our programmes, our people
            and the moments that remind us why we do what we do.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-colors ${
                  active === c
                    ? 'bg-[#0f1f3d] text-white border-[#0f1f3d]'
                    : 'border-gray-200 text-gray-600 hover:border-[#0f1f3d]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                className={`break-inside-avoid rounded-2xl overflow-hidden bg-gradient-to-br ${bgPatterns[idx % bgPatterns.length]} relative group cursor-pointer`}
                style={{ minHeight: idx % 3 === 0 ? '240px' : '180px' }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-white">
                  <span className="text-4xl mb-3">{item.emoji}</span>
                  {item.type === 'video' && (
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2 group-hover:bg-orange-500 transition-colors">
                      <Play size={18} fill="white" className="text-white" />
                    </div>
                  )}
                  <p className="text-sm font-semibold text-center leading-tight">{item.title}</p>
                  <span className="text-xs text-white/70 mt-1">{item.cat}</span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-10">
            More photos and videos are added regularly. Follow us on social media for daily updates.
          </p>
        </div>
      </section>
    </main>
  );
}
