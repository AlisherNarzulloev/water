import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import { useState } from "react";

interface WaterSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function WaterSection({ scrollYProgress }: WaterSectionProps) {
  const [showBlock1, setShowBlock1] = useState(false);
  const [showBlock2, setShowBlock2] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowBlock1(v > 0.35 && v < 0.4);
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowBlock2(v > 0.4 && v < 0.45);
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.35, 0.36, 0.43, 0.45],
    [0, 1, 1, 0]
  );

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.35, 0.36, 0.4, 0.41],
    [0, 1, 1, 0]
  );
  const textY1 = useTransform(
    scrollYProgress,
    [0.35, 0.36, 0.39, 0.4],
    [100, 0, 0, -100]
  );

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.39, 0.41, 0.44, 0.45],
    [0, 1, 1, 0]
  );
  const textY2 = useTransform(
    scrollYProgress,
    [0.39, 0.41, 0.44, 0.45],
    [100, 0, 0, -100]
  );

  useAutoScrollDown(scrollYProgress, 0.34, 0.38, 5.2);
  useAutoScrollDown(scrollYProgress, 0.38, 0.43, 5.8);

  return (
    <div className="h-full relative w-full">
      <div className="fixed bottom-10 1xl:bottom-10 h-screen w-full flex flex-col justify-between px-20">
        <motion.div
          style={{ opacity: opacity }}
          className="text-center w-full -translate-y-4 1xl:-translate-y-16 mx-auto "
        >
          <p className="text-white text-[22vw] font-extrabold tracking-widest select-none pointer-events-none leading-none">
            ЖИВАЯ
          </p>
        </motion.div>

        <AnimatePresence>
          {showBlock1 && (
            <motion.div
              style={{ opacity: opacityText1, y: textY1 }}
              className="flex flex-col items-end h-h-full gap-8 justify-between w-full"
            >
              <div className="self-start mt-4 max-w-2/3 xl:max-w-3/4 text-left blur-blue text-white">
                <p className="title-clamp">
                  TURAN — это вода, которая сохраняет всё, чем её наделила
                  природа
                </p>
                <p className="text-clamp mt-4">
                  Её уникальность — в абсолютной чистоте, поэтому она не требует
                  глубоких вмешательств. В отличие от большинства бутилированной
                  воды, TURAN не подвергается химическим манипуляциям, не
                  проходит осмос (так как он вместе с обеззараживанием «убивает»
                  и все полезные свойства воды), не обременена искусственной
                  минерализацией. Её формула создана природой и подтверждена
                  наукой
                </p>
              </div>
              <p className="self-end max-w-3/5 xl:max-w-2/3 text-clamp blur-blue font-bold text-white">
                TURAN — вода, которую не создают, а бережно сохраняют. Без
                осмоса. Без химии. Без добавок. Только механическая очистка и
                природная формула, нетронутая временем.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showBlock2 && (
            <motion.div
              style={{ opacity: opacityText2, y: textY2 }}
              className="flex flex-col items-end gap-4 2xl:gap-8 justify-between w-full leading-4 1xl:leading-6 2xl:leading-7"
            >
              <p className="font-bold text-3xl blur-blue text-white">
                Весь путь от скважины до бутылки устроен так, чтобы сохранить
                природную формулу воды. TURAN проходит только две стадии
                обработки — и обе являются механическими, то есть не затрагивают
                её минеральный состав
              </p>
              <div className="grid grid-cols-1 1xl:grid-cols-3 gap-4 2xl:gap-8 text-white">
                <div className="blur-blue text-center">
                  <p className="title-clamp font-bold mb-4">
                    Дисковая фильтрация AZUD (10 микрон)
                  </p>
                  <p className="text-clamp">
                    Удаляет крупные частицы: песок, ил, органические фрагменты и
                    механические примеси. Это первая и самая щадящая ступень
                    очистки — подобная природной фильтрации, как если бы вода
                    проходила через камни и песок.
                  </p>
                </div>
                <div className="blur-blue text-center">
                  <p className="title-clamp font-bold mb-4">
                    Микрофильтрация PALL (0,45 микрон)
                  </p>
                  <p className="text-clamp">
                    На этой стадии устраняются мельчайшие загрязнения: бактерии,
                    грибки, микроорганизмы и тонкодисперсные частицы. Вода
                    становится кристально чистой — не теряя при этом своих
                    природных свойств.
                  </p>
                </div>
                <div className="blur-blue text-center">
                  <p className="title-clamp font-bold mb-4">
                    Финальный штрих — озон
                  </p>
                  <p className="text-clamp">
                    Чтобы обеспечить идеальную микробиологическую безопасность
                    без потери природных качеств, вода обрабатывается озоном —
                    мощным и абсолютно натуральным окислителем. Озон разрушает
                    органику и нейтрализует микробы, не взаимодействуя с
                    полезными минералами. В течение нескольких минут он
                    распадается на чистый кислород, не оставляя никаких следов —
                    только лёгкий вкус свежести и ощущение бодрящей лёгкости на
                    языке.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>{" "}
    </div>
  );
}
