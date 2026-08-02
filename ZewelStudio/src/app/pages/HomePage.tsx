import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  ShieldCheck,
  Award,
  Leaf,
  RefreshCw,
  Wrench,
  Palette,
  CalendarDays,
} from "lucide-react";
import GoogleReviews from "../components/GoogleReviews";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── Image Imports ──────────────────────────────────────────────────────
import logoFull from "../../imports/logo-full.png";
import heroVideo from "../../imports/videoplayback.webm";

// Models / Lifestyle
import model1 from "../../imports/model-1.jpg";
import model2 from "../../imports/model-2.jpg";
import model3 from "../../imports/model-3.jpg";
import model4 from "../../imports/model-4.jpg";
import model6 from "../../imports/model-6.jpg";
import model7 from "../../imports/model-7.jpg";
import ringsCategory from "../../imports/rings-category.jpg";
import necklaceCategory from "../../imports/necklace-category-2.jpg";
import braceletCategory from "../../imports/bracelet-category.jpg";
import earringsCategory from "../../imports/earrings-category-2.jpg";

// Products
import earring1 from "../../imports/earring-1.jpg";
import earring3 from "../../imports/earring-3.jpg";
import earring4 from "../../imports/earring-4.jpg";
import earring5 from "../../imports/earring-5.jpg";
import earring7 from "../../imports/earring-7.jpg";
import earring11 from "../../imports/earring-11.jpg";
import necklace2 from "../../imports/necklace-2.jpg";
import necklace3 from "../../imports/necklace-3.jpg";
import necklace5 from "../../imports/necklace-5.jpg";
import necklace6 from "../../imports/necklace-6.jpg";
import bracelet1 from "../../imports/bracelet-1.jpg";

// Certifications
import certBis from "../../imports/cert-bis.png";
import certIgi from "../../imports/cert-igi.jpg";
import certEgl from "../../imports/cert-egl.jpg";
import certSgl from "../../imports/cert-sgl.png";

gsap.registerPlugin(ScrollTrigger);

// ─── Section Data ───────────────────────────────────────────────────────

const HOME_CATEGORIES = [
  { name: "Rings", tagline: "Symbols of love and promises", image: ringsCategory, slug: "ladies-ring" },
  { name: "Earrings", tagline: "Elegance that frames you", image: earringsCategory, slug: "earrings", objectPosition: "center bottom" },
  { name: "Necklaces", tagline: "Designed to be cherished", image: necklaceCategory, slug: "necklace" },
  { name: "Bracelets", tagline: "Grace in every detail", image: braceletCategory, slug: "bangles-bracelets" },
  { name: "Bridal Collection", tagline: "For your most special day", image: model2, slug: "mangalsutra" },
];

const FEATURED_PRODUCTS = [
  { name: "Luminous Solitaire Ring", price: "₹ 28,900", image: earring1 },
  { name: "Eternal Halo Earrings", price: "₹ 34,900", image: earring3 },
  { name: "Dew Drop Pendant", price: "₹ 22,900", image: necklace6 },
  { name: "Radiant Charm Ring", price: "₹ 31,900", image: earring5 },
  { name: "Twilight Studs", price: "₹ 19,900", image: earring11 },
  { name: "Classic Tennis Bracelet", price: "₹ 45,900", image: bracelet1 },
  { name: "Celestial Drop Earrings", price: "₹ 26,500", image: earring7 },
  { name: "Heritage Necklace", price: "₹ 52,900", image: necklace5 },
];

const WHY_CHOOSE = [
  { icon: ShieldCheck, title: "Certified Jewellery", desc: "Every piece certified for authenticity & quality." },
  { icon: Leaf, title: "Ethical & Sustainable", desc: "Responsibly created for a better future." },
  { icon: Award, title: "Hallmark Gold Jewellery", desc: "BIS hallmarked 18KT & 14KT gold with assured purity." },
  { icon: RefreshCw, title: "Lifetime Exchange & Buyback", desc: "Hassle-free exchange or buyback, anytime." },
  { icon: Wrench, title: "Free Lifetime Maintenance", desc: "Complimentary cleaning, polishing & repairs forever." },
  { icon: Palette, title: "Made-to-Order Jewellery", desc: "Design your dream piece, crafted just for you." },
];

const INSTAGRAM_IMAGES = [model2, earring4, necklace2, model6, model7];

