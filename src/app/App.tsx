import { useState, useEffect, useRef } from "react";
import logoDiamond from "../imports/logo-diamond.png";
import logoFull from "../imports/logo-full.png";
import visitText from "../imports/visit-text.png";
import team1 from "../imports/team-1.jpg";
import team2 from "../imports/team-2.jpg";
import team3 from "../imports/team-3.jpg";
import team4 from "../imports/team-4.jpg";
import model1 from "../imports/model-1.jpg";
import model2 from "../imports/model-2.jpg";
import model3 from "../imports/model-3.jpg";
import model4 from "../imports/model-4.jpg";
import model5 from "../imports/model-5.jpg";
import model6 from "../imports/model-6.jpg";
import model7 from "../imports/model-7.jpg";
import bracelet1 from "../imports/bracelet-1.jpg";
import bracelet2 from "../imports/bracelet-2.jpg";
import bracelet3 from "../imports/bracelet-3.jpg";
import bracelet4 from "../imports/bracelet-4.jpg";
import bracelet5 from "../imports/bracelet-5.jpg";
import bracelet6 from "../imports/bracelet-6.jpg";
import bracelet7 from "../imports/bracelet-7.jpg";
import bracelet8 from "../imports/bracelet-8.jpg";
import bracelet9 from "../imports/bracelet-9.jpg";
import bracelet10 from "../imports/bracelet-10.jpg";
import bracelet11 from "../imports/bracelet-11.jpg";
import bracelet12 from "../imports/bracelet-12.jpg";
import { Phone, Instagram, MapPin, Clock, Star, Wifi, Car, CreditCard, Wrench, Package, ShoppingBag, Truck, ChevronDown, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Logo SVG (PNG version) ───────────────────────────────────────────────────
function DiamondLogo({ size = 48, animated = false, className = "" }: { size?: number; animated?: boolean; className?: string }) {
  return (
    <img 
      src={logoDiamond} 
      alt="Zewel Studio Diamond" 
      style={{ width: size, height: 'auto', objectFit: 'contain' }}
      className={`\${className} \${animated ? 'animate-[pulse_2s_ease-in-out_infinite]' : ''}`} 
    />
  );
}

// Full brand lockup: ZEWEL ◆ STUDIO
function BrandLockup({ size = "md", inverted = false, className = "" }: { size?: "sm" | "md" | "lg" | "xl"; inverted?: boolean; className?: string }) {
  const configs = { sm: 60, md: 100, lg: 150, xl: 220 };
  const h = configs[size];
  return (
    <img 
      src={logoFull} 
      alt="Zewel Studio" 
      style={{ height: h, objectFit: 'contain' }}
      className={className}
    />
  );
}

// ── Scroll-reveal hook ───────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold });
    o.observe(el);
    return () => o.disconnect();
  }, [threshold]);
  return { ref, visible: v };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`}
    >
      {children}
    </div>
  );
}

// ── Ornamental divider ───────────────────────────────────────────────────────
function Ornament({ light = false }: { light?: boolean }) {
  const c = light ? "#c9a84c" : "#c9a84c";
  return (
    <div className="flex items-center justify-center gap-4 my-4">
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${c})` }} />
      <svg width="22" height="22" viewBox="0 0 22 22">
        <rect x="6" y="6" width="10" height="10" fill="none" stroke={c} strokeWidth="1" transform="rotate(45 11 11)" />
        <rect x="9" y="9" width="4" height="4" fill={c} transform="rotate(45 11 11)" />
      </svg>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${c})` }} />
    </div>
  );
}

// ── Category data ────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "bracelets", label: "Bracelets", labelHi: "कंगन", tagline: "Worn With Confidence",
    cover: "https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?w=800&h=1000&fit=crop&auto=format",
    images: [
      { url: bracelet1, alt: "Diamond bracelet on velvet" },
      { url: bracelet2, alt: "Diamond and sapphire bracelet on velvet" },
      { url: bracelet3, alt: "Diamond tennis bracelet on velvet" },
      { url: bracelet4, alt: "Rose gold diamond bracelet on velvet" },
      { url: bracelet5, alt: "Silver diamond bracelet on velvet" },
      { url: bracelet6, alt: "Classic diamond tennis bracelet" },
      { url: bracelet7, alt: "Baguette diamond bracelet" },
      { url: bracelet8, alt: "Three-stone style diamond bracelet" },
      { url: bracelet9, alt: "Eternity diamond bracelet on velvet" },
      { url: bracelet10, alt: "Rose gold bezel set bracelet" },
      { url: bracelet11, alt: "Hexagonal link diamond bracelet" },
      { url: bracelet12, alt: "Classic diamond tennis bracelet" },
    ],
  },
  {
    id: "earrings", label: "Earrings", labelHi: "झुमके", tagline: "Frame Your Beauty",
    cover: "https://images.unsplash.com/photo-1722410180651-efd51636f260?w=800&h=1000&fit=crop&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?w=500&h=500&fit=crop&auto=format", alt: "Earrings on black cloth" },
      { url: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?w=500&h=500&fit=crop&auto=format", alt: "Gold earrings on black" },
      { url: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=500&h=500&fit=crop&auto=format", alt: "Silver earring collection" },
      { url: "https://images.unsplash.com/photo-1665159882377-385d68d2bdff?w=500&h=500&fit=crop&auto=format", alt: "Earring collection" },
      { url: "https://images.unsplash.com/photo-1722410180651-efd51636f260?w=500&h=500&fit=crop&auto=format", alt: "Woman wearing earrings" },
      { url: "https://images.unsplash.com/photo-1674329042475-de1a95b4ca62?w=500&h=500&fit=crop&auto=format", alt: "Earrings on black case" },
      { url: "https://images.unsplash.com/photo-1588444650733-d0767b753fc8?w=500&h=500&fit=crop&auto=format", alt: "Silver diamond earring" },
      { url: "https://images.unsplash.com/photo-1588444650700-fd887f15a9e7?w=500&h=500&fit=crop&auto=format", alt: "Floral gold earrings" },
      { url: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=500&h=500&fit=crop", alt: "Diamond stud earrings" },
      { url: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&h=500&fit=crop", alt: "Gold hoop earrings" },
      { url: "https://images.unsplash.com/photo-1599643477874-5c36ea60a5e7?w=500&h=500&fit=crop", alt: "Placeholder 11" },
      { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop", alt: "Placeholder 12" },
    ],
  },
  {
    id: "necklaces", label: "Necklaces", labelHi: "हार", tagline: "Grace Around Your Neck",
    cover: "https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?w=800&h=1000&fit=crop&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=500&h=500&fit=crop&auto=format", alt: "Gold beaded necklace" },
      { url: "https://images.unsplash.com/photo-1722410180687-b05b50922362?w=500&h=500&fit=crop&auto=format", alt: "Necklace on mannequin" },
      { url: "https://images.unsplash.com/photo-1722410180644-5955f83ec8b1?w=500&h=500&fit=crop&auto=format", alt: "Elegant necklace on table" },
      { url: "https://images.unsplash.com/photo-1611583027838-515a1087afdb?w=500&h=500&fit=crop&auto=format", alt: "Diamond pendant necklace" },
      { url: "https://images.unsplash.com/photo-1601121141461-920cb1993441?w=500&h=500&fit=crop&auto=format", alt: "Gold necklace worn" },
      { url: "https://images.unsplash.com/photo-1600862754152-80a263dd564f?w=500&h=500&fit=crop&auto=format", alt: "Gold red beaded necklace" },
      { url: "https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?w=500&h=500&fit=crop&auto=format", alt: "Woman wearing gold necklace" },
      { url: "https://images.unsplash.com/photo-1705326454924-f6777522b030?w=500&h=500&fit=crop&auto=format", alt: "Mannequin with gold necklace" },
      { url: "https://images.unsplash.com/photo-1599643478524-fb5062a7edcb?w=500&h=500&fit=crop", alt: "Pearl and gold necklace" },
      { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop", alt: "Vintage style necklace" },
      { url: "https://images.unsplash.com/photo-1599643477874-5c36ea60a5e7?w=500&h=500&fit=crop", alt: "Placeholder 11" },
      { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop", alt: "Placeholder 12" },
    ],
  },
];

// ── Product card ─────────────────────────────────────────────────────────────
function ProductCard({ url, alt, index }: { url: string; alt: string; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group relative overflow-hidden bg-[#0f1e38] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={url}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-115" : "scale-100"}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#060e1f]/90 via-[#060e1f]/20 to-transparent transition-opacity duration-400 ${hovered ? "opacity-100" : "opacity-0"}`} />
      </div>
      {/* Corner ornament */}
      <div className={`absolute top-3 left-3 w-5 h-5 border-t border-l border-[#c9a84c] transition-all duration-300 ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} />
      <div className={`absolute top-3 right-3 w-5 h-5 border-t border-r border-[#c9a84c] transition-all duration-300 ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} />
      <div className={`absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#c9a84c] transition-all duration-300 ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} />
      <div className={`absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#c9a84c] transition-all duration-300 ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} />
      <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-400 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
        <p className="text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase font-['Lato']">{alt}</p>
      </div>
    </div>
  );
}

// ── Splash Screen ────────────────────────────────────────────────────────────
function Splash({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 100);
    const t2 = setTimeout(() => setStage(2), 1000);
    const t3 = setTimeout(() => setStage(3), 2600);
    const t4 = setTimeout(onComplete, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060e1f] transition-all duration-700 ${stage === 3 ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}`}>
      <div className={`transition-all duration-1000 ease-out ${stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <DiamondLogo size={350} animated={stage >= 1 && stage < 3} />
      </div>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeCat, setActiveCat] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [splashDone, setSplashDone] = useState(false);
  const [showroomSlide, setShowroomSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const editorialRef = useRef<HTMLElement>(null);
  const editorialImgRef = useRef<HTMLImageElement>(null);
  const showroomImages = [model1, model2, model3, model4, model6, model7];

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 200);
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  // GSAP ScrollTrigger parallax
  useEffect(() => {
    if (!splashDone) return;

    // Hero parallax — background image moves slower
    if (heroRef.current) {
      const heroImg = heroRef.current.querySelector("img");
      if (heroImg) {
        gsap.to(heroImg, {
          y: 120,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }

    // Editorial parallax — model2 image rises as you scroll
    if (editorialRef.current && editorialImgRef.current) {
      gsap.fromTo(editorialImgRef.current,
        { y: 60 },
        {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: editorialRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, [splashDone]);

  // Showroom auto-slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setShowroomSlide(prev => (prev + 1) % showroomImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [showroomImages.length]);

  const nav = (id: string) => { setMobileOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  const cat = CATEGORIES[activeCat];

  return (
    <>
      {!splashDone && <Splash onComplete={() => setSplashDone(true)} />}
      <div className={`min-h-screen bg-[#060e1f] text-white font-['Lato'] overflow-x-hidden transition-opacity duration-1000 ${splashDone ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>

      {/* ══ NAVBAR ═══════════════════════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#060e1f]/96 backdrop-blur-md shadow-[0_1px_0_rgba(201,168,76,0.15)]" : "bg-transparent"
        }`}
      >
        {/* Top micro-bar */}
        <div className={`border-b border-[#c9a84c]/10 transition-all duration-500 ${scrolled ? "h-0 overflow-hidden" : "h-auto"}`}>
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-between py-2">
            <p className="text-[#c9a84c]/60 text-[10px] tracking-[0.35em] uppercase">Borivali, Mumbai · Open Daily</p>
            <div className="flex items-center gap-5">
              <a href="https://www.instagram.com/zewelstudio" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#c9a84c] transition-colors"><Instagram size={13} /></a>
              <span className="text-white/20">|</span>
              <a href="tel:09136193999" className="text-[#c9a84c]/60 hover:text-[#c9a84c] text-[10px] tracking-widest transition-colors">09136193999</a>
            </div>
          </div>
        </div>

        {/* Main nav row */}
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="grid grid-cols-3 items-center">
            {/* Left nav links */}
            <div className="hidden md:flex items-center gap-8">
              {["Collections", "Services"].map(l => (
                <button key={l} onClick={() => nav(l.toLowerCase())}
                  className="text-white/50 hover:text-[#c9a84c] text-[11px] tracking-[0.28em] uppercase transition-colors duration-200">
                  {l}
                </button>
              ))}
            </div>

            {/* Center: brand lockup */}
            <div className="flex justify-center">
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <BrandLockup size={scrolled ? "sm" : "md"} />
              </button>
            </div>

            {/* Right nav links */}
            <div className="hidden md:flex items-center justify-end gap-8">
              {["About", "Contact"].map(l => (
                <button key={l} onClick={() => nav(l.toLowerCase())}
                  className="text-white/50 hover:text-[#c9a84c] text-[11px] tracking-[0.28em] uppercase transition-colors duration-200">
                  {l}
                </button>
              ))}
              <a href="https://wa.me/919136193999?text=Hi%20Zewel%20Studio!" target="_blank" rel="noopener noreferrer"
                className="border border-[#c9a84c]/50 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#060e1f] px-5 py-2 text-[10px] tracking-[0.28em] uppercase transition-all duration-300">
                Enquire
              </a>
            </div>

            {/* Mobile hamburger */}
            <button className="md:hidden justify-self-end flex flex-col gap-1.5 w-6" onClick={() => setMobileOpen(!mobileOpen)}>
              <span className={`block h-px bg-[#c9a84c] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`block h-px bg-white/50 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-[#c9a84c] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#060e1f]/98 border-t border-[#c9a84c]/15 px-8 py-6 flex flex-col gap-5">
            {["Collections", "Services", "About", "Contact"].map(l => (
              <button key={l} onClick={() => nav(l.toLowerCase())} className="text-white/60 hover:text-[#c9a84c] text-[11px] tracking-[0.28em] uppercase text-left transition-colors">
                {l}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Layered background with model photo */}
        <div className="absolute inset-0">
          <img
            src={model2}
            alt="Luxury diamond jewellery"
            className="w-full h-full object-cover object-[50%_30%] opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060e1f]/90 via-[#060e1f]/40 to-[#060e1f]/90" />
          {/* Radial gold glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />
        </div>

        {/* Content */}
        <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1500 ease-out ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#c9a84c]" />
            <p className="text-[#c9a84c] text-[10px] tracking-[0.6em] uppercase">Est. Borivali · Mumbai</p>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#c9a84c]" />
          </div>

          {/* Giant Logo Lockup */}
          <div className="flex justify-center mb-8">
            <img 
              src={logoFull} 
              alt="Zewel Studio" 
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>

          <p className="font-['Playfair_Display'] text-[#c9a84c] text-xl md:text-2xl italic mb-6 mt-8">
            The Art of Fine Jewellery
          </p>

          <Ornament />

          <p className="text-white/60 text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-12 mt-6">
            Purveyors of Diamonds, Gold & Heritage Masterpieces
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => nav("collections")}
              className="group flex items-center gap-3 bg-[#c9a84c] text-[#060e1f] px-10 py-4 text-[11px] tracking-[0.35em] uppercase font-bold hover:bg-[#e0bf6a] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(201,168,76,0.35)]"
            >
              Explore Collections
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/919136193999"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white/20 text-white/70 hover:border-[#c9a84c] hover:text-[#c9a84c] px-10 py-4 text-[11px] tracking-[0.35em] uppercase transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.845L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.747-.518-5.31-1.423l-.38-.225-3.762.891.928-3.672-.247-.389A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <button onClick={() => nav("collections")} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#c9a84c] transition-colors group">
          <span className="text-[9px] tracking-[0.5em] uppercase">Discover</span>
          <ChevronDown size={16} className="animate-bounce" />
        </button>
      </section>

      {/* ══ MARQUEE ═══════════════════════════════════════════════════════════ */}
      <div className="relative border-y border-[#c9a84c]/20 overflow-hidden py-3 bg-[#060e1f]">
        <div className="flex animate-[marquee_28s_linear_infinite] whitespace-nowrap">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-8 px-8 text-[11px] tracking-[0.4em] uppercase text-[#c9a84c]/70">
              <span className="text-[#c9a84c]">◆</span> Luxury Jewellery
              <span className="text-[#c9a84c]">◆</span> Borivali Mumbai
              <span className="text-[#c9a84c]">◆</span> Women-Owned Atelier
              <span className="text-[#c9a84c]">◆</span> LGBTQ+ Friendly
              <span className="text-[#c9a84c]">◆</span> 5.0 ★ Rated
              <span className="text-[#c9a84c]">◆</span> Bespoke Creations
              <span className="text-[#c9a84c]">◆</span> Repair & Restoration
              <span className="text-[#c9a84c]">◆</span> Free Parking
            </span>
          ))}
        </div>
      </div>

      {/* ══ ABOUT / ATELIER ═══════════════════════════════════════════════════ */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Image side - asymmetric stack */}
          <Reveal className="relative">
            <div className="relative">
              <img
                src={model7}
                alt="Zewel Studio showroom"
                className="w-full h-[560px] object-cover"
              />
              {/* Floating accent image */}
              <div className="absolute -bottom-10 -right-6 w-44 h-44 border-4 border-[#060e1f]">
                <img
                  src={model4}
                  alt="Fine jewellery detail"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute top-6 -left-6 bg-[#060e1f] border border-[#c9a84c]/25 px-6 py-5">
                <p className="font-['Cinzel'] text-2xl text-[#c9a84c]">Heritage</p>
                <p className="text-white/50 text-[10px] tracking-widest uppercase mt-1">Craftsmanship & Art</p>
              </div>
            </div>
          </Reveal>

          {/* Text side */}
          <div>
            <Reveal>
              <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-5">The Zewel Atelier</p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white leading-[1.15] mb-4">
                Where Every Piece<br />
                <em className="text-[#c9a84c]">Tells a Story</em>
              </h2>
              <Ornament />
              <p className="text-white/50 leading-relaxed mt-6 mb-4">
                Zewel Studio is Borivali&apos;s finest luxury jewellery showroom — proudly women-owned and built on a belief that jewellery is more than adornment. It is memory, identity, and art.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                From diamond solitaires to heritage-inspired bangles, every piece in our curated collection is selected for its craftsmanship, provenance, and capacity to move the person who wears it. Our team of experts guides you through the selection with warmth, knowledge, and zero pressure.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { n: "5+", l: "Years of Craft" },
                  { n: "42", l: "Five-Star Reviews" },
                  { n: "500+", l: "Pieces Curated" },
                ].map(({ n, l }) => (
                  <div key={l} className="border-l border-[#c9a84c]/25 pl-5">
                    <p className="font-['Cinzel'] text-2xl text-[#c9a84c]">{n}</p>
                    <p className="text-white/40 text-[10px] tracking-wide uppercase mt-1">{l}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {["Women-Owned", "LGBTQ+ Friendly", "Free Parking", "Free Wi-Fi"].map(tag => (
                  <span key={tag} className="border border-[#c9a84c]/25 text-[#c9a84c]/70 text-[10px] tracking-[0.25em] uppercase px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

            {/* ══ TEAM SECTION ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#030912] border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-5">The Artisans</p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-4">
                Meet Our <em className="text-[#c9a84c]">Experts</em>
              </h2>
              <Ornament />
            </div>
          </Reveal>
          
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Monika Damani", img: team4 },
              { name: "CA Rajkumar Damani", img: team3 },
              { name: "Akash Dhami", img: team2 },
              { name: "Avani Dhami", img: team1 }
            ].map((person, i) => (
              <Reveal key={person.name} delay={i * 100}>
                <div className="group relative overflow-hidden bg-[#060e1f] border border-[#c9a84c]/10 hover:border-[#c9a84c]/40 transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden bg-[#0a1628]">
                    <img 
                      src={person.img} 
                      alt={person.name} 
                      className={`w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ${person.name === 'Akash Dhami' ? 'object-[50%_20%]' : ''}`} 
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#060e1f] via-[#060e1f]/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-['Playfair_Display'] text-xl text-white mb-1">{person.name}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ══ SHOWROOM GALLERY ════════════════════════════════════════════════════ */}
      <section className="relative py-0 overflow-hidden bg-[#030912]">
        {/* Section header */}
        <div className="text-center pt-20 pb-12 px-6">
          <Reveal>
            <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-5">Our Space</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-4">
              The <em className="text-[#c9a84c]">Showroom</em>
            </h2>
            <Ornament />
          </Reveal>
        </div>

        {/* Full-width slideshow */}
        <div className="relative h-[70vh] min-h-[450px] max-h-[800px] overflow-hidden">
          {showroomImages.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-[1.5s] ease-in-out ${
                showroomSlide === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <img
                src={img}
                alt={`Zewel Studio showroom ${i + 1}`}
                className="w-full h-full object-cover object-[50%_25%]"
              />
              {/* Top fade */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030912] to-transparent" />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030912] via-[#030912]/70 to-transparent" />
              {/* Side vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#030912_100%)] opacity-60" />
            </div>
          ))}

          {/* Overlay content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-16">
            <div className="max-w-7xl mx-auto flex items-end justify-between">
              <div>
                <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase mb-2">Experience Luxury</p>
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white">
                  Visit Us in <em className="text-[#c9a84c]">Borivali</em>
                </h3>
              </div>

              {/* Slide indicators */}
              <div className="flex gap-2">
                {showroomImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setShowroomSlide(i)}
                    className={`w-8 h-[2px] transition-all duration-500 ${
                      showroomSlide === i ? "bg-[#c9a84c] w-12" : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ COLLECTIONS ════════════════════════════════════════════════════════ */}
      <section id="collections" className="py-24 bg-[#030912]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-5">Curated Collections</p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-4">
                Jewellery for <em className="text-[#c9a84c]">Every Milestone</em>
              </h2>
              <Ornament />
            </div>
          </Reveal>

          {/* Tab strip */}
          <Reveal delay={100}>
            <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-14 px-2 snap-x snap-mandatory border-b border-[#c9a84c]/15">
              {CATEGORIES.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(i)}
                  className={`relative min-w-max py-4 px-6 text-center transition-all duration-300 snap-center ${
                    activeCat === i
                      ? "text-[#c9a84c]"
                      : "text-white/40 hover:text-[#c9a84c]"
                  }`}
                >
                  <div className={`text-[11px] tracking-[0.25em] uppercase font-bold`}>{c.label}</div>
                  <div className="text-[9px] tracking-wider opacity-70 mt-0.5">{c.labelHi}</div>
                  {/* Active Indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a84c] transition-transform duration-300 ${activeCat === i ? 'scale-x-100' : 'scale-x-0'}`} />
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active category hero strip */}
          <Reveal delay={50}>
            <div className="flex items-center justify-between mb-8 px-1">
              <div>
                <h3 className="font-['Playfair_Display'] text-2xl text-white">{cat.label}</h3>
                <p className="text-[#c9a84c] text-sm italic mt-1">{cat.tagline}</p>
              </div>
              <a
                href="https://wa.me/919136193999?text=Hi%20Zewel%20Studio!%20I%20am%20interested%20in%20your%20jewellery."
                target="_blank" rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#060e1f] px-6 py-2.5 text-[10px] tracking-[0.3em] uppercase transition-all duration-300"
              >
                Enquire <ArrowRight size={12} />
              </a>
            </div>
          </Reveal>

          {/* Image grid — uniformly showing all items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {cat.images.map((img, i) => (
              <ProductCard key={i} url={img.url} alt={img.alt} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/919136193999?text=Hi%20Zewel%20Studio!%20I%20would%20like%20to%20know%20more%20about%20your%20jewellery."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#060e1f] px-12 py-4 text-[11px] tracking-[0.35em] uppercase transition-all duration-400 hover:shadow-[0_0_40px_rgba(201,168,76,0.2)]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.845L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.747-.518-5.31-1.423l-.38-.225-3.762.891.928-3.672-.247-.389A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══ FULL-BLEED EDITORIAL FEATURE ══════════════════════════════════════ */}
      <section ref={editorialRef} className="relative h-[85vh] min-h-[600px] md:h-screen md:min-h-[800px] overflow-hidden flex items-center justify-center">
        <img
          ref={editorialImgRef}
          src={model6}
          alt="Luxury jewellery editorial"
          className="absolute inset-0 w-full h-full object-cover object-[50%_20%] scale-110"
        />
        {/* Gradient overlays for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e1f]/85 via-[#060e1f]/40 to-[#060e1f]/20" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#060e1f] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060e1f] to-transparent" />
        <Reveal className="relative z-10 max-w-xl px-10 md:ml-24">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-4">The Zewel Promise</p>
          <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white leading-tight mb-6">
            Crafted for<br /><em className="text-[#c9a84c]">Generations</em>
          </h3>
          <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
            Each piece carries the weight of intention — designed not for today alone, but to be treasured, passed down, and loved beyond a lifetime.
          </p>
                    <button onClick={() => nav("contact")}
            className="group flex items-center gap-3 text-[#c9a84c] text-[11px] tracking-[0.35em] uppercase border-b border-[#c9a84c]/30 pb-1 hover:border-[#c9a84c] transition-all duration-300">
            Visit Our Showroom <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Reveal>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════════════ */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-5">What We Offer</p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-4">
                Our <em className="text-[#c9a84c]">Services</em>
              </h2>
              <Ornament />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShoppingBag, n: "01", title: "In-Store Shopping", desc: "Browse our curated showroom with personal styling assistance from our experts." },
              { icon: Truck, n: "02", title: "Home Delivery", desc: "Secure, insured delivery of your precious pieces — directly to your door." },
              { icon: Wrench, n: "03", title: "Repair & Restoration", desc: "Expert jewellery repair, polishing, and restoration for all precious metals and stones." },
              { icon: Package, n: "04", title: "Custom Setting", desc: "Professional stone setting, resizing, and bespoke customisation services." },
            ].map(({ icon: Icon, n, title, desc }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="group relative border border-[#c9a84c]/12 p-8 hover:border-[#c9a84c]/35 transition-all duration-500 hover:bg-[#c9a84c]/[0.03]">
                  <p className="font-['Cinzel'] text-5xl text-[#c9a84c]/10 absolute top-5 right-6 group-hover:text-[#c9a84c]/20 transition-colors duration-500">{n}</p>
                  <div className="w-12 h-12 border border-[#c9a84c]/25 flex items-center justify-center mb-6 group-hover:border-[#c9a84c]/60 group-hover:bg-[#c9a84c]/8 transition-all duration-400">
                    <Icon size={18} className="text-[#c9a84c]" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-white text-xl mb-3">{title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AMENITIES STRIP ═══════════════════════════════════════════════════ */}
      <section className="border-y border-[#c9a84c]/10 bg-[#030912] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-10">
              {[
                { icon: Wifi, l: "Free Wi-Fi" },
                { icon: Car, l: "Free Parking" },
                { icon: CreditCard, l: "All Payments" },
                { icon: Star, l: "LGBTQ+ Friendly" },
              ].map(({ icon: Icon, l }) => (
                <div key={l} className="flex flex-col items-center gap-3 group">
                  <div className="w-11 h-11 border border-[#c9a84c]/20 flex items-center justify-center group-hover:border-[#c9a84c]/50 group-hover:bg-[#c9a84c]/8 transition-all duration-300">
                    <Icon size={17} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase group-hover:text-white/70 transition-colors">{l}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#c9a84c]/8 pt-10 flex flex-wrap justify-center gap-x-10 gap-y-4">
              {["Google Pay", "NFC Payments", "Credit & Debit Cards", "In-Store Pick-up", "Gender-Neutral Restrooms", "Walk-ins Welcome"].map(t => (
                <span key={t} className="flex items-center gap-2 text-white/30 text-[10px] tracking-widest uppercase">
                  <span className="w-1 h-1 bg-[#c9a84c] rotate-45 inline-block" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ TESTIMONIAL ═══════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(201,168,76,0.05)_0%,transparent_70%)]" />
        <Reveal className="relative max-w-3xl mx-auto text-center">
          <DiamondLogo size={36} className="mx-auto mb-8 opacity-50" />
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#c9a84c] text-[#c9a84c]" />)}
          </div>
          <blockquote className="font-['Playfair_Display'] text-2xl md:text-3xl text-white/80 italic leading-relaxed mb-8">
            &ldquo;Zewel Studio gave me the most breathtaking bridal set I could have ever imagined. The team was warm, knowledgeable, and genuinely passionate. Worth every visit.&rdquo;
          </blockquote>
          <Ornament />
          <p className="text-[#c9a84c]/60 text-[10px] tracking-[0.4em] uppercase mt-4">Priya S. — Verified Customer, Mumbai</p>
        </Reveal>
      </section>

      {/* ══ CONTACT ═══════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-28 bg-[#030912] px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-5">Find Us</p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-4">
                Visit <em className="text-[#c9a84c]">Zewel Studio</em>
              </h2>
              <Ornament />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin, title: "Location",
                body: <><p className="text-white/50 text-sm leading-relaxed">Borivali (West)<br />Mumbai, Maharashtra<br />India</p><p className="text-[#c9a84c] text-[10px] tracking-widest uppercase mt-3">Free On-Site Parking</p></>
              },
              {
                icon: Clock, title: "Hours",
                body: <div className="text-sm space-y-2"><p className="text-white/50">Mon – Sat <span className="text-white ml-2">10 AM – 8 PM</span></p><p className="text-white/50">Sunday <span className="text-white ml-2">11 AM – 7 PM</span></p><p className="text-[#c9a84c] text-[10px] tracking-widest uppercase mt-3">Walk-ins Always Welcome</p></div>
              },
              {
                icon: Phone, title: "Connect",
                body: <div className="space-y-3">
                  <a href="tel:09136193999" className="flex items-center gap-3 text-white/50 hover:text-[#c9a84c] text-sm transition-colors"><Phone size={14}/> 09136193999</a>
                  <a href="https://wa.me/919136193999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-[#c9a84c] text-sm transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.845L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.747-.518-5.31-1.423l-.38-.225-3.762.891.928-3.672-.247-.389A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                    WhatsApp
                  </a>
                  <a href="https://www.instagram.com/zewelstudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-[#c9a84c] text-sm transition-colors"><Instagram size={14}/> @zewelstudio</a>
                </div>
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="border border-[#c9a84c]/12 p-8 hover:border-[#c9a84c]/30 transition-colors duration-400 h-full">
                  <Icon size={18} className="text-[#c9a84c] mb-5" />
                  <h3 className="font-['Playfair_Display'] text-white text-xl mb-5">{title}</h3>
                  {body}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-14">
              <a
                href="https://wa.me/919136193999?text=Hi%20Zewel%20Studio!%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#060e1f] px-14 py-4.5 text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-[#e0bf6a] transition-all duration-300 hover:shadow-[0_8px_50px_rgba(201,168,76,0.3)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.845L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.747-.518-5.31-1.423l-.38-.225-3.762.891.928-3.672-.247-.389A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Book an Appointment
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#020810] py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <BrandLockup size="md" />
            <div className="flex items-center gap-6">
              <a href="tel:09136193999" className="text-white/30 hover:text-[#c9a84c] transition-colors"><Phone size={16}/></a>
              <a href="https://www.instagram.com/zewelstudio" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#c9a84c] transition-colors"><Instagram size={16}/></a>
              <a href="https://wa.me/919136193999" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#c9a84c] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.845L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.747-.518-5.31-1.423l-.38-.225-3.762.891.928-3.672-.247-.389A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              </a>
            </div>
          </div>
          <div className="border-t border-[#c9a84c]/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-[10px] tracking-[0.3em]">© 2025 ZEWEL STUDIO · BORIVALI, MUMBAI</p>
            <p className="text-white/20 text-[10px] tracking-[0.3em]">ज्वेल स्टूडियो · ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>

      {/* ══ FLOATING CONTACT BUTTONS — BOTTOM RIGHT ═══════════════════════════ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Call */}
        <a
          href="tel:09136193999"
          aria-label="Call Zewel Studio"
          className="group flex items-center gap-0 hover:gap-3 overflow-hidden w-12 hover:w-36 h-12 bg-[#060e1f] border border-[#c9a84c]/50 text-[#c9a84c] rounded-full justify-end px-3.5 transition-all duration-400 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_28px_rgba(201,168,76,0.25)] hover:border-[#c9a84c]"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-150 ml-auto">Call Us</span>
          <Phone size={17} className="shrink-0 ml-3 group-hover:ml-0" />
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/919136193999?text=Hi%20Zewel%20Studio!%20I%20am%20interested%20in%20your%20jewellery."
          target="_blank" rel="noopener noreferrer"
          aria-label="WhatsApp Zewel Studio"
          className="group flex items-center gap-0 hover:gap-3 overflow-hidden w-12 hover:w-40 h-12 bg-[#25D366] text-white rounded-full justify-end px-3.5 transition-all duration-400 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_28px_rgba(37,211,102,0.35)]"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-150 ml-auto">WhatsApp</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 ml-3 group-hover:ml-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.845L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.747-.518-5.31-1.423l-.38-.225-3.762.891.928-3.672-.247-.389A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </a>
      </div>

      {/* ══ STYLES ════════════════════════════════════════════════════════════ */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #060e1f; }
        ::-webkit-scrollbar-thumb { background: #c9a84c; border-radius: 2px; }
                .scale-115 { transform: scale(1.15); }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      </div>
    </>
  );
}
