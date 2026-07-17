import { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://search.google.com/local/reviews?placeid=ChIJpSMYZfvI5zsRqL8j-9NEaac";
const GOOGLE_MAPS_URL = "https://share.google/NfeowWoMVKNhhJEZ3";

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string; // initials color
  initial: string;
  verified: boolean;
}

const REVIEWS: Review[] = [
  {
    name: "Ankita Bafna",
    rating: 5,
    date: "2 months ago",
    text: "Amazing collection💅 very humble and polite staff🙏 The store has a great variety of designs. The quality of gold and diamonds is top notch. Highly recommended for anyone looking for fine jewellery!",
    avatar: "#4285F4",
    initial: "A",
    verified: true,
  },
  {
    name: "Mihir Shah",
    rating: 5,
    date: "2 months ago",
    text: "Had a great experience with Zewel studio! Their lab-grown diamond collection is stunning and very affordable. The staff is knowledgeable and helped me find the perfect engagement ring.",
    avatar: "#34A853",
    initial: "M",
    verified: true,
  },
  {
    name: "Rakesh Shah",
    rating: 5,
    date: "4 months ago",
    text: "I visit today many stores but zewel studio is best for lab grown diamonds. Their collection is unique and prices are very competitive. Staff is very cooperative and helpful.",
    avatar: "#EA4335",
    initial: "R",
    verified: true,
  },
  {
    name: "Ajay Shah",
    rating: 5,
    date: "4 months ago",
    text: "Very unique collection in affordable price must visit staff are amazing. Great variety of designs in every category. Will definitely come back for more purchases.",
    avatar: "#FBBC05",
    initial: "A",
    verified: true,
  },
  {
    name: "Ekta Sheth",
    rating: 5,
    date: "4 months ago",
    text: "Aakash is one of the most genuine and honest designer. He has amazing designs and very reasonable prices. The quality of craftsmanship is outstanding. Highly recommend!",
    avatar: "#4285F4",
    initial: "E",
    verified: true,
  },
  {
    name: "Priya Mehta",
    rating: 5,
    date: "3 months ago",
    text: "Wonderful experience at Zewel Studio! Got my bridal set customised here and the team was extremely patient and creative. The final piece exceeded all my expectations. Thank you!",
    avatar: "#34A853",
    initial: "P",
    verified: true,
  },
  {
    name: "Sneha Patel",
    rating: 5,
    date: "3 months ago",
    text: "Best jewellery store in Borivali! The collection is trendy yet classy. Staff made me feel so comfortable while choosing. Prices are transparent with no hidden charges.",
    avatar: "#EA4335",
    initial: "S",
    verified: true,
  },
  {
    name: "Kiran Desai",
    rating: 5,
    date: "5 months ago",
    text: "Bought a beautiful mangalsutra from Zewel Studio. The designs are unique and the craftsmanship is excellent. The team guided me through BIS hallmarking and certification. Very trustworthy!",
    avatar: "#FBBC05",
    initial: "K",
    verified: true,
  },
];

const TOTAL_REVIEWS = 43;
const AVERAGE_RATING = 5.0;

/* Google "G" logo as inline SVG */
function GoogleGIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array(5).fill(null).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < rating ? "fill-[#FBBC05] text-[#FBBC05]" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 300;
    el.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <div className="bg-[#faf9f6] rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-8 pt-7 pb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          {/* Google Reviews title */}
          <div className="flex items-center gap-2.5 mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-[#202124] text-lg font-medium" style={{ fontFamily: "'Google Sans', 'Roboto', sans-serif" }}>
              Google <span className="font-normal">Reviews</span>
            </span>
          </div>
          {/* Rating summary */}
          <div className="flex items-center gap-2">
            <span className="text-[#202124] text-2xl font-bold">{AVERAGE_RATING}</span>
            <div className="flex gap-0.5">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} size={18} className="fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span className="text-[#70757a] text-sm">({TOTAL_REVIEWS})</span>
          </div>
        </div>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-[#3367D6] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
        >
          Review us on Google
        </a>
      </div>

      {/* Reviews carousel */}
      <div className="relative">
        {/* Left arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={20} className="text-[#5f6368]" />
          </button>
        )}

        {/* Right arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight size={20} className="text-[#5f6368]" />
          </button>
        )}

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-6 md:px-8 pb-7 pt-2 hide-scrollbar scroll-smooth"
        >
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] bg-white rounded-lg border border-[#e8eaed] p-5 hover:shadow-md transition-shadow duration-300"
            >
              {/* Reviewer info */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                  style={{ backgroundColor: review.avatar }}
                >
                  {review.initial}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#202124] text-sm font-medium truncate">{review.name}</span>
                    {review.verified && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#4285F4">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GoogleGIcon size={12} />
                    <span className="text-[#70757a] text-xs">{review.date}</span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>

              {/* Review text */}
              <p className="text-[#3c4043] text-sm leading-relaxed line-clamp-4">
                {review.text}
              </p>

              {/* Read more link */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a73e8] text-sm font-medium mt-2 inline-block hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
