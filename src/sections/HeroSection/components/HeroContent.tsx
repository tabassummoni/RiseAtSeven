import { HeroBadge } from "@/sections/HeroSection/components/HeroBadge";
import { HeroTitle } from "@/sections/HeroSection/components/HeroTitle";
import { HeroSubtitle } from "@/sections/HeroSection/components/HeroSubtitle";
import { HeroLogos } from "@/sections/HeroSection/components/HeroLogos";

interface HeroContentProps {
  heroImage: string;
}

export const HeroContent = ({ heroImage }: HeroContentProps) => {
  return (
    <div className="relative items-center bg-[oklab(0.181061_-0.00153356_-0.000468194_/_0.3)] box-border caret-transparent flex col-start-1 row-start-1 justify-center min-h-[auto] min-w-[auto] outline-[3px] z-20">
      <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px]">
        <HeroBadge />
        <HeroTitle heroImage={heroImage} />
        <HeroSubtitle />
        <HeroLogos />
      </div>
    </div>
  );
};
