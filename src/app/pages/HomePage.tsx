import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ShoppingBag, Truck, Wrench, Package, Star, ArrowRight, ChevronDown, MapPin, Phone, Mail, Clock, Shield, Award, CheckCircle, Instagram, Facebook } from "lucide-react";
import GoogleReviews from "../components/GoogleReviews";
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
import certBis from "../../imports/cert-bis.png";
import certIgi from "../../imports/cert-igi.jpg";
import certEgl from "../../imports/cert-egl.jpg";
import certSgl from "../../imports/cert-sgl.png";

gsap.registerPlugin(ScrollTrigger);



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



          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/about"
              className="group flex items-center gap-3 bg-[#c9a84c] text-[#163275] px-12 py-4 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#dbb85c] transition-all duration-300 shadow-lg hover:shadow-[0_8px_40px_rgba(201,168,76,0.3)]"
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
      <div className="bg-[#163275] py-4 border-y border-[#c9a84c]/15 overflow-hidden">
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
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield size={32} className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-500" />, title: "SGL Certified", desc: "Every piece verified by certified gemological labs" },
              { icon: <Star size={32} className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-500" />, title: "Exquisite Designs", desc: "Handcrafted with precision by master artisans" },
              { icon: <Truck size={32} className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-500" />, title: "Free Secured Shipping", desc: "Insured delivery straight to your doorstep" },
              { icon: <Wrench size={32} className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-500" />, title: "Free Annual Cleaning", desc: "Complimentary cleaning & polishing every year" },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="gsap-reveal text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-5 rounded-full border border-[#c9a84c]/20 flex items-center justify-center bg-[#faf9f6] group-hover:border-[#c9a84c]/50 group-hover:bg-white shadow-sm hover:shadow-md transition-all duration-500">
                  {icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-[#1f2937] text-sm uppercase tracking-widest font-bold mb-2">{title}</h3>
                <p className="text-[#6b7280] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DESIGNER JEWELLERY BANNER ════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#163275] text-white border-b border-[#c9a84c]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c] opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a84c] opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="gsap-reveal space-y-6 text-center lg:text-left">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#c9a84c] font-bold leading-tight drop-shadow-sm">
              Designer Jewellery
            </h2>
            <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase">
              Lab Grown Diamonds
            </h3>
            <div className="inline-block mt-6 px-8 py-4 border border-[#c9a84c]/50 rounded-full bg-gradient-to-r from-[#c9a84c]/10 to-transparent backdrop-blur-sm">
              <p className="text-[#c9a84c] font-bold text-lg md:text-xl tracking-wide">
                Starting @ ₹13,000/- <span className="text-sm font-normal text-white/70">Per Carat*</span>
              </p>
            </div>
          </div>

          <div className="gsap-reveal flex flex-col gap-5 bg-white/5 backdrop-blur-md p-8 md:p-10 border border-white/10 rounded-2xl shadow-2xl">
            {[
              "Assured Exchange & Buy Back",
              "Installment Option Available",
              "Exchange Old Gold",
              "Make Your Own Customised Jewellery",
              "Free Old Jewellery Cleaning Services"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full border border-[#c9a84c]/30 flex items-center justify-center shrink-0 group-hover:bg-[#c9a84c] group-hover:border-[#c9a84c] transition-all duration-300">
                  <ArrowRight size={14} className="text-[#c9a84c] group-hover:text-[#163275] transition-colors duration-300" />
                </div>
                <p className="text-sm md:text-base tracking-wider uppercase font-semibold text-white/80 group-hover:text-white transition-colors">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ══ GOOGLE REVIEWS ═════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#faf9f6] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">What Our Customers Say</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Customer Reviews</h2>
          </div>
          <GoogleReviews />
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
              <p className="text-[#4b5563] leading-relaxed mt-6 mb-4">
                Zewel Studio is Borivali's finest luxury jewellery showroom — proudly women-owned and built on a belief that jewellery is more than adornment. It is memory, identity, and art.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-8">
                From diamond solitaires to heritage-inspired bangles, every piece in our curated collection is selected for its craftsmanship, provenance, and capacity to move the person who wears it.
              </p>
              <Link to="/about" className="inline-block border-b-2 border-[#c9a84c] text-[#163275] font-bold text-xs uppercase tracking-widest pb-1 hover:text-[#c9a84c] transition-colors">
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
          <a href="https://www.google.com/maps/place/Zewel+Studio+%7C+Luxury+Jewellery+Store+%26+Showroom+In+Borivali+Mumbai/@19.2277884,72.8495666,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b114f00a4087:0x6835326fed6b1780!8m2!3d19.2277834!4d72.8521415!16s%2Fg%2F11zhphgpbp?entry=ttu" target="_blank" rel="noopener noreferrer" className="bg-[#c9a84c] text-[#163275] px-10 py-3.5 text-[11px] uppercase tracking-[0.3em] font-bold shadow-lg hover:bg-[#dbb85c] transition-all duration-300">
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

      {/* ══ MEET OUR EXPERTS ══════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#faf9f6] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">The Artisans</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Meet Our Experts</h2>
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

      {/* ══ SERVICES ══════════════════════════════════════════════════════════ */}
      <section ref={servicesRef} id="services" className="py-24 px-6 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal text-center mb-16">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">What We Offer</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Our Services</h2>
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

      {/* ══ PREMIUM SOCIAL MEDIA INTEGRATION ═════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white relative overflow-hidden border-b border-[#e5e7eb]">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#c9a84c]/5 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#163275]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 gsap-reveal">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-[#c9a84c]/30"></span>
              Join The Community
              <span className="w-12 h-px bg-[#c9a84c]/30"></span>
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-6">Stay Connected</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Instagram Luxury Card */}
            <div className="gsap-reveal group relative bg-white border border-[#e5e7eb] p-10 md:p-14 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-yellow-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md transform group-hover:-translate-y-1 transition-transform duration-500">
                    <Instagram size={28} />
                  </div>
                  <p className="text-[#1f2937] font-['Playfair_Display'] text-xl italic opacity-50">@zewelstudio</p>
                </div>

                <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1f2937] font-bold mb-4">Curated Elegance</h3>
                <p className="text-[#6b7280] text-sm md:text-base leading-relaxed mb-10 max-w-sm">
                  Experience our latest handcrafted designs, behind-the-scenes artistry, and exclusive boutique moments directly on our Instagram.
                </p>

                <div className="mt-auto">
                  <a href="https://www.instagram.com/zewelstudio?igsh=YmM4MWRudDcxYzk5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 group/btn relative overflow-hidden bg-[#1f2937] text-white px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-[#1f2937] border border-[#1f2937] transition-all duration-300">
                    <span className="relative z-10">Follow on Instagram</span>
                    <ArrowRight size={14} className="relative z-10 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Facebook Luxury Card */}
            <div className="gsap-reveal group relative bg-[#163275] border border-[#163275] p-10 md:p-14 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden text-white">
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#1877F2] shadow-md transform group-hover:-translate-y-1 transition-transform duration-500">
                    <Facebook size={28} />
                  </div>
                  <p className="font-['Playfair_Display'] text-xl italic opacity-50">Zewel Studio</p>
                </div>

                <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4">Community & Events</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
                  Join our Facebook family for VIP event invitations, exclusive offers, and expert advice on preserving your luxury pieces.
                </p>

                <div className="mt-auto">
                  <a href="https://www.facebook.com/share/1BMeBJ881a/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 group/btn relative overflow-hidden bg-white text-[#163275] px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-white border border-white transition-all duration-300">
                    <span className="relative z-10">Join Facebook Page</span>
                    <ArrowRight size={14} className="relative z-10 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT & MAP ═════════════════════════════════════════════════════ */}
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
                    <a href="https://www.google.com/maps/place/Zewel+Studio+%7C+Luxury+Jewellery+Store+%26+Showroom+In+Borivali+Mumbai/@19.2277884,72.8495666,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b114f00a4087:0x6835326fed6b1780!8m2!3d19.2277834!4d72.8521415!16s%2Fg%2F11zhphgpbp?entry=ttu" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] text-sm hover:text-[#c9a84c] transition-colors block">
                      Borivali (West), Mumbai, Maharashtra, India
                    </a>
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
                    <a href="mailto:contact@zewelstudio.com" className="text-[#c9a84c] text-sm hover:underline">contact@zewelstudio.com</a>
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
