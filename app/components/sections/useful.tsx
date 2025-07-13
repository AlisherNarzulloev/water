import { MotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Heading from "../ui/heading";

interface UsefulSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function UsefulSection({ scrollYProgress }: UsefulSectionProps) {
  //   const cloudMoveY1 = useTransform(
  //     scrollYProgress,
  //     [0.67, 0.7],
  //     ["100%", "00%"]
  //   );

  const bgMoveY = useTransform(scrollYProgress, [0.6, 0.65], ["100%", "0%"]);

  const bgOpacity = useTransform(
    scrollYProgress,
    [0.67, 0.7, 0.72, 0.75],
    [0, 1, 1, 0]
  );

  const moveTextY = useTransform(
    scrollYProgress,
    [0.67, 0.7, 0.72, 0.75],
    ["100%", "0%", "0%", "-100%"]
  );

  const moveGirlY = useTransform(scrollYProgress, [0.68, 0.7], ["100%", "0%"]);
  const moveGirlX = useTransform(
    scrollYProgress,
    [0.72, 0.75],
    ["0%", "-100%"]
  );

  return (
    <motion.div
      style={{ opacity: bgOpacity }}
      className="h-[200vh] fixed top-0 left-0"
    >
      {/* <motion.div
        style={{ y: cloudMoveY1 }}
        className="fixed top-0 left-0 w-full h-screen"
      >
        <Image
          src={"/cloud8.webp"}
          width={100}
          height={100}
          alt="cloud4"
          className="w-full h-screen object-cover"
          unoptimized
        />
      </motion.div> */}
      <motion.div
        style={{ y: bgMoveY, opacity: bgOpacity }}
        className="fixed top-0 left-0 w-full h-screen z-10"
      >
        <Image
          src={"/bg-cloud.webp"}
          width={100}
          height={100}
          alt="cloud4"
          className="w-full h-screen object-cover object-center"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ opacity: bgOpacity, y: moveGirlY, x: moveGirlX }}
        className="fixed top-0 -left-[27%] w-full h-screen z-20"
      >
        <Image
          src={"/poleznaya_girl.webp"}
          width={100}
          height={100}
          alt="cloud4"
          className="w-full h-screen object-contain object-center"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ y: moveTextY }}
        className="relative left-[2.5vw] w-full h-screen z-10 mt-8"
      >
        <Heading className="!text-[17vw]">ПОЛЕЗНАЯ</Heading>
      </motion.div>
      <motion.div
        style={{ y: moveTextY }}
        className="text-right backdrop-blur-[6px] rounded-2xl fixed bottom-0 top-1/2 -translate-y-1/2 h-fit z-20 p-8 right-4 max-w-1/2 text-white"
      >
        <p className="text-lg xl:text-2xl 2xl:text-3xl font-bold mb-4">
          TURAN — это тонкая, незаметная,но ежедневная поддержка организма Она
          содержит комплекс жизненно важных минералов, без которых наше тело не
          может функционировать полноценно.
        </p>
        <p className="text-base xl:text-lg 2xl:text-xl">
          Они не добавлены извне и не подогнаны под норму. Это натуральный
          природный состав: ровно столько, сколько нужно, чтобы поддерживать
          здоровье, не перегружая организм. Именно поэтому воду TURAN можно и
          нужно пить каждый день
        </p>
      </motion.div>
      <motion.div
        style={{ y: moveTextY }}
        className="text-right backdrop-blur-[6px] rounded-2xl fixed bottom-4 h-fit z-20 p-8 right-4 max-w-1/2 text-white"
      >
        <p className="text-base xl:text-lg 2xl:text-xl">
          Минерализация 0,2 - 0,47 г/дм³ — это физиологическая норма, при
          которой вода не только утоляет жажду, но и работает на вас: помогает
          клеткам, сосудам, нервной системе, костям, обмену веществ
        </p>
      </motion.div>
    </motion.div>
  );
}
