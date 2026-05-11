import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const navLinks = [
  { href: "https://riseatseven.com/services/", label: "Services" },
  {
    href: "https://riseatseven.com/services/b2b-marketing/",
    label: "Industries",
  },
  { href: "https://riseatseven.com/international/", label: "International" },
  { href: "https://riseatseven.com/about/", label: "About" },
  { href: "https://riseatseven.com/work/", label: "Work" },
  { href: "https://riseatseven.com/careers/", label: "Careers" },
  { href: "https://riseatseven.com/blog/", label: "Blog & Resources" },
  { href: "https://riseatseven.com/webinars/", label: "Webinar" },
  { href: "https://riseatseven.com/contact/", label: "Contact" },
];

export const MobileMenuButton = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Play exit animation then actually unmount
  const handleClose = () => {
    setClosing(true);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 420); // matches menu-overlay-out duration
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const overlay = open
    ? createPortal(
        <div
          className={`fixed inset-0 z-[999] bg-neutral-900 flex flex-col px-6 pb-10 overflow-y-auto ${
            closing ? "menu-overlay-exit" : "menu-overlay-enter"
          }`}
        >
          {/* Top bar inside overlay */}
          <div className="flex items-center justify-between h-[72px] shrink-0">
            <img
              src="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-3.svg"
              alt="Rise at Seven"
              className="h-5 w-auto object-contain brightness-0 invert"
            />
            <button
              aria-label="Close menu"
              onClick={handleClose}
              className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 2L14 14M14 2L2 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Nav links — each item staggers in */}
          <nav className="flex flex-col mt-4">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClose}
                className={`text-white text-3xl font-medium tracking-[-1.05px] leading-[1.1] border-b border-white/10 py-5 menu-item-animate menu-delay-${i}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA — fades in last */}
          <div className="mt-auto pt-10 menu-item-animate menu-delay-cta">
            <a
              href="https://riseatseven.com/contact/"
              onClick={handleClose}
              className="block w-full text-center text-neutral-900 font-medium bg-green-200 px-6 py-4 rounded-3xl text-lg tracking-[-0.4px]"
            >
              Get In Touch
            </a>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      {/* Hamburger button — morphs to X when open */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={open ? handleClose : () => setOpen(true)}
        className="flex md:hidden items-center justify-center w-10 h-10 bg-transparent border-none outline-none p-0 z-[1000] relative"
      >
        <div className="flex flex-col justify-between w-5 h-3.5">
          <span
            className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </div>
      </button>

      {overlay}
    </>
  );
};