// ─── Component ──────────────────────────────────────────────────────────

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const signatureRef = useRef<HTMLElement>(null);
  const instagramRef = useRef<HTMLElement>(null);
  const certsRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  /* ─── Product carousel scroll ─── */
  const scrollProducts = (direction: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: direction * 300, behavior: "smooth" });
    }
  };

  /* ─── GSAP ScrollTrigger animations ─── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero video parallax
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

      // Hero logo entrance
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

      // Animate all gsap-reveal sections
      const sections = [categoriesRef, aboutRef, productsRef, signatureRef, instagramRef, certsRef];
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      {/* ══════════════════════════════════════════════════════════════════════
          HERO — VIDEO BACKGROUND
          ══════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
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
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,18,36,0.75) 0%, rgba(10,18,36,0.4) 40%, rgba(10,18,36,0.7) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center 40%, rgba(201,168,76,0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="hero-content relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div ref={heroLogoRef} className="flex justify-center mb-8 opacity-0">
            <img
              src={logoFull}
              alt="Zewel Studio"
              className="w-full max-w-[460px] h-auto object-contain"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/collections"
              className="group flex items-center justify-center gap-3 bg-[#c9a84c] border border-[#c9a84c] text-[#163275] px-12 py-4 h-[50px] w-full sm:w-[260px] text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#dbb85c] hover:border-[#dbb85c] transition-all duration-300 shadow-lg hover:shadow-[0_8px_40px_rgba(201,168,76,0.3)]"
            >
              Explore Collections
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://www.google.com/maps/place/Zewel+Studio+%7C+Luxury+Jewellery+Store+%26+Showroom+In+Borivali+Mumbai/@19.2277884,72.8495666,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b114f00a4087:0x6835326fed6b1780!8m2!3d19.2277834!4d72.8521415!16s%2Fg%2F11zhphgpbp?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-white/30 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] px-12 py-4 h-[50px] w-full sm:w-[260px] text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-300"
            >
              <MapPin size={14} />
              Visit Us
            </a>
          </div>

        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full max-w-2xl px-6">
          <p className="text-white/90 text-[15px] md:text-[18px] font-['Gilroy',sans-serif] italic tracking-[0.18em] text-center leading-relaxed uppercase font-bold">
            "INNOVATION IN EVERY CARAT"
          </p>
          <div className="flex flex-col items-center gap-1.5 mt-2">
            <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-medium">Scroll</span>
            <ChevronDown size={14} className="text-[#c9a84c]/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MARQUEE
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#163275] py-4 border-y border-[#c9a84c]/15 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-12 px-12 text-xs tracking-widest uppercase font-semibold text-white/50"
              >
                <span className="text-[#c9a84c]">◆</span> Luxury Jewellery
                <span className="text-[#c9a84c]">◆</span> Certified Jewellery
                <span className="text-[#c9a84c]">◆</span> 5.0 ★ Rated
                <span className="text-[#c9a84c]">◆</span> Bespoke Creations
                <span className="text-[#c9a84c]">◆</span> Free Cleaning
              </span>
            ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          OUR CATEGORIES  (Reference: Page 2)
          ══════════════════════════════════════════════════════════════════════ */}
      <section ref={categoriesRef} className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal text-center mb-16">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">
              Curated Collections
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Our Categories</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {HOME_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="gsap-reveal group relative overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={cat.objectPosition ? { objectPosition: cat.objectPosition } : undefined}
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/70 group-hover:via-black/20 transition-all duration-500" />
                {/* Gold accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-center translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                  <h3 className="text-white font-['Playfair_Display'] text-lg md:text-xl tracking-wider uppercase mb-1.5">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ABOUT ZEWEL + WHY CHOOSE ZEWEL  (Reference: Page 3)
          ══════════════════════════════════════════════════════════════════════ */}
      <section ref={aboutRef} className="overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3">
          {/* Left — About Text */}
          <div className="gsap-reveal bg-[#f5f0e8] p-10 md:p-14 lg:p-16 flex flex-col justify-center">
            <p className="text-[#8b7355] text-[10px] tracking-[0.3em] font-bold uppercase mb-6">About Zewel</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-[2.5rem] text-[#1f2937] leading-[1.2] mb-6">
              A story of craftsmanship.
              <br />A promise of elegance.
            </h2>
            <p className="text-[#5c5647] text-sm leading-relaxed mb-4">
              At Zewel Studio, we believe jewellery is more than an accessory — it's a reflection of your journey.
            </p>
            <p className="text-[#5c5647] text-sm leading-relaxed mb-10">
              Our lab-grown diamonds are ethically crafted with precision and passion, to celebrate every chapter of your
              story.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-[#1f2937] font-bold text-[11px] uppercase tracking-[0.25em] group w-fit"
            >
              Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Center — Craftsmanship Image */}
          <div className="gsap-reveal relative overflow-hidden min-h-[400px] lg:min-h-0">
            <img
              src={model7}
              alt="Master craftsmanship at Zewel Studio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right — Why Choose Zewel */}
          <div className="gsap-reveal bg-white p-10 md:p-14 lg:p-16 flex flex-col justify-center border-l border-[#e5e7eb]">
            <h3 className="text-[#1f2937] text-[11px] tracking-[0.3em] font-bold uppercase text-center mb-12">
              Why Choose Zewel
            </h3>
            <div className="grid grid-cols-3 gap-x-4 gap-y-10">
              {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center group">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-[#c9a84c]/25 flex items-center justify-center group-hover:border-[#c9a84c]/60 group-hover:bg-[#fdf8ef] transition-all duration-400">
                    <Icon size={24} className="text-[#c9a84c]" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[#1f2937] text-[8px] md:text-[9px] tracking-[0.15em] font-bold uppercase mb-1.5 leading-tight">
                    {title}
                  </h4>
                  <p className="text-[#9b9b9b] text-[10px] italic leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FEATURED PRODUCTS  (Reference: Page 4)
          ══════════════════════════════════════════════════════════════════════ */}
      <section ref={productsRef} className="py-20 md:py-24 px-6 bg-[#faf9f6] border-y border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="gsap-reveal flex items-center justify-between mb-10">
            <p className="text-[#1f2937] text-[11px] tracking-[0.3em] font-bold uppercase">Handpicked For You</p>
            <Link
              to="/category/necklace"
              className="hidden sm:flex items-center gap-2 text-[#1f2937] text-[11px] tracking-[0.2em] font-bold uppercase hover:text-[#c9a84c] transition-colors group"
            >
              View All Products
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Carousel */}
          <div className="gsap-reveal relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollProducts(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-5 z-10 w-10 h-10 bg-white shadow-lg border border-[#e5e7eb] rounded-full flex items-center justify-center hover:bg-[#163275] hover:text-white hover:border-[#163275] transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Products */}
            <div
              ref={carouselRef}
              className="flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar px-2 py-2"
            >
              {FEATURED_PRODUCTS.map((product) => (
                <div
                  key={product.name}
                  className="flex-shrink-0 w-[180px] md:w-[200px] bg-white border border-[#ebebeb] group cursor-pointer hover:shadow-xl transition-all duration-400 hover:border-[#c9a84c]/30"
                >
                  <div className="aspect-square overflow-hidden bg-[#f8f8f8] relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/5 transition-colors duration-400" />
                  </div>
                  <div className="p-4 text-center border-t border-[#f0f0f0]">
                    <h4 className="text-[#1f2937] text-[13px] font-medium mb-1.5 leading-tight">
                      {product.name}
                    </h4>
                    <p className="text-[#1f2937] font-bold text-sm">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollProducts(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-5 z-10 w-10 h-10 bg-white shadow-lg border border-[#e5e7eb] rounded-full flex items-center justify-center hover:bg-[#163275] hover:text-white hover:border-[#163275] transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden mt-8 text-center">
            <Link
              to="/category/necklace"
              className="inline-flex items-center gap-2 text-[#1f2937] text-[11px] tracking-[0.2em] font-bold uppercase hover:text-[#c9a84c] transition-colors group"
            >
              View All Products
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          INSTAGRAM STRIP  (Reference: Page 5)
          ══════════════════════════════════════════════════════════════════════ */}
      <section ref={instagramRef} className="py-16 md:py-20 px-6 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-center">
            {/* Left — CTA */}
            <div className="gsap-reveal text-center lg:text-left">
              <div className="w-11 h-11 mx-auto lg:mx-0 mb-5 rounded-full border border-[#e5e7eb] flex items-center justify-center">
                <Instagram size={20} className="text-[#1f2937]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1f2937] font-bold mb-3 leading-tight">
                Let's Get
                <br />
                Inspired
              </h3>
              <p className="text-[#6b7280] text-sm mb-5">
                Follow us <span className="font-semibold text-[#1f2937]">@zewel.studio</span>
              </p>
              <a
                href="https://www.instagram.com/zewelstudio?igsh=YmM4MWRudDcxYzk5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1f2937] font-bold text-[11px] uppercase tracking-[0.25em] group"
              >
                View Instagram
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>

            {/* Right — Image Strip */}
            <div className="gsap-reveal grid grid-cols-5 gap-2">
              {INSTAGRAM_IMAGES.map((img, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/zewelstudio?igsh=YmM4MWRudDcxYzk5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square overflow-hidden group relative"
                >
                  <img
                    src={img}
                    alt={`Zewel Studio Instagram ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400 flex items-center justify-center">
                    <Instagram
                      size={24}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400 drop-shadow-lg"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DIAMOND GROWING PLAN
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#fdf0e8] via-[#fce8dc] to-[#f8ddd0] border-b border-[#e8c9b8]">
        {/* Subtle shimmer overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
            
            {/* Left — Ring Image + Info */}
            <div className="flex items-center gap-6">
              <div className="shrink-0">
                <img 
                  src={earring1} 
                  alt="Diamond Growing Plan Ring" 
                  className="w-28 h-28 md:w-36 md:h-36 object-contain mix-blend-multiply drop-shadow-lg"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CalendarDays size={16} className="text-[#8b4513]" />
                  <p className="text-[#8b4513] text-[10px] tracking-[0.25em] font-bold uppercase">Monthly Installment Plan</p>
                </div>
                <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl text-[#1f2937] font-bold leading-tight">
                  Diamond Growing Plan
                </h2>
                <p className="text-[#8b4513] text-xs md:text-sm font-semibold mt-1 tracking-wide uppercase">
                  Save Today. Shine Tomorrow.
                </p>
              </div>
            </div>

            {/* Right — Plan Math */}
            <div className="flex flex-col items-center lg:items-end">
              <div className="flex items-center gap-3 md:gap-5">
                {/* PAY */}
                <div className="text-center">
                  <p className="text-[#8b4513] text-[9px] tracking-[0.2em] uppercase font-bold mb-1">Pay</p>
                  <span className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-[#1f2937]">10</span>
                </div>
                
                <span className="text-[#c9a84c] text-3xl md:text-4xl font-light mt-4">+</span>
                
                {/* BONUS */}
                <div className="text-center">
                  <p className="text-[#8b4513] text-[9px] tracking-[0.2em] uppercase font-bold mb-1">Bonus</p>
                  <span className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-[#c9a84c]">1</span>
                </div>
                
                <span className="text-[#c9a84c] text-3xl md:text-4xl font-light mt-4">=</span>
                
                {/* YOU GET */}
                <div className="text-center">
                  <p className="text-[#8b4513] text-[9px] tracking-[0.2em] uppercase font-bold mb-1">You Get</p>
                  <span className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-[#163275]">11.5</span>
                  <span className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-[#163275]">!</span>
                </div>
              </div>

              {/* Tag */}
              <div className="mt-4 bg-[#8b4513] text-white px-6 py-1.5 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">
                15% Extra Value
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/919136193999?text=Hi! I am interested in the Diamond Growing Plan."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 group inline-flex items-center gap-3 bg-[#163275] text-white px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#1e4494] transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Enquire About Plan
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Bottom Description */}
          <div className="mt-10 pt-8 border-t border-[#d4a88a]/30 text-center">
            <p className="text-[#6b5547] text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
              Pay for <strong>10 months</strong> and receive the value of <strong>11.5 months</strong> — that's a <strong>15% bonus</strong> on your investment.
              Start your diamond journey today with our flexible monthly installment plan.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SIGNATURE COLLECTION  (Reference: Page 6)
          ══════════════════════════════════════════════════════════════════════ */}
      <section ref={signatureRef} className="overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2">
          {/* Left — Text */}
          <div className="gsap-reveal bg-[#f5f0e8] p-10 md:p-14 lg:p-20 flex flex-col justify-center min-h-[400px]">
            <p className="text-[#8b7355] text-[10px] tracking-[0.3em] font-bold uppercase mb-6">Signature Collection</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-[3.5rem] text-[#1f2937] leading-[1.15] mb-6">
              Timeless designs.
              <br />
              Uniquely you.
            </h2>
            <p className="text-[#5c5647] text-sm md:text-base leading-relaxed mb-10 max-w-md">
              An exclusive curation of our finest creations — crafted with exceptional diamonds and artistic precision.
            </p>
            <Link
              to="/category/necklace"
              className="inline-flex items-center gap-3 text-[#1f2937] font-bold text-[11px] uppercase tracking-[0.25em] group w-fit"
            >
              Explore Signature Collection
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right — Image */}
          <div className="gsap-reveal relative overflow-hidden bg-[#1a1612] min-h-[400px]">
            <img
              src={necklace3}
              alt="Zewel Studio Signature Collection — handcrafted diamond necklace"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
            />
            {/* Subtle gold vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 60% 50%, transparent 50%, rgba(26,22,18,0.3) 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          GOOGLE REVIEWS
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#faf9f6] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">
              What Our Customers Say
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Customer Reviews</h2>
          </div>
          <GoogleReviews />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CERTIFICATIONS
          ══════════════════════════════════════════════════════════════════════ */}
      <section ref={certsRef} className="py-24 px-6 bg-white border-y border-[#e5e7eb]">
        <div className="max-w-6xl mx-auto">
          <div className="gsap-reveal text-center mb-16">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Trusted & Verified</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Our Certifications</h2>
            <p className="text-[#6b7280] text-sm mt-6 max-w-2xl mx-auto">
              Every piece at Zewel Studio is backed by industry-leading certifications, ensuring authenticity, purity,
              and trust.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "SGL Certified",
                full: "Solitaire Gemological Laboratories",
                desc: "India's premier gem testing laboratory, certifying diamond quality and authenticity.",
                img: certSgl,
              },
              {
                name: "BIS Hallmark",
                full: "Bureau of Indian Standards",
                desc: "Government hallmarking guaranteeing purity of gold and precious metals.",
                img: certBis,
              },
              {
                name: "IGI Certified",
                full: "International Gemological Institute",
                desc: "World's largest independent gem certification and appraisal institute.",
                img: certIgi,
              },
              {
                name: "EGL Certified",
                full: "European Gemological Laboratory",
                desc: "Internationally recognized authority in diamond and gemstone grading.",
                img: certEgl,
              },
            ].map((cert) => (
              <div
                key={cert.name}
                className="gsap-reveal group bg-[#faf9f6] border border-[#e5e7eb] hover:border-[#c9a84c]/40 p-8 text-center hover:shadow-lg transition-all duration-500"
              >
                <div className="flex justify-center mb-6 h-20 items-center overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-['Playfair_Display'] text-lg text-[#1f2937] font-bold mb-1">{cert.name}</h3>
                <p className="text-[#c9a84c] text-[9px] tracking-[0.2em] uppercase font-semibold mb-3">{cert.full}</p>
                <p className="text-[#6b7280] text-xs leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CONTACT & MAP
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 px-6 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Get in Touch</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Visit Our Showroom</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white p-10 border border-[#e5e7eb] shadow-sm h-full">
              <h3 className="font-['Playfair_Display'] text-2xl text-[#163275] font-bold mb-8">Zewel Studio</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fdf8ef] flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[#1f2937] font-semibold text-sm mb-1">Address</p>
                    <a
                      href="https://www.google.com/maps/place/Zewel+Studio+%7C+Luxury+Jewellery+Store+%26+Showroom+In+Borivali+Mumbai/@19.2277884,72.8495666,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b114f00a4087:0x6835326fed6b1780!8m2!3d19.2277834!4d72.8521415!16s%2Fg%2F11zhphgpbp?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b7280] text-sm hover:text-[#c9a84c] transition-colors block"
                    >
                      D-49, Mahavir Nagar Building, Factory Lane, Opp. M. K. High School, Borivali West, Mumbai 400092
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fdf8ef] flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[#1f2937] font-semibold text-sm mb-1">Phone</p>
                    <a href="tel:+919136193999" className="text-[#c9a84c] text-sm hover:underline">
                      +91 913619 3999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fdf8ef] flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[#1f2937] font-semibold text-sm mb-1">Email</p>
                    <a href="mailto:contact@zewelstudio.com" className="text-[#c9a84c] text-sm hover:underline">
                      contact@zewelstudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fdf8ef] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[#1f2937] font-semibold text-sm mb-1">Business Hours</p>
                    <p className="text-[#6b7280] text-sm">Tuesday - Sunday: 11 AM to 9 PM</p>
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
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book an Appointment
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white border border-[#e5e7eb] shadow-sm overflow-hidden h-full min-h-[450px]">
              <iframe
                src="https://maps.google.com/maps?q=Zewel+Studio+Luxury+Jewellery+Store+Showroom+Borivali+Mumbai&t=&z=16&ie=UTF8&iwloc=B&output=embed"
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
