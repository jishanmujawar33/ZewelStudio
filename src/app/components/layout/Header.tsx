import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Phone, Instagram, MapPin, ChevronDown, Menu, X } from "lucide-react";
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
      {/* Top micro-bar */}
      <div className={`bg-[#f0f4f8] transition-all duration-300 overflow-hidden ${scrolled ? "h-0" : "h-10"}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#6b7280] text-[10px] uppercase tracking-widest font-medium">
            <MapPin size={12} />
            <span>Borivali, Mumbai · Open Daily</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/zewelstudio" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#2563eb] transition-colors">
              <Instagram size={14} />
            </a>
            <span className="text-[#e5e7eb]">|</span>
            <a href="tel:09136193999" className="flex items-center gap-2 text-[#6b7280] hover:text-[#2563eb] text-[10px] font-medium tracking-widest transition-colors">
              <Phone size={12} />
              09136193999
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#1a3a6b] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20">
          <div className="grid grid-cols-3 items-center h-full">
            
            {/* Left Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-white/80 hover:text-white text-[11px] tracking-widest uppercase font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-white/80 hover:text-white text-[11px] tracking-widest uppercase font-medium transition-colors">About</Link>
            </div>

            {/* Center Logo */}
            <div className="flex justify-center col-span-2 md:col-span-1 justify-self-start md:justify-self-center">
              <Link to="/">
                <img 
                  src={logoFull} 
                  alt="Zewel Studio" 
                  className="h-20 md:h-24 object-contain transition-all duration-300"
                  style={{ filter: "brightness(0) invert(1)" }} 
                />
              </Link>
            </div>

            {/* Right Nav */}
            <div className="flex items-center justify-end gap-6">
              <div className="hidden md:flex items-center gap-8 relative"
                   onMouseEnter={() => setDropdownOpen(true)}
                   onMouseLeave={() => setDropdownOpen(false)}>
                <button className="flex items-center gap-1 text-white/80 hover:text-white text-[11px] tracking-widest uppercase font-medium transition-colors py-8">
                  Collections <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                {/* Dropdown menu */}
                <div className={`absolute top-[100%] right-0 w-64 bg-white shadow-xl border border-[#e5e7eb] rounded-sm overflow-hidden transition-all duration-300 origin-top ${dropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                  <div className="py-2">
                    {CATEGORIES.map((cat) => (
                      <Link 
                        key={cat.slug} 
                        to={`/category/${cat.slug}`}
                        className="block px-6 py-3 text-[13px] text-[#4b5563] hover:text-[#2563eb] hover:bg-[#f0f4f8] transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <a href="/#contact" className="hidden md:flex items-center justify-center text-white hover:text-[#c9a84c] transition-colors p-2" title="Store Locator">
                <MapPin size={20} />
              </a>

              <a href="https://wa.me/919136193999" target="_blank" rel="noopener noreferrer" 
                 className="hidden md:block bg-white text-[#1a3a6b] hover:bg-[#f0f4f8] px-5 py-2.5 text-[10px] tracking-widest uppercase font-bold transition-all shadow-sm">
                Enquire
              </a>

              {/* Mobile menu button */}
              <button 
                className="md:hidden text-white p-2 -mr-2"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#e5e7eb] shadow-lg max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link to="/" className="text-[#1f2937] text-sm uppercase tracking-wider font-semibold border-b border-[#f3f4f6] pb-3">Home</Link>
            <Link to="/about" className="text-[#1f2937] text-sm uppercase tracking-wider font-semibold border-b border-[#f3f4f6] pb-3">About</Link>
            
            <div className="pt-2">
              <span className="text-[#9ca3af] text-[10px] uppercase tracking-widest font-bold mb-3 block">Collections</span>
              <div className="flex flex-col gap-3 pl-2">
                {CATEGORIES.map(cat => (
                  <Link key={cat.slug} to={`/category/${cat.slug}`} className="text-[#4b5563] text-sm">{cat.name}</Link>
                ))}
              </div>
            </div>
            
            <div className="pt-6 mt-4 border-t border-[#e5e7eb]">
              <a href="https://wa.me/919136193999" className="flex justify-center bg-[#1a3a6b] text-white py-3 text-xs uppercase tracking-widest font-bold rounded-sm">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
