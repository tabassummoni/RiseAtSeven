import { useState, useEffect, useRef } from "react";
import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { NavbarCta } from "@/sections/Header/components/NavbarCta";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const prev = lastScrollY.current;

      if (current < 10) {
        setAtTop(true);
        setVisible(true);
      } else {
        setAtTop(false);
        if (current > prev && current > 80) {
          // scrolling down — hide
          setVisible(false);
        } else if (current < prev) {
          // scrolling up — show
          setVisible(true);
        }
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={[
        "left-0 w-full z-50 transition-transform duration-300 ease-in-out",
        // At top: sit in normal flow (absolute within the announcement-bar+hero stack)
        atTop ? "absolute" : "fixed top-0",
        // Smart scroll hide/show only applies when fixed (scrolled away from top)
        !atTop && !visible ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div className="box-border caret-transparent flex h-[72px] w-full p-0 md:h-[88px] md:p-3">
        <div
          className={[
            "relative items-center box-border caret-transparent flex justify-between w-full z-20 px-4 transition-colors duration-300 rounded-none md:px-3 md:rounded-[3.35544e+07px]",
            !atTop ? "bg-neutral-900/90 backdrop-blur-md" : "bg-transparent",
          ].join(" ")}
        >
          <NavbarLogo />
          <DesktopNav />
          <NavbarCta />
          <MobileMenuButton />
        </div>
      </div>
    </div>
  );
};
