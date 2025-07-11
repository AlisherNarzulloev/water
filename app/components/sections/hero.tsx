import Image from "next/image";
import type { FC } from "react";
import LogoText from "../ui/logo-text";

const HeroSection: FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <Image
        src="/bg-without-flowers.png"
        alt="background"
        fill
        priority
        className="object-cover z-0"
      />
      {/* 
      <Image
        src="/flowers.png"
        alt="flowers"
        width={1450}
        height={768}
        className="absolute left-0 bottom-0 w-full z-10 pointer-events-none select-none"
        priority
      />

      <Image
        src="/bottle.png"
        alt="bottle and glass"
        width={1100}
        height={768}
        className="absolute left-0 top-0 z-20 pointer-events-none select-none"
        priority
      />

      <Image
        src="/birds.png"
        alt="birds"
        width={800}
        height={700}
        className="absolute left-0 top-0 z-30 pointer-events-none select-none"
        priority
      /> */}

      <div className="absolute right-[8vw] top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2">
        <div className="text-[#05A8E2] text-lg tracking-widest mb-1 uppercase">
          ЕДИНСТВЕННАЯ В КАЗАХСТАНЕ
        </div>
        <h1 className="text-4xl lg:text-5xl font-medium text-[#153A51] leading-tight mb-2 text-center">
          ПРИРОДНАЯ ЛЕГКАЯ
          <br />
          ЖИВАЯ ВОДА
        </h1>
        <LogoText />
      </div>
    </section>
  );
};

export default HeroSection;
