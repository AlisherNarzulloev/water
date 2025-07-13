import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import LogoText from "../ui/logo-text";

interface HeroSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function HeroSection({ scrollYProgress }: HeroSectionProps) {
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.07], [1, 1, 0]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.01, 0.05, 0.07],
    [0, 1, 1]
  );
  return (
    <motion.section
      className="fixed top-0 left-0 w-full h-screen z-20 pointer-events-none"
      style={{ scale, opacity }}
    >
      <div className="relative h-full w-full flex items-center justify-center">
        <Image
          src="/bg-hero.png"
          alt="background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute right-[8vw] top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2">
          <div className="text-[#05A8E2] text-lg tracking-widest mb-1 uppercase">
            ЕДИНСТВЕННАЯ В КАЗАХСТАНЕ
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium text-[#153A51] leading-none mb-2 text-center">
            ПРИРОДНАЯ ЛЕГКАЯ
            <br />
            ЖИВАЯ ВОДА
          </h1>
          <LogoText />
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-white z-50 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />
    </motion.section>
  );
}
