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

  useAutoScrollDown(scrollYProgress, 0.4, 0.48, 6.7);

  return (
    <div className="h-[200vh]">
      <motion.h1
        style={{ opacity, y }}
        className="fixed -top-8 xl:top-10 left-1/2 xl:-mt-24 -translate-x-1/2 text-white text-[85px] xl:text-[8.5vw] font-extrabold tracking-widest select-none pointer-events-none leading-none z-0"
      >
        СБАЛАНСИРОВАННАЯ
      </motion.h1>
      <Image
        width={100}
        height={100}
        src={"/bird.webp"}
        className="absolute bottom-[30rem] 1xl:bottom-[30vw] 2xl:bottom-[35vh] scale-125 xl:-bottom-44 z-10 w-full h-fit"
        alt="bird"
        unoptimized
      />
      <div className="fixed top-0 z-20 h-full pb-12 w-full px-8">
        <motion.p
          style={{ opacity, y }}
          className="self-end max-w-xl 2xl:max-w-2/5 font-bold text-right absolute top-1/2 -translate-y-1/2 right-8 z-10 p-4 backdrop-blur-md rounded-2xl text-white text-lg 2xl:text-3xl"
        >
          pH — это показатель кислотно-щелочного равновесия. Вода с pH 7,5 мягко
          поддерживает внутренний баланс, не вызывая ни закисления, ни
          ощелачивания. Она легко усваивается, не перегружает организм,
          способствует нормализации обменных процессов и помогает телу сохранять
          внутреннюю стабильность, особенно при умственных и физических
          нагрузках, стрессах или нарушениях питания
        </motion.p>
        <motion.p
          style={{ opacity, y }}
          className="max-w-2xl 2xl:max-w-2/5 self-start text-left absolute bottom-16 left-8 z-10 p-4 backdrop-blur-md rounded-2xl font-bold text-white text-lg 2xl:text-3xl"
        >
          Такой уровень кислотно-щелочного баланса максимально близок к
          внутренней среде человека, особенно к плазме крови и лимфе. Это делает
          воду TURAN не просто утоляющей жажду, а физиологически подходящей для
          ежедневного употребления.
        </motion.p>
      </div>
    </div>
  );
}
