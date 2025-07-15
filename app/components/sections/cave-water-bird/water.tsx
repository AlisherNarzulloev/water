import { motion, MotionValue, useTransform } from "framer-motion";
import Heading from "../../ui/heading";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";

interface WaterSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function WaterSection({ scrollYProgress }: WaterSectionProps) {
  const opacity = useTransform(scrollYProgress, [0.35, 0.38, 0.45], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0.35, 0.38, 0.45], [100, 0, -100]);

  useAutoScrollDown(scrollYProgress, 0.3, 0.4, 5.5);

  return (
    <div className="h-1/3 relative w-full">
      <motion.div
        style={{ opacity, y }}
        className="fixed top-8 xl:top-0 1xl:top-10 2xl:-top-4 z-20 flex flex-col justify-between h-full pb-12 w-full items-center px-8"
      >
        <Heading>ЖИВАЯ</Heading>
      </motion.div>
      <motion.div
        style={{ opacity, y }}
        className="fixed top-1/2 -translate-y-1/2 left-8 self-start max-w-3/5 xl:max-w-3/5 text-left font-bold blur-blue text-white mt-20"
      >
        <p className="title-clamp">
          TURAN — это вода, которая сохраняет всё, чем её наделила природа
        </p>
        <p className="text-clamp mt-4">
          Её уникальность — в абсолютной чистоте, поэтому она не требует
          глубоких вмешательств. В отличие от большинства бутилированной воды,
          TURAN не подвергается химическим манипуляциям, не проходит осмос (так
          как он вместе с обеззараживанием «убивает» и все полезные свойства
          воды), не обременена искусственной минерализацией. Её формула создана
          природой и подтверждена наукой
        </p>
      </motion.div>
      <motion.p
        style={{ opacity, y }}
        className="fixed bottom-8 right-8 max-w-2xl text-clamp font-bold self-end text-right blur-blue text-white"
      >
        TURAN — вода, которую не создают, а бережно сохраняют. Без осмоса. Без
        химии. Без добавок. Только механическая очистка и природная формула,
        нетронутая временем.
      </motion.p>
    </div>
  );
}
