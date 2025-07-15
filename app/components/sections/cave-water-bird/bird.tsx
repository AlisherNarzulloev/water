import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

interface BirdSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function BirdSection({ scrollYProgress }: BirdSectionProps) {
  const opacity = useTransform(
    scrollYProgress,
    [0.45, 0.47, 0.52, 0.55],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0.45, 0.5], [100, 0]);

  const moveBirdY = useTransform(scrollYProgress, [0.45, 0.47], ["200%", "0%"]);

  useAutoScrollDown(scrollYProgress, 0.4, 0.48, 6.7);

  return (
    <div className="h-1/3 relative w-full">
      <motion.h1
        style={{ opacity, y }}
        className="fixed -top-8 xl:top-10 left-1/2 xl:-mt-24 -translate-x-1/2 text-white text-[85px] xl:text-[8.5vw] font-extrabold tracking-widest select-none pointer-events-none leading-none z-0"
      >
        СБАЛАНСИРОВАННАЯ
      </motion.h1>
      <motion.div
        style={{ y: moveBirdY, opacity }}
        className="fixed bottom-0 z-20 w-full"
      >
        <Image
          width={100}
          height={100}
          src={"/cave-water-bird/bird.webp"}
          className="object-cover h-screen w-full"
          alt="bird"
          unoptimized
        />
      </motion.div>

      <motion.p
        style={{ opacity, y }}
        className="self-end max-w-xl 2xl:max-w-2/5 font-bold text-right fixed top-1/2 -translate-y-1/2 right-8 z-30 blur-blue text-white text-clamp"
      >
        pH — это показатель кислотно-щелочного равновесия. Вода с pH 7,5 мягко
        поддерживает внутренний баланс, не вызывая ни закисления, ни
        ощелачивания. Она легко усваивается, не перегружает организм,
        способствует нормализации обменных процессов и помогает телу сохранять
        внутреннюю стабильность, особенно при умственных и физических нагрузках,
        стрессах или нарушениях питания
      </motion.p>
      <motion.p
        style={{ opacity, y }}
        className="max-w-2xl 2xl:max-w-2/5 self-start text-left fixed bottom-16 left-8 z-30 blur-blue font-bold text-white text-clamp"
      >
        Такой уровень кислотно-щелочного баланса максимально близок к внутренней
        среде человека, особенно к плазме крови и лимфе. Это делает воду TURAN
        не просто утоляющей жажду, а физиологически подходящей для ежедневного
        употребления.
      </motion.p>
    </div>
  );
}
