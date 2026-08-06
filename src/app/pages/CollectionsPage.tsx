import { useRef, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { CATEGORIES } from "../data/categories";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CollectionsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title + subtitle entrance
      const heroChildren = heroRef.current?.querySelectorAll(".gsap-reveal");
      if (heroChildren && heroChildren.length > 0) {
        gsap.fromTo(
          heroChildren,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }

      // Grid cards staggered reveal
      const cards = gridRef.current?.querySelectorAll(".category-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              end: "top 30%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // CTA section
      const ctaChildren = ctaRef.current?.querySelectorAll(".gsap-reveal");
      if (ctaChildren && ctaChildren.length > 0) {
        gsap.fromTo(
          ctaChildren,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#f8fafc] border-b border-[#e5e7eb] py-4 px-6">
        <div className="max-w-7xl mx-auto text-xs text-[#6b7280] font-medium tracking-wide">
          <Link to="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1f2937]">Collections</span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-[#f5f0e8] via-[#faf8f4] to-white overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div
            className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-[0.04]"
            style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
          />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-[0.03]"
            style={{ background: "radial-gradient(circle, #163275, transparent)" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="gsap-reveal text-[#c9a84c] text-[10px] tracking-[0.4em] font-bold uppercase mb-5 flex items-center justify-center gap-2">
            <Sparkles size={12} />
            Explore Our World
            <Sparkles size={12} />
          </p>
          <h1 className="gsap-reveal font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl text-[#163275] font-bold mb-6 leading-[1.1]">
            Our Collections
          </h1>
          <div className="gsap-reveal w-16 h-[2px] bg-[#c9a84c] mx-auto mb-6" />
          <p className="gsap-reveal text-[#5c5647] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover our complete range of handcrafted jewellery — from timeless Mangalsutras to
            contemporary Mens collections. Each piece tells a story of elegance and artistry.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CATEGORIES GRID
          ══════════════════════════════════════════════════════════════════════ */}
      <section ref={gridRef} className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-3">
              {CATEGORIES.length} Collections
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1f2937]">
              Browse by Category
            </h2>
          </div>

          {/* Grid: first row 3 cols, second row 2+2 or responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, index) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className={`category-card group relative overflow-hidden cursor-pointer block ${
                  index === CATEGORIES.length - 1 && CATEGORIES.length % 3 === 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f0e8]">
                  <img
                    src={cat.heroImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1224]/90 via-[#0a1224]/30 to-transparent group-hover:from-[#0a1224]/80 group-hover:via-[#0a1224]/20 transition-all duration-500" />

                  {/* Gold accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-20" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                    {/* Hindi label */}
                    <p className="text-[#c9a84c]/70 text-[10px] tracking-[0.25em] uppercase font-medium mb-2">
                      {cat.labelHi}
                    </p>
                    {/* Category name */}
                    <h3 className="text-white font-['Playfair_Display'] text-2xl md:text-3xl font-bold mb-2 tracking-wide">
                      {cat.name}
                    </h3>
                    {/* Tagline */}
                    <p className="text-white/60 text-sm italic mb-4">
                      {cat.tagline}
                    </p>

                    {/* Subcategory chips */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cat.subcategories.map((sub) => (
                        <span
                          key={sub.id}
                          className="inline-block bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-[9px] tracking-widest uppercase font-medium px-3 py-1.5"
                        >
                          {sub.name}
                        </span>
                      ))}
                    </div>

                    {/* Explore CTA */}
                    <div className="flex items-center gap-2 text-[#c9a84c] text-[11px] tracking-[0.2em] uppercase font-bold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                      Explore Collection
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Piece count badge */}
                  <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-[9px] tracking-widest uppercase font-medium px-3 py-2 z-10">
                    {cat.images.length} Pieces
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          VISIT US CTA
          ══════════════════════════════════════════════════════════════════════ */}
      <section ref={ctaRef} className="py-20 md:py-24 px-6 bg-[#163275] overflow-hidden relative">
        {/* Decorative gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center 40%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="gsap-reveal text-[#c9a84c]/60 text-[10px] tracking-[0.4em] uppercase font-bold mb-5">
            Can't Find What You're Looking For?
          </p>
          <h2 className="gsap-reveal font-['Playfair_Display'] text-3xl md:text-4xl text-white font-bold mb-5 leading-tight">
            Visit Our Showroom
          </h2>
          <p className="gsap-reveal text-white/50 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Experience our entire collection in person. Our showroom in Borivali, Mumbai is designed to make every visit a luxurious experience.
          </p>
          <div className="gsap-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/maps/place/Zewel+Studio+%7C+Luxury+Jewellery+Store+%26+Showroom+In+Borivali+Mumbai/@19.2277884,72.8495666,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b114f00a4087:0x6835326fed6b1780!8m2!3d19.2277834!4d72.8521415!16s%2Fg%2F11zhphgpbp?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[#c9a84c] text-[#163275] px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#dbb85c] transition-all duration-300 shadow-lg hover:shadow-[0_8px_40px_rgba(201,168,76,0.3)]"
            >
              <MapPin size={16} />
              Visit Us
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919136193999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white/30 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
