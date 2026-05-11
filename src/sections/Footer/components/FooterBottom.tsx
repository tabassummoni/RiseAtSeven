const LEGAL_LINKS = [
  { href: "https://riseatseven.com/privacy-policy/", label: "Privacy Policy" },
  {
    href: "https://riseatseven.com/terms-conditions/",
    label: "Terms & conditions",
  },
];

export const FooterBottom = () => {
  return (
    <div className="items-start flex flex-col col-end-[span_12] col-start-[span_12] gap-y-2 pt-6 border-t border-white/10 md:items-center md:flex-row md:justify-between md:pt-4">
      {/* Left: copyright + legal */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
        <span className="text-white/50 text-[10.5px] leading-[1.3] md:text-xs">
          © 2025 Rise at Seven Ltd. All rights reserved
        </span>
        <Dot />
        <span className="text-white/50 text-[10.5px] leading-[1.3] md:text-xs">
          Company Number 11955187
        </span>
        <Dot />
        <span className="text-white/50 text-[10.5px] leading-[1.3] md:text-xs">
          VAT Registered GB 322402945
        </span>
        <Dot />
        {LEGAL_LINKS.map((link, i) => (
          <span key={link.href} className="flex items-center gap-x-2">
            <a
              href={link.href}
              className="text-white/50 text-[10.5px] leading-[1.3] hover:text-white transition-colors md:text-xs"
            >
              {link.label}
            </a>
            {i < LEGAL_LINKS.length - 1 && <Dot />}
          </span>
        ))}
      </div>

      {/* Right: made by shape */}
      <a
        href="https://madebyshape.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/50 text-[10.5px] leading-[1.3] hover:text-white transition-colors md:text-xs md:ml-auto"
      >
        Website MadeByShape
      </a>
    </div>
  );
};

const Dot = () => (
  <span className="w-1 h-1 rounded-full bg-white/30 inline-block" />
);
