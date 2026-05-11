import { useRef, useEffect, useCallback } from "react";

const logos = [
  {
    src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-6.svg",
    alt: "Logo",
  },
  {
    src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/114.webp",
    alt: "01 J76 SW385",
  },
  { src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/113.webp", alt: "SN" },
  {
    src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-7.svg",
    alt: "Logo",
  },
  {
    src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/112.webp",
    alt: "Red bull logo black",
  },
  {
    src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-8.svg",
    alt: "Logo",
  },
  {
    src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/111.webp",
    alt: "Untitled design",
  },
  {
    src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-9.svg",
    alt: "Logo",
  },
  {
    src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-10.svg",
    alt: "Logo",
  },
  {
    src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-11.svg",
    alt: "Logo",
  },
  {
    src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-12.svg",
    alt: "Logo",
  },
  {
    src: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-13.svg",
    alt: "Logo",
  },
];

// Separator dot between logos
const Separator = () => (
  <div className="flex items-center shrink-0 px-3 md:px-5">
    <div className="w-1 h-1 rounded-full bg-neutral-400 opacity-40" />
  </div>
);

const LogoItem = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative box-border caret-transparent shrink-0 flex items-center h-full px-4 md:px-7">
    <div className="relative box-border caret-transparent w-16 md:w-20">
      <div className="text-neutral-900 aspect-[20/9] box-border caret-transparent">
        <img
          src={src}
          alt={alt}
          className="box-border caret-transparent h-full object-contain w-full"
        />
      </div>
    </div>
  </div>
);

// Interleave logos with separators
const TrackItems = () => (
  <>
    {logos.map((logo, i) => (
      <span key={i} className="contents">
        <LogoItem src={logo.src} alt={logo.alt} />
        <Separator />
      </span>
    ))}
  </>
);

export const LogoMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const velocityRef = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  const AUTO_SPEED = 0.5;

  const getHalfWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 1;
    return track.scrollWidth / 2;
  }, []);

  const applyOffset = useCallback(
    (offset: number) => {
      const half = getHalfWidth();
      let clamped = offset % half;
      if (clamped > 0) clamped -= half;
      offsetRef.current = clamped;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${clamped}px)`;
      }
    },
    [getHalfWidth],
  );

  useEffect(() => {
    const tick = () => {
      if (!isDragging.current) {
        if (Math.abs(velocityRef.current) > 0.1) {
          velocityRef.current *= 0.92;
          applyOffset(offsetRef.current - velocityRef.current);
        } else {
          velocityRef.current = 0;
          applyOffset(offsetRef.current - AUTO_SPEED);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [applyOffset]);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    lastX.current = e.clientX;
    lastTime.current = performance.now();
    velocityRef.current = 0;
  };

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current) return;
      const now = performance.now();
      const dt = Math.max(now - lastTime.current, 1);
      velocityRef.current = ((lastX.current - e.clientX) / dt) * 16;
      lastX.current = e.clientX;
      lastTime.current = now;
      const delta = e.clientX - dragStartX.current;
      applyOffset(dragStartOffset.current + delta);
    },
    [applyOffset],
  );

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartOffset.current = offsetRef.current;
    lastX.current = e.touches[0].clientX;
    lastTime.current = performance.now();
    velocityRef.current = 0;
  };

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging.current) return;
      const now = performance.now();
      const dt = Math.max(now - lastTime.current, 1);
      velocityRef.current = ((lastX.current - e.touches[0].clientX) / dt) * 16;
      lastX.current = e.touches[0].clientX;
      lastTime.current = now;
      const delta = e.touches[0].clientX - dragStartX.current;
      applyOffset(dragStartOffset.current + delta);
    },
    [applyOffset],
  );

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  return (
    <div className="relative box-border caret-transparent col-end-[span_20] col-start-[span_20] min-h-[auto] min-w-[auto] w-full md:col-end-[span_18] md:col-start-[span_18]">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-zinc-100 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-zinc-100 to-transparent" />

      <div
        className="relative box-border caret-transparent w-full overflow-hidden cursor-grab active:cursor-grabbing select-none py-3 md:py-5"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <div
          ref={trackRef}
          style={{
            width: "max-content",
            transform: "translateX(0px)",
            willChange: "transform",
          }}
          className="flex items-center"
        >
          {/* First copy */}
          <TrackItems />
          {/* Second copy for seamless loop */}
          <TrackItems />
        </div>
      </div>
    </div>
  );
};
