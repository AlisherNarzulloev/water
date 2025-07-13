"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import HeroSection from "./hero";
import Curtains from "./curtains";
import NatureSection from "./nature";
import Header from "../layout/header";
import CaveWaterBird from "./cave-water-bird/cave-water-bird";
import CloudsSection from "./clouds";
import KazakhSection from "./kazakh";

export default function AnimatedSections() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const curtainProgress = useTransform(
    scrollYProgress,
    [0.01, 0.2, 0.3, 0.4],
    [0, 1, 1, 0]
  );

  return (
    <div
      ref={ref}
      className="relative w-full h-[1000vh] bg-white overflow-hidden"
    >
      <Header scrollYProgress={scrollYProgress} />
      <HeroSection scrollYProgress={scrollYProgress} />
      <Curtains scrollYProgress={curtainProgress} />
      <NatureSection
        scrollYProgress={scrollYProgress}
        curtainProgress={curtainProgress}
      />
      <CaveWaterBird scrollYProgress={scrollYProgress} />
      <CloudsSection scrollYProgress={scrollYProgress} />
      <KazakhSection scrollYProgress={scrollYProgress} />
      <div className="h-[100vh]" />
    </div>
  );
}
