import { PreloadOverlays } from "@/components/PreloadOverlays";
import { CursorBadge } from "@/components/CursorBadge";
import { FloatingUi } from "@/components/FloatingUi";
import { FloatingButton } from "@/components/FloatingButton";
import { Header } from "@/sections/Header";

export const App = () => {
  return (
    <body className="bg-blue-600 md:bg-zinc-100"> 
      {/* 1. Laptop/Tablet (md/lg) screen-e blue background dekhabe.
          2. Mobile-e (default) original zinc background thakbe.
      */}

      {/* Desktop-er jonno Blue Screen Overlay */}
      <div className="hidden md:flex fixed inset-0 bg-blue-600 z-[9999] items-center justify-center text-white text-2xl font-bold">
        This app is only available on Mobile Devices.
      </div>

      {/* Mobile Content: md screen e hidden thakbe */}
      <main className="md:hidden box-border caret-transparent outline-[3px]">
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
    </body>
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
  );
};
