"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import HeroSection from "./hero";
import Curtains from "./curtains";
import NatureSection from "./nature";
import Header from "../layout/header";
import CaveWaterBird from "./cave-water-bird";
import { motion } from "framer-motion";
import Image from "next/image";

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

  const natureAppear = useTransform(curtainProgress, [0.9, 1, 1.4], [0, 1, 0]);
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
    [0.65, 0.67, 0.8],
    [0, 1, 1]
  );
  const textThreeY = useTransform(
    scrollYProgress,
    [0.6, 0.65, 0.8, 0.85],
    [100, 0, 0, -100]
  );

  const scaleCave = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    [1, 4, 0, 0]
  );

  const moveXCave = useTransform(scrollYProgress, [0.7, 0.8], ["0%", "-150%"]);

  const moveYCave = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    ["0%", "-250%", "-220%", "400%"]
  );

  const opacityCave = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

  const opacityClouds = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95, 1],
    [0, 1, 1, 0]
  );

  const moveBuildingY = useTransform(
    scrollYProgress,
    [0.8, 0.85],
    ["100%", "0%"]
  );
  const moveBuildingBackY = useTransform(
    scrollYProgress,
    [0.8, 0.85],
    ["130%", "0%"]
  );

  const opacityBackBuilding = useTransform(
    scrollYProgress,
    [0.8, 0.85],
    [0, 1]
  );

  const opacityBgSky = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);

  const cloudScale1 = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95, 1],
    [2, 0.7, 0.7, 0.3]
  );
  const cloudeMoveX1 = useTransform(
    scrollYProgress,
    [0.8, 0.85],
    ["0%", "-30%"]
  );
  const cloudeMoveY1 = useTransform(
    scrollYProgress,
    [0.83, 0.87],
    ["0%", "-100%"]
  );

  const cloudeMoveX2 = useTransform(
    scrollYProgress,
    [0.8, 0.85],
    ["0%", "30%"]
  );
  const cloudeMoveY2 = useTransform(
    scrollYProgress,
    [0.83, 0.87],
    ["0%", "-100%"]
  );

  const cloudeMoveX3 = useTransform(scrollYProgress, [0.8, 0.85], ["0%", "0%"]);
  const cloudeMoveY3 = useTransform(
    scrollYProgress,
    [0.83, 0.87],
    ["0%", "-100%"]
  );

  const textBuildingY = useTransform(
    scrollYProgress,
    [0.8, 0.9],
    ["200%", "-10%"]
  );

  const features = [
    {
      value: "Источник",
      label:
        "Природный, глубинный, расположен в заповедной зоне Кокшетауской возвышенности.",
    },
    {
      value: "Розлив",
      label:
        "На собственном заводе, оснащенном самыми современными автоматизированными линиями розлива от ведущих мировых производителей: Krones, Sidel, FBT, KHS, общей производственной мощностью более 70 000 бутылок в час.",
    },
    {
      value: "Упаковка",
      label:
        "Даже РЕТ преформы (заготовки для бутылок), которые все закупают у поставщиков, мы производим сами, здесь же на заводе.",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative w-full h-[1000vh] bg-white overflow-hidden"
    >
      <Header y={headerY} />
      <HeroSection
        scale={heroScale}
        opacity={heroOpacity}
        overlayOpacity={overlayOpacity}
      />
      <Curtains leftX={leftX} rightX={rightX} scale={curtainScale} />
      <NatureSection opacity={natureAppear} scale={natureScale} />
      <motion.div
        style={{
          scale: scaleCave,
          x: moveXCave,
          y: moveYCave,
          opacity: opacityCave,
        }}
        className="relative z-20"
      >
        <CaveWaterBird
          opacity={caveWaterBirdAppear}
          textOneOpacity={textOneAppear}
          textOneY={textOneY}
          textTwoOpacity={textTwoAppear}
          textTwoY={textTwoY}
          textThreeOpacity={textThreeAppear}
          textThreeY={textThreeY}
        />
      </motion.div>
      <motion.div className="w-full fixed top-0 z-20">
        <motion.div
          style={{
            scale: cloudScale1,
            x: cloudeMoveX1,
            y: cloudeMoveY1,
            opacity: opacityClouds,
          }}
        >
          <Image
            src={"/cloud1.png"}
            width={100}
            height={100}
            alt="cloud1"
            className="w-full h-full"
          />
        </motion.div>
        <motion.div
          style={{
            scale: cloudScale1,
            x: cloudeMoveX2,
            y: cloudeMoveY2,

            opacity: opacityClouds,
          }}
          className="w-full fixed top-0 z-20"
        >
          <Image
            src={"/cloud2.png"}
            width={100}
            height={100}
            alt="cloud2"
            className="w-full h-full"
          />
        </motion.div>
        <motion.div
          style={{
            scale: cloudScale1,
            x: cloudeMoveX3,
            y: cloudeMoveY3,

            opacity: opacityClouds,
          }}
          className="w-full fixed top-0 z-20"
        >
          <Image
            src={"/cloud3.png"}
            width={100}
            height={100}
            alt="cloud3"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: moveBuildingY }}
        className="h-screen fixed top-0 z-30 w-full"
      >
        <Image
          src={"/kazakh_building.png"}
          width={100}
          height={100}
          alt="building"
          className="w-full h-screen object-cover"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ y: textBuildingY }}
        className="fixed top-24 z-20 flex flex-col justify-between h-full w-full items-center px-8"
      >
        <div className="flex flex-col items-start leading-none">
          <h1 className="text-white text-[130px] font-extrabold tracking-tight select-none pointer-events-none leading-none -ml-6">
            100%
          </h1>
          <h1 className="text-white text-[218px] font-extrabold tracking-tight select-none pointer-events-none leading-none -mt-6">
            КАЗАХСТАНСКАЯ
          </h1>
        </div>
      </motion.div>
      <motion.div
        style={{ opacity: opacityBgSky }}
        className="bg-[#91afeb] h-screen w-full fixed top-0 z-10"
      ></motion.div>
      <div className="h-screen">
        <motion.div
          style={{ y: textBuildingY }}
          className="fixed -bottom-20 z-30 h-full pb-12 w-full items-center px-8"
        >
          <div className="self-end max-w-2xl absolute top-1/2 -translate-y-1/2 left-8 p-4 backdrop-blur-[6px] rounded-2xl overflow-hidden">
            <p className="font-bold text-2xl">
              Локальность как принцип. Независимость как выбор. TURAN — это не
              просто вода с казахстанским адресом на этикетке. Это продукт, в
              котором всё, без исключений, — казахстанского происхождения. Не на
              бумаге, а на деле: от источникаи производственной цепочки до
              упаковки.
            </p>
            <p>
              И в этом коротком списке он занимает уверенную вторую позицию.
              Легче воды TURAN только талые воды ледников Антарктики. Но в
              отличие от лидера списка TURAN доступен всем желающим.
            </p>
          </div>
          <div className="absolute bottom-0 w-full grid grid-cols-3 gap-8 z-30">
            {features.map((f) => (
              <div
                key={f.value}
                className="px-8 py-4 flex flex-col items-center text-white backdrop-blur-sm rounded-2xl overflow-hidden"
              >
                <span className="text-3xl font-bold">{f.value}</span>
                <span className="text-lg opacity-80 text-center font-medium">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: moveBuildingBackY, opacity: opacityBackBuilding }}
        className="h-screen w-full fixed top-0 z-10 "
      >
        <Image
          src={"/kazakh_back.jpg"}
          width={100}
          height={100}
          alt="building"
          className="w-full h-screen object-cover"
          unoptimized
        />
      </motion.div>

      <motion.div
        style={{ opacity: opacityClouds }}
        className="h-[200vh] w-full fixed top-0"
      ></motion.div>
      <div className="h-[100vh]" />
    </div>
  );
}
