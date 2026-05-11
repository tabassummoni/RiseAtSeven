export type IntroContentProps = {
  containerVariant: string;
  contentVariant: string;
  mode: string;
  description: string;
  headingLine1: string;
  headingLine2: string;
  headingLine3: string;
  headingLine4: string;
  imageUrl: string;
  imageAlt: string;
  primaryLinkUrl: string;
  primaryLinkText: string;
  primaryLinkClass: string;
  secondaryLinkUrl: string;
  secondaryLinkText: string;
  secondaryLinkClass: string;
};

export const IntroContent = (props: IntroContentProps) => {
  return (
    <div
      className={`box-border caret-transparent max-w-sm min-h-[auto] min-w-[auto] outline-[3px] w-full md:max-w-xl ${props.containerVariant}`}
    >
      {props.mode === "simple" ? (
        <div
          className={`box-border caret-transparent flex-wrap outline-[3px] ${props.contentVariant}`}
        >
          {props.description}
        </div>
      ) : (
        <>
          <h2 className="relative text-neutral-900 text-[50px] font-medium box-border caret-transparent flex flex-col flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
            <div className="relative text-[50px] box-border caret-transparent flex flex-wrap justify-start tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
              <div className="text-[50px] box-border caret-transparent tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                {props.headingLine1}
              </div>
              <div className="text-[50px] box-border caret-transparent tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                {props.headingLine2}
              </div>
              <div className="text-[50px] box-border caret-transparent tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                {props.headingLine3}
              </div>
              <div className="text-[50px] box-border caret-transparent tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                {props.headingLine4}
              </div>
              <div className="relative text-[50px] bg-[oklab(0_0_0_/_0.1)] box-border caret-transparent shrink-0 tracking-[-1.75px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] w-[50px] overflow-hidden mr-2 rounded-[15%] md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px] md:w-[68px]">
                <div className="relative text-[50px] box-border caret-transparent h-full tracking-[-1.75px] leading-[50px] outline-[3px] w-full md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                  <picture className="text-[50px] box-border caret-transparent tracking-[-1.75px] leading-[50px] outline-[3px] md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]">
                    <img
                      src={props.imageUrl}
                      sizes="100vw"
                      alt={props.imageAlt}
                      className="absolute text-[50px] box-border caret-transparent h-full tracking-[-1.75px] leading-[50px] max-w-full object-cover outline-[3px] w-full inset-0 md:text-[75px] md:tracking-[-2.625px] md:leading-[67.5px]"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </h2>

          <div
            className={`box-border caret-transparent flex-wrap outline-[3px] ${props.contentVariant}`}
          >
            <a href={props.primaryLinkUrl} className={props.primaryLinkClass}>
              <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                <div className="box-border caret-transparent outline-[3px]">
                  <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                    <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                      {props.primaryLinkText}
                    </span>
                    <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                      <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                    </span>
                  </div>
                </div>
                <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
                  <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                    <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                      {props.primaryLinkText}
                    </span>
                    <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                      <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a
              href={props.secondaryLinkUrl}
              className={props.secondaryLinkClass}
            >
              <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                <div className="box-border caret-transparent outline-[3px]">
                  <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                    <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                      {props.secondaryLinkText}
                    </span>
                    <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                      <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                    </span>
                  </div>
                </div>
                <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
                  <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
                    <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                      {props.secondaryLinkText}
                    </span>
                    <span className="text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] align-middle mt-1 md:min-h-[auto] md:min-w-[auto]">
                      <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </>
      )}
    </div>
  );
};
