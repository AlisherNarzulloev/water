import { motion, MotionValue, useTransform } from "framer-motion";
import Heading from "../../ui/heading";

interface WaterSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function WaterSection({ scrollYProgress }: WaterSectionProps) {
  const opacity = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.6, 0.65],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.6, 0.65],
    [100, 0, 0, -100]
  );

  return (
    <div className="h-screen">
      <motion.div
        style={{ opacity, y }}
        className="fixed top-0 z-20 flex flex-col justify-between h-full pb-12 w-full items-center px-8"
      >
        <Heading>ЖИВАЯ</Heading>

        <div className="self-start max-w-2xl text-left font-bold p-4 backdrop-blur-md rounded-2xl text-white -mt-24 xl:-mt-0">
          <p className="text-base xl:text-3xl">
            <span className="text-2xl xl:text-5xl">TURAN</span> — это вода,
            которая сохраняет всё, чем её наделила природа
          </p>
          <p>
            Её уникальность — в абсолютной чистоте, поэтому она не требует
            глубоких вмешательств. В отличие от большинства бутилированной воды,
            TURAN не подвергается химическим манипуляциям, не проходит осмос
            (так как он вместе с обеззараживанием «убивает» и все полезные
            свойства воды), не обременена искусственной минерализацией. Её
            формула создана природой и подтверждена наукой
          </p>
        </div>
        <p className="max-w-2xl text-lg font-bold self-end text-right p-4 backdrop-blur-md rounded-2xl text-white">
          TURAN — вода, которую не создают, а бережно сохраняют. Без осмоса. Без
          химии. Без добавок. Только механическая очистка и природная формула,
          нетронутая временем.
        </p>
      </motion.div>
    </div>
  );
}
