import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

interface CurtainsProps {
  scrollYProgress: MotionValue<number>;
}

export default function Curtains({ scrollYProgress }: CurtainsProps) {
  const leftX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-20 pointer-events-none">
      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 origin-right"
        style={{ x: leftX, scale }}
      >
        <Image
          src="/left.webp"
          alt="Лес левая часть"
          fill
          className="object-cover w-full h-full select-none pointer-events-none"
          draggable={false}
          priority
        />
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 origin-left"
        style={{ x: rightX, scale }}
      >
        <Image
          src="/right.webp"
          alt="Лес правая часть"
          fill
          className="object-cover w-full h-full select-none pointer-events-none"
          draggable={false}
          priority
        />
      </motion.div>
    </div>
  );
}
