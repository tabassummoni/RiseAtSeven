import { FeaturedWorkList } from "@/sections/FeaturedWorkSection/components/FeaturedWorkList";
import { SectionCta } from "@/components/SectionCta";

export const FeaturedWorkSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <section className="box-border caret-transparent outline-[3px] w-full pb-12 md:pb-24">
        <div className="box-border caret-transparent outline-[3px] w-full px-4 md:px-7">
          <div className="relative box-border caret-transparent flex outline-[3px] w-full -my-7">
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full py-7 top-0">
              <div className="bg-neutral-900 box-border caret-transparent grid grid-cols-[repeat(12,minmax(0px,1fr))] outline-[3px] w-full px-5 rounded-3xl md:px-10 overflow-hidden">
                <FeaturedWorkList />
                <div
                  className="box-border caret-transparent grid col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] pt-7 pb-14 md:col-end-[span_6] md:col-start-7 md:max-h-[960px] md:overflow-y-auto md:pr-1 scrollbar-hide"
                  style={{ alignContent: "start" }}
                >
                  <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] mb-5 md:hidden md:min-h-0 md:min-w-0">
                    <h2 className="relative text-white text-[17.008px] font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-0.59528px] leading-[21.26px] outline-[3px] text-left md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px]">
                      Featured Work
                    </h2>
                  </div>
                  <a
                    href="https://riseatseven.com/work/images/"
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
                    <div className="text-neutral-900 items-start bg-orange-400 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
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
                    <div className="text-neutral-900 items-start bg-red-200 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
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
                    <div className="text-neutral-900 items-start bg-purple-300 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
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
                    <div className="text-neutral-900 items-start bg-orange-400 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
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
                    <div className="text-neutral-900 items-start bg-blue-500 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
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
                    <div className="text-neutral-900 items-start bg-red-300 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
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
                    <div className="text-neutral-900 items-start bg-teal-400 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
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
                    <div className="text-neutral-900 items-start bg-pink-300 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
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
                    <div className="text-neutral-900 items-start bg-red-200 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
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
                    <div className="text-neutral-900 items-start bg-cyan-300 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
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
                    <div className="text-neutral-900 items-start bg-red-200 box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                      <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
                        Driving discovery for everything &quot;outfits&quot; for
                        PLT
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
            <SectionCta
              href="https://riseatseven.com/work/"
              text="Explore Our Work"
              linkVariant="flex min-h-[auto] min-w-[auto]"
              contentVariant=""
              textVariant=""
              responsiveVariant="min-h-[auto] min-w-[auto]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
