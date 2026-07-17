import { useParams, Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import { getCategoryBySlug } from "../data/categories";

function useReveal(threshold = 0.08) {
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
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const [activeFilter, setActiveFilter] = useState("all");

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-20 text-center px-6">
        <h1 className="font-['Playfair_Display'] text-4xl text-[#1f2937] mb-4">Category Not Found</h1>
        <p className="text-[#6b7280] mb-8">The collection you are looking for does not exist or has been moved.</p>
        <Link to="/" className="bg-[#1a3a6b] text-white px-8 py-3 text-xs uppercase tracking-widest font-bold">Return Home</Link>
      </div>
    );
  }

  const filteredImages = activeFilter === "all" 
    ? category.images 
    : category.images.filter(img => img.subcategory === activeFilter);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#f8fafc] border-b border-[#e5e7eb] py-4 px-6">
        <div className="max-w-7xl mx-auto text-xs text-[#6b7280] font-medium tracking-wide">
          <Link to="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1f2937]">{category.name}</span>
        </div>
      </div>

      {/* Category Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <img src={category.heroImage} alt={category.name} className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <p className="text-[#2563eb] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">{category.tagline}</p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#1a3a6b] mb-4 font-bold">{category.name}</h1>
          <p className="text-[#4b5563] leading-relaxed">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Subcategory Filters */}
        {category.subcategories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2.5 text-[11px] tracking-widest uppercase font-bold transition-all border ${activeFilter === "all" ? "bg-[#1a3a6b] text-white border-[#1a3a6b]" : "bg-white text-[#4b5563] border-[#e5e7eb] hover:border-[#1a3a6b]"}`}
            >
              All Pieces
            </button>
            {category.subcategories.map(sub => (
              <button 
                key={sub.id}
                onClick={() => setActiveFilter(sub.id)}
                className={`px-6 py-2.5 text-[11px] tracking-widest uppercase font-bold transition-all border ${activeFilter === sub.id ? "bg-[#1a3a6b] text-white border-[#1a3a6b]" : "bg-white text-[#4b5563] border-[#e5e7eb] hover:border-[#1a3a6b]"}`}
              >
                {sub.name}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, i) => (
            <Reveal key={`${img.alt}-${i}`} delay={i * 40}>
              <div className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden bg-[#f8fafc] mb-4 border border-[#e5e7eb]">
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
                  
                  {/* Enquire Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
                    <a 
                      href={`https://wa.me/919136193999?text=Hi! I am interested in the ${img.alt} from the ${category.name} collection.`}
                      target="_blank" rel="noopener noreferrer"
                      className="bg-white text-[#1a3a6b] px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-sm hover:bg-[#f0f4f8]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
                <h3 className="font-['Playfair_Display'] text-lg text-[#1f2937] font-semibold">{img.alt}</h3>
                <p className="text-[#6b7280] text-[10px] uppercase tracking-widest mt-1">
                  {category.subcategories.find(s => s.id === img.subcategory)?.name || category.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-[#6b7280]">
            No pieces found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
