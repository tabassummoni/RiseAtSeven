import { useScrollReveal } from "@/hooks/useScrollReveal";

export const HeroSubtitle = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`relative text-white text-lg font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.63px] leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left mt-2 md:text-3xl md:tracking-[-1.05px] md:leading-[30px] md:mt-4 reveal-delay-200 ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
    >
      on every searchable platform
    </div>
  );
};
