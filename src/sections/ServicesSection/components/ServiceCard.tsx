import { useScrollReveal } from "@/hooks/useScrollReveal";

export type ServiceCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  bottomImageUrl: string;
  bottomImageAlt: string;
  revealDelay?: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLAnchorElement>({
    threshold: 0.1,
  });
  return (
    <a
      ref={ref}
      href={props.href}
      className={`relative box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] z-10 ${props.revealDelay ?? ""} ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
    >
      <div className="relative items-center box-border caret-transparent gap-x-3 flex col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 z-20 py-4 md:py-6">
        <div className="relative box-border caret-transparent flex h-12 min-h-[auto] min-w-[auto] outline-[3px] w-12 overflow-hidden rounded-lg md:h-16 md:w-16 md:rounded-xl">
          <picture className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
            <img
              src={props.imageUrl}
              sizes="100vw"
              alt={props.imageAlt}
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
                {props.title}
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
                src={props.bottomImageUrl}
                sizes="100vw"
                alt={props.bottomImageAlt}
                className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full z-0 inset-0"
              />
            </picture>
          </div>
        </div>
      </div>
    </a>
  );
};
