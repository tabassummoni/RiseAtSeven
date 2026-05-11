export const AnnouncementBar = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] w-full pt-2.5 px-2.5">
      <a
        href="https://riseatseven.com/category-leaderboard/"
        className="relative text-neutral-900 text-xs font-semibold items-center bg-green-200 box-border caret-transparent flex justify-center tracking-[-0.42px] leading-3 outline-[3px] text-center w-full z-[60] px-5 py-2 rounded-2xl md:text-sm md:tracking-[-0.49px] md:leading-[14px]"
      >
        <div className="text-xs box-border caret-transparent block tracking-[-0.42px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mt-0.5 md:text-sm md:hidden md:tracking-[-0.49px] md:leading-[14px] md:min-h-0 md:min-w-0">
          🚨 The Category Leaderboard - Live Now
        </div>
        <div className="relative text-xs box-border caret-transparent hidden tracking-[-0.42px] leading-3 min-h-0 min-w-0 outline-[3px] overflow-hidden mt-0.5 md:text-sm md:block md:tracking-[-0.49px] md:leading-[14px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-xs box-border caret-transparent tracking-[-0.42px] leading-3 outline-[3px] md:text-sm md:tracking-[-0.49px] md:leading-[14px]">
            🚨 The Category Leaderboard - Live Now
          </div>
          <div className="absolute text-xs box-border caret-transparent tracking-[-0.42px] leading-3 outline-[3px] left-0 top-0 md:text-sm md:tracking-[-0.49px] md:leading-[14px]">
            🚨 The Category Leaderboard - Live Now
          </div>
        </div>
      </a>
    </div>
  );
};
