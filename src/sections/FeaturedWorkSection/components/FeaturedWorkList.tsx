import { FeaturedWorkNav } from "@/sections/FeaturedWorkSection/components/FeaturedWorkNav";

export const FeaturedWorkList = () => {
  return (
    <div className="relative items-start box-border caret-transparent hidden col-end-[span_12] col-start-[span_12] h-auto min-h-0 min-w-0 outline-[3px] md:items-center md:flex md:col-end-[span_6] md:col-start-[span_6] md:h-[960px] md:min-h-[auto] md:min-w-[auto]">
      <div className="relative items-start box-border caret-transparent flex flex-col h-full min-h-0 min-w-0 outline-[3px] gap-y-[normal] z-10 pt-16 pb-0 md:min-h-[auto] md:min-w-[auto] md:gap-y-20 md:pt-24 md:pb-32">
        <h2 className="relative text-white text-[17.008px] font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.59528px] leading-[21.26px] min-h-0 min-w-0 outline-[3px] text-left md:text-[22px] md:tracking-[-0.77px] md:leading-[27.5px] md:min-h-[auto] md:min-w-[auto]">
          Featured Work
        </h2>
        <div className="relative box-border caret-transparent hidden basis-[0%] grow min-h-0 min-w-0 outline-[3px] overflow-hidden pr-5 md:block md:min-h-[auto] md:min-w-[auto]">
          <div className="absolute bg-[linear-gradient(in_oklab,rgb(17,18,18)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent hidden h-[33.3333%] outline-[3px] pointer-events-none w-full z-20 left-0 top-0 md:flex"></div>
          <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(17,18,18)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent hidden h-[33.3333%] outline-[3px] pointer-events-none w-full z-20 left-0 bottom-0 md:flex"></div>
          <FeaturedWorkNav />
        </div>
      </div>
    </div>
  );
};
