// ─── Image Imports ───────────────────────────────────────────────────────
// Bracelets
import bracelet1 from "../../imports/bracelet-1.jpg";
import bracelet2 from "../../imports/bracelet-2.jpg";
import bracelet3 from "../../imports/bracelet-3.jpg";
import bracelet4 from "../../imports/bracelet-4.jpg";
import bracelet5 from "../../imports/bracelet-5.jpg";
import bracelet6 from "../../imports/bracelet-6.jpg";
import bracelet7 from "../../imports/bracelet-7.jpg";
import bracelet8 from "../../imports/bracelet-8.jpg";
import bracelet9 from "../../imports/bracelet-9.jpg";
import bracelet10 from "../../imports/bracelet-10.jpg";
import bracelet11 from "../../imports/bracelet-11.jpg";
import bracelet12 from "../../imports/bracelet-12.jpg";

// Earrings
import earring1 from "../../imports/earring-1.jpg";
import earring2 from "../../imports/earring-2.jpg";
import earring3 from "../../imports/earring-3.jpg";
import earring4 from "../../imports/earring-4.jpg";
import earring5 from "../../imports/earring-5.jpg";
import earring6 from "../../imports/earring-6.jpg";
import earring7 from "../../imports/earring-7.jpg";
import earring8 from "../../imports/earring-8.jpg";
import earring9 from "../../imports/earring-9.jpg";
import earring10 from "../../imports/earring-10.jpg";
import earring11 from "../../imports/earring-11.jpg";
import earring12 from "../../imports/earring-12.jpg";

// Necklaces
import necklace1 from "../../imports/necklace-1.jpg";
import necklace2 from "../../imports/necklace-2.jpg";
import necklace3 from "../../imports/necklace-3.jpg";
import necklace4 from "../../imports/necklace-4.jpg";
import necklace5 from "../../imports/necklace-5.jpg";
import necklace6 from "../../imports/necklace-6.jpg";
import necklace7 from "../../imports/necklace-7.jpg";
import necklace8 from "../../imports/necklace-8.jpg";
import necklace9 from "../../imports/necklace-9.jpg";
import necklace10 from "../../imports/necklace-10.jpg";
import necklace11 from "../../imports/necklace-11.jpg";
import necklace12 from "../../imports/necklace-12.jpg";

// Models (for hero images)
import model1 from "../../imports/model-1.jpg";
import model2 from "../../imports/model-2.jpg";
import model3 from "../../imports/model-3.jpg";
import model4 from "../../imports/model-4.jpg";
import model5 from "../../imports/model-5.jpg";
import model6 from "../../imports/model-6.jpg";
import model7 from "../../imports/model-7.jpg";

// ─── Category Data ───────────────────────────────────────────────────────

export interface CategoryImage {
  url: string;
  alt: string;
  subcategory: string;
}

export interface SubCategory {
  id: string;
  name: string;
}

