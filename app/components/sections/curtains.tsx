import { motion, MotionValue } from "framer-motion";
import Image from "next/image";

interface CurtainsProps {
  leftX: MotionValue<string>;
  rightX: MotionValue<string>;
  scale: MotionValue<number>;
}

const Curtains = ({ leftX, rightX, scale }: CurtainsProps) => (
  <div className="fixed top-0 left-0 w-full h-screen z-20 pointer-events-none">
    <motion.div
      className="absolute top-0 left-0 h-full w-1/2 origin-right"
      style={{ x: leftX, scale }}
    >
      <Image
        src="/left.png"
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
        src="/right.png"
        alt="Лес правая часть"
        fill
        className="object-cover w-full h-full select-none pointer-events-none"
        draggable={false}
        priority
      />
    </motion.div>
  </div>
);

export default Curtains;
