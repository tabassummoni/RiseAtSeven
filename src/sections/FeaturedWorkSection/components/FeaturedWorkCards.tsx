export type FeaturedWorkCardsProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  year: string;
  title: string;
  description: string;
  cardVariant: string;
  showCategoryBadge: string;
  showBottomCategory: string;
  showIcon: string;
  iconSrc: string;
  iconAlt: string;
};

export const FeaturedWorkCards = (props: FeaturedWorkCardsProps) => {
  const shouldShowCategoryBadge = props.showCategoryBadge === "true";
  const shouldShowBottomCategory = props.showBottomCategory === "true";
  const shouldShowIcon = props.showIcon === "true";

  return (
    <a
      href={props.href}
      className="box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-5 rounded-2xl md:mb-7"
    >
      <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
        <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden pt-[75%]">
          <picture className="absolute box-border caret-transparent block h-full outline-[3px] w-full left-0 top-0">
            <img
              src={props.imageSrc}
              sizes="100vw"
              alt={props.imageAlt}
              className="box-border caret-transparent max-w-full outline-[3px]"
            />
          </picture>
        </div>
      </div>

      <div className="items-start box-border caret-transparent flex col-start-1 row-start-1 justify-end min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:items-end md:p-5">
        {shouldShowCategoryBadge ? (
          <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
              {props.category}
            </div>
            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
          </div>
        ) : null}
      </div>

      <div className="relative items-end box-border caret-transparent flex col-start-1 row-start-1 justify-start min-h-[auto] min-w-[auto] outline-[3px] z-30 p-3 md:hidden md:min-h-0 md:min-w-0 md:p-5">
        <div className="relative box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 z-20 md:min-h-0 md:min-w-0">
          <div className="text-white text-xs font-medium box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mt-2 md:min-h-0 md:min-w-0">
            {props.year}
          </div>
          <div className="relative text-white text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-6xl md:tracking-[-2.1px] md:leading-[60px] md:min-h-0 md:min-w-0">
            {props.title}
          </div>
        </div>
        <div className="absolute bg-[linear-gradient(to_top_in_oklab,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-32 opacity-70 outline-[3px] w-full z-10 left-0 bottom-0"></div>
      </div>

      <div
        className={`text-neutral-900 items-start box-border caret-transparent flex flex-col col-start-1 row-start-1 grid-cols-[repeat(12,minmax(0px,1fr))] justify-between min-h-[auto] min-w-[auto] outline-[3px] z-40 p-3 md:p-5 ${props.cardVariant}`}
      >
        <div className="relative text-3xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-1.05px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[50px] md:tracking-[-1.75px] md:leading-[50px]">
          {props.description}
        </div>
        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-8 md:w-24">
            {shouldShowIcon ? (
              <div className="aspect-[20_/_9] box-border caret-transparent outline-[3px]">
                <img
                  src={props.iconSrc}
                  alt={props.iconAlt}
                  className="box-border caret-transparent h-full object-contain outline-[3px] w-full"
                />
              </div>
            ) : null}
          </div>

          {shouldShowBottomCategory ? (
            <div className="text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] box-border caret-transparent gap-x-3 flex shrink-0 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] px-3.5 py-2.5 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
              <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
              <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                {props.category}
              </div>
              <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
            </div>
          ) : null}
        </div>
      </div>
    </a>
  );
};
