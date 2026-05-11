import { useRef, useEffect, useState } from "react";

const articles = [
  {
    href: "https://riseatseven.com/blog/rise-at-seven-appoints-new-senior-ops-lead/",
    imageSrc: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/137.webp",
    imageAlt: "0 B5 A8137",
    authorImageSrc: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/82.webp",
    authorName: "Ray Saddiq",
    readTime: "3 mins",
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
    category: "",
  },
  {
    href: "https://riseatseven.com/blog/rise-at-seven-announces-new-global-hq-in-manchester/",
    imageSrc: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/136.webp",
    imageAlt: "WRAS Manchester 01",
    authorImageSrc: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/82.webp",
    authorName: "Ray Saddiq",
    readTime: "2 mins",
    title:
      "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
    category: "",
  },
  {
    href: "https://riseatseven.com/blog/global-operations-director-promotion/",
    imageSrc: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/134.webp",
    imageAlt: "0 B5 A7827",
    authorImageSrc: "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/83.webp",
    authorName: "Carrie Rose",
    readTime: "2 mins",
    title:
      "Ryan McNamara Is Now Rise at Seven&#39;s Global Operations Director",
    category: "News",
  },
];

export const NewsSection = () => {
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
    setThumbScale(el.scrollLeft / maxScroll);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchScrollLeft.current = el.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      const dx = touchStartX.current - e.touches[0].clientX;
      el.scrollLeft = touchScrollLeft.current + dx;
      e.preventDefault();
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
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
    <div className="box-border caret-transparent outline-[3px]">
      <section className="box-border caret-transparent outline-[3px] w-full pb-12 md:pb-24">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(12,minmax(0px,1fr))] outline-[3px] gap-y-3 md:gap-x-5 md:gap-y-7">
            {/* Header row */}
            <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] px-4 md:px-7">
              <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(12,minmax(0px,1fr))] outline-[3px] gap-y-3 pb-0 border-b-0 border-solid border-black md:gap-x-5 md:gap-y-7 md:border-stone-300 md:pb-5 md:border-b">
                <div className="items-end box-border caret-transparent flex col-end-[span_11] col-start-[span_11] min-h-[auto] min-w-[auto] outline-[3px] md:col-end-[span_9] md:col-start-[span_9]">
                  <h2 className="relative text-neutral-900 text-6xl font-medium box-border caret-transparent flex flex-col flex-wrap justify-start tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                    <div className="relative text-6xl box-border caret-transparent flex flex-wrap justify-start tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                      <div className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                        What&#39;s
                      </div>
                      <div className="relative text-6xl bg-[oklab(0_0_0_/_0.1)] box-border caret-transparent shrink-0 tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] w-[54px] overflow-hidden mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px] md:w-[75px]">
                        <div className="relative text-6xl box-border caret-transparent h-full tracking-[-2.1px] leading-[54px] outline-[3px] w-full md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                          <picture>
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/81.webp"
                              sizes="100vw"
                              alt="FOS25 3380"
                              className="absolute text-6xl box-border caret-transparent h-full tracking-[-2.1px] leading-[54px] max-w-full object-cover outline-[3px] w-full inset-0 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                        New
                      </div>
                    </div>
                  </h2>
                </div>
                {/* Desktop CTA */}
                <div className="[align-items:normal] box-border caret-transparent hidden col-end-[span_12] col-start-[span_12] justify-normal min-h-0 min-w-0 outline-[3px] md:items-center md:flex md:col-end-[span_3] md:col-start-[span_3] md:justify-end md:min-h-[auto] md:min-w-[auto]">
                  <a
                    href="https://riseatseven.com/blog/"
                    className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 min-h-0 min-w-0 outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto"
                  >
                    <span className="flex items-center gap-x-1.5">
                      Explore More Thoughts
                      <svg
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-2.5 h-2.5"
                        aria-hidden="true"
                      >
                        <line x1="2" y1="8" x2="8" y2="2" />
                        <polyline points="3,2 8,2 8,7" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Cards scroll area */}
            <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] px-0 md:px-7">
              <div className="relative box-border caret-transparent list-none outline-[3px] w-full z-[1] overflow-hidden mx-auto">
                <div
                  ref={scrollRef}
                  className="news-scroll relative caret-transparent flex h-full outline-[3px] w-full z-[1] select-none"
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
                  <style>{`.news-scroll::-webkit-scrollbar { display: none; }`}</style>
                  <div className="flex w-max gap-x-[15px] pl-4 pr-4 md:pl-0 md:pr-0 py-2">
                    {articles.map((article, i) => (
                      <div
                        key={i}
                        className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] w-[324px] md:w-[394px]"
                      >
                        <a
                          href={article.href}
                          className="items-start box-border caret-transparent flex flex-col outline-[3px] gap-y-5 w-full"
                        >
                          {/* Image */}
                          <div className="box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            {article.category ? (
                              <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-20 p-3">
                                <div className="box-border caret-transparent gap-x-1 flex flex-wrap outline-[3px] gap-y-1">
                                  <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px]">
                                    {article.category}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-20 p-3" />
                            )}
                            <div className="relative aspect-square box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl md:rounded-3xl">
                              <picture>
                                <img
                                  src={article.imageSrc}
                                  sizes="100vw"
                                  alt={article.imageAlt}
                                  className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                                />
                              </picture>
                            </div>
                          </div>
                          {/* Meta + title */}
                          <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
                            <div className="items-start box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 mt-1">
                              {/* Author pill */}
                              <div className="text-neutral-500 text-sm font-medium items-center bg-white box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:min-h-8 md:py-1.5">
                                <div className="text-sm items-center box-border caret-transparent flex justify-center tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] -ml-1.5">
                                  <div className="text-sm box-border caret-transparent h-5 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] w-5 overflow-hidden -mr-1 rounded-[3.35544e+07px]">
                                    <img
                                      src={article.authorImageSrc}
                                      alt=""
                                      className="h-full max-w-full object-cover w-full"
                                    />
                                  </div>
                                </div>
                                <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px]">
                                  {article.authorName}
                                </div>
                              </div>
                              {/* Read time pill */}
                              <div className="text-neutral-500 text-sm font-medium items-center bg-white box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:min-h-8 md:py-1.5">
                                <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px]">
                                  {article.readTime}
                                </div>
                              </div>
                            </div>
                            <h2
                              className="relative text-neutral-900 text-2xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.84px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-3xl md:tracking-[-1.05px] md:leading-[30px]"
                              dangerouslySetInnerHTML={{
                                __html: article.title,
                              }}
                            />
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scroll indicator — mobile only */}
              <div className="relative w-full mt-5 px-4 py-3 md:hidden">
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

            {/* Mobile CTA */}
            <div className="box-border caret-transparent block col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] px-4 md:hidden md:min-h-0 md:min-w-0 md:px-7">
              <a
                href="https://riseatseven.com/blog/"
                className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent"
              >
                <span className="flex items-center gap-x-1.5">
                  Explore More Thoughts
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-2.5 h-2.5"
                    aria-hidden="true"
                  >
                    <line x1="2" y1="8" x2="8" y2="2" />
                    <polyline points="3,2 8,2 8,7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
