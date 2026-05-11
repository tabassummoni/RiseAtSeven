import { useScrollReveal } from "@/hooks/useScrollReveal";

export const HeroBadge = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] mb-5 ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
    >
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
  );
};
