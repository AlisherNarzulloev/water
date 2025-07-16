import { motion, MotionValue, useTransform } from "framer-motion";
import { ScrollStep } from "../../ui/scroll-step";
import { createScrollBlocks } from "@/app/utils/createScrollBlock";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";

interface WaterSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function WaterSection({ scrollYProgress }: WaterSectionProps) {
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.22, 0.27, 0.29],
    [0, 1, 1, 0]
  );

  useAutoScrollDown(scrollYProgress, 0.2, 0.22, 3.5);
  useAutoScrollDown(scrollYProgress, 0.23, 0.25, 4.2);

  const blocks = createScrollBlocks(0.2, 0.02, [
    {
      left: (
        <div className="text-white blur-blue p-4 leading-tight">
          <p className="title-clamp">
            TURAN — это вода, которая сохраняет всё, чем её наделила природа
          </p>
          <p className="text-clamp">
            Её уникальность — в абсолютной чистоте, поэтому она не требует
            глубоких вмешательств. В отличие от большинства бутилированной воды,
            TURAN не подвергается химическим манипуляциям, не проходит осмос
            (так как он вместе с обеззараживанием «убивает» и все полезные
            свойства воды), не обременена искусственной минерализацией. Её
            формула создана природой и подтверждена наукой
          </p>
        </div>
      ),
      right: (
        <p className="text-white text-clamp blur-blue p-4 leading-tight">
          TURAN — вода, которую не создают, а бережно сохраняют. Без осмоса. Без
          химии. Без добавок. Только механическая очистка и природная формула,
          нетронутая временем. TURAN — вода, которую не создают, а бережно
          сохраняют. Без осмоса. Без химии. Без добавок. Только механическая
          очистка и природная формула, нетронутая временем.
        </p>
      ),
      reverse: true,
    },
    {
      left: (
        <div className="text-white blur-blue p-4 leading-tight">
          <p className="text-xl xl:text-2xl 1xl:text-4xl font-bold mb-2">
            Весь путь от скважины до бутылки устроен так, чтобы сохранить
            природную формулу воды. TURAN проходит только две стадии обработки —
            и обе являются механическими, то есть не затрагивают её минеральный
            состав
          </p>
        </div>
      ),
      right: (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 2xl:gap-8 text-white leading-tight">
          <div className="blur-blue text-center">
            <p className="title-clamp font-bold mb-2">
              Дисковая фильтрация AZUD
            </p>
            <p className="text-clamp">
              Удаляет крупные частицы: песок, ил, органические фрагменты и
              механические примеси. Это первая и самая щадящая ступень очистки —
              подобная природной фильтрации, как если бы вода проходила через
              камни и песок.
            </p>
          </div>
          <div className="blur-blue text-center">
            <p className="title-clamp font-bold mb-2">
              Микрофильтрация PALL (0,45 микрон)
            </p>
            <p className="text-clamp">
              На этой стадии устраняются мельчайшие загрязнения: бактерии,
              грибки, микроорганизмы и тонкодисперсные частицы. Вода становится
              кристально чистой — не теряя при этом своих природных свойств.
            </p>
          </div>
          <div className="blur-blue text-center">
            <p className="title-clamp font-bold mb-2">Финальный штрих — озон</p>
            <p className="text-clamp">
              Для микробиологической безопасности воду обрабатывают озоном —
              натуральным окислителем, который уничтожает микробы, не затрагивая
              минералы. Он распадается на кислород, оставляя только вкус
              свежести и лёгкость.
            </p>
          </div>
        </div>
      ),
    },
  ]);

  return (
    <section className="relative w-full h-screen">
      <div className="fixed z-20 inset-0 p-20 2xl:px-40 h-full w-full">
        <motion.h1
          style={{ opacity: titleOpacity }}
          className="text-[20vw] font-extrabold text-white leading-none text-center fixed -top-10 z-10 left-1/2 -translate-x-1/2"
        >
          ЖИВАЯ
        </motion.h1>
        <div className="relative h-full w-full">
          <ScrollStep
            key={0}
            progress={scrollYProgress}
            range={blocks[0].range}
            left={blocks[0].left}
            right={blocks[0].right}
            leftAlign="center"
            rightAlign="bottom"
          />
          <ScrollStep
            key={1}
            progress={scrollYProgress}
            range={blocks[1].range}
            left={blocks[1].left}
            right={blocks[1].right}
            leftAlign="center"
            rightAlign="bottom"
            width="full"
          />
        </div>
      </div>
    </section>
  );
}
