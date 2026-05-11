import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";
import { SectionCta } from "@/components/SectionCta";

export const ServicesSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-full pb-12 md:pb-24">
      <div className="box-border caret-transparent outline-[3px] w-full px-4 md:px-7">
        <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(12,minmax(0px,1fr))] outline-[3px] gap-y-3 overflow-hidden pt-0 md:gap-x-5 md:gap-y-7 md:pt-5">
          <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px]">
            <SectionHeader
              titleStart="Our"
              titleEnd="Services"
              imageSrc="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/74.webp"
              imageAlt="IMG 5079"
              linkHref="https://riseatseven.com/services/"
              linkText="View All Services"
            />
          </div>
          <div className="box-border caret-transparent gap-x-2 grid col-end-[span_12] col-start-[span_12] grid-cols-[repeat(12,minmax(0px,1fr))] min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
              <div className="relative box-border caret-transparent outline-[3px]">
                <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                  <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                </div>
                <ServiceCard
                  href="https://riseatseven.com/services/digital-pr/"
                  imageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/2.webp"
                  imageAlt="Screenshot 2025 06 23 at 22 39 35"
                  title="Digital PR"
                  bottomImageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/135.webp"
                  bottomImageAlt="Screenshot 2025 06 23 at 22 39 35"
                  revealDelay="reveal-delay-100"
                />
              </div>
            </div>
            <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
              <div className="relative box-border caret-transparent outline-[3px]">
                <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                  <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                </div>
                <ServiceCard
                  href="https://riseatseven.com/services/social/"
                  imageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/4.webp"
                  imageAlt="Screenshot 2025 07 01 at 20 31 18"
                  title="Organic Social & Content"
                  bottomImageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/128.webp"
                  bottomImageAlt="Screenshot 2025 07 01 at 20 31 18"
                  revealDelay="reveal-delay-200"
                />
              </div>
            </div>
            <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
              <div className="relative box-border caret-transparent outline-[3px]">
                <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                  <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                </div>
                <ServiceCard
                  href="https://riseatseven.com/services/strategy-growth/"
                  imageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/27.webp"
                  imageAlt="Screenshot 2025 06 25 at 14 37 50"
                  title="Search & Growth Strategy"
                  bottomImageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/129.webp"
                  bottomImageAlt="Screenshot 2025 06 25 at 14 37 50"
                  revealDelay="reveal-delay-300"
                />
              </div>
            </div>
            <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
              <div className="relative box-border caret-transparent outline-[3px]">
                <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                  <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                </div>
                <ServiceCard
                  href="https://riseatseven.com/services/content-experience/"
                  imageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/26.webp"
                  imageAlt="0 B5 A7499"
                  title="Content Experience"
                  bottomImageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/127.webp"
                  bottomImageAlt="0 B5 A7499"
                  revealDelay="reveal-delay-400"
                />
              </div>
            </div>
            <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
              <div className="relative box-border caret-transparent outline-[3px]">
                <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                  <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                </div>
                <ServiceCard
                  href="https://riseatseven.com/services/data-insights/"
                  imageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/30.webp"
                  imageAlt="E34acc13 be9a 4862 a3bd 95aa2738aeb3"
                  title="Data & Insights"
                  bottomImageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/126.webp"
                  bottomImageAlt="E34acc13 be9a 4862 a3bd 95aa2738aeb3"
                  revealDelay="reveal-delay-500"
                />
              </div>
            </div>
            <div className="box-border caret-transparent col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] -my-px md:col-end-[span_6] md:col-start-[span_6]">
              <div className="relative box-border caret-transparent outline-[3px]">
                <div className="absolute box-border caret-transparent outline-[3px] w-full z-0 left-0 bottom-0">
                  <div className="bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full"></div>
                </div>
                <ServiceCard
                  href="https://riseatseven.com/services/onsite-seo/"
                  imageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/31.webp"
                  imageAlt="Screenshot 2025 06 24 at 00 20 47"
                  title="Onsite SEO"
                  bottomImageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/125.webp"
                  bottomImageAlt="Screenshot 2025 06 24 at 00 20 47"
                  revealDelay="reveal-delay-600"
                />
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent block col-end-[span_12] col-start-[span_12] min-h-[auto] min-w-[auto] outline-[3px] md:hidden md:min-h-0 md:min-w-0">
            <SectionCta
              href="https://riseatseven.com/services/"
              text="View All Services"
              linkVariant="inline-flex"
              contentVariant="min-h-[auto] min-w-[auto]"
              textVariant="min-h-[auto] min-w-[auto]"
              responsiveVariant="md:min-h-0 md:min-w-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
