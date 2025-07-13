import { MotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";

interface CloudsSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function CloudsSection({ scrollYProgress }: CloudsSectionProps) {
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

  const opacityClouds = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95, 1],
    [0, 1, 1, 0]
  );

  return (
    <div className="w-full fixed top-0 z-20">
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
    </div>
  );
}
