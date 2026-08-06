import { useEffect, useRef } from "react";
import gsap from "gsap";
import logoDiamond from "../../../imports/logo-diamond.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the whole splash
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: onComplete,
        });
      },
    });

    // Logo fades in and scales up gently
    tl.fromTo(
      logoRef.current,
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
    );

    // Hold for a beat
    tl.to({}, { duration: 0.6 });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "#163275" }}
    >
      {/* Logo only */}
      <img
        ref={logoRef}
        src={logoDiamond}
        alt="Zewel Studio"
        className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] object-contain opacity-0"
      />
    </div>
  );
}
