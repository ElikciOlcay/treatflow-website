import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="md:col-span-2 lg:col-span-1">
            <img
              src="/images/logos/treatflow-logo.png"
              alt="Treatflow Logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Dein digitaler Studio-Assistent. Made in Austria.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/treatflow.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Funktionen</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terminkalender" className="text-gray-400 hover:text-white transition-colors">Terminkalender</Link></li>
              <li><Link href="/online-buchungen" className="text-gray-400 hover:text-white transition-colors">Online-Buchungen</Link></li>
              <li><Link href="/kundenverwaltung" className="text-gray-400 hover:text-white transition-colors">Kundenverwaltung</Link></li>
              <li><Link href="/formulare" className="text-gray-400 hover:text-white transition-colors">Formulare</Link></li>
              <li><Link href="/behandlungsdokumentation" className="text-gray-400 hover:text-white transition-colors">Dokumentation</Link></li>
              <li><Link href="/nachrichtenautomatisierung" className="text-gray-400 hover:text-white transition-colors">Nachrichten</Link></li>
              <li><Link href="/nisv-dokumentation" className="text-gray-400 hover:text-white transition-colors">NiSV-Dokumentation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Branchen</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kosmetikstudio-software" className="text-gray-400 hover:text-white transition-colors">Kosmetikstudios</Link></li>
              <li><Link href="/schoenheitssalon-software" className="text-gray-400 hover:text-white transition-colors">Schönheitssalons</Link></li>
              <li><Link href="/laser-haarentfernung-software" className="text-gray-400 hover:text-white transition-colors">Laser & IPL</Link></li>
              <li><Link href="/permanent-makeup-software" className="text-gray-400 hover:text-white transition-colors">Permanent Makeup</Link></li>
              <li><Link href="/aesthetische-medizin-software" className="text-gray-400 hover:text-white transition-colors">Ästhetische Medizin</Link></li>
              <li><Link href="/nagelstudio-software" className="text-gray-400 hover:text-white transition-colors">Nagelstudios</Link></li>
              <li><Link href="/lash-studio-software" className="text-gray-400 hover:text-white transition-colors">Lash Studios</Link></li>
              <li><Link href="/tattoo-studio-software" className="text-gray-400 hover:text-white transition-colors">Tattoo Studios</Link></li>
              <li><Link href="/spa-wellness-software" className="text-gray-400 hover:text-white transition-colors">Spa & Wellness</Link></li>
              <li><Link href="/massage-software" className="text-gray-400 hover:text-white transition-colors">Massage</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produkt</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#pricing" className="text-gray-400 hover:text-white transition-colors">Preise</a></li>
              <li><Link href="/kosmetikstudio-software-vergleich" className="text-gray-400 hover:text-white transition-colors">Software-Vergleich</Link></li>
              <li><Link href="/kundenkartei-software" className="text-gray-400 hover:text-white transition-colors">Kundenkartei Software</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/website-fuer-kosmetikstudios" className="text-gray-400 hover:text-white transition-colors">Studio-Website</Link></li>
              <li><a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Kostenlos testen</a></li>
              <li><a href="https://app.treatflow.io/auth/login" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ueber-uns" className="text-gray-400 hover:text-white transition-colors">Über uns</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/hygieneplan-kosmetikstudio-pdf" className="text-gray-400 hover:text-white transition-colors">Hygieneplan PDF</Link></li>
              <li><Link href="/kontakt" className="text-gray-400 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
            <h3 className="font-semibold mb-4 mt-8">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">Impressum</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Treatflow. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
