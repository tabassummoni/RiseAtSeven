// Reusable arrow-up-right SVG
const ArrowUpRight = () => (
  <svg
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-2.5 h-2.5 inline-block align-middle"
    aria-hidden="true"
  >
    <line x1="2" y1="8" x2="8" y2="2" />
    <polyline points="3,2 8,2 8,7" />
  </svg>
);

export type IntroActionsProps = {
  containerVariant: string;
  linkVariant: string;
  contentVariant: string;
};

export const IntroActions = (props: IntroActionsProps) => {
  return (
    <div
      className={`box-border caret-transparent gap-x-4 flex-wrap outline-[3px] gap-y-4 ${props.containerVariant}`}
    >
      {/* Our Story */}
      <a
        href="https://riseatseven.com/about/"
        className={`relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:w-auto ${props.linkVariant}`}
      >
        <div
          className={`relative box-border caret-transparent outline-[3px] overflow-hidden ${props.contentVariant}`}
        >
          <div className="box-border caret-transparent outline-[3px]">
            <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
              <span
                className={`box-border caret-transparent block outline-[3px] ${props.contentVariant}`}
              >
                Our Story
              </span>
              <span
                className={`text-xs box-border caret-transparent block leading-4 outline-[3px] align-middle mt-0.5 ${props.contentVariant}`}
              >
                <ArrowUpRight />
              </span>
            </div>
          </div>
          <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
            <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
              <span
                className={`box-border caret-transparent block outline-[3px] ${props.contentVariant}`}
              >
                Our Story
              </span>
              <span
                className={`text-xs box-border caret-transparent block leading-4 outline-[3px] align-middle mt-0.5 ${props.contentVariant}`}
              >
                <ArrowUpRight />
              </span>
            </div>
          </div>
        </div>
      </a>

      {/* Our Services */}
      <a
        href="https://riseatseven.com/services/"
        className={`relative text-neutral-900 font-medium items-center box-border caret-transparent gap-x-2 flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 outline-[3px] capitalize w-full border overflow-hidden border-solid border-transparent md:w-auto ${props.linkVariant}`}
      >
        <div
          className={`relative box-border caret-transparent outline-[3px] overflow-hidden ${props.contentVariant}`}
        >
          <div className="box-border caret-transparent outline-[3px]">
            <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
              <span
                className={`box-border caret-transparent block outline-[3px] ${props.contentVariant}`}
              >
                Our Services
              </span>
              <span
                className={`text-xs box-border caret-transparent block leading-4 outline-[3px] align-middle mt-0.5 ${props.contentVariant}`}
              >
                <ArrowUpRight />
              </span>
            </div>
          </div>
          <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
            <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
              <span
                className={`box-border caret-transparent block outline-[3px] ${props.contentVariant}`}
              >
                Our Services
              </span>
              <span
                className={`text-xs box-border caret-transparent block leading-4 outline-[3px] align-middle mt-0.5 ${props.contentVariant}`}
              >
                <ArrowUpRight />
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
