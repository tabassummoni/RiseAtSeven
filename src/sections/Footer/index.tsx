import { NewsletterSignup } from "@/sections/Footer/components/NewsletterSignup";
import { FooterNavColumns } from "@/sections/Footer/components/FooterNavColumns";
import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

const NAV_COL_1 = [
  { href: "https://riseatseven.com/services/", label: "Services" },
  { href: "https://riseatseven.com/work/", label: "Work" },
  { href: "https://riseatseven.com/about/", label: "About" },
  { href: "https://riseatseven.com/culture/", label: "Culture" },
  { href: "https://riseatseven.com/meet-the-team/", label: "Meet The Risers" },
];

const NAV_COL_2 = [
  { href: "https://riseatseven.com/testimonials/", label: "Testimonials" },
  { href: "https://riseatseven.com/blog/", label: "Blog & Resources" },
  { href: "https://riseatseven.com/webinars/", label: "Webinars" },
  { href: "https://riseatseven.com/careers/", label: "Careers" },
];

const NAV_COL_3 = [
  { href: "https://g.co/kgs/4Br7JaS", label: "Sheffield" },
  { href: "https://g.co/kgs/9vh5imK", label: "Manchester" },
  { href: "https://g.co/kgs/hsv6LhR", label: "London" },
  { href: "https://g.co/kgs/NxzhAKU", label: "New York" },
  { href: "https://riseatseven.com/contact/", label: "Contact" },
];

export const Footer = () => {
  return (
    <section className="w-full px-2 pb-2 mt-8 md:mt-0 md:px-3 md:pb-3">
      <div className="bg-black rounded-3xl w-full px-4 pt-12 pb-6 md:px-8 md:pt-14 md:pb-8">
        {/* Top grid: newsletter + nav columns */}
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
          {/* Newsletter + socials — left col */}
          <div className="md:col-span-4">
            <NewsletterSignup />
          </div>

          {/* Nav columns — right col */}
          <div className="flex flex-wrap gap-x-6 gap-y-8 md:col-span-8 md:col-start-5 md:justify-end md:gap-x-10 md:gap-y-0">
            <FooterNavColumns items={NAV_COL_1} />
            <FooterNavColumns items={NAV_COL_2} />
            <FooterNavColumns items={NAV_COL_3} />
          </div>
        </div>

        {/* Big logo wordmark */}
        <FooterLogo />

        {/* Bottom bar */}
        <FooterBottom />
      </div>
    </section>
  );
};
