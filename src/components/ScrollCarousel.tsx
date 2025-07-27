import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollCarousel.css";

gsap.registerPlugin(ScrollTrigger);

interface Slide {
  id: number;
  content: React.ReactNode;
}

interface ScrollCarouselProps {
  slides: Slide[];
}

const ScrollCarousel: React.FC<ScrollCarouselProps> = ({ slides }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = gsap.utils.toArray(".scroll-slide");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        // end: () => "+=" + container.offsetWidth,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [slides]);

  return (
    <div className="scroll-carousel" ref={containerRef}>
      {slides.map((slide) => (
        <div key={slide.id} className="scroll-slide bg-rose-400">
          {slide.content}
        </div>
      ))}
    </div>
  );
};

export default ScrollCarousel;
