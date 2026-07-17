import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ShoppingBag, Truck, Wrench, Package, Star, ArrowRight, ChevronDown, MapPin, Phone, Mail, Clock, Shield, Award, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TEAM_MEMBERS } from "../data/team";
import { CATEGORIES } from "../data/categories";
import logoFull from "../../imports/logo-full.png";
import logoDiamond from "../../imports/logo-diamond.png";
import heroVideo from "../../imports/videoplayback.webm";

// Images
import model1 from "../../imports/model-1.jpg";
import model2 from "../../imports/model-2.jpg";
import model3 from "../../imports/model-3.jpg";
import model4 from "../../imports/model-4.jpg";
import model6 from "../../imports/model-6.jpg";
import model7 from "../../imports/model-7.jpg";

gsap.registerPlugin(ScrollTrigger);

/* ─── Gold-accent divider ─── */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-4">
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, #c9a84c)` }} />
      <svg width="22" height="22" viewBox="0 0 22 22">
        <rect x="6" y="6" width="10" height="10" fill="none" stroke="#c9a84c" strokeWidth="1" transform="rotate(45 11 11)" />
        <rect x="9" y="9" width="4" height="4" fill="#c9a84c" transform="rotate(45 11 11)" />
      </svg>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, #c9a84c)` }} />
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const promiseRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const collectionsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const certsRef = useRef<HTMLElement>(null);
  const [showroomSlide, setShowroomSlide] = useState(0);
  const showroomImages = [model1, model2, model3, model4, model6, model7];

  /* ─── GSAP ScrollTrigger animations ─── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero video parallax — slow the video down relative to scroll
      if (heroVideoRef.current) {
        gsap.to(heroVideoRef.current, {
          y: 150,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Hero logo entrance animation
      if (heroLogoRef.current) {
        gsap.fromTo(
          heroLogoRef.current,
          { scale: 0.8, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.3 }
        );
      }

      // Hero content fade out on scroll
      const heroContent = heroRef.current?.querySelector(".hero-content");
      if (heroContent) {
        gsap.to(heroContent, {
          y: -60,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "60% top",
            scrub: true,
          },
        });
      }

      // Animate sections on scroll — staggered fade-in with slide
      const sections = [promiseRef, aboutRef, collectionsRef, servicesRef, certsRef];
      sections.forEach((ref) => {
        if (!ref.current) return;
        const children = ref.current.querySelectorAll(".gsap-reveal");
        if (children.length > 0) {
          gsap.fromTo(
            children,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // Parallax for about section image
      const aboutImg = aboutRef.current?.querySelector(".about-parallax-img");
      if (aboutImg) {
        gsap.fromTo(
          aboutImg,
          { y: 40 },
          {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowroomSlide(prev => (prev + 1) % showroomImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [showroomImages.length]);

  return (
    <div className="bg-white">
      {/* ══ HERO — VIDEO BACKGROUND ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105"
            poster={model2}
            onTimeUpdate={(e) => {
              const video = e.currentTarget;
              if (video.currentTime >= 7) {
                video.currentTime = 0;
              }
            }}
          >
            <source src={heroVideo} type="video/webm" />
          </video>
          {/* Dark overlay with subtle gold tint */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(180deg, rgba(10,18,36,0.75) 0%, rgba(10,18,36,0.4) 40%, rgba(10,18,36,0.7) 100%)"
          }} />
          {/* Gold radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse at center 40%, rgba(201,168,76,0.08) 0%, transparent 70%)"
          }} />
        </div>

        {/* Hero content */}
        <div className="hero-content relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div ref={heroLogoRef} className="flex justify-center mb-8 opacity-0">
            <img
              src={logoFull}
              alt="Zewel Studio"
              className="w-full max-w-[460px] h-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Thin gold decorative line */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a84c]/60" />
            <svg width="14" height="14" viewBox="0 0 14 14">
              <rect x="3" y="3" width="8" height="8" fill="#c9a84c" transform="rotate(45 7 7)" opacity="0.8" />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a84c]/60" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/about"
              className="group flex items-center gap-3 bg-[#c9a84c] text-[#0a1224] px-12 py-4 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#dbb85c] transition-all duration-300 shadow-lg hover:shadow-[0_8px_40px_rgba(201,168,76,0.3)]"
            >
              Explore Collections
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/919136193999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white/30 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] px-12 py-4 text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
          <ChevronDown size={16} className="text-[#c9a84c]/60 animate-bounce" />
        </div>
      </section>

      {/* ══ MARQUEE ═══════════════════════════════════════════════════════════ */}
      <div className="bg-[#0a1224] py-4 border-y border-[#c9a84c]/15 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-12 px-12 text-xs tracking-widest uppercase font-semibold text-white/50">
              <span className="text-[#c9a84c]">◆</span> Luxury Jewellery
              <span className="text-[#c9a84c]">◆</span> Borivali Mumbai
              <span className="text-[#c9a84c]">◆</span> Women-Owned Atelier
              <span className="text-[#c9a84c]">◆</span> SGL Certified
              <span className="text-[#c9a84c]">◆</span> 5.0 ★ Rated
              <span className="text-[#c9a84c]">◆</span> Bespoke Creations
            </span>
          ))}
        </div>
      </div>

      {/* ══ OUR PROMISE ═══════════════════════════════════════════════════════ */}
      <section ref={promiseRef} className="py-20 px-6 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-6xl mx-auto">
          <div className="gsap-reveal text-center mb-14">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Our Commitment</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Our Promise</h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "🏅", title: "SGL Certified", desc: "Every piece verified by certified gemological labs" },
              { icon: "💎", title: "Exquisite Designs", desc: "Handcrafted with precision by master artisans" },
              { icon: "🚚", title: "Free Secured Shipping", desc: "Insured delivery straight to your doorstep" },
              { icon: "✨", title: "Free Annual Cleaning", desc: "Complimentary cleaning & polishing every year" },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="gsap-reveal text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-5 rounded-full border-2 border-[#c9a84c]/20 flex items-center justify-center text-3xl group-hover:border-[#c9a84c]/60 group-hover:bg-[#fdf8ef] transition-all duration-500">
                  {icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-[#1f2937] text-sm uppercase tracking-widest font-bold mb-2">{title}</h3>
                <p className="text-[#6b7280] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MEET OUR EXPERTS ══════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#faf9f6] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">The Artisans</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Meet Our Experts</h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((person, i) => (
              <div key={person.name} className="group relative overflow-hidden bg-white shadow-sm border border-[#e5e7eb] hover:shadow-xl hover:border-[#c9a84c]/30 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden bg-[#f0f4f8]">
                  <img src={person.img} alt={person.name} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${person.imgClass || ""}`} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent pt-12">
                  <h3 className="font-['Playfair_Display'] text-xl text-[#1f2937] mb-1">{person.name}</h3>
                  <p className="text-[#c9a84c] text-xs uppercase tracking-widest font-semibold">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT PREVIEW ═══════════════════════════════════════════════════ */}
      <section ref={aboutRef} className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="gsap-reveal relative overflow-hidden">
            <div className="relative shadow-xl">
              <img src={model7} alt="Zewel Studio showroom" className="about-parallax-img w-full h-[560px] object-cover" />
              {/* Gold corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#c9a84c]/40" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#c9a84c]/40" />
            </div>
            <div className="absolute -bottom-10 -right-6 w-44 h-44 border-4 border-[#c9a84c]/20 shadow-lg hidden md:block">
              <img src={model4} alt="Fine jewellery detail" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <div className="gsap-reveal">
              <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">The Zewel Atelier</p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] leading-[1.15] mb-4">
                Where Every Piece<br />Tells a Story
              </h2>
              <GoldDivider />
              <p className="text-[#4b5563] leading-relaxed mt-6 mb-4">
                Zewel Studio is Borivali's finest luxury jewellery showroom — proudly women-owned and built on a belief that jewellery is more than adornment. It is memory, identity, and art.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-8">
                From diamond solitaires to heritage-inspired bangles, every piece in our curated collection is selected for its craftsmanship, provenance, and capacity to move the person who wears it.
              </p>
              <Link to="/about" className="inline-block border-b-2 border-[#c9a84c] text-[#1a3a6b] font-bold text-xs uppercase tracking-widest pb-1 hover:text-[#c9a84c] transition-colors">
                Read Our Story
              </Link>
            </div>
            <div className="gsap-reveal grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#c9a84c]/20">
              {[
                { n: "5+", l: "Years of Craft" },
                { n: "42", l: "5-Star Reviews" },
                { n: "500+", l: "Pieces Curated" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p className="font-['Playfair_Display'] text-3xl text-[#c9a84c] font-bold">{n}</p>
                  <p className="text-[#6b7280] text-[10px] tracking-wide uppercase font-semibold mt-2">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ COLLECTIONS ════════════════════════════════════════════════════════ */}
      <section ref={collectionsRef} className="py-24 px-6 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal text-center mb-16">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Curated Collections</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Explore Our Categories</h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="gsap-reveal group block relative overflow-hidden bg-[#f8fafc] aspect-[4/5]"
              >
                <img src={cat.images[0]?.url || model1} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-['Playfair_Display'] text-xl mb-1">{cat.name}</h3>
                  <p className="text-[#c9a84c] text-[10px] uppercase tracking-widest">View Collection</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SHOWROOM GALLERY ════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-black">
        {showroomImages.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${showroomSlide === i ? "opacity-100" : "opacity-0"}`}>
            <img src={img} alt="Showroom" className="w-full h-full object-cover opacity-60" />
          </div>
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Experience Luxury</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-8">Visit Us in Borivali</h2>
          <a href="#contact" className="bg-[#c9a84c] text-[#0a1224] px-10 py-3.5 text-[11px] uppercase tracking-[0.3em] font-bold shadow-lg hover:bg-[#dbb85c] transition-all duration-300">
            Get Directions
          </a>
        </div>
      </section>

      {/* ══ CERTIFICATIONS ════════════════════════════════════════════════════ */}
      <section ref={certsRef} className="py-24 px-6 bg-white border-y border-[#e5e7eb]">
        <div className="max-w-6xl mx-auto">
          <div className="gsap-reveal text-center mb-16">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Trusted & Verified</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Our Certifications</h2>
            <GoldDivider />
            <p className="text-[#6b7280] text-sm mt-6 max-w-2xl mx-auto">
              Every piece at Zewel Studio is backed by industry-leading certifications, ensuring authenticity, purity, and trust.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "SGL Certified",
                full: "Solitaire Gemological Laboratories",
                desc: "India's premier gem testing laboratory, certifying diamond quality and authenticity.",
                icon: (
                  <svg viewBox="0 0 64 64" className="w-12 h-12">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="#c9a84c" strokeWidth="2" />
                    <path d="M22 32l6 6 14-14" stroke="#c9a84c" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="32" y="52" textAnchor="middle" fill="#c9a84c" fontSize="6" fontWeight="bold">SGL</text>
                  </svg>
                ),
              },
              {
                name: "BIS Hallmark",
                full: "Bureau of Indian Standards",
                desc: "Government hallmarking guaranteeing purity of gold and precious metals.",
                icon: (
                  <svg viewBox="0 0 64 64" className="w-12 h-12">
                    <rect x="10" y="14" width="44" height="36" rx="4" fill="none" stroke="#c9a84c" strokeWidth="2" />
                    <path d="M32 22v12M26 34h12" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" />
                    <text x="32" y="52" textAnchor="middle" fill="#c9a84c" fontSize="6" fontWeight="bold">BIS</text>
                  </svg>
                ),
              },
              {
                name: "IGI Certified",
                full: "International Gemological Institute",
                desc: "World's largest independent gem certification and appraisal institute.",
                icon: (
                  <svg viewBox="0 0 64 64" className="w-12 h-12">
                    <polygon points="32,6 58,24 50,54 14,54 6,24" fill="none" stroke="#c9a84c" strokeWidth="2" />
                    <circle cx="32" cy="32" r="8" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
                    <text x="32" y="52" textAnchor="middle" fill="#c9a84c" fontSize="6" fontWeight="bold">IGI</text>
                  </svg>
                ),
              },
              {
                name: "GIA Standards",
                full: "Gemological Institute of America",
                desc: "The global authority in gemology, setting the standard for diamond grading.",
                icon: (
                  <svg viewBox="0 0 64 64" className="w-12 h-12">
                    <path d="M16 22h32l-6 24H22z" fill="none" stroke="#c9a84c" strokeWidth="2" />
                    <path d="M16 22l8-10h16l8 10" fill="none" stroke="#c9a84c" strokeWidth="2" />
                    <path d="M24 12l8 10 8-10M32 22l-10 24M32 22l10 24" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />
                    <text x="32" y="56" textAnchor="middle" fill="#c9a84c" fontSize="6" fontWeight="bold">GIA</text>
                  </svg>
                ),
              },
            ].map((cert) => (
              <div
                key={cert.name}
                className="gsap-reveal group bg-[#faf9f6] border border-[#e5e7eb] hover:border-[#c9a84c]/40 p-8 text-center hover:shadow-lg transition-all duration-500"
              >
                <div className="flex justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  {cert.icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-lg text-[#1f2937] font-bold mb-1">{cert.name}</h3>
                <p className="text-[#c9a84c] text-[9px] tracking-[0.2em] uppercase font-semibold mb-3">{cert.full}</p>
                <p className="text-[#6b7280] text-xs leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════════════ */}
      <section ref={servicesRef} id="services" className="py-24 px-6 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal text-center mb-16">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">What We Offer</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Our Services</h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShoppingBag, title: "In-Store Shopping", desc: "Browse our curated showroom with personal styling assistance from our experts." },
              { icon: Truck, title: "Home Delivery", desc: "Secure, insured delivery of your precious pieces — directly to your door." },
              { icon: Wrench, title: "Repair & Restoration", desc: "Expert jewellery repair, polishing, and restoration for all precious metals and stones." },
              { icon: Package, title: "Custom Setting", desc: "Professional stone setting, resizing, and bespoke customisation services." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="gsap-reveal bg-white border border-[#e5e7eb] hover:border-[#c9a84c]/30 p-8 hover:shadow-lg transition-all duration-300 text-center h-full group">
                <div className="w-14 h-14 mx-auto bg-[#fdf8ef] rounded-full flex items-center justify-center mb-6 text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-white transition-all duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="font-['Playfair_Display'] text-[#1f2937] text-xl mb-3 font-bold">{title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIAL ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white border-y border-[#e5e7eb]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-[#c9a84c] text-[#c9a84c]" />)}
          </div>
          <blockquote className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1f2937] italic leading-relaxed mb-8 font-medium">
            "Zewel Studio gave me the most breathtaking bridal set I could have ever imagined. The team was warm, knowledgeable, and genuinely passionate. Worth every visit."
          </blockquote>
          <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] uppercase font-bold">Priya S. — Verified Customer, Mumbai</p>
        </div>
      </section>

      {/* ══ CONTACT & MAP ═════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 px-6 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Get in Touch</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Visit Our Showroom</h2>
            <GoldDivider />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white p-10 border border-[#e5e7eb] shadow-sm h-full">
              <h3 className="font-['Playfair_Display'] text-2xl text-[#1a3a6b] font-bold mb-8">Zewel Studio</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fdf8ef] flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[#1f2937] font-semibold text-sm mb-1">Address</p>
                    <p className="text-[#6b7280] text-sm">Borivali (West), Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fdf8ef] flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[#1f2937] font-semibold text-sm mb-1">Phone</p>
                    <a href="tel:09136193999" className="text-[#c9a84c] text-sm hover:underline">09136193999</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fdf8ef] flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[#1f2937] font-semibold text-sm mb-1">Email</p>
                    <a href="mailto:info@zewelstudio.com" className="text-[#c9a84c] text-sm hover:underline">info@zewelstudio.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fdf8ef] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[#1f2937] font-semibold text-sm mb-1">Business Hours</p>
                    <p className="text-[#6b7280] text-sm">Mon-Sat: 10 AM - 8 PM</p>
                    <p className="text-[#6b7280] text-sm">Sun: 11 AM - 7 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-[#c9a84c]/15">
                <a 
                  href="https://wa.me/919136193999" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 bg-[#25d366] text-white px-8 py-3.5 text-xs tracking-widest uppercase font-bold hover:bg-[#20b858] transition-colors shadow-md"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book an Appointment
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white border border-[#e5e7eb] shadow-sm overflow-hidden h-full min-h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0!2d72.85!3d19.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBorivali%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zewel Studio Location - Borivali West, Mumbai"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
