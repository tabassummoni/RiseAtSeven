import { MobileLegacyCards } from "@/sections/LegacySection/components/MobileLegacyCards";
import { DesktopLegacyStack } from "@/sections/LegacySection/components/DesktopLegacyStack";

export const LegacySection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <section className="box-border caret-transparent outline-[3px] w-full">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <MobileLegacyCards />
          <DesktopLegacyStack />
        </div>
      </section>
    </div>
  );
};
