import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import CaveSection from "./cave";
import WaterSection from "./water";
import BirdSection from "./bird";

interface CaveWaterBirdSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function CaveWaterBird({
  scrollYProgress,
}: CaveWaterBirdSectionProps) {
  const opacity = useTransform(
    scrollYProgress,
    [0.22, 0.28, 0.5, 0.55],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0.49, 0.6, 0.7, 75],
    [1, 5, 2, 0]
  );

  const x = useTransform(
    scrollYProgress,
    [0.49, 0.53, 0.6],
    ["0%", "-50%", "-50%"]
  );

  const y = useTransform(
    scrollYProgress,
    [0.49, 0.52, 0.55],
    ["0%", "-10%", "-10%"]
  );

  return (
    <motion.section
      style={{
        scale,
        x,
        y,
        opacity,
      }}
      className="relative top-[100vh] w-full h-[500vh] z-0 pointer-events-none overflow-hidden"
    >
      <Image
        width={100}
        height={100}
        className="select-none pointer-events-none h-full w-full"
        src={"/bg-without-bird.webp"}
        alt="bg-cave-water-bird"
        unoptimized
      />
      <CaveSection scrollYProgress={scrollYProgress} />
      <WaterSection scrollYProgress={scrollYProgress} />
      <BirdSection scrollYProgress={scrollYProgress} />
    </motion.section>
  );
}
