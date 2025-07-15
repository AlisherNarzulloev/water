import { MotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Heading from "../ui/heading";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";

interface SecureSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function SecureSection({ scrollYProgress }: SecureSectionProps) {
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

  useAutoScrollDown(scrollYProgress, 0.72, 0.8, 11);

  return (
    <motion.div
      style={{ opacity: bgOpacity }}
      className="h-[200vh] relative top-0 left-0 p-8"
    >
      <motion.div
        style={{ y: bgMoveY, opacity: bgOpacity }}
        className="fixed  top-0 left-0 w-full h-screen z-10"
      >
        <Image
          src={"/secure/bez_back.webp"}
          width={100}
          height={100}
          alt="bg"
          className="w-full h-screen object-cover object-center"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ opacity: bgOpacity, y: moveGuyY, x: moveGuyX }}
        className="fixed top-0 left-0 w-full h-screen z-10"
      >
        <Image
          src={"/secure/bez_guy.webp"}
          width={100}
          height={100}
          alt="guy"
          className="w-full h-screen object-cover object-center"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ opacity: bgOpacity }}
        className="fixed top-0 left-0 w-full h-screen z-20 scale-125"
      >
        <Image
          src={"/secure/bez_table.webp"}
          width={100}
          height={100}
          alt="table"
          className="w-full h-screen object-cover object-center"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ y: moveTextY }}
        className="fixed left-[2.5vw] w-full z-10 top-16"
      >
        <Heading className="!text-[13.5vw]">БЕЗОПАСНАЯ</Heading>
      </motion.div>
      <motion.div
        style={{ y: moveTextY }}
        className="text-left  fixed bottom-0 top-1/3 z-20 left-8 max-w-1/2 text-white"
      >
        <p className="title-clamp font-bold mb-4 blur-gray">
          Вода TURAN не просто «соответствует нормам». Она подтверждает свою
          чистоту и стабильность каждый день, каждый месяц, каждый год.
        </p>
      </motion.div>
      <motion.div
        style={{ y: moveTextY }}
        className="text-center blur-gray fixed bottom-8 h-fit z-20 w-[97%] left-1/2 -translate-x-1/2 text-white"
      >
        <p className="title-clamp font-bold">
          Ежемесячный государственный контроль
        </p>
        <p className="text-clamp font-bold">
          Месторождение воды TURAN официально зарегистрировано и находится под
          надзором Комитета контроля качества МЗ РК. .Специалисты ежемесячно
          выезжают на месторождение, где производят отбор проб прямо из
          эксплуатационной скважины — до какой-либо обработки или фильтрации.
          Пробы доставляются в аккредитованные лаборатории для проведения
          полного анализа: от химического состава до микробиологической чистоты.
          Это позволяет объективно оценивать стабильность природного источника и
          гарантировать безопасность воды на самом базовом уровне
        </p>
      </motion.div>
    </motion.div>
  );
}
