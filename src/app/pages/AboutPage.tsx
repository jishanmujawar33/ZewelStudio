import { Link } from "react-router";
import { TEAM_MEMBERS } from "../data/team";
import model3 from "../../imports/model-3.jpg";
import model4 from "../../imports/model-4.jpg";
import model7 from "../../imports/model-7.jpg";
import { ArrowRight, Star } from "lucide-react";



export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <img src={model3} alt="About Zewel Studio" className="w-full h-full object-cover object-[50%_25%]" />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="relative z-10 max-w-3xl pt-20">
          <p className="text-[#2563eb] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Our Heritage</p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#1a3a6b] mb-4 font-bold">About Zewel Studio</h1>
          <p className="text-[#4b5563] text-lg mt-6">A legacy of craftsmanship, trust, and unparalleled artistry in Borivali.</p>
        </div>
      </section>

      {/* ══ OUR STORY ═════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#2563eb] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Our Journey</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1f2937] mb-2 font-bold">The Zewel Story</h2>
            <p className="text-[#4b5563] leading-relaxed mb-6 text-lg mt-6">
              Founded with a passion for exquisite design and uncompromising quality, Zewel Studio has become a landmark for fine jewellery in Mumbai. As a proudly women-owned enterprise, we bring a unique perspective to every piece we create—understanding that jewellery is profoundly personal.
            </p>
            <p className="text-[#4b5563] leading-relaxed text-lg">
              Our atelier is a space of creativity and trust. Whether you are seeking the perfect engagement ring, a traditional mangalsutra, or a bespoke creation that tells your unique story, our experts are dedicated to making your experience unforgettable.
            </p>
          </div>
          <div className="relative">
            <div className="shadow-xl">
              <img src={model7} alt="Zewel Studio atelier" className="w-full h-[480px] object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-6 w-40 h-40 border-8 border-white shadow-lg hidden md:block">
              <img src={model4} alt="Fine jewellery craftsmanship" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS & VALUES ════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#f8fafc] border-y border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24">
            <div>
              <p className="font-['Playfair_Display'] text-5xl text-[#1a3a6b] font-bold mb-2">5+</p>
              <p className="text-[#6b7280] text-xs uppercase tracking-widest font-bold">Years of Excellence</p>
            </div>
            <div>
              <p className="font-['Playfair_Display'] text-5xl text-[#1a3a6b] font-bold mb-2">42</p>
              <p className="text-[#6b7280] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                Five-Star Reviews <Star size={12} className="fill-[#2563eb] text-[#2563eb]" />
              </p>
            </div>
            <div>
              <p className="font-['Playfair_Display'] text-5xl text-[#1a3a6b] font-bold mb-2">500+</p>
              <p className="text-[#6b7280] text-xs uppercase tracking-widest font-bold">Pieces Curated</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-[#2563eb] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">What We Stand For</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1f2937] mb-4 font-bold">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Craftsmanship", desc: "Every piece is crafted with meticulous attention to detail by master artisans." },
              { title: "Heritage", desc: "We honor traditional techniques while embracing contemporary design." },
              { title: "Inclusivity", desc: "A welcoming, zero-pressure environment where everyone feels valued and celebrated." },
              { title: "Trust", desc: "Transparent pricing and ethically sourced materials you can rely on." },
            ].map(val => (
              <div key={val.title} className="bg-white p-8 border border-[#e5e7eb] text-center hover:shadow-lg transition-all duration-300">
                <h3 className="font-['Playfair_Display'] text-xl text-[#1a3a6b] font-bold mb-3">{val.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ THE ARTISANS ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2563eb] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">The Visionaries</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f2937] mb-4">Meet Our Team</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((person) => (
              <div key={person.name} className="group relative overflow-hidden bg-white shadow-sm border border-[#e5e7eb] hover:shadow-xl transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden bg-[#f0f4f8]">
                  <img src={person.img} alt={person.name} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${person.imgClass || ""}`} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent pt-12">
                  <h3 className="font-['Playfair_Display'] text-xl text-[#1f2937] mb-1">{person.name}</h3>
                  <p className="text-[#6b7280] text-xs uppercase tracking-widest font-semibold">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CALL TO ACTION ════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a3a6b] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl text-white mb-6 font-bold">Experience Zewel Studio</h2>
          <p className="text-white/80 text-lg mb-10">We invite you to visit our showroom and discover the art of fine jewellery in person.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919136193999" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1a3a6b] px-10 py-4 text-xs tracking-widest uppercase font-bold hover:bg-[#f0f4f8] transition-colors shadow-lg">
              Book an Appointment
            </a>
            <Link to="/category/mangalsutra" className="group flex items-center gap-3 text-white border-b-2 border-transparent hover:border-white px-2 py-3 text-xs tracking-widest uppercase font-bold transition-all">
              View Collections <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
