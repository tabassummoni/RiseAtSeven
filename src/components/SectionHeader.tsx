export type SectionHeaderProps = {
  titleStart: string;
  titleEnd: string;
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
  linkText: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(12,minmax(0px,1fr))] outline-[3px] gap-y-3 pb-0 border-b-0 border-solid border-black md:gap-x-5 md:gap-y-7 md:border-stone-300 md:pb-5 md:border-b">
      <div className="items-end box-border caret-transparent flex col-end-[span_11] col-start-[span_11] min-h-[auto] min-w-[auto] outline-[3px] md:col-end-[span_9] md:col-start-[span_9]">
        <h2 className="relative text-neutral-900 text-6xl font-medium box-border caret-transparent flex flex-col flex-wrap justify-start tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
          <div className="relative text-6xl box-border caret-transparent flex flex-wrap justify-start tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
            <div className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
              {props.titleStart}
            </div>
            <div className="relative text-6xl bg-[oklab(0_0_0_/_0.1)] box-border caret-transparent shrink-0 tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] w-[54px] overflow-hidden mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px] md:w-[75px]">
              <div className="relative text-6xl box-border caret-transparent h-full tracking-[-2.1px] leading-[54px] outline-[3px] w-full md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                <picture className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] outline-[3px] md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
                  <img
                    src={props.imageSrc}
                    sizes="100vw"
                    alt={props.imageAlt}
                    className="absolute text-6xl box-border caret-transparent h-full tracking-[-2.1px] leading-[54px] max-w-full object-cover outline-[3px] w-full inset-0 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]"
                  />
                </picture>
              </div>
            </div>
            <div className="text-6xl box-border caret-transparent tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[75px]">
              {props.titleEnd}
            </div>
          </div>
        </h2>
      </div>
      <div className="[align-items:normal] box-border caret-transparent hidden col-end-[span_12] col-start-[span_12] justify-normal min-h-0 min-w-0 outline-[3px] md:items-center md:flex md:col-end-[span_3] md:col-start-[span_3] md:justify-end md:min-h-[auto] md:min-w-[auto]">
        <a
          href={props.linkHref}
          className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 min-h-0 min-w-0 outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto"
        >
          <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] overflow-hidden md:min-h-[auto] md:min-w-[auto]">
            <div className="box-border caret-transparent outline-[3px]">
              <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                  {props.linkText}
                </span>
                <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                  <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                </span>
              </div>
            </div>
            <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
              <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                  {props.linkText}
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
  );
};
