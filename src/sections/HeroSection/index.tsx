import { useState } from "react";
import { HeroIntro } from "@/sections/HeroSection/components/HeroIntro";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

const images = [
    "https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=213&h=278&q=100&auto=format&fit=crop&dm=1750948726&s=0ecee9869674cd309d3170dfd7b29674",
    "https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=213&h=278&q=100&auto=format&fit=crop&dm=1750948726&s=0ecee9869674cd309d3170dfd7b29674",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Emirates-airpline-in-flight.avif?w=1330&h=700&q=100&auto=format&fit=crop&dm=1750948034&s=7fc16049313aefb0ea160470af9ae379",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2560&h=1707&q=100&auto=format&fit=crop&dm=1750847623&s=2e6f5684a2dcbdbd148a651a17aafe47"
  ];

export const HeroSection = () => {
  const [heroImage] = useState<string>(
    () => images[Math.floor(Math.random() * images.length)],
  );

  return (
    <div className="box-border caret-transparent outline-[3px]">
      <section className="box-border caret-transparent outline-[3px] w-full">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="relative box-border caret-transparent h-[600px] outline-[3px] w-full p-2 md:h-[1000px]">
            <HeroIntro />
            <div className="relative box-border caret-transparent h-full outline-[3px] w-full overflow-hidden rounded-3xl">
              <div className="bg-neutral-900 box-border caret-transparent grid h-full outline-[3px] w-full overflow-hidden rounded-3xl">
                {/* Blurred background image layer */}
                <div className="relative box-border caret-transparent blur col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-0 overflow-hidden md:blur-md">
                  <img
                    key={heroImage}
                    src={heroImage}
                    className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full inset-0"
                  />
                </div>
                <HeroContent heroImage={heroImage} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
