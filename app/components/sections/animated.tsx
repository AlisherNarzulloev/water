"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import HeroSection from "./hero";
import NatureSection from "./nature";
import Header from "../layout/header";
import CaveWaterBird from "./cave-water-bird/cave-water-bird";
import KazakhSection from "./kazakh";
import UsefulSection from "./useful";
import SecureSection from "./secure";
import AwardSection from "./award";

export default function AnimatedSections() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const sectionCount = 4;

  const scrollLength = sectionCount * 400;

  const curtainProgress = useTransform(
    scrollYProgress,
    [0.01, 0.1, 0.2, 0.25],
    [0, 1, 1, 0]
  );

  return (
    <div
      ref={ref}
      style={{ height: `${scrollLength}vh` }}
      className="relative w-full overflow-hidden snap-y snap-mandatory"
    >
      <Header scrollYProgress={scrollYProgress} />
      <HeroSection scrollYProgress={scrollYProgress} />
      <NatureSection
        curtainProgress={curtainProgress}
        scrollYProgress={scrollYProgress}
      />
      <CaveWaterBird scrollYProgress={scrollYProgress} />
      <KazakhSection scrollYProgress={scrollYProgress} />
      <UsefulSection scrollYProgress={scrollYProgress} />
      <SecureSection scrollYProgress={scrollYProgress} />
      <AwardSection scrollYProgress={scrollYProgress} />
      <div className="h-[100vh]" />
    </div>
  );
}
