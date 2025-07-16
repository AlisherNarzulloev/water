import { motion, MotionValue, useTransform } from "framer-motion";
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
    [0.07, 0.12, 0.5, 0.55],
    [0, 1, 1, 0]
  );

  // const scale = useTransform(
  //   scrollYProgress,
  //   [0.51, 0.53, 0.7, 0.75],
  //   [1, 5, 2, 0]
  // );

  // const x = useTransform(
  //   scrollYProgress,
  //   [0.51, 0.53, 0.6],
  //   ["0%", "-50%", "-50%"]
  // );

  // const y = useTransform(
  //   scrollYProgress,
  //   [0.51, 0.52, 0.55],
  //   ["0%", "-10%", "-10%"]
  // );

  return (
    <motion.section
      style={{ opacity }}
      className="w-screen h-[400vh] z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-cave-water-bird h-full w-full bg-fit 2xl:bg-contain bg-top bg-no-repeat z-0 2xl:top-[110vh]" />

      <div className="relative z-10 h-full">
        <CaveSection scrollYProgress={scrollYProgress} />
        <WaterSection scrollYProgress={scrollYProgress} />
        <BirdSection scrollYProgress={scrollYProgress} />
      </div>
    </motion.section>
  );
}
