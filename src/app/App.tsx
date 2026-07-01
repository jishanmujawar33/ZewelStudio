import { useState, useEffect, useRef } from "react";
import { Phone, Instagram, MapPin, Clock, Star, Wifi, Car, CreditCard, Wrench, Package, ShoppingBag, Truck } from "lucide-react";

// ── Scroll-reveal hook ──────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ── Data ────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "rings",
    label: "Rings",
    labelHi: "अंगूठियाँ",
    images: [
      { url: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=600&h=600&fit=crop&auto=format", alt: "Three gold studded rings" },
      { url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop&auto=format", alt: "Silver diamond ring on black box" },
      { url: "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?w=600&h=600&fit=crop&auto=format", alt: "Diamond ring on black velvet" },
      { url: "https://images.unsplash.com/photo-1613945407943-59cd755fd69e?w=600&h=600&fit=crop&auto=format", alt: "Diamond ring on red textile" },
      { url: "https://images.unsplash.com/photo-1613945409199-1b5527d31fe8?w=600&h=600&fit=crop&auto=format", alt: "Solitaire ring on red textile" },
      { url: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=600&h=600&fit=crop&auto=format", alt: "Gold diamond ring on white textile" },
      { url: "https://images.unsplash.com/photo-1514612497953-05d1e5e171fa?w=600&h=600&fit=crop&auto=format", alt: "Clear gemstone statement ring" },
      { url: "https://images.unsplash.com/photo-1605100804567-1ffe942b5cd6?w=600&h=600&fit=crop&auto=format", alt: "Silver diamond heart pendant ring" },
    ],
  },
  {
    id: "necklaces",
    label: "Necklaces",
    labelHi: "हार",
    images: [
      { url: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop&auto=format", alt: "Gold and purple beaded necklace" },
      { url: "https://images.unsplash.com/photo-1722410180687-b05b50922362?w=600&h=600&fit=crop&auto=format", alt: "Necklace on mannequin display" },
      { url: "https://images.unsplash.com/photo-1722410180644-5955f83ec8b1?w=600&h=600&fit=crop&auto=format", alt: "Elegant necklace on table" },
      { url: "https://images.unsplash.com/photo-1611583027838-515a1087afdb?w=600&h=600&fit=crop&auto=format", alt: "Silver diamond pendant necklace" },
      { url: "https://images.unsplash.com/photo-1601121141461-920cb1993441?w=600&h=600&fit=crop&auto=format", alt: "Person wearing gold necklace" },
      { url: "https://images.unsplash.com/photo-1600862754152-80a263dd564f?w=600&h=600&fit=crop&auto=format", alt: "Gold and red beaded necklace" },
      { url: "https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?w=600&h=600&fit=crop&auto=format", alt: "Woman wearing gold necklace and earrings" },
      { url: "https://images.unsplash.com/photo-1705326454924-f6777522b030?w=600&h=600&fit=crop&auto=format", alt: "White mannequin with gold necklace" },
    ],
  },
  {
    id: "earrings",
    label: "Earrings",
    labelHi: "झुमके",
    images: [
      { url: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?w=600&h=600&fit=crop&auto=format", alt: "Earrings on black cloth" },
      { url: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?w=600&h=600&fit=crop&auto=format", alt: "Gold and silver ring earrings" },
      { url: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&h=600&fit=crop&auto=format", alt: "Silver earring collection" },
      { url: "https://images.unsplash.com/photo-1665159882377-385d68d2bdff?w=600&h=600&fit=crop&auto=format", alt: "Collection of earrings" },
      { url: "https://images.unsplash.com/photo-1722410180651-efd51636f260?w=600&h=600&fit=crop&auto=format", alt: "Woman wearing statement earrings" },
      { url: "https://images.unsplash.com/photo-1674329042475-de1a95b4ca62?w=600&h=600&fit=crop&auto=format", alt: "Earrings on luxury black case" },
      { url: "https://images.unsplash.com/photo-1588444650733-d0767b753fc8?w=600&h=600&fit=crop&auto=format", alt: "Silver diamond studded ring earring" },
      { url: "https://images.unsplash.com/photo-1588444650700-fd887f15a9e7?w=600&h=600&fit=crop&auto=format", alt: "Silver and gold floral earrings" },
    ],
  },
  {
    id: "bracelets",
    label: "Bracelets",
    labelHi: "कंगन",
    images: [
      { url: "https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?w=600&h=600&fit=crop&auto=format", alt: "Person wearing gold bracelet" },
      { url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop&auto=format", alt: "Silver gemstone bracelet on black" },
      { url: "https://images.unsplash.com/photo-1626122509259-ea8e0a136ada?w=600&h=600&fit=crop&auto=format", alt: "Gold diamond ring bracelet" },
      { url: "https://images.unsplash.com/photo-1689367436442-76c859315008?w=600&h=600&fit=crop&auto=format", alt: "Close up gold ring bracelet" },
      { url: "https://images.unsplash.com/photo-1655707063513-a08dad26440e?w=600&h=600&fit=crop&auto=format", alt: "Gold ring on white surface" },
      { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop&auto=format", alt: "Gold and silver beaded bracelet" },
      { url: "https://images.unsplash.com/photo-1689367436629-1d288f1e23b6?w=600&h=600&fit=crop&auto=format", alt: "Gold bracelet close up" },
      { url: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?w=600&h=600&fit=crop&auto=format", alt: "Gold and red beaded bracelet" },
    ],
  },
  {
    id: "bangles",
    label: "Bangles",
    labelHi: "चूड़ियाँ",
    images: [
      { url: "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=600&h=600&fit=crop&auto=format", alt: "Gold bangles on velvet cushion" },
      { url: "https://images.unsplash.com/photo-1611598935678-c88dca238fce?w=600&h=600&fit=crop&auto=format", alt: "Gold diamond studded bangles" },
      { url: "https://images.unsplash.com/photo-1606293926249-ed22e446d476?w=600&h=600&fit=crop&auto=format", alt: "Gold and silver bangles on white" },
      { url: "https://images.unsplash.com/photo-1679156272446-30738eb5c4e7?w=600&h=600&fit=crop&auto=format", alt: "Gold bangles on table" },
      { url: "https://images.unsplash.com/photo-1653227908236-36813ab5c30a?w=600&h=600&fit=crop&auto=format", alt: "Gold bangle on cloth" },
      { url: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?w=600&h=600&fit=crop&auto=format", alt: "Traditional gold beaded bangle" },
      { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop&auto=format", alt: "Gold beaded traditional bangle" },
      { url: "https://images.unsplash.com/photo-1612945578381-6481cdd73b0a?w=600&h=600&fit=crop&auto=format", alt: "Gold and red floral bangle" },
    ],
  },
];

// ── Subcomponents ───────────────────────────────────────────────────────────
function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-3">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]" />
    </div>
  );
}

function ProductCard({ url, alt }: { url: string; alt: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden rounded-sm cursor-pointer group bg-[#e8e4da]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={url}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
          loading="lazy"
        />
      </div>
      <div
        className={`absolute inset-0 bg-[#0d1b3e]/60 flex items-end p-3 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      >
        <span className="text-[#c9a84c] font-['Lato'] text-xs tracking-widest uppercase">{alt}</span>
      </div>
      <div className="absolute top-2 right-2 w-6 h-6 border border-[#c9a84c]/50 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function App() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-['Lato'] bg-[#f8f6f1] text-[#0d1b3e] overflow-x-hidden">

      {/* ── Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navScrolled ? "bg-[#0d1b3e]/98 shadow-[0_2px_30px_rgba(0,0,0,0.4)] py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span className="font-['Cinzel'] text-[#c9a84c] text-xl tracking-[0.15em] font-semibold">ZEWEL</span>
            <span className="font-['Lato'] text-white/70 text-[9px] tracking-[0.3em] uppercase">Studio</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Collections", "Services", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-white/80 hover:text-[#c9a84c] text-xs tracking-[0.2em] uppercase transition-colors duration-200 font-['Lato']"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/zewelstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#c9a84c] transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="tel:09136193999"
              className="hidden md:flex items-center gap-2 border border-[#c9a84c]/60 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d1b3e] px-4 py-1.5 text-xs tracking-widest uppercase transition-all duration-200"
            >
              <Phone size={12} /> Call Us
            </a>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-px bg-[#c9a84c] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-px bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px bg-[#c9a84c] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d1b3e] border-t border-[#c9a84c]/20 px-6 py-4 flex flex-col gap-4">
            {["Collections", "Services", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-white/80 hover:text-[#c9a84c] text-xs tracking-[0.2em] uppercase text-left"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1b3e]"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&h=1000&fit=crop&auto=format"
            alt="Luxury jewellery showcase"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/80 via-[#0d1b3e]/60 to-[#0d1b3e]" />
        </div>

        {/* Corner ornaments */}
        <div className="absolute top-24 left-8 w-16 h-16 border-t border-l border-[#c9a84c]/40" />
        <div className="absolute top-24 right-8 w-16 h-16 border-t border-r border-[#c9a84c]/40" />
        <div className="absolute bottom-12 left-8 w-16 h-16 border-b border-l border-[#c9a84c]/40" />
        <div className="absolute bottom-12 right-8 w-16 h-16 border-b border-r border-[#c9a84c]/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-['Lato'] text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-6 animate-[fadeInDown_1s_ease_both]">
            ✦ Luxury Jewellery Store & Showroom ✦
          </p>
          <h1 className="font-['Cinzel'] text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.08em] leading-none mb-2 animate-[fadeIn_1.2s_ease_both]">
            ZEWEL
          </h1>
          <p className="font-['Cinzel'] text-[#c9a84c] text-3xl sm:text-4xl md:text-5xl tracking-[0.25em] mb-2 animate-[fadeIn_1.4s_ease_both]">
            STUDIO
          </p>
          <p className="font-['Playfair_Display'] text-white/50 text-base italic mb-8 animate-[fadeIn_1.6s_ease_both]">
            ज्वेल स्टूडियो — बोरीवली, मुंबई
          </p>
          <GoldDivider />
          <p className="text-white/60 text-sm tracking-widest uppercase mt-6 mb-10 animate-[fadeIn_1.8s_ease_both]">
            Borivali, Mumbai · Est. Women-Owned · ⭐ 5.0 (42 Reviews)
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_2s_ease_both]">
            <button
              onClick={() => scrollTo("collections")}
              className="bg-[#c9a84c] text-[#0d1b3e] px-10 py-3.5 text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#e0bf6a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
            >
              Explore Collections
            </button>
            <a
              href="https://wa.me/919136193999"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white/80 hover:border-[#c9a84c] hover:text-[#c9a84c] px-10 py-3.5 text-xs tracking-[0.3em] uppercase transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c]/60 to-transparent" />
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="bg-[#c9a84c] overflow-hidden py-2.5">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {Array(3).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-6 px-6 text-[#0d1b3e] text-xs tracking-[0.3em] uppercase font-bold">
              <span>✦ Luxury Jewellery</span>
              <span>✦ Borivali Mumbai</span>
              <span>✦ Women-Owned</span>
              <span>✦ LGBTQ+ Friendly</span>
              <span>✦ 5.0 ★ Rating</span>
              <span>✦ In-Store & Delivery</span>
              <span>✦ Repair Services</span>
              <span>✦ Free Parking</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <RevealSection>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Our Story</p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#0d1b3e] leading-tight mb-6">
                Where Craftsmanship<br />
                <em className="text-[#c9a84c]">Meets Elegance</em>
              </h2>
              <GoldDivider />
              <p className="text-[#5a6070] leading-relaxed mt-6 mb-4">
                Zewel Studio is Borivali&apos;s premier luxury jewellery showroom, proudly women-owned and committed to celebrating beauty in every form. We curate exquisite pieces — from timeless diamond solitaires to vibrant traditional bangles — for every milestone and every occasion.
              </p>
              <p className="text-[#5a6070] leading-relaxed mb-8">
                Whether you are searching for a bridal set, a gift, or simply a piece that speaks to your soul, our expert team guides you through a world of unmatched craftsmanship and personalised service.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Star, label: "5.0 Rating", sub: "42 Reviews" },
                  { icon: ShoppingBag, label: "Women-Owned", sub: "Est. Business" },
                  { icon: MapPin, label: "Borivali", sub: "Mumbai, India" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-[#c9a84c]/40 flex items-center justify-center">
                      <Icon size={16} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-[#0d1b3e] text-sm font-bold tracking-wide">{label}</p>
                      <p className="text-[#5a6070] text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#c9a84c]/20 rounded-sm" />
              <img
                src="https://images.unsplash.com/photo-1722410180687-b05b50922362?w=700&h=850&fit=crop&auto=format"
                alt="Zewel Studio showroom display"
                className="w-full h-[480px] object-cover rounded-sm"
              />
              <div className="absolute bottom-6 left-6 bg-[#0d1b3e]/90 backdrop-blur-sm px-5 py-3 border-l-2 border-[#c9a84c]">
                <p className="text-[#c9a84c] text-xs tracking-widest uppercase">Visit Us</p>
                <p className="text-white text-sm font-bold">Borivali, Mumbai</p>
                <p className="text-white/60 text-xs">Open Daily · Free Parking</p>
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── Collections ── */}
      <section id="collections" className="py-24 bg-[#0d1b3e]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Our Collections</p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-3">
                Curated for <em className="text-[#c9a84c]">Every Occasion</em>
              </h2>
              <GoldDivider />
            </div>
          </RevealSection>

          {/* Category Tabs */}
          <RevealSection>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(idx)}
                  className={`px-6 py-2.5 text-xs tracking-[0.25em] uppercase transition-all duration-300 ${
                    activeCategory === idx
                      ? "bg-[#c9a84c] text-[#0d1b3e] font-bold"
                      : "border border-white/20 text-white/60 hover:border-[#c9a84c]/60 hover:text-[#c9a84c]"
                  }`}
                >
                  {cat.label}
                  <span className="block text-[9px] tracking-widest opacity-70 mt-0.5">{cat.labelHi}</span>
                </button>
              ))}
            </div>
          </RevealSection>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {CATEGORIES[activeCategory].images.map((img, idx) => (
              <RevealSection key={`${activeCategory}-${idx}`}>
                <ProductCard url={img.url} alt={img.alt} />
              </RevealSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/919136193999?text=Hi%20Zewel%20Studio!%20I%20would%20like%20to%20enquire%20about%20your%20jewellery%20collections."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d1b3e] px-10 py-3.5 text-xs tracking-[0.3em] uppercase transition-all duration-300"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">What We Offer</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#0d1b3e] mb-3">
              Our <em className="text-[#c9a84c]">Services</em>
            </h2>
            <GoldDivider />
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: ShoppingBag, title: "In-Store Shopping", desc: "Browse our curated showroom in Borivali with expert assistance." },
            { icon: Truck, title: "Home Delivery", desc: "Secure and insured delivery of your precious pieces to your doorstep." },
            { icon: Wrench, title: "Repair Services", desc: "Expert restoration and repair for all types of fine jewellery." },
            { icon: Package, title: "Installation", desc: "Professional jewellery setting and customisation services." },
          ].map(({ icon: Icon, title, desc }) => (
            <RevealSection key={title}>
              <div className="border border-[#c9a84c]/20 p-8 hover:border-[#c9a84c]/60 hover:shadow-[0_0_30px_rgba(201,168,76,0.08)] transition-all duration-400 group text-center">
                <div className="w-12 h-12 border border-[#c9a84c]/40 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#c9a84c]/10 transition-colors duration-300">
                  <Icon size={20} className="text-[#c9a84c]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-[#0d1b3e] text-lg mb-3">{title}</h3>
                <p className="text-[#5a6070] text-sm leading-relaxed">{desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── Amenities ── */}
      <section className="py-16 bg-[#0d1b3e] px-6">
        <RevealSection>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">Why Choose Us</p>
              <h2 className="font-['Playfair_Display'] text-3xl text-white">
                A Showroom Built for <em className="text-[#c9a84c]">Comfort</em>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Wifi, label: "Free Wi-Fi" },
                { icon: Car, label: "Free Parking" },
                { icon: CreditCard, label: "All Payments" },
                { icon: Star, label: "LGBTQ+ Friendly" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3 p-6 border border-white/10 hover:border-[#c9a84c]/40 transition-colors duration-300">
                  <Icon size={24} className="text-[#c9a84c]" />
                  <span className="text-white/80 text-xs tracking-widest uppercase text-center">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-4">
              {["Credit Cards", "Debit Cards", "Google Pay", "NFC Payments", "In-Store Pick-up", "Gender-Neutral Restrooms"].map((item) => (
                <div key={item} className="text-center">
                  <div className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45 mx-auto mb-2" />
                  <span className="text-white/50 text-[10px] tracking-wide uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-24 px-6">
        <RevealSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-[#c9a84c] text-[#c9a84c]" />)}
            </div>
            <blockquote className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#0d1b3e] italic leading-relaxed mb-8">
              &ldquo;Zewel Studio gave me the most beautiful bridal set I could have ever imagined. The staff was warm, patient, and truly passionate about jewellery.&rdquo;
            </blockquote>
            <GoldDivider />
            <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mt-4">Priya S. — Verified Customer, Mumbai</p>
          </div>
        </RevealSection>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 bg-[#0d1b3e] px-6">
        <RevealSection>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Get In Touch</p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-3">
                Visit <em className="text-[#c9a84c]">Zewel Studio</em>
              </h2>
              <GoldDivider />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-white/10 p-8 hover:border-[#c9a84c]/40 transition-colors duration-300">
                <MapPin size={20} className="text-[#c9a84c] mb-4" />
                <h3 className="text-white font-['Playfair_Display'] text-xl mb-3">Location</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Borivali (West),<br />
                  Mumbai, Maharashtra<br />
                  <span className="text-[#c9a84c] mt-2 block">Free Parking Available</span>
                </p>
              </div>

              <div className="border border-white/10 p-8 hover:border-[#c9a84c]/40 transition-colors duration-300">
                <Clock size={20} className="text-[#c9a84c] mb-4" />
                <h3 className="text-white font-['Playfair_Display'] text-xl mb-3">Hours</h3>
                <div className="text-white/60 text-sm space-y-1">
                  <p>Monday – Saturday: <span className="text-white">10 AM – 8 PM</span></p>
                  <p>Sunday: <span className="text-white">11 AM – 7 PM</span></p>
                  <p className="text-[#c9a84c] mt-2">Walk-ins Welcome</p>
                </div>
              </div>

              <div className="border border-white/10 p-8 hover:border-[#c9a84c]/40 transition-colors duration-300">
                <Phone size={20} className="text-[#c9a84c] mb-4" />
                <h3 className="text-white font-['Playfair_Display'] text-xl mb-3">Contact</h3>
                <div className="space-y-3">
                  <a
                    href="tel:09136193999"
                    className="flex items-center gap-2 text-white/60 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    <Phone size={14} /> 09136193999
                  </a>
                  <a
                    href="https://wa.me/919136193999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.845L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.747-.518-5.31-1.423l-.38-.225-3.762.891.928-3.672-.247-.389A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                    WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/zewelstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    <Instagram size={14} /> @zewelstudio
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://wa.me/919136193999?text=Hi%20Zewel%20Studio!%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c9a84c] text-[#0d1b3e] px-12 py-4 text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#e0bf6a] transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#060f22] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-['Cinzel'] text-[#c9a84c] text-2xl tracking-[0.2em] font-semibold">ZEWEL STUDIO</p>
              <p className="text-white/40 text-xs tracking-widest mt-1">ज्वेल स्टूडियो · Borivali, Mumbai</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:09136193999" className="text-white/50 hover:text-[#c9a84c] transition-colors">
                <Phone size={16} />
              </a>
              <a href="https://www.instagram.com/zewelstudio" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#c9a84c] transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://wa.me/919136193999" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#c9a84c] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.845L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.747-.518-5.31-1.423l-.38-.225-3.762.891.928-3.672-.247-.389A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              </a>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 text-center">
            <p className="text-white/30 text-xs tracking-widest">© 2025 Zewel Studio. All rights reserved. Borivali, Mumbai.</p>
          </div>
        </div>
      </footer>

      {/* ── Floating Buttons (bottom-left) ── */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* Call Button */}
        <a
          href="tel:09136193999"
          className="group flex items-center gap-0 hover:gap-3 overflow-hidden w-12 hover:w-32 bg-[#0d1b3e] border border-[#c9a84c]/60 text-[#c9a84c] rounded-full h-12 px-3.5 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(13,27,62,0.5)]"
          aria-label="Call Zewel Studio"
        >
          <Phone size={18} className="shrink-0" />
          <span className="text-xs tracking-widest uppercase whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919136193999?text=Hi%20Zewel%20Studio!%20I%20am%20interested%20in%20your%20jewellery%20collection."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-0 hover:gap-3 overflow-hidden w-12 hover:w-36 bg-[#25D366] text-white rounded-full h-12 px-3.5 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
          aria-label="WhatsApp Zewel Studio"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.845L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.747-.518-5.31-1.423l-.38-.225-3.762.891.928-3.672-.247-.389A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          <span className="text-xs tracking-widest uppercase whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">WhatsApp</span>
        </a>
      </div>

      {/* ── Keyframes via style tag ── */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0d1b3e; }
        ::-webkit-scrollbar-thumb { background: #c9a84c; border-radius: 2px; }
      `}</style>
    </div>
  );
}
