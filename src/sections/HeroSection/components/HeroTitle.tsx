import { useScrollReveal } from "@/hooks/useScrollReveal";

interface HeroTitleProps {
  heroImage: string;
}

export const HeroTitle = ({ heroImage }: HeroTitleProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLHeadingElement>({
    threshold: 0.1,
  });
  return (
    <h1
      ref={ref}
      className={`relative text-white text-6xl font-medium box-border caret-transparent flex flex-col flex-wrap justify-center tracking-[-2.1px] leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-[120px] md:tracking-[-4.2px] md:leading-[108px] reveal-delay-100 ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
    >
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
  );
};
