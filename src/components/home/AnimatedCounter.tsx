import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter: React.FC<{ target: string }> = ({ target }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const targetNum = parseFloat(target.replace(/[^0-9.]/g, ""));
  const suffix = target.replace(/[0-9.]/g, "");
  const hasDecimal = target.includes(".");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          const duration = 2000;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
            setCount(easeOutCubic(progress) * targetNum);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [targetNum]);

  return (
    <div ref={elementRef} className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2 tracking-tighter">
      {hasDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
      {suffix}
    </div>
  );
};

export default AnimatedCounter;