export const FloatingButton = () => {
  return (
    <div className="fixed box-border caret-transparent hidden isolate outline-[3px] pointer-events-none z-50 left-[400px] top-[300px]">
      <div className="relative text-neutral-900 font-medium items-center bg-green-200 box-border caret-transparent gap-x-2 inline-flex flex-row-reverse shrink-0 justify-center tracking-[-0.4px] leading-5 outline-[3px] capitalize w-full border overflow-hidden px-6 py-3 rounded-3xl border-solid border-transparent md:w-auto">
        <div className="relative box-border caret-transparent outline-[3px] overflow-hidden">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
              <span className="box-border caret-transparent block outline-[3px]"></span>
              <span className="text-xs box-border caret-transparent block leading-4 outline-[3px] align-middle mt-1">
                <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-none before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
              </span>
            </div>
          </div>
          <div className="absolute box-border caret-transparent outline-[3px] left-0 top-0">
            <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px]">
              <span className="box-border caret-transparent block outline-[3px]"></span>
              <span className="text-xs box-border caret-transparent block leading-4 outline-[3px] align-middle mt-1">
                <i className="font-normal box-border caret-transparent inline-block leading-3 outline-[3px] font-font_awesome_6_sharp before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[-0.4px] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-none before:text-start before:no-underline before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_sharp"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
