import { useState } from "react";
import { AnnouncementBar } from "@/sections/Header/components/AnnouncementBar";
import { Navbar } from "@/sections/Header/components/Navbar";
import { LogoMarquee } from "@/sections/LogoMarqueeSection/components/LogoMarquee";
import { TextMarquee } from "@/sections/MarqueeStatementSection/components/TextMarquee";
import { LegacySection } from "@/sections/LegacySection";
import { NewsSection } from "@/sections/NewsSection";

const images = [
  "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/110.webp",
  "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/123.webp",
  "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/122.webp",
  "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/139.webp",
  "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/124.webp",
  "https://c.animaapp.com/mp18o4r3Bfs0lp/assets/138.webp",
];

export const Header = () => {
  const [heroImage] = useState<string>(
    () => images[Math.floor(Math.random() * images.length)],
  );
  return (
    <div className="bg-zinc-100 box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <AnnouncementBar />
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <section
          className="relative box-border caret-transparent outline-[3px] w-full"
          style={{ paddingTop: 0 }}
        >
          {/* Navbar is absolute here so it flows below the AnnouncementBar at top of page */}
          <Navbar />
          <div className="box-border caret-transparent outline-[3px] w-full">
            <div className="box-border caret-transparent hidden outline-[3px]">
              <img
                src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/67.webp"
                className="box-border caret-transparent max-w-full outline-[3px]"
              />
              <img
                src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/68.webp"
                className="box-border caret-transparent max-w-full outline-[3px]"
              />
              <img
                src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/69.webp"
                className="box-border caret-transparent max-w-full outline-[3px]"
              />
              <img
                src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/70.webp"
                className="box-border caret-transparent max-w-full outline-[3px]"
              />
              <img
                src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/71.webp"
                className="box-border caret-transparent max-w-full outline-[3px]"
              />
              <img
                src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/72.webp"
                className="box-border caret-transparent max-w-full outline-[3px]"
              />
            </div>
            <div className="relative box-border caret-transparent h-[1000px] outline-[3px] w-full p-2">
              <div className="absolute items-end box-border caret-transparent flex justify-between outline-[3px] w-full z-30 p-7 left-0 bottom-0">
                <div className="box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
                  <div className="box-border caret-transparent outline-[3px] text-center w-full md:text-left">
                    <p className="text-white text-sm box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-left">
                      Organic media planners creating, distributing &amp;
                      optimising
                      <br className="text-sm box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-left" />
                      <strong className="text-sm font-medium box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-left">
                        search-first
                      </strong>
                      content for SEO, Social, PR, Ai and LLM search
                    </p>
                  </div>
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-right">
                  <p className="text-white text-sm box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-right">
                    <strong className="text-sm font-medium box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-right">
                      4 Global Offices serving
                    </strong>
                    <br className="text-sm box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-right" />
                    <strong className="text-sm font-medium box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-right">
                      UK, USA (New York) &amp; EU
                    </strong>
                  </p>
                </div>
              </div>
              <div className="relative box-border caret-transparent h-full outline-[3px] w-full overflow-hidden rounded-3xl">
                <div className="bg-neutral-900 box-border caret-transparent grid h-full outline-[3px] w-full overflow-hidden rounded-3xl">
                  <div className="relative box-border caret-transparent blur col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-0 overflow-hidden md:blur-md">
                    <img
                      key={heroImage}
                      src={heroImage}
                      className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full inset-0"
                    />
                  </div>
                  <div className="relative items-center bg-[oklab(0.181061_-0.00153356_-0.000468194_/_0.3)] box-border caret-transparent flex col-start-1 row-start-1 justify-center min-h-[auto] min-w-[auto] outline-[3px] z-20">
                    <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] mb-5">
                        <div className="text-white text-xs font-medium box-border caret-transparent tracking-[-0.3px] leading-[15px] max-w-52 min-h-[auto] min-w-[auto] outline-[3px] text-center uppercase mb-2">
                          #1 Most recommended content marketing agency
                        </div>
                        <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px]">
                          <img
                            src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-4.svg"
                            alt="Icon"
                            className="text-white box-border caret-transparent outline-[3px] w-6"
                          />
                          <div className="relative aspect-[20_/_9] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-12">
                            <picture className="box-border caret-transparent outline-[3px]">
                              <img
                                src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/97.webp"
                                sizes="100vw"
                                alt="Global search awards"
                                className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                              />
                            </picture>
                          </div>
                          <div className="relative aspect-[20_/_9] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-12">
                            <picture className="box-border caret-transparent outline-[3px]">
                              <img
                                src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/85.webp"
                                sizes="100vw"
                                alt="Mask group"
                                className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                              />
                            </picture>
                          </div>
                          <div className="relative aspect-[20_/_9] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-12">
                            <picture className="box-border caret-transparent outline-[3px]">
                              <img
                                src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/98.webp"
                                sizes="100vw"
                                alt="UK Social Media Awards White"
                                className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                              />
                            </picture>
                          </div>
                          <div className="relative aspect-[20_/_9] box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] w-12 md:flex md:min-h-[auto] md:min-w-[auto]">
                            <picture className="box-border caret-transparent inline min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
                              <img
                                src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/96.webp"
                                sizes="100vw"
                                alt="UK Content Awards White"
                                className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                              />
                            </picture>
                          </div>
                          <img
                            src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-5.svg"
                            alt="Icon"
                            className="text-white box-border caret-transparent outline-[3px] w-6"
                          />
                        </div>
                      </div>
                      <h1 className="relative text-white text-6xl font-medium box-border caret-transparent flex flex-col flex-wrap justify-center tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-[120px] md:tracking-[-4.2px] md:leading-[108px]">
                        <div className="relative text-6xl box-border caret-transparent flex flex-wrap justify-center tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[120px] md:tracking-[-4.2px] md:leading-[108px]">
                          <div className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[120px] md:tracking-[-4.2px] md:leading-[108px]">
                            We
                          </div>
                          <div className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[120px] md:tracking-[-4.2px] md:leading-[108px]">
                            Create
                          </div>
                        </div>
                        <div className="relative text-6xl box-border caret-transparent flex flex-wrap justify-center tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[120px] md:tracking-[-4.2px] md:leading-[108px]">
                          <div className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[120px] md:tracking-[-4.2px] md:leading-[108px]">
                            Category
                          </div>
                          <div className="relative text-6xl bg-[oklab(0_0_0_/_0.1)] box-border caret-transparent shrink-0 tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] w-[54px] overflow-hidden mr-2 md:text-[120px] md:tracking-[-4.2px] md:leading-[108px] md:w-[108px]">
                            <div className="relative text-6xl box-border caret-transparent h-full tracking-[-2.1px] leading-[54px] outline-[3px] w-full md:text-[120px] md:tracking-[-4.2px] md:leading-[108px]">
                              <img
                                key={heroImage}
                                src={heroImage}
                                className="absolute text-6xl box-border caret-transparent h-full tracking-[-2.1px] leading-[54px] max-w-full object-cover outline-[3px] w-full inset-0 md:text-[120px] md:tracking-[-4.2px] md:leading-[108px]"
                              />
                            </div>
                          </div>
                          <div className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[120px] md:tracking-[-4.2px] md:leading-[108px]">
                            Leaders
                          </div>
                        </div>
                      </h1>
                      <div className="relative text-white text-lg font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left mt-2 md:text-3xl md:tracking-[-1.05px] md:leading-[30px] md:mt-4">
                        on every searchable platform
                      </div>
                      <div className="relative box-border caret-transparent gap-x-14 hidden justify-center outline-[3px] w-full z-0 overflow-hidden mt-12">
                        <div className="relative aspect-[20_/_9] box-border caret-transparent outline-[3px] w-16">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/108.webp"
                              sizes="100vw"
                              alt="Gogle"
                              className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                            />
                          </picture>
                        </div>
                        <div className="relative aspect-[20_/_9] box-border caret-transparent outline-[3px] w-16">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/107.webp"
                              sizes="100vw"
                              alt="Chat gpt"
                              className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                            />
                          </picture>
                        </div>
                        <div className="relative aspect-[20_/_9] box-border caret-transparent outline-[3px] w-16">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/109.webp"
                              sizes="100vw"
                              alt="Gemini"
                              className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                            />
                          </picture>
                        </div>
                        <div className="relative aspect-[20_/_9] box-border caret-transparent outline-[3px] w-16">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/106.webp"
                              sizes="100vw"
                              alt="Tiktok"
                              className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                            />
                          </picture>
                        </div>
                        <div className="relative aspect-[20_/_9] box-border caret-transparent outline-[3px] w-16">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/105.webp"
                              sizes="100vw"
                              alt="Youtube"
                              className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                            />
                          </picture>
                        </div>
                        <div className="relative aspect-[20_/_9] box-border caret-transparent outline-[3px] w-16">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/104.webp"
                              sizes="100vw"
                              alt="Pinterest"
                              className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                            />
                          </picture>
                        </div>
                        <div className="relative aspect-[20_/_9] box-border caret-transparent outline-[3px] w-16">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/117.webp"
                              sizes="100vw"
                              alt="Giphy"
                              className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                            />
                          </picture>
                        </div>
                        <div className="relative aspect-[20_/_9] box-border caret-transparent outline-[3px] w-16">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/116.webp"
                              sizes="100vw"
                              alt="Reddit"
                              className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                            />
                          </picture>
                        </div>
                        <div className="relative aspect-[20_/_9] box-border caret-transparent outline-[3px] w-16">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/115.webp"
                              sizes="100vw"
                              alt="Amazon"
                              className="absolute box-border caret-transparent h-full max-w-full object-contain outline-[3px] w-full inset-0"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="box-border caret-transparent outline-[3px] overflow-hidden">
        <section className="box-border caret-transparent outline-[3px] w-full pt-6 md:pt-12">
          <div className="box-border caret-transparent outline-[3px] w-full px-4 md:px-7">
            <div className="box-border caret-transparent grid grid-cols-[repeat(20,minmax(0px,1fr))] outline-[3px] gap-y-2 w-full">
              <div className="items-center box-border caret-transparent flex col-end-[span_20] col-start-[span_20] min-h-[auto] min-w-[auto] outline-[3px] md:col-end-[span_2] md:col-start-[span_2]">
                <h2 className="relative text-neutral-900 text-sm font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.49px] leading-[17.5px] max-w-none min-h-[auto] min-w-[auto] outline-[3px] text-left md:max-w-32">
                  The agency behind ...
                </h2>
              </div>
              <LogoMarquee />
            </div>
            {/* close grid */}
          </div>
          {/* close px-4 */}
        </section>
      </div>
      <section className="box-border caret-transparent outline-[3px] w-full py-12 md:py-24">
        <div className="box-border caret-transparent outline-[3px] w-full px-4 md:px-7">
          <div className="items-start box-border caret-transparent gap-x-3 flex flex-col-reverse justify-between outline-[3px] gap-y-3 w-full md:gap-x-5 md:flex-row md:gap-y-5">
            <div className="box-border caret-transparent gap-x-4 flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-full md:hidden md:min-h-0 md:min-w-0">
              <a
                href="https://riseatseven.com/about/"
                className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:inline-flex md:min-h-0 md:min-w-0 md:w-auto"
              >
                <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:min-h-0 md:min-w-0">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                        Our Story
                      </span> <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg>
                      <span className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] align-middle mt-1 md:min-h-0 md:min-w-0">
                        <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                      </span>
                    </div>
                  </div>
                  <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                        Our Story
                      </span>
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg>
                      <span className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] align-middle mt-1 md:min-h-0 md:min-w-0">
                        <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://riseatseven.com/services/"
                className="relative text-neutral-900 font-medium items-center box-border caret-transparent gap-x-2 flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] capitalize w-full border overflow-hidden border-solid border-transparent md:inline-flex md:min-h-0 md:min-w-0 md:w-auto"
              >
                <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:min-h-0 md:min-w-0">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                        Our Services 
                      </span>
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg>
                      <span className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] align-middle mt-1 md:min-h-0 md:min-w-0">
                        <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                      </span>
                    </div>
                  </div>
                  <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                        Our Services
                      </span>
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg>
                      <span className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] align-middle mt-1 md:min-h-0 md:min-w-0">
                        <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="box-border caret-transparent max-w-sm min-h-[auto] min-w-[auto] outline-[3px] w-full mt-0 mb-1 md:max-w-xl md:mt-2 md:mb-0">
              <div className="relative text-neutral-900 text-lg font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-0.63px] leading-[22.5px] outline-[3px] text-left md:text-2xl md:tracking-[-0.84px] md:leading-6">
                A global team of search-first content marketers engineering
                semantic relevancy &amp; category signals for both the internet
                and people
              </div>
            </div>
            <div className="box-border caret-transparent grid max-w-sm min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 w-full md:max-w-xl md:gap-y-7">
              <h2 className="relative text-neutral-900 text-[50px] font-medium box-border caret-transparent flex flex-col flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                <div className="relative text-[50px] box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                  <div className="text-[50px] box-border caret-transparent tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                    Driving
                  </div>
                  <div className="text-[50px] box-border caret-transparent tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                    Demand
                  </div>
                  <div className="text-[50px] box-border caret-transparent tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                    &amp;
                  </div>
                  <div className="text-[50px] box-border caret-transparent tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                    Discovery
                  </div>
                  <div className="relative text-[50px] bg-[oklab(0_0_0_/_0.1)] box-border caret-transparent shrink-0 tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] w-[50px] overflow-hidden mr-2 rounded-[15%] md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:w-[68px]">
                    <div className="relative text-[50px] box-border caret-transparent h-full tracking-[-1.75px] leading-[50px] outline-[3px] w-full md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                      <picture className="text-[50px] box-border caret-transparent tracking-[-1.75px] leading-[50px] outline-[3px] md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                        <img
                          src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/73.webp"
                          sizes="100vw"
                          alt="B2087e0cd3f699d3efc76f809ec72a85a6ab378e 1080x1350"
                          className="absolute text-[50px] box-border caret-transparent h-full tracking-[-1.75px] leading-[50px] max-w-full object-cover outline-[3px] w-full inset-0 md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </h2>
              <div className="box-border caret-transparent gap-x-4 hidden flex-wrap min-h-0 min-w-0 outline-[3px] gap-y-4 md:flex md:min-h-[auto] md:min-w-[auto]">
                <a
                  href="https://riseatseven.com/about/"
                  className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 min-h-0 min-w-0 outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto"
                >
                  <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                    <div className="box-border caret-transparent outline-[3px]">
                      <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                        <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                          Our Story
                        </span>
                        <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                          <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                        </span>
                      </div>
                    </div>
                    <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
                      <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                        <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                          Our Story
                        </span>
                        <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                          <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://riseatseven.com/services/"
                  className="relative text-neutral-900 font-medium items-center box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 min-h-0 min-w-0 outline-[3px] capitalize w-full border overflow-hidden border-solid border-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto"
                >
                  <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                    <div className="box-border caret-transparent outline-[3px]">
                      <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                        <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                          Our Services
                        </span>
                        <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                          <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                        </span>
                      </div>
                    </div>
                    <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
                      <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                        <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                          Our Services
                        </span>
                        <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                          <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="box-border caret-transparent outline-[3px]">
        <section className="box-border caret-transparent outline-[3px] w-full pb-12 md:pb-24">
          <div className="box-border caret-transparent outline-[3px] w-full px-4 md:px-7">
            <div className="relative box-border caret-transparent flex outline-[3px] w-full overflow-hidden -my-7">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full py-7 top-0">
                <div className="bg-neutral-900 box-border caret-transparent grid grid-cols-[repeat(12,minmax(0px,1fr))] h-full outline-[3px] w-full overflow-hidden px-5 rounded-3xl md:px-10">
                  <div className="relative items-start box-border caret-transparent hidden col-end-[span_12] col-start-[span_12] h-auto min-h-0 min-w-0 outline-[3px] md:items-center md:flex md:col-end-[span_6] md:col-start-[span_6] md:h-[960px] md:min-h-[auto] md:min-w-[auto]">
                    <div className="relative items-start box-border caret-transparent flex flex-col h-full min-h-0 min-w-0 outline-[3px] gap-y-[normal] z-10 pt-16 pb-0 md:min-h-[auto] md:min-w-[auto] md:gap-y-20 md:pt-24 md:pb-32">
                      <h2 className="relative text-white text-[17.008px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.59528px] leading-[21.26px] min-h-0 min-w-0 outline-[3px] text-left md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px] md:min-h-[auto] md:min-w-[auto]">
                        Featured Work
                      </h2>
                      <div className="relative box-border caret-transparent hidden basis-[0%] grow min-h-0 min-w-0 outline-[3px] overflow-hidden pr-5 md:block md:min-h-[auto] md:min-w-[auto]">
                        <div className="absolute bg-[linear-gradient(in_oklab,rgb(17,18,18)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent hidden h-[33.3333%] outline-[3px] pointer-events-none w-full z-20 left-0 top-0 md:flex"></div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(17,18,18)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent hidden h-[33.3333%] outline-[3px] pointer-events-none w-full z-20 left-0 bottom-0 md:flex"></div>
                        <div className="relative box-border caret-transparent grid outline-[3px] gap-y-2 z-10">
                          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[150px]">
                            <a
                              href="https://riseatseven.com/work/sixt/"
                              className="items-start box-border caret-transparent gap-x-2 flex outline-[3px]"
                            >
                              <div className="relative text-white text-[50px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-0 min-w-0 outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:min-h-[auto] md:min-w-[auto]">
                                SIXT
                              </div>
                              <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] mt-2 md:min-h-[auto] md:min-w-[auto]">
                                [2023-2025]
                              </div>
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[150px]">
                            <a
                              href="https://riseatseven.com/work/dojo/"
                              className="items-start box-border caret-transparent gap-x-2 flex outline-[3px]"
                            >
                              <div className="relative text-white text-[50px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-0 min-w-0 outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:min-h-[auto] md:min-w-[auto]">
                                Dojo - B2B
                              </div>
                              <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] mt-2 md:min-h-[auto] md:min-w-[auto]">
                                [2021-2025]
                              </div>
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[150px]">
                            <a
                              href="https://riseatseven.com/work/magnet-trade-b2b/"
                              className="items-start box-border caret-transparent gap-x-2 flex outline-[3px]"
                            >
                              <div className="relative text-white text-[50px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-0 min-w-0 outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:min-h-[auto] md:min-w-[auto]">
                                Magnet Trade - B2B
                              </div>
                              <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] mt-2 md:min-h-[auto] md:min-w-[auto]">
                                [2023-2024]
                              </div>
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[150px]">
                            <a
                              href="https://riseatseven.com/work/esim-case-study/"
                              className="items-start box-border caret-transparent gap-x-2 flex outline-[3px]"
                            >
                              <div className="relative text-white text-[50px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-0 min-w-0 outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:min-h-[auto] md:min-w-[auto]">
                                Leading E Sim brand globally
                              </div>
                              <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] mt-2 md:min-h-[auto] md:min-w-[auto]">
                                [2023-2025]
                              </div>
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[150px]">
                            <a
                              href="https://riseatseven.com/work/jd-sports-/"
                              className="items-start box-border caret-transparent gap-x-2 flex outline-[3px]"
                            >
                              <div className="relative text-white text-[50px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-0 min-w-0 outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:min-h-[auto] md:min-w-[auto]">
                                JD Sports
                              </div>
                              <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] mt-2 md:min-h-[auto] md:min-w-[auto]">
                                [2025]
                              </div>
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[150px]">
                            <a
                              href="https://riseatseven.com/work/parkdean-resorts-easter-breaks/"
                              className="items-start box-border caret-transparent gap-x-2 flex outline-[3px]"
                            >
                              <div className="relative text-white text-[50px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-0 min-w-0 outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:min-h-[auto] md:min-w-[auto]">
                                Parkdean Resorts
                              </div>
                              <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] mt-2 md:min-h-[auto] md:min-w-[auto]">
                                [2019-2025]
                              </div>
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[150px]">
                            <a
                              href="https://riseatseven.com/work/pooky/"
                              className="items-start box-border caret-transparent gap-x-2 flex outline-[3px]"
                            >
                              <div className="relative text-white text-[50px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-0 min-w-0 outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:min-h-[auto] md:min-w-[auto]">
                                Pooky
                              </div>
                              <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] mt-2 md:min-h-[auto] md:min-w-[auto]">
                                [2025]
                              </div>
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[150px]">
                            <a
                              href="https://riseatseven.com/work/parkdean-resorts-social-search/"
                              className="items-start box-border caret-transparent gap-x-2 flex outline-[3px]"
                            >
                              <div className="relative text-white text-[50px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-0 min-w-0 outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:min-h-[auto] md:min-w-[auto]">
                                Parkdean Resorts
                              </div>
                              <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] mt-2 md:min-h-[auto] md:min-w-[auto]">
                                [2019-2025]
                              </div>
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[150px]">
                            <a
                              href="https://riseatseven.com/work/revolution-beauty/"
                              className="items-start box-border caret-transparent gap-x-2 flex outline-[3px]"
                            >
                              <div className="relative text-white text-[50px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-0 min-w-0 outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:min-h-[auto] md:min-w-[auto]">
                                Revolution Beauty
                              </div>
                              <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] mt-2 md:min-h-[auto] md:min-w-[auto]">
                                [2022-2025]
                              </div>
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[150px]">
                            <a
                              href="https://riseatseven.com/work/lloyds-pharmacy/"
                              className="items-start box-border caret-transparent gap-x-2 flex outline-[3px]"
                            >
                              <div className="relative text-white text-[50px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-0 min-w-0 outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:min-h-[auto] md:min-w-[auto]">
                                Lloyds Pharmacy
                              </div>
                              <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] mt-2 md:min-h-[auto] md:min-w-[auto]">
                                [2022-23]
                              </div>
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[150px]">
                            <a
                              href="https://riseatseven.com/work/prettylittlething/"
                              className="items-start box-border caret-transparent gap-x-2 flex outline-[3px]"
                            >
                              <div className="relative text-white text-[50px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-0 min-w-0 outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:min-h-[auto] md:min-w-[auto]">
                                PrettyLittleThing
                              </div>
                              <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] mt-2 md:min-h-[auto] md:min-w-[auto]">
                                [2021-2023]
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent grid col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] pt-7 pb-14 md:col-end-[span_6] md:col-start-7">
                    <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] mb-5 md:hidden md:min-h-0 md:min-w-0">
                      <h2 className="relative text-white text-[17.008px] font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-0.59528px] leading-[21.26px] outline-[3px] text-left md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Featured Work
                      </h2>
                    </div>
                    <a
                      href="https://riseatseven.com/work/sixt/"
                      className="group box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
                    >
                      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
                          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/110.webp"
                              sizes="100vw"
                              alt="Sixt 1"
                              className="box-border caret-transparent max-w-full outline-[3px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5">
                        <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            Car rental
                          </div>
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                        </div>
                      </div>
                      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
                        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
                          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
                            [2023-2025]
                          </div>
                          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            SIXT
                          </div>
                        </div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
                      </div>
                      <div className="text-neutral-900 items-start bg-orange-400 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                          An extra 3m clicks regionally through SEO
                        </div>
                        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24"></div>
                          <div className="text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                              Car rental
                            </div>
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://riseatseven.com/work/dojo/"
                      className="group box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
                    >
                      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
                          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/123.webp"
                              sizes="100vw"
                              alt="Dojo go product shot 1"
                              className="box-border caret-transparent max-w-full outline-[3px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5">
                        <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            Card Machines
                          </div>
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                        </div>
                      </div>
                      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
                        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
                          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
                            [2021-2025]
                          </div>
                          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            Dojo - B2B
                          </div>
                        </div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
                      </div>
                      <div className="text-neutral-900 items-start bg-red-200 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                          A B2B success story for Dojo card machines
                        </div>
                        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24"></div>
                          <div className="text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                              Card Machines
                            </div>
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://riseatseven.com/work/magnet-trade-b2b/"
                      className="group box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
                    >
                      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
                          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/122.webp"
                              sizes="100vw"
                              alt="Screenshot 2026 02 07 at 17 01 43"
                              className="box-border caret-transparent max-w-full outline-[3px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5"></div>
                      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
                        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
                          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
                            [2023-2024]
                          </div>
                          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            Magnet Trade - B2B
                          </div>
                        </div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
                      </div>
                      <div className="text-neutral-900 items-start bg-purple-300 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                          A full service SEO success story 170%+ increase
                        </div>
                        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24"></div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://riseatseven.com/work/esim-case-study/"
                      className="group box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
                    >
                      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
                          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/121.webp"
                              sizes="100vw"
                              alt="E SIM Europe p1 what is e SIM 2 1"
                              className="box-border caret-transparent max-w-full outline-[3px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5">
                        <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            Esims
                          </div>
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                        </div>
                      </div>
                      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
                        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
                          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
                            [2023-2025]
                          </div>
                          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            Leading E Sim brand globally
                          </div>
                        </div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
                      </div>
                      <div className="text-neutral-900 items-start bg-orange-400 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                          Increasing brand and non brand visibility UK/ES
                        </div>
                        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24"></div>
                          <div className="text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                              Esims
                            </div>
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://riseatseven.com/work/jd-sports-/"
                      className="group box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
                    >
                      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
                          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/124.webp"
                              sizes="100vw"
                              alt="Maxresdefault"
                              className="box-border caret-transparent max-w-full outline-[3px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5">
                        <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            Trainers
                          </div>
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                        </div>
                      </div>
                      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
                        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
                          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
                            [2025]
                          </div>
                          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            JD Sports
                          </div>
                        </div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
                      </div>
                      <div className="text-neutral-900 items-start bg-blue-500 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                          65% up YoY in clicks for JDSports FR, IT, ES
                        </div>
                        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24"></div>
                          <div className="text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                              Trainers
                            </div>
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://riseatseven.com/work/parkdean-resorts-easter-breaks/"
                      className="group box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
                    >
                      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
                          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/138.webp"
                              sizes="100vw"
                              alt="Easter breaks"
                              className="box-border caret-transparent max-w-full outline-[3px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5">
                        <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            Easter Breaks
                          </div>
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                        </div>
                      </div>
                      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
                        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
                          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
                            [2019-2025]
                          </div>
                          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            Parkdean Resorts
                          </div>
                        </div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
                      </div>
                      <div className="text-neutral-900 items-start bg-red-300 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                          Dominating Google and AI search
                        </div>
                        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24"></div>
                          <div className="text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                              Easter Breaks
                            </div>
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://riseatseven.com/work/pooky/"
                      className="group box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
                    >
                      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
                          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                            <img
                            src="https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=1600&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=48b4d2d53fd31e1985a613ef74561c41"
                              sizes="100vw"
                              alt="Pooky Rechargable Doorstop Cordless 100 Straight Empire Pendant Silk Ikat Shade in Black and Cream Atlas 44 Single chukka Cordless 95 scaled 1 1"
                              className="box-border caret-transparent max-w-full outline-[3px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5">
                        <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            Rechargeable Lights
                          </div>
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                        </div>
                      </div>
                      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
                        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
                          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
                            [2025]
                          </div>
                          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            Pooky
                          </div>
                        </div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
                      </div>
                      <div className="text-neutral-900 items-start bg-teal-400 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                          Driving demand for Pooky Rechargeable Lights
                        </div>
                        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24"></div>
                          <div className="text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                              Rechargeable Lights
                            </div>
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://riseatseven.com/work/parkdean-resorts-social-search/"
                      className="group box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
                    >
                      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
                          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/120.webp"
                              sizes="100vw"
                              alt="1"
                              className="box-border caret-transparent max-w-full outline-[3px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5">
                        <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            UK holidays
                          </div>
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                        </div>
                      </div>
                      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
                        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
                          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
                            [2019-2025]
                          </div>
                          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            Parkdean Resorts
                          </div>
                        </div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
                      </div>
                      <div className="text-neutral-900 items-start bg-pink-300 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                          Social search and multi channel content to #1
                        </div>
                        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24"></div>
                          <div className="text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                              UK holidays
                            </div>
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://riseatseven.com/work/revolution-beauty/"
                      className="group box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
                    >
                      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
                          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/118.webp"
                              sizes="100vw"
                              alt="Screenshot 2025 06 10 at 12 13 46"
                              className="box-border caret-transparent max-w-full outline-[3px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5">
                        <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            Beauty Dupes
                          </div>
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                        </div>
                      </div>
                      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
                        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
                          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
                            [2022-2025]
                          </div>
                          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            Revolution Beauty
                          </div>
                        </div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
                      </div>
                      <div className="text-neutral-900 items-start bg-red-200 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                          Building the UK&#39;s leading beauty dupe brand
                        </div>
                        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24">
                            <div className="aspect-[20_/_9] box-border caret-transparent outline-[3px]">
                              <img
                                src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-14.svg"
                                alt="Icon"
                                className="box-border caret-transparent h-full object-contain outline-[3px] w-full"
                              />
                            </div>
                          </div>
                          <div className="text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                              Beauty Dupes
                            </div>
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://riseatseven.com/work/lloyds-pharmacy/"
                      className="group box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
                    >
                      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
                          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/140.webp"
                              sizes="100vw"
                              alt="Screenshot 2025 07 04 at 12 50 54"
                              className="box-border caret-transparent max-w-full outline-[3px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5">
                        <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            STI tests
                          </div>
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                        </div>
                      </div>
                      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
                        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
                          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
                            [2022-23]
                          </div>
                          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            Lloyds Pharmacy
                          </div>
                        </div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
                      </div>
                      <div className="text-neutral-900 items-start bg-cyan-300 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                          Driving category leadership for STI tests
                        </div>
                        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24"></div>
                          <div className="text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                              STI tests
                            </div>
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://riseatseven.com/work/prettylittlething/"
                      className="group box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
                    >
                      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
                          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/132.webp"
                              sizes="100vw"
                              alt="Screenshot 2025 06 23 at 14 43 56"
                              className="box-border caret-transparent max-w-full outline-[3px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5">
                        <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            Outfits
                          </div>
                          <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                        </div>
                      </div>
                      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
                        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
                          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
                            [2021-2023]
                          </div>
                          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            PrettyLittleThing
                          </div>
                        </div>
                        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
                      </div>
                      <div className="text-neutral-900 items-start bg-red-200 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                          Driving discovery for everything &quot;outfits&quot;
                          for PLT
                        </div>
                        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24"></div>
                          <div className="text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                              Outfits
                            </div>
                            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent flex justify-center outline-[3px] mt-3 md:mt-7">
              <a
                href="https://riseatseven.com/work/"
                className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:w-auto"
              >
                <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                        Explore Our Work
                      </span>
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg>
                      <span className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] align-middle mt-1">
                        <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                      </span>
                    </div>
                  </div>
                  <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                        Explore Our Work
                      </span>
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg>
                      <span className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] align-middle mt-1">
                        <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
      <section className="box-border caret-transparent outline-[3px] w-full pb-12 md:pb-24">
        <div className="box-border caret-transparent outline-[3px] w-full px-4 md:px-7">
          <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(12,minmax(0px,1fr))] outline-[3px] gap-y-3 overflow-hidden pt-0 md:gap-x-5 md:gap-y-7 md:pt-5">
            <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px]">
              <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(12,minmax(0px,1fr))] outline-[3px] gap-y-3 pb-0 border-b-0 border-solid border-black md:gap-x-5 md:gap-y-7 md:border-stone-300 md:pb-5 md:border-b">
                <div className="items-end box-border caret-transparent flex col-end-[span_11] col-start-[span_11] min-h-[auto] min-w-[auto] outline-[3px] md:col-end-[span_9] md:col-start-[span_9]">
                  <h2 className="relative text-neutral-900 text-6xl font-medium box-border caret-transparent flex flex-col flex-wrap justify-start tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                    <div className="relative text-6xl box-border caret-transparent flex flex-wrap justify-start tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                      <div className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                        Our
                      </div>
                      <div className="relative text-6xl bg-[oklab(0_0_0_/_0.1)] box-border caret-transparent shrink-0 tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] w-[54px] overflow-hidden mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px] md:w-[75px]">
                        <div className="relative text-6xl box-border caret-transparent h-full tracking-[-2.1px] leading-[54px] outline-[3px] w-full md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                          <picture className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] outline-[3px] md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/74.webp"
                              sizes="100vw"
                              alt="IMG 5079"
                              className="absolute text-6xl box-border caret-transparent h-full tracking-[-2.1px] leading-[54px] max-w-full object-cover outline-[3px] w-full inset-0 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                        Services
                      </div>
                    </div>
                  </h2>
                </div>
                <div className="[align-items:normal] box-border caret-transparent hidden col-end-[span_12] col-start-[span_12] justify-normal min-h-0 min-w-0 outline-[3px] md:items-center md:flex md:col-end-[span_3] md:col-start-[span_3] md:justify-end md:min-h-[auto] md:min-w-[auto]">
                  <a
                    href="https://riseatseven.com/services/"
                    className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 min-h-0 min-w-0 outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto"
                  >
                    <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                      <div className="box-border caret-transparent outline-[3px]">
                        <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                          <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                            View All Services
                          </span>
                          <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg>
                          <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                            <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                          </span>
                        </div>
                      </div>
                      <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
                        <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                          <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                            View All Services
                          </span>
                          <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg>
                          <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                            <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent gap-x-2 grid col-end-[span_12] col-start-[span_12] grid-cols-[repeat(12,minmax(0px,1fr))] min-h-[auto] min-w-[auto] outline-[3px]">
              <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
                <div className="relative box-border caret-transparent outline-[3px]">
                  <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                    <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                  </div>
                  <a
                    href="https://riseatseven.com/services/digital-pr/"
                    className="relative box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] z-10"
                  >
                    <div className="relative items-center box-border caret-transparent gap-x-3 flex col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 z-20 py-4 md:py-6">
                      <div className="relative box-border caret-transparent flex h-12 min-h-[auto] min-w-[auto] outline-[3px] w-12 overflow-hidden rounded-lg md:h-16 md:w-16 md:rounded-xl">
                        <picture className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                          <img
                            src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/2.webp"
                            sizes="100vw"
                            alt="Screenshot 2025 06 23 at 22 39 35"
                            className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full inset-0"
                          />
                        </picture>
                      </div>
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px]">
                          <div className="absolute box-border caret-transparent outline-[3px] overflow-hidden pr-2 left-0 top-0">
                            <div className="box-border caret-transparent outline-[3px]">
                              <h2 className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                                <i className="text-3xl font-normal box-border caret-transparent block tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-[50px] md:tracking-[-1.75px] md:leading-[50px] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[-1.05px] before:leading-[30px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-[50px] before:md:tracking-[-1.75px] before:md:leading-[50px]"></i>
                              </h2>
                            </div>
                          </div>
                          <div className="box-border caret-transparent outline-[3px]">
                            <div className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                              Digital PR
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative bg-black box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] opacity-0 outline-[3px] z-10 overflow-hidden rounded-[3.35544e+07px]">
                      <div className="box-border caret-transparent h-full opacity-60 outline-[3px] w-full">
                        <div className="relative box-border caret-transparent h-full outline-[3px] w-full overflow-hidden">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/135.webp"
                              sizes="100vw"
                              alt="Screenshot 2025 06 23 at 22 39 35"
                              className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full z-0 inset-0"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
                <div className="relative box-border caret-transparent outline-[3px]">
                  <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                    <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                  </div>
                  <a
                    href="https://riseatseven.com/services/social/"
                    className="relative box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] z-10"
                  >
                    <div className="relative items-center box-border caret-transparent gap-x-3 flex col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 z-20 py-4 md:py-6">
                      <div className="relative box-border caret-transparent flex h-12 min-h-[auto] min-w-[auto] outline-[3px] w-12 overflow-hidden rounded-lg md:h-16 md:w-16 md:rounded-xl">
                        <picture className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                          <img
                            src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/4.webp"
                            sizes="100vw"
                            alt="Screenshot 2025 07 01 at 20 31 18"
                            className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full inset-0"
                          />
                        </picture>
                      </div>
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px]">
                          <div className="absolute box-border caret-transparent outline-[3px] overflow-hidden pr-2 left-0 top-0">
                            <div className="box-border caret-transparent outline-[3px]">
                              <h2 className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                                <i className="text-3xl font-normal box-border caret-transparent block tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-[50px] md:tracking-[-1.75px] md:leading-[50px] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[-1.05px] before:leading-[30px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-[50px] before:md:tracking-[-1.75px] before:md:leading-[50px]"></i>
                              </h2>
                            </div>
                          </div>
                          <div className="box-border caret-transparent outline-[3px]">
                            <div className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                              Organic Social &amp; Content
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative bg-black box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] opacity-0 outline-[3px] z-10 overflow-hidden rounded-[3.35544e+07px]">
                      <div className="box-border caret-transparent h-full opacity-60 outline-[3px] w-full">
                        <div className="relative box-border caret-transparent h-full outline-[3px] w-full overflow-hidden">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/128.webp"
                              sizes="100vw"
                              alt="Screenshot 2025 07 01 at 20 31 18"
                              className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full z-0 inset-0"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
                <div className="relative box-border caret-transparent outline-[3px]">
                  <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                    <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                  </div>
                  <a
                    href="https://riseatseven.com/services/strategy-growth/"
                    className="relative box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] z-10"
                  >
                    <div className="relative items-center box-border caret-transparent gap-x-3 flex col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 z-20 py-4 md:py-6">
                      <div className="relative box-border caret-transparent flex h-12 min-h-[auto] min-w-[auto] outline-[3px] w-12 overflow-hidden rounded-lg md:h-16 md:w-16 md:rounded-xl">
                        <picture className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                          <img
                            src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/27.webp"
                            sizes="100vw"
                            alt="Screenshot 2025 06 25 at 14 37 50"
                            className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full inset-0"
                          />
                        </picture>
                      </div>
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px]">
                          <div className="absolute box-border caret-transparent outline-[3px] overflow-hidden pr-2 left-0 top-0">
                            <div className="box-border caret-transparent outline-[3px]">
                              <h2 className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                                <i className="text-3xl font-normal box-border caret-transparent block tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-[50px] md:tracking-[-1.75px] md:leading-[50px] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[-1.05px] before:leading-[30px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-[50px] before:md:tracking-[-1.75px] before:md:leading-[50px]"></i>
                              </h2>
                            </div>
                          </div>
                          <div className="box-border caret-transparent outline-[3px]">
                            <div className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                              Search &amp; Growth Strategy
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative bg-black box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] opacity-0 outline-[3px] z-10 overflow-hidden rounded-[3.35544e+07px]">
                      <div className="box-border caret-transparent h-full opacity-60 outline-[3px] w-full">
                        <div className="relative box-border caret-transparent h-full outline-[3px] w-full overflow-hidden">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/129.webp"
                              sizes="100vw"
                              alt="Screenshot 2025 06 25 at 14 37 50"
                              className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full z-0 inset-0"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
                <div className="relative box-border caret-transparent outline-[3px]">
                  <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                    <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                  </div>
                  <a
                    href="https://riseatseven.com/services/content-experience/"
                    className="relative box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] z-10"
                  >
                    <div className="relative items-center box-border caret-transparent gap-x-3 flex col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 z-20 py-4 md:py-6">
                      <div className="relative box-border caret-transparent flex h-12 min-h-[auto] min-w-[auto] outline-[3px] w-12 overflow-hidden rounded-lg md:h-16 md:w-16 md:rounded-xl">
                        <picture className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                          <img
                            src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/26.webp"
                            sizes="100vw"
                            alt="0 B5 A7499"
                            className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full inset-0"
                          />
                        </picture>
                      </div>
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px]">
                          <div className="absolute box-border caret-transparent outline-[3px] overflow-hidden pr-2 left-0 top-0">
                            <div className="box-border caret-transparent outline-[3px]">
                              <h2 className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                                <i className="text-3xl font-normal box-border caret-transparent block tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-[50px] md:tracking-[-1.75px] md:leading-[50px] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[-1.05px] before:leading-[30px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-[50px] before:md:tracking-[-1.75px] before:md:leading-[50px]"></i>
                              </h2>
                            </div>
                          </div>
                          <div className="box-border caret-transparent outline-[3px]">
                            <div className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                              Content Experience
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative bg-black box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] opacity-0 outline-[3px] z-10 overflow-hidden rounded-[3.35544e+07px]">
                      <div className="box-border caret-transparent h-full opacity-60 outline-[3px] w-full">
                        <div className="relative box-border caret-transparent h-full outline-[3px] w-full overflow-hidden">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/127.webp"
                              sizes="100vw"
                              alt="0 B5 A7499"
                              className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full z-0 inset-0"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
                <div className="relative box-border caret-transparent outline-[3px]">
                  <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                    <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                  </div>
                  <a
                    href="https://riseatseven.com/services/data-insights/"
                    className="relative box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] z-10"
                  >
                    <div className="relative items-center box-border caret-transparent gap-x-3 flex col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 z-20 py-4 md:py-6">
                      <div className="relative box-border caret-transparent flex h-12 min-h-[auto] min-w-[auto] outline-[3px] w-12 overflow-hidden rounded-lg md:h-16 md:w-16 md:rounded-xl">
                        <picture className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                          <img
                            src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/30.webp"
                            sizes="100vw"
                            alt="E34acc13 be9a 4862 a3bd 95aa2738aeb3"
                            className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full inset-0"
                          />
                        </picture>
                      </div>
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px]">
                          <div className="absolute box-border caret-transparent outline-[3px] overflow-hidden pr-2 left-0 top-0">
                            <div className="box-border caret-transparent outline-[3px]">
                              <h2 className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                                <i className="text-3xl font-normal box-border caret-transparent block tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-[50px] md:tracking-[-1.75px] md:leading-[50px] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[-1.05px] before:leading-[30px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-[50px] before:md:tracking-[-1.75px] before:md:leading-[50px]"></i>
                              </h2>
                            </div>
                          </div>
                          <div className="box-border caret-transparent outline-[3px]">
                            <div className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                              Data &amp; Insights
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative bg-black box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] opacity-0 outline-[3px] z-10 overflow-hidden rounded-[3.35544e+07px]">
                      <div className="box-border caret-transparent h-full opacity-60 outline-[3px] w-full">
                        <div className="relative box-border caret-transparent h-full outline-[3px] w-full overflow-hidden">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/126.webp"
                              sizes="100vw"
                              alt="E34acc13 be9a 4862 a3bd 95aa2738aeb3"
                              className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full z-0 inset-0"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
                <div className="relative box-border caret-transparent outline-[3px]">
                  <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                    <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                  </div>
                  <a
                    href="https://riseatseven.com/services/onsite-seo/"
                    className="relative box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] z-10"
                  >
                    <div className="relative items-center box-border caret-transparent gap-x-3 flex col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 z-20 py-4 md:py-6">
                      <div className="relative box-border caret-transparent flex h-12 min-h-[auto] min-w-[auto] outline-[3px] w-12 overflow-hidden rounded-lg md:h-16 md:w-16 md:rounded-xl">
                        <picture className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                          <img
                            src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/31.webp"
                            sizes="100vw"
                            alt="Screenshot 2025 06 24 at 00 20 47"
                            className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full inset-0"
                          />
                        </picture>
                      </div>
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="relative box-border caret-transparent outline-[3px]">
                          <div className="absolute box-border caret-transparent outline-[3px] overflow-hidden pr-2 left-0 top-0">
                            <div className="box-border caret-transparent outline-[3px]">
                              <h2 className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                                <i className="text-3xl font-normal box-border caret-transparent block tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-[50px] md:tracking-[-1.75px] md:leading-[50px] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[-1.05px] before:leading-[30px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-[50px] before:md:tracking-[-1.75px] before:md:leading-[50px]"></i>
                              </h2>
                            </div>
                          </div>
                          <div className="box-border caret-transparent outline-[3px]">
                            <div className="relative text-3xl font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                              Onsite SEO
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative bg-black box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] opacity-0 outline-[3px] z-10 overflow-hidden rounded-[3.35544e+07px]">
                      <div className="box-border caret-transparent h-full opacity-60 outline-[3px] w-full">
                        <div className="relative box-border caret-transparent h-full outline-[3px] w-full overflow-hidden">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/125.webp"
                              sizes="100vw"
                              alt="Screenshot 2025 06 24 at 00 20 47"
                              className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full z-0 inset-0"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent block col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] md:hidden md:min-h-0 md:min-w-0">
              <a
                href="https://riseatseven.com/services/"
                className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:w-auto"
              >
                <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:min-h-0 md:min-w-0">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                        View All Services
                      </span>
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg>
                      <span className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] align-middle mt-1 md:min-h-0 md:min-w-0">
                        <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                      </span>
                    </div>
                  </div>
                  <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                        View All Services
                      </span>
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg>
                      <span className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] align-middle mt-1 md:min-h-0 md:min-w-0">
                        <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="box-border caret-transparent outline-[3px] overflow-hidden">
        <section className="box-border caret-transparent outline-[3px] w-full">
          <div className="box-border caret-transparent outline-[3px] w-full">
            <TextMarquee />
            <div className="hidden">
              <div className="relative box-border caret-transparent flex outline-[3px] w-[450px] z-0 overflow-hidden md:w-[1536px]">
                <div className="items-center box-border caret-transparent gap-x-4 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] translate-x-[2340.48px] pt-0 pb-3 px-2 md:gap-x-10 md:translate-x-[522.6%] md:pt-5 md:pb-10 md:px-5">
                  <h2 className="relative text-neutral-900 text-[75px] font-medium box-border caret-transparent flex basis-[0%] grow flex-wrap justify-start tracking-[-2.625px] leading-[67.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left pb-0 md:text-[220px] md:tracking-[-7.7px] md:leading-[198px] md:pb-10">
                    Chasing Consumers
                  </h2>
                  <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[75px] overflow-hidden mb-0 rounded-2xl md:w-[153.6px] md:mb-10 md:rounded-3xl">
                    <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[100%]">
                      <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                        <img
                          src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/133.webp"
                          sizes="100vw"
                          alt="Screenshot 2025 06 25 at 14 49 00"
                          className="box-border caret-transparent max-w-full outline-[3px]"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] translate-x-[2294px] pt-0 pb-3 px-2 md:gap-x-10 md:translate-x-[10777.2px] md:pt-5 md:pb-10 md:px-5">
                  <h2 className="relative text-neutral-900 text-[75px] font-medium box-border caret-transparent flex basis-[0%] grow flex-wrap justify-start tracking-[-2.625px] leading-[67.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left pb-0 md:text-[220px] md:tracking-[-7.7px] md:leading-[198px] md:pb-10">
                    Not Algorithms
                  </h2>
                  <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[75px] overflow-hidden mb-0 rounded-2xl md:w-[153.6px] md:mb-10 md:rounded-3xl">
                    <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[100%]">
                      <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                        <img
                          src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/131.webp"
                          sizes="100vw"
                          alt="IMG 5023"
                          className="box-border caret-transparent max-w-full outline-[3px]"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] translate-x-[309.4%] pt-0 pb-3 px-2 md:gap-x-10 md:translate-x-[-4119.51px] md:pt-5 md:pb-10 md:px-5">
                  <h2 className="relative text-neutral-900 text-[75px] font-medium box-border caret-transparent flex basis-[0%] grow flex-wrap justify-start tracking-[-2.625px] leading-[67.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left pb-0 md:text-[220px] md:tracking-[-7.7px] md:leading-[198px] md:pb-10">
                    Chasing Consumers
                  </h2>
                  <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[75px] overflow-hidden mb-0 rounded-2xl md:w-[153.6px] md:mb-10 md:rounded-3xl">
                    <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[100%]">
                      <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                        <img
                          src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/133.webp"
                          sizes="100vw"
                          alt="Screenshot 2025 06 25 at 14 49 00"
                          className="box-border caret-transparent max-w-full outline-[3px]"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] translate-x-[391.9%] pt-0 pb-3 px-2 md:gap-x-10 md:translate-x-[-246.8%] md:pt-5 md:pb-10 md:px-5">
                  <h2 className="relative text-neutral-900 text-[75px] font-medium box-border caret-transparent flex basis-[0%] grow flex-wrap justify-start tracking-[-2.625px] leading-[67.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left pb-0 md:text-[220px] md:tracking-[-7.7px] md:leading-[198px] md:pb-10">
                    Not Algorithms
                  </h2>
                  <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[75px] overflow-hidden mb-0 rounded-2xl md:w-[153.6px] md:mb-10 md:rounded-3xl">
                    <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[100%]">
                      <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                        <img
                          src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/131.webp"
                          sizes="100vw"
                          alt="IMG 5023"
                          className="box-border caret-transparent max-w-full outline-[3px]"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] translate-x-[-3056.17px] pt-0 pb-3 px-2 md:gap-x-10 md:translate-x-[-194.7%] md:pt-5 md:pb-10 md:px-5">
                  <h2 className="relative text-neutral-900 text-[75px] font-medium box-border caret-transparent flex basis-[0%] grow flex-wrap justify-start tracking-[-2.625px] leading-[67.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left pb-0 md:text-[220px] md:tracking-[-7.7px] md:leading-[198px] md:pb-10">
                    Chasing Consumers
                  </h2>
                  <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[75px] overflow-hidden mb-0 rounded-2xl md:w-[153.6px] md:mb-10 md:rounded-3xl">
                    <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[100%]">
                      <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                        <img
                          src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/133.webp"
                          sizes="100vw"
                          alt="Screenshot 2025 06 25 at 14 49 00"
                          className="box-border caret-transparent max-w-full outline-[3px]"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] translate-x-[-518.4%] pt-0 pb-3 px-2 md:gap-x-10 md:translate-x-[-248.5%] md:pt-5 md:pb-10 md:px-5">
                  <h2 className="relative text-neutral-900 text-[75px] font-medium box-border caret-transparent flex basis-[0%] grow flex-wrap justify-start tracking-[-2.625px] leading-[67.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left pb-0 md:text-[220px] md:tracking-[-7.7px] md:leading-[198px] md:pb-10">
                    Not Algorithms
                  </h2>
                  <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[75px] overflow-hidden mb-0 rounded-2xl md:w-[153.6px] md:mb-10 md:rounded-3xl">
                    <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[100%]">
                      <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                        <img
                          src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/131.webp"
                          sizes="100vw"
                          alt="IMG 5023"
                          className="box-border caret-transparent max-w-full outline-[3px]"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] translate-x-[-408.8%] pt-0 pb-3 px-2 md:gap-x-10 md:translate-x-[-196.3%] md:pt-5 md:pb-10 md:px-5">
                  <h2 className="relative text-neutral-900 text-[75px] font-medium box-border caret-transparent flex basis-[0%] grow flex-wrap justify-start tracking-[-2.625px] leading-[67.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left pb-0 md:text-[220px] md:tracking-[-7.7px] md:leading-[198px] md:pb-10">
                    Chasing Consumers
                  </h2>
                  <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[75px] overflow-hidden mb-0 rounded-2xl md:w-[153.6px] md:mb-10 md:rounded-3xl">
                    <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[100%]">
                      <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                        <img
                          src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/133.webp"
                          sizes="100vw"
                          alt="Screenshot 2025 06 25 at 14 49 00"
                          className="box-border caret-transparent max-w-full outline-[3px]"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] translate-x-[-521.0%] pt-0 pb-3 px-2 md:gap-x-10 md:translate-x-[-4071.66px] md:pt-5 md:pb-10 md:px-5">
                  <h2 className="relative text-neutral-900 text-[75px] font-medium box-border caret-transparent flex basis-[0%] grow flex-wrap justify-start tracking-[-2.625px] leading-[67.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left pb-0 md:text-[220px] md:tracking-[-7.7px] md:leading-[198px] md:pb-10">
                    Not Algorithms
                  </h2>
                  <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[75px] overflow-hidden mb-0 rounded-2xl md:w-[153.6px] md:mb-10 md:rounded-3xl">
                    <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[100%]">
                      <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
                        <img
                          src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/131.webp"
                          sizes="100vw"
                          alt="IMG 5023"
                          className="box-border caret-transparent max-w-full outline-[3px]"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <section className="box-border caret-transparent outline-[3px] w-full">
          <div className="box-border caret-transparent outline-[3px] w-full">
            <LegacySection />
            <div className="box-border caret-transparent hidden outline-[3px] gap-y-3 w-full px-4 py-10 md:hidden md:gap-y-5 md:px-7">
              <div className="box-border caret-transparent flex justify-center outline-[3px] mb-3">
                <h2 className="relative text-neutral-900 text-[17.008px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.59528px] leading-[21.26px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px] md:min-h-0 md:min-w-0">
                  Legacy In The Making
                </h2>
              </div>
              <div className="relative box-border caret-transparent list-none outline-[3px] w-full z-[1] overflow-hidden mx-auto">
                <div className="relative caret-transparent flex h-full outline-[3px] w-full z-[1]">
                  <div className="relative box-border caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[343px] mr-[15px] md:min-h-0 md:min-w-0 md:w-[474.677px]">
                    <div className="[align-items:normal] aspect-auto bg-black box-border caret-transparent grid flex-col min-h-[auto] min-w-[auto] outline-[3px] text-center w-full p-7 rounded-2xl md:items-center md:aspect-square md:min-h-0 md:min-w-0 md:px-14 md:py-10 md:rounded-3xl">
                      <div className="[align-items:normal] box-border caret-transparent flex flex-col col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 md:items-center md:min-h-0 md:min-w-0 md:gap-y-5">
                        <div className="relative aspect-[4_/_3] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden rounded-xl md:aspect-square md:min-h-0 md:min-w-0 md:w-48 md:rounded-2xl">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/130.webp"
                              sizes="100vw"
                              alt="B2087e0cd3f699d3efc76f809ec72a85a6ab378e 1080x1350"
                              className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                            />
                          </picture>
                        </div>
                        <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:min-h-0 md:min-w-0">
                          <h2 className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-center tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            Pioneers
                          </h2>
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full md:min-h-0 md:min-w-0">
                            <p className="text-white text-sm box-border caret-transparent leading-[21px] outline-[3px] mb-5 md:text-base md:leading-6">
                              We’re dedicated to creating the industry narrative
                              that others follow 3 years from now. We paved the
                              path for creative SEO, multi-channel search with
                              Digital PR, and Social Search and we will continue
                              to do it. 
                            </p>
                            <p className="text-white text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6">
                              We’re on a mission to be the first search-first
                              agency to win a Cannes Lion disrupting the status
                              quo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[343px] mr-[15px] md:min-h-0 md:min-w-0 md:w-[474.677px]">
                    <div className="[align-items:normal] aspect-auto bg-green-200 box-border caret-transparent grid flex-col min-h-[auto] min-w-[auto] outline-[3px] text-center w-full p-7 rounded-2xl md:items-center md:aspect-square md:min-h-0 md:min-w-0 md:px-14 md:py-10 md:rounded-3xl">
                      <div className="[align-items:normal] box-border caret-transparent flex flex-col col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 md:items-center md:min-h-0 md:min-w-0 md:gap-y-5">
                        <div className="relative aspect-[4_/_3] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden rounded-xl md:aspect-square md:min-h-0 md:min-w-0 md:w-48 md:rounded-2xl">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/99.webp"
                              sizes="100vw"
                              alt="D4df0d30 d590 4e94 9056 9491f4beacba"
                              className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                            />
                          </picture>
                        </div>
                        <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:min-h-0 md:min-w-0">
                          <h2 className="relative text-neutral-900 text-3xl font-medium box-border caret-transparent flex flex-wrap justify-center tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            Award Winning
                          </h2>
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full md:min-h-0 md:min-w-0">
                            <p className="text-neutral-900 text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6">
                              A roll top bath full of 79 awards. Voted The
                              Drum&#39;s best agency outside of London. We are
                              official judges for industry awards including
                              Global Search Awards and Global Content Marketing
                              Awards.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[343px] mr-[15px] md:min-h-0 md:min-w-0 md:w-[474.677px]">
                    <div className="[align-items:normal] aspect-auto bg-white box-border caret-transparent grid flex-col min-h-[auto] min-w-[auto] outline-[3px] text-center w-full p-7 rounded-2xl md:items-center md:aspect-square md:min-h-0 md:min-w-0 md:px-14 md:py-10 md:rounded-3xl">
                      <div className="[align-items:normal] box-border caret-transparent flex flex-col col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 md:items-center md:min-h-0 md:min-w-0 md:gap-y-5">
                        <div className="relative aspect-[4_/_3] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden rounded-xl md:aspect-square md:min-h-0 md:min-w-0 md:w-48 md:rounded-2xl">
                          <picture className="box-border caret-transparent outline-[3px]">
                            <img
                              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/139.webp"
                              sizes="100vw"
                              alt="Screenshot 2025 06 23 at 23 15 19"
                              className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                            />
                          </picture>
                        </div>
                        <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:min-h-0 md:min-w-0">
                          <h2 className="relative text-neutral-900 text-3xl font-medium box-border caret-transparent flex flex-wrap justify-center tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
                            Speed
                          </h2>
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full md:min-h-0 md:min-w-0">
                            <p className="text-neutral-900 text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6">
                              People ask us why we are called Rise at Seven?
                              Ever heard the saying Early Bird catches the worm?
                              Google is moving fast, but humans are moving
                              faster. We chase consumers, not algorithms. We’ve
                              created a service which takes ideas to result
                              within 60 minutes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative box-border caret-transparent outline-[3px] w-full mt-3">
                <div className="absolute bg-white box-border caret-transparent h-1 outline-[3px] text-center w-full z-10 overflow-hidden rounded-[3.35544e+07px] left-0 top-0">
                  <span className="absolute bg-black box-border caret-transparent block h-full outline-[3px] origin-[0%_0%] w-full overflow-hidden rounded-[3.35544e+07px] scale-x-[0.333333] left-0 top-0 md:transform-none"></span>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent hidden h-[3000px] outline-[3px] w-full md:flex">
              <div className="sticky box-border caret-transparent h-[1000px] min-h-0 min-w-0 outline-[3px] w-full overflow-hidden left-0 top-0 md:min-h-[auto] md:min-w-[auto]">
                <div className="absolute box-border caret-transparent flex justify-center outline-[3px] w-full mt-10 left-0 top-0">
                  <h2 className="relative text-neutral-900 text-[17.008px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.59528px] leading-[21.26px] min-h-0 min-w-0 outline-[3px] text-left md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px] md:min-h-[auto] md:min-w-[auto]">
                    Legacy In The Making
                  </h2>
                </div>
                <div className="absolute items-center box-border caret-transparent flex h-full justify-center outline-[3px] w-full z-[2] left-0 top-8">
                  <div className="box-border caret-transparent max-w-lg min-h-0 min-w-0 outline-[3px] transform-none w-full md:max-w-xl md:min-h-[auto] md:min-w-[auto] md:rotate-[4.000001701562398deg]">
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
                              We’re dedicated to creating the industry narrative
                              that others follow 3 years from now. We paved the
                              path for creative SEO, multi-channel search with
                              Digital PR, and Social Search and we will continue
                              to do it. 
                            </p>
                            <p className="text-white text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6">
                              We’re on a mission to be the first search-first
                              agency to win a Cannes Lion disrupting the status
                              quo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute items-center box-border caret-transparent flex h-full justify-center outline-[3px] w-full z-[1] left-0 top-8">
                  <div className="box-border caret-transparent max-w-lg min-h-0 min-w-0 outline-[3px] transform-none w-full md:max-w-xl md:min-h-[auto] md:min-w-[auto] md:rotate-[7.999994819856548deg]">
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
                              A roll top bath full of 79 awards. Voted The
                              Drum&#39;s best agency outside of London. We are
                              official judges for industry awards including
                              Global Search Awards and Global Content Marketing
                              Awards.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute items-center box-border caret-transparent flex h-full justify-center outline-[3px] w-full z-0 left-0 top-8">
                  <div className="box-border caret-transparent max-w-lg min-h-0 min-w-0 outline-[3px] transform-none w-full md:max-w-xl md:min-h-[auto] md:min-w-[auto] md:rotate-[12.000012571476546deg]">
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
                              People ask us why we are called Rise at Seven?
                              Ever heard the saying Early Bird catches the worm?
                              Google is moving fast, but humans are moving
                              faster. We chase consumers, not algorithms. We’ve
                              created a service which takes ideas to result
                              within 60 minutes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <NewsSection />
        <div className="hidden">
          <section className="box-border caret-transparent outline-[3px] w-full pb-12 md:pb-24">
            <div className="box-border caret-transparent outline-[3px] w-full">
              <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(12,minmax(0px,1fr))] outline-[3px] gap-y-3 md:gap-x-5 md:gap-y-7">
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
                              <picture className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] outline-[3px] md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
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
                    <div className="[align-items:normal] box-border caret-transparent hidden col-end-[span_12] col-start-[span_12] justify-normal min-h-0 min-w-0 outline-[3px] md:items-center md:flex md:col-end-[span_3] md:col-start-[span_3] md:justify-end md:min-h-[auto] md:min-w-[auto]">
                      <a
                        href="https://riseatseven.com/blog/"
                        className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 min-h-0 min-w-0 outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto"
                      >
                        <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                          <div className="box-border caret-transparent outline-[3px]">
                            <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                              <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                                Explore More Thoughts
                              </span>
                              <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                                <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                              </span>
                            </div>
                          </div>
                          <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
                            <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                              <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                                Explore More Thoughts
                              </span>
                              <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                                <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] px-0 md:px-7">
                  <div className="relative box-border caret-transparent list-none outline-[3px] w-full z-[1] overflow-hidden mx-auto">
                    <div className="relative caret-transparent flex h-full outline-[3px] translate-x-[15px] w-full z-[1] md:transform-none">
                      <div className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] w-[324.13px] mr-[15px] py-2 md:w-[394.667px] md:mr-5">
                        <a
                          href="https://riseatseven.com/blog/rise-at-seven-appoints-new-senior-ops-lead/"
                          className="items-start box-border caret-transparent flex flex-col outline-[3px] gap-y-5 w-full"
                        >
                          <div className="box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-20 p-3"></div>
                            <div className="relative aspect-square box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-10 overflow-hidden rounded-2xl md:rounded-3xl">
                              <div className="box-border caret-transparent blur-md h-full outline-[3px] w-full">
                                <picture className="box-border caret-transparent outline-[3px]">
                                  <img
                                    src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/137.webp"
                                    sizes="100vw"
                                    alt="0 B5 A8137"
                                    className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                                  />
                                </picture>
                              </div>
                            </div>
                            <div className="relative aspect-square box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl md:rounded-3xl">
                              <picture className="box-border caret-transparent outline-[3px]">
                                <img
                                  src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/137.webp"
                                  sizes="100vw"
                                  alt="0 B5 A8137"
                                  className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
                            <div className="items-start box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 mt-1">
                              <div className="text-neutral-500 text-sm font-medium items-center bg-white box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4 md:min-h-8 md:py-1.5">
                                <div className="text-sm items-center box-border caret-transparent flex justify-center tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] -ml-1.5 md:text-base md:tracking-[-0.56px] md:leading-4">
                                  <div className="text-sm box-border caret-transparent h-5 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] w-5 overflow-hidden -mr-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                                    <img
                                      src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/82.webp"
                                      alt=""
                                      className="text-sm box-border caret-transparent h-full tracking-[-0.49px] leading-[14px] max-w-full object-cover outline-[3px] w-full md:text-base md:tracking-[-0.56px] md:leading-4"
                                    />
                                  </div>
                                </div>
                                <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                                  Ray Saddiq
                                </div>
                              </div>
                              <div className="text-neutral-500 text-sm font-medium items-center bg-white box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4 md:min-h-8 md:py-1.5">
                                <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-500 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                                <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                                  3 mins
                                </div>
                              </div>
                            </div>
                            <h2 className="relative text-neutral-900 text-2xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.84px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-3xl md:tracking-[-1.05px] md:leading-[30px]">
                              Rise at Seven Appoints Hollie Lovell as Senior
                              Operations Lead
                            </h2>
                          </div>
                        </a>
                      </div>
                      <div className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] w-[324.13px] mr-[15px] py-2 md:w-[394.667px] md:mr-5">
                        <a
                          href="https://riseatseven.com/blog/rise-at-seven-announces-new-global-hq-in-manchester/"
                          className="items-start box-border caret-transparent flex flex-col outline-[3px] gap-y-5 w-full"
                        >
                          <div className="box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-20 p-3"></div>
                            <div className="relative aspect-square box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-10 overflow-hidden rounded-2xl md:rounded-3xl">
                              <div className="box-border caret-transparent blur-md h-full outline-[3px] w-full">
                                <picture className="box-border caret-transparent outline-[3px]">
                                  <img
                                    src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/136.webp"
                                    sizes="100vw"
                                    alt="WRAS Manchester 01"
                                    className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                                  />
                                </picture>
                              </div>
                            </div>
                            <div className="relative aspect-square box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl md:rounded-3xl">
                              <picture className="box-border caret-transparent outline-[3px]">
                                <img
                                  src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/136.webp"
                                  sizes="100vw"
                                  alt="WRAS Manchester 01"
                                  className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
                            <div className="items-start box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 mt-1">
                              <div className="text-neutral-500 text-sm font-medium items-center bg-white box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4 md:min-h-8 md:py-1.5">
                                <div className="text-sm items-center box-border caret-transparent flex justify-center tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] -ml-1.5 md:text-base md:tracking-[-0.56px] md:leading-4">
                                  <div className="text-sm box-border caret-transparent h-5 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] w-5 overflow-hidden -mr-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                                    <img
                                      src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/82.webp"
                                      alt=""
                                      className="text-sm box-border caret-transparent h-full tracking-[-0.49px] leading-[14px] max-w-full object-cover outline-[3px] w-full md:text-base md:tracking-[-0.56px] md:leading-4"
                                    />
                                  </div>
                                </div>
                                <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                                  Ray Saddiq
                                </div>
                              </div>
                              <div className="text-neutral-500 text-sm font-medium items-center bg-white box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4 md:min-h-8 md:py-1.5">
                                <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-500 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                                <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                                  2 mins
                                </div>
                              </div>
                            </div>
                            <h2 className="relative text-neutral-900 text-2xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.84px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-3xl md:tracking-[-1.05px] md:leading-[30px]">
                              Rise at Seven Exits Sheffield and Triples
                              Manchester as new HQ as they go for global
                              expansion
                            </h2>
                          </div>
                        </a>
                      </div>
                      <div className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] w-[324.13px] mr-[15px] py-2 md:w-[394.667px] md:mr-5">
                        <a
                          href="https://riseatseven.com/blog/global-operations-director-promotion/"
                          className="items-start box-border caret-transparent flex flex-col outline-[3px] gap-y-5 w-full"
                        >
                          <div className="box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-20 p-3">
                              <div className="box-border caret-transparent gap-x-1 flex flex-wrap outline-[3px] gap-y-1">
                                <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4 md:min-h-8 md:py-1.5">
                                  <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                                    News
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="relative aspect-square box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-10 overflow-hidden rounded-2xl md:rounded-3xl">
                              <div className="box-border caret-transparent blur-md h-full outline-[3px] w-full">
                                <picture className="box-border caret-transparent outline-[3px]">
                                  <img
                                    src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/134.webp"
                                    sizes="100vw"
                                    alt="0 B5 A7827"
                                    className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                                  />
                                </picture>
                              </div>
                            </div>
                            <div className="relative aspect-square box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl md:rounded-3xl">
                              <picture className="box-border caret-transparent outline-[3px]">
                                <img
                                  src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/134.webp"
                                  sizes="100vw"
                                  alt="0 B5 A7827"
                                  className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
                            <div className="items-start box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 mt-1">
                              <div className="text-neutral-500 text-sm font-medium items-center bg-white box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4 md:min-h-8 md:py-1.5">
                                <div className="text-sm items-center box-border caret-transparent flex justify-center tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] -ml-1.5 md:text-base md:tracking-[-0.56px] md:leading-4">
                                  <div className="text-sm box-border caret-transparent h-5 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] w-5 overflow-hidden -mr-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                                    <img
                                      src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/83.webp"
                                      alt=""
                                      className="text-sm box-border caret-transparent h-full tracking-[-0.49px] leading-[14px] max-w-full object-cover outline-[3px] w-full md:text-base md:tracking-[-0.56px] md:leading-4"
                                    />
                                  </div>
                                </div>
                                <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                                  Carrie Rose
                                </div>
                              </div>
                              <div className="text-neutral-500 text-sm font-medium items-center bg-white box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4 md:min-h-8 md:py-1.5">
                                <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-500 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
                                <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                                  2 mins
                                </div>
                              </div>
                            </div>
                            <h2 className="relative text-neutral-900 text-2xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.84px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-3xl md:tracking-[-1.05px] md:leading-[30px]">
                              Ryan McNamara Is Now Rise at Seven&#39;s Global
                              Operations Director
                            </h2>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent outline-[3px] w-full mt-5 px-4 py-3 md:px-7">
                    <div className="relative box-border caret-transparent outline-[3px] w-full">
                      <div className="absolute bg-white box-border caret-transparent block h-1 outline-[3px] text-center w-full z-10 overflow-hidden rounded-[3.35544e+07px] left-0 top-0 md:hidden">
                        <span className="static bg-transparent box-content caret-black inline h-auto outline-0 origin-[50%_50%] w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-black md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:origin-[0%_0%] md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px] md:left-0 md:top-0"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent block col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] px-4 md:hidden md:min-h-0 md:min-w-0 md:px-7">
                  <a
                    href="https://riseatseven.com/blog/"
                    className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:w-auto"
                  >
                    <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:min-h-0 md:min-w-0">
                      <div className="box-border caret-transparent outline-[3px]">
                        <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                          <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                            Explore More Thoughts
                          </span>
                          <span className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] align-middle mt-1 md:min-h-0 md:min-w-0">
                            <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                          </span>
                        </div>
                      </div>
                      <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
                        <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                          <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                            Explore More Thoughts
                          </span>
                          <span className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] align-middle mt-1 md:min-h-0 md:min-w-0">
                            <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="box-border caret-transparent hidden outline-[3px] overflow-hidden md:block">
        <div className="box-border caret-transparent flex h-[350px] outline-[3px] md:h-[1000px]">
          <div
            aria-label="Ready to Rise at Seven?"
            className="text-[112.5px] font-medium box-border caret-transparent shrink-0 tracking-[-3.9375px] leading-[140.625px] min-h-0 min-w-0 outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:min-h-[auto] md:min-w-[auto] md:translate-x-[-400px] md:translate-y-[100px]"
          >
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              R
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              e
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              a
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              d
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              y
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              t
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              o
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              R
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              i
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              s
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              e
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              a
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              t
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              S
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              e
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              v
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              e
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              n
            </div>
            <div className="relative text-[112.5px] box-border caret-transparent inline-block tracking-[-3.9375px] leading-[140.625px] outline-[3px] transform-none md:text-[204.8px] md:tracking-[-7.168px] md:leading-[256px] md:translate-y-[-153.591px] md:rotate-[9.999987517730313deg]">
              ?
            </div>
          </div>
        </div>
      </div>
      <section className="box-border caret-transparent outline-[3px] w-full">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="relative box-border caret-transparent grid outline-[3px] mt-8 p-2 md:mt-0">
            <div className="col-start-1 row-start-1 box-border caret-transparent outline-[3px] p-2">
              <div className="bg-neutral-900 box-border caret-transparent h-full min-h-[auto] min-w-[auto] outline-[3px] w-full rounded-3xl"></div>
            </div>
            <div className="relative box-border caret-transparent gap-x-3 grid col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 z-20 pt-14 pb-6 px-4 md:gap-x-5 md:gap-y-7 md:px-7 md:py-10">
              <div className="items-start box-border caret-transparent flex flex-col col-end-[span_12] col-start-[span_12] justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 mb-10 md:col-end-[span_4] md:col-start-[span_4] md:gap-y-5 md:mb-0">
                <h2 className="relative text-white text-2xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.84px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-3xl md:tracking-[-1.05px] md:leading-[30px]">
                  Stay updated with Rise news
                </h2>
                <form className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                  <input
                    type="hidden"
                    name="CRAFT_CSRF_TOKEN"
                    value="yElGu7FCAXg8Zddq2GmFZttCCaT_mKup3NGnfcenFmbUIfI9FnnOlv4bdoPlekcUaj2uNZET3xaxI0blq-nt--6h4jiQy1wHjne9W3hU_cM="
                    className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] p-0"
                  />
                  <input
                    type="hidden"
                    name="action"
                    value="formie/submissions/submit"
                    className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] p-0"
                  />
                  <input
                    type="hidden"
                    name="handle"
                    value="newsletter"
                    className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] p-0"
                  />
                  <input
                    type="email"
                    name="fields[email]"
                    placeholder="Your Email Address"
                    className="appearance-none text-white text-lg font-medium bg-zinc-800 box-border caret-transparent tracking-[-0.63px] leading-[18px] outline-[3px] w-full px-5 py-4 rounded-[3.35544e+07px] md:text-[22px] md:tracking-[-0.77px] md:leading-[22px] md:px-6 md:py-5"
                  />
                  <div className="absolute box-border caret-transparent outline-[3px] p-2 right-0 top-0">
                    <button
                      type="submit"
                      className="text-neutral-900 text-[17.008px] items-center bg-green-200 caret-transparent flex h-9 justify-center leading-[25.512px] outline-[3px] text-center w-9 p-0 rounded-[3.35544e+07px] md:text-lg md:h-[52px] md:leading-7 md:w-[52px]"
                    >
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg>
                    </button>
                  </div>
                </form>
                <div className="box-border caret-transparent gap-x-1 flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] gap-y-1">
                  <a
                    href="https://www.facebook.com/riseatseven"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 text-xs items-center bg-white box-border caret-transparent gap-x-1.5 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] px-2 py-1 rounded-xl hover:bg-lime-200 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 shrink-0"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-[11px] font-medium"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg></span>
                  </a>
                  <a
                    href="https://x.com/riseatseven"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 text-xs items-center bg-white box-border caret-transparent gap-x-1.5 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] px-2 py-1 rounded-xl hover:bg-lime-200 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 shrink-0"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span className="text-[11px] font-medium"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg></span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/riseatseven/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 text-xs items-center bg-white box-border caret-transparent gap-x-1.5 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] px-2 py-1 rounded-xl hover:bg-lime-200 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 shrink-0"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-[11px] font-medium"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg></span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCAjOP9BgpZPTgae-QT9HGCw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 text-xs items-center bg-white box-border caret-transparent gap-x-1.5 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] px-2 py-1 rounded-xl hover:bg-lime-200 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 shrink-0"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span className="text-[11px] font-medium"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg></span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@riseatseven"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 text-xs items-center bg-white box-border caret-transparent gap-x-1.5 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] px-2 py-1 rounded-xl hover:bg-lime-200 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 shrink-0"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                    </svg>
                    <span className="text-[11px] font-medium"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg></span>
                  </a>
                  <a
                    href="https://www.instagram.com/riseatseven/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 text-xs items-center bg-white box-border caret-transparent gap-x-1.5 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] px-2 py-1 rounded-xl hover:bg-lime-200 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 shrink-0"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <span className="text-[11px] font-medium"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-2.5 h-2.5" aria-hidden="true"><line x1="2" y1="8" x2="8" y2="2"></line><polyline points="3,2 8,2 8,7"></polyline></svg></span>
                  </a>
                </div>
              </div>
              <div className="box-border caret-transparent flex flex-wrap col-end-[span_12] col-start-[span_12] justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-10 md:col-end-[span_6] md:col-start-6">
                <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 w-6/12 pl-3 border-l border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] md:w-auto">
                  <a
                    href="https://riseatseven.com/services/"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Services
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Services
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://riseatseven.com/work/"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Work
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Work
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://riseatseven.com/about/"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        About
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        About
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://riseatseven.com/culture/"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Culture
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Culture
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://riseatseven.com/meet-the-team/"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Meet The Risers
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Meet The Risers
                      </div>
                    </div>
                  </a>
                </div>
                <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 w-6/12 pl-3 border-l border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] md:w-auto">
                  <a
                    href="https://riseatseven.com/testimonials/"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Testimonials
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Testimonials
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://riseatseven.com/blog/"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Blog &amp; Resources
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Blog &amp; Resources
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://riseatseven.com/webinars/"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Webinars
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Webinars
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://riseatseven.com/careers/"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Careers
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Careers
                      </div>
                    </div>
                  </a>
                </div>
                <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 w-6/12 pl-3 border-l border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] md:w-auto">
                  <a
                    href="https://g.co/kgs/4Br7JaS"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Sheffield
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Sheffield
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://g.co/kgs/9vh5imK"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Manchester
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Manchester
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://g.co/kgs/hsv6LhR"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        London
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        London
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://g.co/kgs/NxzhAKU"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        New York
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        New York
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://riseatseven.com/contact/"
                    className="text-white text-lg font-medium box-border caret-transparent flex tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]"
                  >
                    <div className="relative text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      <div className="text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Contact
                      </div>
                      <div className="absolute text-lg box-border caret-transparent tracking-[-0.63px] leading-[22.5px] outline-[3px] left-0 top-0 md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                        Contact
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] mt-10 md:mt-32">
                <div className="text-white box-border caret-transparent outline-[3px]">
                  <img
                    src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-3.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-full object-contain outline-[3px] w-full"
                  />
                </div>
              </div>
              <div className="items-end box-border caret-transparent flex flex-col col-end-[span_12] col-start-[span_12] justify-between min-h-[auto] min-w-[auto] outline-[3px] mt-10 md:items-center md:flex-row md:mt-0">
                <div className="items-center box-border caret-transparent gap-x-2 flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 md:gap-x-3 md:gap-y-3">
                  <div className="text-white text-[10.8px] font-light box-border caret-transparent leading-[13.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-xs md:leading-[15px]">
                    © 2025 Rise at Seven Ltd. All rights reserved
                  </div>
                  <div className="bg-white box-border caret-transparent flex h-1 min-h-[auto] min-w-[auto] outline-[3px] w-1 mt-0 rounded-[3.35544e+07px] md:mt-0.5"></div>
                  <div className="text-white text-[10.8px] font-light box-border caret-transparent leading-[13.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-xs md:leading-[15px]">
                    Company Number 11955187
                  </div>
                  <div className="bg-white box-border caret-transparent flex h-1 min-h-[auto] min-w-[auto] outline-[3px] w-1 mt-0 rounded-[3.35544e+07px] md:mt-0.5"></div>
                  <div className="text-white text-[10.8px] font-light box-border caret-transparent leading-[13.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-xs md:leading-[15px]">
                    VAT Registered GB 322402945
                  </div>
                  <div className="bg-white box-border caret-transparent flex h-1 min-h-[auto] min-w-[auto] outline-[3px] w-1 mt-0 rounded-[3.35544e+07px] md:mt-0.5"></div>
                  <a
                    href="https://riseatseven.com/privacy-policy/"
                    className="relative text-white text-[10.8px] font-light box-border caret-transparent block leading-[13.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-xs md:leading-[15px] before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-white before:block before:text-[10.8px] before:not-italic before:normal-nums before:font-light before:h-px before:tracking-[normal] before:leading-[13.5px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-0 before:border-separate before:right-0 before:bottom-0 before:font-saans before:md:text-xs before:md:leading-[15px]"
                  >
                    Privacy Policy
                  </a>
                  <div className="bg-white box-border caret-transparent flex h-1 min-h-[auto] min-w-[auto] outline-[3px] w-1 mt-0 rounded-[3.35544e+07px] md:mt-0.5"></div>
                  <a
                    href="https://riseatseven.com/terms-conditions/"
                    className="relative text-white text-[10.8px] font-light box-border caret-transparent block leading-[13.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-xs md:leading-[15px] before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-white before:block before:text-[10.8px] before:not-italic before:normal-nums before:font-light before:h-px before:tracking-[normal] before:leading-[13.5px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-0 before:border-separate before:right-0 before:bottom-0 before:font-saans before:md:text-xs before:md:leading-[15px]"
                  >
                    Terms &amp; conditions
                  </a>
                  <div className="bg-white box-border caret-transparent flex h-1 min-h-[auto] min-w-[auto] outline-[3px] w-1 mt-0 rounded-[3.35544e+07px] md:hidden md:min-h-0 md:min-w-0 md:mt-0.5"></div>
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-start w-full ml-0 mt-1 md:text-right md:w-auto md:ml-auto md:mt-0">
                  <a
                    href="https://madebyshape.co.uk/"
                    className="relative text-white text-[10.8px] font-light box-border caret-transparent leading-[13.5px] outline-[3px] text-start md:text-xs md:leading-[15px] md:text-right before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-white before:block before:text-[10.8px] before:not-italic before:normal-nums before:font-light before:h-px before:tracking-[normal] before:leading-[13.5px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-0 before:border-separate before:right-0 before:bottom-0 before:font-saans before:md:text-xs before:md:leading-[15px] before:md:text-right"
                  >
                    Website MadeByShape
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
