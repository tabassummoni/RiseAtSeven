import { TextMarquee } from "@/sections/MarqueeStatementSection/components/TextMarquee";

export const MarqueeStatementSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] overflow-hidden">
      <section className="box-border caret-transparent outline-[3px] w-full">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <TextMarquee />
        </div>
      </section>
    </div>
  );
};
