export type ArticleCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  authorImageSrc: string;
  authorName: string;
  readTime: string;
  title: string;
  category: string;
};

export const ArticleCard = (props: ArticleCardProps) => {
  return (
    <a
      href={props.href}
      className="items-start box-border caret-transparent flex flex-col outline-[3px] gap-y-5 w-full"
    >
      <div className="box-border caret-transparent grid min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="relative aspect-square box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl md:rounded-3xl">
          <picture className="box-border caret-transparent outline-[3px]">
            <img
              src={props.imageSrc}
              sizes="100vw"
              alt={props.imageAlt}
              className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full left-0 top-0"
            />
          </picture>
        </div>
        <div className="box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-20 p-3">
          {props.category ? (
            <div className="box-border caret-transparent gap-x-1 flex flex-wrap outline-[3px] gap-y-1">
              <div className="text-white text-sm font-medium items-center backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4 md:min-h-8 md:py-1.5">
                <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
                  {props.category}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
        <div className="items-start box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 mt-1">
          <div className="text-neutral-500 text-sm font-medium items-center bg-white box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4 md:min-h-8 md:py-1.5">
            <div className="text-sm items-center box-border caret-transparent flex justify-center tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] -ml-1.5 md:text-base md:tracking-[-0.56px] md:leading-4">
              <div className="text-sm box-border caret-transparent h-5 tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] w-5 overflow-hidden -mr-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4">
                <img
                  src={props.authorImageSrc}
                  alt=""
                  className="text-sm box-border caret-transparent h-full tracking-[-0.49px] leading-[14px] max-w-full object-cover outline-[3px] w-full md:text-base md:tracking-[-0.56px] md:leading-4"
                />
              </div>
            </div>
            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
              {props.authorName}
            </div>
          </div>
          <div className="text-neutral-500 text-sm font-medium items-center bg-white box-border caret-transparent gap-x-2 flex tracking-[-0.49px] leading-[14px] min-h-7 min-w-[auto] outline-[3px] px-3 py-1 rounded-[3.35544e+07px] md:text-base md:tracking-[-0.56px] md:leading-4 md:min-h-8 md:py-1.5">
            <i className="text-sm font-normal box-border caret-transparent block tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] font-font_awesome_6_sharp md:text-base md:tracking-[-0.56px] md:leading-4 before:accent-auto before:box-border before:caret-transparent before:text-neutral-500 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[-0.49px] before:leading-[14px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_sharp before:md:text-base before:md:tracking-[-0.56px] before:md:leading-4"></i>
            <div className="text-sm box-border caret-transparent tracking-[-0.49px] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:tracking-[-0.56px] md:leading-4">
              {props.readTime}
            </div>
          </div>
        </div>
        <h2 className="relative text-neutral-900 text-2xl font-medium box-border caret-transparent flex flex-wrap justify-start tracking-[-0.84px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-3xl md:tracking-[-1.05px] md:leading-[30px]">
          {props.title}
        </h2>
      </div>
    </a>
  );
};
