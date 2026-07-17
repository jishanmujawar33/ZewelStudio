import { Link } from "react-router";
import { Phone, Instagram, MapPin, Mail, Clock } from "lucide-react";
import logoFull from "../../../imports/logo-full.png";

const CATEGORIES = [
  { name: "Mangalsutra", slug: "mangalsutra" },
  { name: "Ladies Ring", slug: "ladies-ring" },
  { name: "Mens Collection", slug: "mens-collection" },
  { name: "Necklace", slug: "necklace" },
  { name: "Pendant", slug: "pendant" },
  { name: "Earrings", slug: "earrings" },
  { name: "Bangles & Bracelets", slug: "bangles-bracelets" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-20 pb-8 px-6 text-white/70">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Centered Logo */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <img 
            src={logoFull} 
            alt="Zewel Studio" 
            className="h-16 mb-4 object-contain"
            style={{ filter: "brightness(0) invert(1)" }} 
          />
          <p className="text-[#93c5fd] text-[10px] tracking-[0.4em] uppercase font-medium">Luxury Jewellery · Borivali, Mumbai</p>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: About */}
          <div>
            <h4 className="text-white text-[11px] tracking-[0.2em] uppercase font-bold mb-6">About Us</h4>
            <p className="text-sm leading-relaxed mb-6">
              Zewel Studio is Borivali's finest luxury jewellery showroom — proudly women-owned and built on a belief that jewellery is memory, identity, and art.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/zewelstudio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2563eb] hover:border-[#2563eb] hover:text-white transition-all">
                <Instagram size={14} />
              </a>
              <a href="https://wa.me/919136193999" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#25d366] hover:border-[#25d366] hover:text-white transition-all">
                <Phone size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-[11px] tracking-[0.2em] uppercase font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">Our Story</Link></li>
              <li><a href="/#services" className="text-sm hover:text-white transition-colors">Services</a></li>
              <li><a href="/#contact" className="text-sm hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div>
            <h4 className="text-white text-[11px] tracking-[0.2em] uppercase font-bold mb-6">Collections</h4>
            <ul className="space-y-3">
              {CATEGORIES.map(cat => (
                <li key={cat.slug}>
                  <Link to={`/category/${cat.slug}`} className="text-sm hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white text-[11px] tracking-[0.2em] uppercase font-bold mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#93c5fd] shrink-0 mt-0.5" />
                <span className="text-sm">Borivali (West),<br/>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#93c5fd] shrink-0" />
                <a href="tel:09136193999" className="text-sm hover:text-white transition-colors">09136193999</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#93c5fd] shrink-0" />
                <a href="mailto:info@zewelstudio.com" className="text-sm hover:text-white transition-colors">info@zewelstudio.com</a>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <Clock size={16} className="text-[#93c5fd] shrink-0 mt-0.5" />
                <span className="text-sm">Mon-Sat: 10 AM - 8 PM<br/>Sun: 11 AM - 7 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-[10px] tracking-widest uppercase">
            © 2025 Zewel Studio. All Rights Reserved.
          </p>
          <div className="flex gap-4 opacity-60">
            {/* Payment icons could go here */}
            <span className="text-[10px] tracking-wider uppercase">Secure Payments</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
