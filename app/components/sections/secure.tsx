import { MotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Heading from "../ui/heading";

interface SecureSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function SecureSection({ scrollYProgress }: SecureSectionProps) {
  //   const cloudMoveY1 = useTransform(
  //     scrollYProgress,
  //     [0.67, 0.7],
  //     ["100%", "00%"]
  //   );

  const bgMoveY = useTransform(scrollYProgress, [0.74, 0.75], ["100%", "0%"]);

  const bgOpacity = useTransform(
    scrollYProgress,
    [0.75, 0.78, 0.82, 0.85],
    [0, 1, 1, 0]
  );

  const moveTextY = useTransform(
    scrollYProgress,
    [0.74, 0.76, 0.8, 0.84],
    ["100%", "0%", "0%", "-100%"]
  );

  const moveGuyY = useTransform(scrollYProgress, [0.71, 0.73], ["100%", "0%"]);
  const moveGuyX = useTransform(
    scrollYProgress,
    [0.74, 0.76, 0.8, 0.84],
    ["-100%", "0%", "0%", "-100%"]
  );

  return (
    <motion.div
      style={{ opacity: bgOpacity }}
      className="h-[200vh] fixed top-0 left-0"
    >
      <motion.div
        style={{ y: bgMoveY, opacity: bgOpacity }}
        className="fixed  top-0 left-0 w-full h-screen z-10"
      >
        <Image
          src={"/bez_back.webp"}
          width={100}
          height={100}
          alt="cloud4"
          className="w-full h-screen object-cover object-center"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ opacity: bgOpacity, y: moveGuyY, x: moveGuyX }}
        className="fixed top-0 left-0 w-full h-screen z-10"
      >
        <Image
          src={"/bez_guy.webp"}
          width={100}
          height={100}
          alt="cloud4"
          className="w-full h-screen object-cover object-center"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ opacity: bgOpacity }}
        className="fixed top-0 left-0 w-full h-screen z-20 scale-125"
      >
        <Image
          src={"/bez_table.webp"}
          width={100}
          height={100}
          alt="cloud4"
          className="w-full h-screen object-cover object-center"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ y: moveTextY }}
        className="relative left-[2.5vw] w-full h-screen z-10 mt-8"
      >
        <Heading className="!text-[13.5vw]">БЕЗОПАСНАЯ</Heading>
      </motion.div>
      <motion.div
        style={{ y: moveTextY }}
        className="text-left backdrop-blur-[6px] rounded-2xl fixed bottom-0 top-1/3  h-fit z-20 p-8 left-8 max-w-1/2 text-white"
      >
        <p className="text-lg xl:text-2xl 2xl:text-3xl font-bold mb-4">
          Вода TURAN не просто «соответствует нормам». Она подтверждает свою
          чистоту и стабильность каждый день, каждый месяц, каждый год.
        </p>
      </motion.div>
      <motion.div
        style={{ y: moveTextY }}
        className="text-right backdrop-blur-[6px] rounded-2xl fixed bottom-4 h-fit z-20 p-8 right-8 max-w-1/2 text-white"
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
