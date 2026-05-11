import { PreloadOverlays } from "@/components/PreloadOverlays";
import { CursorBadge } from "@/components/CursorBadge";
import { FloatingUi } from "@/components/FloatingUi";
import { FloatingButton } from "@/components/FloatingButton";
import { Header } from "@/sections/Header";

export const App = () => {
  return (
    // <body className="text-black text-base not-italic normal-nums font-normal accent-auto bg-zinc-100 box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[3px] pointer-events-auto scroll-smooth text-start indent-[0px] normal-case visible border-separate font-saans">
    //   <main className="box-border caret-transparent outline-[3px]">
    //     <PreloadOverlays
    //       imageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-1.svg"
    //       imageClassName="box-border caret-transparent h-[1000px] outline-[3px] w-screen"
    //       alt="Icon"
    //     />
    //     <PreloadOverlays
    //       imageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-2.svg"
    //       imageClassName="h-full"
    //       alt="Icon"
    //     />
    //     <FloatingUi content={<CursorBadge />} />
    //     <FloatingUi content={<FloatingButton />} />
    //     <Header />
    //   </main>
    // </body>

    /* 1. Body-te default background (mobile-er jonno) ebong lg:bg-blue-600 (boro screen-er jonno) add kora hoyeche */
    <body className="bg-zinc-100 lg:bg-blue-600 text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[3px] pointer-events-auto scroll-smooth text-start indent-[0px] normal-case visible border-separate font-saans">
      
      {/* 2. lg:hidden class-ti boro screen-e puro main content-ke vanish kore dibe */}
      <main className="lg:hidden box-border caret-transparent outline-[3px]">
        <PreloadOverlays
          imageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-1.svg"
          imageClassName="box-border caret-transparent h-[1000px] outline-[3px] w-screen"
          alt="Icon"
        />
        <PreloadOverlays
          imageUrl="https://c.animaapp.com/mp18o4r3Bfs0lp/assets/icon-2.svg"
          imageClassName="h-full"
          alt="Icon"
        />
        <FloatingUi content={<CursorBadge />} />
        <FloatingUi content={<FloatingButton />} />
        <Header />
      </main>

      {/* 3. Option: Boro screen-e jodi kono message dekhate chan */}
      <div className="hidden lg:flex fixed inset-0 items-center justify-center text-white font-bold text-xl">
        This app is only optimized for Mobile Devices.
      </div>
    </body>
  );
};
