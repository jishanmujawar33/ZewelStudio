import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Diamond, 
  Wallet, 
  Calendar, 
  Gift, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MapPin,
  MessageCircle,
  RefreshCw,
  Coins
} from 'lucide-react';
// @ts-ignore
import model3 from '../../imports/model-3.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function DiamondPlanPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mathRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Math Animation
    if (mathRef.current) {
      gsap.fromTo(
        mathRef.current.children,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          delay: 0.5
        }
      );
    }

    // Scroll Animations
    const animateSection = (ref: React.RefObject<HTMLDivElement>, yOffset = 50) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current.children,
          { y: yOffset, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
            }
          }
        );
      }
    };

    animateSection(stepsRef);
    animateSection(benefitsRef);
    animateSection(tableRef);
    animateSection(faqRef);

  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the Diamond Growing Plan?",
      a: "It is an exclusive savings plan where you pay fixed monthly installments for 10 months, and Zewel Studio pays the 11th installment for you. You can then use the total value to purchase premium jewelry."
    },
    {
      q: "How does the 10+1 bonus work?",
      a: "If you pay ₹10,000 every month for 10 months, your contribution is ₹1,00,000. We add a bonus of ₹10,000 (your 11th month), bringing your total redeemable value to ₹1,10,000."
    },
    {
      q: "What is the minimum monthly installment?",
      a: "The minimum monthly installment starts at just ₹5,000. You can choose any higher amount based on your budget."
    },
    {
      q: "Can I redeem against any product?",
      a: "Yes! You can redeem your accumulated value along with the bonus against any jewelry available at Zewel Studio."
    },
    {
      q: "Is there a lock-in period?",
      a: "You must complete the 10-month payment cycle to receive the 11th month bonus. Early withdrawal may result in the forfeiture of the bonus."
    },
    {
      q: "How do I enroll?",
      a: "You can easily enroll by visiting our store or by reaching out to us directly via WhatsApp."
    }
  ];

  const benefits = [
    { icon: ShieldCheck, title: "No Hidden Charges", desc: "100% of your investment goes towards your jewelry purchase." },
    { icon: Coins, title: "Flexible Monthly Amounts", desc: "Choose an installment amount that comfortably fits your lifestyle." },
    { icon: Sparkles, title: "10% Bonus on Maturity", desc: "We pay the 11th month installment for you as a loyalty bonus." },
    { icon: Gift, title: "Redeem Against Any Jewellery", desc: "No restrictions on which collections you can choose from." },
    { icon: RefreshCw, title: "Lifetime Exchange & Buyback", desc: "Standard Zewel Studio exchange policies apply to all purchases." },
    { icon: Diamond, title: "100% Transparent Process", desc: "Clear tracking and dedicated support throughout your journey." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fafafa] font-['Inter'] text-[#1f2937]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf5ee] to-[#f5e6d8] py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Content & Image */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 rounded-full border border-[#c9a84c]/30">
              <span className="text-[#163275]"><Diamond size={16} /></span>
              <span className="text-sm font-semibold tracking-wider text-[#163275]">MONTHLY INSTALLMENT PLAN</span>
            </div>
            
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#1f2937] leading-tight">
              Diamond <br/>
              Growing <span className="text-[#c9a84c] italic">Plan</span>
            </h1>
            
            <p className="text-xl text-[#1f2937]/80 tracking-widest font-light uppercase">
              Save Today. Shine Tomorrow.
            </p>

            <div className="relative w-full max-w-md aspect-[4/3] mt-8 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={model3} 
                alt="Zewel Studio Model" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Math Display */}
          <div className="flex-1 w-full lg:max-w-md bg-white rounded-3xl p-8 shadow-xl border border-[#c9a84c]/20">
            <div ref={mathRef} className="flex flex-col items-center justify-center w-full">
              {/* Equation */}
              <div className="flex items-end justify-center gap-2 sm:gap-4 md:gap-6 mb-8 w-full">
                {/* PAY */}
                <div className="text-center">
                  <p className="text-[#8b7355] text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">Pay</p>
                  <span className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#163275] leading-none">10</span>
                </div>

                {/* Plus */}
                <span className="text-[#8b7355] text-2xl sm:text-3xl md:text-4xl font-light mb-2 md:mb-3">+</span>

                {/* BONUS */}
                <div className="text-center">
                  <p className="text-[#8b7355] text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">Bonus</p>
                  <span className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#c9a84c] leading-none">1</span>
                </div>

                {/* Equals */}
                <span className="text-[#8b7355] text-2xl sm:text-3xl md:text-4xl font-light mb-2 md:mb-3">=</span>

                {/* YOU GET */}
                <div className="text-center">
                  <p className="text-[#8b7355] text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">You Get</p>
                  <span className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-[#163275] leading-none tracking-tight">11</span>
                  <span className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#163275] leading-none">!</span>
                </div>
              </div>

              {/* Badge */}
              <div className="bg-[#c9a84c] text-white px-5 py-2 rounded-sm text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-6">
                10% Extra Value
              </div>

              {/* CTA */}
              <a 
                href="#enroll" 
                className="w-full bg-[#163275] text-white py-4 px-6 rounded-sm text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:bg-[#1e4494] transition-all group shadow-md"
              >
                Enquire About Plan
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Description Bar */}
      <section className="bg-[#f0f4f8] border-y border-gray-200 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-lg md:text-xl text-[#1f2937]">
            Pay for <strong>10 months</strong> and receive the value of <strong>11 months</strong> — that's a <strong className="text-[#c9a84c]">10% bonus</strong> on your investment.
          </p>
          <p className="text-[#1f2937]/70">
            Start your diamond journey today with our flexible monthly installment plan.
          </p>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#163275]">How It Works</h2>
          <div className="w-24 h-1 bg-[#c9a84c] mx-auto mt-6 rounded-full"></div>
        </div>

        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Wallet, 
              title: "1. Choose Your Amount", 
              desc: "Select a monthly installment amount that suits your budget. Start from ₹5,000." 
            },
            { 
              icon: Calendar, 
              title: "2. Pay for 10 Months", 
              desc: "Make regular monthly payments. Track your savings effortlessly." 
            },
            { 
              icon: Gift, 
              title: "3. Redeem with Bonus", 
              desc: "Get the value of 11 months! Use your total savings to purchase any Zewel Studio jewellery." 
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 mx-auto bg-[#fdf5ee] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon size={32} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#163275] mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#163275]">Why Join the Plan?</h2>
            <div className="w-24 h-1 bg-[#c9a84c] mx-auto mt-6 rounded-full"></div>
          </div>

          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#fafafa] border border-gray-100 flex gap-4 items-start">
                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm">
                  <b.icon size={24} className="text-[#163275]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1f2937] text-lg mb-2">{b.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Calculator Section */}
      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#163275]">Plan Your Investment</h2>
          <p className="mt-4 text-gray-600">See how your money grows over 10 months.</p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100" ref={tableRef}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#163275] text-white">
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Monthly Investment</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">You Pay (10 months)</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap text-[#c9a84c]">Zewel Bonus</th>
                <th className="py-4 px-6 font-bold whitespace-nowrap">Total Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { m: "₹5,000", p: "₹50,000", b: "₹5,000", t: "₹55,000" },
                { m: "₹10,000", p: "₹1,00,000", b: "₹10,000", t: "₹1,10,000" },
                { m: "₹25,000", p: "₹2,50,000", b: "₹25,000", t: "₹2,75,000" },
                { m: "₹50,000", p: "₹5,00,000", b: "₹50,000", t: "₹5,50,000" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-[#fdf5ee]/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-[#1f2937]">{row.m}</td>
                  <td className="py-4 px-6 text-gray-600">{row.p}</td>
                  <td className="py-4 px-6 text-[#c9a84c] font-medium">+{row.b}</td>
                  <td className="py-4 px-6 font-bold text-[#163275]">{row.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#163275]">Frequently Asked Questions</h2>
          </div>

          <div ref={faqRef} className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-[#1f2937] text-lg pr-8">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="text-[#c9a84c] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Footer Section */}
      <section id="enroll" className="bg-[#163275] py-24 px-6 lg:px-12 text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Growing?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Visit our store or reach out on WhatsApp to enroll today and take the first step towards your dream jewelry.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/919136193999?text=Hi! I am interested in the Zewel Studio Diamond Growing Plan."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
            
            <a 
              href="https://www.google.com/maps/place/Zewel+Studio+%7C+Luxury+Jewellery+Store+%26+Showroom+In+Borivali+Mumbai/@19.2277884,72.8495666,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#163275] px-8 py-4 rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <MapPin size={20} className="text-[#c9a84c]" />
              Visit Store
            </a>
          </div>

          <p className="mt-12 text-white/40 text-sm">
            *Terms & Conditions Apply. The bonus is subject to the completion of all 10 monthly installments without default.
          </p>
        </div>
      </section>
    </div>
  );
}
