import { useParams, Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import { getCategoryBySlug, CategoryImage, CATEGORIES } from "../data/categories";
import { X, ZoomIn, ArrowRight } from "lucide-react";

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
  const [selectedImage, setSelectedImage] = useState<CategoryImage | null>(null);

  // Reset filter & lightbox when switching between categories (including back/forward)
  useEffect(() => {
    setSelectedImage(null);
    if (category?.subcategories[0]?.id) {
      setActiveFilter(category.subcategories[0].id);
    } else {
      setActiveFilter("all");
    }
  }, [slug, category]);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-20 text-center px-6">
        <h1 className="font-['Playfair_Display'] text-4xl text-[#1f2937] mb-4">Category Not Found</h1>
        <p className="text-[#6b7280] mb-8">The collection you are looking for does not exist or has been moved.</p>
        <Link to="/" className="bg-[#163275] text-white px-8 py-3 text-xs uppercase tracking-widest font-bold">Return Home</Link>
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
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#163275] mb-4 font-bold">{category.name}</h1>
          <p className="text-[#4b5563] leading-relaxed">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Subcategory Filters */}
        {category.subcategories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {category.subcategories.map(sub => (
              <button 
                key={sub.id}
                onClick={() => setActiveFilter(sub.id)}
                className={`px-6 py-2.5 text-[11px] tracking-widest uppercase font-bold transition-all border ${activeFilter === sub.id ? "bg-[#163275] text-white border-[#163275]" : "bg-white text-[#4b5563] border-[#e5e7eb] hover:border-[#163275]"}`}
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
              <div className="group cursor-pointer" onClick={() => setSelectedImage(img)}>
                <div className="relative aspect-square overflow-hidden bg-white mb-4 border border-[#e5e7eb]">
                  <img 
                    src={img.url} 
                    alt={img.alt}
                    className={`w-full h-full object-contain p-2 transition-transform duration-700 ${img.className || 'scale-100 group-hover:scale-110'}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
                  
                  {/* Enquire Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent flex justify-center pointer-events-none group-hover:pointer-events-auto">
                    <a 
                      href={`https://wa.me/919136193999?text=Hi! I am interested in the ${img.alt} from the ${category.name} collection.`}
                      target="_blank" rel="noopener noreferrer"
                      className="bg-white text-[#163275] px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-sm hover:bg-[#f0f4f8] pointer-events-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
                <h3 className="font-['Playfair_Display'] text-lg text-[#1f2937] font-semibold">{img.alt}</h3>
                <p className="text-[#6b7280] text-[10px] uppercase tracking-widest mt-1">
                  {img.description ? img.description : (category.subcategories.find(s => s.id === img.subcategory)?.name || category.name)}
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

      {/* Next Category Navigation */}
      {(() => {
        if (!category) return null;
        
        let isNextSubcategory = false;
        let nextTitle = "";
        let nextDesc = "";
        let nextLabel = "";
        let nextLink = "";
        let nextSubId = "";

        const currentSubIdx = category.subcategories.findIndex(s => s.id === activeFilter);
        if (currentSubIdx >= 0 && currentSubIdx < category.subcategories.length - 1) {
            isNextSubcategory = true;
            const nextSub = category.subcategories[currentSubIdx + 1];
            nextTitle = nextSub.name;
            nextDesc = `Discover our exquisite ${nextSub.name} collection — elegance at your fingertips`;
            nextLabel = `Explore ${nextSub.name}`;
            nextSubId = nextSub.id;
        } else {
            const currentIndex = CATEGORIES.findIndex(c => c.slug === slug);
            const nextCategory = CATEGORIES[(currentIndex + 1) % CATEGORIES.length];
            if (!nextCategory) return null;
            nextTitle = nextCategory.name;
            nextDesc = `Discover our exquisite ${nextCategory.name} collection — ${nextCategory.tagline?.toLowerCase() || nextCategory.description?.slice(0, 60)}`;
            nextLabel = `Explore ${nextCategory.name}`;
            nextLink = `/category/${nextCategory.slug}`;
        }

        return (
          <div className="border-t border-[#e5e7eb] bg-gradient-to-b from-white to-[#faf9f6]">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
              <div className="flex flex-col items-center text-center">
                <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] font-bold uppercase mb-3">Continue Exploring</p>
                <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#163275] font-bold mb-4">Next Collection</h3>
                <p className="text-[#6b7280] text-sm mb-8 max-w-md">
                  {nextDesc}
                </p>
                {isNextSubcategory ? (
                  <button
                    onClick={() => {
                      setActiveFilter(nextSubId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center gap-3 bg-[#163275] text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#1e4494] transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    {nextLabel}
                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                ) : (
                  <Link
                    to={nextLink}
                    className="group inline-flex items-center gap-3 bg-[#163275] text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#1e4494] transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    {nextLabel}
                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Lightbox Modal */}
      {selectedImage && (() => {
        const currentIdx = filteredImages.findIndex(img => img.url === selectedImage.url);
        const hasNext = currentIdx >= 0 && currentIdx < filteredImages.length - 1;
        const hasPrev = currentIdx > 0;
        
        return (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm" 
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={24} />
            </button>
            
            {hasPrev && (
              <button 
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full z-50"
                onClick={(e) => { e.stopPropagation(); setSelectedImage(filteredImages[currentIdx - 1]); }}
              >
                <ArrowRight size={24} className="rotate-180" />
              </button>
            )}

            {hasNext && (
              <button 
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full z-50"
                onClick={(e) => { e.stopPropagation(); setSelectedImage(filteredImages[currentIdx + 1]); }}
              >
                <ArrowRight size={24} />
              </button>
            )}

            <div 
              className="relative w-full max-w-5xl flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="relative w-full max-h-[75vh] flex justify-center pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>
              
              <div className="mt-6 text-center text-white pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                <h3 className="font-['Playfair_Display'] text-xl sm:text-3xl mb-2 text-[#c9a84c]">{selectedImage.alt}</h3>
                {selectedImage.description && (
                  <p className="text-white/80 text-[10px] sm:text-sm tracking-widest uppercase font-medium">{selectedImage.description}</p>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
