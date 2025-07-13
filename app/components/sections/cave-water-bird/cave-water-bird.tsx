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
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  const scale = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [1, 4, 0, 0]);

  const x = useTransform(scrollYProgress, [0.7, 0.8], ["0%", "-150%"]);

  const y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    ["0%", "-250%", "-220%", "400%"]
  );

  return (
    <motion.div
      style={{
        scale,
        x,
        y,
        opacity,
      }}
      className="relative z-10"
    >
      <motion.section
        className="relative top-[310vh] w-full h-[500vh] z-0 pointer-events-none overflow-hidden"
        style={{ opacity }}
      >
        <Image
          width={100}
          height={100}
          className="select-none pointer-events-none h-full w-full"
          src={"/bg-without-bird.png"}
          alt="bg-cave-water-bird"
          unoptimized
        />
        <CaveSection scrollYProgress={scrollYProgress} />
        <WaterSection scrollYProgress={scrollYProgress} />
        <BirdSection scrollYProgress={scrollYProgress} />
      </motion.section>
    </motion.div>
  );
}
