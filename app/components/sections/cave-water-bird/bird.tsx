import { motion, MotionValue, useTransform } from "framer-motion";
import { ScrollStep } from "../../ui/scroll-step";
import { createScrollBlocks } from "@/app/utils/createScrollBlock";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import Image from "next/image";

interface BirdSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function BirdSection({ scrollYProgress }: BirdSectionProps) {
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.3, 0.45, 0.47],
    [0, 1, 1, 0]
  );
  const imageOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.3, 0.45, 0.47],
    [0, 1, 1, 0]
  );

  useAutoScrollDown(scrollYProgress, 0.28, 0.31, 4.9);
  useAutoScrollDown(scrollYProgress, 0.31, 0.37, 5.7);

  const blocks = createScrollBlocks(0.27, 0.03, [
    {
      left: (
        <p className="text-white text-clamp blur-blue p-4 leading-tight">
          pH — это показатель кислотно-щелочного равновесия. Вода с pH 7,5 мягко
          поддерживает внутренний баланс, не вызывая ни закисления, ни
          ощелачивания. Она легко усваивается, не перегружает организм,
          способствует нормализации обменных процессов и помогает телу сохранять
          внутреннюю стабильность, особенно при умственных и физических
          нагрузках, стрессах или нарушениях питания
        </p>
      ),
      right: (
        <p className="text-white text-clamp blur-blue p-4 leading-tight">
          Такой уровень кислотно-щелочного баланса максимально близок к
          внутренней среде человека, особенно к плазме крови и лимфе.Это делает
          воду TURAN не просто утоляющей жажду, а физиологически подходящей для
          ежедневного употребления.
        </p>
      ),
    },
    {
      left: (
        <p className="text-white text-clamp blur-blue p-4 leading-tight">
          pH — это показатель кислотно-щелочного равновесия. Вода с pH 7,5 мягко
          поддерживает внутренний баланс, не вызывая ни закисления, ни
          ощелачивания. Она легко усваивается, не перегружает организм,
          способствует нормализации обменных процессов и помогает телу сохранять
          внутреннюю стабильность, особенно при умственных и физических
          нагрузках, стрессах или нарушениях питания
        </p>
      ),
      right: (
        <p className="text-white text-clamp blur-blue p-4 leading-tight">
          Многие производители стремятся добиться «идеального» pH с помощью
          химической коррекции — добавляя соли или изменяя структуру воды. TURAN
          не нуждается в этом. Её сбалансированный уровень pH — естественный
          результат прохождения через глубинные геологические породы,
          сформированные миллионы лет назад. Природа сама отрегулировала этот
          баланс — мы просто бережно сохраняем его.
        </p>
      ),
      reverse: true,
    },
  ]);

  return (
    <section className="relative w-full h-screen">
      <div className="fixed z-20 inset-0 p-20 2xl:px-40 h-full w-full">
        <motion.h1
          style={{ opacity: titleOpacity }}
          className="text-[9vw] font-extrabold text-white leading-none text-center fixed top-10 z-10  left-1/2 -translate-x-1/2"
        >
          СБАЛАНСИРОВАННАЯ
        </motion.h1>

        <motion.div
          style={{ opacity: imageOpacity }}
          className="absolute inset-0 -z-10 left-1/2 -translate-x-1/2"
        >
          <Image
            fill
            src="/cave-water-bird/bird.webp"
            alt="bird"
            className="object-cover w-screen"
            unoptimized
          />
        </motion.div>

        <div className="relative h-full w-full">
          <ScrollStep
            key={0}
            progress={scrollYProgress}
            range={blocks[0].range}
            left={blocks[0].right}
            right={blocks[0].left}
            leftAlign="bottom"
            rightAlign="center"
          />
          <ScrollStep
            key={1}
            progress={scrollYProgress}
            range={blocks[1].range}
            left={blocks[1].right}
            right={blocks[1].left}
            leftAlign="bottom"
            rightAlign="center"
          />
        </div>
      </div>
    </section>
  );
}