export interface Category {
  slug: string;
  name: string;
  labelHi: string;
  tagline: string;
  description: string;
  heroImage: string;
  subcategories: SubCategory[];
  images: CategoryImage[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "mangalsutra",
    name: "Mangalsutra",
    labelHi: "मंगलसूत्र",
    tagline: "The Sacred Thread of Love",
    description: "Discover our collection of traditional and contemporary Mangalsutras, crafted to celebrate the eternal bond of marriage.",
    heroImage: model2,
    subcategories: [
      { id: "hand-mangalsutra", name: "Hand Mangalsutra" },
      { id: "mangalsutra", name: "Mangalsutra" }
    ],
    images: [
      { url: necklace1, alt: "Diamond Mangalsutra", subcategory: "mangalsutra" },
      { url: necklace2, alt: "Modern Diamond Mangalsutra", subcategory: "mangalsutra" },
      { url: necklace3, alt: "Elegant Hand Mangalsutra", subcategory: "hand-mangalsutra" },
      { url: necklace4, alt: "Traditional Hand Mangalsutra", subcategory: "hand-mangalsutra" },
      { url: necklace5, alt: "Gold Mangalsutra", subcategory: "mangalsutra" },
      { url: necklace6, alt: "Minimalist Mangalsutra", subcategory: "mangalsutra" },
      { url: necklace7, alt: "Designer Hand Mangalsutra", subcategory: "hand-mangalsutra" },
      { url: necklace8, alt: "Classic Hand Mangalsutra", subcategory: "hand-mangalsutra" },
    ]
  },
  {
    slug: "ladies-ring",
    name: "Ladies Ring",
    labelHi: "महिलाओं की अंगूठी",
    tagline: "Elegance at Your Fingertips",
    description: "Explore our exquisite collection of ladies' rings, from stunning solitaires to intricate cocktail rings.",
    heroImage: model3,
    subcategories: [
      { id: "ladies-ring", name: "Ladies Ring" }
    ],
    images: [
      { url: earring1, alt: "Diamond Solitaire Ring", subcategory: "ladies-ring" },
      { url: earring2, alt: "Gold Cocktail Ring", subcategory: "ladies-ring" },
      { url: earring3, alt: "Sapphire and Diamond Ring", subcategory: "ladies-ring" },
      { url: earring4, alt: "Eternity Band", subcategory: "ladies-ring" },
      { url: earring5, alt: "Vintage Style Ring", subcategory: "ladies-ring" },
      { url: earring6, alt: "Modern Geometric Ring", subcategory: "ladies-ring" },
      { url: earring7, alt: "Ruby Halo Ring", subcategory: "ladies-ring" },
      { url: earring8, alt: "Three-Stone Diamond Ring", subcategory: "ladies-ring" },
    ]
  },
  {
    slug: "mens-collection",
    name: "Mens Collection",
    labelHi: "पुरुषों का संग्रह",
    tagline: "Bold & Sophisticated",
    description: "A curated selection of men's jewelry, featuring bold bracelets and distinguished rings designed for the modern gentleman.",
    heroImage: model4,
    subcategories: [
      { id: "gents-bracelets", name: "Gents Bracelets" },
      { id: "gents-ring", name: "Gents Ring" }
    ],
    images: [
      { url: bracelet1, alt: "Classic Gents Bracelet", subcategory: "gents-bracelets" },
      { url: bracelet2, alt: "Bold Gold Bracelet", subcategory: "gents-bracelets" },
      { url: bracelet3, alt: "Diamond Signet Ring", subcategory: "gents-ring" },
      { url: bracelet4, alt: "Modern Gents Ring", subcategory: "gents-ring" },
      { url: bracelet5, alt: "Link Bracelet", subcategory: "gents-bracelets" },
      { url: bracelet6, alt: "Platinum Gents Ring", subcategory: "gents-ring" },
      { url: bracelet7, alt: "Two-Tone Bracelet", subcategory: "gents-bracelets" },
      { url: bracelet8, alt: "Classic Band Ring", subcategory: "gents-ring" },
    ]
  },
  {
    slug: "necklace",
    name: "Necklace",
    labelHi: "हार",
    tagline: "Grace Around Your Neck",
    description: "From delicate chains to statement pieces, our necklaces are designed to add a touch of grace to any ensemble.",
    heroImage: model1,
    subcategories: [
      { id: "necklace", name: "Necklace" },
      { id: "necklace-set", name: "Necklace Set" },
      { id: "station-necklace", name: "Station Necklace" }
    ],
    images: [
      { url: necklace1, alt: "Diamond Station Necklace", subcategory: "station-necklace" },
      { url: necklace2, alt: "Gold Necklace Set", subcategory: "necklace-set" },
      { url: necklace3, alt: "Classic Diamond Necklace", subcategory: "necklace" },
      { url: necklace4, alt: "Elegant Necklace Set", subcategory: "necklace-set" },
      { url: necklace5, alt: "Modern Station Necklace", subcategory: "station-necklace" },
      { url: necklace6, alt: "Pendant Necklace", subcategory: "necklace" },
      { url: necklace7, alt: "Bridal Necklace Set", subcategory: "necklace-set" },
      { url: necklace8, alt: "Minimalist Station Necklace", subcategory: "station-necklace" },
      { url: necklace9, alt: "Statement Necklace", subcategory: "necklace" },
      { url: necklace10, alt: "Pearl and Diamond Set", subcategory: "necklace-set" },
      { url: necklace11, alt: "Layered Necklace", subcategory: "necklace" },
      { url: necklace12, alt: "Gemstone Station Necklace", subcategory: "station-necklace" },
    ]
  },
  {
    slug: "pendant",
    name: "Pendant",
    labelHi: "लटकन",
    tagline: "Close to Your Heart",
    description: "Beautifully crafted pendants, including sets and alphabet designs, perfect for everyday elegance or meaningful gifts.",
    heroImage: model6,
    subcategories: [
      { id: "pendant-set", name: "Pendant Set" },
      { id: "pendant", name: "Pendant" },
      { id: "alphabet-pendants", name: "Alphabet Pendants" }
    ],
    images: [
      { url: earring1, alt: "Diamond Pendant Set", subcategory: "pendant-set" },
      { url: earring2, alt: "Gold Pendant Set", subcategory: "pendant-set" },
      { url: earring3, alt: "Classic Diamond Pendant", subcategory: "pendant" },
      { url: earring4, alt: "Alphabet 'A' Pendant", subcategory: "alphabet-pendants" },
      { url: earring5, alt: "Gemstone Pendant", subcategory: "pendant" },
      { url: earring6, alt: "Alphabet 'S' Pendant", subcategory: "alphabet-pendants" },
      { url: earring7, alt: "Floral Pendant Set", subcategory: "pendant-set" },
      { url: earring8, alt: "Alphabet 'M' Pendant", subcategory: "alphabet-pendants" },
      { url: necklace9, alt: "Heart Pendant", subcategory: "pendant" },
      { url: necklace10, alt: "Alphabet 'R' Pendant", subcategory: "alphabet-pendants" },
      { url: necklace11, alt: "Modern Pendant Set", subcategory: "pendant-set" },
      { url: necklace12, alt: "Vintage Style Pendant", subcategory: "pendant" },
    ]
  },
  {
    slug: "earrings",
    name: "Earrings",
    labelHi: "झुमके",
    tagline: "Frame Your Beauty",
    description: "From classic studs to elegant Sui-Dhaga designs, our earrings are crafted to beautifully frame your face.",
    heroImage: model7,
    subcategories: [
      { id: "studs", name: "Studs" },
      { id: "sui-dhaga", name: "Sui-Dhaga Earring" }
    ],
    images: [
      { url: earring1, alt: "Diamond Studs", subcategory: "studs" },
      { url: earring2, alt: "Gold Sui-Dhaga Earrings", subcategory: "sui-dhaga" },
      { url: earring3, alt: "Pearl Studs", subcategory: "studs" },
      { url: earring4, alt: "Diamond Sui-Dhaga Earrings", subcategory: "sui-dhaga" },
      { url: earring5, alt: "Gemstone Studs", subcategory: "studs" },
      { url: earring6, alt: "Floral Sui-Dhaga Earrings", subcategory: "sui-dhaga" },
      { url: earring7, alt: "Cluster Diamond Studs", subcategory: "studs" },
      { url: earring8, alt: "Modern Sui-Dhaga Earrings", subcategory: "sui-dhaga" },
      { url: earring9, alt: "Rose Gold Studs", subcategory: "studs" },
      { url: earring10, alt: "Traditional Sui-Dhaga Earrings", subcategory: "sui-dhaga" },
      { url: earring11, alt: "Halo Diamond Studs", subcategory: "studs" },
      { url: earring12, alt: "Elegant Sui-Dhaga Earrings", subcategory: "sui-dhaga" },
    ]
  },
  {
    slug: "bangles-bracelets",
    name: "Bangles & Bracelets",
    labelHi: "चूड़ियाँ और कंगन",
    tagline: "Worn With Confidence",
    description: "Adorn your wrists with our stunning collection of bangles, tennis bracelets, and flexi bracelets.",
    heroImage: model5,
    subcategories: [
      { id: "womens-bracelets", name: "Womens Bracelets" },
      { id: "bangles", name: "Bangles" },
      { id: "flexi-bracelets", name: "Flexi Bracelets" },
      { id: "tennis-bracelets", name: "Tennis Bracelets" }
    ],
    images: [
      { url: bracelet1, alt: "Diamond Tennis Bracelet", subcategory: "tennis-bracelets" },
      { url: bracelet2, alt: "Gold Bangle", subcategory: "bangles" },
      { url: bracelet3, alt: "Elegant Flexi Bracelet", subcategory: "flexi-bracelets" },
      { url: bracelet4, alt: "Modern Womens Bracelet", subcategory: "womens-bracelets" },
      { url: bracelet5, alt: "Sapphire Tennis Bracelet", subcategory: "tennis-bracelets" },
      { url: bracelet6, alt: "Diamond Bangle", subcategory: "bangles" },
      { url: bracelet7, alt: "Rose Gold Flexi Bracelet", subcategory: "flexi-bracelets" },
      { url: bracelet8, alt: "Classic Womens Bracelet", subcategory: "womens-bracelets" },
      { url: bracelet9, alt: "Ruby Tennis Bracelet", subcategory: "tennis-bracelets" },
      { url: bracelet10, alt: "Traditional Bangle", subcategory: "bangles" },
      { url: bracelet11, alt: "Gemstone Flexi Bracelet", subcategory: "flexi-bracelets" },
      { url: bracelet12, alt: "Charm Bracelet", subcategory: "womens-bracelets" },
    ]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
