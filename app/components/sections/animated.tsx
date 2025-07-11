"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import HeroSection from "./hero";
import Curtains from "./curtains";
import NatureSection from "./nature";
import Header from "../layout/header";

export default function AnimatedSections() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.03, 0.08], [0, 0, -100]);

  const heroScale = useTransform(scrollYProgress, [0, 0.7], [1, 2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.32, 0.38], [1, 1, 0]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.4, 0.45],
    [0, 1, 0]
  );

  const curtainProgress = useTransform(scrollYProgress, [0.2, 0.36], [0, 1]);
  const leftX = useTransform(curtainProgress, [0, 1], ["-100%", "0%"]);
  const rightX = useTransform(curtainProgress, [0, 1], ["100%", "0%"]);
  const curtainScale = useTransform(curtainProgress, [0, 1], [1.5, 1]);

  const contentAppear = useTransform(curtainProgress, [0.9, 1], [0, 1]);
  const contentY = useTransform(curtainProgress, [0.9, 1], [40, 0]);

  return (
    <div ref={ref} className="relative w-full h-[200vh] bg-white">
      <Header y={headerY} />
      <HeroSection
        scale={heroScale}
        opacity={heroOpacity}
        overlayOpacity={overlayOpacity}
      />
      <Curtains leftX={leftX} rightX={rightX} scale={curtainScale} />
      <NatureSection opacity={contentAppear} y={contentY} />
      <div className="h-[100vh]" />
    </div>
  );
}
