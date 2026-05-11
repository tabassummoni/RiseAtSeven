import { IntroActions } from "@/sections/IntroSection/components/IntroActions";
import { IntroContent } from "@/sections/IntroSection/components/IntroContent";

export const IntroSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-full py-12 md:py-24">
      <div className="box-border caret-transparent outline-[3px] w-full px-4 md:px-7">
        <div className="items-start box-border caret-transparent gap-x-3 flex flex-col-reverse justify-between outline-[3px] gap-y-3 w-full md:gap-x-5 md:flex-row md:gap-y-5">
          <IntroActions
            containerVariant="flex min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0"
            linkVariant="flex min-h-[auto] min-w-[auto] md:inline-flex md:min-h-0 md:min-w-0 md:w-auto"
            contentVariant="min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
          />
          <IntroContent
            containerVariant="mt-0 mb-1 md:mt-2 md:mb-0"
            contentVariant="relative text-neutral-900 text-lg font-medium box-border caret-transparent inline-flex flex-wrap justify-start tracking-[-0.63px] leading-[22.5px] outline-[3px] text-left md:text-2xl md:tracking-[-0.84px] md:leading-6"
            mode="simple"
            description="A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people"
            headingLine1=""
            headingLine2=""
            headingLine3=""
            headingLine4=""
            imageUrl=""
            imageAlt=""
            primaryLinkUrl=""
            primaryLinkText=""
            primaryLinkClass=""
            secondaryLinkUrl=""
            secondaryLinkText=""
            secondaryLinkClass=""
          />
          <IntroContent
            containerVariant="grid gap-y-3 md:gap-y-7"
            contentVariant="gap-x-4 hidden min-h-0 min-w-0 gap-y-4 md:flex md:min-h-[auto] md:min-w-[auto]"
            mode="default"
            description=""
            headingLine1="Driving"
            headingLine2="Demand"
            headingLine3="&"
            headingLine4="Discovery"
            imageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/73.webp"
            imageAlt="B2087e0cd3f699d3efc76f809ec72a85a6ab378e 1080x1350"
            primaryLinkUrl="https://riseatseven.com/about/"
            primaryLinkText="Our Story"
            primaryLinkClass="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 min-h-0 min-w-0 outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto"
            secondaryLinkUrl="https://riseatseven.com/services/"
            secondaryLinkText="Our Services"
            secondaryLinkClass="relative text-neutral-900 font-medium items-center box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 min-h-0 min-w-0 outline-[3px] capitalize w-full border overflow-hidden border-solid border-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
