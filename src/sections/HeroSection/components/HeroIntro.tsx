export const HeroIntro = () => {
  return (
    <div className="absolute items-end box-border caret-transparent flex justify-between outline-[3px] w-full z-30 p-7 left-0 bottom-0">
      <div className="box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
        <div className="box-border caret-transparent outline-[3px] text-center w-full md:text-left">
          <p className="text-white text-sm box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-left">
            Organic media planners creating, distributing &amp; optimising 
            <br className="text-sm box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-left" />
            <strong className="text-sm font-medium box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-left">
              search-first
            </strong>
            content for SEO, Social, PR, Ai and LLM search
          </p>
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-right">
        <p className="text-white text-sm box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-right">
          <strong className="text-sm font-medium box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-right">
            4 Global Offices serving
          </strong>
          <br className="text-sm box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-right" />
          <strong className="text-sm font-medium box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-base md:leading-6 md:text-right">
            UK, USA (New York) &amp; EU
          </strong>
        </p>
      </div>
    </div>
  );
};
