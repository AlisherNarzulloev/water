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
      <div className="fixed z-20 inset-0 p-20 h-full w-full">
        <motion.h1
          style={{ opacity: titleOpacity }}
          className="fixed left-1/2 top-10 -translate-x-1/2 w-full px-20"
        >
          <div className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1283 228"
            >
              <path
                fill="#fff"
                d="m140.695 145.56-22.328-22.757L56.107 228H.288L86.164 91.458 6.299.001h54.96l79.436 93.174V.001h44.225v93.174L264.355.001h54.961l-79.865 91.457L325.327 228h-55.819l-62.26-105.197-22.328 24.045V228h-44.225v-82.44Zm353.676-65.266L378.439 228h-30.915V.43h45.084v147.706L508.111.43h31.344V228h-45.084V80.294ZM636.038 186.35h88.882c14.598 0 24.331-2.147 29.197-6.44 6.584-5.153 9.876-13.168 9.876-24.045 0-9.733-2.719-16.603-8.158-20.611-6.012-5.152-15.172-7.728-27.48-7.728h-92.317v58.824Zm0-100.474h83.729c10.019 0 17.175-1.431 21.469-4.294 5.725-3.721 8.587-10.018 8.587-18.892 0-7.73-2.862-13.311-8.587-16.746-5.153-2.576-11.164-3.864-18.034-3.864h-87.164v43.796ZM590.524.43h124.949c30.629 0 52.384 6.44 65.266 19.322 9.732 9.733 14.598 22.328 14.598 37.785 0 18.034-6.297 32.347-18.892 42.938 10.591 4.294 19.036 11.736 25.333 22.328 5.725 10.305 8.588 21.755 8.588 34.35 0 20.324-6.441 36.926-19.322 49.808C777.304 220.987 756.98 228 730.072 228H590.524V.43Zm346.099 66.983-30.057 60.971h60.543l-30.486-60.971ZM1016.49 228l-27.913-56.248H885.098L858.047 228h-49.808L919.877.43h33.921L1066.29 228h-49.8Zm163.01-91.028L1122.83 228h-53.25l60.12-94.892c-15.75-3.435-28.49-10.019-38.22-19.752-10.88-10.877-16.32-25.762-16.32-44.655 0-20.038 5.87-35.925 17.61-47.66C1106.51 7.3 1127.83.43 1156.75.43h126.23V228h-45.08v-91.028h-58.4Zm58.4-94.034h-85.45c-10.02 0-17.46 1.86-22.33 5.582-6.01 3.721-9.01 10.162-9.01 19.322 0 8.588 2.72 15.171 8.16 19.752 5.43 4.58 14.02 6.87 25.76 6.87h82.87V42.938Z"
              />
            </svg>
          </div>
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
