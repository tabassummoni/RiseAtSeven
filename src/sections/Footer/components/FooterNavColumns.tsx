export type FooterNavColumnsProps = {
  title?: string;
  items: {
    href: string;
    label: string;
  }[];
};

export const FooterNavColumns = (props: FooterNavColumnsProps) => {
  return (
    <div className="items-start flex flex-col gap-y-2 pl-4 border-l border-white/20">
      {props.title && (
        <span className="text-white/40 text-xs font-medium uppercase tracking-widest mb-1">
          {props.title}
        </span>
      )}
      {props.items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="group relative text-white text-lg font-medium tracking-[-0.63px] leading-[1.25] overflow-hidden md:text-[22px] md:tracking-[-0.77px] hover:text-lime-200 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
