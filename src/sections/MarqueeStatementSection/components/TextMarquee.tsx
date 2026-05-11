import { useRef, useEffect, useCallback } from "react";

const MarqueeItem = ({
  text,
  imgSrc,
  imgAlt,
}: {
  text: string;
  imgSrc: string;
  imgAlt: string;
}) => (
  <div className="items-center box-border caret-transparent gap-x-5 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] py-3 px-4 md:gap-x-10 md:py-8 md:px-8">
    <h2 className="relative text-neutral-900 font-medium box-border caret-transparent flex basis-[0%] grow flex-wrap justify-start tracking-[-2px] leading-[1] min-h-[auto] min-w-[auto] outline-[3px] text-left whitespace-nowrap text-[56px] md:text-[200px] md:tracking-[-7px]">
      {text}
    </h2>
    <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[60px] overflow-hidden rounded-2xl md:w-[160px] md:rounded-3xl md:mb-8">
      <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[100%]">
        <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
          <img
            src={imgSrc}
            sizes="100vw"
            alt={imgAlt}
            className="box-border caret-transparent max-w-full outline-[3px] w-full h-full object-cover"
          />
        </picture>
      </div>
    </div>
  </div>
);

const items = [
  {
    text: "Chasing Consumers",
    imgSrc: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/133.webp",
    imgAlt: "Screenshot 2025 06 25 at 14 49 00",
  },
  {
    text: "Not Algorithms",
    imgSrc: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/131.webp",
    imgAlt: "IMG 5023",
  },
];

export const TextMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const velocityRef = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  const AUTO_SPEED = 1.0;

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
    <div
      className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden block cursor-grab active:cursor-grabbing select-none"
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
        className="flex"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <MarqueeItem
            key={i}
            text={item.text}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
          />
        ))}
      </div>
    </div>
  );
};
