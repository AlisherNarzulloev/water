"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import HeroSection from "./hero";
import Curtains from "./curtains";
import NatureSection from "./nature";
import Header from "../layout/header";
import CaveWaterBird from "./cave-water-bird";

export default function AnimatedSections() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.03, 0.05], [0, 0, -100]);

  const heroScale = useTransform(scrollYProgress, [0, 0.05], [1, 2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05, 0.07], [1, 1, 0]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.01, 0.05, 0.07],
    [0, 1, 1]
  );

  const curtainProgress = useTransform(
    scrollYProgress,
    [0.01, 0.2, 0.3, 0.4],
    [0, 1, 1, 0]
  );
  const leftX = useTransform(curtainProgress, [0, 1], ["-100%", "0%"]);
  const rightX = useTransform(curtainProgress, [0, 1], ["100%", "0%"]);
  const curtainScale = useTransform(curtainProgress, [0, 1], [1.5, 1]);

  const natureAppear = useTransform(curtainProgress, [0.9, 1, 1.05], [0, 1, 0]);
  const natureScale = useTransform(scrollYProgress, [0, 0.05], [0.9, 1]);

  const caveWaterBirdAppear = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  const textOneAppear = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.45, 0.5],
    [0, 1, 1, 0]
  );
  const textOneY = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.45, 0.5],
    [100, 0, 0, -100]
  );

  const textTwoAppear = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.6, 0.65],
    [0, 1, 1, 0]
  );
  const textTwoY = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.6, 0.65],
    [100, 0, 0, -100]
  );

  const textThreeAppear = useTransform(
    scrollYProgress,
    [0.65, 0.7, 0.75, 0.8],
    [0, 1, 1, 0]
  );
  const textThreeY = useTransform(
    scrollYProgress,
    [0.65, 0.7, 0.75, 0.8],
    [100, 0, 0, -100]
  );

  return (
    <div ref={ref} className="relative w-full h-[1000vh] bg-white">
      <Header y={headerY} />
      <HeroSection
        scale={heroScale}
        opacity={heroOpacity}
        overlayOpacity={overlayOpacity}
      />
      <Curtains leftX={leftX} rightX={rightX} scale={curtainScale} />
      <NatureSection opacity={natureAppear} scale={natureScale} />
      <CaveWaterBird
        opacity={caveWaterBirdAppear}
        textOneOpacity={textOneAppear}
        textOneY={textOneY}
        textTwoOpacity={textTwoAppear}
        textTwoY={textTwoY}
        textThreeOpacity={textThreeAppear}
        textThreeY={textThreeY}
      />
      <div className="h-[100vh]" />
    </div>
  );
}
