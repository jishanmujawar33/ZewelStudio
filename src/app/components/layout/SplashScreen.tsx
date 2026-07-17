import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import logoDiamond from "../../../imports/logo-diamond.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the whole splash
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: onComplete,
        });
      },
    });

    // Diamond logo entrance - scale up from 0 with rotation
    tl.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.4)" }
    );

    // Text fade in
    tl.fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    // Progress bar fill
    tl.fromTo(
      barFillRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power1.inOut",
        onUpdate: function () {
          setProgress(Math.round(this.progress() * 100));
        },
      },
      "-=0.2"
    );

    // Hold briefly
    tl.to({}, { duration: 0.3 });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a6b 50%, #0f1f3d 100%)" }}
    >
      {/* Subtle animated particles / shimmer overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
            animation: "pulse-glow 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Diamond Logo */}
      <img
        ref={logoRef}
        src={logoDiamond}
        alt="Zewel Studio"
        className="w-20 h-20 object-contain mb-8 opacity-0"
        style={{ filter: "brightness(0) invert(1)" }}
      />

      {/* Brand Text */}
      <div ref={textRef} className="text-center opacity-0 mb-10">
        <h1 className="font-['Playfair_Display'] text-white text-3xl md:text-4xl tracking-wider mb-2">
          ZEWEL STUDIO
        </h1>
        <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-medium">
          Luxury Jewellery · Borivali, Mumbai
        </p>
      </div>

      {/* Progress Bar */}
      <div ref={barRef} className="w-48 flex flex-col items-center gap-3">
        <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={barFillRef}
            className="h-full rounded-full origin-left"
            style={{
              background: "linear-gradient(90deg, #2563eb, #93c5fd)",
              transform: "scaleX(0)",
            }}
          />
        </div>
        <span className="text-white/30 text-[10px] tracking-[0.3em] font-medium">
          {progress}%
        </span>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.25; }
        }
      `}</style>
    </div>
  );
}
