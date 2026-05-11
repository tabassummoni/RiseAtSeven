import { LogoMarquee } from "@/sections/LogoMarqueeSection/components/LogoMarquee";

export const LogoMarqueeSection = () => {
  return (
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
        </div>
      </section>
    </div>
  );
};
