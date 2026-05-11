import { useScrollReveal } from "@/hooks/useScrollReveal";

export const DesktopLegacyStack = () => {
  const { ref: wrap1Ref, isVisible: wrap1Visible } =
    useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const { ref: wrap2Ref, isVisible: wrap2Visible } =
    useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const { ref: wrap3Ref, isVisible: wrap3Visible } =
    useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <div className="relative box-border caret-transparent hidden h-[3000px] outline-[3px] w-full md:flex">
      <div className="sticky box-border caret-transparent h-[1000px] min-h-0 min-w-0 outline-[3px] w-full overflow-hidden left-0 top-0 md:min-h-[auto] md:min-w-[auto]">
        <div className="absolute box-border caret-transparent flex justify-center outline-[3px] w-full mt-10 left-0 top-0">
          <h2 className="relative text-neutral-900 text-[17.008px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.59528px] leading-[21.26px] min-h-0 min-w-0 outline-[3px] text-left md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px] md:min-h-[auto] md:min-w-[auto]">
            Legacy In The Making
          </h2>
        </div>
        <div className="absolute items-center box-border caret-transparent flex h-full justify-center outline-[3px] w-full z-[2] left-0 top-8">
          <div
            ref={wrap1Ref}
            className={`box-border caret-transparent max-w-lg min-h-0 min-w-0 outline-[3px] transform-none w-full md:max-w-xl md:min-h-[auto] md:min-w-[auto] md:rotate-[4.000001701562398deg] reveal-delay-100 ${wrap1Visible ? "reveal-visible" : "reveal-hidden"}`}
          >
            <div className="[align-items:normal] aspect-auto bg-black box-border caret-transparent grid flex-col outline-[3px] text-center w-full p-7 rounded-2xl md:items-center md:aspect-square md:px-14 md:py-10 md:rounded-3xl">
              <div className="[align-items:normal] box-border caret-transparent flex flex-col col-start-1 row-start-1 min-h-0 min-w-0 outline-[3px] gap-y-3 md:items-center md:min-h-[auto] md:min-w-[auto] md:gap-y-5">
                <div className="relative aspect-[4_/_3] box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full overflow-hidden rounded-xl md:aspect-square md:min-h-[auto] md:min-w-[auto] md:w-48 md:rounded-2xl">
                  <picture className="box-border caret-transparent outline-[3px]">
                    <img
                      src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/130.webp"
                      sizes="100vw"
                      alt="B2087e0cd3f699d3efc76f809ec72a85a6ab378e 1080x1350"
                      className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                    />
                  </picture>
                </div>
                <div className="items-center box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] gap-y-4 md:min-h-[auto] md:min-w-[auto]">
                  <h2 className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-center tracking-[-1.05px] leading-[30px] min-h-0 min-w-0 outline-[3px] md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-[auto] md:min-w-[auto]">
                    Pioneers
                  </h2>
                  <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[auto]">
                    <p className="text-white text-sm box-border caret-transparent leading-[21px] outline-[3px] mb-5 md:text-base md:leading-6">
                      We’re dedicated to creating the industry narrative that
                      others follow 3 years from now. We paved the path for
                      creative SEO, multi-channel search with Digital PR, and
                      Social Search and we will continue to do it. 
                    </p>
                    <p className="text-white text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6">
                      We’re on a mission to be the first search-first agency to
                      win a Cannes Lion disrupting the status quo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute items-center box-border caret-transparent flex h-full justify-center outline-[3px] w-full z-[1] left-0 top-8">
          <div
            ref={wrap2Ref}
            className={`box-border caret-transparent max-w-lg min-h-0 min-w-0 outline-[3px] transform-none w-full md:max-w-xl md:min-h-[auto] md:min-w-[auto] md:rotate-[7.999994819856548deg] reveal-delay-200 ${wrap2Visible ? "reveal-visible" : "reveal-hidden"}`}
          >
            <div className="[align-items:normal] aspect-auto bg-green-200 box-border caret-transparent grid flex-col outline-[3px] text-center w-full p-7 rounded-2xl md:items-center md:aspect-square md:px-14 md:py-10 md:rounded-3xl">
              <div className="[align-items:normal] box-border caret-transparent flex flex-col col-start-1 row-start-1 min-h-0 min-w-0 outline-[3px] gap-y-3 md:items-center md:min-h-[auto] md:min-w-[auto] md:gap-y-5">
                <div className="relative aspect-[4_/_3] box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full overflow-hidden rounded-xl md:aspect-square md:min-h-[auto] md:min-w-[auto] md:w-48 md:rounded-2xl">
                  <picture className="box-border caret-transparent outline-[3px]">
                    <img
                      src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/99.webp"
                      sizes="100vw"
                      alt="D4df0d30 d590 4e94 9056 9491f4beacba"
                      className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                    />
                  </picture>
                </div>
                <div className="items-center box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] gap-y-4 md:min-h-[auto] md:min-w-[auto]">
                  <h2 className="relative text-neutral-900 text-3xl font-medium box-border caret-transparent flex flex-wrap justify-center tracking-[-1.05px] leading-[30px] min-h-0 min-w-0 outline-[3px] md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-[auto] md:min-w-[auto]">
                    Award Winning
                  </h2>
                  <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[auto]">
                    <p className="text-neutral-900 text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6">
                      A roll top bath full of 79 awards. Voted The Drum&#39;s
                      best agency outside of London. We are official judges for
                      industry awards including Global Search Awards and Global
                      Content Marketing Awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute items-center box-border caret-transparent flex h-full justify-center outline-[3px] w-full z-0 left-0 top-8">
          <div
            ref={wrap3Ref}
            className={`box-border caret-transparent max-w-lg min-h-0 min-w-0 outline-[3px] transform-none w-full md:max-w-xl md:min-h-[auto] md:min-w-[auto] md:rotate-[12.000012571476546deg] reveal-delay-300 ${wrap3Visible ? "reveal-visible" : "reveal-hidden"}`}
          >
            <div className="[align-items:normal] aspect-auto bg-white box-border caret-transparent grid flex-col outline-[3px] text-center w-full p-7 rounded-2xl md:items-center md:aspect-square md:px-14 md:py-10 md:rounded-3xl">
              <div className="[align-items:normal] box-border caret-transparent flex flex-col col-start-1 row-start-1 min-h-0 min-w-0 outline-[3px] gap-y-3 md:items-center md:min-h-[auto] md:min-w-[auto] md:gap-y-5">
                <div className="relative aspect-[4_/_3] box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full overflow-hidden rounded-xl md:aspect-square md:min-h-[auto] md:min-w-[auto] md:w-48 md:rounded-2xl">
                  <picture className="box-border caret-transparent outline-[3px]">
                    <img
                      src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/139.webp"
                      sizes="100vw"
                      alt="Screenshot 2025 06 23 at 23 15 19"
                      className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                    />
                  </picture>
                </div>
                <div className="items-center box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] gap-y-4 md:min-h-[auto] md:min-w-[auto]">
                  <h2 className="relative text-neutral-900 text-3xl font-medium box-border caret-transparent flex flex-wrap justify-center tracking-[-1.05px] leading-[30px] min-h-0 min-w-0 outline-[3px] md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-[auto] md:min-w-[auto]">
                    Speed
                  </h2>
                  <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[auto]">
                    <p className="text-neutral-900 text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6">
                      People ask us why we are called Rise at Seven? Ever heard
                      the saying Early Bird catches the worm? Google is moving
                      fast, but humans are moving faster. We chase consumers,
                      not algorithms. We’ve created a service which takes ideas
                      to result within 60 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
