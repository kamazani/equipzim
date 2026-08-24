import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

// Simple social icon using SVG path
function SocialIcon({ href, label, path }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
        <path d={path} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0f1f3d] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                EZ
              </div>
              <span className="text-white font-bold text-xl">
                Equip<span className="text-orange-400">Zimbabwe</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              A Christian organisation transforming lives across Africa by
              helping people overcome addiction and supporting mental health
              through faith, community and skills.
            </p>
            <div className="flex gap-3">
              <SocialIcon href="#" label="Facebook" path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              <SocialIcon href="#" label="YouTube" path="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              <SocialIcon href="#" label="Instagram" path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              <SocialIcon href="#" label="Twitter/X" path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/programs', label: 'Our Programs' },
                { to: '/projects', label: 'Skills Projects' },
                { to: '/impact', label: 'Our Impact' },
                { to: '/blog', label: 'Blog & News' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/prayer', label: 'Prayer Requests' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-orange-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              {[
                'Drug Addiction Recovery',
                'Alcohol Abuse Rehabilitation',
                'Sex Addiction Counselling',
                'Mental Health Support',
                'Family Restoration',
                'Aftercare & Follow-up',
              ].map((p) => (
                <li key={p} className="text-gray-400 flex items-start gap-1.5">
                  <span className="text-orange-400 mt-0.5">›</span> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={15} className="text-orange-400 mt-0.5 shrink-0" />
                150 Whitecliff, Harare, Zimbabwe
              </li>
              <li>
                <a href="mailto:info@equipzim.com" className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors">
                  <Mail size={15} className="text-orange-400 shrink-0" />
                  info@equipzim.com
                </a>
              </li>
              <li>
                <a href="tel:+263773590607" className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors">
                  <Phone size={15} className="text-orange-400 shrink-0" />
                  00263 77 359 0607
                </a>
              </li>
            </ul>
            <Link
              to="/donate"
              className="mt-6 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <Heart size={14} />
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} EquipZimbabwe. All rights reserved.</p>
          <p>Built with faith &amp; purpose · Harare, Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
}
