import { useRef, useEffect, useState } from "react";

export const MobileLegacyCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);
  const touchStartX = useRef(0);
  const touchScrollLeft = useRef(0);
  const [thumbScale, setThumbScale] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const progress = el.scrollLeft / maxScroll;
    setThumbScale(progress);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchScrollLeft.current = el.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const deltaX = touchStartX.current - e.touches[0].clientX;
      el.scrollLeft = touchScrollLeft.current + deltaX;
      e.preventDefault();
    };

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.2;
    if (scrollRef.current)
      scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const thumbTranslate = `${thumbScale * 200}%`;

  return (
    <div className="box-border caret-transparent block outline-[3px] gap-y-3 w-full px-0 py-10 md:hidden md:gap-y-5">
      <div className="box-border caret-transparent flex justify-center outline-[3px] mb-3 px-4">
        <h2 className="relative text-neutral-900 text-[17.008px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.59528px] leading-[21.26px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px] md:min-h-0 md:min-w-0">
          Legacy In The Making
        </h2>
      </div>

      {/* scroll container */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="legacy-scroll select-none"
          style={
            {
              overflowX: "scroll",
              cursor: "grab",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            } as React.CSSProperties
          }
          onScroll={handleScroll}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          <style>{`.legacy-scroll::-webkit-scrollbar { display: none; }`}</style>

          <div className="flex w-max gap-x-[15px] pb-1 pl-4 pr-4">
            {/* Card 1 — Pioneers */}
            <div className="relative flex shrink-0 w-[343px]">
              <div className="[align-items:normal] aspect-auto bg-black box-border caret-transparent grid flex-col min-h-[auto] min-w-[auto] outline-[3px] text-center w-full p-7 rounded-2xl">
                <div className="[align-items:normal] box-border caret-transparent flex flex-col col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 md:items-center md:gap-y-5">
                  <div className="relative aspect-[4/3] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden rounded-xl">
                    <picture>
                      <img
                        src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/130.webp"
                        sizes="100vw"
                        alt="Pioneers"
                        className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                      />
                    </picture>
                  </div>
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4">
                    <h2 className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-center tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px]">
                      Pioneers
                    </h2>
                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <p className="text-white text-sm box-border caret-transparent leading-[21px] outline-[3px] mb-5">
                        We&#39;re dedicated to creating the industry narrative
                        that others follow 3 years from now. We paved the path
                        for creative SEO, multi-channel search with Digital PR,
                        and Social Search and we will continue to do it.
                      </p>
                      <p className="text-white text-sm box-border caret-transparent leading-[21px] outline-[3px]">
                        We&#39;re on a mission to be the first search-first
                        agency to win a Cannes Lion disrupting the status quo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — Award Winning */}
            <div className="relative flex shrink-0 w-[343px]">
              <div className="[align-items:normal] aspect-auto bg-green-200 box-border caret-transparent grid flex-col min-h-[auto] min-w-[auto] outline-[3px] text-center w-full p-7 rounded-2xl">
                <div className="[align-items:normal] box-border caret-transparent flex flex-col col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 md:items-center md:gap-y-5">
                  <div className="relative aspect-[4/3] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden rounded-xl">
                    <picture>
                      <img
                        src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/99.webp"
                        sizes="100vw"
                        alt="Award Winning"
                        className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                      />
                    </picture>
                  </div>
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4">
                    <h2 className="relative text-neutral-900 text-3xl font-medium box-border caret-transparent flex flex-wrap justify-center tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px]">
                      Award Winning
                    </h2>
                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <p className="text-neutral-900 text-sm box-border caret-transparent leading-[21px] outline-[3px]">
                        A roll top bath full of 79 awards. Voted The Drum&#39;s
                        best agency outside of London. We are official judges
                        for industry awards including Global Search Awards and
                        Global Content Marketing Awards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 — Speed */}
            <div className="relative flex shrink-0 w-[343px]">
              <div className="[align-items:normal] aspect-auto bg-white box-border caret-transparent grid flex-col min-h-[auto] min-w-[auto] outline-[3px] text-center w-full p-7 rounded-2xl">
                <div className="[align-items:normal] box-border caret-transparent flex flex-col col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 md:items-center md:gap-y-5">
                  <div className="relative aspect-[4/3] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden rounded-xl">
                    <picture>
                      <img
                        src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/139.webp"
                        sizes="100vw"
                        alt="Speed"
                        className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                      />
                    </picture>
                  </div>
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4">
                    <h2 className="relative text-neutral-900 text-3xl font-medium box-border caret-transparent flex flex-wrap justify-center tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px]">
                      Speed
                    </h2>
                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <p className="text-neutral-900 text-sm box-border caret-transparent leading-[21px] outline-[3px]">
                        People ask us why we are called Rise at Seven? Ever
                        heard the saying Early Bird catches the worm? Google is
                        moving fast, but humans are moving faster. We chase
                        consumers, not algorithms. We&#39;ve created a service
                        which takes ideas to result within 60 minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar indicator */}
      <div className="relative w-full mt-3 px-4">
        <div className="relative bg-white h-1 w-full overflow-hidden rounded-full">
          <span
            className="absolute bg-black block h-full rounded-full left-0 top-0 transition-transform duration-75"
            style={{
              width: "33.333%",
              transform: `translateX(${thumbTranslate})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
